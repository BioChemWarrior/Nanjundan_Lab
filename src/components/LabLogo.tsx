import Image from "next/image";
import Link from "next/link";

type LabLogoProps = {
  /** Icon only, or full lockup with wordmark. */
  variant?: "mark" | "full";
  className?: string;
  /** When set, wraps the logo in a home link. */
  href?: string;
};

const sources = {
  mark: "/logos/nanjundan-lab-mark.svg",
  full: "/logos/nanjundan-lab.svg",
} as const;

const dimensions = {
  mark: { width: 64, height: 64 },
  full: { width: 300, height: 72 },
} as const;

export function LabLogo({ variant = "mark", className = "", href = "/" }: LabLogoProps) {
  const { width, height } = dimensions[variant];

  const image = (
    <Image
      src={sources[variant]}
      alt="Nanjundan Lab"
      width={width}
      height={height}
      className={className}
      priority
      unoptimized
    />
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 rounded-lg transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
      aria-label="Nanjundan Lab home"
    >
      {image}
    </Link>
  );
}
