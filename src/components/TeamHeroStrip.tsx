import type { ReactNode } from "react";

/** Full-width strip aligned with the home hero: particle backdrop + title. */
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
    <section
      data-page-hero-strip
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-6 text-center sm:py-8"
    >
      {eyebrow ? (
        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">{eyebrow}</p>
      ) : null}
      <h1
        className={`relative z-10 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl${
          eyebrow ? " mt-3" : ""
        }`}
      >
        {title}
      </h1>
      {subtitle ? (
        <div className="relative z-10 mt-3 max-w-2xl text-pretty text-lg font-light leading-relaxed text-slate-300 sm:mt-4 sm:text-xl">
          {subtitle}
        </div>
      ) : null}
    </section>
  );
}
