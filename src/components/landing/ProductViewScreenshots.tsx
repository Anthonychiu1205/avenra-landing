import { Fragment } from "react";

const PRODUCT_VIEWS = [
  {
    title: "預約排程",
    description: "視覺化排程系統，快速安排醫師與療程時間，一目了然掌握當日預約。",
  },
  {
    title: "顧客 CRM",
    description: "管理顧客資料、療程紀錄與回訪追蹤，完整顧客檔案集中查閱。",
  },
  {
    title: "營運分析",
    description: "透過儀表板掌握診所營收與預約狀況，支援即時決策。",
  },
] as const;

function MockScheduling() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="h-6 flex-1 rounded bg-slate-100" />
        <div className="h-6 w-14 rounded bg-teal-100" />
      </div>
      <div className="grid grid-cols-4 gap-px rounded-md border border-slate-200 bg-slate-100 text-[10px]">
        <div className="rounded-tl bg-slate-50 px-2 py-1.5 text-slate-500">時間</div>
        <div className="bg-slate-50 px-2 py-1.5 font-medium text-slate-700">王醫師</div>
        <div className="bg-slate-50 px-2 py-1.5 font-medium text-slate-700">李醫師</div>
        <div className="rounded-tr bg-slate-50 px-2 py-1.5 font-medium text-slate-700">陳醫師</div>
        {["09:00", "10:00", "11:00", "14:00"].map((time) => (
          <Fragment key={time}>
            <div className="bg-white px-2 py-1 text-slate-500">{time}</div>
            <div className="bg-white p-1">
              <div className="rounded bg-slate-50 px-1.5 py-0.5 text-slate-400">—</div>
            </div>
            <div className="bg-white p-1">
              <div className="rounded bg-teal-100 px-1.5 py-0.5 font-medium text-teal-800">預約</div>
            </div>
            <div className="bg-white p-1">
              <div className="rounded bg-slate-50 px-1.5 py-0.5 text-slate-400">—</div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function MockCRM() {
  return (
    <div className="space-y-2">
      <div className="h-6 w-24 rounded bg-slate-100" />
      <div className="space-y-1.5">
        {["林小姐 · 10:30 諮詢", "陳先生 · 11:00 療程", "張小姐 · 14:00 回診"].map((row, i) => (
          <div
            key={row}
            className={`flex items-center gap-2 rounded-lg border p-2 ${
              i === 1 ? "border-teal-200 bg-teal-50/80" : "border-slate-100 bg-slate-50/50"
            }`}
          >
            <div className="h-8 w-8 shrink-0 rounded-full bg-slate-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-slate-800">{row}</p>
              <p className="text-[10px] text-slate-500">顧客資料 · 療程紀錄</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockAnalytics() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
          <p className="text-[10px] text-slate-500">今日預約</p>
          <p className="text-sm font-bold text-teal-600">12</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
          <p className="text-[10px] text-slate-500">已完成</p>
          <p className="text-sm font-bold text-slate-700">5</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
          <p className="text-[10px] text-slate-500">待診</p>
          <p className="text-sm font-bold text-slate-700">7</p>
        </div>
      </div>
      <div className="flex items-end gap-1 rounded-lg border border-slate-200 bg-slate-50/50 p-2">
        {[40, 65, 45, 80, 55, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded bg-teal-200"
            style={{ height: `${h}%`, minHeight: 8 }}
          />
        ))}
      </div>
    </div>
  );
}

const MOCKS = [MockScheduling, MockCRM, MockAnalytics] as const;

export function ProductViewScreenshots() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCT_VIEWS.map(({ title, description }, i) => {
        const Mock = MOCKS[i];
        return (
          <div
            key={title}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
            <div className="p-4">
              <Mock />
            </div>
            <div className="border-t border-slate-100 bg-slate-50/80 px-4 py-3">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
