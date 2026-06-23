import type { Metadata } from "next";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamMemberGrid } from "@/components/TeamMemberGrid";
import { getTeamMembersByGroup } from "@/lib/content";

export const metadata: Metadata = {
  title: "Adjunct Faculty",
};

export const runtime = "nodejs";

export default function AdjunctMembersPage() {
  const members = getTeamMembersByGroup("adjunct");

  return (
    <>
      <TeamHeroStrip
        title="Adjunct Faculty"
        subtitle="Collaborators and adjunct affiliates working with Nanjundan Lab."
      />
      <PageBody>
        <PageBodyInner>
          <TeamMemberGrid
            members={members}
            emptyMessage="Adjunct faculty profiles will be listed here."
          />
        </PageBodyInner>
      </PageBody>
    </>
  );
}
