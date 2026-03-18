"use client";

import { ReactNode } from "react";

const DURATION_S = 0.5;
const MAX_TRANSLATE_PX = 12;

/** Reusable hero entrance: opacity 0→1, translateY 12px→0, 0.5s ease-out. Opacity + transform only. Triggers once. */
const STYLES = `
@keyframes hero-entrance {
  from { opacity: 0; transform: translateY(${MAX_TRANSLATE_PX}px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-entrance-item {
  animation: hero-entrance ${DURATION_S}s ease-out forwards;
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .hero-entrance-item {
    animation: none;
    opacity: 1;
  }
}
`;

export function HeroEntranceStyle() {
  return <style dangerouslySetInnerHTML={{ __html: STYLES }} />;
}

type ItemProps = { children: ReactNode; delay?: number };

/**
 * Hero entrance: subtle fade + slide (opacity + transform only). Use delay for stagger (e.g. 0, 100, 200 ms).
 * Respects prefers-reduced-motion. Single run, no loops.
 */
export function HeroEntranceItem({ children, delay = 0 }: ItemProps) {
  return (
    <div
      className="hero-entrance-item"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
