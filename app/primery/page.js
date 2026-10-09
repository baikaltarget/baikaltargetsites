import Link from 'next/link';
import site from '@/content/site.json';
import CaseCard from '@/components/CaseCard';

export const metadata = {
  title: 'Примеры сайтов — наши работы для бизнеса Иркутска и других городов | ' + site.brand,
  description: 'Портфолио студии: многостраничные SEO-сайты для стройки, производства, фитнеса, отелей, автосервиса с цифрами результата из поиска.',
  alternates: { canonical: '/primery/' },
};

export default function Primery() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs"><Link href="/">Главная</Link> → <span>Примеры работ</span></nav>
          <span className="eyebrow light">Примеры работ</span>
          <h1>Сайты, которые мы сделали</h1>
          <p>Проекты из Иркутска и других городов с цифрами результата из поиска. Открывайте кейс — внутри что было, что сделали и что получилось.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="case-grid2">
            {site.cases.map((c) => <CaseCard c={c} key={c.slug} />)}
          </div>
          <div style={{ marginTop: 34 }}>
            <Link href="/kontakty" className="btn btn-primary">Хочу такой сайт →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
