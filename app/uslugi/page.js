import Link from 'next/link';
import site from '@/content/site.json';

export const metadata = {
  title: 'Услуги — создание сайтов под ключ, корпоративные, каталоги | ' + site.brand,
  description: 'Какой сайт нужен вашему бизнесу: сайт под ключ, корпоративный, сайт-каталог, многостраничный, под SEO. Все — с SEO с первого дня. От 35 000 ₽.',
  alternates: { canonical: '/uslugi/' },
};

export default function Uslugi() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Услуги</span>
          <h1>Какой сайт нужен вашему бизнесу</h1>
          <p>Все варианты — многостраничные и под SEO с первого дня. Лендинги и интернет-магазины с корзиной не делаем: наша специализация — сайты, которые приводят клиентов из поиска.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="svc-grid">
            {site.services.map((sv, i) => (
              <Link href={'/uslugi/' + sv.slug} className="svc" key={i}>
                <h3>{sv.name}</h3>
                <p>{sv.short}</p>
                <div className="svc-meta"><b>{sv.price}</b>{sv.term && <span>· {sv.term}</span>}</div>
                <span className="svc-more">Подробнее →</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 34 }}><Link href="/kontakty" className="btn btn-primary">Не знаете, какой нужен? Обсудим →</Link></div>
        </div>
      </section>
    </>
  );
}
