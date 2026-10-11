import Link from 'next/link';
import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import Mesh from '@/components/Mesh';
import { localBusiness, breadcrumbs } from '@/lib/schema';

export const metadata = {
  title: 'Контакты и заявка | ' + site.brand,
  description: 'Студия сайтов Байкал Таргет в Иркутске: ул. Байкальская, 295/1. Телефон, Telegram, WhatsApp, заявка на сайт.',
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
            <div className="contact-list">
              <a href={site.phoneHref}><i>☎</i><span><b>{site.phone}</b><small>звонок бесплатный</small></span></a>
              <a href={site.telegram} target="_blank" rel="noopener"><i>✈</i><span><b>Telegram {site.telegramHandle}</b><small>отвечаем быстрее всего</small></span></a>
              <a href={site.whatsapp} target="_blank" rel="noopener"><i>✆</i><span><b>WhatsApp</b><small>+7 983 444-63-20</small></span></a>
              <a href={'mailto:' + site.email}><i>✉</i><span><b>{site.email}</b><small>для документов и КП</small></span></a>
              <a href={site.mapsYandex || undefined} target={site.mapsYandex ? '_blank' : undefined} rel="noopener"><i>📍</i><span><b>{site.address}</b><small>{site.hours} · можно приехать, лучше по записи</small></span></a>
            </div>
          </div>
          <LeadForm title="Заявка на сайт" />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-map">
              {site.mapsYandex
                ? <a href={site.mapsYandex} target="_blank" rel="noopener" className="btn btn-outline">Открыть в Яндекс Картах ↗</a>
                : <div className="map-ph"><b>Карта офиса</b><span>появится, когда добавим ссылку на карточку в Яндекс Картах (content/site.json → mapsYandex)</span></div>}
            </div>
            <div>
              <div className="sec-head" style={{ marginBottom: 16 }}><span className="eyebrow">Реквизиты</span><h2 style={{ fontSize: 26 }}>Для договора и оплаты</h2></div>
              <p className="case-p">{site.legal}</p>
              <p className="case-p">Работаем по договору. Полные реквизиты и закрывающие документы пришлём на почту.</p>
              <div className="socials" style={{ marginTop: 10 }}>
                <a href={site.telegram} target="_blank" rel="noopener" aria-label="Telegram">TG</a>
                <a href={site.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
                <a href={site.vk} target="_blank" rel="noopener" aria-label="VK">VK</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
