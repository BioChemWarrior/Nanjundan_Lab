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
        "flex flex-1 flex-col bg-white text-slate-900 px-4 py-10 sm:px-6 sm:py-12 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
