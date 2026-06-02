import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { getTeamMemberById, getTeamSectionLabel, teamMembers } from "@/lib/content";
import { memberInitials, teamSectionHref } from "@/lib/teamUtils";
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

export default async function TeamMemberDetailPage({ params }: Props) {
  const { id } = await params;
  const member = getTeamMemberById(id);
  if (!member) notFound();

  const src = member.photo ? toTeamPhotoSrc(member.photo) : "";
  const isPi = member.group === "pi";
  const sectionHref = teamSectionHref(member.group);
  const sectionLabel = getTeamSectionLabel(member.group);
  const linkedinUrl =
    "linkedin" in member && typeof member.linkedin === "string" ? member.linkedin : undefined;
  const scholarUrl =
    "scholar" in member && typeof member.scholar === "string" ? member.scholar : undefined;
  const orcidUrl = "orcid" in member && typeof member.orcid === "string" ? member.orcid : undefined;
  const hasLinks =
    Boolean(member.email) || Boolean(linkedinUrl) || Boolean(scholarUrl) || Boolean(orcidUrl);

  return (
    <>
      <TeamHeroStrip title={member.name} subtitle={member.role} />
      <div className="bg-white text-slate-900">
        <article className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {!isPi ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700/90">
              <Link href={sectionHref} className="transition hover:text-blue-600">
                {sectionLabel}
              </Link>
              <span className="text-slate-400"> / </span>
              <span className="text-slate-500">{member.name}</span>
            </p>
          ) : null}

          <div className="flex flex-col gap-10 md:flex-row md:items-start">
            <div className="mx-auto w-full shrink-0 md:mx-0 md:w-[280px]">
              <div
                className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border bg-slate-100 ${
                  member.group === "pi"
                    ? "border-blue-400/55 shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_22px_50px_-32px_rgba(59,130,246,0.55)]"
                    : "border-slate-200 shadow-sm"
                }`}
              >
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
                    {scholarUrl ? (
                      <a
                        className="text-blue-700 underline-offset-2 hover:underline"
                        href={scholarUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Scholar
                      </a>
                    ) : null}
                    {orcidUrl ? (
                      <a
                        className="text-blue-700 underline-offset-2 hover:underline"
                        href={orcidUrl}
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

          {!isPi ? (
            <p className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
              <Link href={sectionHref} className="text-blue-700 underline-offset-2 hover:underline">
                ← Back to {sectionLabel.toLowerCase()}
              </Link>
            </p>
          ) : null}
        </article>
      </div>
    </>
  );
}
