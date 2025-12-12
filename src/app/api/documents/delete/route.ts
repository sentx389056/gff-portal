// app/api/documents/delete/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../prisma/generated/prisma";
import { logEvent, LogAction, LogEntity } from "@/lib/logger";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import type { Session } from "next-auth";
import { deleteFile } from "@/lib/file-utils";

interface DocumentDeleteRequest {
    id: string;
}

interface DocumentItem {
    id: number;
    title: string;
    file_url: string | null;
}

const prisma = new PrismaClient();

// Получение userId и username из NextAuth
const getUserInfoFromSession = async (): Promise<{
    userId: number | null;
    username: string;
}> => {
    try {
        const session = (await getServerSession(authOptions)) as Session | null;
        if (!session?.user?.id) {
            return { userId: null, username: "anonymous" };
        }
        const userId = parseInt(session.user.id);
        const username = session.user.username || "unknown";
        return { userId, username };
    } catch (error) {
        console.error("Ошибка при получении user info:", error);
        return { userId: null, username: "anonymous" };
    }
};

// Упрощённая функция для логирования
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
        console.warn("⚠️ Пропускаем логирование: userId отсутствует");
        return;
    }

    try {
        await logEvent({
            action,
            entity,
            entityId: BigInt(entityId),
            userId: BigInt(userId),
            username,
            details: details || null,
        });
    } catch (logError) {
        console.error("❌ Ошибка при создании лог-события:", logError);
    }
};

export async function POST(request: Request) {
    let requestData: DocumentDeleteRequest | null = null;
    try {
        requestData = (await request.json()) as DocumentDeleteRequest;
        const { id } = requestData;

        if (!id) {
            const { userId, username } = await getUserInfoFromSession();
            await createLogEvent("error", "document", 0, userId, username, {
                operation: "DELETE",
                error: "ID документа обязателен",
                documentId: null,
            });

            return NextResponse.json(
                { error: "ID документа обязателен" },
                { status: 400 }
            );
        }

        const documentItem = (await prisma.documents.findUnique({
            where: { id: parseInt(id) },
            select: { id: true, title: true, file_url: true },
        })) as DocumentItem | null;

        if (!documentItem) {
            const { userId, username } = await getUserInfoFromSession();
            await createLogEvent(
                "error",
                "document",
                parseInt(id),
                userId,
                username,
                {
                    operation: "DELETE",
                    error: "Документ не найден",
                    documentId: id,
                    attemptedBy: username,
                }
            );

            return NextResponse.json(
                { error: "Документ не найден" },
                { status: 404 }
            );
        }

        // Удаляем из базы данных
        await prisma.documents.delete({
            where: { id: parseInt(id) },
        });

        // Удаляем файл из /var/www/uploads если он есть
        if (documentItem.file_url) {
            const deleted = await deleteFile(documentItem.file_url);
            if (deleted) {
                console.log(`✅ Файл документа удален: ${documentItem.file_url}`);
            } else {
                console.warn(`⚠️ Файл не удален или не найден: ${documentItem.file_url}`);
            }
        }

        // Логируем успешное удаление
        const { userId, username } = await getUserInfoFromSession();
        await createLogEvent(
            "delete",
            "document",
            documentItem.id,
            userId,
            username,
            {
                deletedTitle: documentItem.title,
                deletedFile: documentItem.file_url,
            }
        );

        // ИСПРАВЛЕНО: было newsItem.title, должно быть documentItem.title
        console.log(`✅ Документ удален: ${documentItem.title} (ID: ${id})`);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Ошибка при удалении документа:", error);

        const { userId, username } = await getUserInfoFromSession();
        await createLogEvent(
            "error",
            "document",
            requestData?.id ? parseInt(requestData.id) : 0,
            userId,
            username,
            {
                operation: "DELETE",
                error: error instanceof Error ? error.message : "Unknown error",
                documentId: requestData?.id,
                attemptedBy: username,
            }
        );

        return NextResponse.json(
            { error: "Не удалось удалить документ" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}