// src/app/api/files/[...path]/route.ts
import { NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"
import { existsSync } from "fs"

export async function GET(
    request: NextRequest,
    { params }: { params: { path: string[] } }
) {
    try {
        // Собираем путь из массива: ['documents', '1765522567527_README.pdf']
        const filePath = params.path.join('/')
        const uploadBaseDir = process.env.UPLOAD_DIR || '/var/www/uploads'
        const fullPath = path.join(uploadBaseDir, filePath)

        console.log(`📥 Запрос файла: ${filePath}`)
        console.log(`📂 Полный путь: ${fullPath}`)

        // Проверка безопасности
        const normalizedPath = path.normalize(fullPath)
        if (!normalizedPath.startsWith(uploadBaseDir)) {
            console.error(`⛔ Попытка доступа за пределы папки загрузок`)
            return NextResponse.json(
                { error: "Недопустимый путь" },
                { status: 403 }
            )
        }

        if (!existsSync(fullPath)) {
            console.error(`❌ Файл не найден: ${fullPath}`)
            return NextResponse.json(
                { error: "Файл не найден" },
                { status: 404 }
            )
        }

        const fileBuffer = await readFile(fullPath)
        const filename = path.basename(fullPath)

        // Определяем MIME type
        const ext = path.extname(filename).toLowerCase()
        const mimeTypes: Record<string, string> = {
            '.pdf': 'application/pdf',
            '.doc': 'application/msword',
            '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            '.xls': 'application/vnd.ms-excel',
            '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.webp': 'image/webp',
        }

        const contentType = mimeTypes[ext] || 'application/octet-stream'

        console.log(`✅ Файл отдан: ${filename} (${contentType})`)

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Content-Disposition': `inline; filename="${encodeURIComponent(filename)}"`,
                'Cache-Control': 'public, max-age=31536000',
            },
        })
    } catch (error) {
        console.error("💥 Ошибка при получении файла:", error)
        return NextResponse.json(
            { error: "Ошибка при получении файла" },
            { status: 500 }
        )
    }
}