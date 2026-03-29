"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, PanInfo } from "framer-motion";

type FlowItem = {
  id: number;
  name: string;
  segment: string;
  condition: string;
  channel: string;
  status: string;
  sendTime: string;
  audience: string;
  message: string;
};

const flows: FlowItem[] = [
  {
    id: 1,
    name: "術後關懷",
    segment: "術後第 3 天 / 雷射療程",
    condition: "完成療程後第 3 天",
    channel: "LINE 自動推播",
    status: "執行中",
    sendTime: "今天 18:30",
    audience: "48 位",
    message:
      "您好，若這幾天有任何不適或想確認恢復情況，可直接回覆訊息由診所協助安排。",
  },
  {
    id: 2,
    name: "回診提醒",
    segment: "30 天未回診 / 音波拉提",
    condition: "30 天內未再次預約",
    channel: "LINE 自動提醒",
    status: "已啟用",
    sendTime: "明天 10:00",
    audience: "126 位",
    message:
      "您距離上次療程已滿 30 天，現在可安排回診評估，本週提供限定時段。",
  },
  {
    id: 3,
    name: "問卷邀請",
    segment: "已完成療程 / 首次來診",
    condition: "療程完成後 1 天",
    channel: "LINE 問卷邀請",
    status: "已排程",
    sendTime: "後天 14:00",
    audience: "92 位",
    message:
      "感謝您本次來診，誠摯邀請您花 1 分鐘填寫服務回饋問卷，幫助我們持續優化療程體驗。",
  },
  {
    id: 4,
    name: "活動通知",
    segment: "高互動客群 / 保養療程",
    condition: "近 60 天曾點擊活動訊息",
    channel: "LINE 活動推播",
    status: "待發送",
    sendTime: "週五 19:00",
    audience: "214 位",
    message:
      "本週開放限定時段與保養方案，若您希望安排回診，可直接回覆由專人協助預約。",
  },
];

const AUTO_PLAY_MS = 3000;
const SWIPE_THRESHOLD = 55;

function getIndex(index: number) {
  return (index + flows.length) % flows.length;
}

function getStatusTone(status: string) {
  if (status === "執行中") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }
  if (status === "已啟用") {
    return "border-cyan-200 bg-cyan-50 text-cyan-700";
  }
  if (status === "已排程") {
    return "border-violet-200 bg-violet-50 text-violet-700";
  }
  return "border-amber-200 bg-amber-50 text-amber-700";
}

export default function TemplatePreviewStage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeFlow = useMemo(() => flows[activeIndex], [activeIndex]);

  const goToIndex = (nextIndex: number) => {
    setActiveIndex(getIndex(nextIndex));
  };

  const goToNext = () => {
    setActiveIndex((prev) => getIndex(prev + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => getIndex(prev - 1));
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      goToNext();
    }, AUTO_PLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleCardDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x <= -SWIPE_THRESHOLD) {
      goToNext();
      return;
    }

    if (info.offset.x >= SWIPE_THRESHOLD) {
      goToPrev();
    }
  };

  return (
    <div
      className="rounded-[32px] border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-5 lg:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_minmax(0,1fr)_250px] lg:gap-5">
        <aside className="rounded-2xl border border-slate-200/90 bg-white/95 p-3">
          <p className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Automation Flow
          </p>
          <div className="mt-3 space-y-2">
            {flows.map((flow, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={flow.id}
                  type="button"
                  onClick={() => goToIndex(index)}
                  className={`w-full rounded-xl border px-3 py-3 text-left transition-all duration-250 ${
                    isActive
                      ? "border-emerald-200 bg-emerald-50/90 shadow-sm"
                      : "border-transparent bg-slate-50/60 hover:border-slate-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-emerald-500" : "bg-slate-300"
                      }`}
                    />
                    <p
                      className={`text-sm font-semibold ${
                        isActive ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {flow.name}
                    </p>
                  </div>
                  <p
                    className={`mt-1 text-xs ${
                      isActive ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {flow.segment}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:p-6">
          <motion.div
            key={activeFlow.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={handleCardDragEnd}
            whileTap={{ cursor: "grabbing" }}
            initial={{ opacity: 0.78, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="cursor-grab"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Active Template
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                  {activeFlow.name}
                </h3>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${getStatusTone(
                  activeFlow.status
                )}`}
              >
                {activeFlow.status}
              </span>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200/90 bg-slate-50/90 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
              <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                {activeFlow.message}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-3">
                <p className="text-[11px] text-slate-400">發送時間</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {activeFlow.sendTime}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-3">
                <p className="text-[11px] text-slate-400">預計對象</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {activeFlow.audience}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
            {flows.map((flow, index) => (
              <button
                key={flow.id}
                type="button"
                aria-label={`切換到 ${flow.name}`}
                onClick={() => goToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-slate-900" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200/90 bg-white/96 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            規則摘要
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-3">
              <p className="text-[11px] text-slate-400">觸發條件</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {activeFlow.condition}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-3">
              <p className="text-[11px] text-slate-400">客群</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {activeFlow.segment}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-3">
              <p className="text-[11px] text-slate-400">發送通道</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {activeFlow.channel}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {flows.map((flow, index) => (
              <button
                key={flow.id}
                type="button"
                aria-label={`切換到 ${flow.name}`}
                onClick={() => goToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-slate-800" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
