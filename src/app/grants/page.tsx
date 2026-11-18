import type { Metadata } from "next";
import { GrantsPageContent } from "@/components/GrantsPageContent";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { grantsPageCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Grants",
};

export default function GrantsPage() {
  return (
    <>
      <TeamHeroStrip
        title="Grants"
        subtitle={grantsPageCopy.heroSubtitle}
      />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          <GrantsPageContent />
        </PageBodyInner>
      </PageBody>
    </>
  );
}
