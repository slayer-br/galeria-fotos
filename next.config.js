/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/galeria-fotos",
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
  trailingSlash: true,
};

module.exports = nextConfig;
