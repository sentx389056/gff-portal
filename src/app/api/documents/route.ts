import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/generated/prisma";
import { logEvent, LogAction, LogEntity } from "@/lib/logger";
import {authOptions} from "@/lib/auth";
import type { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

interface DocumentPayload {
    title: string;
    type_id: string | number;
    description?: string;
    file_url?: string | null;
}

const prisma = new PrismaClient();

// Получение userId и username из сессии NextAuth
const getUserInfoFromSession = async (): Promise<{ userId: number; username: string }> => {
    try {
        const session = (await getServerSession(authOptions)) as Session | null;

        if (!session?.user?.id) {
            console.log("No authenticated user found in session");
            return { userId: 0, username: "anonymous" };
        }

        const userId = parseInt(session.user.id);
        const username = session.user.username || "unknown";

        console.log("User authenticated via NextAuth:", { userId, username });
        return { userId, username };
    } catch (error) {
        console.error("Ошибка при получении user info из сессии NextAuth:", error);
        return { userId: 0, username: "anonymous" };
    }
};

// Создание лог-события
const createLogEvent = async (
    action: LogAction,
    entity: LogEntity,
    entityId: number,
    userId: number,
    username: string,
    details?: Record<string, unknown> | null
) => {
    try {
        console.log(`Logging ${action} ${entity} for user ${username} (ID: ${userId}), entity ${entityId}`);

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

// Получение списка документов
export async function GET() {
    try {
        const documents = await prisma.documents.findMany({
            select: {
                id: true,
                title: true,
                type_id: true,
                type: { select: { type: true } },
                created_at: true,
                description: true,
                file_url: true,
            },
            orderBy: { created_at: "desc" },
        });

        const serializedDocuments = documents.map((item) => ({
            id: item.id.toString(),
            title: item.title,
            type_id: item.type_id.toString(),
            type: item.type,
            created_at: item.created_at.toISOString(),
            description: item.description,
            file_url: item.file_url,
        }));

        return NextResponse.json(serializedDocuments);
    } catch (error) {
        console.error("Ошибка при получении документов:", error);
        return NextResponse.json({ error: "Не удалось получить документы" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

// Создание нового документа
export async function POST(request: Request) {
    let data: DocumentPayload | null = null;
    try {
        data = (await request.json()) as DocumentPayload;
        const { userId, username } = await getUserInfoFromSession();

        const document = await prisma.documents.create({
            data: {
                title: data.title,
                type_id: Number(data.type_id),
                description: data.description,
                file_url: data.file_url || null,
                created_at: new Date(),
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

        const serializedDocument = {
            id: document.id.toString(),
            title: document.title,
            type_id: document.type_id.toString(),
            type: document.type,
            created_at: document.created_at.toISOString(),
            description: document.description,
            file_url: document.file_url,
        };

        await createLogEvent("create", "document", document.id, userId, username, {
            title: document.title,
            type_id: document.type_id.toString(),
            createdBy: username,
        });

        return NextResponse.json(serializedDocument);
    } catch (error) {
        console.error("Ошибка при создании документа:", error);

        const { userId, username } = await getUserInfoFromSession();

        await createLogEvent("error", "document", 0, userId, username, {
            operation: "POST",
            error: error instanceof Error ? error.message : "Unknown error",
            attemptedBy: username,
            data: {
                title: data?.title || null,
                type_id: data?.type_id ? Number(data.type_id) : null,
            },
        });

        return NextResponse.json({ error: "Не удалось создать документ" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
