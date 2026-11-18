"use client";

import type { ReactNode } from "react";

export function HomeParallaxPage({
  children,
  beforeContent,
}: {
  children: ReactNode;
  beforeContent?: ReactNode;
}) {
  return (
    <div className="home-parallax-root relative flex flex-1 flex-col text-slate-100">
      {beforeContent}
      <div className="home-parallax-content relative z-[2]">{children}</div>
    </div>
  );
}
