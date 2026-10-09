// Карточка отзыва: шапка с аватаром-инициалами, именем и источником, ниже текст.
const initials = (name) => (name || '').replace(/[\[\]]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase() || '•';

const SRC_ICON = {
  'Яндекс Карты': 'Я', '2ГИС': '2', 'Telegram': '✈', 'WhatsApp': '✆', 'Google': 'G', 'VK': 'VK',
};

export default function ReviewCard({ r }) {
  const src = r.url
    ? <a href={r.url} target="_blank" rel="noopener nofollow" className="rv-src"><i>{SRC_ICON[r.source] || '↗'}</i>{r.source}</a>
    : <span className="rv-src"><i>{SRC_ICON[r.source] || '•'}</i>{r.source}</span>;
  return (
    <article className={'rv' + (r.placeholder ? ' rv-ph' : '')}>
      <div className="rv-head">
        {r.photo ? <img src={r.photo} alt="" className="rv-ava" width="48" height="48" loading="lazy" /> : <span className="rv-ava" aria-hidden="true">{initials(r.name)}</span>}
        <div className="rv-who"><b>{r.name}</b><span>{r.company}</span></div>
        {src}
      </div>
      {r.rating && <div className="rv-stars" aria-label={'Оценка ' + r.rating + ' из 5'}>{'★★★★★'.slice(0, r.rating)}<span>{'★★★★★'.slice(r.rating)}</span></div>}
      <p className="rv-text">{r.text}</p>
    </article>
  );
}
