import Link from "next/link";
import Image from "next/image";
import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";
import { HeroEntranceItem, HeroEntranceStyle } from "@/components/HeroEntrance";

type Props = { locale: Locale };

export function Hero({ locale }: Props) {
  const { hero } = getLandingContent(locale);

  return (
    <section className="relative overflow-hidden bg-white px-4 pt-24 pb-10 sm:px-6 sm:pt-24 sm:pb-10 lg:px-8 lg:pt-24 lg:pb-10">
      <HeroEntranceStyle />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-20 lg:grid-cols-[9fr_11fr] lg:items-start lg:gap-24">
          <div className="space-y-8 lg:pt-8">
            <HeroEntranceItem delay={0}>
              <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-5xl lg:leading-[1.2]">
                {hero.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </HeroEntranceItem>
            <HeroEntranceItem delay={100}>
              <div className="max-w-xl space-y-3">
                {hero.subtitle.map((line) => (
                  <p key={line} className="text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed">
                    {line}
                  </p>
                ))}
                <p className="text-sm leading-relaxed text-slate-500">
                  已支援多種診所營運流程與排程管理需求
                </p>
              </div>
            </HeroEntranceItem>
            {hero.supportingLine && (
              <HeroEntranceItem delay={140}>
                <p className="text-base leading-relaxed text-slate-600">
                  {hero.supportingLine}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="site-btn-transition site-cta-btn cta-primary inline-flex rounded-xl bg-teal-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
                  >
                    {hero.primaryBtn}
                  </Link>
                  <Link
                    href="/product"
                    className="site-btn-transition site-cta-btn inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                  >
                    {hero.secondaryBtn}
                  </Link>
                </div>
              </HeroEntranceItem>
            )}
          </div>

          <div className="relative mt-4 flex items-end justify-center lg:pl-6">
            <div className="relative w-full max-w-[1100px] min-h-[340px] sm:min-h-[420px]">
              <Image
                src="/images/hero/avenra-schedule-laptop.png"
                alt="Avenra 預約排程介面"
                fill
                className="block -mb-10 object-contain object-top scale-[1.14] translate-y-6 lg:translate-y-8"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>
        </div>

        {hero.benefits && hero.benefits.length > 0 && (
          <p className="mt-10 text-center text-sm font-normal tracking-wide text-slate-500 opacity-60">
            {hero.benefits.join("｜")}
          </p>
        )}
      </div>
    </section>
  );
}

