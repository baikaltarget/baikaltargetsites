/** @type {import('next').NextConfig} */
// Хостинг — Бегет (Apache + PHP). Сайт собирается в готовые HTML-файлы (папка out/),
// GitHub Action .github/workflows/publish.yml выкладывает их по FTP.
// Заявки с формы принимает public/api/lead.php (на Vercel это был app/api/lead/route.js).
// После сборки scripts/htaccess.mjs создаёт out/.htaccess.
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
