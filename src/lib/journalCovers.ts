export type JournalCover = {
  journal: string;
  coverPageUrl: string;
  coverImageUrl: string;
};

const TOP_JOURNAL_COVERS: JournalCover[] = [
  {
    journal: "Chemical Reviews",
    coverPageUrl: "https://pubs.acs.org/journal/chreay",
    coverImageUrl: "/journal-covers/chemical-reviews.png",
  },
  {
    journal: "RSC Sustainability",
    coverPageUrl: "https://www.rsc.org/journals-books-databases/about-journals/rsc-sustainability/",
    coverImageUrl: "/journal-covers/rsc-sustainability.png",
  },
  {
    journal: "Batteries & Supercaps",
    coverPageUrl: "https://chemistry-europe.onlinelibrary.wiley.com/journal/25666223",
    coverImageUrl: "/journal-covers/batteries-supercaps.png",
  },
  {
    journal: "Chemical Communications",
    coverPageUrl: "https://www.rsc.org/journals-books-databases/about-journals/chemcomm/",
    coverImageUrl: "/journal-covers/chemcomm.png",
  },
  {
    journal: "Journal of Materials Chemistry A",
    coverPageUrl: "https://pubs.rsc.org/en/journals/journalissues/ta",
    coverImageUrl: "/journal-covers/journal-materials-chemistry-a.png",
  },
  {
    journal: "Advanced Materials Technologies",
    coverPageUrl: "https://onlinelibrary.wiley.com/journal/2365709x",
    coverImageUrl: "/journal-covers/advanced-materials-technologies.png",
  },
];

function normalizeVenue(venue: string): string {
  return venue
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const coverByVenue = new Map<string, JournalCover>(
  TOP_JOURNAL_COVERS.map((entry) => [normalizeVenue(entry.journal), entry]),
);

export function getJournalCoverByVenue(venue: string): JournalCover | null {
  return coverByVenue.get(normalizeVenue(venue)) ?? null;
}

export function getAllJournalCovers(): JournalCover[] {
  return TOP_JOURNAL_COVERS;
}
