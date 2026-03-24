// lib/auth.ts
import CredentialsProvider from "next-auth/providers/credentials"
import { Client } from "ldapts"
import { PrismaClient } from "../../prisma/generated/prisma"

// Собственный тип, совместимый с NextAuth (расширенный)
export interface AuthUser {
    id: string;
    name: string;
    email: string;
    username: string;
    role: string;
}

export interface AuthToken {
    id?: string;
    username?: string;
    role?: string;
    [key: string]: string | undefined; // ← Исправлено: any → string | undefined
}

export interface AuthSession {
    user: AuthUser;
}

export interface AuthOptions {
    providers: Array<unknown>; // ← Исправлено: any → unknown
    callbacks?: {
        jwt?: (params: {
            token: AuthToken;
            user?: AuthUser;
            account?: unknown; // ← Исправлено: any → unknown
            profile?: unknown; // ← Исправлено: any → unknown
            isNewUser?: boolean;
        }) => AuthToken;
        session?: (params: {
            session: AuthSession;
            token: AuthToken;
            user?: unknown; // ← Исправлено: any → unknown
        }) => AuthSession;
    };
    session?: {
        strategy?: "jwt" | "database";
        maxAge?: number;
    };
    pages?: {
        signIn?: string;
        signOut?: string;
        error?: string;
        verifyRequest?: string;
        newUser?: string;
    };
    secret?: string;
}

// Singleton Prisma клиент
let prismaInstance: PrismaClient | null = null;

const getPrismaClient = (): PrismaClient => {
    if (!prismaInstance) {
        prismaInstance = new PrismaClient();
    }
    return prismaInstance;
};

// LDAP: проверка логина/пароля через AD и получение displayName
async function ldapAuthenticate(username: string, password: string): Promise<{ displayName: string } | null> {
    const ldapUrl = process.env.LDAP_SERVER;
    if (!ldapUrl) {
        console.error("[LDAP] LDAP_SERVER не задан в .env");
        return null;
    }

    const client = new Client({ url: ldapUrl, timeout: 5000, connectTimeout: 5000 });
    let bound = false;

    try {
        const upn = `${username}@gff-rf.ru`;
        console.log(`[LDAP] Bind: ${upn} → ${ldapUrl}`);
        await client.bind(upn, password);
        bound = true;

        const { searchEntries } = await client.search("DC=gff-rf,DC=ru", {
            filter: `(sAMAccountName=${username})`,
            scope: "sub",
            attributes: ["displayName"],
        });

        const displayName = searchEntries[0]?.displayName as string | undefined;
        console.log(`[LDAP] OK — displayName: ${displayName}`);
        return { displayName: displayName || username };
    } catch (err) {
        console.error("[LDAP] Ошибка:", err);
        return null;
    } finally {
        if (bound) await client.unbind();
    }
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jurtsev.m" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: { username: string; password: string } | null): Promise<AuthUser | null> {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error("Логин и пароль обязательны")
                }

                const prismaClient = getPrismaClient();

                try {
                    // Проверяем через AD
                    const adUser = await ldapAuthenticate(credentials.username, credentials.password);

                    if (!adUser) {
                        throw new Error("Неверный логин или пароль")
                    }

                    // Ищем пользователя в локальной БД (для роли)
                    let dbUser = await prismaClient.users.findUnique({
                        where: { username: credentials.username },
                        select: { id: true, username: true, name: true, role: { select: { role: true } } },
                    });

                    // Если пользователь первый раз — создаём запись с ролью user
                    if (!dbUser) {
                        dbUser = await prismaClient.users.create({
                            data: {
                                username: credentials.username,
                                password: "",          // пароль не используется
                                name: adUser.displayName,
                                role_id: 2n,           // user
                                status_id: 1n,
                            },
                            select: { id: true, username: true, name: true, role: { select: { role: true } } },
                        });
                    }

                    await prismaClient.users.update({
                        where: { id: dbUser.id },
                        data: { last_activity: new Date(), status_id: 1 },
                    });

                    return {
                        id: dbUser.id.toString(),
                        name: dbUser.name,
                        email: dbUser.username,
                        username: dbUser.username,
                        role: dbUser.role.role,
                    }
                } catch (error) {
                    console.error("Ошибка авторизации:", error)
                    throw new Error("Неверный логин или пароль")
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: AuthToken; user?: AuthUser }): Promise<AuthToken> {
            if (user) {
                token.id = user.id
                token.role = user.role
                token.username = user.username
            }
            return token
        },
        async session({ session, token }: { session: AuthSession; token: AuthToken }): Promise<AuthSession> {
            if (session.user && token) {
                session.user.id = token.id as string
                session.user.role = token.role as string
                session.user.username = token.username as string
            }
            return session
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60, // 1 час
    },
    pages: {
        signIn: "/",
    },
    secret: process.env.NEXTAUTH_SECRET,
}