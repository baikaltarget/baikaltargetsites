import Link from 'next/link';
import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import { localBusiness, breadcrumbs } from '@/lib/schema';

export const metadata = {
  title: site.about.title,
  description: site.about.description,
  alternates: { canonical: '/o-studii/' },
};

const initials = (name) => name.split(' ').map((w) => w[0]).join('');

export default function About() {
  const a = site.about;
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'О студии', path: '/o-studii/' }]);
  const ld = {
    '@context': 'https://schema.org',
    ...localBusiness(),
    description: a.description,
    employee: site.team.map((t) => ({ '@type': 'Person', name: t.name, jobTitle: t.role })),
    founder: { '@type': 'Person', name: site.team[0].name },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs"><Link href="/">Главная</Link> → <span>О студии</span></nav>
          <span className="eyebrow light">О студии · Иркутск</span>
          <h1>{a.h1}</h1>
          <p>{a.lead}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="about-cols">
            <div>
              <div className="sec-head" style={{ marginBottom: 20 }}><span className="eyebrow">Как мы к этому пришли</span><h2>Сначала реклама, потом сайты</h2></div>
              {a.story.map((p, i) => <p className="case-p" key={i}>{p}</p>)}
            </div>
            <div className="studio-facts">
              {site.studio.facts.map((f, i) => <div className="sf" key={i}><b>{f.b}</b><span>{f.s}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sec-pale" id="komanda">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Команда</span><h2>Кто будет делать <span className="hl">ваш сайт</span></h2><p>{site.teamNote}</p></div>
          <div className="grid g3">
            {site.team.map((t, i) => (
              <div className="person" key={i}>
                {t.photo ? <img src={t.photo} alt={t.name} className="person-photo" width="96" height="96" loading="lazy" /> : <span className="person-photo person-ph" aria-hidden="true">{initials(t.name)}</span>}
                <h3>{t.name}</h3>
                <span className="person-role">{t.role}</span>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Принципы</span><h2>Как мы работаем</h2></div>
          <div className="grid g2">
            {a.principles.map((p, i) => <div className="niche-block" key={i}><h3>{p.h}</h3><p>{p.p}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sec-pale">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Где мы</span><h2>Офис в Иркутске</h2></div>
          <div className="contacts" style={{ color: 'var(--text)' }}>
            <a href={site.mapsYandex || undefined} target={site.mapsYandex ? '_blank' : undefined} rel="noopener">📍 {site.address}</a>
            <a href={site.phoneHref}>☎ {site.phone}</a>
            <a href={'mailto:' + site.email}>✉ {site.email}</a>
            <a>🕘 {site.hours}</a>
          </div>
          <p style={{ color: 'var(--muted)', marginTop: 14, fontSize: 14 }}>{site.legal}</p>
        </div>
      </section>

      <section id="lead" className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Обсудим ваш сайт</h2>
            <p>Расскажите про нишу и город — предложим структуру и назовём цену. Можно приехать в офис или созвониться.</p>
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
