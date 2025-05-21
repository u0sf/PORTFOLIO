import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = '8147596641:AAHALW1COYj8eV6N8cd58CxyTF4t9qSOP9Q'
const TELEGRAM_CHAT_ID = '5440702961'

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message } = await req.json()
    if (!name || !phone || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 })
    }

    let text = `\u2728 New Contact Message\n\n👤 Name: ${name}\n📞 Phone: ${phone}`
    if (email) {
      text += `\n✉️ Email: ${email}`
    }
    text += `\n📝 Message: ${message}`

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const tgRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    })

    if (!tgRes.ok) {
      return NextResponse.json({ success: false, error: 'Failed to send to Telegram' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
} 