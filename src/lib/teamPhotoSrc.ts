import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const photoSrcCache = new Map<string, string>();

/** Resolve team photo paths for server components (public files or raw FS paths). */
export function toTeamPhotoSrc(photo: string) {
  if (photo.startsWith("/")) {
    const absolutePublicPath = path.join(process.cwd(), "public", photo.slice(1));
    return existsSync(absolutePublicPath) ? photo : "";
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
