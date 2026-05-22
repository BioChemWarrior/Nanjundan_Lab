import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300/90">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
      {description ? <div className="mt-4 text-pretty text-slate-500 sm:text-lg">{description}</div> : null}
    </div>
  );
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
    "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-lab-900/90 to-lab-950/80 p-6 shadow-[0_0_0_1px_rgba(59,130,246,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-500/35 hover:shadow-[0_20px_50px_-35px_rgba(59,130,246,0.45)] active:translate-y-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <div className={cardClassName}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-blue-500/12 blur-3xl" />
      </div>
      <div className="relative">
        {subtitle ? (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200/75">{subtitle}</p>
        ) : null}
        <h3 className="mt-2 text-lg font-semibold text-white transition group-hover:text-blue-100">{title}</h3>
        {children ? <div className="mt-3 text-sm leading-relaxed text-slate-500">{children}</div> : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
