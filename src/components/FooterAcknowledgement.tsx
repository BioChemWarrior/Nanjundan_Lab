"use client";

import { usePathname } from "next/navigation";

const acknowledgementText =
  "The Nanjundan Lab acknowledges the Traditional Custodians of Country throughout Australia and their connections to land, sea, and community. We pay our respect to their Elders past and present and extend that respect to all Aboriginal and Torres Strait Islander peoples today.";

export function FooterAcknowledgement() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <section className="relative h-20 w-full overflow-hidden border-t border-slate-200 sm:h-24" aria-label="Acknowledgement of Country">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src="/acknowledgement/traditional-custodians.png"
          alt=""
          className="pointer-events-none h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-slate-900/25" aria-hidden />
      <p className="absolute bottom-1 right-2 z-[1] text-[8px] leading-tight text-white/80 sm:bottom-1.5 sm:right-3 sm:text-[9px]">
        Colorful texture and background ·{" "}
        <a
          href="https://www.rawpixel.com/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 transition hover:text-white"
        >
          rawpixel.com
        </a>
      </p>
      <div className="relative flex h-full items-center justify-center px-4 sm:px-6">
        <div className="max-w-md rounded-lg border border-white/30 bg-white/40 px-3 py-1.5 text-center shadow-sm backdrop-blur-md sm:max-w-lg sm:px-4 sm:py-2">
          <p className="text-pretty text-[10px] font-bold leading-tight text-slate-800/90 sm:text-[11px]">{acknowledgementText}</p>
        </div>
      </div>
    </section>
  );
}
