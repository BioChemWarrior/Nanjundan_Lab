import type { Metadata } from "next";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamMemberGrid } from "@/components/TeamMemberGrid";
import { getTeamMembersByGroup } from "@/lib/content";

export const metadata: Metadata = {
  title: "Current team",
};

export const runtime = "nodejs";

function isVisitingResearcher(role: string) {
  return /visiting researcher|adjunct research fellow/i.test(role);
}

function isResearchFellow(role: string) {
  return /research fellow/i.test(role) && !isVisitingResearcher(role);
}

export default function CurrentTeamPage() {
  const members = getTeamMembersByGroup("current");
  const researchFellows = members.filter((member) => isResearchFellow(member.role));
  const phdScholars = members.filter(
    (member) => !isResearchFellow(member.role) && !isVisitingResearcher(member.role),
  );
  const visitingResearchers = members.filter((member) => isVisitingResearcher(member.role));

  return (
    <>
      <TeamHeroStrip title="Current team" />
      <PageBody>
        <PageBodyInner className="space-y-12">
          {researchFellows.length > 0 ? (
            <section>
              <h2 className="text-lg font-semibold text-slate-900">Research Fellows</h2>
              <div className="mt-6">
                <TeamMemberGrid members={researchFellows} />
              </div>
            </section>
          ) : null}
          {phdScholars.length > 0 ? (
            <section>
              <h2 className="text-lg font-semibold text-slate-900">PhD Scholars</h2>
              <div className="mt-6">
                <TeamMemberGrid members={phdScholars} />
              </div>
            </section>
          ) : null}
          {visitingResearchers.length > 0 ? (
            <section>
              <h2 className="text-lg font-semibold text-slate-900">Visiting Researchers</h2>
              <div className="mt-6">
                <TeamMemberGrid members={visitingResearchers} />
              </div>
            </section>
          ) : null}
        </PageBodyInner>
      </PageBody>
    </>
  );
}
