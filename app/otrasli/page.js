import Link from 'next/link';
import site from '@/content/site.json';
import CaseCard from '@/components/CaseCard';
import LeadForm from '@/components/LeadForm';
import { breadcrumbs } from '@/lib/schema';

const NICHE_ICONS = {
  'stroitelnaya-kompaniya': '🏗️', 'proizvodstvo-zavod': '🏭', 'medicinskaya-klinika': '🏥',
  'stomatologiya': '🦷', 'fitnes-klub': '💪', 'klining': '🧹', 'otoplenie-santehnika': '🔧',
  'salon-krasoty': '💇', 'avtoservis': '🚗',
  'oteli-bazy-otdyha': '🏨', 'nedvizhimost': '🏢', 'yuridicheskie-uslugi': '⚖️', 'remont-kvartir': '🛠️', 'mebel-na-zakaz': '🛋️', 'okna-dveri': '🚪',
};

export const metadata = {
  title: 'Сайты под отрасль в Иркутске — стройка, производство, фитнес, отели, автосервис | ' + site.brand,
  description: 'Разработка сайтов под конкретную отрасль в Иркутске: строительство, производство, фитнес, отопление и инженерия, автосервис, отели. Многостраничные SEO-сайты от 35 000 ₽.',
  alternates: { canonical: '/otrasli/' },
};

export default function NicheIndex() {
  const p = site.otrasliPage;
  const shown = site.niches.filter((n) => !n.hidden);
  const hidden = site.niches.filter((n) => n.hidden);
  const caseNames = new Set(shown.flatMap((n) => n.cases || []));
  const cases = site.cases.filter((c) => caseNames.has(c.name)).slice(0, 3);
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Отрасли', path: '/otrasli/' }]);
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <section className="page-head otrasli-head">
        <div className="wrap oh-inner">
          <div className="oh-text">
            <nav className="crumbs"><Link href="/">Главная</Link> → <span>Отрасли</span></nav>
            <span className="eyebrow light">Кому подходит</span>
            <h1>Сайты под вашу отрасль</h1>
            <p>{p.lead} Работаем с бизнесом Иркутска и других городов — удалённо, приезжать не нужно.</p>
            <Link href="/kontakty" className="btn btn-primary" style={{ marginTop: 22 }}>Обсудить мой проект →</Link>
          </div>
          <div className="oh-fan">
            <span className="fan fan-1"><img src="/img/cases/dacha38.jpg" alt="Сайт строительной компании" loading="lazy" /></span>
            <span className="fan fan-2"><img src="/img/cases/lisa.jpg" alt="Сайт фитнес-студии" loading="lazy" /></span>
            <span className="fan fan-3"><img src="/img/cases/zoloto.jpg" alt="Сайт-каталог товаров" loading="lazy" /></span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="niche-grid">
            {shown.map((n) => (
              <Link href={'/otrasli/' + n.slug} className="niche-card" key={n.slug}>
                <span className="niche-card-ic">{NICHE_ICONS[n.slug] || '•'}</span>
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
          <div className="sec-head"><span className="eyebrow">Подход</span><h2>Как мы делаем сайт <span className="hl">под отрасль</span></h2></div>
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
          <div className="sec-head"><span className="eyebrow">Кейсы</span><h2>Сайты, которые мы сделали <span className="hl">в этих отраслях</span></h2></div>
          <div className="case-grid">{cases.map((c) => <CaseCard c={c} key={c.slug} />)}</div>
          <div style={{ marginTop: 26 }}><Link href="/primery" className="btn btn-outline">Все примеры работ →</Link></div>
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="sec-head"><span className="eyebrow">Частые вопросы</span><h2>Про сайты под отрасль</h2></div>
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
            <h2>Сделаем сайт под ваш бизнес</h2>
            <p>Расскажите про нишу и город — предложим структуру страниц и назовём цену. От 35 000 ₽, запуск от 5 дней.</p>
            <div className="contacts">
              <a href={site.phoneHref}>☎ {site.phone}</a>
              <a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
            </div>
          </div>
          <LeadForm title="Обсудим сайт для вашей отрасли" />
        </div>
      </section>
    </>
  );
}
