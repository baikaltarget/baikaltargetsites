import Link from 'next/link';
import site from '@/content/site.json';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPost } from '@/lib/blog';
import { author } from '@/lib/schema';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const { meta, draft } = getPost(params.slug);
  if (draft) return {};
  return {
    title: meta.title + ' | ' + site.brand,
    description: meta.description,
    alternates: { canonical: '/blog/' + params.slug + '/' },
    openGraph: { type: 'article', title: meta.title, description: meta.description },
  };
}

export default function Post({ params }) {
  const { meta, html, draft } = getPost(params.slug);
  if (draft) notFound();
  const ld = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: meta.title, description: meta.description, datePublished: meta.date,
    author: author(), dateModified: meta.updated || meta.date,
    publisher: { '@type': 'Organization', name: site.brand },
    mainEntityOfPage: site.domain + '/blog/' + params.slug + '/',
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <article className="article">
        <span className="eyebrow">{meta.category}</span>
        <h1>{meta.title}</h1>
        <div className="meta">{new Date(meta.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} · {author().name}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      {meta.related && meta.related.length > 0 && (
        <div className="related">
          <h4>Ещё по теме</h4>
          {meta.related.map((r, i) => <a key={i} href={r.url} target="_blank" rel="noopener">{r.text} ↗</a>)}
          <Link href="/blog" style={{ display: 'block', marginTop: 10, fontWeight: 600 }}>← Все статьи блога</Link>
        </div>
      )}
      <div style={{ maxWidth: 760, margin: '30px auto 0', padding: '0 22px' }}>
        <Link href="/kontakty" className="btn btn-primary">Обсудить свой сайт →</Link>
      </div>
    </>
  );
}
