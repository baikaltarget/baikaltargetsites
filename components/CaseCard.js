import Link from 'next/link';
import Image from 'next/image';

// Карточка кейса: скрин сайта фоном, текст на тёмном градиенте снизу.
// Ведёт на внутреннюю страницу /primery/[slug] — там цифры и ссылка на сам сайт.
export default function CaseCard({ c, className = '' }) {
  return (
    <Link href={'/primery/' + c.slug} className={'casex ' + className} aria-label={'Кейс: сайт для ' + c.name}>
      {c.img && <Image src={c.img} alt={'Сайт ' + c.name + ' — ' + c.niche} width={800} height={366} className="casex-bg" />}
      <span className="casex-tag">{c.niche}{c.city && <em> · {c.city}</em>}</span>
      <span className="casex-body">
        <span className="casex-name">{c.name}</span>
        <span className="casex-res">{c.result}</span>
        <span className="casex-link">Смотреть кейс →</span>
      </span>
    </Link>
  );
}
