// Приём заявки с формы и отправка в Telegram-бота.
// Переменные окружения (Vercel → Settings → Environment Variables, затем Redeploy):
//   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
//   TELEGRAM_CHAT_ID   — id чата/группы (для групп с минусом, напр. -1001234567890)
// Пока переменные не заданы, роут отвечает 503, и форма открывает Telegram-ссылку (запасной путь).
// GET /api/lead — проверка: настроены ли переменные и отвечает ли Telegram (токен не раскрывается).
export const dynamic = 'force-dynamic';
export const maxDuration = 15;

const esc = (s) => String(s || '—').slice(0, 300).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

async function tg(method, body, token) {
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    const r = await fetch('https://api.telegram.org/bot' + token + '/' + method, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body || {}), signal: ctrl.signal,
    });
    const j = await r.json().catch(() => ({}));
    return { ok: r.ok && j.ok !== false, status: r.status, description: j.description };
  } catch (e) {
    return { ok: false, status: 0, description: e.name === 'AbortError' ? 'timeout' : String(e.message || e) };
  } finally { clearTimeout(t); }
}

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return Response.json({ configured: false, hint: 'Нет TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID. Добавить в Vercel → Environment Variables и сделать Redeploy.' });
  const me = await tg('getMe', {}, token);
  const chk = await tg('getChat', { chat_id: chat }, token);
  return Response.json({ configured: true, chatId: String(chat).replace(/\d(?=\d{3})/g, '*'),
    bot: me.ok ? 'ok' : 'error: ' + me.description, chat: chk.ok ? 'ok' : 'error: ' + chk.description });
}

export async function POST(req) {
  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return Response.json({ ok: false, error: 'not configured' }, { status: 503 });

  let body = {};
  try { body = await req.json(); } catch { return Response.json({ ok: false }, { status: 400 }); }
  const { name, phone, niche, plan, page } = body;
  if (!phone && !niche) return Response.json({ ok: false, error: 'empty' }, { status: 400 });

  const text = ['<b>Заявка с sites.baikal-target.ru</b>',
    'Имя: ' + esc(name), 'Телефон: ' + esc(phone), 'Бизнес/город: ' + esc(niche), 'Тариф: ' + esc(plan),
    'Страница: ' + esc(page)].join('\n');

  const r = await tg('sendMessage', { chat_id: chat, text, parse_mode: 'HTML' }, token);
  if (!r.ok) {
    console.error('telegram sendMessage failed', r.status, r.description);
    return Response.json({ ok: false, error: 'telegram: ' + r.description }, { status: 502 });
  }
  return Response.json({ ok: true });
}
