/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/galeria-fotos',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
