import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { footerNav } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#fafafa]">
      <Container className="py-10 sm:py-14 lg:py-20">
        {/* Main */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-20">
          {/* Brand + newsletter */}
          <div className="flex min-w-0 flex-col">
            <Link href="/" aria-label="ByteSpace — home" className="w-fit">
              <Logo />
            </Link>

            <p className="mt-4 max-w-[680px] text-base leading-relaxed text-[#444] sm:mt-5 sm:text-[18px] sm:leading-[1.5]">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Stack on mobile so the input never gets squished */}
            <form className="my-6 flex w-full max-w-[720px] flex-col gap-3 sm:my-7 sm:flex-row sm:items-stretch sm:gap-4 lg:gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="box-border  w-full min-w-0 flex-1 rounded-full border border-[#d2d2d2] bg-white px-5 py-4 text-base text-[#222] outline-none transition placeholder:text-[#444] focus:border-[#c8ff00] h-[50px] sm:px-9 sm:text-[18px]"
              />
              <button
                type="submit"
                className="w-full shrink-0 rounded-full bg-[#caff00] px-8 text-base font-medium text-[#202020] transition hover:scale-105 h-[50px] sm:w-auto sm:min-w-[148px] sm:text-[18px]"
              >
                Search
              </button>
            </form>

            <p className="max-w-[680px] text-sm leading-relaxed text-[#444] sm:text-[16px] sm:leading-[1.6]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Nav */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10"
          >
            {footerNav.map((group) => (
              <div key={group.heading} className="flex flex-col gap-3 sm:gap-4">
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {group.heading}
                </h3>
                <ul className="flex flex-col gap-2.5 sm:gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-[#89ab00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-[#d6d6d6] pt-6 sm:mt-10 sm:pt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-sm text-[#444] sm:text-[16px]">
              © {year} ByteSpace. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-8">
              <Link
                href="/"
                className="text-sm text-[#444] transition-colors hover:text-black sm:text-[16px]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-sm text-[#444] transition-colors hover:text-black sm:text-[16px]"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="text-sm text-[#444] transition-colors hover:text-black sm:text-[16px]"
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}