"use client";

import { useCallback, useEffect, useRef } from "react";
import type { JournalCover } from "@/lib/journalCovers";

type Props = {
  covers: JournalCover[];
};

const slideClass =
  "group block w-[calc((100%-2.25rem)/4)] min-w-[calc((100%-2.25rem)/4)] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-300/60";

export function JournalCoverCarousel({ covers }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const loopCovers = [...covers, ...covers, ...covers];

  const getSetWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || covers.length === 0) return 0;
    return track.scrollWidth / 3;
  }, [covers.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || covers.length === 0) return;

    const jumpToMiddle = () => {
      const width = getSetWidth();
      if (width > 0) track.scrollLeft = width;
    };

    jumpToMiddle();

    const onScroll = () => {
      const width = getSetWidth();
      if (width <= 0) return;
      if (track.scrollLeft <= 1) {
        track.scrollLeft += width;
      } else if (track.scrollLeft >= width * 2 - 1) {
        track.scrollLeft -= width;
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", jumpToMiddle);

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", jumpToMiddle);
    };
  }, [covers, getSetWidth]);

  if (covers.length === 0) return null;

  return (
    <div
      ref={trackRef}
      className="flex gap-3 overflow-x-auto scroll-smooth pb-3 [scrollbar-color:rgb(148_163_184)_rgb(241_245_249)] [scrollbar-width:thin] snap-x snap-mandatory"
      aria-label="Featured journal covers"
    >
      {loopCovers.map((entry, index) => (
        <a
          key={`${entry.journal}-${index}`}
          href={entry.coverPageUrl}
          target="_blank"
          rel="noreferrer"
          className={slideClass}
          aria-label={`${entry.journal} cover page`}
        >
          <img
            src={entry.coverImageUrl}
            alt={`${entry.journal} cover page`}
            className="aspect-[3/4] w-full bg-slate-50 object-contain object-center transition duration-200 group-hover:scale-[1.02]"
            loading="lazy"
            draggable={false}
          />
        </a>
      ))}
    </div>
  );
}
