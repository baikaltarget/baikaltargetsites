import Link from 'next/link';
import Image from 'next/image';
import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import CaseCard from '@/components/CaseCard';
import { breadcrumbs, author } from '@/lib/schema';

const bySlug = (slug) => site.cases.find((c) => c.slug === slug);

export function generateStaticParams() { return site.cases.map((c) => ({ slug: c.slug })); }

export function generateMetadata({ params }) {
  const c = bySlug(params.slug);
  return {
    title: 'Кейс: сайт для ' + c.name + ' — ' + c.niche + ' | ' + site.brand,
    description: 'Как мы сделали сайт для ' + c.name + ' (' + c.niche + (c.city ? ', ' + c.city : '') + '): задача, что сделали, результат из поиска. ' + c.result + '.',
    alternates: { canonical: '/primery/' + c.slug + '/' },
    // Пока в кейсе заглушки вместо цифр — не индексируем, чтобы не отдавать в поиск пустую страницу
    robots: c.placeholder ? { index: false, follow: true } : undefined,
  };
}

export default function CasePage({ params }) {
  const c = bySlug(params.slug);
  const others = site.cases.filter((x) => x.slug !== c.slug).slice(0, 3);
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Примеры работ', path: '/primery/' }, { name: c.name, path: '/primery/' + c.slug + '/' }]);
  const ld = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Кейс: сайт для ' + c.name, description: c.result, author: author(),
    publisher: { '@type': 'Organization', name: site.brand }, mainEntityOfPage: site.domain + '/primery/' + c.slug + '/',
    about: { '@type': 'WebSite', name: c.name, url: c.url },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs"><Link href="/">Главная</Link> → <Link href="/primery">Примеры работ</Link> → <span>{c.name}</span></nav>
          <span className="eyebrow light">{c.niche}{c.city && ' · ' + c.city}</span>
          <h1>Сайт для {c.name}</h1>
          <p>{c.before}</p>
          <div className="cta-badges" style={{ marginTop: 22 }}>{(c.tags || []).map((t, i) => <span key={i}>{t}</span>)}</div>
        </div>
      </section>

      <section>
        <div className="wrap case-page">
          {c.placeholder && <div className="note" style={{ marginBottom: 26, borderColor: 'var(--orange)' }}><b>Черновик кейса.</b> Текст в квадратных скобках — заглушки, их нужно заменить реальными данными. Пока страница закрыта от индексации.</div>}
          {c.img && <div className="case-shot"><Image src={c.img} alt={'Сайт ' + c.name} width={1200} height={550} /></div>}

          <div className="case-cols">
            <div>
              <div className="sec-head" style={{ marginBottom: 20 }}><span className="eyebrow">Задача</span><h2>С чем пришёл клиент</h2></div>
              <p className="case-p">{c.task}</p>

              <div className="sec-head" style={{ margin: '36px 0 20px' }}><span className="eyebrow">Решение</span><h2>Что сделали</h2></div>
              <ul className="case-done">{(c.done || []).map((d, i) => <li key={i}><span className="tick">✓</span> {d}</li>)}</ul>
            </div>

            <aside className="case-side">
              <div className="case-metrics">
                <span className="eyebrow">Результат</span>
                <div className="case-main-result">{c.result}</div>
                {(c.metrics || []).map((m, i) => <div className="cm" key={i}><b>{m.v}</b><span>{m.k}</span></div>)}
                <div className="case-period">Запуск: {c.period}</div>
              </div>
              <a href={c.url} target="_blank" rel="noopener" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Открыть сайт ↗</a>
            </aside>
          </div>
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
          <div className="sec-head"><span className="eyebrow">Ещё кейсы</span><h2>Другие сайты, которые мы сделали</h2></div>
          <div className="case-grid">{others.map((o) => <CaseCard c={o} key={o.slug} />)}</div>
          <div style={{ marginTop: 26 }}><Link href="/primery" className="btn btn-outline">Все примеры работ →</Link></div>
        </div>
      </section>
    </>
  );
}
