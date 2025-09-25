'use client';
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {AspectRatio} from "../ui/aspect-ratio";
import {Badge} from "../ui/badge";
import {Button} from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import {Calendar} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
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

export default function NewsSection() {
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

    return (
        <section className="w-full mx-auto pt-8 px-8 flex flex-col items-center">
            <div className="w-full flex justify-center">
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full mb-8 max-w-7xl lg:max-w-screen-xl mx-auto"
                >
                    <CarouselContent className=" gap-5 flex items-stretch py-5 px-2">
                        {loading ? <CardSkeleton count={3}/> : (
                            news.map((item: NewsItem, index) => ( // ← Явно типизируем параметр
                                <CarouselItem key={index}
                                              className="px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex gap-0 justify-center">
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
                                </CarouselItem>
                            ))
                        )}
                    </CarouselContent>
                    <CarouselPrevious className="hidden xl:flex"/>
                    <CarouselNext className="hidden xl:flex"/>
                </Carousel>
            </div>
            <Link href="/archive">
                <Button size="lg" className="bg-slate-700 text-accent cursor-pointer">Все новости &rarr;</Button>
            </Link>
        </section>
    );
}