import Link from "next/link";
import { getLandingContent } from "@/content/getLandingContent";
import type { Locale } from "./types";

const EMAIL = "avenra.platform@gmail.com";
const BUSINESS_HOURS_ZH = "週一至週五 10:00 – 18:00";

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  const { footer } = getLandingContent(locale);
  const otherHref = locale === "zh" ? "/en" : "/";

  return (
    <footer className="border-t border-slate-200 bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10">
          {/* Top: brand + description + contact */}
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-base font-semibold tracking-tight text-slate-900">
                Avenra｜診所營運管理系統
              </p>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  Avenra 是一套為診所與醫療機構設計的營運管理系統，致力於提升預約效率、優化客戶管理流程，並降低營運中的人為錯誤。
                </p>
                <p>
                  透過整合排程、CRM 與數據分析，Avenra 協助團隊更有效率地管理每日營運，提升回診率與整體營運表現，讓經營者能專注於服務品質與長期成長。
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-2 text-sm text-slate-600">
                <p className="font-medium text-slate-900">聯絡資訊</p>
                <p>聯絡信箱：{EMAIL}</p>
                <p>服務時間：{BUSINESS_HOURS_ZH}</p>
              </div>
            </div>
          </div>

          {/* Bottom: legal + copyright */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                <Link href="/privacy" className="transition hover:text-slate-700">
                  隱私權政策
                </Link>
                <Link href="/terms" className="transition hover:text-slate-700">
                  使用條款
                </Link>
                <Link href="/blog" className="transition hover:text-slate-700">
                  知識專欄
                </Link>
              </div>

              <div className="flex items-center justify-between gap-6">
                <p className="text-xs text-slate-500">© 2026 Avenra. All rights reserved.</p>
                <Link
                  href={otherHref}
                  className="text-xs font-medium text-slate-500 transition hover:text-slate-700"
                >
                  {footer.langLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
