/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/galeria-fotos",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
