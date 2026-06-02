import Link from "next/link";
import { TeamNavDropdown } from "@/components/TeamNavDropdown";
import { navItems } from "@/lib/content";

const navLinkClass =
  "relative rounded-lg px-3 py-2 text-sm text-slate-300 transition duration-200 " +
  "hover:bg-white/10 hover:text-white " +
  "active:scale-[0.98] " +
  "after:pointer-events-none after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-center after:scale-x-0 after:rounded-full after:bg-sky-300/90 after:transition after:duration-200 hover:after:scale-x-100";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-lab-950/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex w-full flex-wrap items-center justify-center gap-x-1 gap-y-1">
          {navItems.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
          <TeamNavDropdown />
          {navItems.slice(2).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
