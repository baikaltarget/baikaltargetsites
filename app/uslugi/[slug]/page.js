import Link from 'next/link';
import Image from 'next/image';
import site from '@/content/site.json';

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
    provider: { '@type': 'LocalBusiness', name: site.brand, telephone: '+7-800-101-63-20', url: site.mainSite },
    areaServed: 'RU', offers: { '@type': 'Offer', price: (s.price.match(/\d[\d ]*/) || ['35 000'])[0].replace(/ /g, ''), priceCurrency: 'RUB' },
  };
  const crumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: site.domain + '/' },
    { '@type': 'ListItem', position: 2, name: 'Услуги', item: site.domain + '/uslugi/' },
    { '@type': 'ListItem', position: 3, name: s.name, item: site.domain + '/uslugi/' + s.slug + '/' } ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

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
                <Image src="/img/pagespeed-phone.png" alt="Сайт клиента в Google PageSpeed" width={255} height={503} className="ps-phone" />
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
              {relCases.map((c, i) => (
                <a href={c.url} target="_blank" rel="noopener" className="case2" key={i}>
                  {c.img && <span className="case2-img"><Image src={c.img} alt={'Сайт ' + c.name} width={800} height={366} /></span>}
                  <div className="case2-body"><div className="case2-top"><span className="case2-niche">{c.niche}</span>{c.city && <span className="case2-city">{c.city}</span>}</div><h3>{c.name}</h3><div className="case2-result">{c.result}</div><span className="case2-link">Открыть сайт ↗</span></div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="sec-head"><span className="eyebrow">Частые вопросы</span><h2>Коротко о главном</h2></div>
          {s.faq.map((f, i) => <div className="faq-item" key={i}><h3>{f.q}</h3><p>{f.a}</p></div>)}
        </div>
      </section>

      <section id="lead" className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Обсудим ваш сайт</h2>
            <p>Расскажите про нишу и город — предложим структуру и назовём точную цену. Консультация бесплатная.</p>
            <ul className="cta-bullets"><li>✓ Разберём нишу и конкурентов</li><li>✓ Предложим структуру под ваши запросы</li><li>✓ Назовём точную цену и срок</li></ul>
            <div className="contacts"><a href={site.phoneHref}>☎ {site.phone}</a><a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a><a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a></div>
          </div>
          <div className="form">
            <h3>Оставьте заявку</h3>
            <div className="sub">Свяжемся в течение рабочего дня ({site.hours}).</div>
            <label htmlFor="f-name">Ваше имя</label><input id="f-name" type="text" placeholder="Как к вам обращаться" />
            <label htmlFor="f-phone">Телефон</label><input id="f-phone" type="tel" placeholder="+7 ___ ___-__-__" />
            <label htmlFor="f-niche">Ниша и город</label><input id="f-niche" type="text" placeholder="Напр.: монтаж отопления, Иркутск" />
            <label htmlFor="f-plan">Интересует</label>
            <select id="f-plan" defaultValue={s.name}><option>{s.name}</option>{site.tariffs.map((t, i) => <option key={i}>{t.name} — {t.price}</option>)}<option>Пока не выбрал — нужна консультация</option></select>
            <button className="btn btn-orange" id="send">Отправить в Telegram →</button>
            <div className="fine">Нажимая кнопку, вы соглашаетесь с <a href={site.policy} target="_blank" rel="noopener">политикой конфиденциальности</a></div>
            <div className="fallback" id="fallback"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Другие услуги</span><h2>Может, вам нужен другой формат</h2></div>
          <div className="niche-links">{others.map((o) => <Link key={o.slug} href={'/uslugi/' + o.slug} className="niche-chip">{o.name}</Link>)}</div>
        </div>
      </section>
    </>
  );
}
