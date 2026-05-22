import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory Website",
  description: "Laboratory website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
