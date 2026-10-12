import Link from 'next/link';
import site from '@/content/site.json';
import { getAllPosts } from '@/lib/blog';

export default function Footer() {
  const hasBlog = getAllPosts().length > 0;
  const hasReviews = site.reviews.items.some((r) => !r.placeholder);
  return (
    <>
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>{site.brand} · Разработка сайтов в Иркутске</h4>
            <p style={{ maxWidth: 340, color: 'var(--muted-d)' }}>Студия сайтов digital-агентства Байкал Таргет, Иркутск, с 2019 года. Сайты как инструмент под заявки: быстрые, с SEO с первого дня, готовые к рекламе.</p>
            <div className="socials">
              <a href={site.telegram} target="_blank" rel="noopener" aria-label="Telegram">TG</a>
              {site.max && <a href={site.max} target="_blank" rel="noopener" aria-label="MAX">MAX</a>}
              <a href={site.vk} target="_blank" rel="noopener" aria-label="VK">VK</a>
            </div>
          </div>
          <div>
            <h4>Разделы</h4>
            <Link href="/uslugi">Услуги</Link>
            <Link href="/otrasli">Сайты для бизнеса</Link>
            <Link href="/tarify">Тарифы</Link>
            <Link href="/primery">Примеры</Link>
            {hasReviews && <Link href="/otzyvy">Отзывы</Link>}
            <Link href="/o-studii">О студии</Link>
            {hasBlog && <Link href="/blog">Блог</Link>}
            <Link href="/#steps">Как работаем</Link>
          </div>
          <div>
            <h4>Услуги агентства</h4>
            <a href="https://baikal-target.ru/services/kontekstnaya-reklama-yandex-direct" target="_blank" rel="noopener">Реклама в Яндекс.Директ ↗︎</a>
            <a href="https://baikal-target.ru/services/targetirovannaya-reklama" target="_blank" rel="noopener">Таргетированная реклама ↗︎</a>
            <a href={site.mainSite} target="_blank" rel="noopener">Основной сайт агентства ↗︎</a>
          </div>
          <div>
            <h4>Контакты</h4>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.phone2Href}>{site.phone2} · Светлана</a>
            <a href={site.telegram} target="_blank" rel="noopener">Telegram {site.telegramHandle}</a>
            <a href={site.mapsYandex || undefined} target={site.mapsYandex ? '_blank' : undefined} rel="noopener">{site.address}</a>
            <a>Приём заявок: {site.hours}</a>
          </div>
        </div>
        <div className="legal">
          {site.legal} · <a href={site.policy}>Политика обработки персональных данных</a> · <a href={site.consent}>Согласие на обработку</a><br/>
          © {site.brand}. Все права защищены.
        </div>
      </div>
    </footer>
    </>
  );
}
