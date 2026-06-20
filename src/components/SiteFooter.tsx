import { principalInvestigator, site } from "@/lib/content";
import { SocialProfileLinks } from "@/components/SocialProfileLinks";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Connect</p>
        <SocialProfileLinks
          className="mt-4 justify-center"
          size="large"
          linkedin={principalInvestigator.links.linkedin}
          universityBio={principalInvestigator.links.universityBio}
          scholar={principalInvestigator.links.scholar}
          researchGate={principalInvestigator.links.researchGate}
          email={site.email}
          orcid={principalInvestigator.links.orcid}
        />
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}.
      </div>
    </footer>
  );
}
