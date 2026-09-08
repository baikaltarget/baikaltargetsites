import Link from 'next/link';
import Image from 'next/image';
import site from '@/content/site.json';

const bySlug = (slug) => site.niches.find((n) => n.slug === slug);
const caseByName = (name) => site.cases.find((c) => c.name === name);

export function generateStaticParams() {
  return site.niches.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const n = bySlug(params.slug);
  return {
    title: n.title,
    description: n.description,
    alternates: { canonical: '/otrasli/' + n.slug + '/' },
  };
}

function LeadForm({ niche }) {
  return (
    <div className="form">
      <h3>Обсудим сайт для вашего бизнеса</h3>
      <div className="sub">Свяжемся в течение рабочего дня ({site.hours}). Консультация бесплатная.</div>
      <label htmlFor="f-name">Ваше имя</label>
      <input id="f-name" type="text" placeholder="Как к вам обращаться" />
      <label htmlFor="f-phone">Телефон</label>
      <input id="f-phone" type="tel" placeholder="+7 ___ ___-__-__" />
      <label htmlFor="f-niche">Ниша и город</label>
      <input id="f-niche" type="text" placeholder={'Напр.: ' + niche + ', Иркутск'} />
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
  );
}

export default function NichePage({ params }) {
  const n = bySlug(params.slug);
  const others = site.niches.filter((x) => x.slug !== n.slug).slice(0, 6);
  const relCases = (n.cases || []).map(caseByName).filter(Boolean);

  const serviceLd = {
    '@context': 'https://schema.org', '@type': 'Service',
    serviceType: n.h1, description: n.description,
    provider: { '@type': 'LocalBusiness', name: site.brand, telephone: '+7-800-101-63-20', url: site.mainSite },
    areaServed: 'RU',
    offers: { '@type': 'Offer', price: '25000', priceCurrency: 'RUB' },
  };
  const crumbsLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: site.domain + '/' },
      { '@type': 'ListItem', position: 2, name: 'Отрасли', item: site.domain + '/otrasli/' },
      { '@type': 'ListItem', position: 3, name: n.name, item: site.domain + '/otrasli/' + n.slug + '/' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }} />

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
              {relCases.map((c, i) => (
                <a href={c.url} target="_blank" rel="noopener" className="case2" key={i}>
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
          </div>
        </section>
      )}

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
      <section id="lead" className="cta">
        <span className="mesh mesh-cta" dangerouslySetInnerHTML={{ __html: '' }} />
        <div className="wrap cta-inner">
          <div>
            <h2>Сделаем сайт под ваш бизнес</h2>
            <p>Расскажите про нишу и город — предложим структуру страниц и назовём цену. От 25 000 ₽, запуск от 5 дней.</p>
            <ul className="cta-bullets">
              <li>✓ Разберём вашу нишу и конкурентов</li>
              <li>✓ Предложим структуру под ваши запросы</li>
              <li>✓ Назовём точную цену и срок</li>
            </ul>
            <div className="cta-badges"><span>от 25 000 ₽</span><span>от 5 дней</span><span>бесплатно</span></div>
            <div className="contacts">
              <a href={site.phoneHref}>☎ {site.phone}</a>
              <a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
            </div>
          </div>
          <LeadForm niche={n.name.toLowerCase()} />
        </div>
      </section>

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
          <h2>{n.h1} — от 25 000 ₽</h2>
          <p>{n.seo}</p>
        </div>
      </section>
    </>
  );
}
