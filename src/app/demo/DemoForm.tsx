"use client";

import { useState } from "react";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-6 text-center">
        <p className="font-medium text-teal-800">感謝您的填寫</p>
        <p className="mt-1 text-sm text-teal-700">
          我們會盡快透過您提供的聯絡方式與您聯繫。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="clinic-name" className="block text-sm font-medium text-slate-700">
          診所名稱
        </label>
        <input
          id="clinic-name"
          type="text"
          name="clinicName"
          className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="請輸入診所名稱"
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
          聯絡人姓名
        </label>
        <input
          id="contact-name"
          type="text"
          name="contactName"
          className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="請輸入聯絡人姓名"
        />
      </div>

      <div>
        <label htmlFor="line" className="block text-sm font-medium text-slate-700">
          LINE
        </label>
        <input
          id="line"
          type="text"
          name="line"
          className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="LINE ID 或手機號碼"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          電話
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="請輸入聯絡電話"
        />
      </div>

      <div>
        <label htmlFor="branch-count" className="block text-sm font-medium text-slate-700">
          分店數
        </label>
        <select
          id="branch-count"
          name="branchCount"
          className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
        >
          <option value="">請選擇</option>
          <option value="1">1 間</option>
          <option value="2">2 間</option>
          <option value="3">3 間</option>
          <option value="4-5">4–5 間</option>
          <option value="6+">6 間以上</option>
        </select>
      </div>

      <div>
        <label htmlFor="interests" className="block text-sm font-medium text-slate-700">
          想了解的功能
        </label>
        <textarea
          id="interests"
          name="interests"
          rows={4}
          className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          placeholder="例如：預約排程、顧客管理、報表分析、LINE 整合…"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-teal-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-teal-700 sm:w-auto sm:px-8"
        >
          送出
        </button>
      </div>
    </form>
  );
}
