import { LabLogo } from "@/components/LabLogo";

/** Fixed lab logo on the page edge — outside the header flow so nav stays centered. */
export function SiteLogoRail() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] flex items-center py-3 pl-2 sm:py-6 sm:pl-5 lg:pl-6">
      <LabLogo variant="mark" className="pointer-events-auto xl:hidden" />
      <LabLogo variant="full" className="pointer-events-auto hidden xl:flex" />
    </div>
  );
}
