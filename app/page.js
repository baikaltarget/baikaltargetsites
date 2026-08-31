import Link from 'next/link';
import Image from 'next/image';
import site from '@/content/site.json';

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

const NICHE_ICONS = {
  'stroitelnaya-kompaniya': '🏗️', 'proizvodstvo-zavod': '🏭', 'medicinskaya-klinika': '🏥',
  'stomatologiya': '🦷', 'fitnes-klub': '💪', 'klining': '🧹', 'otoplenie-santehnika': '🔧',
  'salon-krasoty': '💇', 'avtoservis': '🚗', 'sayt-katalog-tovarov': '📦',
};

const orgLd = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Разработка сайтов под ключ',
  provider: { '@type': 'LocalBusiness', name: site.brand, telephone: '+7-800-101-63-20', email: site.email,
    address: { '@type': 'PostalAddress', streetAddress: 'ул. Байкальская, 295/1', addressLocality: 'Иркутск', addressCountry: 'RU' },
    openingHours: 'Mo-Su 09:00-20:00', url: site.mainSite },
  areaServed: 'RU',
  offers: site.tariffs.map(t => ({ '@type': 'Offer', name: t.name, price: t.price.replace(/[^0-9]/g, ''), priceCurrency: 'RUB' })),
};
const faqLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: site.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function Home() {
  const h = site.hero;
  const topCases = site.cases.filter(c => c.top);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ===== HERO ===== */}
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
              <div><b>с 2019</b><small>на рынке</small></div>
              <div><b>50+</b><small>сайтов сделали</small></div>
              <div><b>от 25 000 ₽</b><small>сайт под ключ</small></div>
            </div>
          </div>
          <div className="hero-visual">
            <Image src={h.phoneImg} alt="Пример сайта, который мы сделали" width={600} height={600} className="hero-phone" priority />
            {h.badges.map((b, i) => (
              <span className={'fly fly-' + i} key={i}><span className="fly-i">{b.icon}</span>{b.text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ЗАЧЕМ САЙТ ===== */}
      <section id="why">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{site.whyNeed.eyebrow}</span>
            <h2>{site.whyNeed.title}<span className="hl">{site.whyNeed.titleHl}</span></h2>
            <p>{site.whyNeed.lead}</p>
          </div>
          <div className="grid g2">
            {site.whyNeed.cards.map((c, i) => (
              <div className="obj-card reveal" key={i}>
                <span className="obj-ic">{c.icon}</span>
                <div><h3>{c.q}</h3><p>{c.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ДОРОГО/СЛОЖНО/ДОЛГО ===== */}
      <section className="sec-pale">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{site.myths.eyebrow}</span>
            <h2>{site.myths.title}<span className="hl">{site.myths.titleHl}</span></h2>
          </div>
          <div className="grid g3">
            {site.myths.cards.map((c, i) => (
              <div className="myth-card reveal" key={i}>
                <span className="myth-ic">{c.icon}</span>
                <h3>{c.q}</h3><p>{c.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ПРИМЕРЫ ===== */}
      <section id="primery">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Примеры работ</span>
            <h2>Сайты, которые <span className="hl">уже приносят клиентов</span></h2>
            <p>Реальные проекты с цифрами — стройка, производство, услуги, торговля. У каждого свой результат из поиска.</p>
          </div>
          <div className="case-grid">
            {topCases.map((c, i) => (
              <a href={c.url} target="_blank" rel="noopener" className="case2 reveal" key={i}>
                {c.img && <span className="case2-img"><Image src={c.img} alt={'Сайт ' + c.name} width={800} height={366} /></span>}
                <div className="case2-body">
                  <div className="case2-top"><span className="case2-niche">{c.niche}</span>{c.city && <span className="case2-city">{c.city}</span>}</div>
                  <h3>{c.name}</h3>
                  <div className="case2-result">{c.result}</div>
                  <span className="case2-link">Открыть сайт ↗</span>
                </div>
              </a>
            ))}
          </div>
          <div style={{ marginTop: 30 }}><Link href="/primery" className="btn btn-outline">Все примеры работ →</Link></div>
        </div>
      </section>

      {/* ===== ЧТО ВХОДИТ / ФИШКИ ===== */}
      <section id="value" className="sec-pale">
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

      {/* ===== ОЦЕНКА GOOGLE ===== */}
      <section className="pagespeed">
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: 720 }}>
            <span className="eyebrow">{site.pagespeed.eyebrow}</span>
            <h2>{site.pagespeed.title}<span className="hl">{site.pagespeed.titleHl}</span></h2>
            <p>{site.pagespeed.lead}</p>
          </div>
          <div className="ps-wrap reveal">
            <div className="ps-scores">
              {site.pagespeed.scores.map((s, i) => (
                <div className="ps-score" key={i}><div className="ps-ring">{s.n}</div><span>{s.l}</span></div>
              ))}
            </div>
            <div className="ps-proof">
              <Image src="/img/pagespeed-phone.png" alt="Сайт нашего клиента, проверенный в Google PageSpeed" width={255} height={503} className="ps-phone" />
              <div className="ps-proof-txt">
                <p className="ps-note">{site.pagespeed.note}</p>
                <a href={site.pagespeed.url} target="_blank" rel="noopener" className="btn btn-outline">{site.pagespeed.btn} →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== НИШИ ===== */}
      <section id="nishi" className="sec-pale">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Кому подходит</span>
            <h2>Сайты под <span className="hl">вашу нишу</span></h2>
            <p>Под каждую сферу — своя структура и свои страницы: у стройки объекты со сметами, у клининга калькулятор по площади, у клиники лицензии и запись. Не шаблон с заменой слова, а сайт под конкретную задачу.</p>
          </div>
          <div className="niche-links">
            {site.niches.map((n) => <Link key={n.slug} href={'/otrasli/' + n.slug} className="niche-chip"><span className="nchip-i">{NICHE_ICONS[n.slug] || '•'}</span>{n.name}</Link>)}
          </div>
          <div style={{ marginTop: 26 }}><Link href="/otrasli" className="btn btn-outline">Все ниши →</Link></div>
        </div>
      </section>

      {/* ===== СРАВНЕНИЕ ===== */}
      <section className="compare on-navy">
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
          <div className="cmp-price reveal" dangerouslySetInnerHTML={{ __html: site.comparePrice }} />
        </div>
      </section>

      {/* ===== ТАРИФЫ ===== */}
      <section id="tariffs" className="sec-pale">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Тарифы</span>
            <h2>Три пакета под <span className="hl">задачу и бюджет</span></h2>
            <p>Отличаются объёмом страниц и проработкой. SEO-база и готовность к рекламе — во всех трёх.</p>
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
          <div className="note reveal" dangerouslySetInnerHTML={{ __html: site.tariffNote }} />
        </div>
      </section>

      {/* ===== ПОДДЕРЖКА ===== */}
      <section id="support">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">После сдачи</span>
            <h2>Правки и ведение — <span className="hl">по желанию</span></h2>
            <p dangerouslySetInnerHTML={{ __html: site.supportIntro }} />
          </div>
          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table className="tbl">
              <thead><tr>{site.support.head.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
              <tbody>{site.support.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} className={i === 0 && j > 0 ? 'p' : ''}>{c}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== КАК РАБОТАЕМ ===== */}
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

      {/* ===== СРОКИ ===== */}
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
            <a href={site.adsCallout.url} target="_blank" rel="noopener" className="btn btn-orange">{site.adsCallout.btn} →</a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Частые вопросы</span>
            <h2>Отвечаем <span className="hl">коротко и честно</span></h2>
          </div>
          <div className="faq-grid">
            {site.faq.map((f, i) => (
              <div className="faq-q reveal" key={i}><h3>{f.q}</h3><p>{f.a}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ФОРМА ===== */}
      <section id="lead" className="cta">
        <span className="mesh mesh-cta" dangerouslySetInnerHTML={{ __html: MESH }} />
        <div className="wrap cta-inner">
          <div className="reveal">
            <h2>Обсудим ваш сайт</h2>
            <p>Расскажите про нишу и город — предложим структуру и назовём цену. Консультация бесплатная и ни к чему не обязывает.</p>
            <ul className="cta-bullets">
              <li>✓ Разберём нишу и конкурентов</li>
              <li>✓ Предложим структуру под ваши запросы</li>
              <li>✓ Назовём точную цену и срок</li>
            </ul>
            <div className="cta-badges"><span>от 25 000 ₽</span><span>от 5 дней</span><span>бесплатно</span></div>
            <div className="cta-limit">Берём в работу 3–4 проекта в месяц</div>
            <div className="contacts">
              <a href={site.phoneHref}>☎ {site.phone}</a>
              <a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
            </div>
          </div>
          <div className="form reveal">
            <h3>Оставьте заявку</h3>
            <div className="sub">Свяжемся в течение рабочего дня ({site.hours}).</div>
            <label htmlFor="f-name">Ваше имя</label>
            <input id="f-name" type="text" placeholder="Как к вам обращаться" />
            <label htmlFor="f-phone">Телефон</label>
            <input id="f-phone" type="tel" placeholder="+7 ___ ___-__-__" />
            <label htmlFor="f-niche">Ниша и город</label>
            <input id="f-niche" type="text" placeholder="Напр.: монтаж отопления, Иркутск" />
            <label htmlFor="f-plan">Интересует тариф</label>
            <select id="f-plan" defaultValue="Пока не выбрал — нужна консультация">
              <option>Пока не выбрал — нужна консультация</option>
              {site.tariffs.map((t, i) => <option key={i}>{t.name} — {t.price}</option>)}
              <option>Индивидуальный дизайн — от 100 000 ₽</option>
            </select>
            <button className="btn btn-orange" id="send">Отправить в Telegram →</button>
            <div className="fine">Нажимая кнопку, вы соглашаетесь с <a href={site.policy} target="_blank" rel="noopener">политикой конфиденциальности</a></div>
            <div className="fallback" id="fallback"></div>
          </div>
        </div>
      </section>

      {/* ===== SEO-ТЕКСТ ===== */}
      <section className="seo-text">
        <div className="wrap">
          <h2>{site.seoText.title}</h2>
          <p>{site.seoText.text}</p>
        </div>
      </section>
    </>
  );
}
