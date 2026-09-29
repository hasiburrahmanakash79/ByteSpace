import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CreatorCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-[#073DDE] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-20 sm:opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Decorative images — hidden on mobile so copy stays clear */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block" aria-hidden="true">
        <Image
          src="/images/creator/mask.png"
          alt=""
          width={346}
          height={190}
          className="absolute top-0 h-auto w-72"
        />
        <Image
          src="/images/creator/mask-1.png"
          alt=""
          width={140}
          height={189}
          className="absolute left-[15%] top-10 h-42 w-auto"
        />
        <Image
          src="/images/creator/cone-3.png"
          alt=""
          width={190}
          height={189}
          className="absolute right-[16%] top-10 h-44 w-auto rotate-12"
        />
        <Image
          src="/images/creator/cone-2.png"
          alt=""
          width={218}
          height={372}
          className="absolute right-0 top-14 h-72 w-auto"
        />
        <Image
          src="/images/creator/cone-1.png"
          alt=""
          width={140}
          height={189}
          className="absolute left-0 top-[55%] h-48 w-auto"
        />
        <Image
          src="/images/creator/cone.png"
          alt=""
          width={334}
          height={199}
          className="absolute bottom-0 left-[7%] h-54 w-auto"
        />
        <Image
          src="/images/creator/frame.png"
          alt=""
          width={266}
          height={225}
          className="absolute bottom-0 right-[6%] h-44 w-auto"
        />
      </div>

      {/* Content */}
      <Container className="relative flex max-w-6xl flex-col items-center gap-6 text-center sm:gap-8">
        <h2
          id="cta-title"
          className="max-w-4xl text-balance text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl sm:leading-[1.15] lg:text-[3.25rem]"
        >
          Unlock Your Potential as a
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Creator with ByteSpace
        </h2>

        <p className="max-w-6xl text-pretty text-sm leading-relaxed text-white/90 sm:text-base lg:text-[1.25rem]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Button
          size="lg"
          className="rounded-full bg-[#DFFF00] px-8 py-5 text-sm font-medium text-[#111] shadow-none transition-transform hover:scale-105 hover:bg-[#DFFF00] sm:px-9 sm:py-6 sm:text-base"
        >
          Join as Creator
        </Button>
      </Container>
    </section>
  );
}