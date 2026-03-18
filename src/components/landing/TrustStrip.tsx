import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";

function CapabilityIcon() {
  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal-100 text-teal-600"
      aria-hidden
    >
      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
    </span>
  );
}

type Props = { locale: Locale };

export function TrustStrip({ locale }: Props) {
  const { trustStrip } = getLandingContent(locale);

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {trustStrip.items.map((label) => (
            <div key={label} className="flex items-center gap-2">
              <CapabilityIcon />
              <span className="text-sm font-medium text-slate-600">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
