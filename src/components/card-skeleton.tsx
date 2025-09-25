
import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
export interface CardSkeletonProps {
	count: number;
}
export default function CardSkeleton({ count }: CardSkeletonProps) {
	return (
		Array.from({ length: count }).map((_, idx) => (
			<Card key={idx} className="w-full max-w-sm">
				<CardHeader>
					<AspectRatio ratio={16 / 10} className="bg-muted rounded-lg">
						<Skeleton className="w-full h-full rounded-lg" />
					</AspectRatio>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<div className="flex text-gray-500 items-center justify-between gap-3">
						<Skeleton className="w-20 h-4 rounded" />
						<div className="flex items-center gap-4">
							<Skeleton className="w-10 h-4 rounded" />
							<Skeleton className="w-10 h-4 rounded" />
						</div>
					</div>
					<CardTitle>
						<Skeleton className="w-3/4 h-6 rounded" />
					</CardTitle>
					<CardDescription className="overflow-hidden text-clip card-description-truncated">
						<Skeleton className="w-full h-20 rounded" />
					</CardDescription>
				</CardContent>
				<CardFooter>
					<Skeleton className="w-24 h-4 rounded" />
				</CardFooter>
			</Card>
		))
	)
}