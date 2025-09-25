"use client";

import * as React from "react";
import {
    Activity,
    User,
    FileText,
    Newspaper,
    Users,
    X,
    RefreshCw,
    EllipsisVertical,
    Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { formatDate, formatTime } from '@/lib/utils';
import { logApi } from '@/lib/api';
import {useSession} from "next-auth/react";
import {exportLogs} from "@/lib/exportLogs";
import {LogAction, LogEntity} from "@/lib/logger";

interface LogDetails {
    [key: string]: unknown;
}

interface LogItem {
    id: number;
    action: LogAction;
    entity: LogEntity;
    entityId: number;
    userId: number;
    username: string;
    timestamp: string;
    details?: LogDetails; // ← Исправлено: any → LogDetails
}

const getActionConfig = (action: LogAction) => {
    switch (action) {
        case 'create':
            return {
                variant: "default" as const,
                className: "bg-green-100 text-green-800 border-green-200",
                label: 'Создано'
            };
        case 'update':
            return {
                variant: "secondary" as const,
                className: "bg-blue-100 text-blue-800 border-blue-200",
                label: 'Изменено'
            };
        case 'delete':
            return {
                variant: "destructive" as const,
                className: "bg-red-100 text-red-800 border-red-200",
                label: 'Удалено'
            };
        default:
            return {
                variant: "secondary" as const,
                className: "bg-gray-100 text-gray-800 border-gray-200",
                label: action
            };
    }
};

const getEntityConfig = (entity: LogEntity) => {
    switch (entity) {
        case 'news':
            return { label: 'Новость', icon: <Newspaper className="h-4 w-4 mr-1" /> };
        case 'document':
            return { label: 'Документ', icon: <FileText className="h-4 w-4 mr-1" /> };
        case 'user':
            return { label: 'Пользователь', icon: <Users className="h-4 w-4 mr-1" /> };
        default:
            return { label: entity, icon: <Activity className="h-4 w-4 mr-1" /> };
    }
};

export default function AdminLogs() {
    const { data: session } = useSession()
    const [logs, setLogs] = React.useState<LogItem[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [selectedLog, setSelectedLog] = React.useState<LogItem | null>(null);
    const [filterAction, setFilterAction] = React.useState<LogAction | ''>('');

    React.useEffect(() => {
        async function fetchLogs() {
            setLoading(true);
            try {
                const response = await logApi.getRecentLogs(25);
                // Фильтруем ошибки при загрузке
                const filteredLogs = response.logs?.filter(log => log.action !== 'error') || [];
                setLogs(filteredLogs);
            } catch (error) {
                console.error("Ошибка при загрузке логов:", error);
                setLogs([]);
            } finally {
                setLoading(false);
            }
        }
        fetchLogs();
    }, []);

    const handleRefresh = async () => {
        setLoading(true);
        try {
            const response = await logApi.getRecentLogs(25);
            // Фильтруем ошибки при обновлении
            const filteredLogs = response.logs?.filter(log => log.action !== 'error') || [];
            setLogs(filteredLogs);
        } catch (error) {
            console.error("Ошибка при обновлении логов:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogView = (log: LogItem) => {
        setSelectedLog(log);
    };

    const filteredLogs = React.useMemo(() => {
        return logs.filter(log => {
            const matchesAction = !filterAction || log.action === filterAction;
            return matchesAction;
        });
    }, [logs, filterAction]);

    const getFilterLabel = (action: LogAction | ''): string => {
        switch (action) {
            case 'create': return 'Создание';
            case 'update': return 'Изменение';
            case 'delete': return 'Удаление';
            default: return 'Все действия';
        }
    };

    if (!session || session.user.role !== "admin") {
        return <div>Доступ запрещён. Пожалуйста, войдите как администратор.</div>
    }

    if (loading && logs.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <Activity className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground">Загрузка логов...</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Заголовок и фильтры */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <p className="text-muted-foreground">
                        Последние действия в системе ({filteredLogs.length} записей)
                    </p>
                </div>

                <div className="flex items-center gap-2">

                    <Button onClick={handleRefresh} variant="outline" size="sm">
                        <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                        Обновить
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                Экспорт
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Экспорт логов</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => exportLogs(filteredLogs, 'csv')}>
                                CSV
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => exportLogs(filteredLogs, 'txt')}>
                                TXT
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-40">
                                {getFilterLabel(filterAction)}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Фильтр по действию</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setFilterAction('')}>
                                Все действия
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterAction('create')}>
                                Создание
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterAction('update')}>
                                Изменение
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setFilterAction('delete')}>
                                Удаление
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>

            {/* Таблица логов */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Действие</TableHead>
                        <TableHead className="w-[200px]">Сущность</TableHead>
                        <TableHead className="w-[180px]">Пользователь</TableHead>
                        <TableHead className="w-[120px]">Дата</TableHead>
                        <TableHead className="text-right w-[80px]">Действие</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading && filteredLogs.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center h-24">
                                <Activity className="h-8 w-8 animate-spin mx-auto mb-2 text-muted-foreground" />
                                Загрузка...
                            </TableCell>
                        </TableRow>
                    ) : filteredLogs.length > 0 ? (
                        filteredLogs.map((log) => {
                            const actionConfig = getActionConfig(log.action);
                            const entityConfig = getEntityConfig(log.entity);

                            return (
                                <TableRow key={log.id} className="hover:bg-muted/50">
                                    <TableCell className="font-medium">
                                        <Badge
                                            variant={actionConfig.variant}
                                            className={actionConfig.className}
                                        >
                                            {actionConfig.label}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center">
                                            {entityConfig.icon}
                                            {entityConfig.label} #{log.entityId}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center mr-2">
                                                <User className="h-3 w-3 text-muted-foreground" />
                                            </div>
                                            <span className="font-medium">{log.username}</span>
                                            {log.userId !== 0 && (
                                                <span className="text-xs text-muted-foreground ml-1">({log.userId})</span>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-sm">
                                            <div>{formatDate(log.timestamp)}</div>
                                            <div className="text-xs text-muted-foreground">{formatTime(log.timestamp)}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="h-8 w-8 p-0 cursor-pointer"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <EllipsisVertical className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Действия</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleLogView(log);
                                                    }}
                                                    className="cursor-pointer"
                                                >
                                                    <Eye className="h-4 w-4 mr-2" />
                                                    Просмотреть детали
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center h-24">
                                <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                                <div className="text-muted-foreground">
                                    <div className="font-medium">Логи не найдены</div>
                                    <div className="text-sm">Попробуйте изменить фильтры</div>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* Модальное окно с деталями */}
            <Dialog open={!!selectedLog} onOpenChange={() => setSelectedLog(null)}>
                <DialogContent className="max-w-2xl max-h-[80vh] w-full">
                    <DialogHeader>
                        <DialogTitle>Детали события #{selectedLog?.id || 0}</DialogTitle>
                    </DialogHeader>

                    {selectedLog && (
                        <div className="space-y-6 pt-4 max-h-[60vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <span className="text-sm text-muted-foreground block">Действие</span>
                                        <Badge
                                            variant={getActionConfig(selectedLog.action).variant}
                                            className={getActionConfig(selectedLog.action).className}
                                        >
                                            {getActionConfig(selectedLog.action).label}
                                        </Badge>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-sm text-muted-foreground block">Сущность</span>
                                        <div className="flex items-center text-sm font-medium">
                                            {getEntityConfig(selectedLog.entity).icon}
                                            {getEntityConfig(selectedLog.entity).label} #{selectedLog.entityId}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-sm text-muted-foreground block">ID события</span>
                                        <span className="text-sm font-mono">#{selectedLog.id}</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <span className="text-sm text-muted-foreground block">Пользователь</span>
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                                                <User className="h-3 w-3 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">{selectedLog.username}</div>
                                                {selectedLog.userId !== 0 && (
                                                    <div className="text-xs text-muted-foreground">ID: {selectedLog.userId}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-sm text-muted-foreground block">Время</span>
                                        <div className="text-sm">
                                            <div className="font-mono">{formatDate(selectedLog.timestamp)}</div>
                                            <div className="text-xs text-muted-foreground">{formatTime(selectedLog.timestamp)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {selectedLog.details && (
                                <div className="space-y-3">
                                    <h4 className="font-medium flex items-center gap-2 text-sm">
                                        Детали события
                                        <div className={`w-2 h-2 rounded-full ${
                                            selectedLog.action === 'create' ? 'bg-green-500' :
                                                selectedLog.action === 'update' ? 'bg-blue-500' :
                                                    selectedLog.action === 'delete' ? 'bg-red-500' :
                                                        'bg-gray-500'
                                        }`} />
                                    </h4>
                                    <div className="bg-muted/50 rounded-lg p-4 max-h-96 overflow-auto">
                                        <pre className="text-xs font-mono whitespace-pre-wrap">
                                            {(() => {
                                                if (!selectedLog.details || typeof selectedLog.details !== 'object') {
                                                    return 'Детали отсутствуют';
                                                }
                                                try {
                                                    return JSON.stringify(selectedLog.details, null, 2);
                                                } catch (error) {
                                                    console.error('Error formatting log details for modal:', error);
                                                    return 'Не удалось прочитать детали';
                                                }
                                            })()}
                                        </pre>
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-end pt-4 border-t">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setSelectedLog(null)}
                                >
                                    <X className="h-4 w-4 mr-2" />
                                    Закрыть
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}