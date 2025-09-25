import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";


export default function Footer() {
	return (
		<footer className="text-[13px] text-slate-300 mb-0">
			{/* верхний блок */}
			<div className="bg-gray-800 py-5 w-full mx-auto grid md:grid-cols-2 xl:grid-cols-6 gap-6 items-start">
				{/* левая колонка (логотип + контакты) */}
				<div className="p-5 flex flex-col gap-6 col-span-1 xl:col-span-2">
					<Link href="/" className="flex md:flex-col xl:flex-row items-start gap-4">
						<Image
							src="/logo.svg"
							alt="GFF logo"
							width={71}
							height={47}
							priority
						/>
						<div>
							<h1 className="text-slate-100 text-[19px] leading-[28px]">
								Госфильмофонд России
							</h1>
							<p className="text-[13px] leading-[20px] text-slate-300">
								Государственный фонд кинофильмов Российской Федерации
							</p>
						</div>
					</Link>

					<ul className="flex flex-col gap-4">
						<li className="flex md:flex-row gap-2 items-center">
							<MapPin className="hidden xl:flex" size={22} />
							<p>
								142050, Московская обл., г. о. Домодедово,
								мкр. Белые Столбы, тер. Госфильмофонд, стр.8
							</p>
						</li>
						<li>
							<Link
								className="flex md:flex-row gap-2 items-center"
								href="tel:+7 (499) 941 06 80"
							>
								<Phone className="hidden xl:flex" size={18} />
								<p>+7 (499) 941 06 80</p>
							</Link>
						</li>
						<li>
							<Link
								className="flex md:flex-row gap-2 items-center"
								href="mailto:gff@gff-rf.ru"
							>
								<Mail className="hidden xl:flex" size={18} />
								<p>gff@gff-rf.ru</p>
							</Link>
						</li>
					</ul>

					{/* соцсети */}
					<div className="flex gap-6 pb-5">
						<Link href="#" className="hover:opacity-70">
							<Image width={20} height={20} src="/youtube_logo.svg" alt="youtube_logo.svg" />
						</Link>
						<Link href="#" className="hover:opacity-70">
							<Image width={20} height={20} src="/rutube_logo.svg" alt="rutube_logo.svg" />
						</Link>
						<Link href="#" className="hover:opacity-70">
							<Image width={20} height={20} src="/vk_logo.svg" alt="vk_logo.svg" />
						</Link>
						<Link href="#" className="hover:opacity-70">
							<Image width={20} height={20} src="/ok.ru_logo.svg" alt="ok.ru_logo.svg" />
						</Link>
						<Link href="#" className="hover:opacity-70">
							<Image width={20} height={20} src="/telegram_logo.svg" alt="telegram_logo.svg" />
						</Link>
					</div>
				</div>

				{/* правая колонка (все навигационные блоки) */}
				<div className="p-5 grid sm:grid-cols-2 xl:grid-cols-5 gap-6 xl:col-span-4">
					<div>
						<p className="text-[19px] pb-4">О фонде</p>
						<ul className="text-[13px]">
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Наша деятельность</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Руководство фонда</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Вакансии</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Документы</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Противодействие коррупции</Link>
							</li>
						</ul>
					</div>

					<div>
						<p className="text-[19px] pb-4">Услуги</p>
						<ul className="text-[13px]">
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Прием на хранение</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Лаборатория</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Авторские права и лицензирование</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Для исследователей</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">
									Культурно-просветительское мероприятие (Выставочный комплекс)
								</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Прейскурант</Link>
							</li>
						</ul>
					</div>

					<div>
						<p className="text-[19px] pb-4">Хранение</p>
						<ul className="text-[13px]">
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Технический контроь</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Оцифровка архива</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Каталог фильмов</Link>
							</li>
						</ul>
					</div>

					<div>
						<p className="text-[19px] pb-4">Проекты</p>
						<ul className="text-[13px]">
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">ММФАФ</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">«Карта Победы»</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">«ТАРКОВСКИЙ. ХРОНИКА»</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">ГОСФИЛЬМОФОНД. МАШИНА ВРЕМЕНИ</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Диафильмы</Link>
							</li>
						</ul>
					</div>

					<div>
						<p className="text-[19px] pb-4">Информационный раздел</p>
						<ul className="text-[13px]">
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">Новости</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">ВЕСТНИК ГОСФИЛЬМОФОНДАРОССИИ</Link>
							</li>
							<li className="pb-2 hover:text-accent cursor-pointer">
								<Link href="#">СОБЫТИЯ</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<Separator className="bg-gray-500" />

			{/* нижний блок */}
			<div className="w-full bg-gray-800 flex md:flex-row flex-col gap-6 justify-around items-start p-5">
				<p>
					© ФГБУК «Государственный фонд кинофильмов Российской Федерации», 2025г.
				</p>
				<Image
					width={139}
					height={37}
					src="/illusion_logo.svg"
					alt="illusion_logo.svg"
				/>

				<ul className="flex md:flex-row flex-col gap-6">
					<li>Политика конфиденциальности</li>
					<li>Пользовательское соглашение</li>
					<li>Карта сайта</li>
				</ul>
			</div>
		</footer>
	)
}