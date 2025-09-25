// @/lib/api.ts
export interface LogDetails {
    [key: string]: unknown; // Детали лога могут содержать любые ключи
}

export interface LogData {
    id: number;
    action: string; // LogAction
    entity: string; // LogEntity
    entityId: number;
    userId: number;
    username: string; // ← Это поле должно быть
    timestamp: string;
    details?: LogDetails; // ← Исправлено: any → LogDetails
}

export interface ApiLogResponse {
    logs: LogData[];
    total: number;
}

export const logApi = {
    getRecentLogs: async (limit: number = 25): Promise<ApiLogResponse> => {
        try {
            console.log('🌐 API Request to: /api/logs?limit=' + limit);
            const response = await fetch(`/api/logs?limit=${limit}`);

            console.log('📡 API Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('❌ API Error response:', errorText);
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            console.log('✅ API Success response:', data);
            console.log('📋 Logs with usernames:', data.logs.map(l => ({id: l.id, username: l.username})));

            return data;
        } catch (error) {
            console.error('💥 Network error:', error);
            throw error;
        }
    }
};