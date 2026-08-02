"use client";

import { usePathname } from "next/navigation";

const acknowledgementText =
  "The Nanjundan Lab acknowledges the Traditional Custodians of Country throughout Australia and their connections to land, sea, and community. We pay our respect to their Elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples today.";

export function FooterAcknowledgement() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <section className="relative h-12 w-full overflow-hidden border-t border-slate-200 sm:h-14" aria-label="Acknowledgement of Country">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src="/acknowledgement/traditional-custodians.png"
          alt=""
          className="pointer-events-none h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-slate-900/25" aria-hidden />
      <p className="absolute bottom-0.5 right-2 z-[1] text-[7px] leading-tight text-white/80 sm:bottom-1 sm:right-3 sm:text-[8px]">
        Colorful texture and background ·{" "}
        <a
          href="https://www.rawpixel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition hover:text-white"
        >
          rawpixel.com
        </a>
      </p>
      <div className="relative flex h-full items-center justify-center px-3 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl rounded-lg border border-white/30 bg-white/40 px-4 py-1 text-center shadow-sm backdrop-blur-md sm:px-6 sm:py-1">
          <p className="text-pretty text-[10px] font-bold leading-snug text-slate-800/90 sm:text-xs sm:leading-tight">{acknowledgementText}</p>
        </div>
      </div>
    </section>
  );
}
