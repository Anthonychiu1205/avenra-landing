import { Calendar, Users, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const CARDS = [
  {
    title: "排程更清楚",
    description:
      "讓預約狀況一目了然，減少衝突與溝通成本，櫃檯與醫師都能即時掌握。",
    icon: Calendar,
  },
  {
    title: "客戶資料更集中",
    description:
      "整合客戶資料、療程紀錄與回診資訊，不再分散於不同工具與紙本。",
    icon: Users,
  },
  {
    title: "營運決策更直覺",
    description:
      "透過數據掌握預約、回診與營收狀況，讓營運決策更有依據。",
    icon: BarChart3,
  },
];

export function CoreValueSection() {
  return (
    <section className="relative overflow-hidden rounded-t-[64px] bg-[#f7f7f7] -mt-12 px-4 pt-24 pb-20 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            診所日常最重要的三件事
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div className="site-card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100">
                    <Icon className="h-6 w-6 text-teal-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
