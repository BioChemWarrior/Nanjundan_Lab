import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { getTeamMemberById, teamMembers } from "@/lib/content";
import { toTeamPhotoSrc } from "@/lib/teamPhotoSrc";

export const runtime = "nodejs";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return teamMembers.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = getTeamMemberById(id);
  if (!member) return { title: "Team" };
  return { title: `${member.name} · Team` };
}

function memberInitials(name: string) {
  const withoutTitle = name.replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "");
  const parts = withoutTitle.split(/\s+/).filter((p) => /^[A-Za-z]/.test(p));
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default async function TeamMemberDetailPage({ params }: Props) {
  const { id } = await params;
  const member = getTeamMemberById(id);
  if (!member) notFound();

  const src = member.photo ? toTeamPhotoSrc(member.photo) : "";
  const linkedinUrl =
    "linkedin" in member && typeof member.linkedin === "string" ? member.linkedin : undefined;
  const hasLinks =
    Boolean(member.email) ||
    Boolean(linkedinUrl) ||
    Boolean(member.scholar) ||
    Boolean(member.orcid);

  return (
    <>
      <TeamHeroStrip title={member.name} subtitle={member.role} />
      <div className="bg-white text-slate-900">
        <article className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700/90">
            <Link href="/team" className="transition hover:text-blue-600">
              Team
            </Link>
            <span className="text-slate-400"> / </span>
            <span className="text-slate-500">{member.name}</span>
          </p>

          <div className="flex flex-col gap-10 md:flex-row md:items-start">
            <div className="mx-auto w-full shrink-0 md:mx-0 md:w-[280px]">
              <div
                className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border bg-slate-100 ${
                  member.id === "nanjundan"
                    ? "border-blue-400/55 shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_22px_50px_-32px_rgba(59,130,246,0.55)]"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {member.id === "nanjundan" ? (
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-cyan-600/35 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-800">
                    Principal Investigator
                  </span>
                ) : null}
                {src ? (
                  <img
                    src={src}
                    alt=""
                    width={560}
                    height={700}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-4xl font-semibold text-slate-600"
                    aria-hidden
                  >
                    {memberInitials(member.name)}
                  </div>
                )}
              </div>
            </div>

            <div className="min-w-0 flex-1 space-y-6">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Research focus</h2>
                <p className="mt-2 text-base leading-relaxed text-slate-700">{member.focus}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Bio</h2>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{member.bio}</p>
              </div>
              {hasLinks ? (
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Links</h2>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {member.email ? (
                      <a className="text-blue-700 underline-offset-2 hover:underline" href={`mailto:${member.email}`}>
                        Email
                      </a>
                    ) : null}
                    {linkedinUrl ? (
                      <a
                        className="text-blue-700 underline-offset-2 hover:underline"
                        href={linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    ) : null}
                    {member.scholar ? (
                      <a
                        className="text-blue-700 underline-offset-2 hover:underline"
                        href={member.scholar}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Scholar
                      </a>
                    ) : null}
                    {member.orcid ? (
                      <a
                        className="text-blue-700 underline-offset-2 hover:underline"
                        href={member.orcid}
                        target="_blank"
                        rel="noreferrer"
                      >
                        ORCID
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <p className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <Link href="/team" className="text-blue-700 underline-offset-2 hover:underline">
              ← Back to team
            </Link>
          </p>
        </article>
      </div>
    </>
  );
}
