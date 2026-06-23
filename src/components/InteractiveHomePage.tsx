"use client";

import { FundedBy } from "@/components/FundedBy";
import { HomeParallaxPage } from "@/context/HomeParallaxContext";
import { labBrand } from "@/lib/content";

function HomeHeroHeadline() {
  return (
    <>
      <h1 className="home-hero-title text-balance text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl font-[var(--font-space-grotesk)]">
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
              <span className="text-emerald-400 drop-shadow-[0_0_16px_rgba(16,185,129,0.35)]">
                {last}
              </span>
            </>
          );
        })()}
      </h1>

      <p className="mt-6 max-w-6xl text-balance text-center font-[var(--font-space-grotesk)] text-xl font-light tracking-wide text-slate-200 sm:mt-7 sm:text-2xl md:text-3xl">
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

function HomeHeroRegion() {
  return (
    <section className="relative isolate min-h-[min(88svh,52rem)] overflow-hidden px-6 pb-10 pt-14 text-center sm:pb-12 sm:pt-20 md:pt-24">
      {/* Background hero video (must exist under `public/videos/hero.mp4`) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <video
          src="/videos/hero.mp4"
          className="h-full w-full object-cover opacity-40"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,11,26,0) 0%, rgba(2,11,26,0.08) 42%, rgba(2,11,26,0.22) 64%, rgba(2,11,26,0.45) 80%, rgba(2,11,26,0.78) 92%, rgba(2,11,26,0.96) 100%)",
          }}
        />
      </div>

      <div className="relative z-[2] flex flex-col items-center">
        <HomeHeroHeadline />
        <HomeAbout />
      </div>
    </section>
  );
}

function HomeAbout() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20 md:pt-24 lg:px-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About The Nanjundan Lab</h2>
      <p className="mt-2 text-base text-white sm:text-lg">Advanced materials, clean energy, and energy storage innovation</p>
      <p className="mt-4 text-base leading-relaxed text-white sm:text-lg">
        Nanjundan Lab develops advanced materials and electrochemical technologies for clean energy and circular-resource
        systems. Our published work and ongoing projects span graphene and hybrid nanomaterials, next-generation batteries
        and supercapacitors, and translation from lab chemistry to practical engineering outcomes.
      </p>
      <p className="mt-3 text-base leading-relaxed text-white sm:text-lg">
        Current focus areas include critical mineral recovery from e-waste and secondary resources, sustainable bioleaching
        and bio-assisted extraction pathways, and hydrogen generation from seawater-integrated systems. The lab combines
        materials design, process innovation, and industry-linked research to build scalable solutions for energy storage
        and decarbonization. Nanjundan Lab is part of the Centre for Future Materials at UniSQ, strengthening
        interdisciplinary collaboration and translation of advanced materials research into real-world clean-energy impact.
      </p>
    </section>
  );
}

export function InteractiveHomePage() {
  return (
    <HomeParallaxPage>
      <HomeHeroRegion />

      <div className="space-y-16 pb-24 sm:space-y-20">
        <FundedBy />
      </div>
    </HomeParallaxPage>
  );
}
