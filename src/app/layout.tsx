import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClippedInteractiveBackdrop } from "@/components/ClippedInteractiveBackdrop";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteLogoRail } from "@/components/SiteLogoRail";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteMain } from "@/components/SiteMain";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Nanjundan Research Group",
    template: "%s | Nanjundan Research Group",
  },
  description:
    "Interdisciplinary research group advancing materials chemistry, clean energy materials, and energy storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
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
