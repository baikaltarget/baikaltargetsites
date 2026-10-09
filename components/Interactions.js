'use client';
import { useEffect } from 'react';
import site from '@/content/site.json';

export default function Interactions() {
  useEffect(() => {
    const burger = document.getElementById('burger-btn');
    const mnav = document.getElementById('mnav');
    const t = () => mnav && mnav.classList.toggle('open');
    burger && burger.addEventListener('click', t);

    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    const send = document.getElementById('send');
    const fb = document.getElementById('fallback');
    const say = (html) => { if (fb) fb.innerHTML = html; };
    const g = id => ((document.getElementById(id) || {}).value || '').trim();

    const handler = async () => {
      const name = g('f-name'), phone = g('f-phone'), niche = g('f-niche'), plan = g('f-plan');
      if (!phone && !niche) { say('Заполните хотя бы телефон или нишу — и мы свяжемся.'); return; }
      send.disabled = true; say('Отправляем…');
      try {
        // Основной путь: серверный роут → Telegram-бот (токен хранится в переменных окружения Vercel)
        const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone, niche, plan, page: location.pathname }) });
        if (!r.ok) throw new Error('lead api ' + r.status);
        say('Спасибо! Заявка у нас, свяжемся в течение рабочего дня. Если срочно — <a href="' + site.phoneHref + '">' + site.phone + '</a>.');
        if (typeof window.ym === 'function' && site.metrikaId) window.ym(Number(site.metrikaId), 'reachGoal', 'lead');
      } catch (e) {
        // Запасной путь: открываем Telegram с текстом заявки
        const msg = 'Заявка на сайт%0AИмя: ' + encodeURIComponent(name || '—') + '%0AТелефон: ' + encodeURIComponent(phone || '—') + '%0AНиша/город: ' + encodeURIComponent(niche || '—') + '%0AТариф: ' + encodeURIComponent(plan);
        window.open(site.telegram + '?text=' + msg, '_blank');
        say('Открываем Telegram с вашей заявкой. Не открылось? Напишите в <a href="' + site.whatsapp + '" target="_blank" rel="noopener">WhatsApp</a> или позвоните <a href="' + site.phoneHref + '">' + site.phone + '</a>.');
      } finally { send.disabled = false; }
    };
    send && send.addEventListener('click', handler);
    return () => { burger && burger.removeEventListener('click', t); send && send.removeEventListener('click', handler); };
  }, []);
  return null;
}
