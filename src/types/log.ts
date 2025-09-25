// Базовые типы для логирования
import {LogAction, LogEntity} from "@/lib/logger";

// Универсальный тип для JSON данных
export type JsonValue =
    | string
    | number
    | boolean
    | null
    | { [key: string]: JsonValue }
    | JsonValue[];

// Типы для создания лога (входные данные)
export interface LogEventData {
    action: LogAction;
    entity: LogEntity;
    entityId: bigint;
    userId: bigint;
    details?: Record<string, unknown> | null; // ← Исправлено: any → unknown
}

// Тип для данных лога в приложении
export interface LogData {
    id: number;
    action: LogAction;
    entity: LogEntity;
    entityId: number;
    userId: number;
    username: string; // ← Исправлено: User → string (username это строка)
    timestamp: string; // ISO string
    details?: JsonValue; // Простой тип JSON
}

// Тип для ответа API
export interface ApiLogResponse {
    logs: LogData[];
    total: number;
}

// Тип для безопасной работы с details
export type SafeDetails = Record<string, unknown> | null | undefined; // ← Исправлено: any → unknown