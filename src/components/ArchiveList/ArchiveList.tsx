'use client';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {Calendar} from "lucide-react";
import Link from "next/link";
import {AspectRatio} from "../ui/aspect-ratio";
import {Badge} from "../ui/badge";
import {useEffect, useState} from "react";
import {Button} from "../ui/button";
import Image from "next/image";
import CardSkeleton from "../card-skeleton";
import {formatDate} from "@/lib/utils";

// Тип для элемента новости
interface NewsItem {
    id: string;
    title: string | null;
    type_id: string;
    type: {
        type: string;
    };
    created_at: string;
    description: string | null;
    image_url: string | null;
}

export default function ArchiveList({filter, query}: {
    filter: string;
    query?: string;
}) {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('/api/news');
                if (!response.ok) {
                    throw new Error('Ошибка при получении новостей');
                }
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Ошибка при загрузке новостей:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();

        const interval = setInterval(fetchNews, 30000);
        return () => clearInterval(interval);
    }, []);

    let filteredNews = news;
    if (filter) {
        filteredNews = filteredNews.filter(item => item.type.type && item.type.type.toLowerCase() === filter);
    }
    if (query) {
        filteredNews = filteredNews.filter(item => item.title && item.title.toLowerCase().includes(query.toLowerCase()));
    }

    // Группируем по годам, сортируем по убыванию
    const byYear: Record<number, NewsItem[]> = {};
    filteredNews.forEach(item => {
        const year = new Date(item.created_at).getFullYear();
        if (!byYear[year]) byYear[year] = [];
        byYear[year].push(item);
    });
    const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

    if (loading) {
        return (
            <section className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CardSkeleton count={4} />
                </div>
            </section>
        );
    }

    if (filteredNews.length === 0) {
        return (
            <section className="mx-auto max-w-7xl">
                <div className="text-center py-10 text-gray-400">Нет новостей<br />Попробуйте изменить параметры фильтрации</div>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-7xl space-y-12">
            {years.map(year => (
                <div key={year}>
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">{year}</h2>
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-sm text-gray-400">{byYear[year].length} {byYear[year].length === 1 ? 'запись' : byYear[year].length < 5 ? 'записи' : 'записей'}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {byYear[year].map((item: NewsItem) => (
                            <Card key={item.id} className="w-full max-w-sm">
                                <CardHeader>
                                    <AspectRatio ratio={16 / 10} className="bg-muted rounded-lg">
                                        <Image
                                            src={item.image_url || "/fallback-news.png"}
                                            alt={item.title || "Нет изображения"}
                                            fill
                                            className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
                                        />
                                    </AspectRatio>
                                </CardHeader>
                                <CardContent className="flex h-full flex-col gap-3">
                                    <div className="flex flex-wrap-reverse text-gray-500 items-center justify-between gap-3">
                                        <Badge>{item.type.type}</Badge>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                <span className="text-sm">{formatDate(item.created_at)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription className="overflow-hidden text-clip card-description-truncated">{item.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="link" type="button" className="w-full cursor-pointer justify-start px-0">
                                        <Link href={`/news/${item.id}`}>Читать далее &rarr;</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
