import {
  competitiveGrants,
  grantsPageCopy,
  individualFellowships,
} from "@/lib/content";

type GrantEntry = {
  year: number;
  role: string;
  title: string;
  code?: string | null;
  amount?: string | null;
  href?: string | null;
};

function ExternalArrow() {
  return (
    <svg
      aria-hidden
      className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-unisq-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function GrantCard({ entry }: { entry: GrantEntry }) {
  const interactive = Boolean(entry.href);
  const shellClass = [
    "flex overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300",
    interactive
      ? "group hover:-translate-y-0.5 hover:border-unisq-300/60 hover:shadow-unisq-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unisq-500"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <div className="flex w-[5.5rem] shrink-0 items-center justify-center border-r border-slate-200/80 bg-gradient-to-b from-unisq-50 to-unisq-100/60 px-2 py-5 sm:w-28 sm:px-3 sm:py-6">
        <span className="text-2xl font-semibold tabular-nums tracking-tight text-unisq-800 sm:text-3xl">
          {entry.year}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 items-start gap-3 bg-gradient-to-br from-white to-unisq-50/20 p-4 sm:gap-4 sm:p-6">
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-md bg-unisq-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-unisq-800 ring-1 ring-unisq-200/70">
              {entry.role}
            </span>
            {entry.amount ? (
              <span className="text-sm font-semibold tabular-nums text-slate-800">{entry.amount}</span>
            ) : null}
          </div>
          <h3 className="text-pretty text-base font-semibold leading-snug text-slate-900 transition group-hover:text-unisq-900 sm:text-lg">
            {entry.title}
          </h3>
          {entry.code ? (
            <p className="font-mono text-xs tracking-wide text-slate-500">{entry.code}</p>
          ) : null}
        </div>
        {interactive ? <ExternalArrow /> : null}
      </div>
    </>
  );

  if (entry.href) {
    return (
      <a href={entry.href} target="_blank" rel="noopener noreferrer" className={shellClass}>
        {content}
      </a>
    );
  }

  return <div className={shellClass}>{content}</div>;
}

function GrantSection({
  eyebrow,
  title,
  entries,
}: {
  eyebrow?: string;
  title: string;
  entries: readonly GrantEntry[];
}) {
  const sorted = [...entries].sort((a, b) => b.year - a.year);
  return (
    <section className="space-y-8">
      <div className="space-y-2 text-center sm:text-left">
        {eyebrow ? <p className="eyebrow-glow-light">{eyebrow}</p> : null}
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      </div>

      <ul className="space-y-3 border-t border-slate-200 pt-8">
        {sorted.map((entry) => (
          <li key={`${entry.year}-${entry.role}-${entry.title}-${entry.code ?? ""}`}>
            <GrantCard entry={entry} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function GrantsPageContent() {
  const grantCount = competitiveGrants.length + individualFellowships.length;

  return (
    <div className="mx-auto w-full max-w-4xl space-y-16 sm:space-y-20">
      <section className="space-y-8 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="eyebrow-glow-light">{grantsPageCopy.introEyebrow}</p>
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {grantsPageCopy.introTitle}
          </h2>
          <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            {grantsPageCopy.introBody}
          </p>
        </div>

        <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-unisq-200/40 bg-gradient-to-br from-white to-unisq-50/30 px-4 py-4 text-center shadow-unisq-glow-sm">
            <p className="text-2xl font-semibold tracking-tight text-unisq-800 sm:text-3xl">$5M+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Research funding</p>
          </div>
          <div className="rounded-2xl border border-unisq-200/40 bg-gradient-to-br from-white to-unisq-50/30 px-4 py-4 text-center shadow-unisq-glow-sm">
            <p className="text-2xl font-semibold tracking-tight text-unisq-800 sm:text-3xl">{grantCount}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Awards listed</p>
          </div>
        </div>
      </section>

      <GrantSection eyebrow="Competitive funding" title="Awards and competitive grants" entries={competitiveGrants} />
      <GrantSection title="Individual fellowships" entries={individualFellowships} />
    </div>
  );
}
