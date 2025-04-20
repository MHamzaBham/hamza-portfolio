import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Required for static export
  basePath: process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hamza-portfolio/' : '',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;