// app/api/roles/route.ts
import { NextResponse } from "next/server"
import { PrismaClient } from "../../../../prisma/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
    try {
        const roles = await prisma.rolesTypes.findMany({
            select: { id: true, role: true },
        })
        const serializedRoles = roles.map(role => ({
            id: role.id.toString(),
            role: role.role,
        }))
        return NextResponse.json(serializedRoles)
    } catch (error) {
        console.error("Ошибка при получении ролей:", error)
        return NextResponse.json({ error: "Не удалось получить роли" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}