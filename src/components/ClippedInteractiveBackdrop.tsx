"use client";

import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HomeHeroVideo } from "@/components/HomeHeroVideo";
import { InteractiveBackground } from "@/components/InteractiveBackground";

function measureHeroStripBottom() {
  const strip = document.querySelector("[data-page-hero-strip]");
  if (strip) {
    return Math.ceil(strip.getBoundingClientRect().bottom);
  }

  const header = document.querySelector("header");
  return header ? Math.ceil(header.getBoundingClientRect().bottom) : 0;
}

/** Home: hero video only. Other routes: particle band clipped to the page hero heading strip. */
export function ClippedInteractiveBackdrop() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [stripBottom, setStripBottom] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (isHome) {
      setStripBottom(null);
      return;
    }

    const update = () => setStripBottom(measureHeroStripBottom());

    update();

    const strip = document.querySelector("[data-page-hero-strip]");
    const observer = new ResizeObserver(update);
    if (strip) observer.observe(strip);

    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [pathname, isHome]);

  const clipPath = isHome
    ? undefined
    : stripBottom && stripBottom > 0
      ? `polygon(0 0, 100% 0, 100% ${stripBottom}px, 0 ${stripBottom}px)`
      : "polygon(0 0, 100% 0, 100% 0, 0 0)";

  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden" style={clipPath ? { clipPath } : undefined}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020b1a]" />
        {isHome ? (
          <div className="absolute inset-0">
            <HomeHeroVideo />
          </div>
        ) : (
          <div className="absolute inset-0">
            <InteractiveBackground parallax={false} />
          </div>
        )}
      </div>
    </div>
  );
}
