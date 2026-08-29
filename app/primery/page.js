import Link from 'next/link';
import site from '@/content/site.json';

export const metadata = {
  title: 'Примеры работ — сайты, которые мы сделали | ' + site.brand,
  description: 'Наши работы: многостраничные SEO-сайты для реального бизнеса. Услуги, гео-страницы, цены и блог, которые приносят заявки.',
  alternates: { canonical: '/primery/' },
};

export default function Primery() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Примеры работ</span>
          <h1>Сайты, которые мы сделали</h1>
          <p>Реальные проекты на нашем стеке: многостраничники под SEO с услугами, гео-страницами, ценами и блогом. Каждый собирает заявки из поиска и с карт.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cases">
            {site.cases.map((c, i) => (
              <div className={'case-card' + (c.placeholder ? ' is-draft' : '')} key={i}>
                <div className="case-top">
                  <div>
                    <div className="case-niche">{c.niche}</div>
                    <h3>{c.name}</h3>
                  </div>
                  {c.city !== '—' && <span className="case-city">{c.city}</span>}
                </div>
                <p className="case-sum">{c.summary}</p>
                <div className="case-tags">
                  {c.tags.map((t, j) => <span className="case-tag" key={j}>{t}</span>)}
                </div>
                {c.placeholder ? (
                  <span className="case-link draft-link">Данные уточняются</span>
                ) : (
                  <a className="case-link" href={c.url} target="_blank" rel="noopener">Открыть сайт ↗</a>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 34 }}>
            <Link href="/kontakty" className="btn btn-primary">Хочу такой сайт →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
