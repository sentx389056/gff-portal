// app/api/users/delete/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { PrismaClient } from "../../../../../prisma/generated/prisma"
import {authOptions} from "@/lib/auth";
import { LogAction, LogEntity, logEvent } from "@/lib/logger"
import {Session} from "next-auth";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions) as Session || null

    if (!session || session.user.role !== "admin") {
        return NextResponse.json({ error: "Доступ запрещён" }, { status: 403 })
    }

    try {
        const { id } = await req.json()

        if (!id) {
            // Логируем отсутствие ID
            await logEvent({
                action: 'error' as LogAction,
                entity: 'user' as LogEntity,
                entityId: BigInt(0),
                userId: BigInt(session.user.id || 0),
                details: {
                    operation: 'DELETE',
                    error: 'ID пользователя обязателен',
                    attemptedBy: session.user.name || 'unknown'
                }
            })

            return NextResponse.json({ error: "ID пользователя обязателен" }, { status: 400 })
        }

        // Получаем пользователя для логирования перед удалением
        const user = await prisma.users.findUnique({
            where: { id: parseInt(id) },
            select: { id: true, name: true }
        })

        if (!user) {
            // Логируем ошибку, если пользователь не найден
            await logEvent({
                action: 'error' as LogAction,
                entity: 'user' as LogEntity,
                entityId: BigInt(parseInt(id)),
                userId: BigInt(session.user.id || 0),
                details: {
                    operation: 'DELETE',
                    error: 'Пользователь не найден',
                    attemptedBy: session.user.name || 'unknown'
                }
            })

            return NextResponse.json({ error: "Пользователь не найден" }, { status: 404 })
        }

        // Удаляем пользователя из БД
        await prisma.users.delete({
            where: { id: parseInt(id) }
        })

        // Логируем успешное удаление
        await logEvent({
            action: 'delete' as LogAction,
            entity: 'user' as LogEntity,
            entityId: BigInt(user.id),
            userId: BigInt(session.user.id || 0),
            details: {
                title: user.name,
                deletedBy: session.user.name || 'unknown'
            }
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Ошибка при удалении пользователя:", error)

        await logEvent({
            action: 'error' as LogAction,
            entity: 'user' as LogEntity,
            entityId: BigInt(0),
            userId: BigInt(session?.user?.id || 0),
            details: {
                operation: 'DELETE_USER',
                error: error instanceof Error ? error.message : 'Unknown error',
                attemptedBy: session?.user?.name || 'unknown'
            }
        })

        return NextResponse.json({ error: "Не удалось удалить пользователя" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}
