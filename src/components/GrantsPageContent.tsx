import {
  competitiveGrants,
  grantsPageCopy,
  individualFellowships,
} from "@/lib/content";

type GrantEntry = {
  year: number;
  role?: string | null;
  title: string;
  topic?: string | null;
  code?: string | null;
  amount?: string | null;
  href?: string | null;
};

function ExternalArrow() {
  return (
    <svg
      aria-hidden
      className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-unisq-600"
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
    "flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 sm:flex-row",
    interactive
      ? "group hover:-translate-y-0.5 hover:border-unisq-300/60 hover:shadow-unisq-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unisq-500"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <div className="flex shrink-0 items-center justify-center border-b border-slate-200/80 bg-gradient-to-r from-unisq-50 to-unisq-100/60 px-4 py-3 sm:w-28 sm:border-b-0 sm:border-r sm:bg-gradient-to-b sm:px-3 sm:py-6">
        <span className="text-xl font-semibold tabular-nums tracking-tight text-unisq-800 sm:text-3xl">
          {entry.year}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 items-start gap-3 bg-gradient-to-br from-white to-unisq-50/20 p-4 sm:gap-4 sm:p-6">
        <div className="min-w-0 flex-1 space-y-2.5 sm:space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
            <h3 className="min-w-0 flex-1 text-pretty text-[0.95rem] font-semibold leading-snug text-slate-900 transition group-hover:text-unisq-900 sm:text-lg">
              {entry.title}
            </h3>
            {entry.role ? (
              <span className="inline-flex shrink-0 rounded-md bg-unisq-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-unisq-800 ring-1 ring-unisq-200/70">
                {entry.role}
              </span>
            ) : null}
          </div>
          {entry.topic ? (
            <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">{entry.topic}</p>
          ) : null}
          {entry.amount ? (
            <p className="text-xs font-semibold tabular-nums text-slate-800 sm:text-sm">{entry.amount}</p>
          ) : null}
          {entry.code ? (
            <p className="break-all font-mono text-[11px] tracking-wide text-slate-500 sm:break-normal sm:text-xs">
              {entry.code}
            </p>
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
    <section className="space-y-6 sm:space-y-8">
      <div className="space-y-2 text-center sm:text-left">
        {eyebrow ? <p className="eyebrow-glow-light">{eyebrow}</p> : null}
        <h2 className="text-pretty text-xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      </div>

      <ul className="space-y-3 border-t border-slate-200 pt-6 sm:pt-8">
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
    <div className="w-full space-y-12 sm:space-y-20">
      <section className="space-y-6 text-center sm:space-y-8">
        <div className="mx-auto max-w-6xl space-y-3 sm:space-y-4">
          <p className="eyebrow-glow-light">{grantsPageCopy.introEyebrow}</p>
          <h2 className="text-pretty text-xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {grantsPageCopy.introTitle}
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-lg">
            {grantsPageCopy.introBody}
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-2.5 sm:gap-4">
          <div className="rounded-2xl border border-unisq-200/40 bg-gradient-to-br from-white to-unisq-50/30 px-3 py-3.5 text-center shadow-unisq-glow-sm sm:px-4 sm:py-4">
            <p className="text-xl font-semibold tracking-tight text-unisq-800 sm:text-3xl">$5M+</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Research funding
            </p>
          </div>
          <div className="rounded-2xl border border-unisq-200/40 bg-gradient-to-br from-white to-unisq-50/30 px-3 py-3.5 text-center shadow-unisq-glow-sm sm:px-4 sm:py-4">
            <p className="text-xl font-semibold tracking-tight text-unisq-800 sm:text-3xl">{grantCount}</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Awards listed
            </p>
          </div>
        </div>
      </section>

      <GrantSection eyebrow="Competitive funding" title="Awards and competitive grants" entries={competitiveGrants} />
      <GrantSection title="Individual fellowships" entries={individualFellowships} />
    </div>
  );
}
