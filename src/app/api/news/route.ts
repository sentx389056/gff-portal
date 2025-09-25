// app/api/news/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/generated/prisma";
import { logEvent, LogAction, LogEntity } from "@/lib/logger";
import { getServerSession } from "next-auth/next";
import {authOptions} from "@/lib/auth";
import type { Session } from "next-auth";

interface NewsCreateRequest {
    title: string;
    type_id: string;
    description: string;
    image_url?: string;
}

interface NewsItem {
    id: string; // ← Изменено на string для JSON сериализации
    title: string;
    type_id: string; // ← Изменено на string для JSON сериализации
    type: { type: string };
    created_at: string; // ← Изменено на string
    description: string;
    image_url: string | null;
}

const prisma = new PrismaClient();

// Функция для безопасной конвертации BigInt в string
const bigIntToString = (value: bigint): string => {
    return value.toString();
};

// Функция для получения userId и username из NextAuth сессии
const getUserInfoFromSession = async (): Promise<{ userId: number; username: string }> => {
    try {
        const session = await getServerSession(authOptions) as Session | null;

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

// Функция для создания лог-события с username
const createLogEvent = async (
    action: LogAction,
    entity: LogEntity,
    entityId: number,
    userId: number,
    username: string,
    details?: Record<string, unknown>
) => {
    try {
        console.log(
            `Logging ${action} ${entity} for user ${username} (ID: ${userId}), entity ${entityId}`
        );

        // Передаем username в logEvent
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
        // Не прерываем выполнение основного запроса из-за ошибки логирования
    }
};

export async function GET() {
    try {
        const news = await prisma.news.findMany({
            select: {
                id: true,
                title: true,
                type_id: true,
                type: { select: { type: true } },
                created_at: true,
                description: true,
                image_url: true,
            },
            orderBy: { created_at: "desc" },
        });

        const serializedNews = news.map((item) => ({
            id: bigIntToString(item.id), // ← Конвертируем BigInt в string
            title: item.title,
            type_id: bigIntToString(item.type_id), // ← Конвертируем BigInt в string
            type: item.type,
            created_at: item.created_at.toISOString(),
            description: item.description,
            image_url: item.image_url,
        }));

        return NextResponse.json(serializedNews);
    } catch (error) {
        console.error("Ошибка при получении новостей:", error);
        return NextResponse.json({ error: "Не удалось получить новости" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(request: Request) {
    let requestData: NewsCreateRequest | null = null;

    try {
        requestData = await request.json() as NewsCreateRequest;

        // Получаем userId и username из NextAuth сессии
        const { userId, username } = await getUserInfoFromSession();
        console.log("POST user info from NextAuth:", { userId, username });

        const news = await prisma.news.create({
            data: {
                title: requestData.title,
                type_id: parseInt(requestData.type_id),
                description: requestData.description,
                image_url: requestData.image_url || null,
                created_at: new Date(),
            },
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

        const serializedNews: NewsItem = {
            id: bigIntToString(news.id), // ← Конвертируем BigInt в string
            title: news.title,
            type_id: bigIntToString(news.type_id), // ← Конвертируем BigInt в string
            type: news.type,
            created_at: news.created_at.toISOString(),
            description: news.description,
            image_url: news.image_url,
        };

        // Логируем успешное создание новости
        await createLogEvent('create', 'news', Number(news.id), userId, username, {
            title: news.title,
            type_id: bigIntToString(news.type_id), // ← Конвертируем для лога
            createdBy: username,
        });

        return NextResponse.json(serializedNews, { status: 201 });
    } catch (error) {
        console.error("Ошибка при создании новости:", error);

        // Логируем ошибку создания
        const { userId, username } = await getUserInfoFromSession();

        await createLogEvent('error', 'news', 0, userId, username, {
            operation: 'POST',
            error: error instanceof Error ? error.message : 'Unknown error',
            attemptedBy: username,
            data: {
                title: requestData?.title || null,
                type_id: requestData?.type_id ? parseInt(requestData.type_id) : null,
            },
        });

        return NextResponse.json({ error: "Не удалось создать новость" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}