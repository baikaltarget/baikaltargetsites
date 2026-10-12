'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Плашка о cookie: показывается, пока посетитель не нажмёт «Хорошо».
const KEY = 'bt_cookie_ok';
export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { try { if (!localStorage.getItem(KEY)) setShow(true); } catch { setShow(true); } }, []);
  if (!show) return null;
  const ok = () => { try { localStorage.setItem(KEY, '1'); } catch {} setShow(false); };
  return (
    <div className="cookie" role="region" aria-label="Уведомление о cookie">
      <p>Мы используем cookie и сервисы статистики (Яндекс Метрика), чтобы сайт работал и становился удобнее. Продолжая пользоваться сайтом, вы соглашаетесь с этим. <Link href="/politika/">Подробнее</Link></p>
      <button type="button" className="btn btn-primary" onClick={ok}>Хорошо</button>
    </div>
  );
}
