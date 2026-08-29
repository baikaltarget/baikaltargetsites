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
            <Link href="/nishi">Ниши</Link>
            <Link href="/tarify">Тарифы</Link>
            <Link href="/primery">Примеры</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/#steps">Как работаем</Link>
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
      <a href={site.phoneHref} className="btn btn-primary">☎ Позвонить</a>
      <a href={site.telegram} target="_blank" rel="noopener" className="btn btn-orange">✈ Telegram</a>
    </div>
    </>
  );
}
