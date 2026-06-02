import type { Metadata } from "next";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { TeamMemberGrid } from "@/components/TeamMemberGrid";
import { getTeamMembersByGroup } from "@/lib/content";

export const metadata: Metadata = {
  title: "Current team",
};

export const runtime = "nodejs";

export default function CurrentTeamPage() {
  const members = getTeamMembersByGroup("current");

  return (
    <>
      <TeamHeroStrip title="Current team" />
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <TeamMemberGrid members={members} />
        </div>
      </div>
    </>
  );
}
