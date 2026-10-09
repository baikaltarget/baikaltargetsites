import Link from 'next/link';
import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import CaseCard from '@/components/CaseCard';
import { breadcrumbs, author } from '@/lib/schema';

const bySlug = (slug) => site.cases.find((c) => c.slug === slug);
const nicheBySlug = (slug) => site.niches.find((n) => n.slug === slug);
// Кириллический домен показываем читаемо (punycode → unicode)
const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return ''; } };
const prettyHost = (url) => { const h = host(url); try { return h.startsWith('xn--') || h.includes('.xn--') ? decodeURI(new URL('http://' + h).hostname) : h; } catch { return h; } };

export function generateStaticParams() { return site.cases.map((c) => ({ slug: c.slug })); }

export function generateMetadata({ params }) {
  const c = bySlug(params.slug);
  const h1 = c.h1 || 'Сайт для ' + c.name;
  return {
    title: h1 + ' — кейс | ' + site.brand,
    description: 'Кейс студии Байкал Таргет: ' + h1.toLowerCase() + '. Задача, структура сайта, результат из поиска: ' + c.result + '.',
    alternates: { canonical: '/primery/' + c.slug + '/' },
    // Пока в кейсе не подтверждены цифры и дата запуска — не индексируем
    robots: c.draft ? { index: false, follow: true } : undefined,
    openGraph: { type: 'article', title: h1, description: c.result, images: c.img ? [c.img] : undefined },
  };
}

export default function CasePage({ params }) {
  const c = bySlug(params.slug);
  const h1 = c.h1 || 'Сайт для ' + c.name;
  const niche = c.nicheSlug ? nicheBySlug(c.nicheSlug) : null;
  const similar = site.cases.filter((x) => x.slug !== c.slug && c.nicheSlug && x.nicheSlug === c.nicheSlug);
  const others = [...similar, ...site.cases.filter((x) => x.slug !== c.slug && !similar.includes(x))].slice(0, 3);
  const metrics = (c.metrics || []).filter((m) => m.v && !/ЗАПОЛНИТЬ/.test(m.v));
  const done = (c.done || []).filter((t) => !/^\[/.test(t));
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Примеры работ', path: '/primery/' }, { name: c.name, path: '/primery/' + c.slug + '/' }]);
  const ld = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: h1, description: c.result, author: author(), image: c.img ? site.domain + c.img : undefined,
    publisher: { '@type': 'Organization', name: site.brand }, mainEntityOfPage: site.domain + '/primery/' + c.slug + '/',
    about: { '@type': 'WebSite', name: c.name, url: c.url },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* первый экран — как на главной */}
      <section className="hero case-hero" style={{ padding: 0 }}>
        <div className="wrap hero-inner">
          <div>
            <nav className="crumbs"><Link href="/">Главная</Link> → <Link href="/primery">Примеры работ</Link> → <span>{c.name}</span></nav>
            <span className="hero-over">{c.niche}{c.city && ' · ' + c.city}</span>
            <h1>{h1}</h1>
            <p className="lead">{c.task}</p>
            <div className="hero-cta">
              <a href={c.url} target="_blank" rel="noopener" className="btn btn-primary">Открыть {prettyHost(c.url)} ↗</a>
              <Link href="#lead" className="btn btn-ghost">Хочу такой же</Link>
            </div>
            <div className="trust">
              {metrics.slice(0, 3).map((m, i) => <div key={i}><b>{m.v}</b><small>{m.k}</small></div>)}
            </div>
          </div>
          <div className="hero-visual">
            {c.img && (
              <span className="case-laptop">
                <span className="case-laptop-screen"><img src={c.img} alt={'Сайт ' + c.name} width="800" height="366" /></span>
                <span className="case-laptop-base" />
              </span>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap case-page">
          {c.draft && <div className="note" style={{ marginBottom: 26, borderColor: 'var(--orange)' }}><b>Черновик кейса.</b> Цифры и дату запуска нужно подтвердить, пометки «[ЗАПОЛНИТЬ]» в content/site.json заменить. Пока страница закрыта от индексации.</div>}
          <div className="case-cols">
            <div>
              <div className="sec-head" style={{ marginBottom: 20 }}><span className="eyebrow">Решение</span><h2>Что сделали</h2></div>
              <ul className="case-done">{done.map((d, i) => <li key={i}><span className="tick">✓</span> {d}</li>)}</ul>
            </div>
            <aside className="case-side">
              <div className="case-metrics">
                <span className="eyebrow">Результат</span>
                <div className="case-main-result">{c.result}</div>
                {metrics.map((m, i) => <div className="cm" key={i}><b>{m.v}</b><span>{m.k}</span></div>)}
                {c.period && <div className="case-period">Запуск: {c.period}</div>}
              </div>
              {niche && <Link href={'/otrasli/' + niche.slug} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Сайт для: {niche.name.toLowerCase()} →</Link>}
            </aside>
          </div>
        </div>
      </section>

      {c.pages && c.pages.length > 0 && (
        <section className="sec-pale">
          <div className="wrap">
            <div className="sec-head"><span className="eyebrow">Что внутри</span><h2>Страницы, которые <span className="hl">приводят клиентов</span></h2><p>Не одна витрина, а страницы под то, как ищут эту услугу. Вот ключевые.</p></div>
            <div className="grid g2">
              {c.pages.map((p, i) => <div className="niche-block" key={i}><h3>{p.h}</h3><p>{p.p}</p></div>)}
            </div>
          </div>
        </section>
      )}

      <section id="lead" className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Хотите такой же результат?</h2>
            <p>Расскажите про нишу и город — покажем, какие страницы нужны вашему бизнесу, и назовём цену. От 35 000 ₽, запуск от 5 дней.</p>
            <div className="contacts">
              <a href={site.phoneHref}>☎ {site.phone}</a>
              <a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
            </div>
          </div>
          <LeadForm nichePlaceholder={'Напр.: ' + c.niche.toLowerCase() + ', Иркутск'} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Ещё кейсы</span><h2>{similar.length ? 'Похожие проекты' : 'Другие сайты, которые мы сделали'}</h2></div>
          <div className="case-grid">{others.map((o) => <CaseCard c={o} key={o.slug} />)}</div>
          <div style={{ marginTop: 26 }}><Link href="/primery" className="btn btn-outline">Все примеры работ →</Link></div>
        </div>
      </section>
    </>
  );
}
