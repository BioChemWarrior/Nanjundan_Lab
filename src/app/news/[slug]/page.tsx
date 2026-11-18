import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { formatNewsDate, getNewsBySlug, newsPosts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return { title: "News" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <TeamHeroStrip eyebrow="News" title={post.title} subtitle={formatNewsDate(post.date)} />
      <PageBody>
        <PageBodyInner className="py-4 sm:py-6">
          <article className="mx-auto max-w-3xl space-y-5 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <p className="mx-auto mt-10 max-w-3xl text-center sm:text-left">
            <Link href="/news" className="link-glow text-sm">
              ← All news
            </Link>
          </p>
        </PageBodyInner>
      </PageBody>
    </>
  );
}
