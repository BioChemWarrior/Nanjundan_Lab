export function memberInitials(name: string) {
  const withoutTitle = name.replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "");
  const parts = withoutTitle.split(/\s+/).filter((p) => /^[A-Za-z]/.test(p));
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function teamSectionHref(group: "pi" | "current" | "adjunct" | "alumni") {
  if (group === "alumni") return "/team/alumni";
  if (group === "adjunct") return "/team/adjunct";
  return "/team/current";
}

type TeamPhotoOverride = {
  objectPosition?: string;
  scale?: number;
};

const teamPhotoOverrides: Record<string, TeamPhotoOverride> = {
  "ancy-joseph": { objectPosition: "center 58%" },
  "bidita-salahuddin": { scale: 0.86 },
};

/** Fine-tune circular crop per member (`object-position` CSS value). */
export function teamPhotoPosition(id: string) {
  return teamPhotoOverrides[id]?.objectPosition;
}

/** Optional inline style for team photos (position + zoom). */
export function teamPhotoStyle(id: string): { objectPosition?: string; transform?: string } | undefined {
  const override = teamPhotoOverrides[id];
  if (!override) return undefined;
  return {
    ...(override.objectPosition ? { objectPosition: override.objectPosition } : {}),
    ...(override.scale ? { transform: `scale(${override.scale})` } : {}),
  };
}
