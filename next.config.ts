import type { NextConfig } from "next";

// Cloudflare Pages serves the static `out/` directory from `output: "export"`.
// The default image optimizer needs a Next.js server, so images are served as-is.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // Drop the 3840w candidate so the home LCP image stays closer to a desktop viewport.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    qualities: [60, 75],
  },
};

export default nextConfig;
