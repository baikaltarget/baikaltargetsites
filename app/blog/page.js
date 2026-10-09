import Link from 'next/link';
import site from '@/content/site.json';
import { getAllPosts } from '@/lib/blog';

const posts = getAllPosts();

export const metadata = {
  title: 'Блог о сайтах и SEO | ' + site.brand,
  description: 'Статьи про разработку сайтов, SEO, гео-страницы, скорость и заявки. Полезное для локального бизнеса.',
  alternates: { canonical: '/blog/' },
  robots: posts.length ? undefined : { index: false, follow: true },
};

export default function Blog() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Блог</span>
          <h1>О сайтах, SEO и заявках</h1>
          <p>Как устроены сайты, которые приносят клиентов из поиска. Про рекламу и аналитику — в <a href={site.mainSiteBlog} target="_blank" rel="noopener" style={{ color: '#5899ff', fontWeight: 600 }}>блоге агентства</a>.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          {posts.length === 0 && <p style={{ color: 'var(--muted)', fontSize: 17 }}>Статьи готовятся. Пока почитайте <a href={site.mainSiteBlog} target="_blank" rel="noopener" style={{ color: 'var(--blue)', fontWeight: 600 }}>блог агентства</a> про рекламу и аналитику.</p>}
          <div className="post-grid">
            {posts.map((p) => (
              <Link href={'/blog/' + p.slug} className="post-card" key={p.slug}>
                <span className="cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="more">Читать →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
