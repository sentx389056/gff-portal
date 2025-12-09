// src/app/api/files/[subfolder]/[filename]/route.ts
// ПРИМЕЧАНИЕ: Этот route НЕ нужен, т.к. файлы из public/ раздаются автоматически
// Оставлен только для обратной совместимости со старыми ссылками

import { NextResponse } from "next/server"
import { readFile, access, constants } from "fs/promises"
import path from "path"
import { existsSync } from "fs"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ subfolder: string; filename: string }> }
) {
    try {
        // Await params (Next.js 15 requirement)
        const { subfolder, filename } = await params

        // Валидация пути
        if (!['images', 'documents'].includes(subfolder)) {
            return NextResponse.json({ error: "Недопустимая папка" }, { status: 400 })
        }

        if (!filename || filename.includes('..') || filename.includes('/')) {
            return NextResponse.json({ error: "Недопустимое имя файла" }, { status: 400 })
        }

        // ИСПРАВЛЕНО: Читаем из public/uploads
        const filepath = path.join(
            process.cwd(),
            "public",
            "uploads",
            subfolder,
            filename
        )

        // Проверяем существование
        if (!existsSync(filepath)) {
            console.warn(`❌ Файл не найден: ${filepath}`)
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

        console.log(`✅ Файл отправлен: ${filepath}`)

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
        console.error("💥 Ошибка доступа к файлу:", error)
        return NextResponse.json({ 
            error: "Ошибка сервера",
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
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
        '.xls': 'application/vnd.ms-excel',
        '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }
    return mimeTypes[ext] || 'application/octet-stream'
}