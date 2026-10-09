import Link from 'next/link';
import Image from 'next/image';
import site from '@/content/site.json';
import CtaBlock from '@/components/CtaBlock';
import CaseCard from '@/components/CaseCard';
import SeoIncluded from '@/components/SeoIncluded';
import { localBusiness, breadcrumbs } from '@/lib/schema';

const bySlug = (slug) => site.niches.find((n) => n.slug === slug);
const caseByName = (name) => site.cases.find((c) => c.name === name);

export function generateStaticParams() {
  return site.niches.filter((n) => !n.hidden).map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const n = bySlug(params.slug);
  return {
    title: n.title,
    description: n.description,
    alternates: { canonical: '/otrasli/' + n.slug + '/' },
  };
}

export default function NichePage({ params }) {
  const n = bySlug(params.slug);
  const others = site.niches.filter((x) => x.slug !== n.slug && !x.hidden).slice(0, 6);
  const relCases = (n.cases || []).map(caseByName).filter(Boolean);

  const serviceLd = {
    '@context': 'https://schema.org', '@type': 'Service',
    serviceType: n.h1, description: n.description,
    provider: localBusiness(),
    areaServed: [{ '@type': 'City', name: 'Иркутск' }, { '@type': 'Country', name: 'Россия' }],
    offers: { '@type': 'Offer', price: '35000', priceCurrency: 'RUB' },
  };
  const crumbsLd = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Отрасли', path: '/otrasli/' }, { name: n.name, path: '/otrasli/' + n.slug + '/' }]);
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: n.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs"><Link href="/">Главная</Link> → <Link href="/otrasli">Отрасли</Link> → <span>{n.name}</span></nav>
          <span className="eyebrow light">Разработка сайтов · {n.name}</span>
          <h1>{n.h1}</h1>
          <p>{n.intro}</p>
          <Link href="#lead" className="btn btn-primary" style={{ marginTop: 22 }}>Обсудить проект →</Link>
        </div>
      </section>

      {/* почему нужен такой сайт */}
      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Зачем это вам</span><h2>Что даёт сайт под вашу нишу</h2></div>
          <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 820, marginTop: -20, marginBottom: 34 }}>{n.pain}</p>
          <div className="grid g3">
            {n.why.map((w, i) => (
              <div className="why-card" key={i}><span className="why-num">0{i + 1}</span><p>{w}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* что делаем под нишу */}
      <section className="sec-pale">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Что делаем под нишу</span><h2>Страницы и блоки, которые нужны именно тут</h2></div>
          <div className="grid g2niche">
            {n.blocks.map((b, i) => (
              <div className="niche-block" key={i}><h3>{b.h}</h3><p>{b.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* релевантный кейс */}
      {relCases.length > 0 && (
        <section>
          <div className="wrap">
            <div className="sec-head"><span className="eyebrow">Наш кейс</span><h2>Мы уже делали такое</h2></div>
            <div className="case-grid2">
              {relCases.map((c) => <CaseCard c={c} key={c.slug} />)}
            </div>
          </div>
        </section>
      )}

      <SeoIncluded />

      {/* FAQ */}
      <section className="sec-pale">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="sec-head"><span className="eyebrow">Частые вопросы</span><h2>Коротко о главном</h2></div>
          {n.faq.map((f, i) => (
            <div className="faq-item" key={i}><h3>{f.q}</h3><p>{f.a}</p></div>
          ))}
        </div>
      </section>

      {/* форма-CTA */}
      <CtaBlock title="Сделаем сайт под ваш бизнес" text="Расскажите про нишу и город — предложим структуру страниц и назовём цену. От 35 000 ₽, запуск от 5 дней." formTitle="Обсудим сайт для вашего бизнеса" nichePlaceholder={'Напр.: ' + n.name.toLowerCase() + ', Иркутск'} />

      {/* другие ниши */}
      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Другие отрасли</span><h2>Делаем сайты и для этих сфер</h2></div>
          <div className="niche-links">
            {others.map((o) => <Link key={o.slug} href={'/otrasli/' + o.slug} className="niche-chip">{o.name}</Link>)}
          </div>
          <div style={{ marginTop: 20 }}><Link href="/otrasli" className="btn btn-outline">Все отрасли →</Link></div>
        </div>
      </section>

      {/* SEO-текст */}
      <section className="seo-text">
        <div className="wrap">
          <h2>{n.name}: сайт в Иркутске от 35 000 ₽</h2>
          <p>{n.seo}</p>
        </div>
      </section>
    </>
  );
}
