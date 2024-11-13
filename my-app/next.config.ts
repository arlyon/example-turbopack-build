import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      // unstablePersistentCaching: 1,
    },
    // turbotrace: {},
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
