export type JournalCover = {
  journal: string;
  coverPageUrl: string;
  coverImageUrl: string;
};

const TOP_JOURNAL_COVERS: JournalCover[] = [
  {
    journal: "Nature Protocols",
    coverPageUrl: "https://www.nature.com/nprot/",
    coverImageUrl: "/journal-covers/nature-protocols.png",
  },
  {
    journal: "ACS Nano",
    coverPageUrl: "https://pubs.acs.org/journal/ancac3",
    coverImageUrl: "/journal-covers/acs-nano.png",
  },
  {
    journal: "Small",
    coverPageUrl: "https://onlinelibrary.wiley.com/journal/16136829",
    coverImageUrl: "/journal-covers/small.png",
  },
  {
    journal: "Chemical Reviews",
    coverPageUrl: "https://pubs.acs.org/journal/chreay",
    coverImageUrl: "/journal-covers/chemical-reviews.png",
  },
  {
    journal: "Advanced Energy Materials",
    coverPageUrl: "https://onlinelibrary.wiley.com/journal/16146840",
    coverImageUrl: "/journal-covers/advanced-energy-materials.png",
  },
  {
    journal: "Materials Today",
    coverPageUrl: "https://www.sciencedirect.com/journal/materials-today",
    coverImageUrl: "/journal-covers/materials-today.png",
  },
  {
    journal: "Nano Letters",
    coverPageUrl: "https://pubs.acs.org/journal/nalefd",
    coverImageUrl: "/journal-covers/nano-letters.png",
  },
  {
    journal: "Advanced Functional Materials",
    coverPageUrl: "https://onlinelibrary.wiley.com/journal/16163028",
    coverImageUrl: "/journal-covers/advanced-functional-materials.png",
  },
  {
    journal: "Nano Energy",
    coverPageUrl: "https://www.sciencedirect.com/journal/nano-energy",
    coverImageUrl: "/journal-covers/nano-energy-1.png",
  },
  {
    journal: "Chemical Engineering Journal",
    coverPageUrl: "https://www.sciencedirect.com/journal/chemical-engineering-journal",
    coverImageUrl: "/journal-covers/chemical-engineering-journal.png",
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
