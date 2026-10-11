import Mesh from '@/components/Mesh';

// Обложка статьи — HTML-блок в стиле сайта (тёмный фон, сетка, рубрика, заголовок).
// Шрифты те же, что на сайте; картинки не нужны. Если у статьи есть cover (картинка) — показываем её.
const TONES = { 'SEO': 'tone-blue', 'Разработка': 'tone-navy', 'Заявки': 'tone-orange', 'Скорость': 'tone-teal' };

export default function PostCover({ post, size = 'card' }) {
  if (post.cover) return <span className={'pcover pcover-img pcover-' + size}><img src={post.cover} alt="" loading="lazy" /></span>;
  const tone = TONES[post.category] || 'tone-navy';
  return (
    <span className={'pcover ' + tone + ' pcover-' + size} aria-hidden="true">
      <Mesh className="mesh pcover-mesh" />
      <span className="pcover-cat">{post.category}</span>
      <span className="pcover-title">{post.title}</span>
    </span>
  );
}
