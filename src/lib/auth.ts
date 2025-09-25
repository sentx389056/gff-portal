// lib/auth.ts
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
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

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: { username: string; password: string } | null): Promise<AuthUser | null> {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error("Логин и пароль обязательны")
                }

                const prismaClient = getPrismaClient();

                try {
                    const user = await prismaClient.users.findUnique({
                        where: { username: credentials.username },
                        select: {
                            id: true,
                            username: true,
                            name: true,
                            password: true,
                            role: { select: { role: true } },
                        },
                    })

                    if (!user) {
                        throw new Error("Неверный логин или пароль")
                    }

                    const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

                    if (!isPasswordValid) {
                        throw new Error("Неверный логин или пароль")
                    }

                    // Обновляем статус на "active" (id: 1)
                    await prismaClient.users.update({
                        where: { id: user.id },
                        data: {
                            last_activity: new Date(),
                            status_id: 1,
                        },
                    })

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.username,
                        username: user.username,
                        role: user.role.role,
                    }
                } catch (error) {
                    console.error("Ошибка авторизации:", error)
                    throw new Error("Неверный логин или пароль")
                } // ← Убрали finally - не закрываем соединение
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