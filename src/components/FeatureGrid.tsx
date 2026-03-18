// components/FeatureGrid.tsx

import {
  Calendar,
  Users,
  FileText,
  Image as ImageIcon,
  MessageCircle,
  BarChart,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

type FeatureItem = {
  title: string;
  description: string;
  icon: typeof Calendar;
};

const features: FeatureItem[] = [
  {
    title: "智慧預約與排程管理",
    description: "醫師與診間排班、預約流程與衝突檢查，一站完成。",
    icon: Calendar,
  },
  {
    title: "顧客 CRM 與療程追蹤",
    description: "顧客檔案、療程紀錄與回診提醒，完整掌握。",
    icon: Users,
  },
  {
    title: "電子化病例與療程紀錄",
    description: "病例數據電子化，結構化管理更清晰。",
    icon: FileText,
  },
  {
    title: "Before / After 案例管理",
    description: "療程前後照片與案例歸檔，清楚呈現效果。",
    icon: ImageIcon,
  },
  {
    title: "LINE 顧客追蹤與自動化",
    description: "預約提醒、回訪通知與分群行銷自動化。",
    icon: MessageCircle,
  },
  {
    title: "營運數據分析",
    description: "即時掌握預約、營收與診所經營狀況。",
    icon: BarChart,
  },
];

type Props = {
  className?: string;
  items?: FeatureItem[];
  sectionTitle?: string;
  sectionDescription?: string;
};

export default function FeatureGrid({
  className,
  items,
  sectionTitle = "核心功能",
  sectionDescription,
}: Props) {
  const data = items ?? features;

  return (
    <section className={`border-t border-slate-200 py-20 sm:py-24 lg:py-28 ${className ?? "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {sectionTitle}
            </h2>
            {sectionDescription && (
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
                {sectionDescription}
              </p>
            )}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {data.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="site-card-hover group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100">
                    <Icon className="h-6 w-6 text-teal-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
