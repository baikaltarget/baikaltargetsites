// Приём заявки с формы и отправка в Telegram-бота.
// Переменные окружения (Vercel → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
//   TELEGRAM_CHAT_ID   — id чата/группы, куда слать заявки
// Пока переменные не заданы, роут отвечает 503, и форма открывает Telegram-ссылку (запасной путь).
export const dynamic = 'force-dynamic';

const esc = (s) => String(s || '—').slice(0, 300).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

export async function POST(req) {
  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return Response.json({ ok: false, error: 'not configured' }, { status: 503 });

  let body = {};
  try { body = await req.json(); } catch { return Response.json({ ok: false }, { status: 400 }); }
  const { name, phone, niche, plan, page } = body;
  if (!phone && !niche) return Response.json({ ok: false, error: 'empty' }, { status: 400 });

  const text = ['<b>Заявка с sites.baikal-target.ru</b>',
    'Имя: ' + esc(name), 'Телефон: ' + esc(phone), 'Ниша/город: ' + esc(niche), 'Тариф: ' + esc(plan),
    'Страница: ' + esc(page)].join('\n');

  const r = await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text, parse_mode: 'HTML' }),
  });
  if (!r.ok) return Response.json({ ok: false, error: 'telegram ' + r.status }, { status: 502 });
  return Response.json({ ok: true });
}
