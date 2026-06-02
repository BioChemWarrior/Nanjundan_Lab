import { redirect } from "next/navigation";

export const runtime = "nodejs";

/** Legacy /team URL — send visitors to the current team listing. */
export default function TeamIndexPage() {
  redirect("/team/current");
}
