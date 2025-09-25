// app/api/statuses/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "../../../../prisma/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
    try {
        const statuses = await prisma.statusesTypes.findMany({
            select: { id: true, status: true },
        })
        const serializedStatuses = statuses.map(status => ({
            id: status.id.toString(),
            status: status.status,
        }))
        return NextResponse.json(serializedStatuses)
    } catch (error) {
        console.error("Ошибка при получении статусов:", error)
        return NextResponse.json({ error: "Не удалось получить статусы" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}