"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const MAIN_METRICS = [
  { label: "預約量提升", before: "導入前", after: "導入後", beforeLabel: "導入前", afterLabel: "+17%", trend: "預約量提升" },
  { label: "回訪率提升", before: "導入前", after: "導入後", beforeLabel: "導入前", afterLabel: "+13%", trend: "回訪率提升" },
  { label: "客單價優化", before: "導入前", after: "導入後", beforeLabel: "導入前", afterLabel: "+11%", trend: "客單價優化" },
  { label: "營運效率提升", before: "導入前", after: "導入後", beforeLabel: "導入前", afterLabel: "+30%", trend: "營運效率提升" },
];

const SECONDARY_METRICS = [
  { label: "No-show 降低", before: "導入前", after: "-5%", trend: "No-show 降低" },
  { label: "預約利用率提升", before: "導入前", after: "+11%", trend: "預約利用率提升" },
];

/* Simulated trend values (normalized) for charts */
const APPOINTMENT_POINTS = [82, 83.2, 84.8, 86.5, 89, 91.5, 94, 96];
const REVENUE_POINTS = [42.6, 43.8, 45.2, 46.8, 49.2, 51.8, 53.8, 55.7];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function CountUp({ to, durationMs, active, suffix = "%", sign = 1 }: { to: number; durationMs: number; active: boolean; suffix?: string; sign?: 1 | -1 }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    setValue(0);
    startRef.current = null;
    const tick = (t: number) => {
      if (startRef.current == null) startRef.current = t;
      const p = clamp((t - startRef.current) / durationMs, 0, 1);
      // smooth ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, durationMs, to]);

  const signed = sign === -1 ? -value : value;
  const prefix = sign === -1 ? "" : "+";
  return (
    <span className="kpi-count tabular-nums">
      {prefix}{signed}{suffix}
    </span>
  );
}

export function ClinicOperationsDashboard() {
  const maxApp = Math.max(...APPOINTMENT_POINTS);
  const minApp = Math.min(...APPOINTMENT_POINTS);
  const maxRev = Math.max(...REVENUE_POINTS);
  const minRev = Math.min(...REVENUE_POINTS);

  const scheduleTimes = ["09:00", "10:00", "11:00", "12:00", "14:00"];
  const scheduleCols = ["王醫師", "李醫師"];

  const prefersReducedMotion = usePrefersReducedMotion();
  const [sectionRef, inView] = useIntersectionObserver({ triggerOnce: true, rootMargin: "0px 0px -18% 0px" });
  const active = inView && !prefersReducedMotion;

  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  useEffect(() => {
    const el = showcaseRef.current;
    if (!el || prefersReducedMotion) return;
    let raf: number | null = null;
    const onMove = (e: PointerEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / (r.width / 2);
        const dy = (e.clientY - cy) / (r.height / 2);
        const ry = clamp(dx, -1, 1) * 5;
        const rx = clamp(-dy, -1, 1) * 4;
        setTilt({ rx, ry });
      });
    };
    const onLeave = () => setTilt({ rx: 0, ry: 0 });
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [prefersReducedMotion]);

  const schedulePlan = useMemo(
    () => [
      { t: "10:00", col: 0, kind: "appt", label: "諮詢", delayMs: 220 },
      { t: "11:00", col: 1, kind: "appt", label: "療程", delayMs: 520 },
      { t: "12:00", col: 0, kind: "unavail", label: "不可約", delayMs: 820 },
      { t: "14:00", col: 1, kind: "unavail", label: "不可約", delayMs: 1060 },
    ] as const,
    []
  );
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
    const stop = window.setTimeout(() => {
      if (raf) cancelAnimationFrame(raf);
    }, 1600);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(stop);
    };
  }, [active]);

  return (
    <section ref={sectionRef} className="border-t border-slate-200 bg-gray-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: copy + KPIs */}
          <div>
            <h2 className="text-left text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              診所營運儀表板
            </h2>
            <p className="mt-3 max-w-xl text-left text-slate-600">
              導入 Avenra 後的典型營運指標變化（示意數據）
            </p>

            {/* KPI cards */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {MAIN_METRICS.map((m) => (
                <div
                  key={m.label}
                  className={`site-card-hover rounded-xl border border-slate-200 bg-white p-6 shadow-sm kpi-pop ${inView ? "is-on" : ""}`}
                >
                  <p className="break-words text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {m.label}
                  </p>
                  <div className="mt-2 flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="break-words text-sm tabular-nums text-slate-400 line-through">
                      {m.beforeLabel}
                    </span>
                    <span className="break-words text-lg font-bold tabular-nums leading-snug text-slate-900">
                      {m.label === "預約量提升" ? (
                        <CountUp to={17} durationMs={1200} active={active} />
                      ) : m.label === "回訪率提升" ? (
                        <CountUp to={13} durationMs={1200} active={active} />
                      ) : m.label === "客單價優化" ? (
                        <CountUp to={11} durationMs={1200} active={active} />
                      ) : (
                        <CountUp to={30} durationMs={1200} active={active} />
                      )}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-teal-600">{m.trend}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SECONDARY_METRICS.map((m) => (
                <div
                  key={m.label}
                  className={`site-card-hover rounded-xl border border-slate-200 bg-white p-4 shadow-sm kpi-pop ${inView ? "is-on" : ""}`}
                >
                  <p className="break-words text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {m.label}
                  </p>
                  <div className="mt-1 flex min-w-0 flex-wrap items-baseline gap-2">
                    <span className="break-words text-sm tabular-nums text-slate-400">{m.before}</span>
                    <span className="text-slate-300">→</span>
                    <span className="break-words text-base font-semibold tabular-nums leading-snug text-slate-900">
                      {m.label === "No-show 降低" ? (
                        <CountUp to={5} sign={-1} durationMs={1200} active={active} />
                      ) : (
                        <CountUp to={11} durationMs={1200} active={active} />
                      )}
                    </span>
                    <span className="text-xs font-medium text-teal-600">{m.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual showcase area (prepared for future 3D) */}
          <div ref={showcaseRef} className="showcase-3d relative">
            <div
              className="showcase-3d-layer relative parallax-tilt"
              style={{ ["--rx" as any]: `${tilt.rx}deg`, ["--ry" as any]: `${tilt.ry}deg` }}
            >
              {/* Floating KPI badges */}
              <div className="pointer-events-none absolute -top-4 left-4 z-30 showcase-badge-float">
                <div className="showcase-3d-card rounded-full px-3 py-1.5 text-sm font-bold tabular-nums text-teal-700">
                  +17%
                </div>
              </div>
              <div className="pointer-events-none absolute top-10 right-6 z-30 showcase-badge-float [animation-delay:900ms]">
                <div className="showcase-3d-card rounded-full px-3 py-1.5 text-sm font-bold tabular-nums text-slate-700">
                  -5%
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-3 left-10 z-30 showcase-badge-float [animation-delay:1400ms]">
                <div className="showcase-3d-card rounded-full px-3 py-1.5 text-sm font-bold tabular-nums text-teal-700">
                  +30%
                </div>
              </div>

              {/* Secondary glass card (kpi / mini chart) */}
              <div
                className="showcase-3d-card showcase-3d-float-slow absolute right-0 top-6 z-10 w-[220px] rounded-2xl p-4"
                style={{ transform: "rotateX(6deg) rotateY(-12deg) translateZ(10px)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  成效摘要
                </p>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-sm font-medium text-slate-700">營運效率</span>
                  <span className="text-xl font-bold tabular-nums tracking-tight text-teal-700">+30%</span>
                </div>
                <div className="mt-3 h-12 w-full overflow-hidden rounded-xl border border-slate-200 bg-white/70">
                  <svg viewBox="0 0 120 40" className="h-full w-full" preserveAspectRatio="none">
                    <polyline
                      className={`line-draw ${inView ? "is-on" : ""}`}
                      style={{ ["--dash" as any]: 180 }}
                      fill="none"
                      stroke="rgb(20 184 166)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={REVENUE_POINTS.map((val, i) => {
                        const x = 6 + (i / (REVENUE_POINTS.length - 1)) * 108;
                        const y = 32 - ((val - minRev) / (maxRev - minRev)) * 24;
                        return `${x},${y}`;
                      }).join(" ")}
                    />
                  </svg>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  示意趨勢（非原始數值）
                </p>
              </div>

              {/* Main glass card (mini schedule board) */}
              <div
                className="showcase-3d-card showcase-3d-float relative z-20 overflow-hidden rounded-3xl p-5 sm:p-6"
                style={{ transform: "rotateX(8deg) rotateY(10deg) translateZ(0px)" }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    Mini Schedule Board
                  </p>
                  <span className="rounded-full bg-teal-100 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
                    Today
                  </span>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/70">
                  <div className="grid grid-cols-[72px_1fr_1fr] gap-px bg-slate-200">
                    <div className="bg-gray-50 px-3 py-2 text-[11px] font-semibold text-slate-500">
                      時間
                    </div>
                    {scheduleCols.map((c) => (
                      <div
                        key={c}
                        className="bg-gray-50 px-3 py-2 text-[11px] font-semibold text-slate-700"
                      >
                        {c}
                      </div>
                    ))}

                    {scheduleTimes.map((t) => (
                      <div key={t} className="contents">
                        <div className="bg-white px-3 py-2 text-[11px] text-slate-500">
                          {t}
                        </div>

                        {/* Col 1 */}
                        <div className="bg-white p-1.5">
                          {(() => {
                            const entry = schedulePlan.find((x) => x.t === t && x.col === 0);
                            if (!entry) {
                              return (
                                <div className="rounded-xl bg-slate-50 px-2.5 py-2 text-[11px] text-slate-400">
                                  —
                                </div>
                              );
                            }
                            const on = nowMs >= entry.delayMs;
                            return (
                              <div
                                className={`schedule-appear ${active && on ? "is-on" : ""} rounded-xl px-2.5 py-2 text-[11px] font-semibold text-white shadow-sm ${
                                  entry.kind === "appt" ? "bg-blue-600" : "bg-slate-900/85"
                                }`}
                              >
                                {entry.label}
                              </div>
                            );
                          })()}
                        </div>

                        {/* Col 2 */}
                        <div className="bg-white p-1.5">
                          {(() => {
                            const entry = schedulePlan.find((x) => x.t === t && x.col === 1);
                            if (!entry) {
                              return (
                                <div className="rounded-xl bg-slate-50 px-2.5 py-2 text-[11px] text-slate-400">
                                  —
                                </div>
                              );
                            }
                            const on = nowMs >= entry.delayMs;
                            return (
                              <div
                                className={`schedule-appear ${active && on ? "is-on" : ""} rounded-xl px-2.5 py-2 text-[11px] font-semibold text-white shadow-sm ${
                                  entry.kind === "appt" ? "bg-blue-600" : "bg-slate-900/85"
                                }`}
                              >
                                {entry.label}
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                    <p className="text-[11px] font-semibold text-slate-500">預約量</p>
                    <p className="mt-1 text-lg font-bold tabular-nums text-teal-700">
                      {active ? <CountUp to={17} durationMs={1200} active={active} /> : "+17%"}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                    <p className="text-[11px] font-semibold text-slate-500">No-show</p>
                    <p className="mt-1 text-lg font-bold tabular-nums text-slate-800">
                      {active ? <CountUp to={5} sign={-1} durationMs={1200} active={active} /> : "-5%"}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                    <p className="text-[11px] font-semibold text-slate-500">效率</p>
                    <p className="mt-1 text-lg font-bold tabular-nums text-teal-700">
                      {active ? <CountUp to={30} durationMs={1200} active={active} /> : "+30%"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
