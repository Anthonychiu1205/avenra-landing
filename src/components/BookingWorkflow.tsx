"use client";

import { useEffect, useState } from "react";

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "建立預約",
    description: "櫃檯可直接新增預約，或依顧客需求快速安排時段。",
  },
  {
    number: "02",
    title: "檢查可用時段",
    description: "系統同步查看醫師排班與空檔，避免重複預約與人工確認。",
  },
  {
    number: "03",
    title: "同步更新排程",
    description: "預約建立後即時寫入排程畫面，資訊保持一致。",
  },
  {
    number: "04",
    title: "提醒與回診追蹤",
    description: "延伸提醒與回診安排，讓流程不只停在預約當下。",
  },
];

export default function BookingWorkflow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-slate-900 mb-10">
        從建立預約到後續追蹤，流程一次串起來
      </h3>

      <div className="relative">
        <div className="pointer-events-none absolute inset-x-4 top-[28px] hidden h-px bg-slate-200/90 md:block" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, index) => {
            const isActive = activeIndex === index;
            return (
            <div
              key={step.number}
              className={`group relative rounded-2xl border bg-white p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg ${
                isActive
                  ? "-translate-y-1 border-[#00a29a]/40 shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              <div
                className={`mb-2 text-sm ${
                  isActive ? "text-teal-700" : "text-slate-400"
                }`}
              >
                {step.number}
              </div>
              <div
                className={`mb-2 text-lg font-semibold ${
                  isActive ? "text-slate-950" : "text-slate-900"
                }`}
              >
                {step.title}
              </div>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
}
