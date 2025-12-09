import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
	return (
		<main className="main">
			{/* Hero секция в стиле главной */}
			<section className="h-150 flex py-10 px-5 items-center justify-center w-full bg-gradient-to-r from-slate-800 to-slate-900">
				<div className="text-white text-center max-w-4xl">
					<h1 className="text-4xl font-bold mb-5">О портале</h1>
					<p className="text-xl font-normal mb-7">Локальный портал Госфильмофонда России</p>
					<div className="flex flex-wrap gap-4 justify-center mb-9">
						<Button className="w-full sm:w-50 h-12 bg-white/10 border-1 border-white/20 hover:text-white hover:bg-slate-700/20 shadow-2xl hover:shadow-lg text-white" size="lg" asChild>
							<Link href="/documents">
								Документы<span>&rarr;</span>
							</Link>
						</Button>
						<Button className="w-full sm:w-50 h-12 bg-slate-700/50 border-1 border-slate-600/40 shadow-2xl hover:shadow-lg text-white" variant="secondary" size="lg" asChild>
							<Link href="/archive">
								Архив<span>&rarr;</span>
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Описание портала */}
			<section className="py-20 px-5 bg-slate-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-slate-800 mb-4">Что такое локальный портал?</h2>
						<p className="text-lg text-slate-600 max-w-3xl mx-auto">
							Внутренняя система Госфильмофонда России для эффективной работы с документами, 
							архивными материалами и корпоративной информацией.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
							<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-slate-800 mb-2">Документы</h3>
							<p className="text-slate-600">Централизованное хранение и управление корпоративными документами</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
							<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-slate-800 mb-2">Архив</h3>
							<p className="text-slate-600">Доступ к архивным материалам и историческим документам</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
							<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-slate-800 mb-2">Команда</h3>
							<p className="text-slate-600">Информация о руководстве и сотрудниках организации</p>
						</div>
					</div>
				</div>
			</section>

			{/* Преимущества */}
			<section className="py-20 px-5 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-slate-800 mb-4">Преимущества портала</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="flex gap-4">
							<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-slate-800 mb-2">Быстрый доступ</h3>
								<p className="text-slate-600">Мгновенный поиск нужных документов и материалов</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-slate-800 mb-2">Безопасность</h3>
								<p className="text-slate-600">Защищенное хранение конфиденциальной информации</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-slate-800 mb-2">Удобство</h3>
								<p className="text-slate-600">Интуитивный интерфейс для комфортной работы</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-slate-800 mb-2">Доступность</h3>
								<p className="text-slate-600">Работа с порталом из любой точки с интернетом</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}