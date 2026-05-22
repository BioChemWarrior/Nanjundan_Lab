import { principalInvestigator } from "@/lib/content";
import { fetchOrcidPublications, type OrcidPublication } from "@/lib/orcid";

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
      if (!existing || pub.year > existing.year) {
        merged.set(key, pub);
      }
    }
  }

  return [...merged.values()].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}
