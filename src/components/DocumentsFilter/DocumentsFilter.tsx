import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from "../ui/button";
export default function DocumentsFilter({ filter, setFilter, query, setQuery }: { filter: string, setFilter: (val: string) => void, query: string, setQuery: (val: string) => void }) {
		return (
			<section className="max-w-7xl">
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
										<DropdownMenuRadioItem value="приказ">Приказ</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="положение">Положение</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="отчет">Отчет</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="регламент">Регламент</DropdownMenuRadioItem>
									</DropdownMenuRadioGroup>
								</DropdownMenuContent>
							</DropdownMenu>
							
						</div>
					</div>
			</section>
		);
}
