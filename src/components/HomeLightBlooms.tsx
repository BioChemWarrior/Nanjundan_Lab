"use client";

/** Full-viewport cyan/blue glow orbs — fixed behind home content, above the particle canvas. */
export function HomeLightBlooms() {
  return (
    <div
      className="home-light-blooms pointer-events-none fixed inset-0 z-[1] overflow-visible"
      aria-hidden
    >
      <div
        className="absolute left-[10%] top-[16%] h-[20rem] w-[20rem] rounded-full bg-cyan-400/20 blur-[80px] sm:h-[24rem] sm:w-[24rem]"
      />
      <div
        className="absolute right-[8%] top-[30%] h-[17rem] w-[17rem] rounded-full bg-blue-500/16 blur-[80px] sm:h-80 sm:w-80"
      />
      <div
        className="absolute left-1/2 top-[62%] h-[14rem] w-[min(92vw,32rem)] -translate-x-1/2 rounded-full bg-sky-300/14 blur-[90px]"
      />
    </div>
  );
}
