import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";

type Props = { locale: Locale };

export function Integrations({ locale }: Props) {
  const { integrations } = getLandingContent(locale);

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {integrations.title}
        </h2>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          {integrations.names.map((name) => (
            <div
              key={name}
              className="site-card-hover rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
