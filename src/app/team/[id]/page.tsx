import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { SocialProfileLinks } from "@/components/SocialProfileLinks";
import { getTeamMemberById, getTeamSectionLabel, principalInvestigator, teamMembers } from "@/lib/content";
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
  const piHasLinks =
    isPi &&
    Boolean(
      member.email ||
        principalInvestigator.links.linkedin ||
        scholarUrl ||
        orcidUrl ||
        principalInvestigator.links.universityBio,
    );

  return (
    <>
      <TeamHeroStrip title={member.name} subtitle={member.role} />
      <div className="bg-white text-slate-900">
        <article
          className={`mx-auto space-y-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 ${
            isPi ? "max-w-6xl" : "max-w-3xl"
          }`}
        >
          {!isPi ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700/90">
              <Link href={sectionHref} className="transition hover:text-blue-600">
                {sectionLabel}
              </Link>
              <span className="text-slate-400"> / </span>
              <span className="text-slate-500">{member.name}</span>
            </p>
          ) : null}

          <div className={isPi ? "grid gap-8 lg:grid-cols-12 lg:items-start" : "flex flex-col gap-10 md:flex-row md:items-start"}>
            <div
              className={
                isPi
                  ? "mx-auto w-full max-w-[280px] shrink-0 lg:col-span-3 lg:mx-0 lg:max-w-none lg:sticky lg:top-28"
                  : "mx-auto w-full shrink-0 md:mx-0 md:w-[280px]"
              }
            >
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

            <div className={isPi ? "min-w-0 space-y-8 lg:col-span-9" : "min-w-0 flex-1 space-y-6"}>
              <div className={isPi ? "grid gap-6 md:grid-cols-2" : "space-y-6"}>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Research focus</h2>
                  <p className="mt-2 text-base font-bold leading-relaxed text-slate-700">{member.focus}</p>
                </div>
                {piHasLinks ? (
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Links</h2>
                    <SocialProfileLinks
                      className="mt-3"
                      email={member.email}
                      linkedin={principalInvestigator.links.linkedin}
                      universityBio={principalInvestigator.links.universityBio}
                      scholar={scholarUrl}
                      orcid={orcidUrl}
                    />
                  </div>
                ) : null}
                {!isPi && hasLinks ? (
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
                {"careerSummary" in member && member.careerSummary ? (
                  <div className={isPi ? "md:col-span-2" : undefined}>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Career summary</h2>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{member.careerSummary}</p>
                  </div>
                ) : (
                  <div className={isPi ? "md:col-span-2" : undefined}>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Bio</h2>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{member.bio}</p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {isPi && "professionalExperience" in member && member.professionalExperience ? (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">
                Professional experience
              </h2>
              <p className="mt-2 max-w-5xl text-base leading-relaxed text-slate-600">{member.professionalExperience}</p>
            </div>
          ) : null}

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
