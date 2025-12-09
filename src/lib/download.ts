/**
 * Скачивает документ с оригинальным названием
 * @param fileUrl - URL файла
 * @param fileName - Оригинальное имя файла
 */
export async function downloadDocument(fileUrl: string, fileName?: string) {
    try {
        // Получаем имя файла из URL, если не предоставлено
        const finalFileName = fileName || getFileNameFromUrl(fileUrl);
        
        // Если это тот же домен, просто создаем ссылку для скачивания
        if (fileUrl.startsWith('/') || fileUrl.startsWith(window.location.origin)) {
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = finalFileName;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
        }
        
        // Для внешних URL скачиваем файл и создаем blob
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error(`Ошибка при скачивании: ${response.statusText}`);
        }
        
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = finalFileName;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Очищаем URL объекта
        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error('Ошибка при скачивании документа:', error);
        // Fallback: открываем файл в новой вкладке
        window.open(fileUrl, '_blank');
    }
}

/**
 * Извлекает имя файла из URL
 */
function getFileNameFromUrl(url: string): string {
    try {
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        const fileName = pathname.split('/').pop();
        
        // Если имя файла не найдено или пустое, используем значение по умолчанию
        if (!fileName || fileName === '') {
            return 'document';
        }
        
        return fileName;
    } catch {
        // Если URL невалидный, извлекаем последнюю часть после '/'
        const parts = url.split('/');
        const fileName = parts[parts.length - 1];
        return fileName || 'document';
    }
}

/**
 * Получает расширение файла
 */
export function getFileExtension(fileName: string): string {
    const parts = fileName.split('.');
    return parts.length > 1 ? parts[parts.length - 1] : '';
}