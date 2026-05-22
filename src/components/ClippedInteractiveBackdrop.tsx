"use client";

import { usePathname } from "next/navigation";
import { InteractiveBackground } from "@/components/InteractiveBackground";

/** Home: full-viewport band. Every other route: same 32rem top band as /team and /publications. */
export function ClippedInteractiveBackdrop() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const clipPath = isHome
    ? "polygon(0 0, 100% 0, 100% 100svh, 0 100svh)"
    : "polygon(0 0, 100% 0, 100% 32rem, 0 32rem)";

  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden" style={{ clipPath }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020b1a]" />
        <div className="absolute inset-0">
          <InteractiveBackground />
        </div>
      </div>
    </div>
  );
}
