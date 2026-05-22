import { principalInvestigator, site } from "@/lib/content";

const footerLink = "transition-colors duration-200 text-slate-600 hover:text-blue-700";

const socialIconClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 8 9 5.5L21 8" />
    </svg>
  );
}

function OrcidIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#A6CE39"
        d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z"
      />
      <path
        fill="#fff"
        d="M7.6 7.53h1.8V17.2H7.6zm3.27 2.73c0-1.85 1-2.95 2.65-2.95 1.71 0 2.72 1.12 2.72 2.95 0 1.85-1 2.97-2.71 2.97-1.66 0-2.66-1.1-2.66-2.97zm1.55 0c0 1.08.43 1.73 1.12 1.73.7 0 1.12-.65 1.12-1.73 0-1.07-.42-1.72-1.12-1.72-.7 0-1.12.65-1.12 1.72z"
      />
    </svg>
  );
}

export function SiteFooter() {
  const mailtoOutlook = `mailto:${site.email}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-900">{site.name}</p>
          <p className="mt-2 whitespace-pre-line text-sm text-slate-600">{site.address.join("\n")}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Connect</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            <li>
              <a
                href={principalInvestigator.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className={socialIconClass}
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href={mailtoOutlook} className={socialIconClass} aria-label="Email (opens in your mail app, e.g. Outlook)">
                <OutlookIcon />
              </a>
            </li>
            <li>
              <a
                href={principalInvestigator.links.orcid}
                target="_blank"
                rel="noreferrer"
                className={socialIconClass}
                aria-label="ORCID record"
              >
                <OrcidIcon />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
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
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Replace placeholder content before publishing.
      </div>
    </footer>
  );
}
