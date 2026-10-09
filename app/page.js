import Link from 'next/link';
import Image from 'next/image';
import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import CaseCard from '@/components/CaseCard';
import ReviewCard from '@/components/ReviewCard';
import { SVC_ICONS } from '@/components/ServiceIcons';
import { localBusiness, priceNumber } from '@/lib/schema';

const MESH = `<svg class="mesh" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="-21" x2="10" y2="86" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="1" y1="-21" x2="144" y2="-13" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="1" y1="-21" x2="84" y2="91" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="10" y1="86" x2="84" y2="91" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="-31" y1="268" x2="-28" y2="366" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="-31" y1="268" x2="88" y2="350" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="-28" y1="366" x2="34" y2="447" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="-28" y1="366" x2="88" y2="350" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="34" y1="447" x2="88" y2="350" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="34" y1="447" x2="91" y2="510" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="144" y1="-13" x2="84" y2="91" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="144" y1="-13" x2="254" y2="-33" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="135" y1="253" x2="88" y2="350" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="135" y1="253" x2="228" y2="280" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="88" y1="350" x2="91" y2="510" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="88" y1="350" x2="228" y2="280" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="91" y1="510" x2="207" y2="513" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="254" y1="-33" x2="272" y2="95" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="254" y1="-33" x2="394" y2="10" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="254" y1="-33" x2="326" y2="108" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="272" y1="95" x2="394" y2="10" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="272" y1="95" x2="326" y2="108" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="228" y1="280" x2="280" y2="394" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="228" y1="280" x2="325" y2="271" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="228" y1="280" x2="337" y2="357" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="280" y1="394" x2="207" y2="513" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="280" y1="394" x2="325" y2="271" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="280" y1="394" x2="337" y2="357" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="280" y1="394" x2="373" y2="458" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="394" y1="10" x2="326" y2="108" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="394" y1="10" x2="509" y2="-25" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="394" y1="10" x2="513" y2="119" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="326" y1="108" x2="325" y2="271" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="325" y1="271" x2="337" y2="357" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="337" y1="357" x2="373" y2="458" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="337" y1="357" x2="453" y2="394" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="373" y1="458" x2="453" y2="394" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="373" y1="458" x2="513" y2="464" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="509" y1="-25" x2="513" y2="119" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="509" y1="-25" x2="607" y2="-28" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="513" y1="119" x2="511" y2="223" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="513" y1="119" x2="630" y2="88" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="513" y1="119" x2="632" y2="207" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="511" y1="223" x2="632" y2="207" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="453" y1="394" x2="513" y2="464" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="513" y1="464" x2="623" y2="508" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="607" y1="-28" x2="630" y2="88" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="607" y1="-28" x2="734" y2="0" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="630" y1="88" x2="632" y2="207" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="630" y1="88" x2="734" y2="0" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="630" y1="88" x2="739" y2="154" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="632" y1="207" x2="639" y2="346" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="632" y1="207" x2="739" y2="154" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="632" y1="207" x2="738" y2="246" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="639" y1="346" x2="623" y2="508" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="639" y1="346" x2="738" y2="246" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="639" y1="346" x2="718" y2="351" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="639" y1="346" x2="703" y2="471" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="623" y1="508" x2="703" y2="471" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="734" y1="0" x2="739" y2="154" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="734" y1="0" x2="810" y2="33" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="739" y1="154" x2="738" y2="246" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="739" y1="154" x2="810" y2="33" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="739" y1="154" x2="838" y2="147" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="739" y1="154" x2="863" y2="243" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="738" y1="246" x2="718" y2="351" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="738" y1="246" x2="838" y2="147" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="738" y1="246" x2="863" y2="243" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="738" y1="246" x2="857" y2="356" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="718" y1="351" x2="703" y2="471" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="718" y1="351" x2="857" y2="356" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="810" y1="33" x2="838" y2="147" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="838" y1="147" x2="863" y2="243" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="863" y1="243" x2="857" y2="356" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="857" y1="356" x2="877" y2="449" stroke="rgba(120,170,255,.22)" stroke-width="1"/><circle cx="1" cy="-21" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="10" cy="86" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="-31" cy="268" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="-28" cy="366" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="34" cy="447" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="144" cy="-13" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="84" cy="91" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="135" cy="253" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="88" cy="350" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="91" cy="510" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="254" cy="-33" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="272" cy="95" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="228" cy="280" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="280" cy="394" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="207" cy="513" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="394" cy="10" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="326" cy="108" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="325" cy="271" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="337" cy="357" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="373" cy="458" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="509" cy="-25" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="513" cy="119" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="511" cy="223" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="453" cy="394" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="513" cy="464" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="607" cy="-28" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="630" cy="88" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="632" cy="207" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="639" cy="346" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="623" cy="508" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="734" cy="0" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="739" cy="154" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="738" cy="246" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="718" cy="351" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="703" cy="471" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="810" cy="33" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="838" cy="147" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="863" cy="243" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="857" cy="356" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="877" cy="449" r="2.2" fill="rgba(150,190,255,.5)"/></svg>`;

// линейные SVG-иконки для блока фишек
const ICONS = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>,
  pin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  bolt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>,
  send: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>,
  ai: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V4h6v3M9 13h.01M15 13h.01M12 2v2"/></svg>,
};

const PERK_ICONS = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>,
  chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-6"/></svg>,
  bolt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>,
  ai: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="7" width="16" height="12" rx="2"/><path d="M9 7V4h6v3M9 13h.01M15 13h.01M12 2v2"/></svg>,
  ruble: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21V4h6a5 5 0 0 1 0 10H5m0 3h8"/></svg>,
};


const NICHE_ICONS = {
  'stroitelnaya-kompaniya': '🏗️', 'proizvodstvo-zavod': '🏭', 'medicinskaya-klinika': '🏥',
  'stomatologiya': '🦷', 'fitnes-klub': '💪', 'klining': '🧹', 'otoplenie-santehnika': '🔧',
  'salon-krasoty': '💇', 'avtoservis': '🚗',
  'oteli-bazy-otdyha': '🏨', 'nedvizhimost': '🏢', 'yuridicheskie-uslugi': '⚖️', 'remont-kvartir': '🛠️', 'mebel-na-zakaz': '🛋️', 'okna-dveri': '🚪',
};

const orgLd = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Создание сайтов под ключ в Иркутске',
  provider: localBusiness(),
  areaServed: [{ '@type': 'City', name: 'Иркутск' }, { '@type': 'Country', name: 'Россия' }],
  offers: site.tariffs.map(t => ({ '@type': 'Offer', name: t.name, price: priceNumber(t.price), priceCurrency: 'RUB' })),
};
const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: site.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function Home() {
  const h = site.hero;
  const topCases = site.cases.filter(c => c.top);
  const niches = site.niches.filter(n => !n.hidden);
  const reviews = site.reviews.items;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ===== 1. ПЕРВЫЙ ЭКРАН ===== */}
      <section className="hero" style={{ padding: 0 }}>
        <span className="mesh" dangerouslySetInnerHTML={{ __html: MESH }} />
        <div className="wrap hero-inner">
          <div>
            <span className="hero-over">{h.overline}</span>
            <h1>{h.h1a}<span className="hl">{h.h1hl}</span>{h.h1b}</h1>
            <p className="lead">{h.lead}</p>
            <div className="hero-cta">
              <Link href="#lead" className="btn btn-primary">{h.ctaPrimary} →</Link>
              <Link href="#tariffs" className="btn btn-ghost">{h.ctaSecondary}</Link>
            </div>
            <div className="trust">
              {h.trust.map((t, i) => <div key={i}><b>{t.b}</b><small>{t.s}</small></div>)}
            </div>
          </div>
          <div className="hero-visual hero-visual-laptop">
            <img src={h.heroImg} alt="Пример сайта, который мы сделали для бизнеса в Иркутске" className="hero-laptop" width="1498" height="1050" fetchPriority="high" />
          </div>
        </div>
        <div className="wrap hero-perks">
          <div className="perks perks-row">
            {h.perks.map((p, i) => (
              <span className="perk" key={i}><span className="perk-i">{PERK_ICONS[p.ic]}</span>{p.text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. ПРИМЕРЫ ===== */}
      <section id="primery">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Примеры работ</span>
            <h2>Сайты, которые <span className="hl">уже приносят клиентов</span></h2>
            <p>Проекты из Иркутска и других городов — стройка, производство, услуги, торговля. У каждого свой результат из поиска.</p>
          </div>
          <div className="case-grid">
            {topCases.map((c) => <CaseCard c={c} className="reveal" key={c.slug} />)}
          </div>
          <div style={{ marginTop: 30 }}><Link href="/primery" className="btn btn-outline">Все примеры работ →</Link></div>
        </div>
      </section>

      {/* ===== 3. УСЛУГИ ===== */}
      <section id="uslugi" className="sec-pale">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Что делаем</span>
            <h2>Какой сайт <span className="hl">нужен вам</span></h2>
            <p>Все варианты — многостраничные, с SEO с первого дня. Интернет-магазины — под заявку, без корзины. Лендинги под рекламу делает <a href={site.mainSite + "/services/website-tilda"} target="_blank" rel="noopener" style={{ color: "var(--blue)", fontWeight: 600 }}>основное агентство</a>.</p>
          </div>
          <div className="svc-grid">
            {site.services.map((sv, i) => (
              <Link href={'/uslugi/' + sv.slug} className="svc svc-wide reveal" key={i}>
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

      {/* ===== 4. ЧТО ВХОДИТ: фишки + скорость + сравнение ===== */}
      <section id="value">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Что входит</span>
            <h2>Не картинка, а <span className="hl">рабочий инструмент</span> под заявки</h2>
            <p>Каждый блок сайта работает на одну цель — чтобы посетитель позвонил или оставил заявку. Красивое оформление идёт бонусом, а не вместо результата.</p>
          </div>
          <div className="grid g3">
            {site.features.map((f, i) => (
              <div className="feat reveal" key={i}><span className="feat-ic">{ICONS[f.icon]}</span><h3>{f.h}</h3><p>{f.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="compare on-navy" id="pagespeed">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow light">{site.compareEyebrow}</span>
            <h2>{site.compareTitle}<span className="hl">{site.compareTitleHl}</span></h2>
            <p>{site.compareLead}</p>
          </div>
          <div className="cmp">
            <div className="col reveal">
              <h3><span className="cross">○</span> {site.compareBadTitle}</h3>
              <ul>{site.compareBad.map((t, i) => <li key={i}><span className="cross">✕</span> {t}</li>)}</ul>
            </div>
            <div className="col good reveal">
              <h3><span className="tick">◆</span> {site.compareGoodTitle}</h3>
              <ul>{site.compareGood.map((t, i) => <li key={i}><span className="tick">✓</span> <span dangerouslySetInnerHTML={{ __html: t }} /></li>)}</ul>
            </div>
          </div>
          <div className="ps-band reveal">
            <div className="ps-band-txt">
              <span className="eyebrow light">{site.pagespeed.eyebrow}</span>
              <h3>{site.pagespeed.title}<span className="hl">{site.pagespeed.titleHl}</span></h3>
              <p>{site.pagespeed.lead} {site.pagespeed.note}</p>
            </div>
            <div className="ps-scores">
              {site.pagespeed.scores.map((sc, i) => (
                <div className="ps-score" key={i}><div className="ps-ring">{sc.n}</div><span>{sc.l}</span></div>
              ))}
            </div>
            <a href={site.pagespeed.url} target="_blank" rel="noopener" className="btn btn-ghost">{site.pagespeed.btn} →</a>
          </div>
          <div className="cmp-price reveal" dangerouslySetInnerHTML={{ __html: site.comparePrice }} />
        </div>
      </section>

      {/* ===== 5. ТАРИФЫ ===== */}
      <section id="tariffs" className="sec-pale">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Тарифы</span>
            <h2>Три пакета под <span className="hl">задачу и бюджет</span></h2>
            <p>Отличаются объёмом страниц и проработкой. SEO-база и готовность к рекламе — во всех трёх. Без обязательных ежемесячных платежей.</p>
          </div>
          <div className="tariffs">
            {site.tariffs.map((p, i) => (
              <div className={'plan reveal' + (p.feature ? ' feature' : '')} key={i}>
                <span className="name">{p.name}</span>
                <div className="price">{p.price}</div>
                <div className="term">{p.term}</div>
                <ul>{p.items.map((it, j) => <li key={j}><span className="tick">✓</span> {it}</li>)}</ul>
                <Link href="#lead" className={'btn ' + (p.feature ? 'btn-primary' : 'btn-outline')}>Выбрать {p.name}</Link>
              </div>
            ))}
          </div>
          <div className="tariff-extra reveal">
            {site.tariffExtra.map((t, i) => (
              <Link href={t.url} className="tx" key={i}>
                <div><span className="tx-name">{t.name}</span><p>{t.desc}</p></div>
                <div className="tx-price">{t.price} <span>→</span></div>
              </Link>
            ))}
          </div>
          <div className="note reveal" dangerouslySetInnerHTML={{ __html: site.tariffNote }} />
          <div className="reveal" style={{ marginTop: 18 }}><Link href="/tarify" className="btn btn-outline">Подробнее о тарифах и поддержке →</Link></div>
        </div>
      </section>

      {/* ===== 6. ОТЗЫВЫ ===== */}
      <section id="otzyvy">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{site.reviews.eyebrow}</span>
            <h2>{site.reviews.title}<span className="hl">{site.reviews.titleHl}</span></h2>
            <p>{site.reviews.lead}</p>
          </div>
          <div className="grid g3">
            {reviews.slice(0, 3).map((r, i) => <div className="reveal" key={i}><ReviewCard r={r} /></div>)}
          </div>
          <div style={{ marginTop: 26 }}><Link href="/otzyvy" className="btn btn-outline">Все отзывы →</Link></div>
        </div>
      </section>

      {/* ===== 7. КАК РАБОТАЕМ + СРОКИ ===== */}
      <section id="steps" className="compare on-navy">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow light">Как работаем</span>
            <h2>От вводных до сайта — <span className="hl">без долгих анкет</span></h2>
            <p>{site.stepsLead}</p>
          </div>
          <div className="steps">
            {site.steps.map((s, i) => (
              <div className="step reveal" key={i}><div className="n">{s.n}</div><h3>{s.h}</h3><p>{s.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq-timing" className="sec-pale">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Честно про сроки</span>
            <h2>Через сколько сайт <span className="hl">появится в поиске</span></h2>
            <p>Мы делаем сайт — быстрый и готовый к продвижению. Появление в поиске дальше — вопрос времени, а не «кнопки в день сдачи».</p>
          </div>
          <div className="exp-list">
            {site.expectations.map((e, i) => (
              <div className="exp reveal" key={i}><div className="k">{e.k}</div><div className="v"><b>{e.b}</b>{e.v}</div></div>
            ))}
          </div>
          <div className="ads-callout reveal">
            <div><h3>{site.adsCallout.title}</h3><p dangerouslySetInnerHTML={{ __html: site.adsCallout.text }} /></div>
            <div className="ads-side">
              <div className="ads-logos" aria-label="Рекламные системы, с которыми работаем">
                {(site.adsCallout.logos || []).map((l, i) => (
                  <span className="ads-logo" key={i} title={l.name}>
                    {l.src ? <img src={l.src} alt={l.name} loading="lazy" /> : null}
                    {(l.label || !l.src) && <span>{l.label || l.name}</span>}
                  </span>
                ))}
              </div>
              <a href={site.adsCallout.url} target="_blank" rel="noopener" className="btn btn-orange">{site.adsCallout.btn} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. ОТРАСЛИ ===== */}
      <section id="nishi">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Кому подходит</span>
            <h2>Сайты под <span className="hl">вашу нишу</span></h2>
            <p>Под каждую сферу — своя структура и свои страницы: у стройки объекты со сметами, у отеля номера и бронирование, у автосервиса услуги с ценами. Не шаблон с заменой слова, а сайт под конкретную задачу.</p>
          </div>
          <div className="niche-grid niche-grid-home">
            {niches.map((n) => {
              const kase = (n.cases || []).map((nm) => site.cases.find((c) => c.name === nm)).find(Boolean);
              return (
                <Link key={n.slug} href={'/otrasli/' + n.slug} className="niche-card reveal">
                  <span className="niche-card-ic">{NICHE_ICONS[n.slug] || '•'}</span>
                  <h3>{n.name}</h3>
                  {n.tag && <span className="niche-card-tag">{n.tag}</span>}
                  <p>{n.pain}</p>
                  <span className="more">{kase ? 'Кейс: ' + kase.name + ' →' : 'Подробнее →'}</span>
                </Link>
              );
            })}
          </div>
          <div style={{ marginTop: 26 }}><Link href="/otrasli" className="btn btn-outline">Все отрасли →</Link></div>
        </div>
      </section>

      {/* ===== 9. FAQ (вопросы + возражения) ===== */}
      <section id="faq" className="sec-pale">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Частые вопросы</span>
            <h2>Отвечаем <span className="hl">коротко и честно</span></h2>
            <p>Цены, сроки, «а нужен ли мне сайт вообще» — всё, что обычно спрашивают до первого звонка.</p>
          </div>
          <div className="faq-acc">
            {site.faq.map((f, i) => (
              <details className="faq-d" key={i} open={i < 2}>
                <summary><h3>{f.q}</h3><span className="faq-x" aria-hidden="true">+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. ЗАЯВКА ===== */}
      <section id="lead" className="cta">
        <span className="mesh mesh-cta" dangerouslySetInnerHTML={{ __html: MESH }} />
        <div className="wrap cta-inner">
          <div className="reveal">
            <h2>Обсудим ваш сайт</h2>
            <p>Расскажите про нишу и город — предложим структуру и назовём цену. Консультация бесплатная и ни к чему не обязывает.</p>
            <ul className="cta-bullets">
              <li>✓ Разберём нишу и конкурентов в вашем городе</li>
              <li>✓ Предложим структуру под ваши запросы</li>
              <li>✓ Назовём точную цену и срок</li>
            </ul>
            <div className="cta-badges"><span>от 35 000 ₽</span><span>от 5 дней</span><span>бесплатно</span></div>
            <div className="cta-limit">Берём в работу 3–4 проекта в месяц</div>
            <div className="contacts">
              <a href={site.phoneHref}>☎ {site.phone}</a>
              <a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
            </div>
          </div>
          <LeadForm className="form reveal" />
        </div>
      </section>

      {/* ===== СТУДИЯ В ИРКУТСКЕ (вместо SEO-текста) ===== */}
      <section className="studio">
        <div className="wrap studio-inner">
          <div className="reveal">
            <span className="eyebrow">{site.studio.eyebrow}</span>
            <h2>{site.studio.title}<span className="hl">{site.studio.titleHl}</span></h2>
            <p>{site.studio.text}</p>
            <Link href={site.studio.url} className="btn btn-outline" style={{ marginTop: 18 }}>{site.studio.btn} →</Link>
          </div>
          <div className="studio-facts reveal">
            {site.studio.facts.map((f, i) => <div className="sf" key={i}><b>{f.b}</b><span>{f.s}</span></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
