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

    // маска телефона: +7 (999) 123-45-67
    const ph = document.getElementById('f-phone');
    const mask = () => {
      let d = ph.value.replace(/\D/g, '');
      if (d.startsWith('8')) d = '7' + d.slice(1);
      if (d && !d.startsWith('7')) d = '7' + d;
      d = d.slice(0, 11);
      let out = '';
      if (d.length > 0) out = '+7';
      if (d.length > 1) out += ' (' + d.slice(1, 4);
      if (d.length >= 4) out += ')';
      if (d.length > 4) out += ' ' + d.slice(4, 7);
      if (d.length > 7) out += '-' + d.slice(7, 9);
      if (d.length > 9) out += '-' + d.slice(9, 11);
      ph.value = out;
    };
    ph && ph.addEventListener('input', mask);

    const handler = async () => {
      const name = g('f-name'), phone = g('f-phone'), niche = g('f-niche'), plan = g('f-plan');
      if (!phone && !niche) { say('Заполните хотя бы телефон или чем занимаетесь — и мы свяжемся.'); return; }
      if (phone && phone.replace(/\D/g, '').length < 11) { say('Проверьте телефон: нужно 10 цифр после +7.'); return; }
      send.disabled = true; say('Отправляем…');
      const ctrl = new AbortController(); const timer = setTimeout(() => ctrl.abort(), 12000);
      try {
        // Основной путь: серверный роут → Telegram-бот (токен хранится в переменных окружения Vercel)
        const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone, niche, plan, page: location.pathname }), signal: ctrl.signal });
        if (!r.ok) throw new Error('lead api ' + r.status);
        say('Спасибо! Заявка у нас, свяжемся в течение рабочего дня. Если срочно — <a href="' + site.phoneHref + '">' + site.phone + '</a>.');
        if (typeof window.ym === 'function' && site.metrikaId) window.ym(Number(site.metrikaId), 'reachGoal', 'lead');
      } catch (e) {
        // Запасной путь: открываем Telegram с текстом заявки
        const msg = 'Заявка на сайт%0AИмя: ' + encodeURIComponent(name || '—') + '%0AТелефон: ' + encodeURIComponent(phone || '—') + '%0AБизнес/город: ' + encodeURIComponent(niche || '—') + '%0AТариф: ' + encodeURIComponent(plan);
        window.open(site.telegram + '?text=' + msg, '_blank');
        say('Не удалось отправить автоматически — открываем Telegram с вашей заявкой. Не открылось? Напишите в <a href="' + site.whatsapp + '" target="_blank" rel="noopener">WhatsApp</a> или позвоните <a href="' + site.phoneHref + '">' + site.phone + '</a>.');
      } finally { clearTimeout(timer); send.disabled = false; }
    };
    send && send.addEventListener('click', handler);
    return () => { burger && burger.removeEventListener('click', t); send && send.removeEventListener('click', handler); };
  }, []);
  return null;
}
