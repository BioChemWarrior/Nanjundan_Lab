import type { Metadata } from "next";
import { AboutPageContent } from "@/components/AboutPageContent";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { aboutPageCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <TeamHeroStrip
        eyebrow="Nanjundan Lab · UniSQ"
        title="About the lab"
        subtitle={aboutPageCopy.heroSubtitle}
      />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          <AboutPageContent />
        </PageBodyInner>
      </PageBody>
    </>
  );
}
