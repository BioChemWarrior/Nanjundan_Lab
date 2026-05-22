import type { ReactNode } from "react";
import { HeroEnergyFlowDecor } from "@/components/HeroEnergyFlowDecor";

/** Full-width strip aligned with the home hero: particle backdrop + energy-flow decor + title. */
export function TeamHeroStrip({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="relative flex min-h-[12rem] flex-col items-center justify-center overflow-hidden px-6 py-14 text-center sm:min-h-[14rem] sm:py-16">
      <HeroEnergyFlowDecor />
      {eyebrow ? (
        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">{eyebrow}</p>
      ) : null}
      <h1
        className={`relative z-10 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl ${
          eyebrow ? "mt-4" : "mt-2"
        }`}
      >
        {title}
      </h1>
      {subtitle ? (
        <div className="relative z-10 mt-5 max-w-2xl text-pretty text-base font-light leading-relaxed text-slate-300 sm:text-lg">
          {subtitle}
        </div>
      ) : null}
    </section>
  );
}
