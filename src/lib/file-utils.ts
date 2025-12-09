// lib/file-utils.ts
import { unlink } from "fs/promises"
import path from "path"
import { existsSync } from "fs"

/**
 * Удаляет файл из public/uploads
 * @param filePath - путь вида "/uploads/images/file.png"
 * @returns true если удалён успешно, false если файл не найден
 */
export async function deleteFile(filePath: string | null): Promise<boolean> {
    if (!filePath) {
        return false
    }

    try {
        // Убираем начальный слеш если есть
        const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath
        
        // Полный путь: public/uploads/images/file.png
        const fullPath = path.join(process.cwd(), "public", cleanPath)

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