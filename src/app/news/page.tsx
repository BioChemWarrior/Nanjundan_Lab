import type { Metadata } from "next";
import { ContentCard, SectionHeading } from "@/components/ContentCard";
import { newsPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <>
      <SectionHeading title="News & announcements" />
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsPosts.map((post) => (
          <ContentCard key={post.slug} title={post.title} subtitle={post.date} href={`/news/${post.slug}`}>
            {post.excerpt}
          </ContentCard>
        ))}
      </div>
        </div>
      </div>
    </>
  );
}
