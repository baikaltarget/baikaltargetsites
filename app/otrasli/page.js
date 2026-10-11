import Link from 'next/link';
import site from '@/content/site.json';
import CtaBlock from '@/components/CtaBlock';
import PageHero from '@/components/PageHero';
import CaseCard from '@/components/CaseCard';
import NicheIcon from '@/components/NicheIcons';
import { breadcrumbs } from '@/lib/schema';


export const metadata = {
  title: 'Сайты для бизнеса: строительство, производство, фитнес, отели, автосервис — Иркутск | ' + site.brand,
  description: 'Сайт для строительной компании, производства, фитнес-клуба, инженерных систем, автосервиса, отеля. Структура под то, как ищут вашу услугу. Многостраничные SEO-сайты от 35 000 ₽, Иркутск и вся Россия.',
  alternates: { canonical: '/otrasli/' },
};

export default function NicheIndex() {
  const p = site.otrasliPage;
  const shown = site.niches.filter((n) => !n.hidden);
  const hidden = site.niches.filter((n) => n.hidden);
  const caseNames = new Set(shown.flatMap((n) => n.cases || []));
  const cases = site.cases.filter((c) => caseNames.has(c.name)).slice(0, 3);
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Сайты для бизнеса', path: '/otrasli/' }]);
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero
        crumbs={[{ name: 'Главная', href: '/' }, { name: 'Сайты для бизнеса' }]}
        eyebrow="Кому делаем" title="Сайты для вашего бизнеса:" titleHl="строительство, производство, фитнес, отели"
        lead={p.lead}
        primary={{ href: '#lead', text: 'Обсудить мой проект →' }} secondary={{ href: '/primery', text: 'Примеры работ' }}
        visual={(site.cases.find((c) => c.slug === 'fortes') || site.cases[0]).laptop} visualAlt="Сайт для инженерной компании" />

      <section>
        <div className="wrap">
          <div className="niche-grid">
            {shown.map((n) => (
              <Link href={'/otrasli/' + n.slug} className="niche-card" key={n.slug}>
                <NicheIcon slug={n.slug} className="niche-card-ic nicon" />
                <h3>{n.name}</h3>
                {n.tag && <span className="niche-card-tag">{n.tag}</span>}
                <p>{n.intro}</p>
                <span className="more">Подробнее →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Подход</span><h2>Как мы делаем сайт <span className="hl">под вашу сферу</span></h2></div>
          <div className="grid g3">
            {p.how.map((h, i) => <div className="step-card" key={i}><span className="step-num">0{i + 1}</span><div><h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 17, color: 'var(--navy)', marginBottom: 6 }}>{h.h}</h3><p>{h.p}</p></div></div>)}
          </div>
          {hidden.length > 0 && (
            <p className="also" style={{ marginTop: 28 }}><b>{p.alsoTitle}:</b> {hidden.map((n) => n.name.toLowerCase()).join(', ')} — и любой другой ниши. Страницы по этим отраслям готовим, пока покажем структуру лично.</p>
          )}
        </div>
      </section>

      <section className="otrasli-cta">
        <div className="wrap">
          <div className="octa">
            <div>
              <h2>{p.ctaTitle}</h2>
              <p>{p.ctaText}</p>
            </div>
            <Link href="#lead" className="btn btn-orange">{p.ctaBtn} →</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Кейсы</span><h2>Сайты, которые мы сделали <span className="hl">в этих сферах</span></h2></div>
          <div className="case-grid">{cases.map((c) => <CaseCard c={c} key={c.slug} />)}</div>
          <div style={{ marginTop: 26 }}><Link href="/primery" className="btn btn-outline">Все примеры работ →</Link></div>
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="sec-head"><span className="eyebrow">Частые вопросы</span><h2>Про сайты для разных сфер</h2></div>
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

      <CtaBlock title="Сделаем сайт под ваш бизнес" text="Расскажите про бизнес и город — предложим структуру страниц и назовём цену. От 35 000 ₽, запуск от 5 дней." formTitle="Обсудим сайт для вашего бизнеса" />
    </>
  );
}
