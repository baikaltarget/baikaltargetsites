# Байкал Таргет · Разработка сайтов — сайт на поддомене

Многостраничный SEO-сайт на **Next.js (App Router) + Tailwind**, статическая генерация (SSG).
Ставится на поддомен **sites.baikal-target.ru** через Vercel.

## Как залить (GitHub → Vercel)

1. **GitHub:** создай новый репозиторий → перетащи в него всё содержимое этой папки (без `node_modules`, `.next`, `out`).
2. **Vercel:** https://vercel.com → New Project → Import из GitHub → Deploy. Vercel сам определит Next.js.
3. Проверь сайт на выданном адресе `*.vercel.app`.
4. **Поддомен:** Vercel → Settings → Domains → добавь `sites.baikal-target.ru` → Vercel даст CNAME (`cname.vercel-dns.com`) → пропиши его в DNS у регистратора домена. HTTPS подтянется сам.

## Где что править (не трогая код)

Вся суть — в разделении **дизайн / контент**:

| Что менять | Где |
|---|---|
| Тексты, цены, телефон, тарифы, услуги | `content/site.json` |
| Статьи блога | `content/blog/*.md` (Markdown + frontmatter) |
| Палитра и шрифты | `tailwind.config.js` и токены `:root` в `app/globals.css` |
| Блоки/раскладка | `components/*.js`, `app/**/page.js` |
| Фото | `public/img/` |

**Цены и телефон** правятся в `content/site.json` прямо на GitHub — роут и sitemap подхватят сами.

## Как добавить статью

1. Создай файл `content/blog/moya-statya.md`.
2. Впиши шапку:
   ```
   ---
   title: "Заголовок"
   description: "Короткое описание для выдачи"
   category: "SEO"
   date: "2026-04-01"
   related:
     - text: "Ссылка на статью основного блога"
       url: "https://baikal-target.ru/blogs/..."
   ---
   ```
3. Ниже — текст в Markdown. Роут `/blog/moya-statya/`, карточка в блоге и запись в sitemap появятся сами после сборки.

## Перелинковка с основным сайтом

- В шапке и футере — ссылки на `baikal-target.ru` (передаёт вес и связывает хосты).
- В статьях блога — ссылки на маркетинговый блог агентства (поле `related` + ссылки в тексте).
- Темы блога поддомена (сайты/SEO) намеренно не пересекаются с маркетинговым блогом, чтобы не было каннибализации.

## SEO из коробки

- У каждой страницы свой `title`, `description`, **self-canonical** (`alternates.canonical`).
- JSON-LD: Service + LocalBusiness (главная), BlogPosting (статьи).
- `app/sitemap.js` и `app/robots.js` — автогенерация `sitemap.xml` и `robots.txt` (только этот поддомен).

## После публикации

1. Яндекс.Вебмастер: добавь `sites.baikal-target.ru` как **отдельный сайт**, укажи sitemap и **выстави регион** (Иркутск/Россия — он не наследуется от основного домена).
2. Google Search Console: добавь как отдельное свойство.
3. Метрику вставь в `app/layout.js` перед `</body>` (или через компонент).

## Команды

```
npm install       # поставить зависимости
npm run dev       # локальный просмотр на localhost:3000
npm run build     # сборка (папка out/ — статика)
```
