import Link from 'next/link';
import site from '@/content/site.json';
import CtaBlock from '@/components/CtaBlock';
import PageHero from '@/components/PageHero';
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

      <PageHero
        crumbs={[{ name: 'Главная', href: '/' }, { name: 'О студии' }]}
        eyebrow="О студии · Иркутск" title={a.h1}
        lead={a.lead}
        primary={{ href: '#komanda', text: 'Команда →' }} secondary={{ href: '/primery', text: 'Что мы сделали' }}>
        <div className="trust">{site.studio.facts.slice(0, 3).map((f, i) => <div key={i}><b>{f.b}</b><small>{f.s}</small></div>)}</div>
      </PageHero>

      {/* команда — сразу после первого экрана: это то, за чем сюда приходят */}
      <section id="komanda">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Команда</span><h2>Кто будет делать <span className="hl">ваш сайт</span></h2><p>{site.teamNote}</p></div>
          <div className="team">
            {site.team.map((t, i) => (
              <div className="person" key={i}>
                {t.photo ? <img src={t.photo} alt={t.name} className="person-photo" width="320" height="320" loading="lazy" /> : <span className="person-photo person-ph" aria-hidden="true">{initials(t.name)}</span>}
                <div className="person-body">
                  <h3>{t.name}</h3>
                  <span className="person-role">{t.role}</span>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* история + принципы в одном блоке: слева рассказ, справа 4 принципа */}
      <section className="sec-pale">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Как мы работаем</span><h2>Сначала реклама, <span className="hl">потом сайты</span></h2></div>
          <div className="about-cols">
            <div className="about-story">
              {a.story.map((p, i) => <p className="case-p" key={i}>{p}</p>)}
            </div>
            <div className="about-principles">
              {a.principles.map((p, i) => <div className="pr" key={i}><span className="pr-num">0{i + 1}</span><div><h3>{p.h}</h3><p>{p.p}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Цифры</span><h2>Студия <span className="hl">в цифрах</span></h2></div>
          <div className="studio-facts studio-facts-row">
            {site.studio.facts.map((f, i) => <div className="sf" key={i}><b>{f.b}</b><span>{f.s}</span></div>)}
          </div>
          <p className="about-legal">{site.address} · {site.hours} · {site.legal}</p>
        </div>
      </section>

      <CtaBlock title="Обсудим ваш сайт" text="Расскажите про бизнес и город — предложим структуру и назовём цену. Можно приехать в офис или созвониться." />
    </>
  );
}
