import Image from "next/image";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { Rating } from "@/components/ui/rating";
import { courseStudentAvatars } from "@/data/stats";
import type { Course } from "@/lib/types";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  className?: string;
};

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group relative flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card",
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/10",
        "active:scale-[0.985] active:translate-y-0",
        className,
      )}
    >
      {/* Cover image + meta pills */}
      <div className="relative m-4 mb-0 aspect-[341/195] overflow-hidden rounded-xl">
        <Image
          src={course.image.src}
          alt=""
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 373px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-110"
        />
        {/* subtle dark overlay on hover for better pill contrast */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 ease-out group-hover:bg-black/10" />

        <ul className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {course.highlights.map((highlight) => {
            return (
              <li
                key={highlight}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-md",
                  "bg-card/70",
                  "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "group-hover:bg-card/90 group-hover:scale-105 group-hover:shadow-sm group-hover:-translate-y-0.5",
                )}
              >
                {highlight}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-xl font-semibold tracking-tight transition-colors duration-500 ease-out group-hover:text-primary">
              {course.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              by{" "}
              <span className="font-medium text-primary">
                {course.instructor}
              </span>
            </p>
          </div>
          <Rating value={course.rating.score} />
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-500 group-hover:bg-muted/80">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z"
                fill="#4B4C53"
              />
            </svg>
            {course.level}
          </span>
          <AvatarStack
            label={`${course.studentsExtra}+ students enrolled this month`}
            images={courseStudentAvatars.map((src) => ({
              src,
              width: 64,
              height: 64,
            }))}
            extraLabel={`${course.studentsExtra}+`}
            size={32}
          />
        </div>

        <p className="flex items-baseline gap-1 transition-transform duration-500 ease-out group-hover:translate-x-0.5">
          <span className="font-heading text-xl font-semibold text-primary">
            ${course.price}
          </span>
          <span className="text-sm text-muted-foreground">{course.period}</span>
        </p>
      </div>
    </article>
  );
}