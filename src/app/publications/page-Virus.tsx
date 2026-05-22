import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ContentCard";
import { principalInvestigator } from "@/lib/content";
import { getAllJournalCovers } from "@/lib/journalCovers";
import { getPublications } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications",
};

const PUBLICATIONS_PER_PAGE = 15;

type PublicationsPageProps = {
  searchParams?:
    | Promise<{ page?: string; year?: string; journal?: string; q?: string }>
    | { page?: string; year?: string; journal?: string; q?: string };
};

export default async function PublicationsPage({ searchParams }: PublicationsPageProps) {
  const params = (await searchParams) ?? {};
  const publications = await getPublications();
  const featuredJournalCovers = getAllJournalCovers();
  const yearFilter = (params.year ?? "").trim();
  const journalFilter = (params.journal ?? "").trim();
  const queryFilter = (params.q ?? "").trim().toLowerCase();
  const years = [...new Set(publications.map((pub) => pub.year).filter((year) => year > 0))].sort((a, b) => b - a);
  const journals = [...new Set(publications.map((pub) => pub.venue).filter(Boolean))].sort((a, b) => a.localeCompare(b));

  const filteredPublications = publications.filter((pub) => {
    if (yearFilter && String(pub.year) !== yearFilter) return false;
    if (journalFilter && pub.venue !== journalFilter) return false;
    if (queryFilter) {
      const haystack = `${pub.title} ${pub.venue} ${pub.doi ?? ""}`.toLowerCase();
      if (!haystack.includes(queryFilter)) return false;
    }
    return true;
  });

  const rawPage = Number.parseInt(params.page ?? "1", 10);
  const totalPages = Math.max(1, Math.ceil(filteredPublications.length / PUBLICATIONS_PER_PAGE));
  const currentPage = Number.isFinite(rawPage) ? Math.min(Math.max(rawPage, 1), totalPages) : 1;
  const startIndex = (currentPage - 1) * PUBLICATIONS_PER_PAGE;
  const paginatedPublications = filteredPublications.slice(startIndex, startIndex + PUBLICATIONS_PER_PAGE);
  const buildPageHref = (page: number) => {
    const q = new URLSearchParams();
    q.set("page", String(page));
    if (yearFilter) q.set("year", yearFilter);
    if (journalFilter) q.set("journal", journalFilter);
    if (queryFilter) q.set("q", queryFilter);
    return `/publications?${q.toString()}`;
  };

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Publications"
      />
      {featuredJournalCovers.length > 0 ? (
        <section>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {featuredJournalCovers.map((entry) => (
              <a
                key={`${entry.journal}-${entry.coverImageUrl}`}
                href={entry.coverPageUrl}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-xl border border-white/[0.08] bg-lab-900/50 transition hover:border-blue-500/25"
                aria-label={`${entry.journal} cover page`}
              >
                <img
                  src={entry.coverImageUrl}
                  alt={`${entry.journal} cover page`}
                  className="aspect-[3/4] w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </section>
      ) : null}
      {publications.length > 0 ? (
        <section className="rounded-2xl border border-white/[0.08] bg-lab-900/40 p-4 sm:p-5">
          <form method="get" action="/publications" className="grid gap-2.5 md:grid-cols-12 md:items-end">
            <label className="md:col-span-5">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Search</span>
              <input
                type="text"
                name="q"
                defaultValue={queryFilter}
                placeholder="Title, journal, DOI..."
                className="h-10 w-full rounded-lg border border-white/15 bg-lab-950/70 px-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-400/50"
              />
            </label>
            <label className="md:col-span-3">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Year</span>
              <select
                name="year"
                defaultValue={yearFilter}
                className="h-10 w-full rounded-lg border border-white/15 bg-lab-950/70 px-3 text-sm text-slate-100 outline-none transition focus:border-blue-400/50"
              >
                <option value="">All years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
            <label className="md:col-span-4">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Journal</span>
              <select
                name="journal"
                defaultValue={journalFilter}
                className="h-10 w-full rounded-lg border border-white/15 bg-lab-950/70 px-3 text-sm text-slate-100 outline-none transition focus:border-blue-400/50"
              >
                <option value="">All journals</option>
                {journals.map((journal) => (
                  <option key={journal} value={journal}>
                    {journal}
                  </option>
                ))}
              </select>
            </label>
            <div className="md:col-span-12 mt-1 flex flex-wrap items-center gap-2">
              <button
                type="submit"
                className="inline-flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Apply filters
              </button>
              <Link
                href="/publications"
                className="inline-flex h-10 items-center rounded-lg border border-white/15 px-4 text-sm font-semibold text-slate-300 transition hover:border-blue-400/45 hover:text-blue-200"
              >
                Reset
              </Link>
            </div>
          </form>
        </section>
      ) : null}
      {publications.length === 0 ? (
        <p className="text-center text-slate-400">
          No works could be loaded right now. Try again later, or view the full list on{" "}
          <a href={principalInvestigator.links.orcid} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noreferrer">
            ORCID
          </a>
          .
        </p>
      ) : filteredPublications.length === 0 ? (
        <p className="text-center text-slate-400">No publications match the current filters.</p>
      ) : (
        <>
          <ol className="space-y-6">
            {paginatedPublications.map((pub, index) => {
            return (
                <li
                  key={pub.id}
                  className="rounded-2xl border border-white/[0.08] bg-lab-900/50 px-5 py-5 transition hover:border-blue-500/15 sm:flex sm:items-start sm:gap-6"
                >
                  <span className="font-mono text-sm text-blue-400/85">{String(startIndex + index + 1).padStart(2, "0")}</span>
                  <div className="mt-2 flex-1 sm:mt-0">
                    <h2 className="text-lg font-semibold text-white">
                      {pub.url ? (
                        <a href={pub.url} target="_blank" rel="noreferrer" className="transition hover:text-blue-200">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                      {pub.authors ? (
                        <>
                          {pub.authors}
                          <span className="text-slate-500"> · </span>
                        </>
                      ) : null}
                      <span className="text-slate-300">{pub.venue}</span>
                      {pub.year > 0 ? (
                        <>
                          <span className="text-slate-500"> · </span>
                          <span>{pub.year}</span>
                        </>
                      ) : null}
                    </p>
                    {pub.doi ? (
                      <p className="mt-3 font-mono text-xs text-blue-300/75">
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="hover:text-blue-200">
                          {pub.doi}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </li>
              );
              })}
          </ol>
          {totalPages > 1 ? (
            <nav className="flex flex-wrap items-center justify-center gap-1.5 pt-1" aria-label="Publications pages">
              <Link
                href={buildPageHref(Math.max(1, currentPage - 1))}
                className={`rounded-md border px-2.5 py-1.5 text-xs font-medium transition sm:text-sm ${
                  currentPage === 1
                    ? "pointer-events-none border-white/10 text-slate-500"
                    : "border-white/15 text-slate-300 hover:border-blue-400/45 hover:text-blue-200"
                }`}
              >
                Prev
              </Link>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={buildPageHref(page)}
                  className={`min-w-8 rounded-md border px-2.5 py-1.5 text-center text-xs font-medium transition sm:text-sm ${
                    page === currentPage
                      ? "border-blue-500/60 bg-blue-500/20 text-blue-100"
                      : "border-white/15 text-slate-300 hover:border-blue-400/45 hover:text-blue-200"
                  }`}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </Link>
              ))}
              <Link
                href={buildPageHref(Math.min(totalPages, currentPage + 1))}
                className={`rounded-md border px-2.5 py-1.5 text-xs font-medium transition sm:text-sm ${
                  currentPage === totalPages
                    ? "pointer-events-none border-white/10 text-slate-500"
                    : "border-white/15 text-slate-300 hover:border-blue-400/45 hover:text-blue-200"
                }`}
              >
                Next
              </Link>
            </nav>
          ) : null}
        </>
      )}
    </div>
  );
}
