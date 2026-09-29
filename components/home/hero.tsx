"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "@/config/site";
import { heroStudentAvatars } from "@/data/stats";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const poppins = "font-[family-name:var(--font-poppins)]";
const satoshi = "font-[family-name:var(--font-satoshi)]";

const rootStyle = {
  "--s": "min(1, tan(atan2(100vw, 1440px)), tan(atan2(100svh, 1024px)))",
  "--cw": "100vw",
  "--edge": "calc(720px - var(--cw) / (2 * var(--s)))",
} as CSSProperties;



const whiten = "[filter:contrast(.04)_brightness(1.92)]";

const ORNAMENTS = [
  {
    id: "lime-coil",
    src: "/images/hero/left-side-shape.png",
    edge: "left",
    w: 267,
    h: 387,
    depth: 0.8,
    fx: -200,
    fy: 40,
    rot: -30,
    pos: "left-0 top-[2%] w-[28vw] sm:w-[20vw] lg:left-[var(--edge)] lg:top-[221px] lg:w-[267px]",
  },
  {
    id: "lime-cylinder",
    src: "/images/hero/right-side-shape.png",
    edge: "right",
    w: 426,
    h: 744,
    depth: 0.7,
    fx: 200,
    fy: -40,
    rot: 25,
    pos: "right-0 top-[-2%] w-[22vw] sm:w-[16vw] lg:right-[var(--edge)] lg:top-[221px] lg:w-[213px]",
  },
  {
    id: "white-squiggle",
    src: "/images/hero/white-rightside-coil-small.svg",
    white: true,
    depth: 1,
    fx: -80,
    fy: 80,
    rot: -40,
    pos: "left-[14%] top-[30%] w-[15vw] sm:w-[11vw] lg:left-[183px] lg:top-[477px] lg:w-[175px]",
  },
  {
    id: "white-donut",
    src: "/images/hero/white-circle.svg",
    white: true,
    depth: 0.6,
    fx: -160,
    fy: 140,
    rot: -20,
    pos: "bottom-[-3%] left-[-9vw] w-[34vw] sm:w-[24vw] lg:bottom-auto lg:left-[18px] lg:top-[682px] lg:w-[342px]",
  },
  {
    id: "white-triangle",
    src: "/images/hero/white-cone.svg",
    white: true,
    depth: 1,
    fx: 120,
    fy: -60,
    rot: 30,
    pos: "right-[4%] top-[34%] w-[19vw] sm:w-[13vw] lg:right-auto lg:left-[1106px] lg:top-[464px] lg:w-[188px]",
  },
  {
    id: "white-coil",
    src: "/images/hero/white-coil-big.svg",
    white: true,
    depth: 0.7,
    fx: 180,
    fy: 120,
    rot: 25,
    pos: "bottom-[4%] right-[-9vw] w-[30vw] sm:w-[22vw] lg:bottom-auto lg:right-auto lg:left-[1127px] lg:top-[672px] lg:w-[330px]",
  },
];



const card =
  "flex flex-col items-start rounded-2xl bg-white p-4 text-[#242528] backdrop-blur-[10px]";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const update = () => {
      const cw = el.clientWidth;
      const s = Math.min(1, cw / 1440, window.innerHeight / 1024);
      el.style.setProperty("--cw", `${cw}px`);
      el.style.setProperty("--s", String(s));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia(root);

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-anim]", { opacity: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const pct = root.querySelector<HTMLElement>("[data-pct]");
        const counter = { v: 0 };
        if (pct) pct.textContent = "0%";

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          "[data-hero='circle']",
          { scale: 0.55, y: 160, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 1.3, ease: "expo.out" },
          0,
        )
          .fromTo(
            "[data-word]",
            { y: 56, opacity: 0, rotate: 2 },
            {
              y: 0,
              opacity: 1,
              rotate: 0,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.07,
            },
            0.15,
          )
          .fromTo(
            "[data-hero='sub']",
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            0.75,
          )
          .fromTo(
            "[data-hero='search']",
            { y: 24, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8 },
            0.9,
          )
          .fromTo(
            "[data-hero='student']",
            { y: 140, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
            0.35,
          )
          .fromTo(
            "[data-orn]",
            {
              opacity: 0,
              scale: 0.5,
              x: (_: number, el: HTMLElement) => Number(el.dataset.fx) || 0,
              y: (_: number, el: HTMLElement) => Number(el.dataset.fy) || 0,
              rotate: (_: number, el: HTMLElement) => Number(el.dataset.rot) || 0,
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotate: 0,
              duration: 1.3,
              ease: "back.out(1.3)",
              stagger: 0.09,
            },
            0.6,
          )
          .fromTo(
            "[data-card]",
            { opacity: 0, y: 30, scale: 0.85 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: 0.12,
            },
            1,
          )
          .fromTo(
            "[data-avatar]",
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "back.out(2)",
              stagger: 0.06,
            },
            1.4,
          )
          .to(
            counter,
            {
              v: 55,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                if (pct) pct.textContent = `${Math.round(counter.v)}%`;
              },
            },
            1.2,
          )
          .fromTo(
            "[data-bar]",
            { scaleX: 0 },
            { scaleX: 1, duration: 1.6, ease: "power2.out" },
            "<",
          );

        // Scroll parallax only
        gsap.utils.toArray<HTMLElement>("[data-scroll]", root).forEach((el) => {
          gsap.to(el, {
            yPercent: -Number(el.dataset.scroll) * 18,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      style={rootStyle}
      aria-labelledby="hero-title"
      className={`${satoshi} relative isolate overflow-hidden bg-[#003be2] text-white lg:h-[calc(1024px*var(--s))]`}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative flex flex-col items-center pt-32 sm:pt-36 lg:absolute lg:left-1/2 lg:top-0 lg:block lg:h-[1024px] lg:w-[1440px] lg:origin-top lg:pt-0 lg:[translate:-50%_0] lg:[scale:var(--s)]">
        {/* Text + search */}
        <div className="relative z-20 flex w-full flex-col items-center gap-10 px-5 text-center sm:px-8 lg:absolute lg:left-[120px] lg:top-[169px] lg:w-[1200px] lg:gap-[60px] lg:px-0">
          <div className="flex flex-col items-center gap-4 lg:gap-8">
            <h1
              id="hero-title"
              className={`${poppins} max-w-[935px] text-balance text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-6xl lg:w-[935px] lg:text-[72px] lg:[text-wrap:wrap]`}
            >
              {siteConfig.tagline.split(" ").map((word, i, all) => (
                <span key={i}>
                  <span data-anim data-word className="inline-block opacity-0">
                    {word}
                  </span>
                  {i < all.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p
              data-anim
              data-hero="sub"
              className="max-w-[640px] text-pretty text-base leading-[1.6] text-[#e5e6e8] opacity-0 sm:text-lg lg:max-w-none lg:whitespace-nowrap"
            >
              {siteConfig.description}
            </p>
          </div>

          <form
            data-anim
            data-hero="search"
            role="search"
            aria-label="Course search"
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-[600px] items-center gap-4 opacity-0 lg:w-auto lg:max-w-none"
          >
            <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-6 py-3 focus-within:ring-2 focus-within:ring-[#d4fb20] lg:w-[461px] lg:flex-none">
              <Search className="size-6 shrink-0 text-[#82868e]" aria-hidden="true" />
              <input
                type="search"
                name="q"
                aria-label="Search courses, topics, or creators"
                placeholder="Course, topic, creator"
                className="min-w-0 flex-1 bg-transparent text-lg leading-[1.6] text-[#242528] outline-none placeholder:text-[#82868e]"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[#d4fb20] px-6 py-4 text-lg font-medium leading-[1.2] text-[#242528] transition duration-200 hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 active:scale-95"
            >
              Search
            </button>
          </form>
        </div>

        {/* Stage */}
        <div className="relative mt-12 h-[440px] w-full sm:mt-16 sm:h-[620px] lg:contents">
          {/* Lime arc */}
          <div
            data-anim
            data-hero="circle"
            aria-hidden="true"
            className="absolute bottom-0 z-0 w-[170%] opacity-0 left-[-35%] sm:left-[-25%] sm:w-[150%] lg:left-[145px] lg:w-[1149px]"
          >
            <Image
              src="/images/hero/cbcolor-bg.svg"
              alt=""
              width={1149}
              height={442}
              priority
              sizes="(min-width: 1024px) 1149px, 170vw"
              className="block h-auto w-full"
            />
          </div>

          {/* Ornaments */}
          {ORNAMENTS.map((o) => (
            <div
              key={o.id}
              data-scroll={o.depth}
              aria-hidden="true"
              className={`pointer-events-none absolute z-[1] ${o.pos}`}
            >
              <div
                data-anim
                data-orn
                data-fx={o.fx}
                data-fy={o.fy}
                data-rot={o.rot}
                className="opacity-0"
              >
                <Image
                  src={o.src}
                  alt=""
                  width={o.w ?? 2500}
                  height={o.h ?? 2500}
                  sizes="(min-width: 1024px) 385px, 40vw"
                  className={`h-auto w-full ${o.white ? whiten : ""}`}
                />
              </div>
            </div>
          ))}

          {/* Student */}
          <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-[min(92vw,400px)] sm:w-[480px] lg:inset-x-auto lg:bottom-auto lg:left-[431px] lg:top-[512px] lg:mx-0 lg:w-[578px]">
            <div data-anim data-hero="student" className="opacity-0">
              <Image
                src="/images/hero/student.png"
                alt="Smiling student with headphones holding a laptop"
                width={578}
                height={541}
                priority
                sizes="(min-width: 1024px) 578px, 92vw"
                className="h-auto w-full [filter:url(#student-shadow)]"
              />
            </div>
          </div>

          {/* Card: UI/UX Design */}
          <div className="absolute z-20 hidden sm:left-[3%] sm:top-[20%] sm:block lg:left-[404px] lg:top-[639px]">
            <div data-anim data-card className={`${card} justify-center opacity-0`}>
              <p className="whitespace-nowrap text-base font-medium leading-[1.2]">
                UI/UX Design
              </p>
              <div className="flex gap-2 whitespace-nowrap text-[#82868e]">
                <span className="text-xs leading-[1.6]">200 Courses</span>
                <span className="text-[10px] leading-[1.5]" aria-hidden="true">
                  •
                </span>
                <span className="text-xs leading-[1.6]">1000+ Students</span>
              </div>
            </div>
          </div>

          {/* Card: Learning Progress */}
          <div className="absolute z-20 hidden sm:right-[3%] sm:top-[28%] sm:block lg:left-[842px] lg:right-auto lg:top-[651px]">
            <div data-anim data-card className={`${card} w-[232px] gap-2 opacity-0`}>
              <p className="text-sm font-medium leading-[1.2]">Learning Progress</p>
              <p
                data-pct
                className={`${poppins} text-5xl font-semibold leading-[1.2] tracking-[-0.01em]`}
              >
                55%
              </p>
              <div className="h-2 w-[200px] overflow-hidden rounded-3xl bg-[#f6f6f6]">
                <div
                  data-bar
                  className="h-full w-[56%] origin-left rounded-3xl bg-[#d4fb20]"
                />
              </div>
            </div>
          </div>

          {/* Card: Happy Students */}
          <div className="absolute bottom-3 left-3 z-20 sm:bottom-[5%] sm:left-[3%] lg:bottom-auto lg:left-[328px] lg:top-[837px]">
            <div className="origin-bottom-left scale-[.82] sm:scale-100">
              <div
                data-anim
                data-card
                className={`${card} w-[258px] justify-center gap-2 opacity-0`}
              >
                <div className="flex flex-col">
                  <p className="text-base font-medium leading-[1.2]">Happy Students</p>
                  <p className="flex items-center text-xs leading-[1.6] text-[#82868e]">
                    <span className="text-[#242528]">4.5&nbsp;</span>(240)
                    <Star
                      className="size-4 fill-[#d4fb20] text-[#d4fb20]"
                      aria-hidden="true"
                    />
                  </p>
                </div>
                <div className="flex" role="img" aria-label="Over 2,000 happy students">
                  {heroStudentAvatars.slice(0, 7).map((src) => (
                    <Image
                      key={src}
                      data-anim
                      data-avatar
                      src={src}
                      alt=""
                      width={86}
                      height={86}
                      className="-mr-4 size-[42px] shrink-0 rounded-full object-cover opacity-0"
                    />
                  ))}
                  <span
                    data-anim
                    data-avatar
                    className="grid size-[42px] shrink-0 place-items-center rounded-full bg-[#d4fb20] text-xs font-bold leading-[1.5] opacity-0"
                  >
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}