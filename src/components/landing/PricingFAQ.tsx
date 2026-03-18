"use client";

import Link from "next/link";
import { useState } from "react";

const ITEMS = [
  {
    q: "導入是否需要更換原有流程？",
    a: "不需要，我們會依你現有流程協助設定，不需中斷既有營運即可導入。如果你不確定目前流程是否適合導入，我們可以先幫你評估與建議。",
  },
  {
    q: "是否提供協助設定？",
    a: "會，我們會依診所實際需求協助設定，並提供初期導入支援。",
  },
  {
    q: "是否適合多分店或多人排班？",
    a: "可以，系統可依規模與角色權限彈性配置，支援多分店與多人排班需求。",
  },
];

function FaqItem({ item, isOpen, onToggle }: { item: typeof ITEMS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#E5E7EB] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors duration-150 hover:bg-[#F9FAFB]"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-semibold text-slate-900">{item.q}</span>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-lg font-medium text-slate-400" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="pb-5 text-sm font-normal leading-relaxed text-slate-600">
          {item.a}
        </p>
      )}
    </div>
  );
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-slate-200 bg-white px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-[#E5E7EB] bg-slate-50/50 px-6 py-8 text-center sm:px-8 sm:py-10">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            不確定哪個方案適合？
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            我們可以根據你的診所規模與需求，
            <br />
            協助你評估最適合的系統配置
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="site-btn-transition inline-flex rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
            >
              預約 Demo
            </Link>
          </div>
        </div>

        <h2 className="mt-16 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          導入與使用常見問題
        </h2>
        <p className="mx-auto mt-4 text-center text-sm text-slate-600 sm:text-base">
          在導入前，大多數診所會關心這些問題
        </p>
        <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          {ITEMS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
