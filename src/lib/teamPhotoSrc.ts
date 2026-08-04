import { readFileSync } from "node:fs";

const photoSrcCache = new Map<string, string>();

/** Resolve team photo paths for server components (public files or raw FS paths). */
export function toTeamPhotoSrc(photo: string) {
  // Public URLs are served by Next from /public — return as-is so OneDrive/cwd
  // timing never blanks a photo that is already wired in content.
  if (photo.startsWith("/")) {
    return photo;
  }

  const cached = photoSrcCache.get(photo);
  if (cached) return cached;

  try {
    const bytes = readFileSync(photo);
    const dataUri = `data:image/png;base64,${bytes.toString("base64")}`;
    photoSrcCache.set(photo, dataUri);
    return dataUri;
  } catch {
    return "";
  }
}
