import Image from "next/image";
import type { ReactNode } from "react";

const socialIconClass =
  "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:h-14 sm:w-14";

const footerSocialIconClass =
  "inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:h-16 sm:w-16";

function LinkedInIcon() {
  return (
    <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 8 9 5.5L21 8" />
    </svg>
  );
}

function GoogleScholarIcon() {
  return (
    <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M256 411.12 0 202.667 256 0z" fill="#4285F4" />
      <path d="M256 411.12 512 202.667 256 0z" fill="#356AC3" />
      <circle cx="256" cy="362.667" r="149.333" fill="#A0C3FF" />
      <path
        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
        fill="#76A7FA"
      />
    </svg>
  );
}

function UnisqEmblem() {
  return (
    <Image
      src="/logos/unisq-emblem.png"
      alt=""
      width={134}
      height={128}
      className="h-7 w-auto translate-x-0.5 object-contain sm:h-8 sm:translate-x-1"
      unoptimized
    />
  );
}

function OrcidIcon() {
  return (
    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" aria-hidden>
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

export type SocialProfileLinksProps = {
  email?: string;
  linkedin?: string;
  scholar?: string;
  orcid?: string;
  universityBio?: string;
  size?: "default" | "large";
  className?: string;
};

export function SocialProfileLinks({
  email,
  linkedin,
  scholar,
  orcid,
  universityBio,
  size = "default",
  className = "",
}: SocialProfileLinksProps) {
  const iconClass = size === "large" ? footerSocialIconClass : socialIconClass;
  const items = [
    linkedin
      ? { href: linkedin, label: "LinkedIn profile", external: true, icon: <LinkedInIcon /> }
      : null,
    universityBio
      ? { href: universityBio, label: "UniSQ researcher profile", external: true, icon: <UnisqEmblem /> }
      : null,
    scholar
      ? { href: scholar, label: "Google Scholar profile", external: true, icon: <GoogleScholarIcon /> }
      : null,
    email ? { href: `mailto:${email}`, label: "Email", external: false, icon: <OutlookIcon /> } : null,
    orcid ? { href: orcid, label: "ORCID record", external: true, icon: <OrcidIcon /> } : null,
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    external: boolean;
    icon: ReactNode;
  }>;

  if (items.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-3 sm:gap-4 ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className={iconClass}
            aria-label={item.label}
            {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
