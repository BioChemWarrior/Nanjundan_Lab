import type { Metadata } from "next";
import { JoinUsPageContent } from "@/components/JoinUsPageContent";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";

export const metadata: Metadata = {
  title: "Join Us",
};

export default function JoinUsPage() {
  return (
    <>
      <TeamHeroStrip title="What is important for a successful PhD?" />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          <JoinUsPageContent />
        </PageBodyInner>
      </PageBody>
    </>
  );
}
