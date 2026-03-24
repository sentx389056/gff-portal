import {MapPin, Phone, Mail} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Separator} from "./ui/separator";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-md text-slate-300 mb-0">
            {/* верхний блок */}
            <div className="bg-gray-800 p-12 w-full flex gap-12 flex-wrap sm:flex-nowrap justify-between">
                {/* левая колонка (логотип + контакты) */}
                <div className="flex flex-col gap-6 col-span-1 xl:col-span-2">
                    <Link href="/" className="flex flex-wrap sm:items-center xl:items-center gap-4">
                        <Image
                            src="/logo.svg"
                            alt="GFF logo"
                            width={71}
                            height={47}
                            priority
                        />
                        <div>
                            <h1 className="text-lg text-white">
                                Портал Госфильмофонда
                            </h1>
                            <p className="leading-[20px] text-slate-300">
                                Государственный фонд кинофильмов Российской Федерации
                            </p>
                        </div>
                    </Link>

                    <ul className="flex flex-col gap-4">
                        <li className="flex md:flex-row gap-2 items-center">
                            <MapPin className="hidden xl:flex" size={22}/>
                            <p>
                                142050, Московская обл., г. о. Домодедово, <br />
                                мкр. Белые Столбы, тер. Госфильмофонд, стр.8
                            </p>
                        </li>
                        <li>
                            <Link
                                className="flex md:flex-row gap-2 items-center"
                                href="mailto:portal@gff-rf.ru"
                            >
                                <Mail className="hidden xl:flex" size={22}/>
                                <p>portal@gff-rf.ru</p>
                            </Link>
                        </li>
                    </ul>

                </div>

                {/* правая колонка (все навигационные блоки) */}
                <div>
                    <p className="text-lg text-white pb-4">Проекты</p>
                    <ul>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="https://archivefest.ru/">ММФАФ</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="https://kartapobedy.ru/?after=1941-06-01">«Карта Победы»</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="https://tarkovskiy.gosfilmofond.ru/">«ТАРКОВСКИЙ. ХРОНИКА»</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="https://tv-stream.ru/channels/mashina-vremeni">ГОСФИЛЬМОФОНД. МАШИНА
                                ВРЕМЕНИ</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="https://gosfilmofond.ru/diafilmy/">Диафильмы</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="http://10.1.100.107/">Академия Госфильмофонда России</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="https://tk015.ru/">Технический Комитет 015</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-lg text-white pb-4">Информационный раздел</p>
                    <ul className="">
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="/#news_events">Новости и События</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="https://gosfilmofond.ru/vestnik-gosfilmofonda-rossii/">Вестник Госфильмофонда России</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-lg text-white pb-4">О портале</p>
                    <ul className="">
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="/activities">Наша деятельность</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="/management">Структура</Link>
                        </li>
                        <li className="pb-2 hover:text-accent cursor-pointer">
                            <Link href="/documents">Документы</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Separator className="bg-gray-500"/>

            {/* нижний блок */}
            <div className="w-full bg-gray-800 flex md:flex-row flex-col gap-6 justify-between items-start py-5 px-12">
                <p>
                    © ФГБУК «Государственный фонд кинофильмов Российской Федерации», {currentYear}г.
                </p>
                <Link href="https://illusion-cinema.ru/">
                    <Image
                        width={139}
                        height={37}
                        src="/illusion_logo.svg"
                        alt="illusion_logo.svg"
                    />
                </Link>
            </div>
        </footer>
    )
}