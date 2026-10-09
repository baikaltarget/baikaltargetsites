import site from '@/content/site.json';
import { getAllSlugs } from '@/lib/blog';

export default function sitemap() {
  const base = site.domain;
  const now = new Date();
  const page = (p, priority, changeFrequency = 'monthly') => ({ url: base + p, lastModified: now, changeFrequency, priority });

  const stat = [page('/', 1, 'weekly'), page('/uslugi/', 0.8), page('/otrasli/', 0.7), page('/tarify/', 0.8),
    page('/primery/', 0.8), page('/otzyvy/', 0.6), page('/o-studii/', 0.6), page('/kontakty/', 0.6)];
  const posts = getAllSlugs();
  if (posts.length) stat.push(page('/blog/', 0.6, 'weekly'));

  const services = site.services.map((sv) => page('/uslugi/' + sv.slug + '/', 0.9));
  const niches = site.niches.filter((n) => !n.hidden).map((n) => page('/otrasli/' + n.slug + '/', 0.7));
  const cases = site.cases.filter((c) => !c.placeholder).map((c) => page('/primery/' + c.slug + '/', 0.6));
  const blog = posts.map((slug) => page('/blog/' + slug + '/', 0.6));
  return [...stat, ...services, ...niches, ...cases, ...blog];
}
