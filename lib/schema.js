import site from '@/content/site.json';

// Единая карточка организации для всех JSON-LD на сайте.
// Координаты и ссылки на карты добавляются в content/site.json (geo, mapsYandex, maps2gis).
export function localBusiness() {
  const lb = {
    '@type': 'LocalBusiness',
    '@id': site.domain + '/#business',
    name: site.brand,
    url: site.domain,
    telephone: '+7-800-101-63-20',
    email: site.email,
    address: { '@type': 'PostalAddress', streetAddress: 'ул. Байкальская, 295/1', addressLocality: 'Иркутск', addressRegion: 'Иркутская область', addressCountry: 'RU' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '09:00', closes: '20:00' },
    priceRange: 'от 35 000 ₽',
    areaServed: [{ '@type': 'City', name: 'Иркутск' }, { '@type': 'Country', name: 'Россия' }],
    foundingDate: '2019',
    sameAs: [...(site.sameAs || []), site.mainSite, site.mapsYandex, site.maps2gis].filter(Boolean),
  };
  if (site.geo && site.geo.lat) lb.geo = { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng };
  return lb;
}

export function author() {
  const t = site.team && site.team[0];
  return t ? { '@type': 'Person', name: t.name, jobTitle: t.role, worksFor: { '@type': 'Organization', name: site.brand } } : { '@type': 'Organization', name: site.brand };
}

export function breadcrumbs(items) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: site.domain + it.path })),
  };
}

// Цена из строки «от 35 000 ₽» → "35000"
export function priceNumber(str, fallback = '35000') {
  const m = (str || '').match(/\d[\d ]*/);
  return m ? m[0].replace(/ /g, '') : fallback;
}
