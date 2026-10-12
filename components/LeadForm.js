import site from '@/content/site.json';

// Одна форма на весь сайт. Логика отправки — в components/Interactions.js (id="send").
export default function LeadForm({ title = 'Оставьте заявку', nichePlaceholder = 'Напр.: монтаж отопления, Иркутск', className = 'form' }) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="sub">Свяжемся в течение рабочего дня ({site.hours}). Консультация бесплатная.</div>
      <label htmlFor="f-name">Ваше имя</label>
      <input id="f-name" type="text" placeholder="Как к вам обращаться" autoComplete="name" />
      <label htmlFor="f-phone">Телефон</label>
      <input id="f-phone" type="tel" placeholder="+7 (___) ___-__-__" inputMode="tel" autoComplete="tel" />
      <label htmlFor="f-niche">Чем занимаетесь и город</label>
      <input id="f-niche" type="text" placeholder={nichePlaceholder} />
      <label htmlFor="f-plan">Интересует тариф</label>
      <select id="f-plan" defaultValue="Пока не выбрал — нужна консультация">
        <option>Пока не выбрал — нужна консультация</option>
        {site.tariffs.map((t, i) => <option key={i}>{t.name} — {t.price}</option>)}
        <option>Индивидуальный дизайн — от 100 000 ₽</option>
      </select>
      <label className="agree" htmlFor="f-agree"><input id="f-agree" type="checkbox" /><span>Даю <a href={site.consent} target="_blank" rel="noopener">согласие на обработку персональных данных</a> и принимаю <a href={site.policy} target="_blank" rel="noopener">политику</a></span></label>
      <button className="btn btn-orange" id="send" type="button">Отправить заявку →</button>
      <div className="fallback" id="fallback" role="status"></div>
    </div>
  );
}
