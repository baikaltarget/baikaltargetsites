import Link from 'next/link';
import Mesh from '@/components/Mesh';

// Первый экран внутренних страниц — в стиле главной: тёмный фон, сетка, слева текст, справа ноутбук с сайтом.
// visual: путь к картинке «сайт в ноутбуке» (cases[].laptop). crumbs: [{name, href}] — последний без href.
export default function PageHero({ eyebrow, title, titleHl, lead, crumbs = [], primary, secondary, visual, visualAlt = '', children }) {
  return (
    <section className="hero page-hero" style={{ padding: 0 }}>
      <Mesh />
      <div className={'wrap hero-inner' + (visual ? '' : ' hero-inner-solo')}>
        <div>
          {crumbs.length > 0 && (
            <nav className="crumbs">
              {crumbs.map((c, i) => (
                <span key={i}>{i > 0 && ' → '}{c.href ? <Link href={c.href}>{c.name}</Link> : <span>{c.name}</span>}</span>
              ))}
            </nav>
          )}
          {eyebrow && <span className="hero-over">{eyebrow}</span>}
          <h1>{title}{titleHl && <span className="hl"> {titleHl}</span>}</h1>
          {lead && <p className="lead">{lead}</p>}
          {(primary || secondary) && (
            <div className="hero-cta">
              {primary && <Link href={primary.href} className="btn btn-primary">{primary.text}</Link>}
              {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.text}</Link>}
            </div>
          )}
          {children}
        </div>
        {visual && (
          <div className="hero-visual hero-visual-laptop">
            <img src={visual} alt={visualAlt} className="hero-laptop" width="1498" height="1050" fetchPriority="high" />
          </div>
        )}
      </div>
    </section>
  );
}
