// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import bcrypt from "bcrypt"
import { PrismaClient } from "../../../../prisma/generated/prisma"
import { logEvent, LogAction, LogEntity } from "@/lib/logger"
import type { Session } from "next-auth"
import {authOptions} from "@/lib/auth";

const prisma = new PrismaClient()

// Типы для запросов
interface UserCreateRequest {
    username: string;
    password: string;
    name: string;
    role_id: string;
    status_id: string;
}

interface UserListItem {
    id: string;
    username: string;
    name: string;
    role_id: string;
    status_id: string;
    role: { role: string };
    status: { status: string };
    last_activity: string;
    created_at: string;
}

// Получение userId и username из NextAuth
const getUserInfoFromSession = async (): Promise<{ userId: number; username: string }> => {
    try {
        const session = (await getServerSession(authOptions)) as Session | null
        if (!session?.user?.id) return { userId: 0, username: "anonymous" }
        return { userId: parseInt(session.user.id), username: session.user.username || "unknown" }
    } catch {
        return { userId: 0, username: "anonymous" }
    }
}

// Упрощённая функция логирования
const createLogEvent = async (
    action: LogAction,
    entity: LogEntity,
    entityId: number,
    userId: number,
    username: string,
    details: Record<string, unknown> | null
) => {
    try {
        await logEvent({
            action,
            entity,
            entityId: BigInt(entityId),
            userId: BigInt(userId),
            username,
            details: details || null,
        })
    } catch (e) {
        console.error("Ошибка при создании лог-события:", e)
    }
}

// Проверка прав администратора
const requireAdmin = async (): Promise<Session['user'] | null> => {
    const session = await getServerSession(authOptions) as Session | null;
    if (!session || session.user.role !== "admin") {
        throw new Error("Доступ запрещён");
    }
    return session.user;
};

export async function GET(): Promise<NextResponse<UserListItem[] | { error: string }>> {
    try {
        await requireAdmin();

        const users = await prisma.users.findMany({
            select: {
                id: true,
                username: true,
                name: true,
                role_id: true,
                status_id: true,
                role: { select: { role: true } },
                status: { select: { status: true } },
                last_activity: true,
                created_at: true,
            },
            orderBy: { created_at: "desc" },
        })

        const serializedUsers: UserListItem[] = users.map(user => ({
            id: user.id.toString(),
            username: user.username,
            name: user.name,
            role_id: user.role_id.toString(),
            status_id: user.status_id.toString(),
            role: user.role,
            status: user.status,
            last_activity: user.last_activity.toISOString(),
            created_at: user.created_at.toISOString(),
        }))

        return NextResponse.json(serializedUsers)
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error)
        if (error instanceof Error && error.message === "Доступ запрещён") {
            return NextResponse.json({ error: "Доступ запрещён" }, { status: 403 })
        }
        return NextResponse.json({ error: "Не удалось получить пользователей" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}

export async function POST(request: NextRequest): Promise<NextResponse<UserListItem | { error: string }>> {
    let body: UserCreateRequest | null = null;

    try {
        await requireAdmin();

        body = await request.json() as UserCreateRequest;
        const { username, password, name, role_id, status_id } = body;

        // Валидация
        if (!username || !password || !name) {
            return NextResponse.json({ error: "Username, password и name обязательны" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.users.create({
            data: {
                username,
                password: hashedPassword,
                name,
                role_id: parseInt(role_id),
                status_id: parseInt(status_id),
                created_at: new Date(),
                last_activity: new Date(),
            },
            select: {
                id: true,
                username: true,
                name: true,
                role_id: true,
                status_id: true,
                role: { select: { role: true } },
                status: { select: { status: true } },
                last_activity: true,
                created_at: true,
            },
        })

        const serializedUser: UserListItem = {
            id: user.id.toString(),
            username: user.username,
            name: user.name,
            role_id: user.role_id.toString(),
            status_id: user.status_id.toString(),
            role: user.role,
            status: user.status,
            last_activity: user.last_activity.toISOString(),
            created_at: user.created_at.toISOString(),
        }

        // Логируем успешное создание пользователя
        const { userId: actorId, username: actor } = await getUserInfoFromSession()
        await createLogEvent("create", "user", user.id, actorId, actor, {
            createdUsername: user.username,
            role_id: user.role_id,
            status_id: user.status_id,
        })

        return NextResponse.json(serializedUser, { status: 201 })
    } catch (error) {
        console.error("Ошибка при создании пользователя:", error)

        const { userId, username } = await getUserInfoFromSession()
        await createLogEvent("error", "user", 0, userId, username, {
            operation: "POST",
            error: error instanceof Error ? error.message : "Unknown error",
            attemptedBy: username,
            data: body,
        } as Record<string, unknown>)

        if (error instanceof Error && error.message === "Доступ запрещён") {
            return NextResponse.json({ error: "Доступ запрещён" }, { status: 403 })
        }

        return NextResponse.json({ error: "Не удалось создать пользователя" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}