"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type CustomerScenario = {
  id: number;
  name: string;
  treatment: string;
  lastVisit: string;
  bookingStatus: string;
  bookingTone: "amber" | "emerald" | "slate";
  activeTags: string[];
  segmentSummary: string;
};

type TagMeta = {
  label: string;
  x: string;
  y: string;
  tone: "emerald" | "sky" | "violet" | "amber" | "slate";
  size: "primary" | "secondary";
  driftX: number[];
  driftY: number[];
  duration: number;
};

const scenarios: CustomerScenario[] = [
  {
    id: 1,
    name: "王小姐",
    treatment: "音波拉提",
    lastVisit: "32 天前",
    bookingStatus: "未預約",
    bookingTone: "amber",
    activeTags: ["VIP", "高單價療程", "術後追蹤", "30 天未回診"],
    segmentSummary: "目前分群：VIP / 高單價療程 / 術後追蹤 / 30 天未回診",
  },
  {
    id: 2,
    name: "林小姐",
    treatment: "雷射療程",
    lastVisit: "30 天前",
    bookingStatus: "待回診",
    bookingTone: "emerald",
    activeTags: ["30 天未回診", "已讀未回", "曾填問卷", "回診提醒"],
    segmentSummary: "目前分群：30 天未回診 / 已讀未回 / 曾填問卷 / 回診提醒",
  },
  {
    id: 3,
    name: "陳小姐",
    treatment: "玻尿酸",
    lastVisit: "首次療程後",
    bookingStatus: "已預約",
    bookingTone: "slate",
    activeTags: ["新客", "VIP", "高單價療程", "首次療程"],
    segmentSummary: "目前分群：新客 / VIP / 高單價療程 / 首次療程",
  },
];

const tagCloud: TagMeta[] = [
  // 上方區域
  {
    label: "30 天未回診",
    x: "6%",
    y: "10%",
    tone: "emerald",
    size: "primary",
    driftX: [0, 8, -5, 0],
    driftY: [0, -6, 5, 0],
    duration: 6.1,
  },
  {
    label: "VIP",
    x: "78%",
    y: "14%",
    tone: "violet",
    size: "secondary",
    driftX: [0, -7, 6, 0],
    driftY: [0, 5, -4, 0],
    duration: 6.3,
  },
  {
    label: "回診提醒",
    x: "30%",
    y: "6%",
    tone: "sky",
    size: "secondary",
    driftX: [0, 6, -4, 0],
    driftY: [0, -5, 4, 0],
    duration: 6.6,
  },

  // 左側區域
  {
    label: "新客",
    x: "10%",
    y: "34%",
    tone: "slate",
    size: "secondary",
    driftX: [0, 6, -3, 0],
    driftY: [0, -5, 4, 0],
    duration: 5.9,
  },
  {
    label: "術後追蹤",
    x: "4%",
    y: "56%",
    tone: "emerald",
    size: "primary",
    driftX: [0, -5, 7, 0],
    driftY: [0, 6, -4, 0],
    duration: 6.4,
  },
  {
    label: "已讀未回",
    x: "14%",
    y: "76%",
    tone: "sky",
    size: "secondary",
    driftX: [0, -6, 7, 0],
    driftY: [0, 7, -3, 0],
    duration: 6.8,
  },

  // 右側區域
  {
    label: "高單價療程",
    x: "76%",
    y: "40%",
    tone: "amber",
    size: "primary",
    driftX: [0, 7, -5, 0],
    driftY: [0, -5, 6, 0],
    duration: 6.2,
  },
  {
    label: "曾填問卷",
    x: "70%",
    y: "78%",
    tone: "violet",
    size: "secondary",
    driftX: [0, 6, -6, 0],
    driftY: [0, -6, 5, 0],
    duration: 6.7,
  },
  {
    label: "首次療程",
    x: "82%",
    y: "62%",
    tone: "slate",
    size: "secondary",
    driftX: [0, -5, 6, 0],
    driftY: [0, 5, -4, 0],
    duration: 6.5,
  },

  // 下方區域
  {
    label: "高互動",
    x: "34%",
    y: "86%",
    tone: "emerald",
    size: "secondary",
    driftX: [0, 5, -4, 0],
    driftY: [0, -4, 4, 0],
    duration: 6.0,
  },
  {
    label: "活動推播",
    x: "56%",
    y: "88%",
    tone: "sky",
    size: "secondary",
    driftX: [0, -4, 5, 0],
    driftY: [0, 5, -3, 0],
    duration: 6.9,
  },
];

const AUTO_PLAY_MS = 2800;

function getTagToneClasses(tone: TagMeta["tone"], isActive: boolean) {
  const activeMap = {
    emerald:
      "bg-emerald-100 text-emerald-800 ring-emerald-200 shadow-[0_10px_24px_rgba(16,185,129,0.14)]",
    sky: "bg-sky-100 text-sky-800 ring-sky-200 shadow-[0_10px_24px_rgba(14,165,233,0.14)]",
    violet:
      "bg-violet-100 text-violet-800 ring-violet-200 shadow-[0_10px_24px_rgba(139,92,246,0.14)]",
    amber:
      "bg-amber-100 text-amber-800 ring-amber-200 shadow-[0_10px_24px_rgba(245,158,11,0.14)]",
    slate:
      "bg-slate-200 text-slate-700 ring-slate-300 shadow-[0_10px_24px_rgba(100,116,139,0.10)]",
  };

  const idleMap = {
    emerald:
      "bg-emerald-50/95 text-emerald-700 ring-emerald-100 shadow-[0_4px_14px_rgba(16,185,129,0.05)]",
    sky: "bg-sky-50/95 text-sky-700 ring-sky-100 shadow-[0_4px_14px_rgba(14,165,233,0.05)]",
    violet:
      "bg-violet-50/95 text-violet-700 ring-violet-100 shadow-[0_4px_14px_rgba(139,92,246,0.05)]",
    amber:
      "bg-amber-50/95 text-amber-700 ring-amber-100 shadow-[0_4px_14px_rgba(245,158,11,0.05)]",
    slate:
      "bg-slate-100/95 text-slate-600 ring-slate-200 shadow-[0_4px_14px_rgba(100,116,139,0.05)]",
  };

  return isActive ? activeMap[tone] : idleMap[tone];
}

function getBookingToneClasses(tone: CustomerScenario["bookingTone"]) {
  const toneMap = {
    amber: "text-amber-700",
    emerald: "text-emerald-700",
    slate: "text-slate-700",
  };

  return toneMap[tone];
}

function DataRow({
  label,
  value,
  valueClassName = "text-slate-700",
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 py-2.5 last:border-b-0">
      <span className="text-sm text-slate-400">{label}</span>
      <span className={`text-sm font-medium ${valueClassName}`}>{value}</span>
    </div>
  );
}

export default function SegmentTagCloud() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = useMemo(() => scenarios[scenarioIndex], [scenarioIndex]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setScenarioIndex((prev) => (prev + 1) % scenarios.length);
    }, AUTO_PLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="relative mx-auto w-full max-w-[620px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[500px] md:h-[540px]">
        {/* 背景柔光 */}
        <div className="pointer-events-none absolute left-1/2 top-[44%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/22 blur-3xl" />
        <div className="pointer-events-none absolute left-[48%] top-[58%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/16 blur-3xl" />

        {/* 外圍 tags，全部避開中央資料區 */}
        {tagCloud.map((tag) => {
          const isActive = current.activeTags.includes(tag.label);

          return (
            <motion.div
              key={tag.label}
              className="absolute z-20"
              style={{ left: tag.x, top: tag.y }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: isActive ? 1 : 0.84,
                scale: isActive ? 1.06 : 1,
                x: tag.driftX,
                y: tag.driftY,
              }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                x: {
                  duration: tag.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: tag.duration + 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div
                className={[
                  "rounded-full ring-1 backdrop-blur-sm transition-all duration-300",
                  tag.size === "primary"
                    ? "px-4 py-2 text-sm font-medium"
                    : "px-3 py-1.5 text-xs font-medium",
                  getTagToneClasses(tag.tone, isActive),
                ].join(" ")}
              >
                {tag.label}
              </div>
            </motion.div>
          );
        })}

        {/* 中央資料區 */}
        <motion.div
          key={`summary-${current.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute left-1/2 top-[53%] z-10 w-[310px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="text-center">
            <div className="mt-1 text-4xl font-semibold tracking-tight text-slate-900">
              {current.name}
            </div>
          </div>

          <div className="mt-5 rounded-[22px] bg-slate-100/96 px-5 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
            <DataRow label="療程" value={current.treatment} />
            <DataRow label="最近回診" value={current.lastVisit} />
            <DataRow
              label="預約狀態"
              value={current.bookingStatus}
              valueClassName={getBookingToneClasses(current.bookingTone)}
            />
          </div>
        </motion.div>

        {/* 底部分群摘要 */}
        <motion.div
          key={`segment-${current.id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="absolute bottom-[3%] left-1/2 w-full max-w-[500px] -translate-x-1/2"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-500">
            <span className="text-center font-medium text-slate-600">
              {current.segmentSummary}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
