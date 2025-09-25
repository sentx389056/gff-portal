// app/api/documents/delete/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../prisma/generated/prisma";
import { logEvent, LogAction, LogEntity } from "@/lib/logger";
import { getServerSession } from "next-auth/next";
import {authOptions} from "@/lib/auth";
import type { Session } from "next-auth";

interface DocumentBody {
    id: string;
}

interface Document {
    id: number;
    title: string;
    file_url: string | null;
}

const prisma = new PrismaClient();

// Получение userId и username из NextAuth
const getUserInfoFromSession = async (): Promise<{ userId: number; username: string }> => {
    try {
        const session = (await getServerSession(authOptions)) as Session | null;
        if (!session?.user?.id) {
            return { userId: 0, username: "anonymous" };
        }
        const userId = parseInt(session.user.id);
        const username = session.user.username || "unknown";
        return { userId, username };
    } catch (error) {
        console.error("Ошибка при получении user info:", error);
        return { userId: 0, username: "anonymous" };
    }
};

// Упрощённая функция для логирования
const createLogEvent = async (
    action: LogAction,
    entity: LogEntity,
    entityId: number,
    userId: number,
    username: string,
    details?: Record<string, unknown> // Заменили any на Record<string, unknown>
) => {
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
        console.error("Ошибка при создании лог-события:", logError);
    }
};

export async function POST(request: Request) {
    let body: DocumentBody | null = null; // Заменили any на DocumentBody
    try {
        body = await request.json() as DocumentBody;
        const { id } = body;

        const document = await prisma.documents.findUnique({
            where: { id: parseInt(id) },
            select: { id: true, title: true, file_url: true },
        }) as Document | null;

        if (!document) {
            return NextResponse.json({ error: "Документ не найден" }, { status: 404 });
        }

        await prisma.documents.delete({
            where: { id: parseInt(id) },
        });

        if (document.file_url) {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            if (!baseUrl) {
                console.error("NEXT_PUBLIC_BASE_URL не определён");
                return NextResponse.json({ error: "Ошибка конфигурации сервера" }, { status: 500 });
            }

            const response = await fetch(`${baseUrl}/api/delete-file`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ filePath: document.file_url }),
            });

            if (!response.ok) {
                console.error("Ошибка при вызове /api/delete-file:", await response.text());
                return NextResponse.json({ error: "Не удалось удалить файл" }, { status: 500 });
            }
        }

        // Логируем успешное удаление
        const { userId, username } = await getUserInfoFromSession();
        await createLogEvent("delete", "document", document.id, userId, username, {
            deletedTitle: document.title,
            deletedFile: document.file_url,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Ошибка при удалении документа:", error)

        const { userId, username } = await getUserInfoFromSession()
        await createLogEvent("error", "document", body?.id ? parseInt(body.id) : 0, userId, username, {
            operation: "DELETE",
            error: error instanceof Error ? error.message : "Unknown error",
            attemptedBy: username,
            data: body,
        })

        return NextResponse.json({ error: "Не удалось удалить документ" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}
