import type { Metadata } from "next";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { ContentCard, SectionHeading } from "@/components/ContentCard";
import { teamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
};

// Ensure this route runs in the Node.js runtime (server-side FS reads).
export const runtime = "nodejs";

const photoSrcCache = new Map<string, string>();

function toPhotoSrc(photo: string) {
  // If the string is a public path, only use it when the file exists.
  if (photo.startsWith("/")) {
    const absolutePublicPath = path.join(process.cwd(), "public", photo.slice(1));
    return existsSync(absolutePublicPath) ? photo : "";
  }

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
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Researchers, engineers, and mentors"
        description="Meet the researchers and students advancing sustainable materials and energy storage."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => {
          const src = member.photo ? toPhotoSrc(member.photo) : "";
          const highlightedCardClassName =
            member.id === "nanjundan"
              ? "h-full border-blue-400/55 shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_26px_60px_-36px_rgba(59,130,246,0.75)]"
              : "h-full";
          return (
            <div key={member.id} className="relative">
              {member.id === "nanjundan" ? (
                <p className="absolute -top-3 left-5 z-20 rounded-full border border-cyan-300/45 bg-lab-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Principal Investigator
                </p>
              ) : null}
              <ContentCard
                title={member.name}
                subtitle={member.role}
                className={highlightedCardClassName}
              >
                {src ? (
                  <div className="flex h-full items-start gap-4">
                    <img
                      src={src}
                      alt={`${member.name} photo`}
                      width={64}
                      height={64}
                      className="mt-0.5 h-16 w-16 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="text-blue-300/90">{member.focus}</p>
                      <div className="bio-scroll mt-3 h-40 overflow-y-auto pr-2 text-sm leading-6 text-blue-100/95">
                        <p>{member.bio}</p>
                      </div>
                      {(member.email || member.linkedin || member.scholar || member.orcid) && (
                        <div className="mt-auto flex flex-wrap gap-3 pt-4 text-sm">
                          {member.email && (
                            <a
                              className="text-cyan-300 underline-offset-2 hover:underline"
                              href={`mailto:${member.email}`}
                            >
                              Email
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              className="text-cyan-300 underline-offset-2 hover:underline"
                              href={member.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              LinkedIn
                            </a>
                          )}
                          {member.scholar && (
                            <a
                              className="text-cyan-300 underline-offset-2 hover:underline"
                              href={member.scholar}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Scholar
                            </a>
                          )}
                          {member.orcid && (
                            <a
                              className="text-cyan-300 underline-offset-2 hover:underline"
                              href={member.orcid}
                              target="_blank"
                              rel="noreferrer"
                            >
                              ORCID
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col">
                    <p className="text-blue-300/90">{member.focus}</p>
                    <div className="bio-scroll mt-3 h-40 overflow-y-auto pr-2 text-sm leading-6 text-blue-100/95">
                      <p>{member.bio}</p>
                    </div>
                    {(member.email || member.linkedin || member.scholar || member.orcid) && (
                      <div className="mt-auto flex flex-wrap gap-3 pt-4 text-sm">
                        {member.email && (
                          <a
                            className="text-cyan-300 underline-offset-2 hover:underline"
                            href={`mailto:${member.email}`}
                          >
                            Email
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            className="text-cyan-300 underline-offset-2 hover:underline"
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            LinkedIn
                          </a>
                        )}
                        {member.scholar && (
                          <a
                            className="text-cyan-300 underline-offset-2 hover:underline"
                            href={member.scholar}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Scholar
                          </a>
                        )}
                        {member.orcid && (
                          <a
                            className="text-cyan-300 underline-offset-2 hover:underline"
                            href={member.orcid}
                            target="_blank"
                            rel="noreferrer"
                          >
                            ORCID
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </ContentCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
