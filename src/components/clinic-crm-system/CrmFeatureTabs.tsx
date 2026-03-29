"use client";

import { useState } from "react";

type TabKey = "customer" | "records" | "reminders";

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "customer", label: "顧客資料" },
  { key: "records", label: "療程紀錄" },
  { key: "reminders", label: "回診提醒" },
];

const content: Record<
  TabKey,
  { title: string; paragraph: string; bullets: [string, string, string]; demoTitle: string; demoItems: string[] }
> = {
  customer: {
    title: "顧客資料管理",
    paragraph: "集中顧客基本資料、聯絡紀錄與互動狀態，讓查詢與交接更一致。",
    bullets: ["顧客資料集中管理", "查詢與更新即時同步", "跨角色交接更清楚"],
    demoTitle: "顧客資料",
    demoItems: ["姓名、聯絡方式與來源", "最近互動紀錄與備註", "分群標籤與狀態標記"],
  },
  records: {
    title: "療程與消費紀錄",
    paragraph: "療程、收費與回訪紀錄集中在同一時間軸，後續追蹤不再中斷。",
    bullets: ["療程歷程完整保存", "收費與狀態同步更新", "回訪節點清楚可追蹤"],
    demoTitle: "療程紀錄",
    demoItems: ["初診與療程方案", "每次療程執行摘要", "消費與回診節點紀錄"],
  },
  reminders: {
    title: "回診提醒流程",
    paragraph: "依療程週期設定提醒節奏，讓顧客在正確時間收到正確訊息。",
    bullets: ["回診提醒自動觸發", "術後關懷節奏可設定", "提醒結果可追蹤與調整"],
    demoTitle: "回診提醒",
    demoItems: ["療程後第 7 天關懷", "第 30 天回診提醒", "未回覆名單自動標記"],
  },
};

export default function CrmFeatureTabs() {
  const [active, setActive] = useState<TabKey>("customer");
  const current = content[active];

  return (
    <section className="border-y border-slate-200 bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                active === tab.key
                  ? "bg-teal-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{current.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{current.paragraph}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {current.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold text-[#14827f]">{current.demoTitle}</p>
            <div className="mt-4 space-y-3">
              {current.demoItems.map((item) => (
                <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
