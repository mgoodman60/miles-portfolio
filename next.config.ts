import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Drop the 3840w candidate so the home LCP image stays closer to a desktop viewport.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    qualities: [60, 75],
  },
};

export default nextConfig;
