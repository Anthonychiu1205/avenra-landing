"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const SCHEDULE_ROWS = [
  "09:00  王先生  皮膚科",
  "10:00  陳小姐  回診",
  "11:00  林先生  初診",
];

const CRM_ITEMS = [
  "王小明 · 預約 3/20 上午",
  "陳小姐 · 回診追蹤",
  "林先生 · 療程紀錄",
];

const WORKFLOW_STEPS = [
  "顧客預約",
  "系統排程",
  "建立顧客資料",
  "療程紀錄",
  "營運分析",
];

type FeatureCarouselProps = {
  items?: string[];
  className?: string;
};

export function DemoFeatureCarousel({ items, className }: FeatureCarouselProps) {
  const list = useMemo(
    () =>
      items ?? [
        "預約與排班整合",
        "顧客資料集中管理",
        "回診提醒自動化",
        "療程與紀錄同步",
        "營運數據即時掌握",
      ],
    [items]
  );

  const railRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq?.matches) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const el = railRef.current;
      if (!el) return;

      const dt = now - last;
      last = now;

      const shouldPause = isHovering || isDraggingRef.current;
      if (!shouldPause) {
        // Calm, premium pace: ~8px/sec
        const delta = (dt / 1000) * 8;
        const max = el.scrollWidth - el.clientWidth;
        const next = el.scrollLeft + delta;
        el.scrollLeft = next >= max - 1 ? 0 : next;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isHovering]);

  return (
    <div className={className}>
      <div
        ref={railRef}
        className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onPointerDown={(e) => {
          const el = railRef.current;
          if (!el) return;
          isDraggingRef.current = true;
          dragStartXRef.current = e.clientX;
          dragStartScrollLeftRef.current = el.scrollLeft;
          el.setPointerCapture?.(e.pointerId);
        }}
        onPointerUp={() => {
          isDraggingRef.current = false;
        }}
        onPointerCancel={() => {
          isDraggingRef.current = false;
        }}
        onPointerMove={(e) => {
          const el = railRef.current;
          if (!el || !isDraggingRef.current) return;
          const dx = e.clientX - dragStartXRef.current;
          el.scrollLeft = dragStartScrollLeftRef.current - dx;
        }}
      >
        {[...list, ...list].map((text, idx) => (
          <div
            key={`${text}-${idx}`}
            className="shrink-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-[1.8] text-slate-800 shadow-sm"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

type FeatureCardMarqueeProps = {
  items?: string[];
  className?: string;
  durationMs?: number;
};

export function DemoFeatureCardMarquee({
  items,
  className,
  durationMs = 24000,
}: FeatureCardMarqueeProps) {
  const list = useMemo(
    () =>
      items ?? [
        "預約與排班整合",
        "顧客資料集中管理",
        "回診提醒自動化",
        "療程與紀錄同步",
        "營運數據即時掌握",
        "多醫師排程支援",
        "權限與角色管理",
        "預約狀態快速查看",
      ],
    [items]
  );

  const marqueeStyle = useMemo(
    () =>
      ({
        ["--demo-card-marquee-duration" as any]: `${durationMs}ms`,
      }) as React.CSSProperties,
    [durationMs]
  );

  return (
    <div className={className}>
      <div className="group overflow-hidden" style={marqueeStyle}>
        <div className="flex w-max gap-3 py-1 demo-card-marquee group-hover:[animation-play-state:paused]">
          {[...list, ...list].map((text, idx) => (
            <div
              key={`${text}-${idx}`}
              className="shrink-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-[1.8] text-slate-800 shadow-sm"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .demo-card-marquee {
          animation: demo-card-marquee var(--demo-card-marquee-duration) linear infinite;
          will-change: transform;
        }
        @keyframes demo-card-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

type FeatureBadgeStripProps = {
  items?: string[];
  className?: string;
  durationMs?: number;
};

export function DemoFeatureBadgeStrip({
  items,
  className,
  durationMs = 12000,
}: FeatureBadgeStripProps) {
  const list = useMemo(
    () =>
      items ?? [
        "預約與排班整合",
        "顧客資料集中管理",
        "回診提醒自動化",
        "療程與紀錄同步",
        "營運數據即時掌握",
        "多醫師排程支援",
        "權限與角色管理",
        "預約狀態快速查看",
      ],
    [items]
  );

  const marqueeStyle = useMemo(
    () =>
      ({
        ["--demo-marquee-duration" as any]: `${durationMs}ms`,
      }) as React.CSSProperties,
    [durationMs]
  );

  return (
    <div className={className}>
      <div className="group overflow-hidden" style={marqueeStyle}>
        <div className="flex w-max gap-2 whitespace-nowrap py-1 demo-marquee group-hover:[animation-play-state:paused]">
          {[...list, ...list].map((text, idx) => (
            <span
              key={`${text}-${idx}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium leading-[1.8] text-slate-700 shadow-sm"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .demo-marquee {
          animation: demo-marquee var(--demo-marquee-duration) linear infinite;
        }
        @keyframes demo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export function DemoCoreSection() {
  const [scheduleActive, setScheduleActive] = useState(0);
  const [crmActive, setCrmActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setScheduleActive((i) => (i + 1) % SCHEDULE_ROWS.length), 2600);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setCrmActive((i) => (i + 1) % CRM_ITEMS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
      {/* 預約排程 — rotating slot highlight */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">預約排程</p>
        <p className="mt-1 text-xs text-slate-500">今日預約</p>
        <ul className="mt-4 space-y-1.5">
          {SCHEDULE_ROWS.map((row, i) => (
            <li
              key={row}
              className={`rounded-lg px-3 py-2 text-xs text-slate-700 transition-all duration-500 ${
                i === scheduleActive
                  ? "bg-teal-50 ring-1 ring-teal-200/60"
                  : "bg-slate-50/80"
              }`}
            >
              {row}
            </li>
          ))}
        </ul>
      </div>

      {/* 顧客 CRM — rotating customer row */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">顧客 CRM</p>
        <p className="mt-1 text-xs text-slate-500">近期顧客</p>
        <ul className="mt-4 space-y-1.5">
          {CRM_ITEMS.map((label, i) => (
            <li
              key={label}
              className={`rounded-lg px-3 py-2 text-xs text-slate-700 transition-all duration-500 ${
                i === crmActive ? "bg-teal-50 ring-1 ring-teal-200/60" : "bg-slate-50/80"
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* 營運分析 — stable numbers + subtle progress */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">營運分析</p>
        <p className="mt-1 text-xs text-slate-500">本週概況</p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-2xl font-bold tabular-nums text-teal-600">12</p>
            <p className="text-xs text-slate-500">今日預約</p>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-600">
              <span>回診率</span>
              <span className="font-medium">78%</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-teal-500/80 transition-all duration-1000"
                style={{ width: "78%" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-600">
              <span>預約率</span>
              <span className="font-medium">92%</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-teal-400/70 transition-all duration-1000"
                style={{ width: "92%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DemoUsageFlowWithIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % WORKFLOW_STEPS.length),
      2800
    );
    return () => clearInterval(t);
  }, []);

  const dotLeft = WORKFLOW_STEPS.length <= 1 ? 50 : (activeIndex / (WORKFLOW_STEPS.length - 1)) * 100;

  return (
    <div className="relative mx-auto max-w-3xl">
      <ol className="flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4">
        {WORKFLOW_STEPS.map((step, i) => (
          <li
            key={step}
            className={`flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm transition-all duration-500 sm:flex-1 sm:min-w-[120px] ${
              i === activeIndex
                ? "border-teal-200 ring-1 ring-teal-100"
                : "border-slate-200"
            }`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
              {i + 1}
            </span>
            <span className="text-sm font-medium text-slate-800">{step}</span>
          </li>
        ))}
      </ol>
      <div className="relative mt-4 h-px w-full bg-slate-200/80 sm:mt-6">
        <div
          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.4)] transition-all duration-700 ease-out"
          style={{ left: `calc(${dotLeft}% - 4px)` }}
        />
      </div>
    </div>
  );
}
