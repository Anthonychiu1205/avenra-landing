import Link from "next/link";
import Image from "next/image";
import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";
import { MobileNav } from "./MobileNav";

type Props = { locale: Locale };

export function Navbar({ locale }: Props) {
  const { navbar } = getLandingContent(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-900"
        >
          <Image
            src="/logo-icon.png"
            alt="Avenra"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span>Avenra</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navbar.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            {navbar.ctaLabel}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
