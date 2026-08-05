"use client";

import Link from "next/link";
import { homeCopy, researchStats } from "@/lib/content";

type StatIconName = (typeof researchStats)[number]["icon"];

function StatIcon({ icon }: { icon: StatIconName }) {
  const className = "h-5 w-5 sm:h-6 sm:w-6";

  switch (icon) {
    case "funding":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 7v10M9.5 9.5c0-1.1 1.12-2 2.5-2s2.5.9 2.5 2-1.12 2-2.5 2-1.38 0-2.5.9-2.5 2 1.12 2 2.5 2 2.5.9 2.5 2" />
        </svg>
      );
    case "publications":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h8l3 3v13H7V4z" />
          <path strokeLinecap="round" d="M15 4v4h4M9 12h6M9 16h4" />
        </svg>
      );
    case "citations":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7H5v10h4M15 7h4v10h-4" />
          <path strokeLinecap="round" d="M9 12h6" />
        </svg>
      );
    case "patents":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v6c0 4.2 3 7.5 7 8.5 4-1 7-4.3 7-8.5V6l-7-3z" />
          <path strokeLinecap="round" d="M9.5 12.5 11 14l3.5-4" />
        </svg>
      );
  }
}

function HomeSectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow-glow-dark">{eyebrow}</p>
      <h2 className="mt-3 text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {body ? <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-400 sm:text-base">{body}</p> : null}
    </div>
  );
}

export function HomeAboutPanel() {
  const aboutLines = homeCopy.aboutTeaser.split("\n").filter(Boolean);

  return (
    <div className="w-full px-2 text-center sm:px-4">
      <HomeSectionHeader eyebrow={homeCopy.aboutEyebrow} title={homeCopy.aboutTitle} />
      <p className="mx-auto mt-5 max-w-6xl text-sm leading-relaxed text-slate-300 sm:text-base">
        {aboutLines.map((line, index) => (
          <span
            key={line}
            className={`block text-pretty${index === 0 ? " lg:whitespace-nowrap" : ""}${index > 0 ? " mt-1" : ""}`}
          >
            {line}
          </span>
        ))}
      </p>
      <div className="mt-5 flex justify-center sm:mt-6">
        <Link
          href="/about"
          className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-unisq-400/50 hover:bg-unisq-500/10 hover:text-white hover:shadow-unisq-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unisq-400"
        >
          Learn more about the lab
        </Link>
      </div>
    </div>
  );
}

export function HomePageSections() {
  return (
    <section className="space-y-8">
      <HomeSectionHeader eyebrow={homeCopy.statsEyebrow} title={homeCopy.statsTitle} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {researchStats.map((stat) => (
          <div
            key={stat.label}
            className="flex h-full flex-col items-center justify-center rounded-2xl border border-unisq-500/15 bg-gradient-to-br from-lab-900/80 to-lab-950/60 px-4 py-5 text-center shadow-unisq-glow-sm"
          >
            <span className="mb-3 inline-flex items-center justify-center rounded-xl border border-unisq-400/20 bg-unisq-500/10 p-2 text-unisq-300 shadow-unisq-glow-sm">
              <StatIcon icon={stat.icon} />
            </span>
            <p className="text-2xl font-semibold tracking-tight text-unisq-300 sm:text-3xl">{stat.value}</p>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
