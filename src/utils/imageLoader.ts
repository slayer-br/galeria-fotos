// src/utils/imageLoader.ts
const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
  // Espera que 'src' seja apenas o nome do arquivo, ex: "1.jpg"
  return `${basePath}/assets/${src}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;
