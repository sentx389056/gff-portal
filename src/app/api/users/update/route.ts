// app/api/users/update/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import bcrypt from "bcrypt"
import { PrismaClient } from "../../../../../prisma/generated/prisma"
import { logEvent, LogAction, LogEntity } from "@/lib/logger"
import {Session} from "next-auth";
import {authOptions} from "@/lib/auth";

// Типы для запроса
interface UserUpdateRequest {
    id: string;
    username?: string;
    password?: string;
    name?: string;
    role_id?: string;
    status_id?: string;
}

// Типы для изменений
interface FieldChange {
    old: string | null;
    new: string;
}

interface UpdateChanges {
    username?: FieldChange;
    name?: FieldChange;
    role_id?: FieldChange;
    status_id?: FieldChange;
}

// Тип для ответа
interface UserUpdateResponse {
    id: string;
    username: string;
    name: string;
    role_id: string;
    status_id: string;
    last_activity: string;
    created_at: string;
}

const prisma = new PrismaClient()

export async function POST(request: Request): Promise<NextResponse<UserUpdateResponse | { error: string }>> {
    let requestData: UserUpdateRequest | null = null;

    try {
        const session = await getServerSession(authOptions) as Session || null;

        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ error: "Доступ запрещён" }, { status: 403 })
        }

        requestData = await request.json() as UserUpdateRequest;
        const { id, username, password, name, role_id, status_id } = requestData;

        if (!id) {
            return NextResponse.json({ error: "ID пользователя обязателен" }, { status: 400 })
        }

        const existingUser = await prisma.users.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                username: true,
                name: true,
                role_id: true,
                status_id: true,
                last_activity: true,
                created_at: true,
            }
        })

        if (!existingUser) {
            return NextResponse.json({ error: "Пользователь не найден" }, { status: 404 })
        }

        // Подготавливаем данные для обновления
        const updateData: Partial<UserUpdateRequest> = {
            last_activity: new Date(),
        };

        if (username !== undefined) updateData.username = username;
        if (name !== undefined) updateData.name = name;
        if (role_id !== undefined) updateData.role_id = parseInt(role_id);
        if (status_id !== undefined) updateData.status_id = parseInt(status_id);

        // Хешируем пароль только если он передан
        if (password !== undefined) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        // Определяем изменения для лога
        const changes: UpdateChanges = {};
        if (username !== undefined && username !== existingUser.username) {
            changes.username = {
                old: existingUser.username,
                new: username
            };
        }
        if (name !== undefined && name !== existingUser.name) {
            changes.name = {
                old: existingUser.name,
                new: name
            };
        }
        if (role_id !== undefined && parseInt(role_id) !== existingUser.role_id) {
            changes.role_id = {
                old: existingUser.role_id.toString(),
                new: role_id
            };
        }
        if (status_id !== undefined && parseInt(status_id) !== existingUser.status_id) {
            changes.status_id = {
                old: existingUser.status_id.toString(),
                new: status_id
            };
        }

        const updatedUser = await prisma.users.update({
            where: { id: parseInt(id) },
            data: updateData,
            select: {
                id: true,
                username: true,
                name: true,
                role_id: true,
                status_id: true,
                last_activity: true,
                created_at: true,
            },
        })

        const serializedUser: UserUpdateResponse = {
            id: updatedUser.id.toString(),
            username: updatedUser.username,
            name: updatedUser.name,
            role_id: updatedUser.role_id.toString(),
            status_id: updatedUser.status_id.toString(),
            last_activity: updatedUser.last_activity.toISOString(),
            created_at: updatedUser.created_at.toISOString(),
        }

        // Логирование изменений
        await logEvent({
            action: 'update' as LogAction,
            entity: 'user' as LogEntity,
            entityId: BigInt(updatedUser.id),
            userId: BigInt(parseInt(session.user.id || "0")),
            details: {
                changes: Object.keys(changes).length > 0 ? changes : null,
                oldData: {
                    username: existingUser.username,
                    name: existingUser.name,
                    role_id: existingUser.role_id.toString(),
                    status_id: existingUser.status_id.toString(),
                    last_activity: existingUser.last_activity.toISOString(),
                },
                updatedBy: session.user.name || session.user.username || 'unknown'
            } as Record<string, unknown>
        })

        return NextResponse.json(serializedUser)
    } catch (error) {
        console.error("Ошибка при обновлении пользователя:", error)

        const session = await getServerSession(authOptions);
        await logEvent({
            action: 'error' as LogAction,
            entity: 'user' as LogEntity,
            entityId: BigInt(requestData?.id ? parseInt(requestData.id) : 0),
            userId: BigInt(parseInt(session?.user?.id || "0")),
            details: {
                operation: 'UPDATE_USER',
                error: error instanceof Error ? error.message : 'Unknown error',
                attemptedBy: session?.user?.name || session?.user?.username || 'unknown',
                data: requestData
            } as Record<string, unknown>
        })

        if (error instanceof Error && error.message === "Доступ запрещён") {
            return NextResponse.json({ error: "Доступ запрещён" }, { status: 403 })
        }

        return NextResponse.json({ error: "Не удалось обновить пользователя" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}