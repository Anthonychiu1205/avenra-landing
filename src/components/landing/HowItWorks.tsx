import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";

type Props = { locale: Locale };

export function HowItWorks({ locale }: Props) {
  const { howItWorks } = getLandingContent(locale);

  return (
    <section className="border-t border-slate-200 bg-gray-50 px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {howItWorks.title}
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <div
              key={step}
              className="site-card-hover flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
                {i + 1}
              </span>
              <p className="mt-4 text-center font-medium text-slate-800">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
