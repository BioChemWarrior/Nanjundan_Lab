import Link from "next/link";
import {
  aboutPageCopy,
  getTeamMembersByGroup,
  principalInvestigator,
  principalInvestigatorId,
  teamNavDropdown,
} from "@/lib/content";
import { toTeamPhotoSrc } from "@/lib/teamPhotoSrc";

function ExploreLink({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white px-5 py-4 text-center transition hover:border-unisq-300/50 hover:shadow-unisq-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unisq-500 sm:px-6 sm:py-5"
    >
      <span className="text-base font-semibold text-slate-900 transition group-hover:text-unisq-800">{label}</span>
      <span className="mt-1 block flex-1 text-sm leading-relaxed text-slate-500">{description}</span>
    </Link>
  );
}

export function AboutPageContent() {
  const pi = getTeamMembersByGroup("pi")[0];
  const adjunctCount = getTeamMembersByGroup("adjunct").length;
  const alumniCount = getTeamMembersByGroup("alumni").length;
  const phdScholars = getTeamMembersByGroup("current").filter((member) => /phd/i.test(member.role)).length;
  const piPhoto = pi && "photo" in pi && pi.photo ? toTeamPhotoSrc(pi.photo) : "";

  return (
    <div className="w-full space-y-12 text-center text-base leading-relaxed text-slate-600 sm:space-y-14">
      <section className="mx-auto max-w-5xl space-y-5">
        <p className="eyebrow-glow-light">{aboutPageCopy.missionEyebrow}</p>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {aboutPageCopy.missionTitle}
        </h2>
        <p className="text-pretty sm:text-lg">{aboutPageCopy.missionBody}</p>
        <p className="text-pretty">{aboutPageCopy.missionBodyExtended}</p>
      </section>

      <section className="grid items-center gap-10 border-y border-slate-200 py-10 sm:gap-12 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
        <div className="flex justify-center lg:justify-end">
          <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md sm:max-w-md">
            {piPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={piPhoto} alt={principalInvestigator.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-4xl font-semibold text-slate-600">
                AK
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 lg:text-left">
          <p className="eyebrow-glow-light lg:text-left">Principal investigator</p>
          <h3 className="text-pretty text-xl font-semibold text-slate-900 sm:text-2xl">{principalInvestigator.name}</h3>
          <p className="text-sm font-medium text-slate-600">{principalInvestigator.title}</p>
          <p className="text-pretty text-sm sm:text-base">{principalInvestigator.bio}</p>
          <p className="text-pretty text-sm sm:text-base">{principalInvestigator.bioExtended}</p>
          <ul className="space-y-1 text-sm text-slate-500">
            {principalInvestigator.affiliations.map((affiliation) => (
              <li key={affiliation}>{affiliation}</li>
            ))}
          </ul>
          <Link
            href={`/team/${principalInvestigatorId}`}
            className="link-glow inline-flex text-sm"
          >
            Read full profile →
          </Link>
        </div>
      </section>

      <section className="space-y-4 text-center lg:text-left">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{aboutPageCopy.teamTitle}</h3>
        <p className="text-pretty">{aboutPageCopy.teamBody}</p>
        <p className="text-sm text-slate-500">
          {phdScholars} PhD scholars · {adjunctCount} adjunct faculty · {alumniCount} alumni
        </p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm lg:justify-start" aria-label="Team sections">
          {teamNavDropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-glow text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </section>

      <section className="space-y-5 border-t border-slate-200 pt-8">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">{aboutPageCopy.exploreTitle}</h2>
          <p className="text-sm text-slate-500">{aboutPageCopy.exploreBody}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <ExploreLink href="/projects" label="Research" description="Programs, projects, and capabilities." />
          <ExploreLink href="/publications" label="Publications" description="Peer-reviewed outputs and journal covers." />
          <ExploreLink href="/join-us" label="Join us" description="PhD, postdoc, and collaboration opportunities." />
        </div>
      </section>
    </div>
  );
}
