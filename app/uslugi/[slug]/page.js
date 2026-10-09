import Link from 'next/link';
import Image from 'next/image';
import site from '@/content/site.json';
import CtaBlock from '@/components/CtaBlock';
import CaseCard from '@/components/CaseCard';
import SeoIncluded from '@/components/SeoIncluded';
import { localBusiness, breadcrumbs, priceNumber } from '@/lib/schema';

const bySlug = (slug) => site.services.find((s) => s.slug === slug);
const caseByName = (name) => site.cases.find((c) => c.name === name);

export function generateStaticParams() { return site.services.map((s) => ({ slug: s.slug })); }

export function generateMetadata({ params }) {
  const s = bySlug(params.slug);
  return { title: s.title, description: s.description, alternates: { canonical: '/uslugi/' + s.slug + '/' } };
}

export default function ServicePage({ params }) {
  const s = bySlug(params.slug);
  const others = site.services.filter((x) => x.slug !== s.slug);
  const relCases = (s.cases || []).map(caseByName).filter(Boolean);
  const ld = {
    '@context': 'https://schema.org', '@type': 'Service', serviceType: s.name, description: s.description,
    provider: localBusiness(),
    areaServed: [{ '@type': 'City', name: 'Иркутск' }, { '@type': 'Country', name: 'Россия' }],
    offers: { '@type': 'Offer', price: priceNumber(s.price), priceCurrency: 'RUB' },
  };
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Услуги', path: '/uslugi/' }, { name: s.name, path: '/uslugi/' + s.slug + '/' }]);
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: s.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs"><Link href="/">Главная</Link> → <Link href="/uslugi">Услуги</Link> → <span>{s.name}</span></nav>
          <span className="eyebrow light">{s.name} · {s.price}{s.term && ' · ' + s.term}</span>
          <h1>{s.h1}</h1>
          <p>{s.intro}</p>
          <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="#lead" className="btn btn-primary">Рассчитать стоимость →</Link>
            <Link href="/tarify" className="btn btn-ghost">Тарифы</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Что входит</span><h2>Что вы получаете</h2><p><b>Для кого:</b> {s.forWhom}</p></div>
          <div className="grid g3">
            {s.blocks.map((b, i) => <div className="niche-block" key={i}><h3>{b.h}</h3><p>{b.p}</p></div>)}
          </div>
          {s.honest && <div className="note" style={{ marginTop: 22 }}>{s.honest}</div>}
        </div>
      </section>

      {s.compare && (
        <section className="compare on-navy">
          <div className="wrap">
            <div className="sec-head"><span className="eyebrow light">В чём разница</span><h2>Лендинг или <span className="hl">многостраничный сайт</span></h2></div>
            <div className="cmp">
              <div className="col"><h3><span className="cross">○</span> Лендинг</h3><ul>{s.compare.map((r, i) => <li key={i}><span className="cross">✕</span> {r[0]}</li>)}</ul></div>
              <div className="col good"><h3><span className="tick">◆</span> Многостраничный сайт</h3><ul>{s.compare.map((r, i) => <li key={i}><span className="tick">✓</span> <b>{r[1]}</b></li>)}</ul></div>
            </div>
          </div>
        </section>
      )}

      {s.pagespeed && (
        <section className="pagespeed">
          <div className="wrap">
            <div className="sec-head" style={{ maxWidth: 720 }}><span className="eyebrow">{site.pagespeed.eyebrow}</span><h2>{site.pagespeed.title}<span className="hl">{site.pagespeed.titleHl}</span></h2><p>{site.pagespeed.lead}</p></div>
            <div className="ps-wrap">
              <div className="ps-scores">{site.pagespeed.scores.map((sc, i) => <div className="ps-score" key={i}><div className="ps-ring">{sc.n}</div><span>{sc.l}</span></div>)}</div>
              <div className="ps-proof">
                <Image src="/img/pagespeed-phone.webp" alt="Сайт клиента в Google PageSpeed" width={255} height={503} className="ps-phone" />
                <div className="ps-proof-txt"><p className="ps-note">{site.pagespeed.note}</p><a href={site.pagespeed.url} target="_blank" rel="noopener" className="btn btn-outline">{site.pagespeed.btn} →</a></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {relCases.length > 0 && (
        <section className="sec-pale">
          <div className="wrap">
            <div className="sec-head"><span className="eyebrow">Примеры</span><h2>Мы уже делали такое</h2></div>
            <div className="case-grid2">
              {relCases.map((c) => <CaseCard c={c} key={c.slug} />)}
            </div>
          </div>
        </section>
      )}

      <SeoIncluded />

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="sec-head"><span className="eyebrow">Частые вопросы</span><h2>Коротко о главном</h2></div>
          {s.faq.map((f, i) => <div className="faq-item" key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
        </div>
      </section>

      <CtaBlock title="Обсудим ваш сайт" text="Расскажите про нишу и город — предложим структуру и назовём точную цену. Консультация бесплатная." />

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Другие услуги</span><h2>Может, вам нужен другой формат</h2></div>
          <div className="niche-links">{others.map((o) => <Link key={o.slug} href={'/uslugi/' + o.slug} className="niche-chip">{o.name}</Link>)}</div>
        </div>
      </section>
    </>
  );
}
