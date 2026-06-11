import type { Metadata } from "next";
import Image from "next/image";
import { readFileSync } from "node:fs";
import { ContentCard, SectionHeading } from "@/components/ContentCard";
import { teamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
};

// Ensure this route runs in the Node.js runtime (server-side FS reads).
export const runtime = "nodejs";

const photoSrcCache = new Map<string, string>();

function toPhotoSrc(photo: string) {
  // If the string is a public URL/path, pass through.
  if (photo.startsWith("/")) return photo;

  const cached = photoSrcCache.get(photo);
  if (cached) return cached;

  try {
    const bytes = readFileSync(photo);
    // For the provided team headshots we store PNGs; keep it simple.
    const dataUri = `data:image/png;base64,${bytes.toString("base64")}`;
    photoSrcCache.set(photo, dataUri);
    return dataUri;
  } catch {
    // If the filesystem path is unavailable (e.g. deployed environment),
    // gracefully fall back to text-only cards.
    return "";
  }
}

export default function TeamPage() {
  return (
    <>
      <SectionHeading
        eyebrow="People"
        title="Researchers, engineers, and mentors"
        description="Swap bios with real profiles, pronouns, ORCID links, and alumni highlights."
      />
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => {
          const src = "photo" in member && member.photo ? toPhotoSrc(member.photo) : "";
          return (
            <ContentCard key={member.id} title={member.name} subtitle={member.role}>
              {src ? (
                <div className="flex items-start gap-4">
                  <Image
                    src={src}
                    alt={`${member.name} photo`}
                    width={64}
                    height={64}
                    className="mt-0.5 h-16 w-16 rounded-full object-cover"
                    unoptimized
                  />
                  <div className="min-w-0">
                    <p className="text-blue-300/90">{member.focus}</p>
                    <p className="mt-3">{member.bio}</p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-blue-300/90">{member.focus}</p>
                  <p className="mt-3">{member.bio}</p>
                </>
              )}
            </ContentCard>
          );
        })}
      </div>
        </div>
      </div>
    </>
  );
}
