import Link from "next/link";
import type { Metadata } from "next";
import { AltmetricPublicationList } from "@/components/AltmetricPublicationList";
import { JournalCoverCarousel } from "@/components/JournalCoverCarousel";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { principalInvestigator } from "@/lib/content";
import { getAllJournalCovers } from "@/lib/journalCovers";
import { getPublications } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications",
};

const PUBLICATIONS_PER_PAGE = 15;

type PublicationsPageProps = {
  searchParams?: Promise<{ page?: string; year?: string; q?: string }>;
};

export default async function PublicationsPage({ searchParams }: PublicationsPageProps) {
  const params = (await searchParams) ?? {};
  const publications = await getPublications();
  const featuredJournalCovers = getAllJournalCovers();
  const yearFilter = (params.year ?? "").trim();
  const queryFilter = (params.q ?? "").trim().toLowerCase();
  const years = [...new Set(publications.map((pub) => pub.year).filter((year) => year > 0))].sort((a, b) => b - a);

  const filteredPublications = publications.filter((pub) => {
    if (yearFilter && String(pub.year) !== yearFilter) return false;
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
    if (queryFilter) q.set("q", queryFilter);
    return `/publications?${q.toString()}`;
  };

  const altmetricRefreshKey = `${currentPage}|${yearFilter}|${queryFilter}`;

  return (
    <>
      <TeamHeroStrip title="Publications" subtitle="We have published in various journals like" />
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-10">
      {featuredJournalCovers.length > 0 ? (
        <section>
          <JournalCoverCarousel covers={featuredJournalCovers} />
        </section>
      ) : null}
      {publications.length > 0 ? (
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <form method="get" action="/publications" className="grid gap-2.5 md:grid-cols-12 md:items-end">
            <label className="md:col-span-7">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">Search</span>
              <input
                type="text"
                name="q"
                defaultValue={queryFilter}
                placeholder="Title, journal, DOI..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
              />
            </label>
            <label className="md:col-span-5">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">Year</span>
              <select
                name="year"
                defaultValue={yearFilter}
                className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
              >
                <option value="">All years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
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
                className="inline-flex h-10 items-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-800"
              >
                Reset
              </Link>
            </div>
          </form>
        </section>
      ) : null}
      {publications.length === 0 ? (
        <p className="text-center text-slate-600">
          No works could be loaded right now. Try again later, or view the full list on{" "}
          <a href={principalInvestigator.links.orcid} className="text-blue-700 hover:text-blue-600" target="_blank" rel="noreferrer">
            ORCID
          </a>
          .
        </p>
      ) : filteredPublications.length === 0 ? (
        <p className="text-center text-slate-600">No publications match the current filters.</p>
      ) : (
        <>
          <AltmetricPublicationList refreshKey={altmetricRefreshKey}>
            <ol className="space-y-6">
              {paginatedPublications.map((pub, index) => {
                return (
                  <li
                    key={pub.id}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:border-blue-200 sm:flex sm:items-start sm:gap-6"
                  >
                    <span className="font-mono text-sm text-blue-700">{String(startIndex + index + 1).padStart(2, "0")}</span>
                    <div className="mt-2 min-w-0 flex-1 sm:mt-0">
                      <h2 className="text-lg font-semibold text-slate-900">
                        {pub.url ? (
                          <a href={pub.url} target="_blank" rel="noreferrer" className="transition hover:text-blue-700">
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </h2>
                      <p className="mt-2 text-sm text-slate-600">
                        {pub.authors ? (
                          <>
                            {pub.authors}
                            <span className="text-slate-400"> · </span>
                          </>
                        ) : null}
                        <span className="text-slate-800">{pub.venue}</span>
                        {pub.year > 0 ? (
                          <>
                            <span className="text-slate-400"> · </span>
                            <span>{pub.year}</span>
                          </>
                        ) : null}
                      </p>
                      {pub.doi ? (
                        <p className="mt-3 font-mono text-xs text-blue-700">
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="hover:text-blue-900">
                            {pub.doi}
                          </a>
                        </p>
                      ) : null}
                    </div>
                    <div className="mt-4 shrink-0 border-t border-slate-100 pt-4 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                      {pub.doi ? (
                        <div
                          className="altmetric-embed"
                          data-badge-type="donut"
                          data-badge-popover="right"
                          data-doi={pub.doi}
                          data-link-target="_blank"
                        />
                      ) : (
                        <p className="max-w-[8rem] text-xs leading-snug text-slate-400" title="Altmetric badges need a DOI, PMID, arXiv ID, or similar identifier.">
                          No public identifier in this record — badge unavailable.
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </AltmetricPublicationList>
          {totalPages > 1 ? (
            <nav className="flex flex-wrap items-center justify-center gap-1.5 pt-1" aria-label="Publications pages">
              <Link
                href={buildPageHref(Math.max(1, currentPage - 1))}
                className={`rounded-md border px-2.5 py-1.5 text-xs font-medium transition sm:text-sm ${
                  currentPage === 1
                    ? "pointer-events-none border-slate-100 text-slate-400"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-800"
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
                      ? "border-blue-500 bg-blue-50 text-blue-900"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-800"
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
                    ? "pointer-events-none border-slate-100 text-slate-400"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-800"
                }`}
              >
                Next
              </Link>
            </nav>
          ) : null}
        </>
      )}
        </div>
      </div>
    </>
  );
}
