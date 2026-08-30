import Link from 'next/link';
import Image from 'next/image';
import site from '@/content/site.json';

export const metadata = {
  title: 'Примеры работ — сайты, которые мы сделали | ' + site.brand,
  description: 'Наши работы: многостраничные SEO-сайты для реального бизнеса с цифрами результата. Стройка, производство, услуги, торговля.',
  alternates: { canonical: '/primery/' },
};

export default function Primery() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Примеры работ</span>
          <h1>Сайты, которые мы сделали</h1>
          <p>Реальные проекты на нашем стеке — с цифрами результата из поиска. Стройка, производство, услуги, торговля, отели и другое.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="case-grid2">
            {site.cases.map((c, i) => (
              <a href={c.url} target="_blank" rel="noopener" className="case2" key={i}>
                {c.img && <span className="case2-img"><Image src={c.img} alt={'Сайт ' + c.name} width={800} height={366} /></span>}
                <div className="case2-body">
                  <div className="case2-top"><span className="case2-niche">{c.niche}</span>{c.city && <span className="case2-city">{c.city}</span>}</div>
                  <h3>{c.name}</h3>
                  {c.before && <p className="case2-before">{c.before}</p>}
                  <div className="case2-result">{c.result}</div>
                  <span className="case2-link">Открыть сайт ↗</span>
                </div>
              </a>
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
