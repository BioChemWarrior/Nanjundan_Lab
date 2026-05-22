import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { getProjectBySlug, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return { title: project.title };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <TeamHeroStrip title={project.title} subtitle={`Status · ${project.status}`} />
      <div className="bg-white text-slate-900">
        <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
            <Link href="/projects" className="transition hover:text-blue-900">
              Projects
            </Link>
            <span className="text-slate-500"> / </span>
            <span className="text-slate-600">{project.slug}</span>
          </p>
          <p className="text-pretty text-lg leading-relaxed text-slate-600">{project.summary}</p>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Partners</h2>
            <ul className="mt-4 space-y-2 text-slate-800">
              {project.partners.map((partner) => (
                <li key={partner}>• {partner}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-slate-600">
            Extend this template with timelines, GitHub links, PI contacts, and downloadable factsheets.
          </p>
        </div>
      </div>
    </>
  );
}
