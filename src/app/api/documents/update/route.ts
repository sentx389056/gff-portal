// app/api/documents/update/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../prisma/generated/prisma";
import { logEvent, LogAction, LogEntity } from "@/lib/logger";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { deleteFile } from "@/lib/file-utils"; // ← Добавляем импорт
import type { Session } from "next-auth";

interface DocumentUpdateBody {
    id: string;
    title?: string;
    type_id?: string;
    description?: string;
    file_url?: string | null; // ← Разрешаем null для удаления файла
}

interface FieldChange {
    old: string | null;
    new: string | null;
}

interface UpdateChanges {
    title?: FieldChange;
    type_id?: FieldChange;
    description?: FieldChange;
    file_url?: FieldChange;
}

// Ответ клиенту
interface Document {
    id: string;
    title: string;
    type_id: string;
    type: { type: string };
    created_at: string;
    description: string | null;
    file_url: string | null;
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

// Безопасное логирование
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

export async function POST(request: Request) {
    let body: DocumentUpdateBody | null = null;

    try {
        body = await request.json() as DocumentUpdateBody;
        const { id, title, type_id, description, file_url } = body;

        if (!id) {
            return NextResponse.json({ error: "ID документа обязателен" }, { status: 400 });
        }

        // Текущий документ из БД
        const existingDocument = await prisma.documents.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                title: true,
                type_id: true,
                description: true,
                file_url: true,
            }
        });

        if (!existingDocument) {
            return NextResponse.json({ error: "Документ не найден" }, { status: 404 });
        }

        // Отслеживаем изменения для лога
        const changes: UpdateChanges = {};
        if (title !== undefined && title !== existingDocument.title) {
            changes.title = { old: existingDocument.title || null, new: title };
        }
        if (type_id !== undefined && parseInt(type_id) !== existingDocument.type_id) {
            changes.type_id = { old: existingDocument.type_id.toString(), new: type_id };
        }
        if (description !== undefined && description !== existingDocument.description) {
            changes.description = { old: existingDocument.description || null, new: description };
        }

        // === Обработка file_url ===
        let finalFileUrl: string | null = existingDocument.file_url;
        let fileChanged = false;
        let oldFileUrlForDelete: string | null = null;

        if (file_url !== undefined) {
            fileChanged = true;
            oldFileUrlForDelete = existingDocument.file_url; // запоминаем старый файл

            if (file_url === null || file_url.trim() === "") {
                finalFileUrl = null; // пользователь хочет удалить файл
                changes.file_url = { old: existingDocument.file_url, new: null };
            } else if (file_url !== existingDocument.file_url) {
                finalFileUrl = file_url;
                changes.file_url = { old: existingDocument.file_url, new: file_url };
            } else {
                // тот же URL — ничего не меняем
                fileChanged = false;
                oldFileUrlForDelete = null;
            }
        }

        // Данные для обновления
        const updateData: any = {
            title: title !== undefined ? title : existingDocument.title,
            type_id: type_id !== undefined ? parseInt(type_id) : existingDocument.type_id,
            description: description !== undefined ? description : existingDocument.description,
        };

        if (file_url !== undefined) {
            updateData.file_url = finalFileUrl;
        }

        // Обновляем запись
        const updatedDocument = await prisma.documents.update({
            where: { id: parseInt(id) },
            data: updateData,
            select: {
                id: true,
                title: true,
                type_id: true,
                type: { select: { type: true } },
                created_at: true,
                description: true,
                file_url: true,
            },
        });

        // === УДАЛЕНИЕ СТАРОГО ФАЙЛА (если был заменён или удалён) ===
        if (fileChanged && oldFileUrlForDelete) {
            const deleted = await deleteFile(oldFileUrlForDelete);
            if (deleted) {
                console.log(`🗑️ Старый файл документа удалён: ${oldFileUrlForDelete}`);
            } else {
                console.warn(`⚠️ Не удалось удалить старый файл: ${oldFileUrlForDelete}`);
            }
        }

        // Сериализация ответа
        const serializedDocument: Document = {
            id: bigIntToString(updatedDocument.id),
            title: updatedDocument.title,
            type_id: bigIntToString(updatedDocument.type_id),
            type: updatedDocument.type,
            created_at: updatedDocument.created_at.toISOString(),
            description: updatedDocument.description,
            file_url: updatedDocument.file_url,
        };

        // Логируем успешное обновление
        const { userId, username } = await getUserInfoFromSession();
        await safeLogEvent(
            "update" as LogAction,
            "document" as LogEntity,
            updatedDocument.id,
            userId,
            username,
            {
                title: updatedDocument.title,
                type_id: bigIntToString(updatedDocument.type_id),
                changes: Object.keys(changes).length > 0 ? changes : null,
                fileDeleted: fileChanged && oldFileUrlForDelete ? true : false,
                oldData: {
                    title: existingDocument.title,
                    type_id: existingDocument.type_id.toString(),
                    description: existingDocument.description,
                    file_url: existingDocument.file_url,
                },
            }
        );

        return NextResponse.json(serializedDocument);
    } catch (error) {
        console.error("Ошибка при обновлении документа:", error);

        const { userId, username } = await getUserInfoFromSession();
        await safeLogEvent(
            "error" as LogAction,
            "document" as LogEntity,
            body?.id ? BigInt(parseInt(body.id)) : BigInt(0),
            userId,
            username,
            {
                operation: "UPDATE",
                error: error instanceof Error ? error.message : "Unknown error",
                documentId: body?.id,
                data: body,
            }
        );

        return NextResponse.json({ error: "Не удалось обновить документ" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}