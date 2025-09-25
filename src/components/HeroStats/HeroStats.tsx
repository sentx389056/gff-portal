import React from "react";
import { Archive, Calendar, Users } from "lucide-react";

export default function HeroStats() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center mt-4  hero-stats">
			<div className="bg-white/10 rounded-2xl flex flex-col gap-1 justify-center items-center p-5 border-1 border-white/20">

				<Archive size={40} />

				<div className="text-2xl font-semibold">75,000+</div>
				<div>Фильмов в архиве</div>
			</div>
			<div className="bg-white/10 rounded-2xl flex flex-col gap-1 justify-center items-center p-5 border-1 border-white/20">
				<Calendar size={40} />
				<div className="text-2xl font-semibold">90+</div>
				<div>Лет работы</div>
			</div>
			<div className="bg-white/10 rounded-2xl flex flex-col gap-1 justify-center items-center p-5 border-1 border-white/20">
				<Users size={40} />
				<div className="text-2xl font-semibold">300+</div>
				<div>Специалистов</div>
			</div>
		</div>
	);
}
