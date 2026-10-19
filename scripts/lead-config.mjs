/**
 * Создаёт out/api/lead-config.php с ключами для формы заявок (public/api/lead.php).
 * Запускается в GitHub Action перед выкладкой на Бегет; значения — из секретов репозитория.
 * Файл существует только на сервере, в репозиторий не попадает.
 */
import fs from 'node:fs';
import path from 'node:path';

const map = { telegram_token: 'TELEGRAM_BOT_TOKEN', telegram_chat: 'TELEGRAM_CHAT_ID', telegram_api: 'TELEGRAM_API' };
const phpStr = (v) => "'" + String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const lines = Object.entries(map).map(([k, env]) => `  '${k}' => ${phpStr((process.env[env] || '').trim())},`);
const dir = path.join(process.cwd(), 'out', 'api');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'lead-config.php'), `<?php\n// Создан автоматически при выкладке. Не редактировать.\nreturn [\n${lines.join('\n')}\n];\n`);
const on = Object.values(map).filter((env) => (process.env[env] || '').trim());
console.log('[lead-config] заданы:', on.length ? on.join(', ') : 'ничего — форма будет открывать Telegram-ссылку');
