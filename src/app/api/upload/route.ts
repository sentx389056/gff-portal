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

        const maxSize = 5 * 1024 * 1024 // 5MB
        if (file.size > maxSize) {
            return NextResponse.json({
                success: false,
                error: "Файл слишком большой (максимум 5 МБ)"
            }, { status: 400 })
        }

        const fileType = file.type.split('/')[0]
        const subfolder = fileType === 'image' ? 'images' : 'documents'
        const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")

        // Добавляем timestamp чтобы избежать перезаписи
        const timestamp = Date.now()
        const filename = `${timestamp}_${cleanName}`

        // ИСПРАВЛЕНИЕ: Используем переменную окружения или папку вне проекта
        const uploadBaseDir = process.env.UPLOAD_DIR || '/var/www/uploads'
        const uploadDir = path.join(uploadBaseDir, subfolder)
        const filepath = path.join(uploadDir, filename)

        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true })
            console.log(`📁 Создана папка: ${uploadDir}`)
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        await writeFile(filepath, buffer)

        // URL для скачивания через API
        const fileUrl = `/api/files/${subfolder}/${filename}`

        console.log(`💾 Файл загружен: ${fileUrl}`)
        console.log(`📂 Сохранён в: ${filepath}`)

        return NextResponse.json({
            success: true,
            url: fileUrl,
            filename: file.name,
            size: file.size,
            type: fileType,
        })
    } catch (error) {
        console.error("💥 Ошибка загрузки файла:", error)
        return NextResponse.json({
            success: false,
            error: "Ошибка загрузки файла"
        }, { status: 500 })
    }
}