"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Optional delay in ms for stagger (e.g. per card) */
  delay?: number;
};

const DURATION_MS = 500;

export function ScrollReveal({ children, className = "", delay = 0 }: Props) {
  const [ref, visible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
      style={{
        transitionProperty: "transform, opacity",
        transitionDuration: `${DURATION_MS}ms`,
        transitionTimingFunction: "ease-out",
        ...(delay > 0 ? { transitionDelay: visible ? `${delay}ms` : "0ms" } : {}),
      }}
    >
      {children}
    </div>
  );
}
