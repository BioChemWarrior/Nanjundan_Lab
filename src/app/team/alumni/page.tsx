import type { Metadata } from "next";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
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
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <TeamMemberGrid
            members={members}
            emptyMessage="Alumni profiles will be listed here as members graduate or move on from the lab."
          />
        </div>
      </div>
    </>
  );
}
