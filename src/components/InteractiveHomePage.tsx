"use client";

import { FundedBy } from "@/components/FundedBy";
import { HomePageSections } from "@/components/HomePageSections";
import { HomeParallaxPage } from "@/context/HomeParallaxContext";
import { labBrand } from "@/lib/content";

function HomeHeroHeadline() {
  return (
    <>
      <h1 className="home-hero-title text-balance text-center font-heading text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
        {(() => {
          const title = labBrand.title;
          const lastSpace = title.lastIndexOf(" ");
          if (lastSpace === -1) return title;
          const before = title.slice(0, lastSpace);
          const lastRaw = title.slice(lastSpace + 1);
          const last = lastRaw.toLowerCase() === "lab" ? "Laboratory" : lastRaw;
          return (
            <>
              {before}{" "}
              <span className="text-unisq-400 drop-shadow-[0_0_20px_rgba(255,184,77,0.4)]">{last}</span>
            </>
          );
        })()}
      </h1>

      <p className="mt-6 max-w-6xl text-balance text-center font-sans text-xl font-light tracking-wide text-slate-200 sm:mt-7 sm:text-2xl md:text-3xl">
        {labBrand.subtitle.split(" • ").map((part, index) => (
          <span key={part}>
            {index > 0 ? (part === "Circular Economy" ? " " : " • ") : null}
            <span className={part === "Next Generation Batteries" ? "whitespace-nowrap" : undefined}>{part}</span>
          </span>
        ))}
      </p>
    </>
  );
}

function HomeHeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="home-hero-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_42%,rgba(0,212,255,0.08)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_35%,rgba(2,11,26,0.55)_72%,rgba(2,11,26,0.92)_100%)]" />
      <div className="home-hero-pulse-ring absolute left-1/2 top-[46%] h-[min(70vw,34rem)] w-[min(70vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-unisq-400/25 shadow-unisq-glow-sm" />
      <div className="home-hero-pulse-ring absolute left-1/2 top-[46%] h-[min(88vw,42rem)] w-[min(88vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10 [animation-delay:1.5s]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-unisq-400/40 to-transparent shadow-unisq-glow-sm" />
    </div>
  );
}

function HomeHeroRegion() {
  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center px-6 py-20 text-center">
      <HomeHeroAtmosphere />

      <div className="relative z-[2] flex max-w-6xl flex-col items-center">
        <HomeHeroHeadline />
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-[2] -translate-x-1/2" aria-hidden>
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-8 w-px bg-gradient-to-b from-unisq-400/60 to-transparent shadow-unisq-glow-sm" />
        </div>
      </div>
    </section>
  );
}

export function InteractiveHomePage() {
  return (
    <HomeParallaxPage>
      <HomeHeroRegion />

      <div className="relative space-y-20 pb-24 pt-4 sm:space-y-24 sm:pt-8">
        <div
          className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-[#020b1a]/80"
          aria-hidden
        />
        <HomePageSections />
        <FundedBy />
      </div>
    </HomeParallaxPage>
  );
}
