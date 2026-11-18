import Link from "next/link";
import { formatNewsDate, getNewsPosts } from "@/lib/content";

export function HomeNewsTicker() {
  const posts = getNewsPosts();
  if (posts.length === 0) return null;

  const loop = [...posts];
  while (loop.length < 6) loop.push(...posts);

  return (
    <div className="news-ticker mx-auto mt-8 w-full max-w-4xl sm:mt-10">
      <div className="flex items-center gap-3 rounded-full border border-white/15 bg-lab-950/55 px-3 py-2 shadow-unisq-glow-sm backdrop-blur-md sm:gap-4 sm:px-4">
        <Link
          href="/news"
          className="shrink-0 rounded-full bg-unisq-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-unisq-300 transition hover:bg-unisq-500/25 hover:text-white sm:px-3"
        >
          News
        </Link>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_14px,black_calc(100%-14px),transparent)]">
          <div className="news-marquee-track flex w-max items-center gap-8 pr-8" aria-hidden>
            <TickerSet posts={loop} />
            <TickerSet posts={loop} clone />
          </div>
          <ul className="news-ticker-static hidden flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {posts.map((post) => (
              <li key={`static-${post.slug}`}>
                <Link
                  href={`/news/${post.slug}`}
                  className="flex items-baseline gap-2 whitespace-nowrap text-sm text-slate-200 transition hover:text-white"
                >
                  <time dateTime={post.date} className="font-mono text-[11px] text-unisq-300/90">
                    {formatNewsDate(post.date)}
                  </time>
                  <span className="text-slate-500" aria-hidden>
                    ·
                  </span>
                  <span>{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/news"
          className="hidden shrink-0 text-xs font-semibold text-slate-300 transition hover:text-unisq-300 sm:inline"
        >
          All news →
        </Link>
      </div>
    </div>
  );
}

function TickerSet({
  posts,
  clone = false,
}: {
  posts: ReturnType<typeof getNewsPosts>;
  clone?: boolean;
}) {
  return (
    <div className={`flex items-center gap-8 ${clone ? "news-marquee-clone" : ""}`}>
      {posts.map((post, index) => (
        <Link
          key={`${clone ? "clone" : "item"}-${post.slug}-${index}`}
          href={`/news/${post.slug}`}
          tabIndex={-1}
          className="group flex shrink-0 items-baseline gap-2.5 whitespace-nowrap text-sm text-slate-200 transition hover:text-white"
        >
          <time dateTime={post.date} className="font-mono text-[11px] text-unisq-300/90">
            {formatNewsDate(post.date)}
          </time>
          <span className="text-slate-500" aria-hidden>
            ·
          </span>
          <span className="underline-offset-4 group-hover:underline">{post.title}</span>
        </Link>
      ))}
    </div>
  );
}
