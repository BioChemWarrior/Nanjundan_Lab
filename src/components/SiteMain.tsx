"use client";

import type { ReactNode } from "react";

/** Transparent so the clipped interactive backdrop shows through hero strips; pages use `PageBody` for white content. */
export function SiteMain({ children }: { children: ReactNode }) {
  return <main className="relative z-10 flex min-h-0 flex-1 flex-col">{children}</main>;
}
