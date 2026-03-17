
import NewsSection from "@/components/NewsSection/NewsSection";
import OrdersSection from "@/components/OrdersSection/OrdersSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqItems = [
	{
		q: 'Как получить доступ к корпоративным системам?',
		a: 'Обратитесь к системному администратору или оформите заявку через Службу поддержки.',
	},
	{
		q: 'Где найти шаблоны документов?',
		a: 'Шаблоны документов размещены на внутреннем портале в разделе «Документы».',
	},
	{
		q: 'Куда сообщить о технической неисправности?',
		a: 'Создайте заявку в Службе поддержки или позвоните в ИТ-отдел по внутреннему номеру.',
	},
];

export default function Home() {
	return (
		<main className="main">
			<section id="hero" className="h-150 flex py-10 px-5 items-center justify-center w-full bg-linear-to-r/srgb from-indigo-800 to-red-800/60 xl:to-red-800/90">
				<div className="text-white text-center">
					<h1 className="text-4xl font-bold mb-5">Портал Госфильмофонда</h1>
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

			{/* FAQ */}
			<section id="faq" className="py-20 bg-gray-50">
				<div className="max-w-3xl mx-auto px-6">
					<div className="text-center mb-10">
						<h2 className="text-4xl font-semibold mb-4">Часто задаваемые вопросы</h2>
						<p className="text-xl text-gray-600">Ответы на популярные вопросы сотрудников</p>
					</div>
					<div className="space-y-4 mb-10">
						{faqItems.map((item, i) => (
							<div key={i} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
								<p className="font-semibold text-gray-900 mb-2">{item.q}</p>
								<p className="text-gray-600 text-sm">{item.a}</p>
							</div>
						))}
					</div>
					<div className="text-center bg-white rounded-xl border border-indigo-100 shadow-md p-8">
						<h3 className="text-xl font-semibold mb-2">Остались вопросы?</h3>
						<p className="text-gray-500 mb-6">Не нашли ответ? Отправьте заявку в Службу поддержки — мы ответим в течение рабочего дня.</p>
						<Button asChild size="lg" className="bg-indigo-700 hover:bg-indigo-800 text-white cursor-pointer">
							<Link href="http://sd.gff-rf.ru" target="_blank">Отправить заявку в Службу поддержки &rarr;</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>

	);
}
