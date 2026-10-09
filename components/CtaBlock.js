import site from '@/content/site.json';
import LeadForm from '@/components/LeadForm';
import Mesh from '@/components/Mesh';

// Блок заявки — один на весь сайт, как на главной: слева обещания и контакты, справа форма.
export default function CtaBlock({ title = 'Обсудим ваш сайт', text, bullets, formTitle = 'Оставьте заявку', nichePlaceholder, badges = true }) {
  const b = bullets || ['Разберём нишу и конкурентов в вашем городе', 'Предложим структуру под ваши запросы', 'Назовём точную цену и срок'];
  return (
    <section id="lead" className="cta">
      <Mesh className="mesh mesh-cta" />
      <div className="wrap cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text || 'Расскажите про нишу и город — предложим структуру и назовём цену. Консультация бесплатная и ни к чему не обязывает.'}</p>
          <ul className="cta-bullets">{b.map((t, i) => <li key={i}>✓ {t}</li>)}</ul>
          {badges && <div className="cta-badges"><span>от 35 000 ₽</span><span>от 5 дней</span><span>бесплатно</span></div>}
          <div className="cta-limit">Берём в работу 3–4 проекта в месяц</div>
          <div className="contacts">
            <a href={site.phoneHref}>☎ {site.phone}</a>
            <a href={site.telegram} target="_blank" rel="noopener">✈ {site.telegramHandle}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener">✆ WhatsApp</a>
          </div>
        </div>
        <LeadForm title={formTitle} nichePlaceholder={nichePlaceholder} />
      </div>
    </section>
  );
}
