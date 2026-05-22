"use client";

import type { ReactNode } from "react";

/** Transparent so the clipped interactive backdrop shows through hero strips; each page wraps body copy in `bg-white`. */
export function SiteMain({ children }: { children: ReactNode }) {
  return <main className="relative z-10 flex flex-1 flex-col">{children}</main>;
}
