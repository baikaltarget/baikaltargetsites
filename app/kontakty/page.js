import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import { localBusiness } from '@/lib/schema';

export const metadata = {
  title: 'Контакты и заявка | ' + site.brand,
  description: 'Студия сайтов Байкал Таргет в Иркутске: ул. Байкальская, 295/1. Телефон, Telegram, WhatsApp, заявка на сайт.',
  alternates: { canonical: '/kontakty/' },
};

export default function Kontakty() {
  const ld = { '@context': 'https://schema.org', ...localBusiness() };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow light">Контакты</span>
          <h1>Обсудим ваш сайт</h1>
          <p>Расскажите про нишу и город — предложим структуру страниц и тариф под задачу. Консультация бесплатная.</p>
        </div>
      </section>
      <section id="lead" className="cta" style={{ marginTop: 40 }}>
        <div className="wrap cta-inner">
          <div>
            <h2>Как с нами связаться</h2>
            <p>Ответим в течение рабочего дня. Приём заявок: {site.hours}.</p>
            <div className="contacts">
              <a href={site.phoneHref}>☎ {site.phone}</a>
              <a href={site.telegram} target="_blank" rel="noopener">✈ Telegram: {site.telegramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
              <a href={'mailto:' + site.email}>✉ {site.email}</a>
              <a href={site.mapsYandex || undefined} target={site.mapsYandex ? '_blank' : undefined} rel="noopener">📍 {site.address}</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
