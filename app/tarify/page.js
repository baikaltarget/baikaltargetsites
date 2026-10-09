import Link from 'next/link';
import site from '@/content/site.json';
import CtaBlock from '@/components/CtaBlock';
import PageHero from '@/components/PageHero';
import { breadcrumbs, priceNumber } from '@/lib/schema';

export const metadata = {
  title: 'Сколько стоит сайт — цены на создание сайта в Иркутске, от 35 000 ₽ | ' + site.brand,
  description: 'Стоимость создания сайта в Иркутске: многостраничный сайт под ключ от 35 000 ₽, Стандарт от 60 000 ₽, Максимум от 120 000 ₽, корпоративный и интернет-магазин от 80 000 ₽. Что входит в цену и из чего она складывается.',
  alternates: { canonical: '/tarify/' },
};

export default function Tarify() {
  const p = site.tarifyPage;
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Тарифы', path: '/tarify/' }]);
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const offersLd = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Создание сайта под ключ', provider: { '@type': 'Organization', name: site.brand },
    offers: site.tariffs.map((t) => ({ '@type': 'Offer', name: 'Тариф ' + t.name, price: priceNumber(t.price), priceCurrency: 'RUB', description: t.term })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersLd) }} />
      <PageHero
        crumbs={[{ name: 'Главная', href: '/' }, { name: 'Тарифы' }]}
        eyebrow="Тарифы" title="Сколько стоит сайт:" titleHl="цены на создание сайта в Иркутске"
        lead="Многостраничный сайт под ключ стоит от 35 000 ₽ и делается от 5 рабочих дней. Цена зависит от количества страниц: Старт 20–30 страниц, Стандарт 40–60, Максимум — без ограничений. SEO-база, формы и готовность к рекламе входят в каждый тариф, ежемесячных платежей нет."
        primary={{ href: '#lead', text: 'Рассчитать стоимость →' }} secondary={{ href: '#support', text: 'Поддержка после сдачи' }}>
        <div className="trust">
          {site.tariffs.map((t, i) => <div key={i}><b>{t.price}</b><small>{t.name} · {t.term.split(' · ')[1] || t.term}</small></div>)}
        </div>
      </PageHero>

      <section className="sec-pale">
        <div className="wrap">
          <div className="tariffs">
            {site.tariffs.map((t, i) => (
              <div className={'plan' + (t.feature ? ' feature' : '')} key={i}>
                <span className="name">{t.name}</span>
                <div className="price">{t.price}</div>
                <div className="term">{t.term}</div>
                <ul>{t.items.map((it, j) => <li key={j}><span className="tick">✓</span> {it}</li>)}</ul>
                <Link href="#lead" className={'btn ' + (t.feature ? 'btn-primary' : 'btn-outline')}>Выбрать {t.name}</Link>
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

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Из чего цена</span><h2>От чего зависит <span className="hl">стоимость сайта</span></h2></div>
          <div className="grid g2">
            {p.priceFrom.map((x, i) => <div className="niche-block" key={i}><h3>{x.h}</h3><p>{x.p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="compare on-navy">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow light">Сравнение</span><h2>{p.market.title}<span className="hl">{p.market.hl}</span></h2><p>{p.market.lead}</p></div>
          <div style={{ overflowX: 'auto' }}>
            <table className="tbl tbl-dark">
              <thead><tr><th>Вариант</th><th>Цена</th><th>Что получаете</th></tr></thead>
              <tbody>{p.market.rows.map((r, i) => (
                <tr key={i} className={i === p.market.rows.length - 1 ? 'hi' : ''}><td><b>{r[0]}</b></td><td className="p">{r[1]}</td><td>{r[2]}</td></tr>
              ))}</tbody>
            </table>
          </div>
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
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Как работаем</span><h2>От вводных до сайта — <span className="hl">без долгих анкет</span></h2><p>{site.stepsLead}</p></div>
          <div className="grid g3">
            {site.steps.map((st, i) => <div className="step-card" key={i}><span className="step-num">{st.n}</span><div><h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 17, color: 'var(--navy)', marginBottom: 6 }}>{st.h}</h3><p>{st.p}</p></div></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="sec-head"><span className="eyebrow">Частые вопросы</span><h2>Про цены — <span className="hl">честно</span></h2></div>
          <div className="faq-acc" style={{ gridTemplateColumns: '1fr' }}>
            {p.faq.map((f, i) => (
              <details className="faq-d" key={i} open={i < 1}>
                <summary><h3>{f.q}</h3><span className="faq-x" aria-hidden="true">+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock title="Назовём точную цену" text="Расскажите про нишу, услуги и районы — посчитаем страницы и скажем цену и срок. 15 минут, бесплатно." formTitle="Рассчитать стоимость" bullets={['Посчитаем, сколько страниц нужно под ваши запросы', 'Скажем, какой тариф подходит, без навязывания', 'Назовём цену и срок — они не изменятся в процессе']} />
    </>
  );
}
