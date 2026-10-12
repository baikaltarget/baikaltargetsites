import Link from 'next/link';
import { notFound } from 'next/navigation';
import site from '@/content/site.json';
import { getAllSlugs, getPost, getAllPosts } from '@/lib/blog';
import { breadcrumbs } from '@/lib/schema';
import PostCover from '@/components/PostCover';
import CtaBlock from '@/components/CtaBlock';
import Mesh from '@/components/Mesh';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

const fmt = (d) => new Date(d).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

export function generateMetadata({ params }) {
  const { meta, draft } = getPost(params.slug);
  if (draft) return {};
  return {
    title: meta.title + ' | ' + site.brand,
    description: meta.description,
    alternates: { canonical: '/blog/' + params.slug + '/' },
    openGraph: { type: 'article', title: meta.title, description: meta.description, publishedTime: meta.date, modifiedTime: meta.updated || meta.date,
      images: [meta.cover || '/img/blog/og/' + params.slug + '.png'] },
  };
}

export default function Post({ params }) {
  const { meta, html, toc, draft, minutes, author } = getPost(params.slug);
  if (draft) notFound();
  const more = getAllPosts().filter((p) => p.slug !== params.slug).sort((a, b) => (a.category === meta.category ? -1 : 1) - (b.category === meta.category ? -1 : 1)).slice(0, 3);
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Блог', path: '/blog/' }, { name: meta.title, path: '/blog/' + params.slug + '/' }]);
  const ld = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: meta.title, description: meta.description, datePublished: meta.date, dateModified: meta.updated || meta.date,
    author: { '@type': 'Person', name: author.name, jobTitle: author.role, image: author.photo ? site.domain + author.photo : undefined, worksFor: { '@type': 'Organization', name: site.brand }, url: site.domain + '/o-studii/' },
    publisher: { '@type': 'Organization', name: site.brand, url: site.domain },
    mainEntityOfPage: site.domain + '/blog/' + params.slug + '/',
    image: site.domain + (meta.cover || '/img/blog/og/' + params.slug + '.png'),
    wordCount: html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length,
  };
  const faqLd = meta.faq && meta.faq.length ? { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: meta.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      {/* шапка статьи */}
      <section className="hero post-hero" style={{ padding: 0 }}>
        <Mesh />
        <div className="wrap post-hero-inner">
          <nav className="crumbs"><Link href="/">Главная</Link> → <Link href="/blog">Блог</Link> → <span>{meta.category}</span></nav>
          <span className="hero-over">{meta.category}{meta.updated && ' · обновлено ' + fmt(meta.updated)}</span>
          <h1>{meta.title}</h1>
          <p className="lead">{meta.description}</p>
          <div className="post-byline">
            <span className="post-author">{author.photo ? <img src={author.photo} alt={author.name} width="30" height="30" /> : <i>{author.name.split(' ').map((w) => w[0]).join('')}</i>}<span><b>{author.name}</b><small>{author.role}</small></span></span>
            <span className="post-dates">{fmt(meta.date)} · {minutes} мин чтения</span>
          </div>
        </div>
      </section>

      <section className="post-wrap">
        <div className="wrap post-cols">
          <aside className="post-side">
            {toc.length > 1 && (
              <nav className="toc">
                <b>В статье</b>
                {toc.map((t) => <a key={t.id} href={'#' + t.id}>{t.text}</a>)}
              </nav>
            )}
            {meta.service && (
              <div className="post-promo">
                <b>{meta.service.title || 'Сделаем такой сайт'}</b>
                <p>{meta.service.text}</p>
                <Link href={meta.service.url} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>{meta.service.btn || 'Подробнее →'}</Link>
              </div>
            )}
          </aside>

          <div className="post-main">
            {meta.summary && meta.summary.length > 0 && (
              <div className="post-tldr"><b>Коротко</b><ul>{meta.summary.map((s, i) => <li key={i}>{s}</li>)}</ul></div>
            )}
            <article className="article article-v2" dangerouslySetInnerHTML={{ __html: html }} />

            {meta.faq && meta.faq.length > 0 && (
              <div className="post-faq">
                <h2>Частые вопросы</h2>
                {meta.faq.map((f, i) => (
                  <details className="faq-d" key={i} open={i < 1}>
                    <summary><h3>{f.q}</h3><span className="faq-x" aria-hidden="true">+</span></summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            )}

            <div className="post-authorbox">
              <span className="post-author big">{author.photo ? <img src={author.photo} alt={author.name} width="64" height="64" /> : <i>{author.name.split(' ').map((w) => w[0]).join('')}</i>}</span>
              <div>
                <b>{author.name}</b><span className="person-role">{author.role}</span>
                <p>{author.text}</p>
                <Link href="/o-studii">О студии и команде →</Link>
              </div>
            </div>

            {meta.related && meta.related.length > 0 && (
              <div className="related" style={{ margin: '26px 0 0', maxWidth: 'none' }}>
                <h4>По теме в блоге агентства</h4>
                {meta.related.map((r, i) => <a key={i} href={r.url} target="_blank" rel="noopener">{r.text} ↗︎</a>)}
              </div>
            )}
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="sec-pale">
          <div className="wrap">
            <div className="sec-head"><span className="eyebrow">Читайте ещё</span><h2>Другие статьи</h2></div>
            <div className="post-grid">
              {more.map((p) => (
                <Link href={'/blog/' + p.slug} className="post-card post-card-v2" key={p.slug}>
                  <PostCover post={p} />
                  <span className="post-body">
                    <span className="post-meta"><span className="cat">{p.category}</span><span>{p.minutes} мин</span></span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBlock title="Обсудим ваш сайт" text="Всё, о чём пишем, делаем сами. Расскажите про бизнес и город — предложим структуру и назовём цену." />
    </>
  );
}
