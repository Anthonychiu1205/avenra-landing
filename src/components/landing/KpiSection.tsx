"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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

const METRICS = [
  {
    value: 17,
    sign: 1 as const,
    label: "預約量提升",
    description: "建立清楚排程流程後，預約效率顯著改善",
  },
  {
    value: 13,
    sign: 1 as const,
    label: "回訪率提升",
    description: "透過回診提醒與客戶追蹤，提高回診穩定度",
  },
  {
    value: 11,
    sign: 1 as const,
    label: "客單價優化",
    description: "透過療程管理與客戶分群，提高整體消費表現",
  },
  {
    value: 30,
    sign: 1 as const,
    label: "營運效率提升",
    description: "減少人工記錄與重複確認，提升團隊效率",
  },
  {
    value: 5,
    sign: -1 as const,
    label: "No-show 降低",
    description: "透過提醒與追蹤，降低未到診比例",
  },
  {
    value: 11,
    sign: 1 as const,
    label: "預約利用率提升",
    description: "有效填補時段空缺，提高整體排程利用率",
  },
];

export function KpiSection() {
  const [sectionRef, inView] = useIntersectionObserver({
    triggerOnce: true,
    rootMargin: "0px 0px -12% 0px",
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

  return (
    <section
      ref={sectionRef}
      className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
      aria-label="導入後的實際營運提升"
    >
      <div className="mx-auto max-w-6xl">
        {/* KPI section: metric cards only. No dashboard UI or schedule visual. */}
        <p className="text-center text-sm leading-relaxed text-slate-500">
          以下為導入後常見的營運改善結果
        </p>
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          導入後的實際營運提升
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="site-card-hover flex h-full flex-col rounded-xl border border-slate-200 bg-gray-50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                <span className="tabular-nums text-teal-600">
                  {active ? (
                    <CountUp
                      to={m.value}
                      sign={m.sign}
                      durationMs={1000}
                      active={active}
                      suffix="%"
                    />
                  ) : (
                    (m.sign === -1 ? "-0%" : "+0%")
                  )}
                </span>{" "}
                {m.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
