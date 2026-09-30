"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MdOutlineShoppingBag } from "react-icons/md";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNav, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 0);
    };

    updateScrollState();

    window.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "bg-primary/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6 py-0 lg:h-24">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <Logo className="text-surface-brand-foreground [&_span]:text-surface-brand-foreground" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    relative block rounded-full py-2
                    text-base text-surface-brand-foreground/90
                    transition-colors duration-300
                    hover:text-surface-brand-foreground
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-ring

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[3px]
                    after:w-full
                    after:origin-left
                    after:scale-x-0
                    after:rounded-full
                    after:bg-[#8BC342]
                    after:transition-transform
                    after:duration-300
                    after:ease-out
                    hover:after:scale-x-100
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center lg:flex">
          <Button
            asChild
            variant="ghost"
            className="
              text-surface-brand-foreground
              hover:bg-surface-brand-foreground/10
              hover:text-surface-brand-foreground
            "
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="
              text-surface-brand-foreground
              hover:bg-surface-brand-foreground/10
              hover:text-surface-brand-foreground
            "
          >
            <Link href="/sign-up">Join Us</Link>
          </Button>

          <button
            type="button"
            aria-label="Open cart"
            className="
              inline-flex size-12 items-center justify-center
              rounded-full
              text-surface-brand-foreground
              transition-colors
              hover:bg-surface-brand-foreground/10
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-ring
            "
          >
            <MdOutlineShoppingBag
              className="size-6"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="
              inline-flex size-10 items-center justify-center
              rounded-full
              text-surface-brand-foreground
              transition-colors
              hover:bg-surface-brand-foreground/10
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-ring
            "
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "mx-5 rounded-3xl border border-white/20 bg-primary/60 p-6 shadow-xl backdrop-blur-md lg:hidden",
          "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95"
        )}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    block rounded-xl p-3
                    text-lg font-medium text-white
                    transition-colors
                    hover:bg-white/10
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-ring
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Actions */}
        <div className="mt-4 flex items-center gap-3 border-t border-white/20 pt-5">
          <Button
            asChild
            variant="outline"
            className="flex-1 cursor-pointer border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/sign-in" onClick={() => setOpen(false)}>
              Sign In
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="flex-1 cursor-pointer bg-secondary text-primary hover:bg-secondary/90"
          >
            <Link href="/sign-up" onClick={() => setOpen(false)}>
              Join Us
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}