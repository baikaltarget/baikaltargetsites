import site from '@/content/site.json';
import CtaBlock from '@/components/CtaBlock';
import PageHero from '@/components/PageHero';
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
      <PageHero
        crumbs={[{ name: 'Главная', href: '/' }, { name: 'Контакты' }]}
        eyebrow="Контакты · Иркутск" title="Обсудим" titleHl="ваш сайт"
        lead="Расскажите про нишу и город — предложим структуру страниц и тариф под задачу. Консультация бесплатная. Офис на Байкальской, 295/1 — можно приехать.">
        <div className="contacts" style={{ marginTop: 22 }}>
          <a href={site.phoneHref}>☎ {site.phone}</a>
          <a href={site.telegram} target="_blank" rel="noopener">✈ Telegram: {site.telegramHandle}</a>
          <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
          <a href={'mailto:' + site.email}>✉ {site.email}</a>
          <a href={site.mapsYandex || undefined} target={site.mapsYandex ? '_blank' : undefined} rel="noopener">📍 {site.address} · {site.hours}</a>
        </div>
      </PageHero>
      <CtaBlock title="Оставьте заявку" text="Ответим в течение рабочего дня. Если удобнее — звоните или пишите в мессенджер, контакты выше." formTitle="Заявка на сайт" />
    </>
  );
}
