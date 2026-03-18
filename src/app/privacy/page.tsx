import { Footer, Navbar } from "@/components/landing";

export const metadata = {
  title: "隱私權政策 | Avenra",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />
      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            隱私權政策
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-700">
            本服務（Avenra 診所管理系統，以下簡稱「本系統」）重視您的隱私權，並依據相關法規保護您的個人資料。當您使用本系統時，即表示您同意本隱私權政策之內容。
          </p>

          <section className="mt-10 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">一、蒐集之資料類型</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>基本資料：姓名、電話號碼、電子郵件</li>
                <li>預約資料：預約時間、療程內容、醫師資訊</li>
                <li>使用紀錄：系統操作紀錄、登入資訊</li>
                <li>設備資訊：IP 位址、瀏覽器類型等技術資料</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">二、資料使用目的</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>提供預約與排程管理服務</li>
                <li>發送預約提醒與通知</li>
                <li>改善系統功能與使用體驗</li>
                <li>客戶服務與問題回應</li>
                <li>法令要求之用途</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">三、資料分享與揭露</h2>
              <p className="mt-3 text-slate-700">
                本系統不會將您的個人資料出售或任意提供給第三方，除非：
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>經您同意</li>
                <li>為完成服務所必要（如簡訊通知服務）</li>
                <li>法律要求或政府機關依法要求</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">四、資料保護</h2>
              <p className="mt-3 text-slate-700">本系統採用合理之技術與管理措施，包括：</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>HTTPS 加密傳輸</li>
                <li>存取權限控管</li>
                <li>系統安全監控</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">五、資料保存期間</h2>
              <p className="mt-3 text-slate-700">
                資料將於服務期間內保存，並於合理期間內刪除或匿名化。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">六、使用者權利</h2>
              <p className="mt-3 text-slate-700">使用者可請求查詢、更正或刪除個人資料。</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">七、政策修改</h2>
              <p className="mt-3 text-slate-700">本政策可能隨時更新，修改後將公告於本頁面。</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">八、聯絡我們</h2>
              <p className="mt-3 text-slate-700">Email：avenra.platform@gmail.com</p>
            </div>
          </section>
        </article>
      </main>
      <Footer locale="zh" />
    </div>
  );
}

