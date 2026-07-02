import type { Metadata } from "next";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { ResearchProjectGrid } from "@/components/ResearchProjectGrid";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";

export const metadata: Metadata = {
  title: "Research",
};

export default function ProjectsPage() {
  return (
    <>
      <TeamHeroStrip title="Research programs" />
      <PageBody>
        <PageBodyInner className="!max-w-6xl space-y-16 py-4 sm:py-6">
          <ResearchProjectGrid />
        </PageBodyInner>
      </PageBody>
    </>
  );
}
