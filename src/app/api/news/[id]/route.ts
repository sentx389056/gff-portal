import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../prisma/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // ← params теперь Promise
) {
    // Ждём params, прежде чем использовать
    const { id } = await params; // ← Добавьте await
    const newsId = parseInt(id);

    // Проверяем, является ли id корректным числом
    if (isNaN(newsId)) {
        return NextResponse.json({ error: "Неверный ID" }, { status: 400 });
    }

    try {
        const news = await prisma.news.findUnique({
            where: {
                id: newsId,
            },
            select: {
                id: true,
                title: true,
                type: { select: { type: true } },
                created_at: true,
                description: true,
                image_url: true,
            },
        });

        if (!news) {
            return NextResponse.json({ error: "Новость не найдена" }, { status: 404 });
        }

        const serializedNews = {
            ...news,
            id: news.id.toString(),
            created_at: news.created_at.toISOString(),
        };

        return NextResponse.json(serializedNews);
    } catch (error) {
        console.error("Ошибка при получении новости:", error);
        return NextResponse.json({ error: "Не удалось получить новость" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}