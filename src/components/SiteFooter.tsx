import { principalInvestigator, site } from "@/lib/content";
import { FooterAcknowledgement } from "@/components/FooterAcknowledgement";
import { SocialProfileLinks } from "@/components/SocialProfileLinks";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-3 text-center sm:px-6 sm:py-4 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Connect</p>
        <SocialProfileLinks
          className="mt-2 justify-center"
          size="large"
          linkedin={principalInvestigator.links.linkedin}
          universityBio={principalInvestigator.links.universityBio}
          scholar={principalInvestigator.links.scholar}
          researchGate={principalInvestigator.links.researchGate}
          email={site.email}
          orcid={principalInvestigator.links.orcid}
        />
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-center sm:px-6 lg:px-8">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} {site.name}.</p>
      </div>

      <FooterAcknowledgement />
    </footer>
  );
}
