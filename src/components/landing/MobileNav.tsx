"use client";

import Link from "next/link";
import Image from "next/image";
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

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
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
        <div
          className="fixed inset-0 z-[100] h-[100dvh] w-full bg-white md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-icon.png"
                alt="Avenra"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <p className="text-sm font-semibold text-slate-900">Avenra</p>
            </div>
              <button
                type="button"
                className="site-btn-transition inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

          <nav className="flex h-[calc(100dvh-4rem)] flex-col px-4 py-6" aria-label="Mobile">
            <div className="space-y-2">
                {MENU_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-slate-200 bg-white px-4 py-4 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="site-btn-transition site-cta-btn cta-primary inline-flex w-full items-center justify-center rounded-2xl bg-teal-600 px-5 py-4 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
                >
                  預約 Demo
                </Link>
              </div>
            </nav>
        </div>
      )}
    </>
  );
}

