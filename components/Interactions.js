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
    const handler = () => {
      const g = id => (document.getElementById(id) || {}).value || '';
      const name = g('f-name').trim(), phone = g('f-phone').trim(), niche = g('f-niche').trim(), plan = g('f-plan');
      const fb = document.getElementById('fallback');
      if (!phone && !niche) { if (fb) fb.textContent = 'Заполните хотя бы телефон или нишу — и мы свяжемся.'; return; }
      const msg = 'Заявка на сайт%0AИмя: ' + encodeURIComponent(name || '—') + '%0AТелефон: ' + encodeURIComponent(phone || '—') + '%0AНиша/город: ' + encodeURIComponent(niche || '—') + '%0AТариф: ' + encodeURIComponent(plan);
      window.open(site.telegram + '?text=' + msg, '_blank');
      if (fb) fb.innerHTML = 'Открываем Telegram с вашей заявкой. Не открылось? Напишите в <a href="' + site.whatsapp + '" target="_blank" rel="noopener">WhatsApp</a> или позвоните <a href="' + site.phoneHref + '">' + site.phone + '</a>.';
    };
    send && send.addEventListener('click', handler);
    return () => { burger && burger.removeEventListener('click', t); send && send.removeEventListener('click', handler); };
  }, []);
  return null;
}
