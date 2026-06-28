import Link from "next/link";
import { LabLogo } from "@/components/LabLogo";
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
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:gap-6 sm:px-6 sm:py-5 lg:px-8">
        <LabLogo
          variant="mark"
          className="h-11 w-11 sm:hidden"
        />
        <LabLogo
          variant="full"
          className="hidden h-12 w-auto sm:block sm:h-14"
        />
        <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:flex-1 sm:justify-end">
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
      </div>
    </header>
  );
}
