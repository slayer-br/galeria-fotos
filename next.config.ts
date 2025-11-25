import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/galeria-fotos',
  assetPrefix: '/galeria-fotos/',
};

export default nextConfig;
