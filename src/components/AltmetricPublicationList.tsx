"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

type AltmetricWindow = Window & {
  _altmetric_embed_init?: (context?: Element | string | null) => void;
};

function runAltmetricInit(context: Element | null) {
  const w = window as AltmetricWindow;
  if (context) {
    w._altmetric_embed_init?.(context);
  } else {
    w._altmetric_embed_init?.();
  }
}

/**
 * Loads Altmetric’s free embed script once and re-inits badges when the list
 * changes (filters, pagination). @see https://docs.altmetric.com/badges/getting-started/
 */
export function AltmetricPublicationList({
  refreshKey,
  children,
}: {
  refreshKey: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    runAltmetricInit(containerRef.current);
  }, [refreshKey]);

  return (
    <>
      <Script
        src="https://embed.altmetric.com/assets/embed.js"
        strategy="afterInteractive"
        onLoad={() => runAltmetricInit(containerRef.current)}
      />
      <div ref={containerRef}>{children}</div>
    </>
  );
}
