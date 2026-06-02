"use client";

import { usePathname } from "next/navigation";
import { InteractiveBackground } from "@/components/InteractiveBackground";

/** Home: full-screen particles. Other routes: 32rem top band as /team and /publications. */
export function ClippedInteractiveBackdrop() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const clipPath = isHome
    ? "polygon(0 72svh, 100% 72svh, 100% 100%, 0 100%)"
    : "polygon(0 0, 100% 0, 100% 32rem, 0 32rem)";

  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden" style={clipPath ? { clipPath } : undefined}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020b1a]" />
        <div className="absolute inset-0">
          <InteractiveBackground parallax={false} />
        </div>
      </div>
    </div>
  );
}
