export function memberInitials(name: string) {
  const withoutTitle = name.replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "");
  const parts = withoutTitle.split(/\s+/).filter((p) => /^[A-Za-z]/.test(p));
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function teamSectionHref(group: "pi" | "current" | "alumni") {
  if (group === "alumni") return "/team/alumni";
  return "/team/current";
}
