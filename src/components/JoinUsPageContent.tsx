import type { ReactNode } from "react";
import { site } from "@/lib/content";

const panelClass =
  "rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-unisq-50/25 p-6 shadow-sm sm:p-8";

function TipPanel({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={[panelClass, "border-glow-unisq", className].filter(Boolean).join(" ")}>{children}</article>;
}

export function JoinUsPageContent() {
  return (
    <div className="space-y-12 text-base leading-relaxed text-slate-600 sm:space-y-14">
      <section className={`${panelClass} mx-auto max-w-3xl space-y-4`}>
        <p className="text-pretty sm:text-lg">
          Over the last 20 years, I have learned that hard work is the engine of a successful PhD, but it needs a
          steering wheel. For highly driven students entering our rigorous, experimental research environment, the key
          is channeling your energy effectively so you don&apos;t burn out.
        </p>
        <p>
          Here are the most critical tips I share with my prospective candidates to help you thrive in the lab:
        </p>
      </section>

      <section className="space-y-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <TipPanel>
            <h2 className="text-lg font-semibold text-slate-900">1. Direct Energy Toward Strategic Goals</h2>
            <p className="mt-3">
              Working 12-hour days is counterproductive if your effort doesn&apos;t align with the lab&apos;s milestones.
              I advise you to understand the broader objectives of the grants funding our work. Your hard work is most
              valuable when it directly advances our group&apos;s specific deliverables and pushes the boundaries of the
              main project.
            </p>
          </TipPanel>

          <TipPanel>
            <h2 className="text-lg font-semibold text-slate-900">2. Treat Failed Experiments as Crucial Data</h2>
            <p className="mt-3">
              In our experimental fields—whether synthesizing new materials, running complex chemical processes, or
              testing device fabrication—things will fail. Hardworking students often take this as a personal defeat. I
              want you to understand that a rigorous, well-documented negative result is progress. It rules out a dead
              end and logically informs our next iteration.
            </p>
          </TipPanel>

          <TipPanel>
            <h2 className="text-lg font-semibold text-slate-900">3. Master Meticulous Documentation</h2>
            <p className="mt-3">
              Your raw effort is wasted if the methodology cannot be reproduced. You must build the habit of exhaustive
              data management from day one. Capturing the exact parameters of a structural analysis or chemical
              synthesis ensures that when it is time for us to write the manuscript or report to our funding bodies,
              the foundation is unshakeable.
            </p>
          </TipPanel>

          <TipPanel>
            <h2 className="text-lg font-semibold text-slate-900">4. Read Deeply Before Executing</h2>
            <p className="mt-3">
              Eager, hardworking students often want to rush straight to bench work. I encourage you to channel that drive
              into mastering the literature first. Understanding the foundational theory and knowing exactly what has
              already been attempted in our field prevents weeks of redundant experiments.
            </p>
          </TipPanel>

          <TipPanel className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-900">5. Transition from Student to Colleague</h2>
            <p className="mt-3">
              The ultimate goal of your PhD is intellectual independence. As a driven candidate, you should gradually
              shift from asking me, &ldquo;What experiment should I run next?&rdquo; to proposing, &ldquo;Here is what I
              plan to test next, and here is the literature that supports it.&rdquo; I encourage you to take total
              ownership of your specific niche until you are the expert in the room.
            </p>
          </TipPanel>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-unisq-200/40 border-glow-unisq bg-gradient-to-br from-white via-unisq-50/30 to-slate-50 px-6 py-8 sm:px-10 sm:py-10">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Join The Nanjundan Lab</h2>
          <p>
            We are always looking for passionate and driven individuals to join our research team at the University of
            Southern Queensland.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-3xl space-y-4">
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
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <article className={panelClass}>
          <h2 className="text-lg font-semibold text-slate-900">Who We Are Looking For</h2>
          <p className="mt-4">
            We welcome inquiries from highly motivated prospective PhD students, Master&apos;s students, and
            Postdoctoral researchers with a strong background in materials science, chemistry, or chemical engineering.
            If you are excited about advancing sustainable energy technologies and thriving in a collaborative,
            grant-supported research environment, we want to hear from you.
          </p>
        </article>

        <article className={`${panelClass} border-unisq-200/50`}>
          <h2 className="text-lg font-semibold text-slate-900">How to Apply</h2>
          <p className="mt-4">
            If you are interested in joining the lab, please email{" "}
            <a className="link-glow" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            with the following:
          </p>
          <p className="mt-4 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-4 text-sm leading-relaxed sm:px-5 sm:text-base">
            A brief cover letter outlining your research interests and why you would like to join our group.
            <br />
            Your current CV (including a list of publications, if applicable).
            <br />
            Academic transcripts.
          </p>
          <p className="mt-4">
            We also actively support outstanding candidates in applying for competitive fellowships and external
            funding opportunities, such as the Maitri grants and other strategic research funds.
          </p>
          <p className="mt-4 font-medium text-slate-800">
            We look forward to building the future of sustainable energy storage together.
          </p>
        </article>
      </section>

      <section className="grid gap-6 border-t border-slate-200 pt-10 lg:grid-cols-2 lg:gap-8">
        <article className={panelClass}>
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Contact</h2>
          <p className="mt-4 font-medium text-slate-800">{site.name}</p>
          <address className="mt-3 not-italic">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-4 space-y-2">
            <p>
              <a className="link-glow" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="transition hover:text-slate-900" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phone}
              </a>
            </p>
          </div>
          <p className="mt-4">
            <a
              className="text-sm font-semibold text-unisq-700 underline-offset-2 transition hover:text-unisq-800 hover:underline"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps →
            </a>
          </p>
        </article>

        <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm">
          <iframe
            title="Nanjundan Lab location at UniSQ Springfield Central"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`}
            className="h-full min-h-[280px] w-full border-0 sm:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
