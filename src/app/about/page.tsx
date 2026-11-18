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
      <TeamHeroStrip title="About the group" />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          <AboutPageContent />
        </PageBodyInner>
      </PageBody>
    </>
  );
}
