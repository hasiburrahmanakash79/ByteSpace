"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AuthForm } from "@/components/auth/auth-form";
import { Logo } from "@/components/brand/logo";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { courses } from "@/data/courses";
import { heroStudentAvatars } from "@/data/stats";

gsap.registerPlugin(useGSAP);

export type AuthMode = "sign-in" | "sign-up";

type AuthShellProps = {
  mode: AuthMode;
};

const featuredCourse = courses[2];

export function AuthShell({ mode }: AuthShellProps) {
  const isSignUp = mode === "sign-up";
  const collageRef = useRef<HTMLDivElement>(null);

  // Entrance animations for the collage + form (skipped for reduced motion).
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-anim]", { opacity: 1, y: 0, x: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo("[data-anim='logo']", { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6 }, 0)
          .fromTo("[data-anim='intro']", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
          .fromTo("[data-anim='card-back']", { opacity: 0, x: -50, rotate: -4 }, { opacity: 1, x: 0, rotate: -2, duration: 0.9 }, 0.25)
          .fromTo("[data-anim='card-front']", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9 }, 0.4)
          .fromTo("[data-anim='coil']", { opacity: 0, scale: 0.5, rotate: -30 }, { opacity: 1, scale: 1, rotate: 12, duration: 0.8, ease: "back.out(1.6)" }, 0.6)
          .fromTo("[data-anim='triangle']", { opacity: 0, y: 40, scale: 0.6 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.5)" }, 0.7)
          .fromTo("[data-anim='students']", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, 0.85)
          .fromTo("[data-anim='form']", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3);

        // Idle float on the decorative pieces.
        gsap.to("[data-float='1']", { y: 10, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to("[data-float='2']", { y: -8, duration: 3.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to("[data-float='cards']", { y: 10, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
      });

      return () => mm.revert();
    },
    { scope: collageRef }
  );

  return (
    <div ref={collageRef} className="auth-grid min-h-screen bg-[#003BE2] text-white">
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] lg:grid-cols-[minmax(0,1fr)_minmax(480px,600px)] lg:gap-14 lg:px-12 xl:gap-20 xl:px-20">
        <section className="hidden min-h-screen flex-col px-8 pb-12 pt-7 lg:flex xl:px-0" aria-labelledby="auth-intro-title">
          <div data-anim="logo">
            <Link href="/" aria-label="ByteSpace home" className="w-fit rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
              <Logo withWordmark={false} className="text-secondary" />
            </Link>
          </div>
          <div data-anim="intro" className="mt-9 max-w-md opacity-0">
            <h2 id="auth-intro-title" className="text-xl font-semibold text-white">
              {isSignUp ? "Sign up and come in" : "Sign in with ease"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              {isSignUp
                ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
            </p>
          </div>
          <AuthCollage />
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-0" aria-label={isSignUp ? "Create your ByteSpace account" : "Sign in to ByteSpace"}>
          <div data-anim="form" className="w-full max-w-[560px] rounded-[1.5rem] bg-card px-7 py-10 text-foreground opacity-0 shadow-2xl shadow-black/10 sm:px-12 sm:py-12 lg:px-12 xl:px-16">
            <AuthForm mode={mode} />
          </div>
        </section>
      </div>
    </div>
  );
}

function CollageCard({
  title,
  image,
  highlights,
  className,
  ...rest
}: {
  title: string;
  image: string;
  highlights: readonly string[];
  className?: string;
  [key: `data-${string}`]: string;
}) {
  return (
    <article
      {...rest}
      className={`absolute h-[768px] w-[743px] rounded-[40px] border border-[#D9D9DE] bg-white p-[31px] text-foreground opacity-0 ${className ?? ""}`}
    >
      <div className="relative h-[390px] overflow-hidden rounded-[30px]">
        <Image src={image} alt={title} fill sizes="700px" className="object-cover" />
        <div className="absolute bottom-[26px] left-[26px] flex gap-[26px]">
          {highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-white/50 px-[26px] py-[16px] text-[23px] text-[#353535] backdrop-blur-md"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-[40px] flex items-start justify-between">
        <div>
          <h3 className="font-heading text-[40px] font-semibold leading-none text-foreground">{title}</h3>
          <p className="mt-[16px] text-[24px] text-muted-foreground">
            by <span className="text-primary">purepearl studio</span>
          </p>
        </div>
        <span className="text-[36px] leading-none text-muted-foreground">
          4.5 <span className="text-gray-300">★</span>
        </span>
      </div>

      <div className="mt-[30px] flex items-center gap-[24px]">
        <span className="flex h-[64px] items-center gap-[14px] rounded-full bg-muted px-[30px] text-[24px] text-muted-foreground">
          <svg width="26" height="28" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z" fill="#4B4C53" />
          </svg>
          Beginner
        </span>
        <AvatarStack
          label="Course students"
          images={heroStudentAvatars.slice(0, 5).map((src) => ({ src, width: 64, height: 64 }))}
          extraLabel="26+"
          size={64}
        />
      </div>

      <p className="mt-[30px] font-heading text-[40px] font-semibold leading-none text-primary">
        $25<span className="ml-1 text-[24px] font-normal text-muted-foreground">/lifetime</span>
      </p>
    </article>
  );
}

function AuthCollage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / 1100));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="mt-auto w-full max-w-[640px] self-center"
      style={{ height: 1160 * scale }}
    >
      {/* Fixed 1100x1160 design canvas, scaled to fit */}
      <div
        className="relative"
        style={{ width: 1100, height: 1160, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        <div data-float="cards" className="absolute inset-0">
          {/* Back card */}
          <CollageCard
            data-anim="card-back"
            title="Build Digital Assets"
            image={courses[0].image.src}
            highlights={courses[0].highlights}
            className="left-[55px] top-[178px]"
          />

          {/* Front card */}
          <CollageCard
            data-anim="card-front"
            title={featuredCourse.title}
            image={featuredCourse.image.src}
            highlights={featuredCourse.highlights}
            className="left-[277px] top-0 z-10"
          />
        </div>

        {/* Green ring (top-left, overlaps both cards) */}
        <Image
          src="/images/auth/circle.png"
          alt=""
          aria-hidden="true"
          width={205}
          height={190}
          data-anim="coil"
          data-float="2"
          className="absolute left-[155px] top-[80px] z-20 w-[255px] opacity-0"
        />

        {/* Green cone (bottom-left) */}
        <Image
          src="/images/auth/cone-3.png"
          alt=""
          aria-hidden="true"
          width={250}
          height={275}
          data-anim="triangle"
          data-float="1"
          className="absolute left-[55px] top-[838px] z-20 w-[250px] opacity-0"
        />

        {/* White coil (right) */}
        <Image
          src="/images/hero/white-coil-big.svg"
          alt=""
          aria-hidden="true"
          width={230}
          height={245}
          data-anim="coil"
          data-float="2"
          className="absolute left-[815px] top-[700px] z-20 w-[230px] opacity-0"
        />

        {/* Happy Students */}
        <div
          data-anim="students"
          data-float="2"
          className="absolute left-[507px] top-[870px] z-30 h-[245px] w-[515px] rounded-[30px] bg-secondary p-[32px] text-secondary-foreground opacity-0"
        >
          <p className="text-[32px] font-medium leading-none">Happy Students</p>
          <p className="mt-[14px] text-[20px] leading-none">
            <span className="font-bold">4.5</span> (240) <span className="text-primary">★</span>
          </p>
          <AvatarStack
            label="Happy students"
            images={heroStudentAvatars.slice(0, 7).map((src) => ({ src, width: 64, height: 64 }))}
            extraLabel="2K+"
            size={64}
            className="mt-[22px]"
          />
        </div>
      </div>
    </div>
  );
}
