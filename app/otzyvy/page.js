import Link from 'next/link';
import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import ReviewCard from '@/components/ReviewCard';
import { breadcrumbs } from '@/lib/schema';

const hasReal = site.reviews.items.some((r) => !r.placeholder);

export const metadata = {
  title: 'Отзывы клиентов о разработке сайтов | ' + site.brand,
  description: 'Что говорят клиенты студии Байкал Таргет о сайтах: сроки, общение, заявки из поиска. Отзывы с Яндекс Карт, 2ГИС и из переписок.',
  alternates: { canonical: '/otzyvy/' },
  // Пока на странице только заглушки — не индексируем
  robots: hasReal ? undefined : { index: false, follow: true },
};

export default function Otzyvy() {
  const r = site.reviews;
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Отзывы', path: '/otzyvy/' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs"><Link href="/">Главная</Link> → <span>Отзывы</span></nav>
          <span className="eyebrow light">{r.eyebrow}</span>
          <h1>Отзывы клиентов о наших сайтах</h1>
          <p>{r.lead}</p>
          <div className="contacts" style={{ marginTop: 22 }}>
            {site.mapsYandex && <a href={site.mapsYandex} target="_blank" rel="noopener nofollow">Яндекс Карты ↗</a>}
            {site.maps2gis && <a href={site.maps2gis} target="_blank" rel="noopener nofollow">2ГИС ↗</a>}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          {!hasReal && <div className="note" style={{ marginBottom: 26, borderColor: 'var(--orange)' }}><b>Черновик.</b> Ниже заглушки — заменить реальными отзывами в content/site.json → reviews.items. Страница закрыта от индексации, пока заглушки не заменены.</div>}
          <div className="grid g2">
            {r.items.map((it, i) => <ReviewCard r={it} key={i} />)}
          </div>
        </div>
      </section>

      <section id="lead" className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Станьте следующим кейсом</h2>
            <p>Расскажите про нишу и город — предложим структуру сайта и назовём цену. Консультация бесплатная.</p>
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
