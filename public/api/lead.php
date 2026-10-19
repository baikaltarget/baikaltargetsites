<?php
/**
 * Приём заявок с формы сайта на хостинге Бегет (на Vercel это был app/api/lead/route.js).
 * Форма (components/Interactions.js) шлёт POST /api/lead → .htaccess направляет сюда.
 *
 * Ключи — в api/lead-config.php. Его создаёт GitHub Action из секретов репозитория при каждой выкладке
 * (scripts/lead-config.mjs). В репозитории этого файла нет и быть не должно.
 *   telegram_token, telegram_chat — бот и группа заявок (несколько чатов через запятую);
 *   telegram_api — адрес ретранслятора, если api.telegram.org недоступен с сервера (по умолчанию пусто).
 * Каждая заявка пишется в журнал leads.log рядом с public_html (из интернета не виден).
 *
 * Ответы (форма показывает «Спасибо», только если HTTP 200):
 *   200 {ok:true}                — ушла в Telegram;
 *   400 {ok:false,error:...}     — пусто или не похоже на телефон;
 *   502 {ok:false,fallback:true} — не ушла (записана в журнал), форма откроет Telegram-ссылку и покажет телефоны.
 * GET /api/lead — проверка настройки: заданы ли ключи и отвечает ли Telegram (токен не раскрывается).
 */

date_default_timezone_set('Asia/Irkutsk');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

function reply(array $data, int $code = 200): void {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function lead_log(string $line): void {
    @file_put_contents(dirname(__DIR__, 2) . '/leads.log', date('Y-m-d H:i:s') . ' ' . $line . "\n", FILE_APPEND | LOCK_EX);
    error_log('[LEAD] ' . $line);
}

// Без curl_close(): в PHP 8.5 он устарел, предупреждение сломало бы JSON-ответ.
function tg(string $api, string $token, string $method, array $payload): array {
    $ch = curl_init("$api/bot$token/$method");
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 8,
    ]);
    $body = curl_exec($ch);
    $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    $j = json_decode(is_string($body) ? $body : '', true);
    return ['ok' => $code === 200 && is_array($j) && ($j['ok'] ?? false), 'code' => $code,
        'error' => $err ?: (is_array($j) ? (string) ($j['description'] ?? '') : '')];
}

$cfgFile = __DIR__ . '/lead-config.php';
$cfg = is_file($cfgFile) ? (include $cfgFile) : [];
if (!is_array($cfg)) $cfg = [];
$get = fn(string $k): string => trim((string) ($cfg[$k] ?? ''));
$token = $get('telegram_token');
$chats = array_values(array_filter(array_map('trim', explode(',', $get('telegram_chat')))));
$api = rtrim($get('telegram_api') ?: 'https://api.telegram.org', '/');

$method = $_SERVER['REQUEST_METHOD'] ?? '';
if ($method === 'GET') {
    if ($token === '' || !$chats) reply(['configured' => false, 'hint' => 'Нет секретов TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID в GitHub → Settings → Secrets and variables → Actions']);
    $me = tg($api, $token, 'getMe', []);
    $chat = tg($api, $token, 'getChat', ['chat_id' => $chats[0]]);
    reply(['configured' => true, 'php' => PHP_VERSION,
        'bot' => $me['ok'] ? 'ok' : 'error: ' . $me['code'] . ' ' . $me['error'],
        'chat' => $chat['ok'] ? 'ok' : 'error: ' . $chat['code'] . ' ' . $chat['error']]);
}
if ($method !== 'POST') reply(['ok' => false, 'error' => 'method'], 405);

$body = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($body)) reply(['ok' => false, 'error' => 'bad json'], 400);
$f = fn(string $k, int $max = 300): string => mb_substr(trim(is_scalar($body[$k] ?? null) ? (string) $body[$k] : ''), 0, $max);

// honeypot: скрытое поле website заполняют только боты — отвечаем «успехом», ничего не отправляя
if ($f('website') !== '') { lead_log('отклонено honeypot, ip ' . ($_SERVER['REMOTE_ADDR'] ?? '—')); reply(['ok' => true]); }

$name = $f('name', 200);
$phone = $f('phone', 50);
$niche = $f('niche', 300);
$plan = $f('plan', 200);
$page = $f('page', 300);

if ($phone === '' && $niche === '') reply(['ok' => false, 'error' => 'empty'], 400);
if ($phone !== '' && strlen(preg_replace('/\D/', '', $phone)) < 10) reply(['ok' => false, 'error' => 'phone'], 400);

$e = fn(string $s): string => htmlspecialchars($s !== '' ? $s : '—', ENT_QUOTES, 'UTF-8');
$text = implode("\n", [
    '<b>Заявка с sites.baikal-target.ru</b>',
    'Имя: ' . $e($name),
    'Телефон: ' . $e($phone),
    'Бизнес/город: ' . $e($niche),
    'Тариф: ' . $e($plan),
    'Страница: ' . $e($page),
    'Время: ' . date('d.m.Y, H:i') . ' (Иркутск)',
]);
$oneLine = "$name | $phone | $niche | $plan | $page";

$sent = false;
if ($token !== '' && $chats) {
    foreach ($chats as $chat) {
        $r = tg($api, $token, 'sendMessage', ['chat_id' => $chat, 'text' => $text, 'parse_mode' => 'HTML']);
        if ($r['ok']) $sent = true;
        else lead_log("ошибка Telegram ($chat): {$r['code']} {$r['error']}");
    }
} else {
    lead_log('не заданы ключи Telegram');
}

lead_log(($sent ? 'доставлено: telegram' : 'НЕ ДОСТАВЛЕНО') . ' | ' . $oneLine);
reply($sent ? ['ok' => true] : ['ok' => false, 'fallback' => true], $sent ? 200 : 502);
