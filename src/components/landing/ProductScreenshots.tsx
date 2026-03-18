import { Fragment } from "react";
import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";

type Props = { locale: Locale };

export function ProductScreenshots({ locale }: Props) {
  const { productScreenshots } = getLandingContent(locale);

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {productScreenshots.title}
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productScreenshots.cards.map((card, i) => (
            <div
              key={card.label}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
              </div>
              <div className="p-4">
                {i === 0 && (
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="h-7 flex-1 rounded bg-slate-100" />
                      <div className="h-7 w-16 rounded bg-teal-100" />
                    </div>
                    <div className="grid grid-cols-4 gap-px rounded border border-slate-200 bg-slate-100">
                      <div className="bg-white px-2 py-1.5 text-[10px] text-slate-500">—</div>
                      <div className="bg-white px-2 py-1.5 text-[10px] font-medium text-slate-600">
                        {productScreenshots.mockDoctorLabels[0]}
                      </div>
                      <div className="bg-white px-2 py-1.5 text-[10px] font-medium text-slate-600">
                        {productScreenshots.mockDoctorLabels[1]}
                      </div>
                      <div className="bg-white px-2 py-1.5 text-[10px] font-medium text-slate-600">
                        {productScreenshots.mockDoctorLabels[2]}
                      </div>
                      {["09:00", "10:00", "11:00"].map((time) => (
                        <Fragment key={time}>
                          <div className="bg-white px-2 py-1 text-[10px] text-slate-500">{time}</div>
                          <div className="bg-white p-1">
                            <div className="rounded bg-slate-50 px-1.5 py-1 text-[10px] text-slate-400">—</div>
                          </div>
                          <div className="bg-white p-1">
                            <div className="rounded bg-teal-100 px-1.5 py-1 text-[10px] font-medium text-teal-800">
                              {productScreenshots.mockBookingLabel}
                            </div>
                          </div>
                          <div className="bg-white p-1">
                            <div className="rounded bg-slate-50 px-1.5 py-1 text-[10px] text-slate-400">—</div>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                )}
                {i === 1 && (
                  <div className="space-y-2">
                    <div className="h-7 w-28 rounded bg-slate-100" />
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/50 p-2">
                        <div className="h-8 w-8 rounded-full bg-slate-200" />
                        <div className="flex-1 space-y-1">
                          <div className="h-2.5 w-20 rounded bg-slate-200" />
                          <div className="h-2 w-14 rounded bg-slate-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {i === 2 && (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="h-10 flex-1 rounded-lg border border-slate-200 bg-white shadow-sm">
                        <div className="p-2">
                          <span className="text-[10px] text-slate-500">{productScreenshots.mockTodayLabel}</span>
                          <p className="text-sm font-bold text-teal-600">12</p>
                        </div>
                      </div>
                      <div className="h-10 flex-1 rounded-lg border border-slate-200 bg-white shadow-sm">
                        <div className="p-2">
                          <span className="text-[10px] text-slate-500">{productScreenshots.mockDoneLabel}</span>
                          <p className="text-sm font-bold text-slate-700">5</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-16 rounded-lg bg-slate-100" />
                  </div>
                )}
              </div>
              <p className="border-t border-slate-100 bg-slate-50/50 px-4 py-2.5 text-center text-sm font-medium text-slate-600">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
