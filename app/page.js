import Link from 'next/link';
import site from '@/content/site.json';

const MESH = `<svg class="mesh" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="-21" x2="10" y2="86" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="1" y1="-21" x2="144" y2="-13" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="1" y1="-21" x2="84" y2="91" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="10" y1="86" x2="84" y2="91" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="-31" y1="268" x2="-28" y2="366" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="-31" y1="268" x2="88" y2="350" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="-28" y1="366" x2="34" y2="447" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="-28" y1="366" x2="88" y2="350" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="34" y1="447" x2="88" y2="350" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="34" y1="447" x2="91" y2="510" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="144" y1="-13" x2="84" y2="91" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="144" y1="-13" x2="254" y2="-33" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="135" y1="253" x2="88" y2="350" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="135" y1="253" x2="228" y2="280" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="88" y1="350" x2="91" y2="510" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="88" y1="350" x2="228" y2="280" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="91" y1="510" x2="207" y2="513" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="254" y1="-33" x2="272" y2="95" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="254" y1="-33" x2="394" y2="10" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="254" y1="-33" x2="326" y2="108" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="272" y1="95" x2="394" y2="10" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="272" y1="95" x2="326" y2="108" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="228" y1="280" x2="280" y2="394" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="228" y1="280" x2="325" y2="271" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="228" y1="280" x2="337" y2="357" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="280" y1="394" x2="207" y2="513" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="280" y1="394" x2="325" y2="271" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="280" y1="394" x2="337" y2="357" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="280" y1="394" x2="373" y2="458" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="394" y1="10" x2="326" y2="108" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="394" y1="10" x2="509" y2="-25" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="394" y1="10" x2="513" y2="119" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="326" y1="108" x2="325" y2="271" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="325" y1="271" x2="337" y2="357" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="337" y1="357" x2="373" y2="458" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="337" y1="357" x2="453" y2="394" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="373" y1="458" x2="453" y2="394" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="373" y1="458" x2="513" y2="464" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="509" y1="-25" x2="513" y2="119" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="509" y1="-25" x2="607" y2="-28" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="513" y1="119" x2="511" y2="223" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="513" y1="119" x2="630" y2="88" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="513" y1="119" x2="632" y2="207" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="511" y1="223" x2="632" y2="207" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="453" y1="394" x2="513" y2="464" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="513" y1="464" x2="623" y2="508" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="607" y1="-28" x2="630" y2="88" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="607" y1="-28" x2="734" y2="0" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="630" y1="88" x2="632" y2="207" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="630" y1="88" x2="734" y2="0" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="630" y1="88" x2="739" y2="154" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="632" y1="207" x2="639" y2="346" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="632" y1="207" x2="739" y2="154" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="632" y1="207" x2="738" y2="246" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="639" y1="346" x2="623" y2="508" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="639" y1="346" x2="738" y2="246" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="639" y1="346" x2="718" y2="351" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="639" y1="346" x2="703" y2="471" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="623" y1="508" x2="703" y2="471" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="734" y1="0" x2="739" y2="154" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="734" y1="0" x2="810" y2="33" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="739" y1="154" x2="738" y2="246" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="739" y1="154" x2="810" y2="33" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="739" y1="154" x2="838" y2="147" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="739" y1="154" x2="863" y2="243" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="738" y1="246" x2="718" y2="351" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="738" y1="246" x2="838" y2="147" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="738" y1="246" x2="863" y2="243" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="738" y1="246" x2="857" y2="356" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="718" y1="351" x2="703" y2="471" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="718" y1="351" x2="857" y2="356" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="810" y1="33" x2="838" y2="147" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="838" y1="147" x2="863" y2="243" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="863" y1="243" x2="857" y2="356" stroke="rgba(120,170,255,.22)" stroke-width="1"/><line x1="857" y1="356" x2="877" y2="449" stroke="rgba(120,170,255,.22)" stroke-width="1"/><circle cx="1" cy="-21" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="10" cy="86" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="-31" cy="268" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="-28" cy="366" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="34" cy="447" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="144" cy="-13" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="84" cy="91" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="135" cy="253" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="88" cy="350" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="91" cy="510" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="254" cy="-33" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="272" cy="95" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="228" cy="280" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="280" cy="394" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="207" cy="513" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="394" cy="10" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="326" cy="108" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="325" cy="271" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="337" cy="357" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="373" cy="458" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="509" cy="-25" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="513" cy="119" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="511" cy="223" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="453" cy="394" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="513" cy="464" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="607" cy="-28" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="630" cy="88" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="632" cy="207" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="639" cy="346" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="623" cy="508" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="734" cy="0" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="739" cy="154" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="738" cy="246" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="718" cy="351" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="703" cy="471" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="810" cy="33" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="838" cy="147" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="863" cy="243" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="857" cy="356" r="2.2" fill="rgba(150,190,255,.5)"/><circle cx="877" cy="449" r="2.2" fill="rgba(150,190,255,.5)"/></svg>`;

const orgLd = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Разработка SEO-оптимизированных сайтов',
  provider: { '@type': 'LocalBusiness', name: site.brand, telephone: '+7-800-101-63-20', email: site.email,
    address: { '@type': 'PostalAddress', streetAddress: 'ул. Байкальская, 295/1', addressLocality: 'Иркутск', addressCountry: 'RU' },
    openingHours: 'Mo-Su 09:00-20:00', url: site.mainSite },
  areaServed: 'RU',
  offers: site.tariffs.map(t => ({ '@type': 'Offer', name: t.name, price: t.price.replace(/[^0-9]/g, ''), priceCurrency: 'RUB' })),
};

export default function Home() {
  const h = site.hero;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />

      <section className="hero" style={{ padding: 0 }}>
        <span className="mesh" dangerouslySetInnerHTML={{ __html: MESH }} />
        <div className="wrap hero-inner">
          <div>
            <span className="eyebrow light">{h.eyebrow}</span>
            <h1>{h.h1a}<span className="hl">{h.h1hl}</span>{h.h1b}</h1>
            <p className="lead">{h.lead}</p>
            <span className="pill">Работаем с задачами:<span className="tag">{h.pill}</span></span>
            <div className="hero-cta">
              <Link href="/kontakty" className="btn btn-primary">Обсудить проект →</Link>
              <Link href="/tarify" className="btn btn-ghost">Смотреть тарифы</Link>
            </div>
            <div className="trust">
              {h.trust.map((t, i) => <div key={i}><b>{t.b}</b><small>{t.s}</small></div>)}
            </div>
          </div>
          <div className="panel reveal">
            <div className="panel-top"><span className="panel-title">Что получает бизнес</span><span className="dot"></span></div>
            {h.metrics.map((m, i) => (
              <div className="metric" key={i}><span className="lbl">{m.lbl}</span><span className={'val ' + m.cls}>{m.val}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="value">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Что входит</span>
            <h2>Не картинка, а <span className="hl">рабочий инструмент</span> под заявки</h2>
            <p>Каждый блок сайта работает на одну цель — чтобы посетитель позвонил или оставил заявку. Красивое оформление идёт бонусом, а не вместо результата.</p>
          </div>
          <div className="grid g3">
            {site.features.map((f, i) => (
              <div className="card reveal" key={i}><div className="ic">{f.ic}</div><h3>{f.h}</h3><p>{f.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="compare on-navy">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow light">Почему многостраничник</span>
            <h2>Когда нужен сайт <span className="hl">под трафик</span>, а не просто визитка</h2>
            <p>Конструктор хорош для быстрой визитки. Но чтобы стабильно собирать заявки из поиска, нужна структура под запросы и техническая база под SEO.</p>
          </div>
          <div className="cmp">
            <div className="col reveal">
              <h3><span className="cross">○</span> Обычная визитка / одностраничник</h3>
              <ul>{site.compareBad.map((t, i) => <li key={i}><span className="cross">✕</span> {t}</li>)}</ul>
            </div>
            <div className="col good reveal">
              <h3><span className="tick">◆</span> Наш SEO-сайт на Next.js</h3>
              <ul>{site.compareGood.map((t, i) => <li key={i}><span className="tick">✓</span> <span dangerouslySetInnerHTML={{ __html: t }} /></li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section id="primery">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Примеры работ</span>
            <h2>Сайты, которые <span className="hl">уже приносят заявки</span></h2>
            <p>Реальные проекты на нашем стеке — многостраничники с услугами, гео-страницами, ценами и блогом.</p>
          </div>
          <div className="cases">
            {site.cases.map((c, i) => (
              <div className={'case-card reveal' + (c.placeholder ? ' is-draft' : '')} key={i}>
                <div className="case-top">
                  <div>
                    <div className="case-niche">{c.niche}</div>
                    <h3>{c.name}</h3>
                  </div>
                  {c.city !== '—' && <span className="case-city">{c.city}</span>}
                </div>
                <p className="case-sum">{c.summary}</p>
                <div className="case-tags">
                  {c.tags.map((t, j) => <span className="case-tag" key={j}>{t}</span>)}
                </div>
                {c.placeholder
                  ? <span className="case-link draft-link">Данные уточняются</span>
                  : <a className="case-link" href={c.url} target="_blank" rel="noopener">Открыть сайт ↗</a>}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <Link href="/primery" className="btn btn-outline">Все примеры работ →</Link>
          </div>
        </div>
      </section>

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
                <Link href="/kontakty" className={'btn ' + (p.feature ? 'btn-primary' : 'btn-outline')}>Выбрать {p.name}</Link>
              </div>
            ))}
          </div>
          <div className="note reveal" dangerouslySetInnerHTML={{ __html: site.tariffNote }} />
        </div>
      </section>

      <section id="support">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">После сдачи</span>
            <h2>Правки и ведение — <span className="hl">по желанию</span></h2>
            <p>Многим достаточно формата «сделали и забыли»: цены и телефон меняются раз в год. А если нужно регулярно расти — берём ведение.</p>
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

      <section id="steps" className="compare on-navy">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow light">Как работаем</span>
            <h2>От вводных до сайта — <span className="hl">без тяжёлых брифов</span></h2>
            <p>Не грузим опросниками. Нужны ниша, гео, телефон, вилки цен и живые фото — остальное придумываем и собираем сами.</p>
          </div>
          <div className="steps">
            {site.steps.map((s, i) => (
              <div className="step reveal" key={i}><div className="n">{s.n}</div><h3>{s.h}</h3><p>{s.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="sec-pale">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Честно про сроки</span>
            <h2>Через сколько сайт <span className="hl">появится в поисковиках</span></h2>
            <p>Мы делаем сайт — быстрый и готовый к продвижению. Появление в поиске дальше — вопрос времени, а не «кнопки в день сдачи».</p>
          </div>
          <div className="exp-list">
            {site.expectations.map((e, i) => (
              <div className="exp reveal" key={i}><div className="k">{e.k}</div><div className="v"><b>{e.b}</b>{e.v}</div></div>
            ))}
          </div>
        </div>
      </section>

      <LeadCTA />
    </>
  );
}

function LeadCTA() {
  return (
    <section id="lead" className="cta">
      <div className="wrap cta-inner">
        <div className="reveal">
          <h2>Обсудим ваш сайт</h2>
          <p>Расскажите про нишу и город — предложим структуру страниц и тариф под задачу. Консультация бесплатная.</p>
          <div className="contacts">
            <a href={site.phoneHref}>☎ {site.phone}</a>
            <a href={site.telegram} target="_blank" rel="noopener">✈ Telegram: {site.telegramHandle}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
            <a href={'mailto:' + site.email}>✉ {site.email}</a>
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
  );
}
