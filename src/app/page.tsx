import type { Metadata } from "next";
import {
  Navbar,
  Hero,
  KpiSection,
  CoreValueSection,
  ImplementationSteps,
  FinalCTA,
  Footer,
} from "@/components/landing";
import FeatureGrid from "@/components/FeatureGrid";
import {
  Calendar,
  Users,
  FileText,
  Image as ImageIcon,
  MessageCircle,
  BarChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "診所 CRM 與預約管理系統｜Avenra",
  description:
    "Avenra 提供診所 CRM 與預約管理系統，整合排班、回診追蹤與營運數據，幫助醫美診所提升效率與營收。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "診所 CRM 與預約管理系統｜Avenra",
    description:
      "Avenra 提供診所 CRM 與預約管理系統，整合排班、回診追蹤與營運數據，幫助醫美診所提升效率與營收。",
    url: "/",
    type: "website",
    images: [{ url: "/logo/avenra-logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "診所 CRM 與預約管理系統｜Avenra",
    description:
      "Avenra 提供診所 CRM 與預約管理系統，整合排班、回診追蹤與營運數據，幫助醫美診所提升效率與營收。",
    images: ["/logo/avenra-logo.svg"],
  },
};

const HOME_FEATURES = [
  {
    title: "智慧預約排程",
    description: "清楚呈現每日時段與預約狀態，快速建立與調整預約。",
    icon: Calendar,
  },
  {
    title: "顧客 CRM 與標籤",
    description: "集中管理客戶資料，透過標籤與分群提升管理效率。",
    icon: Users,
  },
  {
    title: "電子病歷與療程紀錄",
    description: "記錄療程與診療內容，讓資訊更完整且可追蹤。",
    icon: FileText,
  },
  {
    title: "Before / After 案例管理",
    description: "整理療程成果，方便內部管理與後續應用。",
    icon: ImageIcon,
  },
  {
    title: "LINE 顧客追蹤與自動化",
    description: "整合通知與提醒流程，減少人工聯繫成本。",
    icon: MessageCircle,
  },
  {
    title: "營運數據分析",
    description: "掌握預約、回診與營運表現，協助持續優化。",
    icon: BarChart,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />
      <main>
        <Hero locale="zh" />
        <KpiSection />
        <CoreValueSection />
        <FeatureGrid
          className="bg-gray-50"
          sectionTitle="一個平台整合診所關鍵流程"
          sectionDescription="Avenra 整合診所日常營運所需功能，讓資訊集中、流程清楚，減少跨工具操作的負擔。"
          items={HOME_FEATURES}
        />
        <ImplementationSteps />
        <FinalCTA locale="zh" />
        <Footer locale="zh" />
      </main>
    </div>
  );
}
