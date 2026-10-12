'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import site from '@/content/site.json';

// Все обработчики — через делегирование на document: работают на любой странице,
// в том числе после перехода по меню без перезагрузки (Next.js Link).
const formatPhone = (v) => {
  let d = v.replace(/\D/g, '');
  if (d.startsWith('8')) d = '7' + d.slice(1);
  if (d && !d.startsWith('7')) d = '7' + d;
  d = d.slice(0, 11);
  let out = '';
  if (d.length > 0) out = '+7';
  if (d.length > 1) out += ' (' + d.slice(1, 4);
  if (d.length > 4) out += ') ' + d.slice(4, 7);
  if (d.length > 7) out += '-' + d.slice(7, 9);
  if (d.length > 9) out += '-' + d.slice(9, 11);
  return out;
};

async function submit(btn) {
  const form = btn.closest('.form') || document;
  const q = (id) => form.querySelector('#' + id);
  const g = (id) => ((q(id) || {}).value || '').trim();
  const fb = q('fallback');
  const say = (html) => { if (fb) fb.innerHTML = html; };

  const name = g('f-name'), phone = g('f-phone'), niche = g('f-niche'), plan = g('f-plan');
  if (!phone && !niche) { say('Заполните хотя бы телефон или чем занимаетесь — и мы свяжемся.'); return; }
  if (phone && phone.replace(/\D/g, '').length < 11) { say('Проверьте телефон: нужно 10 цифр после +7.'); return; }

  btn.disabled = true; say('Отправляем…');
  const ctrl = new AbortController(); const timer = setTimeout(() => ctrl.abort(), 12000);
  try {
    // Основной путь: серверный роут → Telegram-бот (токен в переменных окружения Vercel)
    const r = await fetch('/api/lead', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, niche, plan, page: location.pathname }), signal: ctrl.signal,
    });
    if (!r.ok) throw new Error('lead api ' + r.status);
    say('<b>Спасибо, заявка у нас!</b> Свяжемся в течение рабочего дня. Если срочно — <a href="' + site.phoneHref + '">' + site.phone + '</a>.');
    ['f-name', 'f-phone', 'f-niche'].forEach((id) => { const el = q(id); if (el) el.value = ''; });
    if (fb) fb.classList.add('ok');
    if (typeof window.ym === 'function' && site.metrikaId) window.ym(Number(site.metrikaId), 'reachGoal', 'lead');
  } catch (e) {
    // Запасной путь: Telegram-ссылка с текстом заявки
    const msg = 'Заявка на сайт%0AИмя: ' + encodeURIComponent(name || '—') + '%0AТелефон: ' + encodeURIComponent(phone || '—') + '%0AБизнес/город: ' + encodeURIComponent(niche || '—') + '%0AТариф: ' + encodeURIComponent(plan);
    window.open(site.telegram + '?text=' + msg, '_blank');
    say('Не удалось отправить автоматически — открываем Telegram с вашей заявкой. Не открылось? Напишите в <a href="' + site.whatsapp + '" target="_blank" rel="noopener">WhatsApp</a> или позвоните <a href="' + site.phoneHref + '">' + site.phone + '</a>.');
  } finally { clearTimeout(timer); btn.disabled = false; }
}

export default function Interactions() {
  const pathname = usePathname();

  // один раз: делегированные обработчики
  useEffect(() => {
    const onClick = (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      const send = t.closest('#send');
      if (send) { e.preventDefault(); submit(send); return; }
      if (t.closest('#burger-btn')) { const m = document.getElementById('mnav'); m && m.classList.toggle('open'); return; }
      if (t.closest('#mnav a')) { const m = document.getElementById('mnav'); m && m.classList.remove('open'); }
    };
    const onInput = (e) => { if (e.target && e.target.id === 'f-phone') e.target.value = formatPhone(e.target.value); };
    document.addEventListener('click', onClick);
    document.addEventListener('input', onInput);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('input', onInput); };
  }, []);

  // на каждой странице: анимация появления блоков
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return; }
    const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
