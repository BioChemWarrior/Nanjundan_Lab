"use client";

import Image from "next/image";
import { ParallaxLayer } from "@/context/HomeParallaxContext";
import { fundingPartners } from "@/lib/content";

/** Partner logos — sizes tuned so three marks fit on one row without overlap. */
function logoSizeClass(src: string) {
  if (src === "/funding/arc.png") {
    return "h-auto w-[min(100vw-2rem,260px)] object-contain object-center sm:w-[300px] lg:w-[340px]";
  }
  if (src === "/funding/disr.png") {
    return "h-auto w-[min(100vw-2rem,180px)] object-contain object-center sm:w-[210px] lg:w-[230px]";
  }
  return "h-auto max-h-[5.5rem] w-auto max-w-[min(100vw-2rem,240px)] object-contain object-center sm:max-h-[6.5rem] sm:max-w-[280px] lg:max-h-[7.5rem] lg:max-w-[320px]";
}

function logoSizesAttr(src: string) {
  if (src === "/funding/arc.png") return "(max-width: 640px) 70vw, 340px";
  if (src === "/funding/disr.png") return "(max-width: 640px) 50vw, 230px";
  return "(max-width: 640px) 60vw, 320px";
}

export function FundedBy() {
  return (
    <section className="mx-auto w-full max-w-[100rem] px-4 sm:px-6 lg:px-8" aria-label="Funding and institutional support">
      <ParallaxLayer depth={6} scrollFactor={-6}>
        <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">Nanjundan Lab Funded By</h2>
      </ParallaxLayer>
      <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-10 border-t border-white/[0.08] pt-10 sm:flex-row sm:gap-8 lg:gap-12">
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
