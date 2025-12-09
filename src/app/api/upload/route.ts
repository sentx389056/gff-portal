// src/app/api/upload/route.ts
import { NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"
import { existsSync } from "fs"

interface UploadResponse {
    success: boolean;
    url?: string;
    filename?: string;
    size?: number;
    type?: string;
    error?: string;
}

export async function POST(request: Request): Promise<NextResponse<UploadResponse>> {
    try {
        const data = await request.formData()
        const file: File | null = data.get('file') as unknown as File

        if (!file) {
            return NextResponse.json({
                success: false,
                error: "Файл не найден"
            }, { status: 400 })
        }

        // Валидация размера
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (file.size > maxSize) {
            return NextResponse.json({
                success: false,
                error: "Файл слишком большой (максимум 5 МБ)"
            }, { status: 400 })
        }

        // Тип файла и подпапка
        const fileType = file.type.split('/')[0] // image, application
        const subfolder = fileType === 'image' ? 'images' : 'documents'

        // Оригинальное имя файла с очисткой специальных символов
        const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
        const filename = cleanName

        // ИСПРАВЛЕНО: Сохраняем в public/uploads (постоянная папка)
        const uploadDir = path.join(process.cwd(), "public", "uploads", subfolder)
        const filepath = path.join(uploadDir, filename)

        // Создаем папку если не существует
        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true })
            console.log(`📁 Создана папка: ${uploadDir}`)
        }

        // Сохраняем файл
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        await writeFile(filepath, buffer)

        // Прямой публичный URL (файлы из public доступны автоматически)
        const fileUrl = `/uploads/${subfolder}/${filename}`

        console.log(`💾 Файл загружен: ${fileUrl}`)
        console.log(`📂 Сохранён в: ${filepath}`)

        return NextResponse.json({
            success: true,
            url: fileUrl, // /uploads/images/123456_file.png
            filename: file.name,
            size: file.size,
            type: fileType,
        })
    } catch (error) {
        console.error("💥 Ошибка загрузки файла:", error)
        return NextResponse.json({
            success: false,
            error: "Ошибка загрузки файла",
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
    }
}