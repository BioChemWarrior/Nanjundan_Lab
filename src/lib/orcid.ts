/**
 * ORCID Public API 3.0 — read public works (no API key).
 * @see https://info.orcid.org/documentation/api-tutorials/api-tutorial-read-public-record/
 */

const ORCID_PUB = "https://pub.orcid.org/v3.0";

export type OrcidPublication = {
  id: string;
  title: string;
  venue: string;
  year: number;
  authors: string;
  doi: string | null;
  url: string | null;
};

type OrcidExternalId = {
  "external-id-type"?: string;
  "external-id-value"?: string;
  "external-id-url"?: { value?: string };
};

type OrcidWorkSummary = {
  "put-code"?: number;
  path?: string;
  type?: string;
  title?: { title?: { value?: string } };
  "journal-title"?: { value?: string };
  "publication-date"?: {
    year?: { value?: string };
    month?: { value?: string };
    day?: { value?: string };
  };
  "external-ids"?: { "external-id"?: OrcidExternalId[] };
  url?: { value?: string };
};

type OrcidWorkGroup = {
  "work-summary"?: OrcidWorkSummary[];
};

type OrcidWorksResponse = {
  group?: OrcidWorkGroup[];
};

function normalizeDoi(raw: string): string {
  return raw.trim().toLowerCase().replace(/^https?:\/\/doi\.org\//i, "");
}

function extractDoi(summary: OrcidWorkSummary): string | null {
  const ids = summary["external-ids"]?.["external-id"];
  if (!ids?.length) return null;
  for (const e of ids) {
    if ((e["external-id-type"] ?? "").toLowerCase() === "doi" && e["external-id-value"]) {
      return normalizeDoi(e["external-id-value"]);
    }
  }
  return null;
}

function parseYear(summary: OrcidWorkSummary): number {
  const y = summary["publication-date"]?.year?.value;
  if (!y) return 0;
  const n = parseInt(y, 10);
  return Number.isFinite(n) ? n : 0;
}

/** Prefer journal articles and real journal DOIs over SSRN/preprint duplicates in the same ORCID group. */
function scoreSummary(summary: OrcidWorkSummary): number {
  const doi = extractDoi(summary) ?? "";
  const type = (summary.type ?? "").toLowerCase();
  let score = 0;
  if (type === "journal-article") score += 8;
  else if (type === "conference-paper") score += 5;
  else if (type === "book") score += 4;
  else score += 1;
  if (doi && !doi.includes("ssrn")) score += 4;
  else if (doi) score += 1;
  if (summary["journal-title"]?.value) score += 2;
  if (summary.title?.title?.value) score += 1;
  score += parseYear(summary) / 10_000;
  return score;
}

function pickSummary(group: OrcidWorkGroup): OrcidWorkSummary | null {
  const summaries = group["work-summary"]?.filter((s) => s.title?.title?.value) ?? [];
  if (!summaries.length) return null;
  return summaries.reduce((best, s) => (scoreSummary(s) > scoreSummary(best) ? s : best));
}

function venueLabel(summary: OrcidWorkSummary): string {
  const j = summary["journal-title"]?.value?.trim();
  if (j) return j;
  const t = (summary.type ?? "").replace(/-/g, " ");
  if (t) return t.replace(/\b\w/g, (c) => c.toUpperCase());
  return "Publication";
}

function publicationUrl(summary: OrcidWorkSummary, doi: string | null): string | null {
  const direct = summary.url?.value?.trim();
  if (direct) return direct;
  if (doi) return `https://doi.org/${doi}`;
  return null;
}

function toPublication(summary: OrcidWorkSummary): OrcidPublication | null {
  const title = summary.title?.title?.value?.trim();
  if (!title) return null;
  const doi = extractDoi(summary);
  const year = parseYear(summary);
  const path = summary.path?.trim();
  const id = doi ? `doi:${doi}` : path ?? `orcid-work:${summary["put-code"] ?? title}`;

  return {
    id,
    title,
    venue: venueLabel(summary),
    year,
    authors: "",
    doi,
    url: publicationUrl(summary, doi),
  };
}

export async function fetchOrcidPublications(orcidId: string): Promise<OrcidPublication[]> {
  const id = orcidId.replace(/https?:\/\/orcid\.org\//i, "").trim();
  const url = `${ORCID_PUB}/${id}/works`;

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: 86_400 },
  });

  if (!res.ok) {
    throw new Error(`ORCID works request failed (${res.status})`);
  }

  const data = (await res.json()) as OrcidWorksResponse;
  const groups = data.group ?? [];

  const byDoi = new Map<string, OrcidPublication>();

  for (const group of groups) {
    const summary = pickSummary(group);
    if (!summary) continue;
    const pub = toPublication(summary);
    if (!pub) continue;
    if (pub.doi) {
      const key = pub.doi;
      const existing = byDoi.get(key);
      if (!existing || pub.year > existing.year) {
        byDoi.set(key, pub);
      }
    } else {
      byDoi.set(pub.id, pub);
    }
  }

  const list = [...byDoi.values()];
  list.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  return list;
}
