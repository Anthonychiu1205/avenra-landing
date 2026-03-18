"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  /** When true, stop observing after first intersection (trigger once) */
  triggerOnce?: boolean;
};

/**
 * Lightweight hook: observes an element and returns whether it has entered the viewport.
 * Use for scroll-reveal animations. Optionally unobserves after first trigger for performance.
 */
export function useIntersectionObserver(options: Options = {}) {
  const {
    threshold = 0.08,
    rootMargin = "0px 0px -24px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isIntersecting] as const;
}
