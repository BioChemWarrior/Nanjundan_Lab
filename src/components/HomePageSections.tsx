"use client";

import Link from "next/link";
import { ParallaxLayer } from "@/context/HomeParallaxContext";
import { highlights, homeCopy, researchStats } from "@/lib/content";

const glassPanelClass =
  "rounded-3xl border border-white/[0.1] border-glow-unisq bg-lab-900/65 p-6 backdrop-blur-md sm:p-8";

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

function HomeExploreLink({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-lab-900/40 px-5 py-5 text-center transition hover:border-unisq-400/30 hover:bg-lab-900/70 hover:shadow-unisq-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unisq-400 sm:px-6"
    >
      <span className="text-base font-semibold text-white transition group-hover:text-unisq-300">{label}</span>
      <span className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{description}</span>
    </Link>
  );
}

export function HomePageSections() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-20 px-4 sm:space-y-24 sm:px-6 lg:px-8">
      <section>
        <ParallaxLayer depth={4} scrollFactor={-4}>
          <div className={glassPanelClass}>
            <HomeSectionHeader eyebrow={homeCopy.aboutEyebrow} title={homeCopy.aboutTitle} />
            <p className="mx-auto mt-6 max-w-3xl text-center text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
              {homeCopy.aboutTeaser}
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/about"
                className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-unisq-400/50 hover:bg-unisq-500/10 hover:text-white hover:shadow-unisq-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unisq-400"
              >
                Learn more about the lab
              </Link>
            </div>
          </div>
        </ParallaxLayer>
      </section>

      <section className="space-y-8">
        <ParallaxLayer depth={5} scrollFactor={-5}>
          <HomeSectionHeader
            eyebrow={homeCopy.researchEyebrow}
            title={homeCopy.researchTitle}
            body={homeCopy.researchBody}
          />
        </ParallaxLayer>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <ParallaxLayer key={item.title} depth={6 + index * 2} scrollFactor={-4 - index}>
              <article className={`${glassPanelClass} h-full text-center`}>
                <span className="text-3xl font-semibold leading-none text-unisq-400/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.body}</p>
              </article>
            </ParallaxLayer>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="link-glow text-sm"
          >
            View research programs →
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <ParallaxLayer depth={5} scrollFactor={-5}>
          <HomeSectionHeader eyebrow={homeCopy.statsEyebrow} title={homeCopy.statsTitle} />
        </ParallaxLayer>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {researchStats.map((stat, index) => (
            <ParallaxLayer key={stat.label} depth={7 + index} scrollFactor={-3 - index}>
              <div className="rounded-2xl border border-unisq-500/15 bg-gradient-to-br from-lab-900/80 to-lab-950/60 px-4 py-5 text-center shadow-unisq-glow-sm">
                <p className="text-2xl font-semibold tracking-tight text-unisq-300 sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </ParallaxLayer>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <ParallaxLayer depth={4} scrollFactor={-4}>
          <HomeSectionHeader eyebrow={homeCopy.exploreEyebrow} title={homeCopy.exploreTitle} />
        </ParallaxLayer>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <HomeExploreLink href="/about" label="About" description="Who we are and our affiliation with CFM at UniSQ." />
          <HomeExploreLink href="/projects" label="Research" description="Programs, projects, and capabilities." />
          <HomeExploreLink href="/publications" label="Publications" description="Peer-reviewed outputs in leading journals." />
          <HomeExploreLink href="/join-us" label="Join us" description="PhD, postdoc, and collaboration opportunities." />
        </div>
      </section>
    </div>
  );
}
