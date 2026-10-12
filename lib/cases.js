import site from '@/content/site.json';

// Видимые кейсы: без hidden. Порядок в site.json = приоритет показа.
export const CASES = site.cases.filter((c) => !c.hidden);
// Витрина (главная, услуги): только помеченные top и только со скрином, максимум 6.
// Когда у кейса появляется скрин, он сам встаёт на своё место по приоритету.
export const TOP_CASES = CASES.filter((c) => c.top && c.img).slice(0, 6);
