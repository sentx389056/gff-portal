// app/api/delete-file/route.ts
import { NextResponse } from "next/server"
import { unlink } from "fs/promises"
import path from "path"
import { existsSync } from "fs"

export async function POST(request: Request) {
    try {
        const { filePath } = await request.json()
        if (!filePath) {
            return NextResponse.json({ error: "filePath не указан" }, { status: 400 })
        }
        const fullPath = path.join(process.cwd(), "public", filePath)
        if (existsSync(fullPath)) {
            await unlink(fullPath)
        } else {
            console.warn(`Файл ${fullPath} не существует`)
        }
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Ошибка при удалении файла:", error)
        return NextResponse.json({ error: "Не удалось удалить файл" }, { status: 500 })
    }
}