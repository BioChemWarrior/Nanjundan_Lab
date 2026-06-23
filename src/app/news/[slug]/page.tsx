import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "News",
  robots: { index: false, follow: false },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [];
}

export default async function NewsArticlePage({ params }: Props) {
  await params;
  redirect("/");
}
