import type { Metadata } from "next";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamMemberGrid } from "@/components/TeamMemberGrid";
import { getTeamMembersByGroup } from "@/lib/content";

export const metadata: Metadata = {
  title: "Current team",
};

export const runtime = "nodejs";

export default function CurrentTeamPage() {
  const members = getTeamMembersByGroup("current");
  const seniorResearchFellows = members.filter((member) => /senior research fellow/i.test(member.role));
  const phdScholars = members.filter((member) => !/senior research fellow/i.test(member.role));

  return (
    <>
      <TeamHeroStrip title="Current team" />
      <PageBody>
        <PageBodyInner className="space-y-12">
          {seniorResearchFellows.length > 0 ? (
            <section>
              <h2 className="text-lg font-semibold text-slate-900">Senior Research Fellows</h2>
              <div className="mt-6">
                <TeamMemberGrid members={seniorResearchFellows} />
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
        </PageBodyInner>
      </PageBody>
    </>
  );
}
