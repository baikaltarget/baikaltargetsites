import Link from 'next/link';
import site from '@/content/site.json';

export default function Footer() {
  return (
    <>
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>{site.brand} · Разработка сайтов</h4>
            <p style={{ maxWidth: 340, color: 'var(--muted-d)' }}>Digital-агентство с 2019 года. Делаем сайты как инструмент под заявки: быстрые, SEO-оптимизированные, готовые к рекламе.</p>
            <div className="socials">
              <a href={site.telegram} target="_blank" rel="noopener" aria-label="Telegram">TG</a>
              <a href={site.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
              <a href={site.vk} target="_blank" rel="noopener" aria-label="VK">VK</a>
            </div>
          </div>
          <div>
            <h4>Разделы</h4>
            <Link href="/otrasli">Отрасли</Link>
            <Link href="/tarify">Тарифы</Link>
            <Link href="/primery">Примеры</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/#steps">Как работаем</Link>
          </div>
          <div>
            <h4>Услуги агентства</h4>
            <a href="https://baikal-target.ru/services/kontekstnaya-reklama-yandex-direct" target="_blank" rel="noopener">Реклама в Яндекс.Директ ↗</a>
            <a href="https://baikal-target.ru/services/targetirovannaya-reklama" target="_blank" rel="noopener">Таргетированная реклама ↗</a>
            <a href={site.mainSite} target="_blank" rel="noopener">Основной сайт агентства ↗</a>
          </div>
          <div>
            <h4>Контакты</h4>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={'mailto:' + site.email}>{site.email}</a>
            <a>{site.address}</a>
            <a>Приём заявок: {site.hours}</a>
          </div>
        </div>
        <div className="legal">
          {site.legal} · <a href={site.policy} target="_blank" rel="noopener">Политика конфиденциальности</a><br/>
          © {site.brand}. Все права защищены.
        </div>
      </div>
    </footer>
    <div className="callbar">
      <a href={site.phoneHref} className="cb-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
        Позвонить
      </a>
      <a href={site.telegram} target="_blank" rel="noopener" className="cb-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        Telegram
      </a>
    </div>
    </>
  );
}
