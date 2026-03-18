"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type HeroPreviewContent = {
  patientsLabel: string;
  doctorCol1: string;
  doctorCol2: string;
  timeLabels: string[];
  patientNames: string[];
  selectedTime: string;
  dateLabel: string;
  todayLabel: string;
  consultLabel: string;
  treatmentLabel: string;
  analyticsTodayLabel: string;
  analyticsDoneLabel: string;
  analyticsPendingLabel: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function CountUp({
  to,
  durationMs,
  active,
  sign = 1,
  suffix = "%",
}: {
  to: number;
  durationMs: number;
  active: boolean;
  sign?: 1 | -1;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    setValue(0);
    startRef.current = null;
    let raf: number | null = null;
    const tick = (t: number) => {
      if (startRef.current == null) startRef.current = t;
      const p = clamp((t - startRef.current) / durationMs, 0, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, [active, durationMs, to]);

  const signed = sign === -1 ? -value : value;
  const prefix = sign === -1 ? "" : "+";
  return (
    <span className="tabular-nums">
      {prefix}
      {signed}
      {suffix}
    </span>
  );
}

/**
 * Hero dashboard animation — runs ONCE on first viewport entry.
 * Step 0: Dashboard visible, calm (no booking blocks, bottom cards hidden).
 * Step 1: Booking blocks appear 09:00 → 10:00 → 11:00, fade + slight upward, staggered.
 * Step 2: Bottom summary cards count up (預約量 +17%, No-show -5%, 效率 +30%).
 * Step 3: Subtle idle float only after sequence completes. No loop.
 */
const SCHEDULE_PLAN = [
  { timeIndex: 0, col: 0, labelKey: "consult", delayMs: 0 },    // 09:00
  { timeIndex: 1, col: 1, labelKey: "treatment", delayMs: 100 }, // 10:00 (stagger 0.1s)
  { timeIndex: 2, col: 0, labelKey: "consult", delayMs: 200 },  // 11:00
] as const;

const BOTTOM_METRICS_START_MS = 900;   // Step 2: after Step 1 (~600ms)
const BOTTOM_COUNTUP_DURATION_MS = 1000;
const SEQUENCE_DONE_MS = 2200;        // Step 3: idle float after count-up

type Props = { heroPreview: HeroPreviewContent };

export function HeroDashboardPreview({ heroPreview }: Props) {
  const [ref, inView] = useIntersectionObserver({
    triggerOnce: true,
    rootMargin: "0px 0px -5% 0px",
  });
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const fn = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  const active = inView && !reducedMotion;

  const startMs = useRef<number>(0);
  const [nowMs, setNowMs] = useState(0);
  useEffect(() => {
    if (!active) return;
    startMs.current = performance.now();
    let raf: number | null = null;
    const tick = () => {
      setNowMs(performance.now() - startMs.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, [active]);

  const sequenceDone = active && nowMs >= SEQUENCE_DONE_MS;
  const bottomMetricsVisible = active && nowMs >= BOTTOM_METRICS_START_MS;
  const countUpActive = bottomMetricsVisible;

  function getSlotContent(rowIndex: number, col: number) {
    const entry = SCHEDULE_PLAN.find(
      (e) => e.timeIndex === rowIndex && e.col === col
    );
    if (!entry) return null;
    const visible = active && nowMs >= entry.delayMs;
    if (!visible) return null;
    const label =
      entry.labelKey === "consult"
        ? heroPreview.consultLabel
        : heroPreview.treatmentLabel;
    return (
      <div
        className="rounded-lg border border-teal-200/80 bg-teal-50 px-2 py-1.5 text-[11px] font-medium text-teal-800 shadow-sm"
        style={{ animation: "hero-schedule-block-appear 0.4s ease-out both" }}
      >
        {label}
      </div>
    );
  }

  const timeRows = heroPreview.timeLabels.slice(0, 4);
  const patientList = heroPreview.patientNames.slice(0, 3);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50 ${
        sequenceDone ? "hero-dashboard-idle-float" : ""
      }`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-slate-300/80" />
        <span className="text-[11px] font-medium text-slate-500">Avenra</span>
      </div>

      <div className="relative flex min-h-[280px] sm:min-h-[300px]">
        <aside className="flex w-[36%] min-w-0 flex-col border-r border-slate-100 bg-slate-50/50">
          <div className="border-b border-slate-100 bg-white/80 px-3 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {heroPreview.patientsLabel}
            </span>
          </div>
          <ul className="flex-1 overflow-auto p-2">
            {patientList.map((name, i) => (
              <li
                key={name}
                className={`flex items-center gap-3 rounded-lg px-2.5 py-2.5 ${
                  i === 1
                    ? "border border-teal-200 bg-teal-50 shadow-sm"
                    : "hover:bg-slate-100/80"
                }`}
              >
                <div className="h-8 w-8 shrink-0 rounded-full bg-slate-200 ring-2 ring-white" />
                <div className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-medium text-slate-800">
                    {name}
                  </span>
                  <span className="block truncate text-[11px] text-slate-500">
                    {i === 1 ? heroPreview.selectedTime : "—"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between border-b border-slate-100 bg-white px-3 py-2">
            <span className="text-xs font-medium text-slate-600">
              {heroPreview.dateLabel}
            </span>
            <span className="rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-600">
              {heroPreview.todayLabel}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-3">
            <div className="grid flex-1 grid-cols-3 gap-px overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100">
              <div className="rounded-tl-xl bg-slate-100/90 px-2 py-1.5 text-[10px] font-semibold text-slate-500">
                —
              </div>
              <div className="bg-slate-100/90 px-2 py-1.5 text-[10px] font-semibold text-slate-600">
                {heroPreview.doctorCol1}
              </div>
              <div className="rounded-tr-xl bg-slate-100/90 px-2 py-1.5 text-[10px] font-semibold text-slate-600">
                {heroPreview.doctorCol2}
              </div>
              {timeRows.map((time, rowIndex) => (
                <Fragment key={time}>
                  <div className="bg-white px-2 py-1.5 text-[10px] text-slate-500">
                    {time}
                  </div>
                  <div className="bg-white p-1">
                    {getSlotContent(rowIndex, 0) ?? (
                      <div className="rounded-md bg-slate-50/80 px-2 py-1 text-[10px] text-slate-400">
                        —
                      </div>
                    )}
                  </div>
                  <div className="bg-white p-1">
                    {getSlotContent(rowIndex, 1) ?? (
                      <div className="rounded-md bg-slate-50/80 px-2 py-1 text-[10px] text-slate-400">
                        —
                      </div>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>

            <div
              className="mt-3 grid grid-cols-3 gap-2 transition-opacity duration-300 ease-out"
              style={{ opacity: bottomMetricsVisible ? 1 : 0 }}
            >
              <div className="rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-sm">
                <p className="text-[10px] font-medium text-slate-500">
                  預約量
                </p>
                <p className="mt-1 text-lg font-bold tabular-nums text-teal-600">
                  {countUpActive ? (
                    <CountUp
                      to={17}
                      durationMs={BOTTOM_COUNTUP_DURATION_MS}
                      active={countUpActive}
                      suffix="%"
                    />
                  ) : (
                    "0%"
                  )}
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-sm">
                <p className="text-[10px] font-medium text-slate-500">
                  No-show
                </p>
                <p className="mt-1 text-lg font-bold tabular-nums text-slate-800">
                  {countUpActive ? (
                    <CountUp
                      to={5}
                      sign={-1}
                      durationMs={BOTTOM_COUNTUP_DURATION_MS}
                      active={countUpActive}
                      suffix="%"
                    />
                  ) : (
                    "0%"
                  )}
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-sm">
                <p className="text-[10px] font-medium text-slate-500">
                  效率
                </p>
                <p className="mt-1 text-lg font-bold tabular-nums text-teal-600">
                  {countUpActive ? (
                    <CountUp
                      to={30}
                      durationMs={BOTTOM_COUNTUP_DURATION_MS}
                      active={countUpActive}
                      suffix="%"
                    />
                  ) : (
                    "0%"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
