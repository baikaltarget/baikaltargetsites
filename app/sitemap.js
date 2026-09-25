import site from '@/content/site.json';
import { getAllSlugs } from '@/lib/blog';

export default function sitemap() {
  const base = site.domain;
  const stat = ['', '/uslugi', '/otrasli', '/tarify', '/primery', '/blog', '/kontakty'].map((p) => ({
    url: base + p + (p ? '/' : '/'), lastModified: new Date(), changeFrequency: 'monthly', priority: p === '' ? 1 : 0.8,
  }));
  const services = site.services.map((sv) => ({ url: base + '/uslugi/' + sv.slug + '/', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 }));
  const niches = site.niches.map((n) => ({ url: base + '/otrasli/' + n.slug + '/', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 }));
  const posts = getAllSlugs().map((slug) => ({
    url: base + '/blog/' + slug + '/', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6,
  }));
  return [...stat, ...services, ...niches, ...posts];
}
