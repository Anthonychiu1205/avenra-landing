import { ScrollReveal } from "@/components/ScrollReveal";

const STEPS = [
  {
    title: "理解診所內部流程",
    description:
      "盤點目前的預約、櫃檯與回診流程，找出效率瓶頸與問題點。",
  },
  {
    title: "討論導入與配置",
    description:
      "根據診所運作方式，設計適合的排程與客戶管理流程。",
  },
  {
    title: "建立與配置系統",
    description:
      "完成帳號、班表與設定，讓團隊能快速上手使用。",
  },
  {
    title: "上線與持續優化",
    description:
      "依實際使用情況調整流程，讓系統真正融入日常營運。",
  },
];

export function ImplementationSteps() {
  return (
    <section className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            從導入到上線，流程清楚可控
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-slate-600">
            無需改變原有流程，即可逐步導入與調整
          </p>
        </ScrollReveal>
        <div className="mt-12 space-y-0">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 80}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-5 top-12 bottom-0 w-px bg-slate-200"
                    aria-hidden
                  />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-teal-500 bg-white text-sm font-bold text-teal-600">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
