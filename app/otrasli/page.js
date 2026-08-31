import Link from 'next/link';
import site from '@/content/site.json';

const NICHE_ICONS = {
  'stroitelnaya-kompaniya': '🏗️', 'proizvodstvo-zavod': '🏭', 'medicinskaya-klinika': '🏥',
  'stomatologiya': '🦷', 'fitnes-klub': '💪', 'klining': '🧹', 'otoplenie-santehnika': '🔧',
  'salon-krasoty': '💇', 'avtoservis': '🚗', 'sayt-katalog-tovarov': '📦',
};

export const metadata = {
  title: 'Сайты под отрасль — для строительства, клиник, фитнеса и других | ' + site.brand,
  description: 'Разработка сайтов под конкретную отрасль: строительство, производство, медицина, фитнес, клининг, автосервис, каталоги товаров. Многостраничные SEO-сайты от 25 000 ₽.',
  alternates: { canonical: '/otrasli/' },
};

export default function NicheIndex() {
  const p = site.otrasliPage;
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Кому подходит</span>
          <h1>Сайты под вашу отрасль</h1>
          <p>{p.lead}</p>
          <Link href="/kontakty" className="btn btn-primary" style={{ marginTop: 22 }}>Обсудить мой проект →</Link>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="niche-grid">
            {site.niches.map((n) => (
              <Link href={'/otrasli/' + n.slug} className="niche-card" key={n.slug}>
                <span className="niche-card-ic">{NICHE_ICONS[n.slug] || '•'}</span>
                <h3>{n.name}</h3>
                {n.tag && <span className="niche-card-tag">{n.tag}</span>}
                <p>{n.intro}</p>
                <span className="more">Подробнее →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="otrasli-cta">
        <div className="wrap">
          <div className="octa">
            <div>
              <h2>{p.ctaTitle}</h2>
              <p>{p.ctaText}</p>
            </div>
            <Link href="/kontakty" className="btn btn-orange">{p.ctaBtn} →</Link>
          </div>
        </div>
      </section>

      <section className="seo-text">
        <div className="wrap">
          <h2>Разработка сайтов под отрасль в Иркутске и по России</h2>
          <p>{p.seo}</p>
        </div>
      </section>
    </>
  );
}
