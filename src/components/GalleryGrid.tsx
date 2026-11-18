"use client";

import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/content";

type Props = {
  items: readonly GalleryItem[];
  imageClass: string;
  className?: string;
};

export function GalleryGrid({ items, imageClass, className }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const selected = index === null ? null : items[index];

  useEffect(() => {
    if (index === null) return;
    dialogRef.current?.showModal();
  }, [index]);

  useEffect(() => {
    if (index === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current + 1) % items.length));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current - 1 + items.length) % items.length));
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length]);

  const closeDialog = () => setIndex(null);

  if (items.length === 0) return null;

  return (
    <>
      <ul className={["grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3", className].filter(Boolean).join(" ")}>
        {items.map((item, itemIndex) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setIndex(itemIndex)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-unisq-300/60 hover:shadow-unisq-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unisq-500"
              aria-haspopup="dialog"
            >
              <div className={`overflow-hidden bg-slate-50 ${imageClass}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-center transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-4 py-3 sm:px-5 sm:py-4">
                <h3 className="text-pretty text-sm font-semibold text-slate-900 transition group-hover:text-unisq-800 sm:text-base">
                  {item.title}
                </h3>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={closeDialog}
        className="fixed inset-0 z-50 m-auto w-[min(100vw-1.5rem,56rem)] max-h-[min(100vh-1.5rem,92vh)] overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-xl backdrop:bg-slate-900/55 backdrop:backdrop-blur-sm"
        aria-labelledby={selected ? `gallery-dialog-title-${selected.id}` : undefined}
      >
        {selected ? (
          <div className="flex max-h-[min(100vh-1.5rem,92vh)] flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-4 py-3 sm:px-6 sm:py-4">
              <div className="min-w-0">
                <h2
                  id={`gallery-dialog-title-${selected.id}`}
                  className="text-pretty text-lg font-semibold text-slate-900 sm:text-xl"
                >
                  {selected.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close image"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-slate-950/95 px-10 py-4 sm:px-14">
              {items.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIndex((current) => (current === null ? current : (current - 1 + items.length) % items.length))}
                    className="absolute left-2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-3"
                    aria-label="Previous image"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIndex((current) => (current === null ? current : (current + 1) % items.length))}
                    className="absolute right-2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-3"
                    aria-label="Next image"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              ) : null}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.src}
                alt={selected.title}
                className="max-h-[min(68vh,40rem)] w-full object-contain"
              />
            </div>

            {selected.href ? (
              <div className="border-t border-slate-100 px-4 py-3 sm:px-6">
                <a
                  href={selected.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-glow inline-flex text-sm"
                >
                  View journal →
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
