import Link from 'next/link';
import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import CaseCard from '@/components/CaseCard';
import { breadcrumbs, author } from '@/lib/schema';

const bySlug = (slug) => site.cases.find((c) => c.slug === slug);
const nicheBySlug = (slug) => site.niches.find((n) => n.slug === slug);
// Кириллический домен задаётся читаемо через hostLabel в content/site.json
const prettyHost = (c) => { if (c.hostLabel) return c.hostLabel; try { return new URL(c.url).hostname.replace(/^www\./, ''); } catch { return ''; } };

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
            <p className="lead">{c.before} {c.result}.</p>
            <div className="hero-cta">
              <a href={c.url} target="_blank" rel="noopener" className="btn btn-primary">Открыть {prettyHost(c)} ↗</a>
              <Link href="#lead" className="btn btn-ghost">Хочу такой же</Link>
            </div>
            <div className="trust">
              {metrics.slice(0, 3).map((m, i) => <div key={i}><b>{m.v}</b><small>{m.k}</small></div>)}
            </div>
          </div>
          <div className="hero-visual">
            {c.img && (
              <span className="case-laptop">
                <span className="case-laptop-screen"><img src={c.img} alt={'Сайт ' + c.name} width="1400" height="900" /></span>
                <span className="case-laptop-base" />
              </span>
            )}
          </div>
        </div>
      </section>

      {c.draft && <div className="wrap" style={{ marginTop: 24 }}><div className="note" style={{ borderColor: 'var(--orange)' }}><b>Черновик кейса.</b> Цифры и дату запуска нужно подтвердить, пометки «[ЗАПОЛНИТЬ]» в content/site.json заменить. Пока страница закрыта от индексации.</div></div>}

      {/* было → стало */}
      <section>
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Задача</span><h2>С чем пришёл клиент — <span className="hl">и что изменилось</span></h2></div>
          <div className="bw">
            <div className="bw-col bw-before">
              <span className="bw-label">Было</span>
              <p>{c.task}</p>
            </div>
            <div className="bw-arrow" aria-hidden="true">→</div>
            <div className="bw-col bw-after">
              <span className="bw-label">Стало</span>
              <div className="bw-result">{c.result}</div>
              <div className="bw-metrics">
                {metrics.map((m, i) => <div key={i}><b>{m.v}</b><span>{m.k}</span></div>)}
              </div>
              {c.period && <div className="bw-period">Запуск: {c.period}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* что сделали — шаги */}
      <section className="sec-pale">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Решение</span><h2>Что сделали</h2><p>Не «красивый сайт», а набор страниц под то, как ищут эту услугу, плюс техническая база, чтобы поиск их показывал.</p></div>
          <div className="grid g2">
            {done.map((d, i) => (
              <div className="step-card" key={i}><span className="step-num">0{i + 1}</span><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* что внутри: большой скрин + страницы */}
      {c.pages && c.pages.length > 0 && (
        <section>
          <div className="wrap">
            <div className="sec-head"><span className="eyebrow">Что внутри</span><h2>Страницы, которые <span className="hl">приводят клиентов</span></h2></div>
            <div className="inside">
              <div className="inside-shot">
                {c.img && <img src={c.img} alt={'Главная страница сайта ' + c.name} width="1400" height="900" loading="lazy" />}
                <a href={c.url} target="_blank" rel="noopener" className="btn btn-outline">Открыть сайт ↗</a>
              </div>
              <div className="inside-list">
                {c.pages.map((p, i) => (
                  <div className="inside-item" key={i}><span className="inside-ic">{i + 1}</span><div><h3>{p.h}</h3><p>{p.p}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* что получил клиент — база всех наших сайтов */}
      <section className="compare on-navy">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow light">В комплекте</span><h2>Что ещё получил <span className="hl">клиент</span></h2><p>Это входит в каждый наш сайт — и в этот тоже.</p></div>
          <div className="grid g3">
            {site.features.slice(0, 6).map((f, i) => (
              <div className="feat feat-dark" key={i}><h3>{f.h}</h3><p>{f.p}</p></div>
            ))}
          </div>
          {niche && <div style={{ marginTop: 28 }}><Link href={'/otrasli/' + niche.slug} className="btn btn-ghost">Сайты для: {niche.name.toLowerCase()} →</Link></div>}
        </div>
      </section>

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
