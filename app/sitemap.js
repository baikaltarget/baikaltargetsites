import site from '@/content/site.json';
import { getAllSlugs } from '@/lib/blog';

export default function sitemap() {
  const base = site.domain;
  const stat = ['', '/nishi', '/tarify', '/primery', '/blog', '/kontakty'].map((p) => ({
    url: base + p + (p ? '/' : '/'), lastModified: new Date(), changeFrequency: 'monthly', priority: p === '' ? 1 : 0.8,
  }));
  const niches = site.niches.map((n) => ({ url: base + '/nishi/' + n.slug + '/', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 }));
  const posts = getAllSlugs().map((slug) => ({
    url: base + '/blog/' + slug + '/', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6,
  }));
  return [...stat, ...niches, ...posts];
}
