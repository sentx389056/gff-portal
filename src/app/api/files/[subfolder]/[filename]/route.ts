// app/api/files/[subfolder]/[filename]/route.ts
import { NextResponse } from "next/server"
import { readFile, access, constants } from "fs/promises"
import path from "path"
import { existsSync } from "fs"

export async function GET(
    request: Request,
    { params }: { params: { subfolder: string; filename: string } }
) {
    try {
        const { subfolder, filename } = params

        // Валидация пути
        if (!['images', 'documents'].includes(subfolder)) {
            return NextResponse.json({ error: "Недопустимая папка" }, { status: 400 })
        }

        if (!filename || filename.includes('..') || filename.includes('/')) {
            return NextResponse.json({ error: "Недопустимое имя файла" }, { status: 400 })
        }

        // Путь к файлу
        const filepath = path.join(
            process.cwd(),
            ".next",
            "server",
            "app",
            "api",
            "files",
            subfolder,
            filename
        )

        // Проверяем существование
        if (!existsSync(filepath)) {
            console.warn(`Файл не найден: ${filepath}`)
            return NextResponse.json({ error: "Файл не найден" }, { status: 404 })
        }

        // Проверяем права доступа
        try {
            await access(filepath, constants.R_OK)
        } catch {
            return NextResponse.json({ error: "Нет доступа к файлу" }, { status: 403 })
        }

        // Читаем файл
        const buffer = await readFile(filepath)
        const contentType = getContentType(filename)

        return new NextResponse(buffer, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Content-Length': buffer.length.toString(),
                'Cache-Control': 'public, max-age=31536000, immutable',
                'Access-Control-Allow-Origin': '*',
            },
        })
    } catch (error) {
        console.error("Ошибка доступа к файлу:", error)
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 })
    }
}

// Вспомогательная функция для MIME типа
function getContentType(filename: string): string {
    const ext = path.extname(filename).toLowerCase()
    const mimeTypes: Record<string, string> = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword',
        '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    }
    return mimeTypes[ext] || 'application/octet-stream'
}