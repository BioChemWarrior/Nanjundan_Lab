import Link from "next/link";
import type { ReactNode } from "react";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";

function ResearchImagePlaceholder() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100"
      aria-hidden
    >
      <svg className="h-9 w-9 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10.5" r="1.75" fill="currentColor" stroke="none" />
        <path d="M3 16l4.5-4.5 3.5 3.5L14 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ResearchCardImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative flex w-28 shrink-0 self-stretch overflow-hidden border-r border-slate-100 bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 sm:w-36">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover object-center" />
      ) : (
        <ResearchImagePlaceholder />
      )}
    </div>
  );
}

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
  imageSrc,
  imageAlt,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  href?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  const showImage = Boolean(imageSrc);
  const cardClassName = [
    "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/60 hover:shadow-md active:translate-y-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <div className={`${cardClassName} flex h-full flex-col`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-blue-400/15 blur-3xl" />
      </div>
      <div className={`relative flex flex-1${showImage ? " items-stretch" : " flex-col p-6"}`}>
        {showImage ? <ResearchCardImage src={imageSrc} alt={imageAlt} /> : null}
        <div className={`flex min-w-0 flex-1 flex-col${showImage ? " p-6" : ""}`}>
          {subtitle ? (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">{subtitle}</p>
          ) : null}
          <h3
            className={`line-clamp-3 text-base font-semibold text-slate-900 transition group-hover:text-blue-800${subtitle ? " mt-2" : ""}`}
          >
            {title}
          </h3>
          {children ? <div className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{children}</div> : null}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
