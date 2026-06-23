import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "News",
  robots: { index: false, follow: false },
};

export default function NewsPage() {
  redirect("/");
}
