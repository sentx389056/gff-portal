// lib/auth.ts
import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"
import type { JWT } from "next-auth/jwt"
import { Client } from "ldapts"
import { PrismaClient } from "../../prisma/generated/prisma"

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

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jurtsev.m" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error("Логин и пароль обязательны")
                }

                const prismaClient = getPrismaClient();

                try {
                    const adUser = await ldapAuthenticate(credentials.username, credentials.password);

                    if (!adUser) {
                        throw new Error("Неверный логин или пароль")
                    }

                    let dbUser = await prismaClient.users.findUnique({
                        where: { username: credentials.username },
                        select: { id: true, username: true, name: true, role: { select: { role: true } } },
                    });

                    if (!dbUser) {
                        dbUser = await prismaClient.users.create({
                            data: {
                                username: credentials.username,
                                password: "",
                                name: adUser.displayName,
                                role_id: 2n,
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
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.role = (user as { role?: string }).role
                token.username = (user as { username?: string }).username
            }
            return token
        },
        async session({ session, token }: { session: import("next-auth").Session; token: JWT }) {
            if (session.user) {
                (session.user as { id?: string }).id = token.id as string
                ;(session.user as { role?: string }).role = token.role as string
                ;(session.user as { username?: string }).username = token.username as string
            }
            return session
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60,
    },
    pages: {
        signIn: "/auth",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

// Экспортируем типы для совместимости с остальным кодом
export type AuthUser = {
    id: string;
    name: string;
    email: string;
    username: string;
    role: string;
}

export type AuthToken = JWT & {
    id?: string;
    username?: string;
    role?: string;
}

export type AuthSession = import("next-auth").Session & {
    user: AuthUser;
}

export type AuthOptions = NextAuthOptions;
