import Image from "next/image";
import type { ReactNode } from "react";

const socialIconClass =
  "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:h-14 sm:w-14";

const footerSocialLinkClass =
  "inline-flex items-center justify-center text-slate-700 transition hover:text-blue-800 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

function LinkedInIcon({ className = "h-6 w-6 sm:h-7 sm:w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function OutlookIcon({ className = "h-6 w-6 sm:h-7 sm:w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 8 9 5.5L21 8" />
    </svg>
  );
}

function GoogleScholarIcon({ className = "h-6 w-6 sm:h-7 sm:w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden>
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

function CircularBrandLogo({ src, large = false }: { src: string; large?: boolean }) {
  const sizeClass = large ? "h-10 w-10 sm:h-11 sm:w-11" : "h-7 w-7 sm:h-8 sm:w-8";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200/80 shadow-sm antialiased ${sizeClass}`}
    >
      <Image
        src={src}
        alt=""
        width={256}
        height={256}
        className="h-full w-full scale-[1.03] object-contain [mask-image:radial-gradient(circle,black_90%,transparent_100%)]"
        unoptimized
      />
    </span>
  );
}

function ResearchGateLogo({ large = false }: { large?: boolean }) {
  return <CircularBrandLogo src="/logos/researchgate.png" large={large} />;
}

function UnisqEmblem({ large = false }: { large?: boolean }) {
  return (
    <Image
      src="/logos/unisq-emblem.png"
      alt=""
      width={134}
      height={128}
      className={
        large
          ? "h-12 w-auto object-contain sm:h-14"
          : "h-7 w-auto translate-x-0.5 object-contain sm:h-8 sm:translate-x-1"
      }
      unoptimized
    />
  );
}

function OrcidLogo({ large = false }: { large?: boolean }) {
  return <CircularBrandLogo src="/logos/orcid.png" large={large} />;
}

export type SocialProfileLinksProps = {
  email?: string;
  linkedin?: string;
  scholar?: string;
  researchGate?: string;
  orcid?: string;
  universityBio?: string;
  size?: "default" | "large";
  className?: string;
};

export function SocialProfileLinks({
  email,
  linkedin,
  scholar,
  researchGate,
  orcid,
  universityBio,
  size = "default",
  className = "",
}: SocialProfileLinksProps) {
  const isLarge = size === "large";
  const linkClass = isLarge ? footerSocialLinkClass : socialIconClass;
  const svgClass = isLarge ? "h-10 w-10 sm:h-11 sm:w-11" : "h-6 w-6 sm:h-7 sm:w-7";
  const items = [
    universityBio
      ? { href: universityBio, label: "UniSQ researcher profile", external: true, icon: <UnisqEmblem large={isLarge} /> }
      : null,
    linkedin
      ? { href: linkedin, label: "LinkedIn profile", external: true, icon: <LinkedInIcon className={svgClass} /> }
      : null,
    scholar
      ? { href: scholar, label: "Google Scholar profile", external: true, icon: <GoogleScholarIcon className={svgClass} /> }
      : null,
    researchGate
      ? { href: researchGate, label: "ResearchGate profile", external: true, icon: <ResearchGateLogo large={isLarge} /> }
      : null,
    email ? { href: `mailto:${email}`, label: "Email", external: false, icon: <OutlookIcon className={svgClass} /> } : null,
    orcid ? { href: orcid, label: "ORCID record", external: true, icon: <OrcidLogo large={isLarge} /> } : null,
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    external: boolean;
    icon: ReactNode;
  }>;

  if (items.length === 0) return null;

  return (
    <ul
      className={`flex flex-wrap ${isLarge ? "gap-7 sm:gap-9" : "gap-3 sm:gap-4"} ${className}`.trim()}
    >
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className={linkClass}
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
