import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingProps = {
  value: number;
  showValue?: boolean;
  className?: string;
};

export function Rating({ value, showValue = true, className }: RatingProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {showValue ? (
        <span className="text-lg text-muted-foreground">{value}</span>
      ) : null}
      <Star className="size-5 fill-gray-300 text-gray-300" aria-hidden="true" />
    </span>
  );
}

export function StarRow({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-1", className)}
      role="img"
      aria-label={`Rated ${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="size-4 fill-secondary text-secondary" aria-hidden="true" />
      ))}
    </span>
  );
}
