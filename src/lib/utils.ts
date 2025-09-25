import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import {format} from "date-fns";
import {ru} from "date-fns/locale";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Исправленные функции форматирования дат
export const formatDate = (date: Date | string): string => {
    try {
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) {
            return new Date().toLocaleDateString('ru-RU');
        }
        return format(dateObj, "dd MMMM yyyy", { locale: ru });
    } catch (error) {
        console.error("Error formatting date:", error);
        return new Date().toLocaleDateString('ru-RU');
    }
};

export const formatTime = (date: Date | string): string => {
    try {
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) {
            return new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        return format(dateObj, "HH:mm", { locale: ru });
    } catch (error) {
        console.error("Error formatting time:", error);
        return new Date().toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
};

export const getFileExtension = (url: string): string => {
    try {
        const filename = url.split('/').pop() || '';
        const parts = filename.split('.');
        if (parts.length > 1) {
            return parts.pop()!.toUpperCase();
        }
    } catch (e) {
        console.error("Error parsing file URL:", e);
    }
    return '';
};
