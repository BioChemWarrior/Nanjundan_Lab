import Link from "next/link";
import { ResearchProjectGrid } from "@/components/ResearchProjectGrid";
import { highlights, researchPageCopy, researchStats } from "@/lib/content";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-unisq-200/40 bg-gradient-to-br from-white to-unisq-50/30 px-4 py-3 text-center shadow-unisq-glow-sm">
      <p className="text-2xl font-semibold tracking-tight text-unisq-800 sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{label}</p>
    </div>
  );
}

export function ResearchPageContent() {
  return (
    <div className="w-full space-y-16 sm:space-y-20">
      <section className="space-y-10 text-center">
        <div className="mx-auto max-w-6xl space-y-4">
          <p className="eyebrow-glow-light">{researchPageCopy.introEyebrow}</p>
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {researchPageCopy.introTitle}
          </h2>
          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">{researchPageCopy.introBody}</p>
        </div>

        <div>
          <ResearchProjectGrid />
        </div>

        <div className="mx-auto w-full max-w-xl space-y-6 sm:max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/research/molecular-background.png"
              alt=""
              className="aspect-[21/9] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-unisq-300 sm:text-xs">Centre for Future Materials</p>
              <p className="mx-auto mt-1 max-w-md text-pretty text-xs leading-relaxed text-white/90 sm:text-sm">
                Interdisciplinary collaboration across advanced materials, clean energy, and translation into real-world impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {researchStats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 text-center">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow-glow-light">Core capabilities</p>
          <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What we do across the lab
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-unisq-50/40 p-6 text-center shadow-sm"
            >
              <span className="text-4xl font-semibold leading-none text-unisq-200">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-unisq-400/25 bg-gradient-to-r from-blue-800 via-slate-900 to-lab-950 px-6 py-8 text-center text-white shadow-unisq-glow-lg sm:px-8 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
          <div className="space-y-3">
            <p className="eyebrow-glow-dark">Collaborate</p>
            <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
              Partner with us on your next materials or energy challenge
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-blue-100 sm:text-base">
              We welcome industry partnerships, visiting researchers, and outstanding PhD candidates across our four research programs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center rounded-full bg-unisq-400 px-5 py-2.5 text-sm font-semibold text-lab-950 shadow-unisq-glow transition hover:bg-unisq-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join the lab
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
