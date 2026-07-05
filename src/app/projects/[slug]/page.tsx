import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { getProjectBySlug, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Research" };
  return { title: project.title };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <TeamHeroStrip title={project.title} />
      <PageBody>
        <PageBodyInner className="space-y-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
            <Link href="/projects" className="transition hover:text-blue-900">
              Research
            </Link>
            <span className="text-slate-500"> / </span>
            <span className="text-slate-600">{project.title}</span>
          </p>
          <p className="text-pretty text-lg leading-relaxed text-slate-600">{project.summary}</p>
          {project.focusAreas?.length ? (
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Focus areas</h2>
              <ul className="mt-4 space-y-2">
                {project.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </PageBodyInner>
      </PageBody>
    </>
  );
}
