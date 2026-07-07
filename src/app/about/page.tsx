import type { Metadata } from "next";
import { AboutPageContent } from "@/components/AboutPageContent";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <TeamHeroStrip
        eyebrow="Nanjundan Lab · UniSQ"
        title="About the lab"
      />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          <AboutPageContent />
        </PageBodyInner>
      </PageBody>
    </>
  );
}
