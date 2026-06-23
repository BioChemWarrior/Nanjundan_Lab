import type { Metadata } from "next";
import { SectionHeading } from "@/components/ContentCard";
import { PageBody, PageBodyInner } from "@/components/PageBody";

export const metadata: Metadata = {
  title: "Gallery",
  robots: { index: false, follow: false },
};

export default function GalleryPage() {
  return (
    <>
      <SectionHeading title="Laboratory gallery" description="Photography from the lab will be added here soon." />
      <PageBody>
        <PageBodyInner>
          <p className="text-center text-base leading-relaxed text-slate-600">
            Gallery content is being prepared. Check back for images from our research facilities and team.
          </p>
        </PageBodyInner>
      </PageBody>
    </>
  );
}
