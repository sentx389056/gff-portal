// app/api/logs/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from "../../../../prisma/generated/prisma";

const prisma = new PrismaClient();

type LogAction = 'create' | 'update' | 'delete';
type LogEntity = 'news' | 'document' | 'user';

interface LogData {
    id: number;
    action: LogAction;
    entity: LogEntity;
    entityId: number;
    userId: number;
    username: string;
    timestamp: string;
    details?: Record<string, unknown>; // Заменили any на Record<string, unknown>
}

interface ApiLogResponse {
    logs: LogData[];
    total: number;
}

const bigIntToNumber = (value: bigint): number => {
    try {
        const num = Number(value);
        return isNaN(num) ? 0 : num;
    } catch {
        return 0;
    }
};

const parseDetails = (details: Record<string, unknown>): Record<string, unknown> | null => { // Заменили any
    if (!details) return null;

    try {
        if (typeof details === 'string') {
            return JSON.parse(details) as Record<string, unknown>;
        }
        return details;
    } catch (error) {
        console.error('Error parsing log details:', error);
        return null;
    }
};

export async function GET(request: Request) {
    try {
        console.log('🛤️ API /logs called');

        const url = new URL(request.url);
        const limit = Math.min(
            parseInt(url.searchParams.get('limit') || '25', 10),
            100
        );

        const actionFilter = url.searchParams.get('action') as LogAction | null;
        const searchQuery = url.searchParams.get('search') || '';

        // Создаем интерфейс для whereClause
        interface WhereClause {
            action?: LogAction | { in: LogAction[] };
            OR?: {
                entityId?: { contains: string; mode: 'insensitive' };
                userId?: { contains: string; mode: 'insensitive' };
            }[];
        }

        const whereClause: WhereClause = {}; // Заменили any на WhereClause

        // Фильтр по действию (исключаем ошибки)
        if (actionFilter) {
            whereClause.action = actionFilter;
        } else {
            whereClause.action = { in: ['create', 'update', 'delete'] };
        }

        if (searchQuery) {
            whereClause.OR = [
                {
                    entityId: {
                        contains: searchQuery,
                        mode: 'insensitive'
                    }
                },
                {
                    userId: {
                        contains: searchQuery,
                        mode: 'insensitive'
                    }
                }
            ];
        }

        console.log('🔍 Where clause:', whereClause);

        // 1. Получаем общее количество
        const total = await prisma.log.count({
            where: whereClause,
        });

        console.log('📊 Total logs found:', total);

        // 2. Получаем логи БЕЗ связи (избегаем проблемы с include)
        const logs = await prisma.log.findMany({
            where: whereClause,
            orderBy: { timestamp: 'desc' },
            take: limit,
        });

        console.log('📋 Raw logs from DB:', logs.length, 'records');
        console.log('📋 Sample raw log:', logs[0]);

        // 3. Получаем ID пользователей (BigInt -> number)
        const userIds = logs
            .map(log => bigIntToNumber(log.userId))
            .filter(id => id > 0);

        console.log('👥 Unique user IDs:', [...new Set(userIds)]);

        // 4. Получаем пользователей отдельным запросом
        let userMap = new Map<number, string>();

        if (userIds.length > 0) {
            const users = await prisma.users.findMany({
                where: {
                    id: {
                        in: userIds.map(id => BigInt(id)) // Конвертируем обратно в BigInt
                    }
                },
                select: {
                    id: true,
                    username: true
                }
            });

            console.log('👤 Fetched users:', users.length, 'users');
            console.log('👤 Users data:', users);

            // Создаем мапу BigInt -> username
            const bigIntUserMap = new Map(
                users.map(user => [user.id, user.username])
            );

            // Конвертируем ключи в number для удобства
            userMap = new Map(
                Array.from(bigIntUserMap.entries()).map(([bigIntId, username]) => [
                    bigIntToNumber(bigIntId),
                    username
                ])
            );
        }

        // 5. Форматируем логи
        const formattedLogs: LogData[] = logs.map((log, index) => {
            // Получаем username из мапы или используем 'anonymous'
            const username = userMap.get(bigIntToNumber(log.userId)) || 'anonymous';

            const formattedLog = {
                id: log.id,
                action: log.action as LogAction,
                entity: log.entity as LogEntity,
                entityId: bigIntToNumber(log.entityId),
                userId: bigIntToNumber(log.userId),
                username, // ← Теперь это будет реальное имя
                timestamp: log.timestamp.toISOString(),
                details: parseDetails(log.details),
            };

            // Отладка для первых нескольких логов
            if (index < 3) {
                console.log(`🔧 Formatting log ${log.id}: userId=${bigIntToNumber(log.userId)}, username="${username}"`);
            }

            return formattedLog;
        });

        console.log('✅ Formatted logs sample:', formattedLogs.slice(0, 3).map(l => ({id: l.id, username: l.username})));

        const response: ApiLogResponse = {
            logs: formattedLogs,
            total,
        };

        console.log('📤 API Response:', { logsCount: response.logs.length, total: response.total });

        return NextResponse.json(response);
    } catch (error) {
        console.error('💥 Database Error:', error);
        return NextResponse.json(
            {
                error: 'Failed to fetch logs',
                logs: [],
                total: 0
            },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}