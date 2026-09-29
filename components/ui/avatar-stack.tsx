import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarStackProps = {
  images: readonly {
    src: string;
    width: number;
    height: number;
  }[];
  extraLabel?: string;
  size?: number;
  className?: string;
  label: string;
};

export function AvatarStack({
  images,
  extraLabel,
  size = 14,
  className,
  label,
}: AvatarStackProps) {
  return (
    <ul
      className={cn("flex items-center", className)}
      aria-label={label}
    >
      {images.map((image, i) => (
        <li
          key={image.src + i}
          className="relative aspect-square shrink-0 -mr-2 overflow-hidden rounded-full ring-2 ring-card last:mr-0"
          style={{ width: size, height: size }}
        >
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            sizes={`${size}px`}
            className="h-full w-full rounded-full object-cover"
          />
        </li>
      ))}
      {extraLabel ? (
        <li
          className="relative z-10 -ml-2 inline-flex items-center justify-center rounded-full bg-[#d4fb20] text-xs font-medium text-black ring-2 ring-card"
          style={{ width: size, height: size }}
        >
          {extraLabel}
        </li>
      ) : null}
    </ul>
  );
}