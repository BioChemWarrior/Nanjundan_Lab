import type { Metadata } from "next";
import { SectionHeading } from "@/components/ContentCard";
import { highlights, projects, teamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const teamSize = teamMembers.length;
  const phdScholars = teamMembers.filter((member) => member.role.toLowerCase().includes("phd")).length;

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Materials innovation for clean energy and circular resources"
        description="Nanjundan Lab advances materials and electrochemical technologies for energy storage, clean-energy systems, and circular resource recovery as part of the Centre for Future Materials at UniSQ."
      />
      <div className="space-y-6 text-base leading-relaxed text-slate-400">
        <p>
          Our research spans graphene and hybrid nanomaterials, next-generation batteries and supercapacitors, and the translation of lab
          chemistry into practical engineering outcomes. Current focus areas include critical mineral recovery from e-waste, bio-assisted
          extraction pathways, and hydrogen generation in seawater-integrated systems.
        </p>
        <div>
          <h3 className="text-xl font-semibold text-white">Research Themes</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
            {highlights.map((item) => (
              <li key={item.title}>
                <span className="font-medium text-slate-300">{item.title}:</span> {item.body}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Current Projects</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
            {projects.map((project) => (
              <li key={project.slug}>{project.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Team</h3>
          <p className="mt-4">
            The lab currently includes {teamSize} members, led by Prof. Ashok Kumar Nanjundan and supported by postdoctoral fellow Dr.
            Pratheep K. Annamalai. Our research cohort includes {phdScholars} PhD scholars working across sustainable materials,
            electrochemical systems, and translational clean-energy applications.
          </p>
        </div>
      </div>
    </div>
  );
}
