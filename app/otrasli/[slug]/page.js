import Link from 'next/link';
import site from '@/content/site.json';

const bySlug = (slug) => site.niches.find((n) => n.slug === slug);

export function generateStaticParams() {
  return site.niches.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const n = bySlug(params.slug);
  return {
    title: n.title,
    description: n.description,
    alternates: { canonical: '/otrasli/' + n.slug + '/' },
  };
}

export default function NichePage({ params }) {
  const n = bySlug(params.slug);
  const others = site.niches.filter((x) => x.slug !== n.slug).slice(0, 6);
  const ld = {
    '@context': 'https://schema.org', '@type': 'Service',
    serviceType: n.h1, description: n.description,
    provider: { '@type': 'LocalBusiness', name: site.brand, telephone: '+7-800-101-63-20', url: site.mainSite },
    areaServed: 'RU',
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Разработка сайтов · {n.name}</span>
          <h1>{n.h1}</h1>
          <p>{n.intro}</p>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 18, color: 'var(--muted)', marginBottom: 8 }}>{n.pain}</p>
        </div>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Что делаем под нишу</span>
            <h2>Страницы и блоки, которые нужны именно тут</h2>
          </div>
          <div className="grid g2niche">
            {n.blocks.map((b, i) => (
              <div className="niche-block" key={i}>
                <h3>{b.h}</h3>
                <p>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="sec-head"><span className="eyebrow">Частые вопросы</span><h2>Коротко о главном</h2></div>
          {n.faq.map((f, i) => (
            <div className="faq-item" key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
          <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/kontakty" className="btn btn-primary">Обсудить сайт →</Link>
            <Link href="/tarify" className="btn btn-outline">Смотреть тарифы</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Другие ниши</span><h2>Делаем сайты и для этих сфер</h2></div>
          <div className="niche-links">
            {others.map((o) => <Link key={o.slug} href={'/otrasli/' + o.slug} className="niche-chip">{o.name}</Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
