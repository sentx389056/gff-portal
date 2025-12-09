// app/api/news/delete/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "../../../../../prisma/generated/prisma"
import { logEvent, LogAction, LogEntity } from "@/lib/logger"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { deleteFile } from "@/lib/file-utils"
import type { Session } from "next-auth"

interface NewsDeleteRequest {
    id: string
}

interface NewsItem {
    id: number
    title: string
    image_url: string | null
}

const prisma = new PrismaClient()

// Получение userId и username из NextAuth
const getUserInfoFromSession = async (): Promise<{ userId: number | null; username: string }> => {
    try {
        const session = (await getServerSession(authOptions)) as Session | null
        if (!session?.user?.id) {
            return { userId: null, username: "anonymous" }
        }
        const userId = parseInt(session.user.id)
        const username = session.user.username || "unknown"
        return { userId, username }
    } catch (error) {
        console.error("Ошибка при получении user info:", error)
        return { userId: null, username: "anonymous" }
    }
}

// Функция для логирования с проверкой userId
const createLogEvent = async (
    action: LogAction,
    entity: LogEntity,
    entityId: number,
    userId: number | null,
    username: string,
    details?: Record<string, unknown>
) => {
    // Не логируем если нет валидного userId
    if (!userId) {
        console.warn("⚠️ Пропускаем логирование: userId отсутствует")
        return
    }

    try {
        await logEvent({
            action,
            entity,
            entityId: BigInt(entityId),
            userId: BigInt(userId),
            username,
            details: details || null,
        })
    } catch (logError) {
        console.error("❌ Ошибка при создании лог-события:", logError)
    }
}

export async function POST(request: Request) {
    let requestData: NewsDeleteRequest | null = null

    try {
        requestData = await request.json() as NewsDeleteRequest
        const { id } = requestData

        if (!id) {
            const { userId, username } = await getUserInfoFromSession()
            await createLogEvent('error', 'news', 0, userId, username, {
                operation: 'DELETE',
                error: 'ID новости обязателен',
                newsId: null
            })

            return NextResponse.json({ error: "ID новости обязателен" }, { status: 400 })
        }

        // Получаем новость для логирования и удаления файла
        const newsItem = await prisma.news.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                title: true,
                image_url: true
            },
        }) as NewsItem | null

        if (!newsItem) {
            const { userId, username } = await getUserInfoFromSession()
            await createLogEvent('error', 'news', parseInt(id), userId, username, {
                operation: 'DELETE',
                error: 'Новость не найдена',
                newsId: id,
                attemptedBy: username
            })

            return NextResponse.json({ error: "Новость не найдена" }, { status: 404 })
        }

        // Удаляем новость из БД
        await prisma.news.delete({
            where: { id: parseInt(id) },
        })

        // Удаляем файл изображения напрямую (без fetch)
        if (newsItem.image_url) {
            const deleted = await deleteFile(newsItem.image_url)
            if (deleted) {
                console.log(`✅ Изображение удалено: ${newsItem.image_url}`)
            }
        }

        // Логируем успешное удаление
        const { userId, username } = await getUserInfoFromSession()
        await createLogEvent('delete', 'news', newsItem.id, userId, username, {
            title: newsItem.title,
            deletedBy: username,
            imageDeleted: !!newsItem.image_url,
            newsId: id
        })

        console.log(`✅ Новость удалена: ${newsItem.title} (ID: ${id})`)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("❌ Ошибка при удалении новости:", error)

        const { userId, username } = await getUserInfoFromSession()
        await createLogEvent('error', 'news', requestData?.id ? parseInt(requestData.id) : 0, userId, username, {
            operation: 'DELETE',
            error: error instanceof Error ? error.message : 'Unknown error',
            newsId: requestData?.id,
            attemptedBy: username
        })

        return NextResponse.json({ error: "Не удалось удалить новость" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}