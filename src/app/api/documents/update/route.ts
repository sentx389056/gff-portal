// app/api/documents/update/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../prisma/generated/prisma";
import { logEvent, LogAction, LogEntity } from "@/lib/logger";
import { getServerSession } from "next-auth/next";
import {authOptions} from "@/lib/auth";
import type { Session } from "next-auth";

interface DocumentUpdateBody {
    id: string;
    title?: string;
    type_id?: string;
    description?: string;
    file_url?: string;
}

// Исправлен тип: BigInt → string для JSON сериализации
interface Document {
    id: string; // ← Было number, стало string
    title: string;
    type_id: string; // ← Было number, стало string
    type: {
        type: string;
    };
    created_at: string; // ← Было Date, стало string
    description: string | null;
    file_url: string | null;
}

const prisma = new PrismaClient();

// Функция для безопасной конвертации BigInt в string
const bigIntToString = (value: bigint): string => {
    return value.toString();
};

// Получение userId и username из NextAuth сессии
const getUserInfoFromSession = async (): Promise<{ userId: number; username: string }> => {
    try {
        const session = await getServerSession(authOptions) as Session | null;

        if (!session?.user?.id) {
            console.log("No authenticated user found in session");
            return { userId: 0, username: "anonymous" };
        }

        const userId = parseInt(session.user.id);
        const username = session.user.username || "unknown";

        return { userId, username };
    } catch (error) {
        console.error("Ошибка при получении user info из сессии NextAuth:", error);
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
    details?: Record<string, unknown>
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
    let body: DocumentUpdateBody | null = null;
    try {
        body = await request.json() as DocumentUpdateBody;
        const { id, title, type_id, description, file_url } = body;

        if (!id) {
            return NextResponse.json({ error: "ID документа обязателен" }, { status: 400 });
        }

        const document = await prisma.documents.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                title: true,
                type_id: true,
                description: true,
                file_url: true,
            }
        });

        if (!document) {
            return NextResponse.json({ error: "Документ не найден" }, { status: 404 });
        }

        const updatedDocument = await prisma.documents.update({
            where: { id: parseInt(id) },
            data: {
                title: title !== undefined ? title : document.title,
                type_id: type_id !== undefined ? parseInt(type_id) : document.type_id,
                description: description !== undefined ? description : document.description,
                file_url: file_url !== undefined ? file_url : document.file_url,
            },
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

        const serializedDocument: Document = {
            id: bigIntToString(updatedDocument.id), // ← Конвертируем BigInt в string
            title: updatedDocument.title,
            type_id: bigIntToString(updatedDocument.type_id), // ← Конвертируем BigInt в string
            type: updatedDocument.type,
            created_at: updatedDocument.created_at.toISOString(), // ← Конвертируем Date в string
            description: updatedDocument.description,
            file_url: updatedDocument.file_url,
        };

        // Логируем успешное обновление
        const { userId, username } = await getUserInfoFromSession()
        await createLogEvent("update", "document", Number(updatedDocument.id), userId, username, {
            updatedFields: body,
            oldData: {
                title: document.title,
                type_id: bigIntToString(document.type_id), // ← Конвертируем для лога
                description: document.description,
                file_url: document.file_url,
            }
        });

        return NextResponse.json(serializedDocument);
    } catch (error) {
        console.error("Ошибка при обновлении документа:", error)

        const { userId, username } = await getUserInfoFromSession()
        await createLogEvent("error", "document", body?.id ? parseInt(body.id) : 0, userId, username, {
            operation: "UPDATE",
            error: error instanceof Error ? error.message : "Unknown error",
            attemptedBy: username,
            data: body,
        });

        return NextResponse.json({ error: "Не удалось обновить документ" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}