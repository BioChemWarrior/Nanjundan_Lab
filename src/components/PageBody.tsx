import type { ElementType, ReactNode } from "react";

/** Shared horizontal bounds for page copy — aligned with header/footer (`max-w-6xl`). */
export const pageContentClass = "mx-auto w-full max-w-6xl";

type PageBodyProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function PageBodyInner({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={[pageContentClass, className].filter(Boolean).join(" ")}>{children}</div>;
}

/** White content area below page hero strips; grows to fill the viewport above the footer. */
export function PageBody({ children, className, as: Tag = "div" }: PageBodyProps) {
  return (
    <Tag
      className={[
        "relative isolate flex flex-1 flex-col overflow-hidden bg-white text-slate-900 shadow-[inset_0_2px_0_0_rgba(255,184,77,0.2)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div aria-hidden className="page-body-atmosphere pointer-events-none absolute inset-0" />
      <div className="relative z-10 flex min-w-0 flex-1 flex-col px-4 py-8 sm:px-6 sm:py-12 lg:px-8">{children}</div>
    </Tag>
  );
}
