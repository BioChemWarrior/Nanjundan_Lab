"use client";

import { createContext, useContext, type ReactNode } from "react";
import { type ParallaxMotion } from "@/hooks/useParallaxPointer";
import { HomeLightBlooms } from "@/components/HomeLightBlooms";
import { layerTransform } from "@/lib/parallax";

const INITIAL: ParallaxMotion = { x: 0, y: 0, scroll: 0 };

const HomeParallaxContext = createContext<ParallaxMotion>(INITIAL);

export function useHomeParallax() {
  return useContext(HomeParallaxContext);
}

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  depth?: number;
  scrollFactor?: number;
  invert?: boolean;
};

export function ParallaxLayer({
  children,
  className = "",
  depth = 10,
  scrollFactor = 0,
  invert = false,
}: ParallaxLayerProps) {
  const motion = useHomeParallax();
  return (
    <div
      className={`will-change-transform ${className}`.trim()}
      style={{ transform: layerTransform(motion, depth, scrollFactor, invert) }}
    >
      {children}
    </div>
  );
}

export function HomeParallaxPage({
  children,
  beforeContent,
}: {
  children: ReactNode;
  beforeContent?: ReactNode;
}) {
  return (
    <HomeParallaxContext.Provider value={INITIAL}>
      <div className="home-parallax-root relative flex flex-1 flex-col text-slate-100">
        <HomeLightBlooms />
        {beforeContent}
        <div className="home-parallax-content relative z-[2]">{children}</div>
      </div>
    </HomeParallaxContext.Provider>
  );
}
