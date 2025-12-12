// lib/file-utils.ts
import { unlink } from "fs/promises"
import path from "path"
import { existsSync } from "fs"

/**
 * Удаляет файл из /var/www/uploads
 * @param filePath - путь вида "/api/files/images/123_file.png" или старый "/uploads/images/file.png"
 * @returns true если удалён успешно, false если файл не найден
 */
export async function deleteFile(filePath: string | null): Promise<boolean> {
    if (!filePath) {
        return false
    }

    try {
        let cleanPath = filePath

        // Обработка нового формата: /api/files/documents/123_file.pdf
        if (cleanPath.startsWith('/api/files/')) {
            cleanPath = cleanPath.replace('/api/files/', '')
        }
        // Обработка старого формата: /uploads/documents/file.pdf
        else if (cleanPath.startsWith('/uploads/')) {
            cleanPath = cleanPath.replace('/uploads/', '')
        }
        // Убираем начальный слеш если остался
        else if (cleanPath.startsWith('/')) {
            cleanPath = cleanPath.slice(1)
        }

        // Используем UPLOAD_DIR из переменных окружения или дефолтный путь
        const uploadBaseDir = process.env.UPLOAD_DIR || '/var/www/uploads'
        const fullPath = path.join(uploadBaseDir, cleanPath)

        // Проверка безопасности: файл должен быть внутри uploadBaseDir
        const normalizedPath = path.normalize(fullPath)
        if (!normalizedPath.startsWith(uploadBaseDir)) {
            console.error(`⛔ Попытка удалить файл за пределами папки загрузок: ${fullPath}`)
            return false
        }

        if (existsSync(fullPath)) {
            await unlink(fullPath)
            console.log(`🗑️ Файл удалён: ${fullPath}`)
            return true
        } else {
            console.warn(`⚠️ Файл не найден: ${fullPath}`)
            return false
        }
    } catch (error) {
        console.error(`❌ Ошибка при удалении файла ${filePath}:`, error)
        return false
    }
}

/**
 * Извлекает имя файла из URL
 * @param fileUrl - URL вида "/api/files/documents/123_file.pdf"
 * @returns имя файла, например "123_file.pdf"
 */
export function getFileNameFromUrl(fileUrl: string | null): string | null {
    if (!fileUrl) return null

    const parts = fileUrl.split('/')
    return parts[parts.length - 1] || null
}

/**
 * Проверяет существование файла
 * @param filePath - путь к файлу
 * @returns true если файл существует
 */
export async function fileExists(filePath: string | null): Promise<boolean> {
    if (!filePath) return false

    try {
        let cleanPath = filePath

        if (cleanPath.startsWith('/api/files/')) {
            cleanPath = cleanPath.replace('/api/files/', '')
        } else if (cleanPath.startsWith('/uploads/')) {
            cleanPath = cleanPath.replace('/uploads/', '')
        } else if (cleanPath.startsWith('/')) {
            cleanPath = cleanPath.slice(1)
        }

        const uploadBaseDir = process.env.UPLOAD_DIR || '/var/www/uploads'
        const fullPath = path.join(uploadBaseDir, cleanPath)

        return existsSync(fullPath)
    } catch (error) {
        console.error(`❌ Ошибка при проверке существования файла ${filePath}:`, error)
        return false
    }
}