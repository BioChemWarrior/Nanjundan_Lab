import { redirect } from "next/navigation";
import { principalInvestigatorId } from "@/lib/content";

export const runtime = "nodejs";

/** Legacy URL — PI nav links directly to the profile page. */
export default function PrincipalInvestigatorPage() {
  redirect(`/team/${principalInvestigatorId}`);
}
