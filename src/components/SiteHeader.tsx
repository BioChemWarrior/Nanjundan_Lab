import Link from "next/link";
import { TeamNavDropdown } from "@/components/TeamNavDropdown";
import { navItems } from "@/lib/content";

const navLinkClass =
  "relative rounded-lg px-4 py-2.5 text-lg text-slate-300 transition duration-200 sm:px-5 sm:py-3 sm:text-xl " +
  "hover:bg-white/10 hover:text-white " +
  "active:scale-[0.98] " +
  "after:pointer-events-none after:absolute after:inset-x-4 after:bottom-1.5 after:h-px after:origin-center after:scale-x-0 after:rounded-full after:bg-sky-300/90 after:transition after:duration-200 hover:after:scale-x-100";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-lab-950/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div aria-hidden className="w-16 shrink-0 sm:w-[4.5rem] xl:hidden" />
        <nav className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-2">
          {navItems.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
          <TeamNavDropdown />
          {navItems.slice(3).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div aria-hidden className="w-16 shrink-0 sm:w-[4.5rem] xl:hidden" />
      </div>
    </header>
  );
}
