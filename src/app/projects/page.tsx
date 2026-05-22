import type { Metadata } from "next";
import Link from "next/link";
import { ContentCard } from "@/components/ContentCard";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <TeamHeroStrip title="Projects & programs" />
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ContentCard
                key={project.slug}
                title={project.title}
                subtitle={`Status · ${project.status}`}
                href={`/projects/${project.slug}`}
              >
                <p>{project.summary}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">
                  Partners: {project.partners.join(", ")}
                </p>
              </ContentCard>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500">
            Want to propose a new thread?{" "}
            <Link href="/contact" className="font-semibold text-blue-700 transition hover:text-blue-600">
              Reach out with a one-pager
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
