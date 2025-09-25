import Image from "next/image";
import { Calendar, Timer } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { notFound } from 'next/navigation';
import {formatDate, formatTime} from "@/lib/utils";
import Link from "next/link";

interface News {
    id: string;
    title: string;
    description: string;
    image_url?: string;
    created_at: string;
    type: { type: string };
}

interface NewsPageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
    // Получаем id здесь, чтобы избежать ошибки
    const { id } = await params;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${id}`, {
            cache: 'no-store', // Отключает кеширование, чтобы всегда получать актуальные данные
        });

        if (!response.ok) {
            // Для 404 используем notFound() из Next.js
            if (response.status === 404) {
                notFound();
            }

            const errorData = await response.json();
            throw new Error(errorData.error || 'Не удалось получить новость');
        }

        const item: News = await response.json();

        // Проверяем, что данные корректны
        if (!item || !item.title) {
            notFound();
        }


        return (
            <article className="max-w-7xl mx-auto py-10 px-4">
                {/* Изображение */}
                <div className="mb-6">
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                        <Image
                            src={item.image_url || "/fallback-news.png"}
                            alt={item.title || "Изображение новости"}
                            fill
                            className="h-full w-full object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority // Для главной картинки страницы
                        />
                    </AspectRatio>
                </div>

                {/* Метаданные */}
                <div className="mb-6 flex items-center gap-3 flex-wrap">
                    <Badge
                        variant="secondary"
                        className="text-xs font-medium rounded-md px-3 py-1 lowercase inline-block"
                    >
                        {item.type?.type || 'Новость'}
                    </Badge>

                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Calendar size={14} />
                        {formatDate(item.created_at)}
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Timer size={14} />
                        {formatTime(item.created_at)}
                    </div>
                </div>

                {/* Заголовок */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {item.title}
                </h1>

                {/* Описание */}
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="text-lg leading-relaxed">{item.description}</p>
                </div>
            </article>
        );
    } catch (error) {
        console.error('Ошибка при загрузке новости:', error);

        // Для 404 показываем notFound page
        if (error instanceof Error && error.message.includes('Новость не найдена')) {
            notFound();
        }

        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center py-20 max-w-md mx-auto">
                    <div className="text-gray-500 mb-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Новость не найдена</h2>
                        <p className="text-gray-600">К сожалению, запрашиваемая новость не существует или была удалена.</p>
                    </div>
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm transition-colors"
                    >
                        ← Вернуться к списку новостей
                    </Link>
                </div>
            </div>
        );
    }
}