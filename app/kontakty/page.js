import site from '@/content/site.json';

export const metadata = {
  title: 'Контакты и заявка | ' + site.brand,
  description: 'Обсудим ваш сайт: телефон, Telegram, WhatsApp. Иркутск, работаем по всей России.',
  alternates: { canonical: '/kontakty/' },
};

export default function Kontakty() {
  return (
    <>
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
              <a>📍 {site.address}</a>
            </div>
          </div>
          <div className="form">
            <h3>Оставьте заявку</h3>
            <div className="sub">Свяжемся в течение рабочего дня ({site.hours}).</div>
            <label htmlFor="f-name">Ваше имя</label>
            <input id="f-name" type="text" placeholder="Как к вам обращаться" />
            <label htmlFor="f-phone">Телефон</label>
            <input id="f-phone" type="tel" placeholder="+7 ___ ___-__-__" />
            <label htmlFor="f-niche">Ниша и город</label>
            <input id="f-niche" type="text" placeholder="Напр.: монтаж отопления, Иркутск" />
            <label htmlFor="f-plan">Интересует тариф</label>
            <select id="f-plan" defaultValue="Пока не выбрал — нужна консультация">
              <option>Пока не выбрал — нужна консультация</option>
              {site.tariffs.map((t, i) => <option key={i}>{t.name} — {t.price}</option>)}
              <option>Индивидуальный дизайн — от 100 000 ₽</option>
            </select>
            <button className="btn btn-orange" id="send">Отправить в Telegram →</button>
            <div className="fine">Нажимая кнопку, вы соглашаетесь с <a href={site.policy} target="_blank" rel="noopener">политикой конфиденциальности</a></div>
            <div className="fallback" id="fallback"></div>
          </div>
        </div>
      </section>
    </>
  );
}
