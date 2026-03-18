import { Footer, Navbar } from "@/components/landing";

export const metadata = {
  title: "使用條款 | Avenra",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar locale="zh" />
      <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            使用條款
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-700">
            歡迎使用 Avenra 診所管理系統（以下簡稱「本系統」）。當您使用本系統，即表示您同意以下條款。
          </p>

          <section className="mt-10 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">一、服務內容</h2>
              <p className="mt-3 text-slate-700">本系統提供：</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>預約與排程管理</li>
                <li>客戶資料管理</li>
                <li>療程與回診紀錄</li>
                <li>營運數據分析</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">二、帳號使用</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>使用者應妥善保管帳號密碼</li>
                <li>不得轉讓帳號</li>
                <li>異常使用需即時通知</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">三、使用規範</h2>
              <p className="mt-3 text-slate-700">不得：</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>違法使用</li>
                <li>干擾系統</li>
                <li>未授權存取他人資料</li>
                <li>上傳非法內容</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">四、責任限制</h2>
              <p className="mt-3 text-slate-700">本系統不保證：</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>完全不中斷</li>
                <li>完全無錯誤</li>
              </ul>
              <p className="mt-3 text-slate-700">對於間接損失不負責任。</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">五、服務中斷</h2>
              <p className="mt-3 text-slate-700">
                可能因維護、不可抗力或安全問題暫停服務。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">六、條款修改</h2>
              <p className="mt-3 text-slate-700">本系統保留修改條款之權利。</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">七、聯絡方式</h2>
              <p className="mt-3 text-slate-700">Email：avenra.platform@gmail.com</p>
            </div>
          </section>
        </article>
      </main>
      <Footer locale="zh" />
    </div>
  );
}

