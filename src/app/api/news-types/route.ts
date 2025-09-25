// app/api/news-types/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "../../../../prisma/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
    try {
        const types = await prisma.newsTypes.findMany({
            select: { id: true, type: true },
        })
        // Преобразуем BigInt в строку
        const serializedTypes = types.map(type => ({
            id: type.id.toString(), // Преобразуем BigInt в строку
            type: type.type,
        }))
        return NextResponse.json(serializedTypes)
    } catch (error) {
        console.error("Ошибка при получении типов новостей:", error)
        return NextResponse.json({ error: "Не удалось получить типы новостей" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}