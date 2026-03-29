"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { Locale } from "./types";

type Props = { locale: Locale };

const PAIN_POINTS = [
  {
    title: "回診追蹤容易遺漏",
    description:
      "回診與追蹤靠人工記錄，容易漏掉高潛力客戶與後續安排。",
    accentClass: "bg-rose-50 text-rose-600 ring-1 ring-rose-100",
  },
  {
    title: "顧客資料分散",
    description:
      "資料散落在 LINE、Excel、紙本與不同對話中，查找與交接效率很低。",
    accentClass: "bg-rose-50 text-rose-600 ring-1 ring-rose-100",
  },
  {
    title: "排班與預約容易混亂",
    description:
      "臨時異動、醫師時段調整與櫃台安排彼此牽動，現場很容易失序。",
    accentClass: "bg-rose-50 text-rose-600 ring-1 ring-rose-100",
  },
  {
    title: "每天忙很多，卻看不清整體",
    description:
      "花很多時間處理溝通與瑣事，但很難快速掌握營運現況與瓶頸。",
    accentClass: "bg-rose-50 text-rose-600 ring-1 ring-rose-100",
  },
] as const;

const SOLUTIONS = [
  {
    title: "預約與班表同步管理",
    description: "減少人工協調與時段衝突，讓現場安排更穩定。",
  },
  {
    title: "顧客資料集中整理",
    description: "預約、消費、標記與回診紀錄集中管理，不再分散查找。",
  },
  {
    title: "回診提醒與名單追蹤",
    description: "讓該追的人被看見，降低遺漏與流失。",
  },
  {
    title: "營運數據更清楚",
    description:
      "主管可快速掌握每日預約、回診與流程瓶頸，決策更有效率。",
  },
] as const;

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sectionContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export function Hero({ locale: _locale }: Props) {
  return (
    <>
      <section className="relative overflow-hidden bg-white px-4 pt-24 pb-10 sm:px-6 sm:pt-24 sm:pb-10 lg:px-8 lg:pt-24 lg:pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-20 lg:grid-cols-[9fr_11fr] lg:items-start lg:gap-24">
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="show"
              className="space-y-5 lg:pt-8"
            >
              <motion.div variants={fadeUpItem} className="space-y-3">
                <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                  診所營運管理系統
                </div>
                <h1 className="max-w-xl text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-5xl lg:leading-[1.2]">
                  讓診所不再漏掉任何一位回診客
                </h1>
              </motion.div>

              <motion.p
                variants={fadeUpItem}
                className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed"
              >
                Avenra 整合預約、顧客資料、排班與回診提醒，減少人工追蹤與資訊分散，讓櫃台更輕鬆，營運更穩定。
              </motion.p>

              <motion.p
                variants={fadeUpItem}
                className="max-w-xl text-sm leading-relaxed text-slate-500"
              >
                適用醫美、牙醫與一般診所，支援預約、顧客追蹤與班表協作。
              </motion.p>

              <motion.div variants={fadeUpItem} className="flex flex-wrap gap-3 pt-0.5">
                <Link
                  href="/contact"
                  className="site-btn-transition site-cta-btn cta-primary inline-flex rounded-xl bg-teal-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
                >
                  免費預約 Demo
                </Link>
                <Link
                  href="/product"
                  className="site-btn-transition site-cta-btn inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  了解如何導入
                </Link>
              </motion.div>
            </motion.div>

            <div className="relative mt-4 flex items-end justify-center lg:pl-6">
              <div className="relative w-full max-w-[1100px] min-h-[340px] sm:min-h-[420px]">
                <Image
                  src="/images/hero/avenra-schedule-laptop.png"
                  alt="Avenra 預約排程介面"
                  fill
                  className="block -mb-10 object-contain object-top scale-[1.14] translate-y-6 lg:translate-y-8"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainer}
        className="bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUpItem} className="max-w-xl">
            <p className="text-sm font-medium tracking-wide text-teal-700">
              很多診所每天都在處理這些事
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              你現在的營運問題，不該再靠人工硬撐
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              當預約、回診、資料與排班都依賴人工協調，混亂與遺漏就會變成日常。
            </p>
          </motion.div>

          <motion.div
            variants={sectionContainer}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {PAIN_POINTS.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUpItem}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.accentClass}`}
                  >
                    <AlertTriangle className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainer}
        className="bg-teal-50 py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUpItem} className="max-w-xl">
            <p className="text-sm font-medium tracking-wide text-teal-700">
              Avenra 如何幫你整理流程
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-[2.6rem] sm:leading-tight">
              Avenra 幫你把診所流程整合成一套可執行系統
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              把原本分散、依賴人工記憶的流程整合起來，讓團隊每天更有秩序地運作。
            </p>
            <Link
              href="/demo"
              className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:underline"
            >
              查看實際操作畫面 →
            </Link>
          </motion.div>

          <motion.div
            variants={sectionContainer}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SOLUTIONS.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUpItem}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-[18px] w-[18px]" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="relative bg-teal-50">
        <div className="relative overflow-hidden rounded-t-[80px] md:rounded-t-[110px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/section/cellphone-notification.png"
            alt="Avenra 自動通知"
            className="block w-full object-cover object-center"
          />

          <div className="absolute inset-x-0 bottom-10 z-20 md:bottom-12">
            <div className="mx-auto max-w-3xl px-4 text-center">
              <p className="text-sm font-medium text-teal-700">自動化營運</p>

              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                回診提醒，自動發送，不再靠人工追蹤
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                系統會依據預約與顧客紀錄，自動發送回診提醒通知，
                減少客服逐一聯繫的時間與壓力，讓團隊專注在更重要的事情。
              </p>

              <a
                href="/demo"
                className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:underline"
              >
                查看完整 Demo →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
