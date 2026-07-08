"use client";

import { useEffect, useState } from "react";
import { FundedBy } from "@/components/FundedBy";
import { HomeAboutPanel, HomePageSections } from "@/components/HomePageSections";
import { HomeParallaxPage } from "@/context/HomeParallaxContext";
import { labBrand } from "@/lib/content";

function HomeHeroHeadline() {
  const title = labBrand.title;
  const lastSpace = title.lastIndexOf(" ");
  const before = lastSpace === -1 ? title : title.slice(0, lastSpace);
  const lastRaw = lastSpace === -1 ? "" : title.slice(lastSpace + 1);
  const last = lastRaw.toLowerCase() === "lab" ? "Laboratory" : lastRaw;

  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      <h1 className="home-hero-title text-balance font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
        {lastSpace === -1 ? (
          title
        ) : (
          <>
            {before}{" "}
            <span className="text-unisq-400 drop-shadow-[0_0_20px_rgba(255,184,77,0.4)]">{last}</span>
          </>
        )}
      </h1>

      <p className="mx-auto mt-4 max-w-3xl text-balance text-sm font-light leading-relaxed tracking-wide text-slate-300 sm:mt-5 sm:text-base md:text-lg">
        {labBrand.subtitle.split("\n").map((line) => (
          <span key={line} className="block">
            {line.split(" • ").map((part, index) => (
              <span key={part}>
                {index > 0 ? " • " : null}
                <span className={part === "Next Generation Batteries" ? "whitespace-nowrap" : undefined}>{part}</span>
              </span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
}

function HomeHeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(0,212,255,0.04)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,transparent_50%,rgba(2,11,26,0.18)_85%,rgba(2,11,26,0.45)_100%)]" />
    </div>
  );
}

function HomeScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 32);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`relative z-[2] flex justify-center pt-1 transition-opacity duration-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-6 w-px bg-gradient-to-b from-unisq-400/60 to-transparent shadow-unisq-glow-sm" />
      </div>
    </div>
  );
}

export function InteractiveHomePage() {
  return (
    <HomeParallaxPage>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="relative isolate flex min-h-[calc(100svh-4.75rem)] flex-col justify-center gap-8 py-8 sm:min-h-[calc(100svh-5.5rem)] sm:gap-10 sm:py-10">
          <HomeHeroAtmosphere />

          <div className="relative z-[2] flex w-full flex-col items-stretch gap-8 sm:gap-10">
            <HomeHeroHeadline />
            <HomeAboutPanel />
          </div>

          <HomeScrollHint />
        </section>

        <div className="space-y-16 border-t border-white/[0.06] pb-20 pt-12 sm:space-y-20 sm:pb-24 sm:pt-16">
          <HomePageSections />
          <FundedBy />
        </div>
      </div>
    </HomeParallaxPage>
  );
}
