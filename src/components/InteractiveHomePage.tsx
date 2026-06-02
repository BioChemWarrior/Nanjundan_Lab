"use client";

import { FundedBy } from "@/components/FundedBy";
import { HomeParallaxPage, useHomeParallax } from "@/context/HomeParallaxContext";
import { labBrand } from "@/lib/content";
import { layerTransform } from "@/lib/parallax";

function HomeHero() {
  const motion = useHomeParallax();
  const tiltX = motion.y * -2.25;
  const tiltY = motion.x * 2.25;

  return (
    <section className="relative flex min-h-[min(88svh,52rem)] flex-col items-center justify-center overflow-hidden px-6 pb-10 pt-6 text-center sm:pb-12 sm:pt-8">
      {/* Background hero video (must exist under `public/videos/hero.mp4`) */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <video
          src="/videos/hero.mp4"
          className="h-full w-full object-cover opacity-40"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          aria-hidden
        />
        {/* Extra-smooth fade so the hero video blends into the page background. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,11,26,0) 0%, rgba(2,11,26,0.08) 42%, rgba(2,11,26,0.22) 64%, rgba(2,11,26,0.45) 80%, rgba(2,11,26,0.78) 92%, rgba(2,11,26,0.96) 100%)",
          }}
        />
      </div>

      <div
        className="relative z-[2] flex w-full max-w-5xl flex-col items-center will-change-transform"
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(0, calc(${motion.scroll * -20}px - 44px), 0)`,
          transformStyle: "preserve-3d",
        }}
      >
        <h1
          className="home-hero-title text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl font-[var(--font-space-grotesk)]"
          style={{ transform: layerTransform(motion, 10, 6, true) }}
        >
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

        <p
          className="mt-6 max-w-none whitespace-nowrap text-center text-xl font-bold tracking-wide text-slate-200 sm:mt-7 sm:text-2xl md:text-3xl"
          style={{ transform: layerTransform(motion, 6, 4, true) }}
        >
          {labBrand.subtitle}
        </p>
      </div>
    </section>
  );
}

function HomeAbout() {
  return (
    <section className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-md">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About Nanjundan Lab</h2>
        <p className="mt-2 text-sm text-blue-300/90">Advanced materials, clean energy, and energy storage innovation</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          Nanjundan Lab develops advanced materials and electrochemical technologies for clean energy and circular-resource
          systems. Our published work and ongoing projects span graphene and hybrid nanomaterials, next-generation batteries
          and supercapacitors, and translation from lab chemistry to practical engineering outcomes.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Current focus areas include critical mineral recovery from e-waste and secondary resources, sustainable bioleaching
          and bio-assisted extraction pathways, and hydrogen generation from seawater-integrated systems. The lab combines
          materials design, process innovation, and industry-linked research to build scalable solutions for energy storage
          and decarbonization. Nanjundan Lab is part of the Centre for Future Materials at UniSQ, strengthening
          interdisciplinary collaboration and translation of advanced materials research into real-world clean-energy impact.
        </p>
      </div>
    </section>
  );
}

export function InteractiveHomePage() {
  return (
    <HomeParallaxPage>
      <HomeHero />

      <div className="space-y-16 pb-24 sm:space-y-20">
        <HomeAbout />
        <FundedBy />
      </div>
    </HomeParallaxPage>
  );
}
