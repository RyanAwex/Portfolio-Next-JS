import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForBuild: true,
    turbopackFileSystemCacheForDev: true,
  },
  cacheComponents: true,
  // reactStrictMode: true,
  images: {
    unoptimized: true, // Allow images from any source without restrictions
  },
};

export default nextConfig;
