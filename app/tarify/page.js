import Link from 'next/link';
import site from '@/content/site.json';

export const metadata = {
  title: 'Сколько стоит сайт — цены на создание сайта в Иркутске, от 35 000 ₽ | ' + site.brand,
  description: 'Стоимость создания сайта в Иркутске: многостраничный сайт под ключ от 35 000 ₽, Стандарт от 60 000 ₽, Максимум от 120 000 ₽, корпоративный и интернет-магазин от 80 000 ₽. Что входит в цену и из чего она складывается.',
  alternates: { canonical: '/tarify/' },
};

export default function Tarify() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Тарифы</span>
          <h1>Сколько стоит сайт: цены на создание сайта в Иркутске</h1>
          <p>Многостраничный сайт под ключ стоит от 35 000 ₽ и делается от 5 рабочих дней. Цена зависит от количества страниц: Старт 20–30 страниц, Стандарт 40–60, Максимум — без ограничений. SEO-база, формы и готовность к рекламе входят в каждый тариф, ежемесячных платежей нет.</p>
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap">
          <div className="tariffs">
            {site.tariffs.map((p, i) => (
              <div className={'plan' + (p.feature ? ' feature' : '')} key={i}>
                <span className="name">{p.name}</span>
                <div className="price">{p.price}</div>
                <div className="term">{p.term}</div>
                <ul>{p.items.map((it, j) => <li key={j}><span className="tick">✓</span> {it}</li>)}</ul>
                <Link href="/kontakty" className={'btn ' + (p.feature ? 'btn-primary' : 'btn-outline')}>Выбрать {p.name}</Link>
              </div>
            ))}
          </div>
          <div className="tariff-extra">
            {site.tariffExtra.map((t, i) => (
              <Link href={t.url} className="tx" key={i}>
                <div><span className="tx-name">{t.name}</span><p>{t.desc}</p></div>
                <div className="tx-price">{t.price} <span>→</span></div>
              </Link>
            ))}
          </div>
          <div className="note" dangerouslySetInnerHTML={{ __html: site.tariffNote }} />
        </div>
      </section>

      <section id="support">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">После сдачи</span>
            <h2>Правки и ведение — <span className="hl">по желанию</span></h2>
            <p dangerouslySetInnerHTML={{ __html: site.supportIntro }} />
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="tbl">
              <thead><tr>{site.support.head.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
              <tbody>{site.support.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} className={i === 0 && j > 0 ? 'p' : ''}>{c}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
          <div style={{ marginTop: 30 }}>
            <Link href="/kontakty" className="btn btn-primary">Обсудить проект →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
