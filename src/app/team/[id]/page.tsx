import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { getTeamMemberById, getTeamSectionLabel, teamMembers } from "@/lib/content";
import { memberInitials, teamPhotoStyle, teamSectionHref } from "@/lib/teamUtils";
import { toTeamPhotoSrc } from "@/lib/teamPhotoSrc";

export const runtime = "nodejs";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  const seen = new Set<string>();
  return teamMembers.flatMap((member) => {
    if (seen.has(member.id)) return [];
    seen.add(member.id);
    return [{ id: member.id }];
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = getTeamMemberById(id);
  if (!member) return { title: "Team" };
  return { title: `${member.name} · Team` };
}

function MemberLinks({
  email,
  linkedin,
  universityBio,
  scholar,
  orcid,
}: {
  email?: string;
  linkedin?: string;
  universityBio?: string;
  scholar?: string;
  orcid?: string;
}) {
  const hasLinks = Boolean(email || linkedin || universityBio || scholar || orcid);
  if (!hasLinks) return null;

  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Links</h2>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {email ? (
          <a className="text-blue-700 underline-offset-2 hover:underline" href={`mailto:${email}`}>
            Email
          </a>
        ) : null}
        {linkedin ? (
          <a
            className="text-blue-700 underline-offset-2 hover:underline"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        ) : null}
        {universityBio ? (
          <a
            className="text-blue-700 underline-offset-2 hover:underline"
            href={universityBio}
            target="_blank"
            rel="noreferrer"
          >
            UniSQ profile
          </a>
        ) : null}
        {scholar ? (
          <a className="text-blue-700 underline-offset-2 hover:underline" href={scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        ) : null}
        {orcid ? (
          <a className="text-blue-700 underline-offset-2 hover:underline" href={orcid} target="_blank" rel="noreferrer">
            ORCID
          </a>
        ) : null}
      </div>
    </div>
  );
}

function formatHonourItem(item: string, boldName: boolean) {
  if (!boldName) {
    return <span className="text-slate-600">{item}</span>;
  }

  const roleSplit = item.indexOf(" — ");
  if (roleSplit > 0) {
    return (
      <>
        <span className="font-bold text-slate-900">{item.slice(0, roleSplit)}</span>
        <span className="font-normal text-slate-600">{item.slice(roleSplit)}</span>
      </>
    );
  }

  return <span className="font-bold text-slate-900">{item}</span>;
}

function HonourStrip({
  title,
  items,
  boldNames = false,
}: {
  title: string;
  items: readonly string[];
  boldNames?: boolean;
}) {
  return (
    <div className="border-l-2 border-blue-600/80 pl-5 sm:pl-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">{title}</h2>
      <ul className="mt-4 list-none space-y-3">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-relaxed shadow-sm sm:text-base"
          >
            {formatHonourItem(item, boldNames)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function TeamMemberDetailPage({ params }: Props) {
  const { id } = await params;
  const member = getTeamMemberById(id);
  if (!member) notFound();

  const src = "photo" in member && member.photo ? toTeamPhotoSrc(member.photo) : "";
  const photoStyle = teamPhotoStyle(member.id);
  const isPi = member.group === "pi";
  const isExpandedProfile = isPi || ("careerSummary" in member && Boolean(member.careerSummary));
  const sectionHref = teamSectionHref(member.group);
  const sectionLabel = getTeamSectionLabel(member.group);
  const linkedinUrl =
    "linkedin" in member && typeof member.linkedin === "string" ? member.linkedin : undefined;
  const scholarUrl =
    "scholar" in member && typeof member.scholar === "string" ? member.scholar : undefined;
  const orcidUrl = "orcid" in member && typeof member.orcid === "string" ? member.orcid : undefined;
  const hasLinks =
    Boolean(member.email) || Boolean(linkedinUrl) || Boolean(scholarUrl) || Boolean(orcidUrl);
  const hasHonours =
    isPi &&
    "awardsAndGrants" in member &&
    "individualFellowships" in member &&
    member.awardsAndGrants.length > 0 &&
    member.individualFellowships.length > 0;

  return (
    <>
      <TeamHeroStrip title={member.name} subtitle={member.role} />
      <PageBody>
        <PageBodyInner className="space-y-10">
          {!isExpandedProfile ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700/90">
              <Link href={sectionHref} className="transition hover:text-blue-600">
                {sectionLabel}
              </Link>
              <span className="text-slate-400"> / </span>
              <span className="text-slate-500">{member.name}</span>
            </p>
          ) : null}

          <div
            className={
              isExpandedProfile
                ? "grid gap-8 lg:grid-cols-12 lg:items-start"
                : "flex flex-col gap-10 md:flex-row md:items-start"
            }
          >
            <div
              className={
                isExpandedProfile
                  ? "mx-auto w-full max-w-[280px] shrink-0 lg:col-span-3 lg:mx-0 lg:max-w-none lg:sticky lg:top-28"
                  : "mx-auto w-full shrink-0 md:mx-0 md:w-[280px]"
              }
            >
              <div
                className={`relative aspect-square w-full overflow-hidden rounded-full border bg-slate-100 ${
                  isExpandedProfile
                    ? "border-blue-400/55 shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_22px_50px_-32px_rgba(59,130,246,0.55)]"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {src ? (
                  <img
                    src={src}
                    alt={member.name}
                    width={560}
                    height={560}
                    className="h-full w-full object-cover"
                    style={photoStyle}
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

            <div className={isExpandedProfile ? "min-w-0 space-y-8 lg:col-span-9" : "min-w-0 flex-1 space-y-6"}>
              <div className={isExpandedProfile ? "grid gap-6 md:grid-cols-2" : "space-y-6"}>
                {member.focus ? (
                  <div className={isExpandedProfile && (isPi || !hasLinks) ? "md:col-span-2" : undefined}>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Research focus</h2>
                    <p className="mt-2 text-base font-bold leading-relaxed text-slate-700">{member.focus}</p>
                  </div>
                ) : null}
                {!isPi && isExpandedProfile && hasLinks ? (
                  <MemberLinks
                    email={member.email}
                    linkedin={linkedinUrl}
                    scholar={scholarUrl}
                    orcid={orcidUrl}
                  />
                ) : !isExpandedProfile && hasLinks ? (
                  <MemberLinks email={member.email} linkedin={linkedinUrl} scholar={scholarUrl} orcid={orcidUrl} />
                ) : null}
                {"careerSummary" in member && member.careerSummary ? (
                  <div className={isExpandedProfile ? "md:col-span-2" : undefined}>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Career summary</h2>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{member.careerSummary}</p>
                  </div>
                ) : "thesis" in member && member.thesis ? (
                  <div className={isExpandedProfile ? "md:col-span-2" : undefined}>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">PhD thesis</h2>
                    <p className="mt-2 text-base font-bold leading-relaxed text-slate-800">{member.thesis.title}</p>
                    {member.id === "rohit-ranganathan-gaddam" ? (
                      <p className="mt-2 text-base leading-relaxed text-slate-600">{member.thesis.citation}</p>
                    ) : null}
                    <a
                      className="mt-3 inline-block text-base text-blue-700 underline-offset-2 hover:underline"
                      href={member.thesis.doi}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {member.thesis.doi}
                    </a>
                  </div>
                ) : member.bio ? (
                  <div className={isExpandedProfile ? "md:col-span-2" : undefined}>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">Bio</h2>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{member.bio}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {isExpandedProfile && "professionalExperience" in member && member.professionalExperience ? (
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700/90">
                Professional experience
              </h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{member.professionalExperience}</p>
            </div>
          ) : null}

          {hasHonours ? (
            <section
              aria-label="Awards, grants, and fellowships"
              className="grid gap-10 border-t border-slate-200 pt-10 lg:grid-cols-2 lg:gap-12"
            >
              <HonourStrip title="Awards and competitive grants" items={member.awardsAndGrants} boldNames />
              <HonourStrip title="Individual fellowships" items={member.individualFellowships} boldNames />
            </section>
          ) : null}

          {!isExpandedProfile ? (
            <p className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
              <Link href={sectionHref} className="text-blue-700 underline-offset-2 hover:underline">
                ← Back to {sectionLabel.toLowerCase()}
              </Link>
            </p>
          ) : null}
        </PageBodyInner>
      </PageBody>
    </>
  );
}
