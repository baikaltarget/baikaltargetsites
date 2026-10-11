// Линейные иконки сфер бизнеса — вместо эмодзи (они по-разному выглядят на Mac/Windows/Android).
const P = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const NICHE_ICONS = {
  'stroitelnaya-kompaniya': <svg {...P}><path d="M3 21h18M5 21V10l7-6 7 6v11" /><path d="M9 21v-6h6v6M10 10h4" /></svg>,
  'proizvodstvo-zavod': <svg {...P}><path d="M3 21V9l5 3V9l5 3V9l5 3v9H3Z" /><path d="M7 21v-4h3v4M14 21v-4h3v4M16 9V4h3v6" /></svg>,
  'medicinskaya-klinika': <svg {...P}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M12 9v8M8 13h8M9 5V3h6v2" /></svg>,
  'stomatologiya': <svg {...P}><path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 5 2 8.5.3 2.2.8 5 2 5s1.5-3 2-5c.3-1 .6-1.5 1-1.5s.7.5 1 1.5c.5 2 1 5 2 5s1.7-2.8 2-5c.5-3.5 2-5.5 2-8.5C17 5 15.5 3 13 3c-1.5 0-2 .8-3 .8S8.5 3 7 3Z" /></svg>,
  'fitnes-klub': <svg {...P}><path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12M4 8h4v8H4zM16 8h4v8h-4z" /></svg>,
  'klining': <svg {...P}><path d="M14 3 9 8M8 7l-4 4 5 5 4-4M3 21l5-5M12 15l-1 6M15 12l6-1" /></svg>,
  'otoplenie-santehnika': <svg {...P}><path d="M6 20V8a3 3 0 0 1 6 0v12M9 20h-6M15 4h6v4h-6zM18 8v6a3 3 0 0 1-3 3h-3" /><path d="M6 12h6" /></svg>,
  'salon-krasoty': <svg {...P}><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" /><path d="M8.5 16 20 4M15.5 16 4 4" /></svg>,
  'avtoservis': <svg {...P}><path d="M5 17h14M3 13l2-5a2 2 0 0 1 2-1.3h10A2 2 0 0 1 19 8l2 5v4H3v-4Z" /><circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" /><path d="M7 12h10" /></svg>,
  'oteli-bazy-otdyha': <svg {...P}><path d="M3 20V7M3 17h18v3M3 13h18v4" /><path d="M7 13v-3h4v3M21 13v-2a2 2 0 0 0-2-2h-6v4" /></svg>,
  'nedvizhimost': <svg {...P}><path d="M3 21h18M5 21V4h8v17M13 9h6v12" /><path d="M8 7h2M8 11h2M8 15h2M16 12h1M16 16h1" /></svg>,
  'yuridicheskie-uslugi': <svg {...P}><path d="M12 3v18M5 21h14M12 6l6 2-3 7a3 3 0 0 1-6 0l3-7-6-2 6 2Z" /><path d="M6 8l-3 7a3 3 0 0 0 6 0L6 8Zm12 0 3 7a3 3 0 0 1-6 0l3-7Z" /></svg>,
  'remont-kvartir': <svg {...P}><path d="M3 21 14 10M14 10l3-3 3 3-3 3-3-3ZM4 20l1-4 3 3-4 1Z" /><path d="M8 3H5a2 2 0 0 0-2 2v3" /></svg>,
  'mebel-na-zakaz': <svg {...P}><path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M4 18h16M6 18v2M18 18v2M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" /></svg>,
  'okna-dveri': <svg {...P}><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M12 3v18M4 12h16" /></svg>,
  'krovlya': <svg {...P}><path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-5h6v5" /></svg>,
};

export default function NicheIcon({ slug, className = 'nicon' }) {
  return <span className={className}>{NICHE_ICONS[slug] || NICHE_ICONS['stroitelnaya-kompaniya']}</span>;
}
