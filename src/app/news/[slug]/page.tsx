import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ContentCard";
import { getNewsBySlug, newsPosts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return { title: "News" };
  return { title: post.title };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <SectionHeading title={post.title} description={post.excerpt} />
      <div className="flex flex-1 flex-col bg-white text-slate-900">
        <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
            <Link href="/news" className="transition hover:text-blue-900">
              News
            </Link>
            <span className="text-slate-500"> / </span>
            <span className="text-slate-600">{post.date}</span>
          </p>
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              This is placeholder body copy for <strong className="text-slate-900">{post.title}</strong>. Drop in Markdown-driven content,
              embedded figures, or partner quotes. For production sites, consider loading MDX from{" "}
              <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-blue-800">content/news</code> or a headless
              CMS.
            </p>
            <p>
              Short structured updates work well: three bullets on impact, two links to artifacts, and a contact for press.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
