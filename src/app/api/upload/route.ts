// app/api/files/upload/route.ts
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

        // Валидация
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

        // Уникальное имя файла
        const timestamp = Date.now()
        const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
        const filename = `${timestamp}_${cleanName}`

        // Путь: .next/server/app/api/files/[type]/[filename]
        const uploadDir = path.join(process.cwd(), ".next", "server", "app", "api", "files", subfolder)
        const filepath = path.join(uploadDir, filename)

        // Создаем папку
        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true })
        }

        // Сохраняем файл
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        await writeFile(filepath, buffer)

        // Публичный URL через API route
        const fileUrl = `/api/files/${subfolder}/${filename}`

        console.log(`💾 File uploaded: ${fileUrl}`)

        return NextResponse.json({
            success: true,
            url: fileUrl, // /api/files/images/filename.png
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