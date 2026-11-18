"use client";

import { useEffect, useRef } from "react";

/** Full-viewport hero background video — sits under the particle canvas on the home page. */
export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    if (!video) return;

    const sync = () => {
      if (reduceMotion.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {});
      }
    };

    sync();
    reduceMotion.addEventListener("change", sync);
    return () => reduceMotion.removeEventListener("change", sync);
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.38]"
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,11,26,0) 0%, rgba(2,11,26,0.08) 42%, rgba(2,11,26,0.22) 64%, rgba(2,11,26,0.45) 80%, rgba(2,11,26,0.78) 92%, rgba(2,11,26,0.96) 100%)",
        }}
      />
    </>
  );
}
