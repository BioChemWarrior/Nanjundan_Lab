import Link from "next/link";
import type { ReactNode } from "react";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";

export function SectionHeading({
  eyebrow,
  title,
  description,
  strip = true,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  /** When true, uses the same full-width hero strip as /team and /publications (particles + energy flow). */
  strip?: boolean;
}) {
  if (!strip) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">{eyebrow}</p>
        ) : null}
        <h1
          className={`text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl${eyebrow ? " mt-3" : ""}`}
        >
          {title}
        </h1>
        {description ? <div className="mt-4 text-pretty text-slate-600 sm:text-lg">{description}</div> : null}
      </div>
    );
  }

  return <TeamHeroStrip eyebrow={eyebrow} title={title} subtitle={description} />;
}

export function ContentCard({
  title,
  subtitle,
  children,
  href,
  className,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  href?: string;
  className?: string;
}) {
  const cardClassName = [
    "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/60 hover:shadow-md active:translate-y-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <div className={cardClassName}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-blue-400/15 blur-3xl" />
      </div>
      <div className="relative">
        {subtitle ? (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">{subtitle}</p>
        ) : null}
        <h3 className="mt-2 text-base font-semibold text-slate-900 transition group-hover:text-blue-800">{title}</h3>
        {children ? <div className="mt-3 text-sm leading-relaxed text-slate-600">{children}</div> : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
