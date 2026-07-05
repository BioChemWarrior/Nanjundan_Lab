"use client";

/** Full-viewport cyan/blue glow orbs — fixed behind home content, above the particle canvas. */
export function HomeLightBlooms() {
  return (
    <div
      className="home-light-blooms pointer-events-none fixed inset-0 z-[1] overflow-visible"
      aria-hidden
    >
      <div className="absolute left-1/2 top-[42%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/22 blur-[100px] sm:h-[32rem] sm:w-[32rem]" />
      <div className="absolute right-[12%] top-[22%] h-[16rem] w-[16rem] rounded-full bg-unisq-500/14 blur-[90px] sm:h-[20rem] sm:w-[20rem]" />
      <div className="absolute left-[10%] top-[16%] h-[20rem] w-[20rem] rounded-full bg-cyan-400/16 blur-[80px] sm:h-[24rem] sm:w-[24rem]" />
      <div className="absolute right-[8%] top-[30%] h-[17rem] w-[17rem] rounded-full bg-blue-500/14 blur-[80px] sm:h-80 sm:w-80" />
      <div className="absolute left-1/2 top-[72%] h-[14rem] w-[min(92vw,32rem)] -translate-x-1/2 rounded-full bg-sky-300/12 blur-[90px]" />
    </div>
  );
}
