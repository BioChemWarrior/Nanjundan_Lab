import type { NextConfig } from "next";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

/**
 * Security headers for a mostly-static Next.js site.
 * CSP allows Altmetric embeds used on the publications page.
 */
const ContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  // Altmetric badges: embed.js + secondary badge bundle from embed.altmetric.com;
  // citation data is loaded via JSONP script tags from api.altmetric.com.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://embed.altmetric.com https://api.altmetric.com`,
  "style-src 'self' 'unsafe-inline' https://embed.altmetric.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://pub.orcid.org https://api.altmetric.com https://embed.altmetric.com https://badges.altmetric.com https://d1uo4w7k31k5mn.cloudfront.net",
  "frame-src 'self' https://embed.altmetric.com https://www.altmetric.com https://www.youtube.com https://www.youtube-nocookie.com",
  "media-src 'self' blob:",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep Next.js focused on this app folder even if parent folders have lockfiles.
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
