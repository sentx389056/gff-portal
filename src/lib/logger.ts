// @/lib/logger.ts
import { getServerSession } from "next-auth/next"
import type { Session } from "next-auth"
// Удалите импорт authOptions - используйте getServerSession напрямую

import { PrismaClient } from "../../prisma/generated/prisma";

const prisma = new PrismaClient();

export type LogAction = 'create' | 'update' | 'delete' | 'error';
export type LogEntity = 'news' | 'document' | 'user';

export interface LogData {
    id: number;
    action: LogAction;
    entity: LogEntity;
    entityId: number;
    userId: number;
    username: string;
    timestamp: string;
    details?: Record<string, unknown>;
}

interface LogEventData {
    action: LogAction;
    entity: LogEntity;
    entityId: bigint;
    userId?: bigint;
    details?: Record<string, unknown>;
}

// Функция для получения текущего пользователя из сессии
const getCurrentUser = async (): Promise<{ userId: bigint, username: string }> => {
    try {
        // Используем getServerSession без параметров
        const session = await getServerSession() as Session | null;

        if (!session?.user?.id) {
            return { userId: BigInt(0), username: 'anonymous' };
        }

        const userId = BigInt(parseInt(session.user.id));
        const username = session.user.username || 'unknown';

        return { userId, username };
    } catch (error) {
        console.error('Ошибка при получении текущего пользователя:', error);
        return { userId: BigInt(0), username: 'anonymous' };
    }
};

const safeStringify = (obj: unknown): string => {
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === 'bigint') {
            return value.toString();
        }
        return value;
    });
};

export async function logEvent(data: LogEventData): Promise<void> {
    try {
        let finalUserId = data.userId || BigInt(0);
        let finalUsername = 'anonymous';

        if (!data.userId || data.userId === BigInt(0)) {
            const currentUser = await getCurrentUser();
            finalUserId = currentUser.userId;
            finalUsername = currentUser.username;
        } else {
            try {
                const user = await prisma.users.findUnique({
                    where: { id: data.userId },
                    select: { username: true }
                });
                finalUsername = user?.username || 'unknown';
            } catch (error) {
                console.error('Ошибка при получении username из БД:', error);
                finalUsername = 'unknown';
            }
        }

        console.log('🔄 Attempting to log:', {
            action: data.action,
            entity: data.entity,
            entityId: data.entityId.toString(),
            username: finalUsername,
            userId: finalUserId.toString(),
            hasDetails: !!data.details,
        });

        await prisma.log.create({
            data: {
                action: data.action,
                entity: data.entity,
                entityId: data.entityId,
                userId: finalUserId,
                details: data.details ? safeStringify(data.details) : null,
            },
        });

        console.log('✅ Log saved successfully for', finalUsername, data.action, data.entity);
    } catch (error) {
        console.error('❌ Failed to log event:', error);
    }
}

// getRecentLogs остается без изменений
export async function getRecentLogs(limit: number = 25): Promise<{ logs: LogData[]; total: number }> {
    try {
        const logs = await prisma.log.findMany({
            where: {
                action: { in: ['create', 'update', 'delete'] }
            },
            orderBy: { timestamp: 'desc' },
            take: limit,
        });

        const userIds = logs
            .map(log => Number(log.userId))
            .filter(id => id > 0);

        let userMap = new Map<number, string>();

        if (userIds.length > 0) {
            const users = await prisma.users.findMany({
                where: {
                    id: { in: userIds.map(id => BigInt(id)) }
                },
                select: {
                    id: true,
                    username: true
                }
            });

            userMap = new Map(
                users.map(user => [Number(user.id), user.username])
            );
        }

        const formattedLogs: LogData[] = logs.map((log) => {
            const username = userMap.get(Number(log.userId)) || 'anonymous';

            return {
                id: log.id,
                action: log.action as LogAction,
                entity: log.entity as LogEntity,
                entityId: Number(log.entityId),
                userId: Number(log.userId),
                username,
                timestamp: log.timestamp.toISOString(),
                details: log.details ? JSON.parse(log.details) : undefined,
            };
        });

        return {
            logs: formattedLogs,
            total: logs.length,
        };
    } catch (error) {
        console.error('Failed to fetch logs:', error);
        return { logs: [], total: 0 };
    } finally {
        await prisma.$disconnect();
    }
}