"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { teamNavDropdown } from "@/lib/content";

const triggerClass =
  "relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-300 transition duration-200 " +
  "hover:bg-white/10 hover:text-white active:scale-[0.98] " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";

const menuLinkClass =
  "block rounded-lg px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white";

export function TeamNavDropdown() {
  const pathname = usePathname();
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const isTeamActive = pathname === "/team" || pathname.startsWith("/team/");

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) close();
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open, close]);

  useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className={`${triggerClass}${isTeamActive ? " bg-white/10 text-white" : ""}`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        Team
        <svg
          aria-hidden
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-2 min-w-[15.5rem] -translate-x-1/2 rounded-xl border border-white/10 bg-lab-950/95 p-1.5 shadow-xl backdrop-blur-xl"
        >
          {teamNavDropdown.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={`${menuLinkClass}${active ? " bg-white/10 text-white" : ""}`}
                onClick={close}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
