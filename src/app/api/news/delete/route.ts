// app/api/news/delete/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../prisma/generated/prisma";
import { logEvent, LogAction, LogEntity } from "@/lib/logger";

// Функция для конвертации BigInt в string
const bigIntToString = (value: bigint): string => {
    return value.toString();
};

interface NewsDeleteRequest {
    id: string;
}

interface NewsItem {
    id: string; // ← Изменено на string для JSON
    title: string;
    image_url: string | null;
}

const prisma = new PrismaClient();

export async function POST(request: Request) {
    let requestData: NewsDeleteRequest | null = null;

    try {
        requestData = await request.json() as NewsDeleteRequest;
        const { id } = requestData;

        if (!id) {
            // Логируем ошибку отсутствия ID
            await logEvent({
                action: 'error' as LogAction,
                entity: 'news' as LogEntity,
                entityId: BigInt(0),
                userId: BigInt(0),
                details: {
                    operation: 'DELETE',
                    error: 'ID новости обязателен',
                    newsId: null
                }
            });

            return NextResponse.json({ error: "ID новости обязателен" }, { status: 400 });
        }

        // Получаем новость для логирования и удаления файла
        const newsItemRaw = await prisma.news.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                title: true,
                image_url: true
            },
        });

        if (!newsItemRaw) {
            // Логируем ошибку новости не найдена
            await logEvent({
                action: 'error' as LogAction,
                entity: 'news' as LogEntity,
                entityId: BigInt(parseInt(id)),
                userId: BigInt(0),
                details: {
                    operation: 'DELETE',
                    error: 'Новость не найдена',
                    newsId: id,
                    attemptedBy: 'current_user'
                }
            });

            return NextResponse.json({ error: "Новость не найдена" }, { status: 404 });
        }

        // Конвертируем BigInt для JSON ответа
        const newsItem: NewsItem = {
            id: bigIntToString(newsItemRaw.id),
            title: newsItemRaw.title,
            image_url: newsItemRaw.image_url,
        };

        // Удаляем новость из БД
        await prisma.news.delete({
            where: { id: parseInt(id) },
        });

        // Удаляем файл изображения, если он есть
        if (newsItem.image_url) {
            try {
                const deleteResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/delete-file`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ filePath: newsItem.image_url }),
                });

                if (!deleteResponse.ok) {
                    console.warn(`⚠️ Не удалось удалить файл: ${newsItem.image_url}`);
                } else {
                    console.log(`🗑️ File deleted: ${newsItem.image_url}`);
                }
            } catch (fileError) {
                console.error("Ошибка при удалении файла:", fileError);
                // Логируем ошибку удаления файла
                await logEvent({
                    action: 'error' as LogAction,
                    entity: 'news' as LogEntity,
                    entityId: BigInt(newsItemRaw.id),
                    userId: BigInt(0),
                    details: {
                        operation: 'DELETE_FILE',
                        error: fileError instanceof Error ? fileError.message : 'Unknown file deletion error',
                        filePath: newsItem.image_url,
                        newsTitle: newsItem.title
                    }
                });
            }
        }

        // Логируем успешное удаление
        await logEvent({
            action: 'delete' as LogAction,
            entity: 'news' as LogEntity,
            entityId: BigInt(newsItemRaw.id),
            userId: BigInt(0),
            details: {
                title: newsItem.title,
                deletedBy: 'current_user',
                imageDeleted: !!newsItem.image_url,
                newsId: id
            }
        });

        console.log(`✅ News deleted successfully: ${newsItem.title} (ID: ${id})`);

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Ошибка при удалении новости:", error)

        // Логируем техническую ошибку
        await logEvent({
            action: 'error' as LogAction,
            entity: 'news' as LogEntity,
            entityId: BigInt(requestData?.id ? parseInt(requestData.id) : 0),
            userId: BigInt(0),
            details: {
                operation: 'DELETE',
                error: error instanceof Error ? error.message : 'Unknown error',
                newsId: requestData?.id,
                attemptedBy: 'current_user'
            }
        });

        return NextResponse.json({ error: "Не удалось удалить новость" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}