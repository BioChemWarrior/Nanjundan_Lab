import Link from "next/link";
import { navItems, site } from "@/lib/content";

const footerLink = "transition-colors duration-200 hover:text-blue-300";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-lab-900/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm text-slate-500">{site.institution}</p>
          <p className="mt-4 text-sm text-slate-500">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            {navItems.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={footerLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li>
              <a href={`mailto:${site.email}`} className={footerLink}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={footerLink}>
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {site.name}. Replace placeholder content before publishing.
      </div>
    </footer>
  );
}
