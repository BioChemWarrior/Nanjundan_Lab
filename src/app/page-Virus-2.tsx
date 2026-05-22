import Link from "next/link";
import { FundedBy } from "@/components/FundedBy";
import { homeCopy, labBrand, principalInvestigator, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* First screen: title only */}
      <section className="flex min-h-[calc(100svh-5.5rem)] flex-col items-center justify-center px-6 pb-12 pt-6 text-center sm:min-h-[calc(100svh-5rem)]">
        <div aria-hidden className="hero-energy-flow">
          <span className="hero-labware hero-labware-flask" />
          <span className="hero-labware hero-labware-beaker" />
          <span className="hero-flow-lane" />
          <span className="hero-particle hero-particle-1" />
          <span className="hero-particle hero-particle-2" />
          <span className="hero-particle hero-particle-3" />
          <span className="hero-particle hero-particle-4" />
          <span className="hero-particle hero-particle-5" />
          <span className="hero-particle hero-particle-6" />
          <span className="hero-particle hero-particle-7" />
          <span className="hero-particle hero-particle-8" />
          <span className="hero-particle hero-particle-9" />
          <span className="hero-particle hero-particle-10" />
          <span className="hero-particle hero-particle-11" />
          <span className="hero-particle hero-particle-12" />
          <span className="hero-molecule hero-molecule-1" />
          <span className="hero-molecule hero-molecule-2" />
          <span className="hero-molecule hero-molecule-3" />
          <span className="hero-molecule hero-molecule-4" />
        </div>
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {labBrand.title}
        </h1>
        <p className="mt-8 max-w-none whitespace-nowrap text-center text-lg font-light tracking-wide text-slate-400 sm:text-xl md:text-2xl">
          {labBrand.subtitle}
        </p>
      </section>

      <div className="space-y-20 pb-24 sm:space-y-24">
        {/* About */}
        <section className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="mt-8 rounded-3xl border border-white/[0.08] bg-lab-900/60 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About Nanjundan Lab</h2>
            <p className="mt-2 text-sm text-blue-300/90">Advanced materials, clean energy, and energy storage innovation</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Nanjundan Lab develops advanced materials and electrochemical technologies for clean energy and circular-resource systems.
              Our published work and ongoing projects span graphene and hybrid nanomaterials, next-generation batteries and
              supercapacitors, and translation from lab chemistry to practical engineering outcomes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Current focus areas include critical mineral recovery from e-waste and secondary resources, sustainable bioleaching and
              bio-assisted extraction pathways, and hydrogen generation from seawater-integrated systems. The lab combines materials
              design, process innovation, and industry-linked research to build scalable solutions for energy storage and decarbonization.
              Nanjundan Lab is part of the Centre for Future Materials at UniSQ, strengthening interdisciplinary collaboration and
              translation of advanced materials research into real-world clean-energy impact.
            </p>
          </div>
        </section>

        <FundedBy />

        {/* Contact */}
        <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/25 bg-gradient-to-r from-lab-900 via-lab-950 to-lab-900 px-8 py-10 text-center sm:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_55%)]" />
            <div className="relative space-y-4">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">{homeCopy.contactTitle}</h2>
              <p className="mx-auto max-w-md text-sm text-slate-400">{homeCopy.contactDescription}</p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-950/40 transition hover:bg-blue-500 active:scale-[0.98]"
                >
                  Contact
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/50 hover:bg-blue-500/5 active:scale-[0.98]"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
