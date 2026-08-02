import type { Metadata } from "next";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { ResearchPageContent } from "@/components/ResearchPageContent";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { researchPageCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
};

export default function ProjectsPage() {
  return (
    <>
      <TeamHeroStrip
        eyebrow="Centre for Future Materials · UniSQ"
        title="Research interests"
        subtitle={researchPageCopy.heroSubtitle}
      />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          <ResearchPageContent />
        </PageBodyInner>
      </PageBody>
    </>
  );
}