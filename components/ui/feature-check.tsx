import Image from "next/image";
import { cn } from "@/lib/utils";

type FeatureCheckProps = {
  children: React.ReactNode;
  className?: string;
};

export function FeatureCheck({ children, className }: FeatureCheckProps) {
  return (
    <li className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/brand/check.svg"
        alt=""
        width={24}
        height={24}
        aria-hidden="true"
        className="size-6 shrink-0"
      />
      <span className="font-medium text-foreground">{children}</span>
    </li>
  );
}
