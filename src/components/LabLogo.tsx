import Link from "next/link";

type LabLogoProps = {
  /** Compact stacked wordmark, or the same lockup at the full header size. */
  variant?: "mark" | "full";
  className?: string;
  /** When set, wraps the logo in a home link. */
  href?: string;
};

export function LabLogo({ variant = "mark", className = "", href = "/" }: LabLogoProps) {
  const compact = variant === "mark";
  const wordmark = (
    <span
      className={`flex flex-col justify-center leading-none ${compact ? "gap-1" : "gap-1.5"} ${className}`.trim()}
    >
      <span
        className={`font-heading font-semibold uppercase tracking-[0.18em] text-white ${
          compact ? "text-[0.7rem] sm:text-sm" : "text-lg xl:text-xl"
        }`}
      >
        Nanjundan
      </span>
      <span
        className={`font-semibold uppercase tracking-[0.28em] text-unisq-400 ${
          compact ? "text-[0.45rem] sm:text-[0.55rem]" : "text-[0.65rem] xl:text-xs"
        }`}
      >
        Research Group
      </span>
    </span>
  );

  if (!href) return wordmark;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 rounded-lg transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
      aria-label="Nanjundan Research Group home"
    >
      {wordmark}
    </Link>
  );
}
