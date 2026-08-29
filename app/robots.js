import site from '@/content/site.json';
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: site.domain + '/sitemap.xml',
    host: site.domain,
  };
}
