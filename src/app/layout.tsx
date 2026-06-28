import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClippedInteractiveBackdrop } from "@/components/ClippedInteractiveBackdrop";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteLogoRail } from "@/components/SiteLogoRail";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteMain } from "@/components/SiteMain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nanjundan Lab",
    template: "%s | Nanjundan Lab",
  },
  description:
    "Interdisciplinary research laboratory advancing materials chemistry, clean energy materials, and energy storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#020b1a] text-slate-900 antialiased">
        <Suspense fallback={<div aria-hidden className="fixed inset-0 z-0 bg-[#020b1a]" />}>
          <ClippedInteractiveBackdrop />
        </Suspense>
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteLogoRail />
          <SiteHeader />
          <SiteMain>{children}</SiteMain>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
