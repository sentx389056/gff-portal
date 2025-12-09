'use client';
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate, getFileExtension } from "@/lib/utils";

// Тип для элемента документа
interface DocumentItem {
    id: string;
    title: string | null;
    type_id: string;
    type: {
        type: string;
    };
    created_at: string;
    description: string | null;
    file_url: string | null;
}

export default function OrdersSection() {
    const [documents, setDocuments] = useState<DocumentItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDocuments() {
            try {
                const response = await fetch('/api/documents');
                if (!response.ok) {
                    throw new Error('Ошибка при получении документов');
                }
                const data = await response.json();
                // Фильтруем только документы с типом "приказ"
                const orders = data.filter((doc: DocumentItem) => 
                    doc.type.type && doc.type.type.toLowerCase() === 'приказ'
                );
                setDocuments(orders);
            } catch (error) {
                console.error('Ошибка при загрузке документов:', error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchDocuments();
        
        // Устанавливаем интервал для обновления каждые 30 секунд
        const interval = setInterval(fetchDocuments, 30000);
        
        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="flex flex-col gap-6">
                {loading ? (
                    Array.from({ length: 3 }).map((_, idx) => (
                        <div className="documents-item" key={idx}>
                            <div className="documents-info">
                                <div className="documents-title-row">
                                    <Skeleton className="documents-title w-1/3 h-6 mb-2" />
                                    <Skeleton className="documents-badge w-16 h-6" />
                                </div>
                                <Skeleton className="documents-desc w-2/3 h-4 mb-2" />
                                <div className="documents-meta flex gap-2 items-center">
                                    <Skeleton className="w-16 h-4" />
                                    <span>•</span>
                                    <Skeleton className="w-10 h-4" />
                                    <span>•</span>
                                    <Skeleton className="w-12 h-4" />
                                </div>
                            </div>
                            <Skeleton className="flex items-center gap-2 w-33 h-11" />
                        </div>
                    ))
                ) :
                documents.length === 0 ? (
                    <div className="text-center py-10 text-gray-400">
                        Нет приказов для отображения
                    </div>
                ) : (
                    documents.slice(0, 3).map((doc: DocumentItem) => (
                        <div className="rounded-md flex flex-col gap-6 sm:flex-row justify-between bg-white border-1 shadow-md px-6 py-8 duration-200 hover:shadow-xl" key={doc.id}>
                            <div className="space-y-3">
                                <div className="flex items-center gap-6">
                                    <span className="text-xl">{doc.title || "Без названия"}</span>
                                    <Badge>
                                        {doc.type.type}
                                    </Badge>
                                </div>
                                <div className="text-lg text-slate-700">{doc.description || "Описание отсутствует"}</div>
                                <div className="flex gap-6 items-center">
                                    <span className="text-md text-slate-500">
                                        {formatDate(doc.created_at)}
                                    </span>
                                    <span className="text-md text-slate-500">{getFileExtension(doc.file_url || "#")}</span>
                                </div>
                            </div>
                            <Separator className="" orientation="vertical" />
                            <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                                <Link href={doc.file_url || "#"} target="_blank" download>
                                    Скачать
                                </Link>
                            </Button>
                        </div>
                    ))
                )}
            </div>
            
            {documents.length > 3 && (
                <div className="text-center mt-8">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/documents">
                            Все документы
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );
}
