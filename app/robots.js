import site from '@/content/site.json';

// ВРЕМЕННО: пока site.noindex = true, robots.txt закрывает весь сайт.
// Снять перед публикацией: поставить "noindex": false в content/site.json
export default function robots() {
  if (site.noindex) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: site.domain + '/sitemap.xml',
    host: site.domain,
  };
}
