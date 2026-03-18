export type BlogPostSection =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "hr" };

export type BlogPost = {
  slug: string;
  title: string;
  description: string; // used as excerpt + meta description by default
  dateISO: string;
  meta?: { title: string; description: string };
  content: BlogPostSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "medical-booking-management",
    title: "醫美診所如何避免預約重複與漏單？3 個關鍵改善方法",
    description:
      "整理 3 個改善預約流程的關鍵做法，協助診所降低重複預約、時段衝突與漏單帶來的營運成本。",
    dateISO: "2026-03-18",
    content: [
      {
        type: "p",
        text: "在多數醫美診所中，預約管理仍然依賴 LINE、電話與人工記錄。隨著顧客數增加，這樣的方式很容易出現預約重複、時段衝突與漏單問題，進一步影響診所營運效率與顧客體驗。",
      },
      {
        type: "p",
        text: "如果你的診所開始出現以下情況，代表預約流程已經需要調整。",
      },
      { type: "h2", text: "常見問題：為什麼預約會混亂？" },
      {
        type: "p",
        text: "1. 預約來源分散\n預約可能來自 LINE、電話、現場登記等不同管道，資訊沒有集中管理，櫃檯人員需要在多個地方確認，容易出錯。",
      },
      {
        type: "p",
        text: "2. 排程缺乏即時同步\n當醫師班表或療程時間有變動時，無法即時反映在所有預約上，導致時段重疊或衝突。",
      },
      {
        type: "p",
        text: "3. 人工記錄容易遺漏\n使用紙本或 Excel 記錄預約，當工作量增加時，很容易出現漏登或記錯時間的情況。",
      },
      { type: "h2", text: "改善方法一：集中所有預約入口" },
      {
        type: "p",
        text: "將 LINE、電話與現場預約統一整合到同一個系統中，讓所有預約資訊都能在同一個畫面查看。",
      },
      { type: "h2", text: "改善方法二：建立清楚的排程視覺化" },
      {
        type: "p",
        text: "透過可視化的排程系統，清楚呈現每日時段與預約狀態。",
      },
      { type: "h2", text: "改善方法三：加入提醒與追蹤機制" },
      {
        type: "p",
        text: "透過系統自動提醒顧客回診，並記錄每次療程與預約紀錄。",
      },
      { type: "h2", text: "結論：預約管理是營運核心" },
      {
        type: "p",
        text: "預約流程的混亂會直接影響顧客體驗與診所營運效率。",
      },
    ],
  },
  {
    slug: "line-booking-problems",
    title: "診所用 LINE 管理預約的 3 個問題，為什麼會越來越混亂？",
    description:
      "診所使用 LINE 管理預約，初期方便，但規模成長後容易出現漏單、重複預約與追蹤困難。了解更穩定的管理方式。",
    dateISO: "2026-03-18",
    meta: {
      title: "診所用 LINE 管理預約的 3 個問題｜Avenra",
      description:
        "診所使用 LINE 管理預約，初期方便，但規模成長後容易出現漏單、重複預約與追蹤困難。了解更穩定的管理方式。",
    },
    content: [
      {
        type: "p",
        text: "在許多診所中，LINE 是最常用的預約工具。操作簡單、顧客熟悉，看起來非常方便。",
      },
      {
        type: "p",
        text: "但當診所開始成長、預約量增加時，單靠 LINE 管理預約，往往會逐漸出現混亂。",
      },
      {
        type: "p",
        text: "如果你的診所開始出現回覆壓力增加、預約錯誤或漏單的情況，很可能已經遇到以下問題。",
      },
      { type: "h2", text: "問題一：對話紀錄難以管理與查找" },
      { type: "p", text: "LINE 的本質是聊天工具，而不是預約系統。" },
      {
        type: "p",
        text: "當顧客數增加後：",
      },
      {
        type: "ul",
        items: ["對話紀錄快速累積", "舊預約資訊難以回溯", "櫃檯需要花時間翻找訊息"],
      },
      { type: "p", text: "當同一位顧客多次預約時，很難快速掌握完整紀錄。" },
      { type: "h2", text: "問題二：無法即時掌握排程狀態" },
      { type: "p", text: "透過 LINE 接收預約後，仍需要人工記錄到 Excel 或其他工具。" },
      { type: "p", text: "這會導致：" },
      { type: "ul", items: ["時段是否已滿不清楚", "容易出現重複預約", "排班與預約不同步"] },
      { type: "p", text: "當多位員工同時處理預約時，錯誤率會明顯上升。" },
      { type: "h2", text: "問題三：缺乏顧客管理與回診追蹤" },
      { type: "p", text: "LINE 雖然可以聯絡顧客，但缺乏完整的 CRM 功能。" },
      { type: "p", text: "例如：" },
      { type: "ul", items: ["無法清楚記錄療程歷史", "無法有效分類顧客", "回診提醒需要人工處理"] },
      { type: "p", text: "這會讓診所錯失許多回診與再消費機會。" },
      { type: "h2", text: "為什麼一開始好用，後來卻變成負擔？" },
      { type: "p", text: "在診所規模較小時，LINE 足以應付基本需求。" },
      { type: "p", text: "但當：" },
      { type: "ul", items: ["預約量增加", "顧客數成長", "醫師與療程變多"] },
      { type: "p", text: "原本的「方便」，會逐漸變成「混亂來源」。" },
      { type: "h2", text: "更有效的做法是什麼？" },
      { type: "p", text: "將 LINE 保留作為「溝通工具」，\n但將預約、排程與顧客管理交由系統處理。" },
      { type: "p", text: "這樣可以：" },
      {
        type: "ul",
        items: ["即時掌握預約狀態", "減少人工錯誤", "建立完整顧客資料", "提升回診率與營運效率"],
      },
      { type: "h2", text: "結論：LINE 適合溝通，不適合管理" },
      {
        type: "p",
        text: "LINE 是很好的聯絡工具，但不適合承擔預約管理與營運流程。",
      },
      { type: "p", text: "當診所進入成長階段，建立系統化管理方式，會是更穩定的選擇。" },
      { type: "h2", text: "想了解更適合診所的管理方式？" },
      {
        type: "p",
        text: "如果你的診所也開始感覺 LINE 難以管理預約，可以了解 Avenra 如何整合預約、顧客資料與營運流程。\n\n👉 預約導入諮詢",
      },
    ],
  },
  {
    slug: "clinic-crm-guide",
    title: "診所 CRM 是什麼？適合哪些診所導入？",
    description: "了解 CRM 在診所中的角色，以及不同規模診所何時適合導入。",
    dateISO: "2026-03-18",
    meta: {
      title: "診所 CRM 是什麼？適合哪些診所導入｜Avenra",
      description:
        "診所 CRM 是什麼？什麼時候需要導入？了解 CRM 在預約管理、回診追蹤與營運優化中的實際應用。",
    },
    content: [
      {
        type: "p",
        text: "隨著診所規模成長，顧客數量與療程複雜度增加，單靠 LINE、Excel 或人工記錄，往往難以有效管理。",
      },
      { type: "p", text: "這時候，許多診所會開始接觸「CRM 系統」。" },
      { type: "p", text: "但 CRM 是什麼？是否真的有需要導入？" },
      { type: "p", text: "這篇文章將幫你快速理解。" },
      { type: "hr" },

      { type: "h2", text: "什麼是診所 CRM？" },
      {
        type: "p",
        text: "CRM（Customer Relationship Management）是用來管理顧客資料與互動紀錄的系統。",
      },
      { type: "p", text: "在診所情境中，通常包含：" },
      {
        type: "ul",
        items: ["顧客基本資料", "預約紀錄", "療程與診療紀錄", "回診追蹤", "標籤與分類"],
      },
      { type: "p", text: "透過 CRM，所有資訊可以集中管理，而不是分散在不同工具中。" },
      { type: "hr" },

      { type: "h2", text: "為什麼診所會開始需要 CRM？" },
      { type: "p", text: "當診所出現以下情況時，通常代表已經進入需要 CRM 的階段：" },
      {
        type: "ul",
        items: ["顧客數量明顯增加", "預約管理變複雜", "回診追蹤開始困難", "櫃檯工作負擔變重"],
      },
      { type: "p", text: "如果仍使用原本的方式管理，錯誤率與溝通成本會持續上升。" },
      { type: "hr" },

      { type: "h2", text: "哪些診所適合導入 CRM？" },
      { type: "p", text: "小型診所" },
      { type: "ul", items: ["預約開始變多", "顧客資料難以整理", "希望減少人工處理"] },
      { type: "p", text: "成長型診所" },
      { type: "ul", items: ["有多位醫師或療程", "預約與排班變複雜", "需要更有效率的流程"] },
      { type: "p", text: "多分店或大型診所" },
      { type: "ul", items: ["需要跨店管理", "權限與資料控管變重要", "需要即時掌握營運狀況"] },
      { type: "hr" },

      { type: "h2", text: "導入 CRM 可以帶來什麼改變？" },
      { type: "p", text: "導入 CRM 後，診所通常會有以下改善：" },
      {
        type: "ul",
        items: ["預約與排程更清楚", "顧客資料集中管理", "回診率提升", "人工錯誤減少", "營運決策更有依據"],
      },
      { type: "p", text: "這些改變會直接影響診所效率與營收。" },
      { type: "hr" },

      { type: "h2", text: "常見迷思：CRM 會不會很複雜？" },
      { type: "p", text: "許多診所會擔心：" },
      { type: "ul", items: ["系統難用", "導入成本高", "需要改變流程"] },
      {
        type: "p",
        text: "但實際上，多數系統都可以依診所現有流程調整，不需要一次全面改變。",
      },
      { type: "hr" },

      { type: "h2", text: "結論：CRM 是診所成長階段的重要工具" },
      {
        type: "p",
        text: "CRM 並不是一開始就必須導入，但當診所進入成長期，建立系統化管理方式，會讓營運更加穩定。",
      },
      { type: "hr" },

      { type: "h2", text: "想了解更適合診所的 CRM 解決方案？" },
      {
        type: "p",
        text: "如果你正在評估 CRM，或希望改善目前的預約與顧客管理流程，可以了解 Avenra 如何整合預約、顧客資料與營運流程。\n\n👉 預約導入諮詢",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

