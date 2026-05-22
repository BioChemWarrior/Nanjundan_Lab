import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep Next.js focused on this app folder even if parent folders have lockfiles.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
