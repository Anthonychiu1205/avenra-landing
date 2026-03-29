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
    slug: "clinic-crm-guide",
    title: "診所 CRM 是什麼？完整功能、導入流程與選擇指南",
    description:
      "診所 CRM 是什麼？本篇完整解析 CRM 功能、導入流程與選擇方式，幫助診所提升回診率與顧客管理效率。",
    dateISO: "2026-03-27",
    content: [
      {
        type: "p",
        text: "多數診所在初期都能用簡單方式運作，例如 LINE 回覆、Excel 紀錄與人工安排回診。但當客人逐漸增加，這些方法很快就會出現極限。",
      },
      {
        type: "p",
        text: "顧客資料開始分散、回診提醒不穩定、不同人對同一位顧客的理解不一致。這些問題看起來像是執行問題，但本質上是缺乏系統。",
      },
      {
        type: "p",
        text: "CRM 的價值，在於把分散的資訊與流程整合成一個可以運作的結構。",
      },
      { type: "h2", text: "CRM 在診所裡的角色" },
      {
        type: "p",
        text: "CRM（Customer Relationship Management）不只是顧客名單工具，它更像是一個營運中樞，負責整合資料與驅動行動。",
      },
      {
        type: "p",
        text: "LINE 負責溝通，而 CRM 負責決定什麼時候該溝通。",
      },
      {
        type: "p",
        text: "如果沒有 CRM，顧客資訊會散在不同工具中，導致整體營運變得不可控。",
      },
      { type: "h2", text: "診所 CRM 的核心功能" },
      {
        type: "p",
        text: "一個有效的 CRM，應該讓診所可以掌握顧客狀態，而不是只是儲存資料。",
      },
      {
        type: "p",
        text: "首先是顧客資料整合。從基本資訊到療程紀錄，都應該集中管理。這也是營運穩定的基礎。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所顧客資料怎麼整理（/blog/clinic-customer-data-management）",
      },
      {
        type: "p",
        text: "再來是顧客分群與標籤。透過分類，診所才能針對不同顧客做不同決策。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所顧客分群怎麼做（/blog/clinic-customer-segmentation）",
      },
      {
        type: "p",
        text: "接著是回診與提醒機制。這通常是影響營收最直接的部分，但也最容易被忽略。",
      },
      {
        type: "p",
        text: "回診不應該靠記憶，而應該是系統的一部分。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所回診提醒怎麼做（/blog/clinic-followup-reminder）",
      },
      { type: "h2", text: "沒有 CRM 的常見問題" },
      {
        type: "p",
        text: "當診所沒有 CRM，問題通常不是立即爆發，而是慢慢累積。",
      },
      {
        type: "p",
        text: "資料分散導致查詢困難，提醒不穩定導致顧客流失，溝通沒有脈絡導致信任下降。",
      },
      {
        type: "p",
        text: "營運開始變亂，通常不是因為人不夠努力，而是沒有結構。",
      },
      {
        type: "p",
        text: "延伸閱讀：為什麼顧客不回診（/blog/clinic-customer-churn）",
      },
      { type: "h2", text: "CRM 與 LINE 的差別" },
      {
        type: "p",
        text: "LINE 是診所與顧客溝通的重要工具，但它並不是管理系統。",
      },
      {
        type: "p",
        text: "CRM 則負責整理資訊與決策，讓溝通變得有方向。",
      },
      {
        type: "p",
        text: "延伸閱讀：LINE 與 CRM 的差別（/blog/clinic-line-vs-crm）",
      },
      { type: "h2", text: "什麼情況下，診所應該導入 CRM？" },
      {
        type: "p",
        text: "很多診所在初期其實可以靠簡單工具維持營運，但當以下情況開始出現時，就代表你的營運已經超過人工可控的範圍。",
      },
      {
        type: "ul",
        items: [
          "回診提醒開始依賴人工記錄或臨時處理",
          "顧客資料分散在 LINE、Excel 或不同系統",
          "行銷訊息無法針對不同客群做區分",
          "同一顧客的療程紀錄難以快速查詢",
        ],
      },
      {
        type: "p",
        text: "當營運開始出現這些現象時，問題通常不在於人，而在於系統。CRM 的導入，並不是為了增加工具，而是讓整個流程變得可控且可持續。",
      },
      { type: "h2", text: "診所 CRM 該怎麼選？" },
      {
        type: "p",
        text: "市面上的 CRM 工具很多，但並不是每一種都適合診所使用。與其追求功能最多，更重要的是是否能符合實際營運流程。",
      },
      {
        type: "p",
        text: "一套好的診所 CRM，應該能同時處理顧客資料、回診流程與溝通節奏，而不是只解決其中一部分。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所 CRM 系統怎麼選？完整比較指南（/blog/clinic-crm-selection）",
      },
      { type: "h2", text: "如何開始導入 CRM" },
      {
        type: "p",
        text: "導入 CRM 不需要一次完成，可以從簡單的結構開始。",
      },
      {
        type: "p",
        text: "先整理顧客資料，再建立基本分群，最後設定回診流程。這三件事做好，營運就會開始穩定。",
      },
      {
        type: "p",
        text: "CRM 的導入，是把混亂逐步收斂的過程。",
      },
      { type: "h2", text: "結論" },
      {
        type: "p",
        text: "CRM 不是額外的工具，而是診所營運的基礎。",
      },
      {
        type: "p",
        text: "當沒有 CRM，每增加一個顧客，混亂就增加一點；當有 CRM，每增加一個顧客，系統反而更穩定。",
      },
      {
        type: "p",
        text: "重點不是工具本身，而是你是否建立了一個能持續運作的系統。",
      },
    ],
  },
  {
    slug: "clinic-customer-data-management",
    title: "診所顧客資料怎麼整理？從混亂到可用的做法",
    description:
      "診所顧客資料怎麼整理？本篇解析顧客資料整理的核心原則、常見錯誤與實際做法，幫助診所建立可用的管理基礎。",
    dateISO: "2026-03-27",
    content: [
      {
        type: "p",
        text: "很多診所其實不是沒有資料，而是資料太多、太散，最後反而變得不好用。顧客加過 LINE、來過幾次、做過哪些療程、上次什麼時候回診，這些資訊本來都很重要，但如果分散在不同工具裡，久了就只剩下紀錄，沒有辦法變成行動。",
      },
      {
        type: "p",
        text: "顧客資料會失去價值，通常不是因為資料不夠，而是因為缺少整理方式。",
      },
      {
        type: "p",
        text: "診所真正需要的，不是更多資料，而是能被持續使用的資料結構。",
      },
      { type: "h2", text: "為什麼診所的顧客資料會越來越亂？" },
      {
        type: "p",
        text: "問題通常不是某一個工具不好，而是資料隨著營運成長，開始散落在不同地方。有些資料在 LINE 對話裡，有些在 Excel，有些在櫃檯紀錄，有些則只存在於個人的記憶裡。",
      },
      {
        type: "p",
        text: "一開始客人不多時，這樣還能勉強運作。但當來客數增加，資訊就會逐漸失去連續性。同一位顧客的狀態可能被不同人用不同方式理解，最後導致跟進不一致、提醒延誤、回診節奏中斷。",
      },
      {
        type: "p",
        text: "資料一旦失去脈絡，就很難再支撐後續決策。",
      },
      { type: "h2", text: "什麼才算是可用的顧客資料？" },
      {
        type: "p",
        text: "很多人會把資料整理理解成「把資訊抄進系統」，但那只完成了一半。真正可用的顧客資料，必須同時具備完整性、可追蹤性與可延續性。",
      },
      {
        type: "p",
        text: "完整性代表你能快速知道這個人是誰、來過幾次、做過什麼。可追蹤性代表你能判斷他目前處在哪個階段，例如剛完成療程、等待回診，或已經一段時間沒有互動。可延續性則是下一位接手的人，也能在短時間內理解狀況，而不是重新問一次。",
      },
      {
        type: "p",
        text: "顧客資料不是存檔，而是要能支撐下一步行動。",
      },
      { type: "h2", text: "診所顧客資料至少應該整理哪些內容？" },
      {
        type: "p",
        text: "第一層是基本資料，例如姓名、聯絡方式、生日與基本背景。這些看似簡單，但如果格式不一致，之後搜尋與比對就會變得很痛苦。",
      },
      {
        type: "p",
        text: "第二層是互動資料，也就是他從哪裡來、詢問過什麼、目前有沒有回覆、是否曾經預約或取消。這些資訊會直接影響你之後的跟進方式。",
      },
      {
        type: "p",
        text: "第三層則是療程與營運資料，包括來診紀錄、療程歷史、回診節奏與目前狀態。如果缺少這一層，診所就很難做出有效分群，更不用說後續提醒與再行銷。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所 CRM 是什麼？完整功能、導入流程與選擇指南（/blog/clinic-crm-guide）",
      },
      { type: "h2", text: "整理顧客資料時，最常見的錯誤是什麼？" },
      {
        type: "p",
        text: "最常見的錯誤，不是少記，而是記了卻沒有邏輯。資料可能很多，但欄位不一致、命名方式不同、標記標準不明確，最後反而讓人更不敢用。",
      },
      {
        type: "p",
        text: "另一個很常見的問題是，只整理「靜態資料」，卻不整理「狀態資料」。顧客不是固定不動的，他會從新客變成已預約、從療程後進入回診期、再逐漸變成穩定回流客。如果系統裡看不到這些變化，資料就只剩下名單，不具備經營價值。",
      },
      {
        type: "p",
        text: "亂不是因為資料太多，而是因為資料沒有被定義。",
      },
      { type: "h2", text: "顧客資料整理好之後，下一步是什麼？" },
      {
        type: "p",
        text: "整理不是終點，整理之後才真正進入營運階段。當資料有基本結構之後，下一步通常是建立分群與標籤，讓不同顧客可以被區分，也讓後續提醒與溝通有依據。",
      },
      {
        type: "p",
        text: "如果沒有這一步，資料雖然比以前整齊，但仍然很難被拿來做決策。這也是很多診所明明「有系統」，卻還是覺得營運沒有變順的原因。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所顧客分群怎麼做（/blog/clinic-customer-segmentation）",
      },
      {
        type: "p",
        text: "延伸閱讀：診所回診提醒怎麼做（/blog/clinic-followup-reminder）",
      },
      { type: "h2", text: "什麼情況下，代表你已經不能再用人工整理？" },
      {
        type: "p",
        text: "如果你開始出現以下現象，就代表資料整理已經超過人工可以穩定處理的範圍：客人一多就查不到紀錄、回診提醒常常漏掉、不同人接手時要重新問一次狀況，或是行銷訊息總是無法針對不同顧客做區分。",
      },
      {
        type: "p",
        text: "這種時候，問題通常不是執行力，而是工具與流程不再匹配。",
      },
      {
        type: "p",
        text: "當資料開始拖累營運，而不是幫助營運，就代表你需要重新建立系統。",
      },
      {
        type: "p",
        text: "延伸閱讀：為什麼顧客不回診（/blog/clinic-customer-churn）",
      },
      { type: "h2", text: "結論" },
      {
        type: "p",
        text: "診所顧客資料整理，真正要解決的不是「東西存在哪裡」，而是「下一步該怎麼做」。當資料有清楚結構、能持續更新、能支撐分群與追蹤，它才會從紀錄變成營運基礎。",
      },
      {
        type: "p",
        text: "好的資料整理，不是讓系統看起來整齊，而是讓診所之後每一次決策都更容易。",
      },
      { type: "h2", text: "如果你現在正卡在資料混亂，可以先從這裡開始" },
      {
        type: "p",
        text: "如果你已經發現顧客資料分散、紀錄難追、回診提醒不穩，那麼現在真正需要的，通常不是再補一張 Excel，而是重新整理整個資料結構。",
      },
      {
        type: "p",
        text: "多數診所不是沒有資料，而是沒有一套能讓資料持續運作的方式。",
      },
      {
        type: "p",
        text: "如果你想進一步看診所 CRM 如何把顧客資料、分群與回診流程整合起來，可以直接往下看實際系統頁面。",
      },
      {
        type: "p",
        text: "查看 CRM 系統（/clinic-crm-system）",
      },
    ],
  },
  {
    slug: "clinic-customer-segmentation",
    title: "診所顧客分群怎麼做？從名單整理到精準經營",
    description:
      "診所顧客分群怎麼做？本篇解析顧客分群的實際方法、常見錯誤與應用場景，幫助診所提升回診率與溝通效率。",
    dateISO: "2026-03-27",
    content: [
      {
        type: "p",
        text: "很多診所在經營一段時間後，會開始發現一個問題：顧客越來越多，但溝通卻越來越沒有效率。",
      },
      {
        type: "p",
        text: "訊息一樣發、優惠一樣推，但回應的人卻越來越少。這通常不是內容不夠好，而是沒有分群。",
      },
      {
        type: "p",
        text: "當所有人收到一樣的訊息，代表你其實沒有在經營顧客。",
      },
      { type: "h2", text: "為什麼診所一定要做顧客分群？" },
      {
        type: "p",
        text: "每一位顧客的狀態都不同，有人剛諮詢，有人剛做完療程，有人已經很久沒回來。如果用同一種方式對待所有人，結果通常就是「沒人覺得訊息和自己有關」。",
      },
      {
        type: "p",
        text: "分群的目的，不是把人分類，而是讓每一種顧客都能被正確對待。",
      },
      {
        type: "p",
        text: "分群的本質，是讓溝通變得有意義，而不是更複雜。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所顧客資料怎麼整理（/blog/clinic-customer-data-management）",
      },
      { type: "h2", text: "診所最常見的三種分群方式" },
      {
        type: "p",
        text: "最基本的分法，是依照顧客所處的階段。這也是最容易落地的方式。",
      },
      {
        type: "p",
        text: "例如新客、已預約、療程中、待回診、長期未回診。這種分法的好處是，每個階段都對應到不同的行動。",
      },
      {
        type: "p",
        text: "第二種是依照療程類型，例如皮膚管理、微整、雷射等。這能幫助你在行銷時更精準。",
      },
      {
        type: "p",
        text: "第三種則是依照互動程度，例如高頻回診、偶爾回診、已流失。這會直接影響你的溝通策略。",
      },
      {
        type: "p",
        text: "分群不是為了分類，而是為了決定下一步該做什麼。",
      },
      { type: "h2", text: "為什麼很多診所做了分群，卻沒有用？" },
      {
        type: "p",
        text: "很多診所有分群，但沒有行動。名單被分好之後，就停在那裡，沒有進一步使用。",
      },
      {
        type: "p",
        text: "另一個常見問題是，分群太複雜。分類很多，但沒有清楚規則，最後反而讓人不敢用。",
      },
      {
        type: "p",
        text: "分群應該是越簡單越好，只要能支持決策，就已經足夠。",
      },
      {
        type: "p",
        text: "如果分群不能帶來行動，那它就只是整理過的名單。",
      },
      { type: "h2", text: "分群之後，下一步是什麼？" },
      {
        type: "p",
        text: "分群只是開始，真正的價值在於後續的溝通與提醒。",
      },
      {
        type: "p",
        text: "例如針對「待回診」的顧客發送提醒，針對「新客」安排導流訊息，針對「高價值顧客」提供專屬內容。這些都是分群後才能做到的事情。",
      },
      {
        type: "p",
        text: "分群的目的，是讓每一個訊息都有對象，而不是對所有人說話。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所回診提醒怎麼做（/blog/clinic-followup-reminder）",
      },
      { type: "h2", text: "什麼情況下，你需要重新做分群？" },
      {
        type: "p",
        text: "如果你開始發現訊息成效下降、回診率不穩定、顧客反應冷淡，很可能不是內容問題，而是分群已經失效。",
      },
      {
        type: "p",
        text: "顧客的狀態會改變，如果分群沒有隨之更新，整個系統就會逐漸失準。",
      },
      {
        type: "p",
        text: "分群不是一次設定，而是一個需要持續更新的結構。",
      },
      { type: "h2", text: "結論" },
      {
        type: "p",
        text: "顧客分群不是行銷技巧，而是診所營運的基本能力。當你能清楚知道每一位顧客在哪個階段，溝通才會開始變得有效。",
      },
      {
        type: "p",
        text: "沒有分群的溝通，是隨機的；有分群的溝通，才是經營。",
      },
      { type: "h2", text: "如果你想讓分群真的運作，可以從這裡開始" },
      {
        type: "p",
        text: "如果你目前有顧客資料，但無法有效分群或應用，通常代表你的系統還沒有把資料與行動連在一起。",
      },
      {
        type: "p",
        text: "分群真正的價值，在於讓每一個顧客都有對應的下一步。",
      },
      {
        type: "p",
        text: "如果你想了解 CRM 如何整合分群、資料與回診流程，可以直接查看實際系統。",
      },
      {
        type: "p",
        text: "查看 CRM 系統（/clinic-crm-system）",
      },
    ],
  },
  {
    slug: "clinic-line-vs-crm",
    title: "LINE 就夠了嗎？診所為什麼還需要 CRM 系統",
    description:
      "很多診所只用 LINE 經營顧客，但這樣真的夠嗎？本篇解析 LINE 與 CRM 的差別，以及為什麼診所需要完整系統。",
    dateISO: "2026-03-27",
    content: [
      {
        type: "p",
        text: "很多診所在初期，都會用 LINE 作為主要的顧客溝通工具。",
      },
      {
        type: "p",
        text: "回覆方便、操作直覺，看起來幾乎可以處理所有事情。",
      },
      {
        type: "p",
        text: "但當顧客數量開始增加，LINE 很快就會變成一個「混亂的訊息盒」。",
      },
      { type: "h2", text: "為什麼只用 LINE 會出問題？" },
      {
        type: "p",
        text: "LINE 本質上是一個溝通工具，而不是管理系統。",
      },
      {
        type: "p",
        text: "訊息會不斷往下堆疊，你很難快速找到某位顧客的完整紀錄。",
      },
      {
        type: "p",
        text: "也很難知道這個人目前在哪個階段，是否該回診，或是否曾經購買過療程。",
      },
      {
        type: "p",
        text: "當資料無法被整理，所有決策都會變成臨時判斷。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所 CRM 是什麼（/blog/clinic-crm-guide）",
      },
      { type: "h2", text: "LINE 與 CRM 的本質差別" },
      {
        type: "p",
        text: "LINE 負責「溝通」，CRM 負責「管理」。",
      },
      {
        type: "p",
        text: "LINE 解決的是你怎麼跟顧客說話，而 CRM 解決的是你應該在什麼時候說、對誰說。",
      },
      {
        type: "p",
        text: "沒有 CRM，溝通只是隨機發生；有 CRM，溝通才會有策略。",
      },
      { type: "h2", text: "診所常見的錯誤理解" },
      {
        type: "p",
        text: "很多人會認為，只要把 LINE 用好，就等於有在做顧客管理。",
      },
      {
        type: "p",
        text: "但實際上，你只是把所有事情都塞進同一個地方，並沒有真正整理。",
      },
      {
        type: "p",
        text: "當顧客變多時，這種做法幾乎一定會失控。",
      },
      {
        type: "p",
        text: "工具再方便，如果沒有結構，最後都會變成負擔。",
      },
      { type: "h2", text: "什麼時候你應該從 LINE 升級？" },
      {
        type: "p",
        text: "如果你開始出現以下情況，就代表 LINE 已經不夠用了：",
      },
      {
        type: "ul",
        items: [
          "找不到顧客歷史紀錄",
          "回診提醒不穩定",
          "訊息無法針對不同客群",
          "行銷沒有成效",
        ],
      },
      {
        type: "p",
        text: "這些問題的共通點是，你缺少一個可以整理資訊的系統。",
      },
      {
        type: "p",
        text: "當營運開始依賴記憶與手動操作，就代表系統已經不夠用了。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所回診提醒怎麼做（/blog/clinic-followup-reminder）",
      },
      {
        type: "p",
        text: "延伸閱讀：診所預約系統完整指南（/blog/clinic-booking-system-guide）",
      },
      { type: "h2", text: "CRM 與 LINE 應該怎麼搭配？" },
      {
        type: "p",
        text: "正確的方式，不是取代 LINE，而是讓 LINE 成為 CRM 的執行工具。",
      },
      {
        type: "p",
        text: "CRM 負責決定要做什麼，而 LINE 負責把這件事傳遞出去。",
      },
      {
        type: "p",
        text: "例如回診提醒、分群訊息、術後關懷，都應該由系統觸發，而不是人工發送。",
      },
      {
        type: "p",
        text: "LINE 是工具，CRM 才是系統。",
      },
      { type: "h2", text: "結論" },
      {
        type: "p",
        text: "LINE 很重要，但它不是營運的核心。",
      },
      {
        type: "p",
        text: "當你開始依賴 LINE 做所有事情，問題只會越來越多。",
      },
      {
        type: "p",
        text: "真正能讓診所穩定成長的，是一套可運作的系統，而不是單一工具。",
      },
      {
        type: "p",
        text: "查看 LINE 自動化系統（/clinic-line-automation）",
      },
    ],
  },
  {
    slug: "clinic-followup-reminder",
    title: "診所回診提醒怎麼做？從手動追蹤到自動化流程",
    description:
      "診所回診提醒怎麼做？本篇解析回診提醒常見問題、失敗原因與實際流程，幫助診所提升回診率與顧客留存。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-crm-selection",
    title: "診所 CRM 系統怎麼選？功能、價格與導入重點一次看",
    description:
      "診所 CRM 系統怎麼選？本篇整理選擇 CRM 時應注意的功能、價格與導入流程，幫助診所避免選錯系統。",
    dateISO: "2026-03-27",
    content: [
      {
        type: "p",
        text: "當診所開始意識到需要 CRM，下一個問題通常是：「到底該選哪一套？」",
      },
      {
        type: "p",
        text: "市面上的系統看起來功能很多、介紹也很完整，但實際導入後，很多診所卻發現並不好用。",
      },
      {
        type: "p",
        text: "問題通常不在於系統不好，而是在選擇的時候就已經選錯方向。",
      },
      { type: "h2", text: "多數診所選 CRM，第一步就錯了" },
      {
        type: "p",
        text: "很多人在選系統時，第一個看的都是功能列表。",
      },
      {
        type: "p",
        text: "哪一套有最多功能、哪一套最便宜，然後就做決定。",
      },
      {
        type: "p",
        text: "但這種方式幾乎一定會踩雷。",
      },
      {
        type: "p",
        text: "CRM 不是越多功能越好，而是要能支撐你的營運流程。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所 CRM 是什麼（/blog/clinic-crm-guide）",
      },
      { type: "h2", text: "選 CRM 前，你應該先想清楚三件事" },
      {
        type: "p",
        text: "第一，你現在的問題是什麼？",
      },
      {
        type: "p",
        text: "是回診提醒不穩，還是資料太亂，還是溝通沒有效率？",
      },
      {
        type: "p",
        text: "第二，你希望解決的是哪一段流程？",
      },
      {
        type: "p",
        text: "預約、回診、顧客經營，每一段的需求都不同。",
      },
      {
        type: "p",
        text: "第三，你的團隊是否能實際使用？",
      },
      {
        type: "p",
        text: "再好的系統，如果太複雜，最後也只會被放棄。",
      },
      {
        type: "p",
        text: "選系統前，先定義問題，比比較系統更重要。",
      },
      { type: "h2", text: "診所 CRM 一定要有的核心功能" },
      {
        type: "p",
        text: "一套能真正幫助診所的 CRM，不需要很多花俏功能，但有幾個核心是不可缺的。",
      },
      {
        type: "p",
        text: "顧客資料整合，讓所有資訊可以快速查詢。",
      },
      {
        type: "p",
        text: "顧客分群與標籤，讓不同顧客可以有不同策略。",
      },
      {
        type: "p",
        text: "回診提醒與流程設定，讓營運可以自動運作。",
      },
      {
        type: "p",
        text: "如果一套系統無法處理這三件事，就不算真正的 CRM。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所顧客分群怎麼做（/blog/clinic-customer-segmentation）",
      },
      { type: "h2", text: "價格怎麼看才合理？" },
      {
        type: "p",
        text: "很多診所在選系統時，會優先看價格。",
      },
      {
        type: "p",
        text: "但 CRM 的成本，不只是訂閱費用，還包含導入時間與營運影響。",
      },
      {
        type: "p",
        text: "如果系統便宜，但讓你持續流失顧客，那其實是最貴的選擇。",
      },
      {
        type: "p",
        text: "CRM 應該被當作營運投資，而不是成本。",
      },
      { type: "h2", text: "導入 CRM 時最常見的失敗原因" },
      {
        type: "p",
        text: "很多診所導入 CRM 失敗，不是因為系統問題，而是導入方式錯誤。",
      },
      {
        type: "p",
        text: "一次想做太多、沒有先整理資料、沒有設定流程，最後導致整個系統無法運作。",
      },
      {
        type: "p",
        text: "CRM 應該從最核心的流程開始，而不是一次導入所有功能。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所回診提醒怎麼做（/blog/clinic-followup-reminder）",
      },
      { type: "h2", text: "結論" },
      {
        type: "p",
        text: "選 CRM，不是選功能最多的，而是選最適合你流程的。",
      },
      {
        type: "p",
        text: "當系統能真正支撐你的營運，顧客管理才會開始穩定。",
      },
      {
        type: "p",
        text: "好的 CRM，會讓事情變簡單，而不是更複雜。",
      },
      {
        type: "p",
        text: "查看 CRM 系統（/clinic-crm-system）",
      },
    ],
  },
  {
    slug: "clinic-crm-implementation",
    title: "診所 CRM 導入流程怎麼做？從整理資料到正式上線",
    description:
      "診所 CRM 導入流程怎麼做？本篇整理從資料盤點、流程設計到正式上線的關鍵步驟，幫助診所降低導入失敗風險。",
    dateISO: "2026-03-27",
    content: [
      {
        type: "p",
        text: "很多診所在決定導入 CRM 之後，第一個反應通常不是興奮，而是混亂。因為一旦真的開始做，就會發現資料很多、流程很散，甚至連「該先整理什麼」都不清楚。",
      },
      {
        type: "p",
        text: "這也是為什麼很多 CRM 導入最後會失敗。不是系統不好，而是還沒建立流程，就急著把所有東西塞進去。",
      },
      {
        type: "p",
        text: "CRM 導入真正的難點，不是上線，而是讓系統能和現有營運接起來。",
      },
      { type: "h2", text: "為什麼很多診所導入 CRM 之後，還是覺得不好用？" },
      {
        type: "p",
        text: "最常見的原因，是把 CRM 當成一個新工具，而不是新的工作方式。如果原本資料混亂、回診流程模糊、顧客狀態沒有定義，那只是把舊問題搬到新系統裡而已。",
      },
      {
        type: "p",
        text: "還有一種情況是，一開始就想把所有功能一次導入。結果團隊還沒適應，資料又還沒整理好，最後只會讓大家覺得系統很麻煩。",
      },
      {
        type: "p",
        text: "導入失敗通常不是因為功能太少，而是因為一開始做得太多。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所 CRM 系統怎麼選？功能、價格與導入重點一次看（/blog/clinic-crm-selection）",
      },
      { type: "h2", text: "第一步：先整理資料，不要先急著上功能" },
      {
        type: "p",
        text: "CRM 導入前，最重要的是先知道你現在手上有什麼資料，以及哪些資料其實根本不能用。很多診所的資料分散在 LINE、Excel、表單與個人紀錄裡，格式不一致、命名也不一致。",
      },
      {
        type: "p",
        text: "這時候最該做的，不是先設計漂亮的畫面，而是先把基本資料、來診紀錄、療程歷史與回診狀態整理出來。只要這一步做對，後面的分群與提醒才有基礎。",
      },
      {
        type: "p",
        text: "如果資料本身是亂的，再好的 CRM 也只會把混亂數位化。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所顧客資料怎麼整理（/blog/clinic-customer-data-management）",
      },
      { type: "h2", text: "第二步：先定義顧客狀態，再做分群" },
      {
        type: "p",
        text: "導入 CRM 時，不能只想著把資料搬進去，還要定義每一位顧客目前處在哪個階段。例如新客、已預約、療程中、待回診、長期未回診，這些狀態會直接影響後續溝通與提醒。",
      },
      {
        type: "p",
        text: "如果顧客狀態沒有被定義，後面的標籤、名單與行銷內容都會失去準確性。",
      },
      {
        type: "p",
        text: "CRM 的價值不只是記錄顧客，而是讓顧客的下一步變得清楚。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所顧客分群怎麼做（/blog/clinic-customer-segmentation）",
      },
      { type: "h2", text: "第三步：先建立最重要的一條流程" },
      {
        type: "p",
        text: "很多診所在導入時會想把預約、提醒、行銷、顧客管理一次做完，但實際上最好的做法是先抓一條最重要的流程。",
      },
      {
        type: "p",
        text: "對多數診所來說，最值得先做的通常是回診流程。因為這不只影響營運效率，也直接影響收入。當系統能穩定處理回診提醒，團隊才會感受到 CRM 的價值。",
      },
      {
        type: "p",
        text: "與其一次做十件事，不如先把一條會影響營收的流程做對。",
      },
      {
        type: "p",
        text: "延伸閱讀：診所回診提醒怎麼做？從手動到自動化的完整流程（/blog/clinic-followup-reminder）",
      },
      { type: "h2", text: "第四步：讓團隊先用得起來，再談優化" },
      {
        type: "p",
        text: "很多系統失敗，不是因為功能不夠，而是前線人員根本不想用。如果操作太複雜、欄位太多、流程太長，系統再完整也不會真正落地。",
      },
      {
        type: "p",
        text: "所以導入初期應該先讓團隊習慣最核心的操作，例如查詢顧客、更新狀態、設定提醒。等這些動作開始變自然，再慢慢加入更進階的功能。",
      },
      {
        type: "p",
        text: "能被使用的系統，才算真正完成導入。",
      },
      { type: "h2", text: "第五步：導入完成後，要持續調整而不是放著不管" },
      {
        type: "p",
        text: "CRM 不是上線就結束。當診所的顧客數、療程結構與營運節奏改變時，系統也需要跟著調整。分群規則、提醒節點、欄位設計，這些都應該在使用過程中不斷修正。",
      },
      {
        type: "p",
        text: "如果系統上線後就被放著不動，最後很容易再次脫離實際營運，回到原本的混亂。",
      },
      {
        type: "p",
        text: "導入 CRM 不是一次性專案，而是一個逐步穩定營運的過程。",
      },
      { type: "h2", text: "結論" },
      {
        type: "p",
        text: "診所 CRM 的導入，真正重要的不是速度，而是順序。先整理資料，再定義狀態，接著建立最重要的流程，最後讓團隊真正使用起來。",
      },
      {
        type: "p",
        text: "這樣做看起來慢，但其實更快。因為你不是在重複修正一套沒人用的系統，而是在慢慢建立一套真的能支撐營運的結構。",
      },
      {
        type: "p",
        text: "好的導入，不是一次做完，而是每一步都真的被接住。",
      },
      { type: "h2", text: "如果你正在準備導入 CRM，可以先從這裡開始" },
      {
        type: "p",
        text: "如果你已經知道自己需要 CRM，但還不確定該從哪裡開始，最好的方式不是一次列出所有需求，而是先從資料、分群與回診流程這三件事著手。",
      },
      {
        type: "p",
        text: "導入真正的目的，不是把系統裝進診所，而是讓診所開始用系統運作。",
      },
      {
        type: "p",
        text: "如果你想先看實際的 CRM 系統畫面與流程安排，可以直接查看系統頁面。",
      },
      {
        type: "p",
        text: "查看 CRM 系統（/clinic-crm-system）",
      },
    ],
  },
  {
    slug: "clinic-booking-system-selection",
    title: "診所預約系統怎麼選？LINE、表單與 CRM 差在哪",
    description:
      "診所預約系統怎麼選？本篇比較 LINE、表單與 CRM 的差異，幫助診所找到真正適合的預約管理方式。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-booking-system-guide",
    title: "診所預約系統完整指南：從 LINE 到自動化排程",
    description:
      "診所預約系統完整指南，整理 LINE 預約、表單收件與自動化排程整合重點，協助診所建立穩定預約流程。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "line-booking-problems",
    title: "診所用 LINE 管理預約會遇到什麼問題？5 個常見混亂場景",
    description:
      "診所用 LINE 管理預約真的可行嗎？本篇解析 5 個常見混亂問題，幫助你了解為什麼需要更穩定的預約系統。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-post-treatment-care",
    title: "診所術後關懷怎麼做？從單次服務到長期回診的關鍵",
    description:
      "診所術後關懷怎麼做？本篇解析術後追蹤與關懷流程，幫助診所提升顧客信任與回診率。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-tagging-system",
    title: "診所顧客標籤怎麼設計？從分類到實際應用的完整指南",
    description:
      "診所顧客標籤怎麼設計？本篇解析標籤系統的核心概念、常見錯誤與實際應用，幫助診所提升管理效率與回診率。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-retention-rate",
    title: "診所如何提升回診率？從流程設計到實際執行",
    description:
      "診所如何提升回診率？本篇解析從顧客資料、分群到回診流程的完整策略，幫助診所穩定營收與顧客關係。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-customer-management-guide",
    title: "診所顧客管理系統可以解決什麼問題？從預約到回診一次看",
    description:
      "診所顧客管理系統可以解決什麼問題？本篇整理預約、資料、分群、回診與 LINE 自動化的核心問題，幫助診所建立穩定營運流程。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-customer-churn",
    title: "為什麼診所顧客不回診？5 個常見原因與改善方法",
    description:
      "診所顧客為什麼不回診？本篇解析顧客流失的常見原因，並提供可落地的改善方法，幫助提升回診率與營收穩定性。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-line-automation",
    title: "診所 LINE 自動化怎麼做？從手動回覆到流程化經營",
    description:
      "診所 LINE 自動化怎麼做？本篇解析從手動回覆到自動化流程的轉變，幫助診所提升效率與回診率。",
    dateISO: "2026-03-27",
    content: [],
  },
  {
    slug: "clinic-followup-system-guide",
    title: "診所回診與術後追蹤完整指南：讓顧客自然回流",
    description:
      "診所回診與術後追蹤完整指南，整理提醒節點與術後關懷流程，幫助診所建立穩定回流與留存機制。",
    dateISO: "2026-03-27",
    content: [],
  },
];

export type BlogIndexGroup = {
  title: string;
  slugs: string[];
};

export const BLOG_INDEX_GROUPS: BlogIndexGroup[] = [
  {
    title: "經營基礎",
    slugs: [
      "clinic-customer-management-guide",
      "clinic-crm-guide",
      "clinic-customer-data-management",
      "clinic-customer-segmentation",
      "clinic-tagging-system",
      "clinic-line-vs-crm",
    ],
  },
  {
    title: "預約與流程",
    slugs: [
      "clinic-booking-system-guide",
      "line-booking-problems",
      "clinic-booking-system-selection",
      "clinic-followup-reminder",
      "clinic-post-treatment-care",
      "clinic-line-automation",
      "clinic-crm-implementation",
    ],
  },
  {
    title: "成長與轉換",
    slugs: [
      "clinic-followup-system-guide",
      "clinic-customer-churn",
      "clinic-retention-rate",
      "clinic-crm-selection",
    ],
  },
];

export function getGroupedIndexSlugs(): string[] {
  const seen = new Set<string>();
  const grouped: string[] = [];
  for (const group of BLOG_INDEX_GROUPS) {
    for (const slug of group.slugs) {
      if (!seen.has(slug)) {
        seen.add(slug);
        grouped.push(slug);
      }
    }
  }
  return grouped;
}

export function getBlogPostsNotInIndexGroups() {
  const grouped = new Set(getGroupedIndexSlugs());
  return BLOG_POSTS.filter((post) => !grouped.has(post.slug));
}

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export type BlogPostWithListDate = BlogPost & { date: Date };

export function getBlogPostsBySlugsInOrder(slugs: string[]): BlogPostWithListDate[] {
  return slugs
    .map((slug) => {
      const p = getBlogPost(slug);
      if (!p) return null;
      return { ...p, date: new Date(`${p.dateISO}T00:00:00`) };
    })
    .filter((p): p is BlogPostWithListDate => p !== null);
}

export function formatBlogListDate(date: Date): string {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
