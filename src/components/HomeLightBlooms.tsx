"use client";

import type { ReactNode } from "react";
import { useHomeParallax } from "@/context/HomeParallaxContext";
import { layerTransform } from "@/lib/parallax";

function ParallaxBloom({
  depth,
  invert = false,
  className,
  children,
}: {
  depth: number;
  invert?: boolean;
  className: string;
  children: ReactNode;
}) {
  const motion = useHomeParallax();

  return (
    <div className={className} style={{ transform: layerTransform(motion, depth, 0, invert) }}>
      {children}
    </div>
  );
}

/** Full-viewport cyan/blue glow orbs — fixed behind home content, above the particle canvas. */
export function HomeLightBlooms() {
  return (
    <div
      className="home-light-blooms pointer-events-none fixed inset-0 z-[1] overflow-visible"
      aria-hidden
    >
      <ParallaxBloom depth={6} invert className="absolute left-1/2 top-[42%]">
        <div className="h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/22 blur-[100px] sm:h-[32rem] sm:w-[32rem]" />
      </ParallaxBloom>
      <ParallaxBloom depth={12} invert className="absolute right-[12%] top-[22%]">
        <div className="h-[16rem] w-[16rem] rounded-full bg-unisq-500/14 blur-[90px] sm:h-[20rem] sm:w-[20rem]" />
      </ParallaxBloom>
      <ParallaxBloom depth={16} className="absolute left-[10%] top-[16%]">
        <div className="h-[20rem] w-[20rem] rounded-full bg-cyan-400/16 blur-[80px] sm:h-[24rem] sm:w-[24rem]" />
      </ParallaxBloom>
      <ParallaxBloom depth={10} invert className="absolute right-[8%] top-[30%]">
        <div className="h-[17rem] w-[17rem] rounded-full bg-blue-500/14 blur-[80px] sm:h-80 sm:w-80" />
      </ParallaxBloom>
      <ParallaxBloom depth={5} invert className="absolute left-1/2 top-[72%]">
        <div className="h-[14rem] w-[min(92vw,32rem)] -translate-x-1/2 rounded-full bg-sky-300/12 blur-[90px]" />
      </ParallaxBloom>
    </div>
  );
}
