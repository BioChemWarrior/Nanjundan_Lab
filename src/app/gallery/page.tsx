import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { galleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <TeamHeroStrip title="Gallery" subtitle="Life in the Nanjundan Research Group." />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          {galleryItems.length === 0 ? (
            <p className="text-center text-slate-600">Gallery photos will appear here soon.</p>
          ) : (
            <GalleryGrid items={galleryItems} imageClass="aspect-[4/5] sm:aspect-[4/3] [&_img]:object-cover" />
          )}
        </PageBodyInner>
      </PageBody>
    </>
  );
}
