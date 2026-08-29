import Link from 'next/link';
import site from '@/content/site.json';

export const metadata = {
  title: 'Тарифы на разработку сайтов | ' + site.brand,
  description: 'Три тарифа на многостраничный SEO-сайт: Старт 25 000 ₽, Стандарт 40 000 ₽, Максимум 80 000 ₽. Плюс поддержка и индивидуальный дизайн.',
  alternates: { canonical: '/tarify/' },
};

export default function Tarify() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Тарифы</span>
          <h1>Сколько стоит сайт под заявки</h1>
          <p>Пакеты отличаются объёмом страниц и проработкой. SEO-база, формы и готовность к рекламе — во всех трёх.</p>
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
          <div className="note" dangerouslySetInnerHTML={{ __html: site.tariffNote }} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">После сдачи</span>
            <h2>Правки и ведение</h2>
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
