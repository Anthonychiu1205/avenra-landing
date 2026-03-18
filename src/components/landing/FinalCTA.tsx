import Link from "next/link";
import type { Locale } from "./types";

const LINE_URL = "https://lin.ee/oORnpv6";

type Props = { locale: Locale };

export function FinalCTA({ locale: _locale }: Props) {
  return (
    <section
      id="contact"
      className="overflow-hidden rounded-t-[48px] border-t border-slate-200 bg-[#F7F7F8] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="final-cta-title"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm leading-relaxed text-slate-500">
          不需要更換既有流程，可依診所需求逐步導入
        </p>
        <h2
          id="final-cta-title"
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          讓診所營運更清楚、更穩定
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
          想了解 Avenra 是否適合你的診所？透過簡單的示範，快速了解實際運作方式。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="site-btn-transition site-cta-btn cta-primary inline-flex rounded-xl bg-teal-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            預約 Demo
          </Link>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="site-btn-transition site-cta-btn inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            加入 LINE 諮詢
          </a>
        </div>
      </div>
    </section>
  );
}
