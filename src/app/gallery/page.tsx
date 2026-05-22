import type { Metadata } from "next";
import { SectionHeading } from "@/components/ContentCard";
import { galleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <SectionHeading
        title="Laboratory gallery"
        description="Swap these procedural placeholders for photography from your communications office."
      />
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <figure
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-300/60 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <div
                className="absolute inset-0 opacity-80 transition group-hover:opacity-100"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at ${20 + (index % 3) * 25}% ${30 + (index % 2) * 20}%, rgba(59,130,246,0.28), transparent 55%),
                    linear-gradient(135deg, rgba(226,232,240,0.95), rgba(241,245,249,0.98))
                  `,
                }}
              />
              <div className="absolute inset-6 rounded-2xl border border-dashed border-slate-300" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-800 shadow-sm backdrop-blur">
                Photo placeholder
              </span>
            </div>
            <figcaption className="space-y-2 px-5 py-4">
              <p className="text-base font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
        </div>
      </div>
    </>
  );
}
