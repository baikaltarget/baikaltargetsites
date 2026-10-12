import Link from 'next/link';
import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import Mesh from '@/components/Mesh';
import ContactLinks from '@/components/ContactLinks';
import { localBusiness, breadcrumbs } from '@/lib/schema';

export const metadata = {
  title: 'Контакты и заявка | ' + site.brand,
  description: 'Студия сайтов Байкал Таргет в Иркутске: ул. Байкальская, 295/1. Телефон, Telegram, заявка на сайт.',
  alternates: { canonical: '/kontakty/' },
};

export default function Kontakty() {
  const ld = { '@context': 'https://schema.org', ...localBusiness() };
  const crumbs = breadcrumbs([{ name: 'Главная', path: '/' }, { name: 'Контакты', path: '/kontakty/' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      {/* один тёмный блок: контакты слева, форма справа */}
      <section id="lead" className="hero contact-hero" style={{ padding: 0 }}>
        <Mesh />
        <div className="wrap hero-inner">
          <div>
            <nav className="crumbs"><Link href="/">Главная</Link> → <span>Контакты</span></nav>
            <span className="hero-over">Контакты · Иркутск</span>
            <h1>Обсудим <span className="hl">ваш сайт</span></h1>
            <p className="lead">Расскажите про бизнес и город — предложим структуру страниц и тариф. Ответим в течение рабочего дня, консультация бесплатная.</p>
            <ContactLinks variant="cards" showAddress />
          </div>
          <LeadForm title="Заявка на сайт" />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-map">
              <iframe
                title={'Офис на карте: ' + site.address}
                src={'https://yandex.ru/map-widget/v1/?text=' + encodeURIComponent(site.address) + '&z=16'}
                loading="lazy" allowFullScreen
              />
              <a href={site.mapsYandex || 'https://yandex.ru/maps/?text=' + encodeURIComponent(site.address)} target="_blank" rel="noopener" className="map-link">{site.address} · открыть в Яндекс Картах ↗</a>
            </div>
            <div>
              <div className="sec-head" style={{ marginBottom: 16 }}><span className="eyebrow">Реквизиты</span><h2 style={{ fontSize: 26 }}>Для договора и оплаты</h2></div>
              <p className="case-p">{site.legal}</p>
              <p className="case-p">Работаем по договору. Полные реквизиты и закрывающие документы пришлём в мессенджер.</p>
              <div className="socials" style={{ marginTop: 10 }}>
                <a href={site.telegram} target="_blank" rel="noopener" aria-label="Telegram">TG</a>
                {site.max && <a href={site.max} target="_blank" rel="noopener" aria-label="MAX">MAX</a>}
                <a href={site.vk} target="_blank" rel="noopener" aria-label="VK">VK</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
