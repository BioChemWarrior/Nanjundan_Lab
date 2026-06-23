import type { Metadata } from "next";
import { SectionHeading } from "@/components/ContentCard";
import { PageBody, PageBodyInner } from "@/components/PageBody";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join Us",
};

export default function JoinUsPage() {
  return (
    <>
      <SectionHeading title="What is important for a successful PhD?" />
      <PageBody>
        <PageBodyInner className="space-y-8 text-base leading-relaxed text-slate-600">
          <p>
            Over the last 20 years, I have learned that hard work is the engine of a successful PhD, but it needs a
            steering wheel. For highly driven students entering our rigorous, experimental research environment, the key
            is channeling your energy effectively so you don&apos;t burn out.
          </p>
          <p>
            Here are the most critical tips I share with my prospective candidates to help you thrive in the lab:
          </p>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">1. Direct Energy Toward Strategic Goals</h2>
            <p>
              Working 12-hour days is counterproductive if your effort doesn&apos;t align with the lab&apos;s milestones.
              I advise you to understand the broader objectives of the grants funding our work. Your hard work is most
              valuable when it directly advances our group&apos;s specific deliverables and pushes the boundaries of the
              main project.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">2. Treat Failed Experiments as Crucial Data</h2>
            <p>
              In our experimental fields—whether synthesizing new materials, running complex chemical processes, or
              testing device fabrication—things will fail. Hardworking students often take this as a personal defeat. I
              want you to understand that a rigorous, well-documented negative result is progress. It rules out a dead
              end and logically informs our next iteration.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">3. Master Meticulous Documentation</h2>
            <p>
              Your raw effort is wasted if the methodology cannot be reproduced. You must build the habit of exhaustive
              data management from day one. Capturing the exact parameters of a structural analysis or chemical
              synthesis ensures that when it is time for us to write the manuscript or report to our funding bodies,
              the foundation is unshakeable.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">4. Read Deeply Before Executing</h2>
            <p>
              Eager, hardworking students often want to rush straight to bench work. I encourage you to channel that drive
              into mastering the literature first. Understanding the foundational theory and knowing exactly what has
              already been attempted in our field prevents weeks of redundant experiments.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">5. Transition from Student to Colleague</h2>
            <p>
              The ultimate goal of your PhD is intellectual independence. As a driven candidate, you should gradually
              shift from asking me, &ldquo;What experiment should I run next?&rdquo; to proposing, &ldquo;Here is what I
              plan to test next, and here is the literature that supports it.&rdquo; I encourage you to take total
              ownership of your specific niche until you are the expert in the room.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Join The Nanjundan Lab</h2>
            <p>
              We are always looking for passionate and driven individuals to join our research team at the University of
              Southern Queensland.
            </p>
          </div>
          <p>
            At the Nanjundan Lab, our work sits at the forefront of materials science, green chemistry, and advanced
            energy storage technologies. Our research focuses on developing next-generation solutions, including
            high-performance sodium-ion batteries, self-healing electrodes, and innovative eco-friendly processes for
            recovering critical minerals from spent batteries.
          </p>
          <p>
            Whether you are interested in exploring deep eutectic solvents and bioleaching for battery recycling or
            engineering new hard carbon anodes and cellulose separators, our lab offers a dynamic environment to conduct
            high-impact, sustainable research.
          </p>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Who We Are Looking For</h2>
            <p>
              We welcome inquiries from highly motivated prospective PhD students, Master&apos;s students, and
              Postdoctoral researchers with a strong background in materials science, chemistry, or chemical engineering.
              If you are excited about advancing sustainable energy technologies and thriving in a collaborative,
              grant-supported research environment, we want to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">How to Apply</h2>
            <p>
              If you are interested in joining the lab, please email{" "}
              <a className="font-semibold text-blue-700 underline-offset-2 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              with the following:
            </p>
            <p>
              A brief cover letter outlining your research interests and why you would like to join our group.
              <br />
              Your current CV (including a list of publications, if applicable).
              <br />
              Academic transcripts.
            </p>
            <p>
              We also actively support outstanding candidates in applying for competitive fellowships and external
              funding opportunities, such as the Maitri grants and other strategic research funds.
            </p>
            <p>We look forward to building the future of sustainable energy storage together.</p>
          </div>
        </PageBodyInner>
      </PageBody>
    </>
  );
}
