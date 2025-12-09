// app/api/news/update/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../prisma/generated/prisma";
import { logEvent, LogAction, LogEntity } from "@/lib/logger";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { deleteFile } from "@/lib/file-utils"; // ← Добавляем импорт
import type { Session } from "next-auth";

interface NewsUpdateRequest {
    id: string;
    title?: string;
    type_id?: string;
    description?: string;
    image_url?: string | null; // ← Разрешаем null (удаление изображения)
}

interface FieldChange {
    old: string | null;
    new: string | null;
}

interface UpdateChanges {
    title?: FieldChange;
    type_id?: FieldChange;
    description?: FieldChange;
    image_url?: FieldChange;
}

interface NewsUpdateResponse {
    id: string;
    title: string;
    type_id: string;
    type: { type: string };
    created_at: string;
    description: string;
    image_url: string | null;
}

const prisma = new PrismaClient();

// Конвертация BigInt → string
const bigIntToString = (value: bigint): string => value.toString();

// Получение пользователя из сессии
const getUserInfoFromSession = async (): Promise<{ userId: bigint; username: string }> => {
    try {
        const session = await getServerSession(authOptions) as Session | null;
        if (!session?.user?.id) {
            return { userId: BigInt(0), username: "anonymous" };
        }
        const userId = BigInt(session.user.id);
        const username = session.user.username || session.user.name || "unknown";
        return { userId, username };
    } catch (error) {
        console.error("Error getting user from session:", error);
        return { userId: BigInt(0), username: "anonymous" };
    }
};

// Безопасное логирование (не ломает основной процесс)
const safeLogEvent = async (
    action: LogAction,
    entity: LogEntity,
    entityId: bigint,
    userId: bigint,
    username: string,
    details?: Record<string, unknown>
) => {
    try {
        await logEvent({
            action,
            entity,
            entityId,
            userId,
            username,
            details: details || null,
        });
    } catch (logError) {
        console.error("Failed to log event:", logError);
    }
};

export async function POST(request: Request): Promise<NextResponse<NewsUpdateResponse | { error: string }>> {
    let requestData: NewsUpdateRequest | null = null;

    try {
        requestData = await request.json() as NewsUpdateRequest;
        const { id, title, type_id, description, image_url } = requestData;

        if (!id) {
            return NextResponse.json({ error: "ID новости обязателен" }, { status: 400 });
        }

        // Находим текущую новость
        const existingNews = await prisma.news.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                title: true,
                type_id: true,
                description: true,
                image_url: true,
            }
        });

        if (!existingNews) {
            return NextResponse.json({ error: "Новость не найдена" }, { status: 404 });
        }

        // Формируем изменения для лога
        const changes: UpdateChanges = {};
        if (title !== undefined && title !== existingNews.title) {
            changes.title = { old: existingNews.title || null, new: title };
        }
        if (type_id !== undefined && parseInt(type_id) !== existingNews.type_id) {
            changes.type_id = { old: existingNews.type_id.toString(), new: type_id };
        }
        if (description !== undefined && description !== existingNews.description) {
            changes.description = { old: existingNews.description || null, new: description };
        }

        // Особая обработка image_url
        let finalImageUrl: string | null = existingNews.image_url;
        let imageChanged = false;
        let oldImageUrlForDelete: string | null = null;

        if (image_url !== undefined) {
            // Если передан новый URL (или null) — считаем, что изображение меняется
            imageChanged = true;
            oldImageUrlForDelete = existingNews.image_url; // запоминаем старое для удаления

            if (image_url === null || image_url.trim() === "") {
                finalImageUrl = null; // пользователь хочет удалить изображение
                changes.image_url = { old: existingNews.image_url, new: null };
            } else if (image_url !== existingNews.image_url) {
                finalImageUrl = image_url;
                changes.image_url = { old: existingNews.image_url, new: image_url };
            } else {
                // image_url передан, но такой же — ничего не меняем
                imageChanged = false;
                oldImageUrlForDelete = null;
            }
        }

        // Данные для обновления в БД
        const updateData: any = {
            title: title !== undefined ? title : existingNews.title,
            type_id: type_id !== undefined ? parseInt(type_id) : existingNews.type_id,
            description: description !== undefined ? description : existingNews.description,
        };

        if (image_url !== undefined) {
            updateData.image_url = finalImageUrl;
        }

        // Обновляем запись
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
        });

        // === УДАЛЕНИЕ СТАРОГО ИЗОБРАЖЕНИЯ (если было изменение) ===
        if (imageChanged && oldImageUrlForDelete) {
            const deleted = await deleteFile(oldImageUrlForDelete);
            if (deleted) {
                console.log(`🗑️ Старое изображение удалено: ${oldImageUrlForDelete}`);
            } else {
                console.warn(`⚠️ Не удалось удалить старое изображение: ${oldImageUrlForDelete}`);
            }
        }

        // Сериализуем ответ
        const serializedNews: NewsUpdateResponse = {
            id: bigIntToString(updatedNews.id),
            title: updatedNews.title,
            type_id: bigIntToString(updatedNews.type_id),
            type: updatedNews.type,
            created_at: updatedNews.created_at.toISOString(),
            description: updatedNews.description,
            image_url: updatedNews.image_url,
        };

        // Логируем успешное обновление
        const { userId, username } = await getUserInfoFromSession();
        await safeLogEvent(
            "update" as LogAction,
            "news" as LogEntity,
            updatedNews.id,
            userId,
            username,
            {
                title: updatedNews.title,
                type_id: bigIntToString(updatedNews.type_id),
                changes: Object.keys(changes).length > 0 ? changes : null,
                imageDeleted: imageChanged && oldImageUrlForDelete ? true : false,
                oldData: {
                    title: existingNews.title,
                    type_id: existingNews.type_id.toString(),
                    description: existingNews.description,
                    image_url: existingNews.image_url,
                },
            }
        );

        return NextResponse.json(serializedNews);
    } catch (error) {
        console.error("Ошибка при обновлении новости:", error);

        const { userId, username } = await getUserInfoFromSession();
        await safeLogEvent(
            "error" as LogAction,
            "news" as LogEntity,
            requestData?.id ? BigInt(parseInt(requestData.id)) : BigInt(0),
            userId,
            username,
            {
                operation: "UPDATE",
                error: error instanceof Error ? error.message : "Unknown error",
                newsId: requestData?.id,
                data: requestData,
            }
        );

        return NextResponse.json({ error: "Не удалось обновить новость" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}