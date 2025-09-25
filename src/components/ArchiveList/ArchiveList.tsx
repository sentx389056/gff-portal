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

export default function ArchiveList({filter, date, query}: {
    filter: string;
    date?: Date;
    query?: string
}) {
    const [news, setNews] = useState<NewsItem[]>([]); // ← Исправлено: any[] → NewsItem[]
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
    }, []);

    let filteredNews = news;
    if (filter) {
        filteredNews = filteredNews.filter(item => item.type.type && item.type.type.toLowerCase() === filter);
    }
    if (date) {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const selected = `${yyyy}-${mm}-${dd}`;
        filteredNews = filteredNews.filter(item => {
            let itemDate = item.created_at;
            if (typeof itemDate === 'string') {
                itemDate = itemDate.slice(0, 10);
            }
            return itemDate === selected;
        });
    }
    if (query) {
        filteredNews = filteredNews.filter(item => item.title && item.title.toLowerCase().includes(query.toLowerCase()));
    }

    return (
        <section className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {loading ?
                    <CardSkeleton count={4}/>
                    : filteredNews.length === 0 ? (
                        <div className="text-center py-10 text-gray-400 col-span-full">Нет новостей<br/>Попробуйте
                            изменить параметры фильтрации</div>
                    ) : filteredNews.map((item: NewsItem) => ( // ← Явно типизируем параметр
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
                                <div
                                    className="flex flex-wrap-reverse text-gray-500 items-center justify-between gap-3">
                                    <Badge>
                                        {item.type.type}
                                    </Badge>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={16}/>
                                            <span className="text-sm">
                              {formatDate(item.created_at)}
                            </span>
                                        </div>
                                    </div>
                                </div>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription
                                    className="overflow-hidden text-clip card-description-truncated">{item.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="">
                                <Button asChild variant="link" type="button"
                                        className="w-full cursor-pointer justify-start px-0">
                                    <Link href={`/news/${item.id}`}>Читать далее &rarr;</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
            </div>
        </section>
    );
}