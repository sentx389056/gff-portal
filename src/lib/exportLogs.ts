// lib/exportLogs.ts
import { LogData } from '@/lib/logger';

export const exportLogs = (logs: LogData[], format: 'csv' | 'txt' = 'csv') => {
    if (!logs || logs.length === 0) return;

    let content = '';

    if (format === 'csv') {
        const headers = ['ID', 'Действие', 'Сущность', 'Entity ID', 'User ID', 'Username', 'Время', 'Details'];
        content += headers.join(',') + '\n';

        logs.forEach(log => {
            const row = [
                log.id,
                log.action,
                log.entity,
                log.entityId,
                log.userId,
                `"${log.username}"`,
                log.timestamp,
                `"${log.details ? JSON.stringify(log.details).replace(/"/g, '""') : ''}"`
            ];
            content += row.join(',') + '\n';
        });
    } else {
        logs.forEach(log => {
            content += `ID: ${log.id}\nДействие: ${log.action}\nСущность: ${log.entity}\nEntity ID: ${log.entityId}\nUser ID: ${log.userId}\nUsername: ${log.username}\nВремя: ${log.timestamp}\nDetails: ${log.details ? JSON.stringify(log.details, null, 2) : '---'}\n\n`;
        });
    }

    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `logs_export_${new Date().toISOString()}.${format}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
