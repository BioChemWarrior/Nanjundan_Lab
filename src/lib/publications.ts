import { principalInvestigator } from "@/lib/content";
import { fetchOrcidPublications, comparePublicationsByDate, type OrcidPublication } from "@/lib/orcid";

export type Publication = OrcidPublication;

function normalizeOrcidId(raw: string): string {
  return raw.replace(/https?:\/\/orcid\.org\//i, "").replace(/\/$/, "").trim();
}

function publicationKey(pub: Publication): string {
  if (pub.doi) return `doi:${pub.doi}`;
  return `${pub.title.toLowerCase()}|${pub.year}|${pub.venue.toLowerCase()}`;
}

function getOrcidRecordIds(): string[] {
  return [normalizeOrcidId(principalInvestigator.links.orcid)];
}

function publicationDateValue(pub: Pick<Publication, "year" | "month" | "day">): number {
  return (pub.year || 0) * 10_000 + (pub.month || 0) * 100 + (pub.day || 0);
}

/**
 * Publications loaded from the principal investigator's public ORCID record.
 * Cached per Next.js data cache (see `fetch` in `fetchOrcidPublications`).
 */
export async function getPublications(): Promise<Publication[]> {
  const ids = getOrcidRecordIds();
  const results = await Promise.allSettled(ids.map((id) => fetchOrcidPublications(id)));

  const merged = new Map<string, Publication>();

  for (const result of results) {
    if (result.status !== "fulfilled") {
      console.error("[publications] ORCID fetch failed:", result.reason);
      continue;
    }
    for (const pub of result.value) {
      const key = publicationKey(pub);
      const existing = merged.get(key);
      if (!existing || publicationDateValue(pub) > publicationDateValue(existing)) {
        merged.set(key, pub);
      }
    }
  }

  return [...merged.values()].sort(comparePublicationsByDate);
}

export { comparePublicationsByDate };
