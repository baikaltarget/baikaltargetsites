/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // статическая генерация (SSG) под Vercel/любой хостинг
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
