import Link from 'next/link';
import Image from 'next/image';

const host = (c) => { if (c.hostLabel) return c.hostLabel; try { return new URL(c.url).hostname.replace(/^www\./, ''); } catch { return ''; } };

// Карточка кейса в виде «окна браузера»: скрин в своих пропорциях, под ним тёмная панель с результатом.
export default function CaseCard({ c, className = '' }) {
  return (
    <Link href={'/primery/' + c.slug} className={'casex ' + className} aria-label={'Кейс: сайт для ' + c.name}>
      <span className="casex-win">
        <span className="casex-bar"><i /><i /><i /><span className="casex-url">{host(c)}</span></span>
        {c.img ? <Image src={c.img} alt={'Сайт ' + c.name + ' — ' + c.niche} width={1400} height={900} className="casex-shot" /> : <span className="casex-shot casex-noshot"><b>{host(c)}</b><span>{c.niche}</span></span>}
      </span>
      <span className="casex-body">
        <span className="casex-tag">{c.niche}{c.city && <em> · {c.city}</em>}</span>
        <span className="casex-name">{c.name}</span>
        <span className="casex-res">{c.result}</span>
        <span className="casex-link">Смотреть кейс →</span>
      </span>
    </Link>
  );
}
