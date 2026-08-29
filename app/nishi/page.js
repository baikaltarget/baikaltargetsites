import Link from 'next/link';
import site from '@/content/site.json';

export const metadata = {
  title: 'Сайты под нишу — кому мы делаем | ' + site.brand,
  description: 'Многостраничные SEO-сайты под конкретные ниши: стройка, производство, клиники, фитнес, клининг, отопление, бьюти, автосервис, каталоги товаров.',
  alternates: { canonical: '/nishi/' },
};

export default function NicheIndex() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Кому подходит</span>
          <h1>Сайты под вашу нишу</h1>
          <p>Под каждую сферу — своя структура и свои страницы: у стройки объекты со сметами, у клининга калькулятор по площади, у клиники лицензии и запись. Не шаблон с заменой слова, а сайт под конкретную задачу.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="niche-grid">
            {site.niches.map((n) => (
              <Link href={'/nishi/' + n.slug} className="niche-card" key={n.slug}>
                <h3>{n.name}</h3>
                <p>{n.intro}</p>
                <span className="more">Подробнее →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
