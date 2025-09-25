// app/api/document-types/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "../../../../prisma/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
    try {
        const types = await prisma.documentsTypes.findMany({
            select: { id: true, type: true },
        })
        const serializedTypes = types.map(type => ({
            id: type.id.toString(),
            type: type.type,
        }))
        return NextResponse.json(serializedTypes)
    } catch (error) {
        console.error("Ошибка при получении типов документов:", error)
        return NextResponse.json({ error: "Не удалось получить типы документов" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}