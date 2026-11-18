import type { Metadata } from "next";
import Link from "next/link";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { formatNewsDate, getNewsPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  const posts = getNewsPosts();

  return (
    <>
      <TeamHeroStrip
        title="News"
        subtitle="Announcements, funding, and opportunities from the Nanjundan Research Group."
      />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          {posts.length === 0 ? (
            <p className="text-center text-slate-600">No news posts yet. Please check back soon.</p>
          ) : (
            <ol className="divide-y divide-slate-200">
              {posts.map((post) => (
                <li key={post.slug} className="py-6 first:pt-0 last:pb-0 sm:py-8">
                  <article className="mx-auto max-w-3xl text-center sm:text-left">
                    <time dateTime={post.date} className="eyebrow-glow-light">
                      {formatNewsDate(post.date)}
                    </time>
                    <h2 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                      <Link href={`/news/${post.slug}`} className="transition hover:text-unisq-800">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">{post.excerpt}</p>
                  </article>
                </li>
              ))}
            </ol>
          )}
        </PageBodyInner>
      </PageBody>
    </>
  );
}
