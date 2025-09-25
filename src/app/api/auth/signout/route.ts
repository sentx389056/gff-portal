// app/api/auth/signout/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { PrismaClient } from "../../../../../prisma/generated/prisma"
import {authOptions} from "@/lib/auth";

const prisma = new PrismaClient()

export async function POST() {
    try {
        const session = await getServerSession(authOptions) // ← Теперь работает

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Нет активной сессии" }, { status: 401 })
        }

        // Обновляем статус на "inactive" (id: 2)
        await prisma.users.update({
            where: { id: parseInt(session.user.id) },
            data: { status_id: 2 }, // ID для статуса "inactive"
        })

        // Очищаем сессию
        const response = NextResponse.json({ message: "Сессия завершена успешно" }, { status: 200 })

        // Удаляем токен сессии
        response.cookies.set("next-auth.session-token", "", {
            maxAge: -1,
            httpOnly: true,
            path: "/",
            sameSite: "lax",
        })

        // Удаляем refresh token если используется
        response.cookies.set("__Secure-next-auth.session-token", "", {
            maxAge: -1,
            httpOnly: true,
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        })

        return response
    } catch (error) {
        console.error("Ошибка при выходе:", error)
        return NextResponse.json({ error: "Ошибка при выходе" }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}