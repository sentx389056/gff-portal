
import NewsSection from "@/components/NewsSection/NewsSection";
import OrdersSection from "@/components/OrdersSection/OrdersSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="main">
			<section id="hero" className="h-150 flex py-10 px-5 items-center justify-center w-full bg-linear-to-r/srgb from-indigo-800 to-red-800/60 xl:to-red-800/90">
				<div className="text-white text-center">
					<h1 className="text-4xl font-bold mb-5">Локальный портал</h1>
					<p className="text-xl font-normal mb-7">Сохранение, изучение и популяризация отечественного кинонаследия</p>
					<div className="flex flex-wrap gap-4 justify-between sm:justify-center mb-9">
						<Button className="w-full sm:w-50 h-12 bg-white/10 border-1 border-white/20  hover:text-white hover:bg-purple-400/20 shadow-2xl hover:shadow-lg text-accent" size="lg" asChild>
							<Link href="/archive">
								Архив<span>&rarr;</span>
							</Link>
						</Button>
						<Button className="w-full sm:w-50 h-12 bg-accent-foreground/20 border-1 border-slate-400/40 shadow-2xl hover:shadow-lg text-accent" variant="secondary" size="lg" asChild>
							<Link href="/about">О портале</Link>
						</Button>
					</div>

				</div>
			</section>
			<section id="orders" className="py-20 bg-gray-50">
				<div className="text-center pb-8">
					<h1 className="text-4xl font-semibold mb-4">Последние приказы</h1>
					<p className="text-xl text-gray-800">Официальные документы Госфильмофонда России</p>
				</div>
				<OrdersSection />
			</section>
			<section id="#news_events" className="py-20">
				<div className="text-center pb-8">
					<h1 className="text-4xl font-semibold mb-4">Новости и события</h1>
					<p className="text-xl text-gray-800">Актуальная информация о деятельности Госфильмофонда России</p>
				</div>
				<NewsSection />
			</section>
		</main>

	);
}
