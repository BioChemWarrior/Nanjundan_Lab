import type { Metadata } from "next";
import { ContentCard } from "@/components/ContentCard";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
};

export default function ProjectsPage() {
  return (
    <>
      <TeamHeroStrip title="Research programs" />
      <PageBody>
        <PageBodyInner className="space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ContentCard
                key={project.slug}
                title={project.title}
                href={`/projects/${project.slug}`}
              >
                <p>{project.summary}</p>
              </ContentCard>
            ))}
          </div>
        </PageBodyInner>
      </PageBody>
    </>
  );
}
