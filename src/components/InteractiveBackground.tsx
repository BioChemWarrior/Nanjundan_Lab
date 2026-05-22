"use client";

/**
 * Matches the Divi / particles.js hero from:
 * `Home- Master_Ashok.json` and `Full Screen home page Template.json`
 * (cyan #00d4ff dots + links, repulse on hover, push on click, ~150 particles @ 1080p, density ~800).
 */
import { useCallback, useEffect, useRef } from "react";

const COLOR = "#00d4ff";
const GLOW = "rgba(0, 212, 255, 0.72)";
const LINE_DIST = 150;
const LINE_OPACITY = 0.4;
const PARTICLE_OPACITY = 0.5;
const MOVE_SPEED = 3;
const REPULSE_DIST = 100;
const PUSH_NB = 4;

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

function countForArea(w: number, h: number) {
  const area = w * h;
  const ref = 1920 * 1080;
  return clamp(Math.round((150 * area) / ref), 62, 200);
}

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const sizeRef = useRef({ w: 0, h: 0 });
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  const spawnParticles = useCallback((w: number, h: number) => {
    const n = countForArea(w, h);
    const rng = Math.random;
    const list: Particle[] = [];
    for (let i = 0; i < n; i++) {
      const ang = rng() * Math.PI * 2;
      const sp = MOVE_SPEED * (0.45 + rng() * 0.55);
      list.push({
        x: rng() * w,
        y: rng() * h,
        vx: Math.cos(ang) * sp * 0.45,
        vy: Math.sin(ang) * sp * 0.45,
        r: 1 + rng() * 2,
      });
    }
    particlesRef.current = list;
    sizeRef.current = { w, h };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 2 || h < 2) return;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const prev = sizeRef.current;
      if (prev.w !== w || prev.h !== h || particlesRef.current.length === 0) {
        spawnParticles(w, h);
      }
    };

    const applyRepulse = () => {
      if (reduceMotion) return;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx == null || my == null) return;
      for (const p of particlesRef.current) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.hypot(dx, dy);
        if (d < REPULSE_DIST && d > 0) {
          const s = ((REPULSE_DIST - d) / REPULSE_DIST) ** 2;
          const nx = dx / d;
          const ny = dy / d;
          p.vx += nx * s * 1.35;
          p.vy += ny * s * 1.35;
        }
      }
    };

    const tick = () => {
      const { w, h } = sizeRef.current;
      const particles = particlesRef.current;
      if (w < 2 || h < 2 || particles.length === 0) {
        raf = requestAnimationFrame(tick);
        return;
      }

      if (!reduceMotion) {
        applyRepulse();
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.996;
          p.vy *= 0.996;
          const sp = Math.hypot(p.vx, p.vy);
          if (sp < 0.12) {
            const a = Math.random() * Math.PI * 2;
            const boost = MOVE_SPEED * 0.06;
            p.vx += Math.cos(a) * boost;
            p.vy += Math.sin(a) * boost;
          }
          if (p.x < 0) p.x += w;
          else if (p.x > w) p.x -= w;
          if (p.y < 0) p.y += h;
          else if (p.y > h) p.y -= h;
        }
      }

      ctx.clearRect(0, 0, w, h);

      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      ctx.lineWidth = 1;
      ctx.strokeStyle = COLOR;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINE_DIST && d > 0) {
            ctx.globalAlpha = LINE_OPACITY * (1 - d / LINE_DIST);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = PARTICLE_OPACITY;
      ctx.fillStyle = COLOR;
      for (const p of particles) {
        ctx.shadowBlur = 8 + p.r * 3.5;
        ctx.shadowColor = GLOW;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    };

    const setMouse = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const pad = 40;
      if (x >= -pad && x <= rect.width + pad && y >= -pad && y <= rect.height + pad) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: null, y: null };
      }
    };

    const clearMouse = () => {
      mouseRef.current = { x: null, y: null };
    };

    const onClick = (e: MouseEvent) => {
      if (reduceMotion) return;
      const rect = container.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      if (cx < 0 || cy < 0 || cx > rect.width || cy > rect.height) return;
      const parts = particlesRef.current;
      for (let k = 0; k < PUSH_NB; k++) {
        const ang = Math.random() * Math.PI * 2;
        const sp = MOVE_SPEED * 0.45;
        parts.push({
          x: cx + (Math.random() - 0.5) * 28,
          y: cy + (Math.random() - 0.5) * 28,
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * sp,
          r: 1 + Math.random() * 2,
        });
      }
      while (parts.length > 320) parts.shift();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    window.addEventListener("pointermove", setMouse);
    window.addEventListener("pointercancel", clearMouse);
    window.addEventListener("blur", clearMouse);
    container.addEventListener("click", onClick);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", setMouse);
      window.removeEventListener("pointercancel", clearMouse);
      window.removeEventListener("blur", clearMouse);
      container.removeEventListener("click", onClick);
    };
  }, [spawnParticles]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 min-h-full w-full overflow-hidden">
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />
    </div>
  );
}
