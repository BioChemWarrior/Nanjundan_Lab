import type { Metadata } from "next";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamMemberGrid } from "@/components/TeamMemberGrid";
import { getTeamMembersByGroup } from "@/lib/content";

export const metadata: Metadata = {
  title: "Alumni",
};

export const runtime = "nodejs";

export default function AlumniPage() {
  const members = getTeamMembersByGroup("alumni");

  return (
    <>
      <TeamHeroStrip title="Alumni" subtitle="Former researchers and students of Nanjundan Lab." />
      <PageBody>
        <PageBodyInner>
          <TeamMemberGrid
            members={members}
            emptyMessage="Alumni profiles will be listed here as members graduate or move on from the lab."
          />
        </PageBodyInner>
      </PageBody>
    </>
  );
}
