import site from '@/content/site.json';

// Единый список контактов для всех блоков. MAX показывается, когда в site.json задан site.max.
export default function ContactLinks({ variant = 'plain', showAddress = false }) {
  if (variant === 'cards') {
    return (
      <div className="contact-list">
        <a href={site.phoneHref}><i>☎</i><span><b>{site.phone}</b><small>звонок бесплатный</small></span></a>
        <a href={site.phone2Href}><i>☏</i><span><b>{site.phone2}</b><small>{site.phone2Label}</small></span></a>
        <a href={site.telegram} target="_blank" rel="noopener"><i>✈</i><span><b>Telegram {site.telegramHandle}</b><small>отвечаем быстрее всего</small></span></a>
        {site.max && <a href={site.max} target="_blank" rel="noopener"><i>✉</i><span><b>MAX</b><small>напишите в мессенджер</small></span></a>}
        {showAddress && <a href={site.mapsYandex || undefined} target={site.mapsYandex ? '_blank' : undefined} rel="noopener"><i>📍</i><span><b>{site.address}</b><small>{site.hours} · можно приехать, лучше по записи</small></span></a>}
      </div>
    );
  }
  return (
    <div className="contacts">
      <a href={site.phoneHref}>☎ {site.phone}</a>
      <a href={site.phone2Href}>☏ {site.phone2}</a>
      <a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a>
      {site.max && <a href={site.max} target="_blank" rel="noopener">✉ MAX</a>}
    </div>
  );
}
