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
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-5 text-center sm:px-6 sm:py-8"
    >
      {eyebrow ? (
        <p className="relative z-10 eyebrow-glow-dark tracking-[0.3em]">{eyebrow}</p>
      ) : null}
      <h1
        className={`relative z-10 max-w-6xl text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl${
          eyebrow ? " mt-2 sm:mt-3" : ""
        }`}
      >
        {title}
      </h1>
      {subtitle ? (
        <div className="relative z-10 mt-2 max-w-6xl whitespace-pre-line text-pretty text-sm font-light leading-relaxed text-slate-300 sm:mt-4 sm:text-lg">
          {subtitle}
        </div>
      ) : null}
    </section>
  );
}
