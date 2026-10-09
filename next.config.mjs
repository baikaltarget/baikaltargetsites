/** @type {import('next').NextConfig} */
const nextConfig = {
  // Страницы генерируются статически при сборке (SSG), а /api/lead работает как серверная функция Vercel.
  // Раньше стоял output:'export' — он запрещает API-роуты, поэтому форма не могла слать заявки в бота.
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
