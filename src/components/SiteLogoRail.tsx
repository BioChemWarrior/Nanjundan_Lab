import { LabLogo } from "@/components/LabLogo";

/** Fixed lab logo on the page edge — outside the header flow so nav stays centered. */
export function SiteLogoRail() {
  return (
    <div className="pointer-events-none fixed left-3 top-3 z-[60] sm:left-5 sm:top-4 lg:left-6 lg:top-5">
      <LabLogo variant="mark" className="pointer-events-auto h-10 w-10 xl:hidden" />
      <LabLogo
        variant="full"
        className="pointer-events-auto hidden h-11 w-auto xl:block xl:h-14"
      />
    </div>
  );
}
