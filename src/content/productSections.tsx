import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  CalendarClock,
  UserPlus,
  CalendarCheck,
  Users,
  Tag,
  FileText,
  Image as ImageIcon,
  MessageCircle,
  Bell,
  UserX,
  Zap,
  BarChart3,
  TrendingUp,
  DollarSign,
  LineChart,
} from "lucide-react";

export type ProductSectionCard = {
  title: string;
  description: string;
  hint?: string;
  icon: LucideIcon;
};

export type ProductSection = {
  title: string;
  punchline: string;
  description?: string;
  cards: ProductSectionCard[];
};

export const SECTION_SCHEDULE: ProductSection = {
  title: "讓排程更清楚，而不是更混亂",
  punchline: "點一下就知道誰有空、何時可約。",
  description: "即時掌握醫師時段、預約狀態與空檔，減少重複確認與溝通成本",
  cards: [
    { title: "多醫師排程", description: "多位醫師班表與時段一目了然，避免時段衝突。", hint: "點選醫師即可切換檢視班表。", icon: Calendar },
    { title: "即時時段管理", description: "即時掌握可約與已約時段，減少重複確認。", hint: "點擊時段即可新增或查看預約。", icon: CalendarClock },
    { title: "快速新增預約", description: "一鍵建立預約，櫃檯與醫師同步更新。", hint: "選擇時段後輸入顧客，一鍵完成。", icon: UserPlus },
    { title: "班表與不可約設定", description: "設定休息與不可約時段，避免預約衝突。", hint: "拖曳或點選即可標記不可約時段。", icon: CalendarCheck },
  ],
};

export const SECTION_CUSTOMERS: ProductSection = {
  title: "讓顧客資料真正被利用",
  punchline: "從預約到回診，同一份資料一路用到底。",
  description: "整合顧客資料、療程紀錄與回診資訊，避免分散於不同工具與紙本",
  cards: [
    { title: "顧客 CRM", description: "集中管理顧客基本資料與就診紀錄。", hint: "點進顧客即可查看完整歷程與備註。", icon: Users },
    { title: "客戶標籤與分群", description: "依標籤分群，精準管理與追蹤。", hint: "點選標籤即可篩出對應名單。", icon: Tag },
    { title: "療程紀錄", description: "記錄療程內容與歷程，方便查詢與交接。", hint: "每次療程後可直接在顧客頁新增紀錄。", icon: FileText },
    { title: "Before / After 管理", description: "療程前後對照與案例歸檔。", hint: "上傳照片後可並排對照與歸檔。", icon: ImageIcon },
  ],
};

export const SECTION_AUTOMATION: ProductSection = {
  title: "減少人工追蹤，讓流程自動運作",
  punchline: "設定一次，後續由系統幫你提醒與追蹤。",
  cards: [
    { title: "LINE 通知與提醒", description: "預約與回診透過 LINE 自動通知。", hint: "預約成立後自動發送，無需手動轉傳。", icon: MessageCircle },
    { title: "回診提醒", description: "依療程設定自動提醒回診。", hint: "依療程類型設定提醒天數即可。", icon: Bell },
    { title: "No-show 降低機制", description: "提醒與追蹤降低未到診比例。", hint: "系統依設定自動發送前一日提醒。", icon: UserX },
    { title: "自動訊息流程", description: "設定流程後由系統自動發送。", hint: "設定觸發條件與訊息內容後自動執行。", icon: Zap },
  ],
};

export const SECTION_ANALYTICS: ProductSection = {
  title: "讓決策有數據，而不是感覺",
  punchline: "關鍵數字即時更新，不用再等月底報表。",
  cards: [
    { title: "預約分析", description: "預約量、時段利用率一目了然。", hint: "切換日期範圍即可查看不同區間。", icon: BarChart3 },
    { title: "回診率", description: "追蹤回診表現，掌握顧客黏著度。", hint: "點進指標可下鑽查看明細。", icon: TrendingUp },
    { title: "客單價", description: "掌握療程與消費結構。", hint: "依療程或時段篩選即可比較。", icon: DollarSign },
    { title: "營收趨勢", description: "營收與關鍵指標趨勢圖。", hint: "拖曳時間軸可縮放檢視。", icon: LineChart },
  ],
};

export const PRODUCT_SECTIONS = [
  { id: "schedule", ...SECTION_SCHEDULE },
  { id: "customers", ...SECTION_CUSTOMERS },
  { id: "automation", ...SECTION_AUTOMATION },
  { id: "analytics", ...SECTION_ANALYTICS },
] as const;
