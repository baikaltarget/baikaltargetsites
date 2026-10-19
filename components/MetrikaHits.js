'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Next.js открывает страницы без перезагрузки — сообщаем Метрике о каждом переходе.
// Первый показ страницы считает сам init, поэтому его пропускаем.
export default function MetrikaHits({ id }) {
  const pathname = usePathname();
  const first = useRef(true);
  const prev = useRef('');
  useEffect(() => {
    const url = location.href;
    if (first.current) { first.current = false; prev.current = url; return; }
    if (typeof window.ym === 'function') window.ym(id, 'hit', url, { referer: prev.current, title: document.title });
    prev.current = url;
  }, [pathname, id]);
  return null;
}
