import site from '@/content/site.json';
export default function manifest() {
  return {
    name: site.brand + ' · Сайты', short_name: 'Байкал Таргет', description: 'Создание сайтов в Иркутске, которые приводят клиентов из поиска.',
    start_url: '/', display: 'browser', background_color: '#ffffff', theme_color: '#16243a', lang: 'ru',
    icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
  };
}
