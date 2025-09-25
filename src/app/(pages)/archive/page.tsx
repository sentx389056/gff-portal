'use client';
import { ChevronDownIcon } from "lucide-react";
import ArchiveList from "@/components/ArchiveList/ArchiveList";
import { Button } from "@/components/ui/button";

import React, {useState} from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/ui/input";

export default function ArchivePage() {
	const [filter, setFilter] = React.useState('');
	const [query, setQuery] = React.useState('');
    const [date, setDate] = useState<Date | undefined>(undefined);

	return (
		<main className="p-5">
			<div className="container mx-auto">
				<section className="py-20 max-w-7xl mx-auto">
					<div className="text-center">
						<h1 className="text-4xl text-black-100 font-semibold mb-4">Архив</h1>
						<p className="text-1xl font-normal text-gray-500">Все новости</p>
					</div>
					<div className="flex items-center gap-4 flex-wrap sm:flex-nowrap my-8">
						<div className="w-full">
							<Input
								placeholder="Поиск..."
								value={query}
								onChange={e => setQuery(e.target.value)}
							/>
						</div>
						<div className="grid w-full grid-cols-2 sm:flex sm:w-auto items-center gap-4">
							<DropdownMenu>
								<DropdownMenuTrigger className="w-45" asChild>
									<Button
										variant="outline"
										data-empty={!filter}
										className="data-[empty=true]:text-muted-foreground w-full sm:w-48 justify-between text-left font-normal">
										{filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : "Все документы"}
										<ChevronDownIcon />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>Выбрать по теме</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
										<DropdownMenuRadioItem value="">Все документы</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="событие">Событие</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="архив">Архив</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="реставрация">Реставрация</DropdownMenuRadioItem>
									</DropdownMenuRadioGroup>
								</DropdownMenuContent>
							</DropdownMenu>
							<DatePicker
								date={date}
								setDate={setDate}
							/>
						</div>
					</div>
					<ArchiveList filter={filter} date={date} query={query} />
				</section>
			</div>
		</main>
	)
}