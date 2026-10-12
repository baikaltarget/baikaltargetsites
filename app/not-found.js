import Link from 'next/link';
import { TOP_CASES } from '@/lib/cases';
import CaseCard from '@/components/CaseCard';
import PageHero from '@/components/PageHero';

export const metadata = { title: 'Страница не найдена — 404 | Байкал Таргет', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="Ошибка 404" title="Такой страницы" titleHl="нет"
        lead="Возможно, ссылка устарела или в адресе опечатка. Вот куда можно пойти вместо неё."
        primary={{ href: '/', text: 'На главную →' }} secondary={{ href: '/uslugi', text: 'Услуги и цены' }} />
      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Примеры работ</span><h2>Посмотрите, какие сайты мы делаем</h2></div>
          <div className="case-grid">{TOP_CASES.slice(0, 3).map((c) => <CaseCard c={c} key={c.slug} />)}</div>
          <div style={{ marginTop: 26 }}><Link href="/primery" className="btn btn-outline">Все примеры работ →</Link></div>
        </div>
      </section>
    </>
  );
}
