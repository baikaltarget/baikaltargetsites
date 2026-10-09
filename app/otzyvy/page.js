import Link from 'next/link';
import site from '@/content/site.json';
import CtaBlock from '@/components/CtaBlock';
import PageHero from '@/components/PageHero';
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
      <PageHero
        crumbs={[{ name: 'Главная', href: '/' }, { name: 'Отзывы' }]}
        eyebrow={r.eyebrow} title="Отзывы клиентов" titleHl="о наших сайтах"
        lead={r.lead}
        primary={{ href: '#lead', text: 'Стать следующим кейсом →' }} secondary={{ href: '/primery', text: 'Примеры работ' }}
        visual={site.cases[2].laptop} visualAlt={'Сайт ' + site.cases[2].name}>
        {(site.mapsYandex || site.maps2gis) && <div className="contacts" style={{ marginTop: 22 }}>
          {site.mapsYandex && <a href={site.mapsYandex} target="_blank" rel="noopener nofollow">Яндекс Карты ↗</a>}
          {site.maps2gis && <a href={site.maps2gis} target="_blank" rel="noopener nofollow">2ГИС ↗</a>}
        </div>}
      </PageHero>

      <section>
        <div className="wrap">
          {!hasReal && <div className="note" style={{ marginBottom: 26, borderColor: 'var(--orange)' }}><b>Черновик.</b> Ниже заглушки — заменить реальными отзывами в content/site.json → reviews.items. Страница закрыта от индексации, пока заглушки не заменены.</div>}
          <div className="grid g2">
            {r.items.map((it, i) => <ReviewCard r={it} key={i} />)}
          </div>
        </div>
      </section>

      <CtaBlock title="Станьте следующим кейсом" />
    </>
  );
}
