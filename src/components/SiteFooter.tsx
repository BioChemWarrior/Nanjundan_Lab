import { principalInvestigator, site } from "@/lib/content";
import { FooterAcknowledgement } from "@/components/FooterAcknowledgement";
import { SocialProfileLinks } from "@/components/SocialProfileLinks";

export function SiteFooter() {
  return (
    <footer className="border-t border-unisq-200/40 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-2 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-unisq-700">Connect</p>
        <SocialProfileLinks
          className="mt-1 justify-center"
          size="large"
          linkedin={principalInvestigator.links.linkedin}
          universityBio={principalInvestigator.links.universityBio}
          scholar={principalInvestigator.links.scholar}
          researchGate={principalInvestigator.links.researchGate}
          email={site.email}
          orcid={principalInvestigator.links.orcid}
        />
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-1 text-center sm:px-6 lg:px-8">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} {site.name}.</p>
        <p className="mx-auto mt-0.5 max-w-3xl text-[11px] leading-snug text-slate-400">
          Nanjundan Lab is an independently managed research website. References to the University of
          Southern Queensland are provided for affiliation purposes only and do not imply that this
          website is operated, endorsed, or officially maintained by the University.
        </p>
      </div>

      <FooterAcknowledgement />
    </footer>
  );
}
