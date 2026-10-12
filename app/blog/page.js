import Link from 'next/link';
import site from '@/content/site.json';
import { getAllPosts } from '@/lib/blog';
import PageHero from '@/components/PageHero';
import PostCover from '@/components/PostCover';
import CtaBlock from '@/components/CtaBlock';
import { breadcrumbs } from '@/lib/schema';

const posts = getAllPosts();
const fmt = (d) => new Date(d).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

export const metadata = {
  title: 'Блог о сайтах, SEO и заявках — статьи студии Байкал Таргет | ' + site.brand,
  description: 'Сколько стоит сайт, как выбрать студию, лендинг или многостраничник, как сайт выходит в топ. Статьи от практиков из Иркутска с цифрами из своих проектов.',
  alternates: { canonical: '/blog/' },
  robots: posts.length ? undefined : { index: false, follow: true },
};

export default function Blog() {
  const cats = [...new Set(posts.map((p) => p.category))];
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Блог', path: '/blog/' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <PageHero
        crumbs={[{ name: 'Главная', href: '/' }, { name: 'Блог' }]}
        eyebrow="Блог" title="О сайтах, SEO" titleHl="и заявках"
        lead="Как устроены сайты, которые приносят клиентов из поиска. Пишем по своим проектам, с цифрами. Про рекламу и аналитику — в блоге агентства.">
        {cats.length > 1 && <div className="cat-row">{cats.map((c) => <span className="cat-chip" key={c}>{c}</span>)}</div>}
      </PageHero>

      <section>
        <div className="wrap">
          {posts.length === 0 && <p style={{ color: 'var(--muted)', fontSize: 17 }}>Статьи готовятся. Пока почитайте <a href={site.mainSiteBlog} target="_blank" rel="noopener" style={{ color: 'var(--blue)', fontWeight: 600 }}>блог агентства</a> про рекламу и аналитику.</p>}
          <div className="post-grid">
            {posts.map((p) => (
              <Link href={'/blog/' + p.slug} className="post-card post-card-v2" key={p.slug}>
                <PostCover post={p} />
                <span className="post-body">
                  <span className="post-meta"><span className="cat">{p.category}</span><span>{fmt(p.date)} · {p.minutes} мин</span></span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="post-author">{p.author.photo ? <img src={p.author.photo} alt={p.author.name} width="30" height="30" loading="lazy" /> : <i>{p.author.name.split(' ').map((w) => w[0]).join('')}</i>}{p.author.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock title="Нужен сайт, а не статья?" text="Расскажите про бизнес и город — предложим структуру и назовём цену. Всё, о чём пишем, делаем сами." />
    </>
  );
}
