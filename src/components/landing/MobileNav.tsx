"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MENU_ITEMS = [
  { label: "首頁", href: "/" },
  { label: "產品", href: "/product" },
  { label: "客戶案例", href: "/case-studies" },
  { label: "價格", href: "/pricing" },
  { label: "Demo", href: "/demo" },
  { label: "聯絡我們", href: "/contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="site-btn-transition inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-slate-900/25"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl">
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
              <p className="text-sm font-semibold text-slate-900">選單</p>
              <button
                type="button"
                className="site-btn-transition inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="px-4 py-5" aria-label="Mobile">
              <div className="space-y-1">
                {MENU_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="site-btn-transition site-cta-btn cta-primary inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
                >
                  預約 Demo
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

