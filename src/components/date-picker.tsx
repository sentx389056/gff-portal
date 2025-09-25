'use client';

import * as React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DatePickerProps {
	date: Date | undefined;
	setDate: (date: Date | undefined) => void;
	placeholder?: string;
}

export function DatePicker({
	date,
	setDate,
	placeholder = "Выбрать дату"
}: DatePickerProps) {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					data-empty={!date}
					className="data-[empty=true]:text-muted-foreground sm:w-50 justify-start text-left font-normal"
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP", { locale: ru }) : <span>{placeholder}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={date}
					onSelect={(selectedDate) => {
						setDate(selectedDate);
						setOpen(false);
					}}
					captionLayout="dropdown"
					locale={ru}
				/>
			</PopoverContent>
		</Popover>
	);
}
