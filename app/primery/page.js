import Link from 'next/link';
import site from '@/content/site.json';
import CtaBlock from '@/components/CtaBlock';
import PageHero from '@/components/PageHero';
import CaseCard from '@/components/CaseCard';

export const metadata = {
  title: 'Примеры сайтов — наши работы для бизнеса Иркутска и других городов | ' + site.brand,
  description: 'Портфолио студии: многостраничные SEO-сайты для стройки, производства, фитнеса, отелей, автосервиса с цифрами результата из поиска.',
  alternates: { canonical: '/primery/' },
};

export default function Primery() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Главная', href: '/' }, { name: 'Примеры работ' }]}
        eyebrow="Примеры работ" title="Сайты, которые" titleHl="мы сделали"
        lead="Проекты из Иркутска и других городов с цифрами результата из поиска. Открывайте кейс — внутри что было, что сделали и что получилось."
        primary={{ href: '#lead', text: 'Хочу такой сайт →' }}
        visual={site.cases[0].laptop} visualAlt={'Сайт ' + site.cases[0].name}>
        <div className="trust"><div><b>{site.cases.length}</b><small>кейсов с цифрами</small></div><div><b>50+</b><small>сайтов с 2019 года</small></div></div>
      </PageHero>

      <section>
        <div className="wrap">
          <div className="case-grid2">
            {site.cases.map((c) => <CaseCard c={c} key={c.slug} />)}
          </div>
        </div>
      </section>

      <CtaBlock title="Хотите такой же результат?" formTitle="Хочу такой сайт" />
    </>
  );
}
