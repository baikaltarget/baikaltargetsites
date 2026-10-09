import Link from 'next/link';
import Image from 'next/image';

// Карточка кейса. Ведёт на внутреннюю страницу /primery/[slug] — там цифры и ссылка на сам сайт.
export default function CaseCard({ c, className = 'case2' }) {
  return (
    <Link href={'/primery/' + c.slug} className={className}>
      {c.img && <span className="case2-img"><Image src={c.img} alt={'Сайт ' + c.name + ' — ' + c.niche} width={800} height={366} /></span>}
      <div className="case2-body">
        <div className="case2-top"><span className="case2-niche">{c.niche}</span>{c.city && <span className="case2-city">{c.city}</span>}</div>
        <h3>{c.name}</h3>
        {c.before && <p className="case2-before">{c.before}</p>}
        <div className="case2-result">{c.result}</div>
        <span className="case2-link">Смотреть кейс →</span>
      </div>
    </Link>
  );
}
