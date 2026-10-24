/**
 * После `next build` собирает out/.htaccess для хостинга Бегет (Apache).
 * - /api/lead (форма заявки) → api/lead.php; служебные файлы закрыты.
 * - Своя страница 404, кэш картинок/шрифтов/скриптов на год, заголовки безопасности.
 * - Технические адреса хостинга (не sites.baikal-target.ru) закрыты от поисковиков.
 * - Переадресация на https включается переменной FORCE_HTTPS=1 (GitHub → Settings → Secrets and variables →
 *   Actions → Variables) — только после выпуска SSL в панели Бегета.
 * - REDIRECT_TO_MAIN=1 (та же вкладка Variables) — 301 всех страниц на baikal-target.ru по content/redirects-to-main.json
 *   (раздел «Разработка сайтов» основного сайта). Включать В ДЕНЬ переключения baikal-target.ru на новый сайт, не раньше:
 *   до этого адресов /services/razrabotka-saitov… на боевом домене нет. После включения пересобрать (push или запуск workflow).
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'out');
const FORCE_HTTPS = process.env.FORCE_HTTPS === '1';
const REDIRECT_TO_MAIN = process.env.REDIRECT_TO_MAIN === '1';
const MAIN = 'https://baikal-target.ru';
const HOST = 'sites.baikal-target.ru';
if (!fs.existsSync(OUT)) { console.log('[htaccess] папки out нет — пропускаю'); process.exit(0); }
const hostRe = HOST.replace(/\./g, '\\.');

const httpsBlock = FORCE_HTTPS
  ? `# Всё на https
RewriteCond %{HTTPS} !=on
RewriteCond %{HTTP:X-Forwarded-Proto} !=https
RewriteCond %{SERVER_PORT} !=443
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
`
  : `# https-редирект выключен (включается переменной FORCE_HTTPS=1 после выпуска SSL)
`;

const esc = (p) => p.replace(/^\//, '').replace(/[.+?^${}()|[\]\\]/g, '\\$&');
const mainBlock = REDIRECT_TO_MAIN
  ? `# Переезд на основной сайт: 301 каждого адреса (REDIRECT_TO_MAIN=1), картинки и служебное не трогаем
` + Object.entries(JSON.parse(fs.readFileSync(path.join(process.cwd(), 'content', 'redirects-to-main.json'), 'utf8')))
      .map(([from, to]) => (from === '/' ? `RewriteRule ^$ ${MAIN}${to} [R=301,L]` : `RewriteRule ^${esc(from)}/?$ ${MAIN}${to} [R=301,L]`))
      .join('\n') + `
# Всё остальное, кроме файлов (картинки, api), — на раздел «Разработка сайтов»
RewriteCond %{REQUEST_URI} !^/(api|img|_next|fonts|favicon|robots\.txt|sitemap)
RewriteCond %{REQUEST_URI} !\.(webp|jpg|jpeg|png|svg|ico|woff2|woff|js|css|txt|xml)$
RewriteRule ^ ${MAIN}/services/razrabotka-saitov [R=301,L]
`
  : `# Переезд на основной сайт выключен (REDIRECT_TO_MAIN=1 — в день переключения baikal-target.ru)
`;

const body = `# Собрано автоматически scripts/htaccess.mjs — вручную не править, изменения пропадут при следующей сборке.
AddDefaultCharset UTF-8
DirectoryIndex index.html
Options -Indexes
ErrorDocument 404 /404.html

<IfModule mod_mime.c>
  AddType text/plain .txt
  AddType application/xml .xml
  AddType application/manifest+json .webmanifest
  AddType image/webp .webp
  AddType image/svg+xml .svg
  AddType image/x-icon .ico
</IfModule>

<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  <FilesMatch "\\.(webp|jpg|jpeg|png|svg|ico|woff2|woff)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <If "%{REQUEST_URI} =~ m#^/_next/static/#">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </If>
  # Технические адреса хостинга не индексируем — только ${HOST}
  <If "%{HTTP_HOST} !~ /^${hostRe}(:\\d+)?$/i">
    Header always set X-Robots-Tag "noindex, nofollow"
  </If>
</IfModule>

RewriteEngine On
RewriteBase /

${httpsBlock}
${mainBlock}
# Служебные файлы не отдаём
RewriteRule ^api/lead-config\\.php$ - [F,L]
RewriteRule ^\\.ftp-deploy-sync-state\\.json$ - [F,L]

# Форма заявки
RewriteRule ^api/lead/?$ api/lead.php [L]

# Адрес без слэша на конце → со слэшем (как было на Vercel), если это папка со страницей
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}/index.html -f
RewriteRule ^(.*[^/])$ /$1/ [R=301,L]
`;

fs.writeFileSync(path.join(OUT, '.htaccess'), body);
console.log(`[htaccess] готово: домен ${HOST}, https ${FORCE_HTTPS ? 'включён' : 'выключен'}, переезд на основной сайт ${REDIRECT_TO_MAIN ? 'ВКЛЮЧЁН' : 'выключен'}`);
