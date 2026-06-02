"use client";

import Image from "next/image";
import { ParallaxLayer } from "@/context/HomeParallaxContext";
import { fundingPartners } from "@/lib/content";

/** ARC & UniSQ — display caps scaled down another ~20%. */
function logoSizeClass(src: string) {
  if (src === "/funding/arc.png") {
    return "h-auto w-[500px] max-w-[min(100vw-2rem,500px)] object-contain object-center";
  }
  return "h-auto w-auto max-w-[min(100vw-2rem,1690px)] max-h-[27.12rem] object-contain object-center sm:max-h-[33.12rem] md:max-h-[39.12rem] lg:max-h-[42.24rem]";
}

function logoSizesAttr(src: string) {
  return src === "/funding/arc.png" ? "(max-width: 640px) 92vw, 500px" : "(max-width: 640px) 92vw, 1690px";
}

export function FundedBy() {
  return (
    <section className="mx-auto w-full max-w-[100rem] px-4 sm:px-6 lg:px-8" aria-label="Funding and institutional support">
      <ParallaxLayer depth={6} scrollFactor={-6}>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Funded by</p>
      </ParallaxLayer>
      <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-16 border-t border-white/[0.08] pt-10 sm:flex-row sm:gap-24 lg:gap-32">
        {fundingPartners.map((partner, index) => (
          <ParallaxLayer key={partner.name} depth={8 + index * 4} scrollFactor={-8 - index * 2} invert={index % 2 === 1}>
            <a
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="relative block shrink-0 opacity-90 transition hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className={logoSizeClass(partner.src)}
                sizes={logoSizesAttr(partner.src)}
                unoptimized
              />
            </a>
          </ParallaxLayer>
        ))}
      </div>
    </section>
  );
}
