"use client";

import { type RefObject, useEffect, useRef, useState } from "react";

export type ParallaxMotion = {
  /** Normalized pointer offset, roughly -1…1 (smoothed). */
  x: number;
  y: number;
  /** 0 at top of hero, increases as user scrolls past the hero. */
  scroll: number;
};

const INITIAL: ParallaxMotion = { x: 0, y: 0, scroll: 0 };

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

/** Smooth mouse + scroll values for hero parallax layers. */
export function useParallaxPointer(containerRef: RefObject<HTMLElement | null>) {
  const [motion, setMotion] = useState<ParallaxMotion>(INITIAL);
  const smoothRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const lastSetRef = useRef(0);
  const setIntervalMs = 1000 / 30; // ~30fps state updates

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const onPointerMove = (event: PointerEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRef.current = {
        x: clamp(nx, -1, 1),
        y: clamp(ny, -1, 1),
      };
    };

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        scrollRef.current = 0;
        return;
      }
      const rect = el.getBoundingClientRect();
      scrollRef.current = clamp(-rect.top / scrollable, 0, 1);
    };

    let raf = 0;
    const tick = () => {
      const smooth = smoothRef.current;
      const target = targetRef.current;
      smooth.x += (target.x - smooth.x) * 0.075;
      smooth.y += (target.y - smooth.y) * 0.075;
      const now = performance.now();
      const shouldSet = lastSetRef.current === 0 || now - lastSetRef.current >= setIntervalMs;
      if (shouldSet) {
        setMotion({
          x: smooth.x,
          y: smooth.y,
          scroll: scrollRef.current,
        });
        lastSetRef.current = now;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [containerRef]);

  return motion;
}
