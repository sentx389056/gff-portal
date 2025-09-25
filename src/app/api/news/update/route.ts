// app/api/news/update/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "../../../../../prisma/generated/prisma"
import { logEvent, LogAction, LogEntity } from "@/lib/logger"

// Типы для запроса
interface NewsUpdateRequest {
    id: string;
    title?: string;
    type_id?: string;
    description?: string;
    image_url?: string;
}

// Типы для изменений
interface FieldChange {
    old: string | null;
    new: string;
}

interface UpdateChanges {
    title?: FieldChange;
    type_id?: FieldChange;
    description?: FieldChange;
    image_url?: FieldChange;
}

// Тип для ответа
interface NewsUpdateResponse {
    id: string;
    title: string;
    type_id: string;
    type: { type: string };
    created_at: string;
    description: string;
    image_url: string | null;
}

const prisma = new PrismaClient()

export async function POST(request: Request): Promise<NextResponse<NewsUpdateResponse | { error: string }>> {
    let requestData: NewsUpdateRequest | null = null;

    try {
        requestData = await request.json() as NewsUpdateRequest;

        const { id, title, type_id, description, image_url } = requestData;

        if (!id) {
            return NextResponse.json({ error: "ID новости обязателен" }, { status: 400 })
        }

        // Проверяем существование новости
        const existingNews = await prisma.news.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                title: true,
                type_id: true,
                description: true,
                image_url: true,
            }
        })

        if (!existingNews) {
            return NextResponse.json({ error: "Новость не найдена" }, { status: 404 })
        }

        // Подготавливаем данные для обновления
        const updateData = {
            title: title !== undefined ? title : existingNews.title,
            type_id: type_id !== undefined ? parseInt(type_id) : existingNews.type_id,
            description: description !== undefined ? description : existingNews.description,
            image_url: image_url !== undefined ? image_url : existingNews.image_url,
        };

        // Определяем, какие поля были изменены для лога
        const changes: UpdateChanges = {};
        if (title !== undefined && title !== existingNews.title) {
            changes.title = {
                old: existingNews.title || null,
                new: title
            };
        }
        if (type_id !== undefined && parseInt(type_id) !== existingNews.type_id) {
            changes.type_id = {
                old: existingNews.type_id.toString(),
                new: type_id
            };
        }
        if (description !== undefined && description !== existingNews.description) {
            changes.description = {
                old: existingNews.description || null,
                new: description
            };
        }
        if (image_url !== undefined && image_url !== existingNews.image_url) {
            changes.image_url = {
                old: existingNews.image_url || null,
                new: image_url
            };
        }

        const updatedNews = await prisma.news.update({
            where: { id: parseInt(id) },
            data: updateData,
            select: {
                id: true,
                title: true,
                type_id: true,
                type: { select: { type: true } },
                created_at: true,
                description: true,
                image_url: true,
            },
        })

        const serializedNews: NewsUpdateResponse = {
            id: updatedNews.id.toString(),
            title: updatedNews.title,
            type_id: updatedNews.type_id.toString(),
            type: updatedNews.type,
            created_at: updatedNews.created_at.toISOString(),
            description: updatedNews.description,
            image_url: updatedNews.image_url,
        }

        // ← ПРОСТОЙ ЛОГ: передаем только ID, username получит logger.ts
        await logEvent({
            action: 'update' as LogAction,
            entity: 'news' as LogEntity,
            entityId: BigInt(parseInt(id)),
            userId: BigInt(0), // 0 = текущий пользователь из сессии
            details: {
                title: updatedNews.title,
                type_id: updatedNews.type_id.toString(),
                changes: Object.keys(changes).length > 0 ? changes : null,
                oldData: {
                    title: existingNews.title,
                    type_id: existingNews.type_id.toString(),
                    description: existingNews.description,
                    image_url: existingNews.image_url
                }
            } as Record<string, unknown>,
        });

        return NextResponse.json(serializedNews)
    } catch (error) {
        console.error("Ошибка при обновлении новости:", error)

        // ← ПРОСТОЙ ЛОГ ОШИБКИ
        await logEvent({
            action: 'error' as LogAction,
            entity: 'news' as LogEntity,
            entityId: BigInt(requestData?.id ? parseInt(requestData.id) : 0),
            userId: BigInt(0), // 0 = текущий пользователь из сессии
            details: {
                operation: 'UPDATE',
                error: error instanceof Error ? error.message : 'Unknown error',
                newsId: requestData?.id,
                data: {
                    title: requestData?.title,
                    type_id: requestData?.type_id,
                    description: requestData?.description,
                    image_url: requestData?.image_url
                }
            } as Record<string, unknown>,
        });

        return NextResponse.json({ error: "Не удалось обновить новость" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}