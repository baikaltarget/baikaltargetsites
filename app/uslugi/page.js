import Link from 'next/link';
import site from '@/content/site.json';
import { SVC_ICONS } from '@/components/ServiceIcons';
import SeoIncluded from '@/components/SeoIncluded';
import CaseCard from '@/components/CaseCard';
import LeadForm from '@/components/LeadForm';
import { breadcrumbs } from '@/lib/schema';

export const metadata = {
  title: 'Услуги веб-студии в Иркутске: сайт под ключ, корпоративный, интернет-магазин, редизайн | ' + site.brand,
  description: 'Какой сайт нужен вашему бизнесу: сайт под ключ от 35 000 ₽, корпоративный, интернет-магазин под заявку, многостраничный, доработка и редизайн, поддержка. Все — с SEO с первого дня. Иркутск.',
  alternates: { canonical: '/uslugi/' },
};

export default function Uslugi() {
  const p = site.uslugiPage;
  const items = [...site.services.map((s) => ({ ...s, url: '/uslugi/' + s.slug })), ...p.extra];
  const topCases = site.cases.filter((c) => c.top).slice(0, 3);
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Услуги', path: '/uslugi/' }]);
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs"><Link href="/">Главная</Link> → <span>Услуги</span></nav>
          <span className="eyebrow light">Услуги</span>
          <h1>Какой сайт нужен вашему бизнесу</h1>
          <p>{p.lead}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="svc-grid">
            {items.map((sv, i) => (
              <Link href={sv.url} className="svc svc-wide" key={i}>
                <span className="svc-ic">{SVC_ICONS[sv.ic]}</span>
                <span className="svc-txt">
                  <h3>{sv.name}</h3>
                  <p>{sv.short}</p>
                  {sv.forWhom && <span className="svc-for"><b>Кому:</b> {sv.forWhom}</span>}
                  <span className="svc-foot">
                    <span className="svc-meta"><b>{sv.price}</b>{sv.term && <span>· {sv.term}</span>}</span>
                    <span className="svc-more">Подробнее →</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Сравнение</span><h2>{p.chooseTitle}<span className="hl">{p.chooseHl}</span></h2><p>{p.chooseLead}</p></div>
          <div style={{ overflowX: 'auto' }}>
            <table className="tbl tbl-choose">
              <thead><tr><th>Тип сайта</th><th>Цена</th><th>Срок</th><th>Объём</th><th>Кому подходит</th></tr></thead>
              <tbody>
                {site.services.map((s) => (
                  <tr key={s.slug}>
                    <td><Link href={'/uslugi/' + s.slug} style={{ color: 'var(--blue)', fontWeight: 700 }}>{s.name}</Link></td>
                    <td className="p">{s.price}</td>
                    <td>{s.term}</td>
                    <td>{s.volume || '—'}</td>
                    <td>{s.forWhom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 26 }}><Link href="/tarify" className="btn btn-outline">Подробно о ценах →</Link></div>
        </div>
      </section>

      <SeoIncluded />

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Примеры</span><h2>Сайты, которые <span className="hl">уже приносят клиентов</span></h2></div>
          <div className="case-grid">{topCases.map((c) => <CaseCard c={c} key={c.slug} />)}</div>
          <div style={{ marginTop: 26 }}><Link href="/primery" className="btn btn-outline">Все примеры работ →</Link></div>
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="sec-head"><span className="eyebrow">Частые вопросы</span><h2>Как выбрать и не переплатить</h2></div>
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

      <section id="lead" className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Не знаете, какой нужен? Обсудим</h2>
            <p>Расскажите про нишу и город — скажем, какой формат подойдёт, и назовём цену. Консультация бесплатная.</p>
            <div className="contacts">
              <a href={site.phoneHref}>☎ {site.phone}</a>
              <a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
