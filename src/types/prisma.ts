import {LogEventData, LogData, JsonValue} from '@/types/log';
import {LogAction, LogEntity} from "@/lib/logger";

// Тип для произвольного объекта (замена any)
type GenericObject = Record<string, unknown>;

// Безопасная конвертация BigInt в number
export const bigIntToNumber = (value: bigint): number => {
    try {
        const num = Number(value);
        return isNaN(num) ? 0 : num;
    } catch {
        return 0;
    }
};

// ПРОСТАЯ функция подготовки JSON для Prisma
const prepareJsonForPrisma = (data: GenericObject | null | undefined): JsonValue | null => {
    if (data === null || data === undefined) {
        return null; // ✅ Просто null - Prisma сам обработает
    }

    try {
        // Рекурсивно обрабатываем данные, убирая BigInt
        const cleanData = (obj: unknown): JsonValue => {
            if (typeof obj !== 'object' || obj === null) {
                return obj as JsonValue; // ← Исправлено: any → JsonValue
            }

            if (Array.isArray(obj)) {
                return obj.map(cleanData) as JsonValue[];
            }

            const cleaned: Record<string, JsonValue> = {}; // ← Исправлено: Record<string, any> → Record<string, JsonValue>
            for (const [key, value] of Object.entries(obj as Record<string, unknown>)) { // ← Исправлено: any → Record<string, unknown>
                if (typeof value === 'bigint') {
                    cleaned[key] = bigIntToNumber(value);
                } else if (value instanceof Date) {
                    cleaned[key] = value.toISOString();
                } else {
                    cleaned[key] = cleanData(value);
                }
            }

            return cleaned;
        };

        return cleanData(data);
    } catch (error) {
        console.error('Error preparing JSON data:', error);
        return null;
    }
};

// ПРОСТОЙ парсинг JSON данных из БД
const parseJsonFromDb = (data: unknown): JsonValue | null => { // ← Исправлено: any → unknown
    if (data === null || data === undefined) {
        return null;
    }

    try {
        // Если это уже объект, возвращаем как есть
        if (typeof data === 'object' && data !== null) {
            return data as JsonValue;
        }

        // Если строка, пытаемся распарсить
        if (typeof data === 'string') {
            return JSON.parse(data) as JsonValue;
        }

        // Примитивные типы
        return data as JsonValue;
    } catch (error) {
        console.error('Error parsing JSON data:', error);
        return null;
    }
};

export async function logEvent(data: LogEventData): Promise<void> {
    try {
        await prisma.log.create({
            data: {
                action: data.action,
                entity: data.entity,
                entityId: data.entityId,
                userId: data.userId,
                details: prepareJsonForPrisma(data.details), // ✅ Теперь типизировано
            },
        });

        console.log(`[LOG] ${data.action} ${data.entity} #${data.entityId} by user #${data.userId}`);
    } catch (error) {
        console.error('Failed to log event:', error);
    }
}

// Получение логов
export async function getRecentLogs(limit: number = 50): Promise<LogData[]> {
    try {
        const logs = await prisma.log.findMany({
            orderBy: {timestamp: 'desc'},
            take: limit,
        });

        return logs.map((log) => {
            const details = parseJsonFromDb(log.details); // ✅ Теперь типизировано

            return {
                id: log.id,
                action: log.action as LogAction,
                entity: log.entity as LogEntity,
                entityId: bigIntToNumber(log.entityId),
                userId: bigIntToNumber(log.userId),
                timestamp: log.timestamp.toISOString(),
                details,
            };
        });
    } catch (error) {
        console.error('Failed to fetch logs:', error);
        return [];
    }
}