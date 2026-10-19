# Переезд sites.baikal-target.ru с Vercel на Бегет — по шагам

Зачем: часть российских провайдеров обрывает соединения с Vercel, и данные заявок по 152-ФЗ должны сначала попадать на сервер в России.
Как теперь работает: сайт собирается в готовые HTML-файлы (папка `out/`), GitHub Action «Сборка и выкладка на Бегет» (`.github/workflows/publish.yml`) после каждого коммита в `main` загружает их по FTP. Заявки принимает `public/api/lead.php` и шлёт в тот же Telegram-бот. Правки — как раньше, коммитом в `main`.

Пароли и токены в чат не присылать — только в секреты GitHub.

## Бегет (cp.beget.com)

1. **Создать сайт.** «Сайты» → «Создать сайт» → имя `sites.baikal-target.ru`.
2. **Прикрепить поддомен.** Если baikal-target.ru есть в этом аккаунте: «Домены и поддомены» → у baikal-target.ru «Добавить поддомен» → `sites` → на сайт из шага 1. Если нет: «Домены» → «Добавить существующий домен» → `sites.baikal-target.ru`. DNS пока не трогать.
3. **Убрать заглушку.** «Файловый менеджер» → папка сайта → `public_html` → удалить `index.php`. `cgi-bin` не трогать.
4. **PHP 8.4.** «Сайты» → шестерёнка → «Версия PHP» → 8.4. На 5.6 форма отвечает пустой ошибкой.
5. **FTP.** «FTP» → «Добавить»: логин например `sites` (префикс Бегет подставит сам), папка — `public_html` этого сайта, пароль сгенерировать и сохранить. Сервер FTP — вида `логин_аккаунта.beget.tech`.

## GitHub (Settings → Secrets and variables → Actions → Secrets)

6. **Секреты:**

| Имя | Что вписать |
|---|---|
| `FTP_SERVER` | адрес FTP из шага 5 |
| `FTP_USERNAME` | логин FTP целиком, с префиксом |
| `FTP_PASSWORD` | пароль из шага 5 |
| `TELEGRAM_BOT_TOKEN` | @BotFather → `/mybots` → бот → API Token |
| `TELEGRAM_CHAT_ID` | id группы заявок с минусом: web.telegram.org → группа → число в адресе после `#` |

## Vercel

7. **Заморозить сборки.** vercel.com → проект → Settings → Git → Ignored Build Step → «Don't build anything» (или Custom: `exit 0`) → Save. Vercel продолжит показывать текущую версию с рабочей формой, пока не переключён DNS.

## Запуск

8. Слить ветку `beget` в `main` (делает Claude) — запустится первая выкладка.
9. Вкладка **Actions** → «Сборка и выкладка на Бегет» → дождаться зелёной галочки (5–15 минут). Красный крестик — открыть задание, скрин красной строки.
10. **Проверка до переключения DNS.** IP сервера — в панели Бегета или в «Терминале»: `hostname -I`. Затем в «Терминале» Бегета:
    ```
    curl -sI -H "Host: sites.baikal-target.ru" http://<IP>/ | head -1
    ```
    → `200 OK`
    ```
    curl -s -H "Host: sites.baikal-target.ru" http://<IP>/api/lead ; echo
    ```
    → `"configured":true,...,"bot":"ok","chat":"ok"`. Если `bot: error` с таймаутом — с сервера не открывается api.telegram.org, нужен секрет `TELEGRAM_API` (ретранслятор, как у btctour).
    ```
    curl -s -X POST -H "Host: sites.baikal-target.ru" -H "Content-Type: application/json" -d '{"name":"ТЕСТ переезда","phone":"+7 900 000-00-00"}' http://<IP>/api/lead ; echo
    ```
    → `{"ok":true}` и тестовая заявка в Telegram-группе. Журнал: `tail -5 ~/sites.baikal-target.ru/leads.log` (папка сайта может называться иначе).

## DNS

11. **Переключить `sites`.** В «Терминале» Бегета: `whois baikal-target.ru | grep -i nserver`.
    - NS `ns1.beget.com` → «Домены» → baikal-target.ru → «Редактировать DNS» → у `sites` убрать CNAME на Vercel, оставить/добавить **A** с IP Бегета.
    - NS у регистратора → там у записи `sites` заменить CNAME `cname.vercel-dns.com` на **A** с IP Бегета.
    Остальные записи (почта, основной сайт на Tilda) не трогать.
12. **Проверить:** `dig +short sites.baikal-target.ru @8.8.8.8` → IP Бегета (15 минут — несколько часов).
13. **SSL сразу после переключения.** «Домены» → ⋮ у поддомена → «Управление SSL» → Let's Encrypt → выпустить (15–60 минут). Пока его нет, браузер может не открыть сайт — проверять из терминала.
14. **Включить https.** GitHub → Settings → Secrets and variables → Actions → вкладка **Variables** → `FORCE_HTTPS` = `1`. Затем Actions → «Сборка и выкладка на Бегет» → Run workflow.

## После

15. Открыть сайт с телефона через мобильный интернет, отправить заявку с формы, в Вебмастере — «Переобход» главной.
16. Через неделю, если всё работает, удалить проект в Vercel.
