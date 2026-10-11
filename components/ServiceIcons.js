// Пиктограммы типов сайтов: объясняют разницу между форматами, а не показывают чужие сайты.
// Линейные, 24×24, stroke 1.8 — в одном стиле с иконками первого экрана.
const P = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const SVC_ICONS = {
  // сайт под ключ: страница + ключ
  key: <svg {...P}><rect x="3" y="4" width="14" height="16" rx="2" /><path d="M6 8h8M6 12h5" /><circle cx="17.5" cy="15.5" r="2.5" /><path d="m19.3 17.3 2.2 2.2M20.5 18.5l1-1" /></svg>,
  // корпоративный: здание с разделами
  building: <svg {...P}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h3M13 7h3M8 11h3M13 11h3M8 15h3M13 15h3M10 21v-3h4v3" /></svg>,
  // каталог/магазин: сетка карточек с ценником
  grid: <svg {...P}><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /><path d="M13 15h8M13 19h5" /></svg>,
  // многостраничный: стопка страниц
  layers: <svg {...P}><rect x="7" y="2.5" width="12" height="14" rx="2" /><path d="M5 6.5v11a2 2 0 0 0 2 2h9" /><path d="M3 10.5v9a2 2 0 0 0 2 2h9M10 6.5h6M10 10h4" /></svg>,
  // доработка/редизайн: страница + гаечный ключ
  trend: <svg {...P}><rect x="3" y="4" width="13" height="16" rx="2" /><path d="M6 8h7M6 12h4" /><path d="M20.5 12.5a3 3 0 0 1-3.9 3.9L14 19l-1.5-1.5 2.6-2.6a3 3 0 0 1 3.9-3.9l-1.7 1.7 1.5 1.5 1.7-1.7Z" /></svg>,
  // поддержка: страница + щит
  support: <svg {...P}><rect x="3" y="4" width="12" height="16" rx="2" /><path d="M6 8h6M6 12h4" /><path d="M18 11.5c2 0 3.5.8 3.5.8v3.2c0 2.6-2.1 4-3.5 4.5-1.4-.5-3.5-1.9-3.5-4.5v-3.2s1.5-.8 3.5-.8Z" /></svg>,
};
