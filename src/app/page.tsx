import { FundedBy } from "@/components/FundedBy";
import { HeroEnergyFlowDecor } from "@/components/HeroEnergyFlowDecor";
import { labBrand } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero aligned toward the top; backdrop stays one continuous layer behind transparent content */}
      <section className="flex flex-col items-center justify-start overflow-hidden px-6 pb-6 pt-2 text-center sm:pb-8 sm:pt-4 md:pt-6">
        <HeroEnergyFlowDecor />
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {labBrand.title}
        </h1>
        <p className="mt-6 max-w-none whitespace-nowrap text-center text-lg font-light tracking-wide text-slate-300 sm:mt-7 sm:text-xl md:text-2xl">
          {labBrand.subtitle}
        </p>
      </section>

      <div className="space-y-16 pb-24 text-slate-100 sm:space-y-20">
        {/* About — directly under the hero */}
        <section className="mx-auto mt-20 max-w-[1000px] px-4 sm:mt-28 md:mt-36 lg:mt-44 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-md">
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
      </div>
    </>
  );
}
