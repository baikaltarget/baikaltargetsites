import site from '@/content/site.json';

// Блок «SEO с первого дня» — заменил отдельную страницу /uslugi/sayt-pod-seo,
// чтобы не конкурировать с главной и «Сайтом под ключ» за один запрос.
export default function SeoIncluded() {
  const b = site.seoIncluded;
  return (
    <section className="sec-pale">
      <div className="wrap">
        <div className="sec-head"><span className="eyebrow">{b.eyebrow}</span><h2>{b.title}<span className="hl">{b.titleHl}</span></h2><p>{b.lead}</p></div>
        <div className="grid g3">
          {b.blocks.map((x, i) => <div className="niche-block" key={i}><h3>{x.h}</h3><p>{x.p}</p></div>)}
        </div>
      </div>
    </section>
  );
}
