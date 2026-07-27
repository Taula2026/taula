import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const interest = typeof payload.interest === "string" ? payload.interest.trim() : "";

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ error: "config" }, { status: 500 });
  }

  const bodyLines = [
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    company ? `<p><strong>Firma:</strong> ${escapeHtml(company)}</p>` : "",
    `<p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>`,
    phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : "",
    interest ? `<p><strong>Interesse:</strong> ${escapeHtml(interest)}</p>` : "",
    `<p><strong>Nachricht:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "taula-website/1.0",
      },
      cache: "no-store",
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Kontaktanfrage von ${name}`,
        html: bodyLines,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text().catch(() => "");
      console.error("Resend API error", resendResponse.status, errorBody);
      return NextResponse.json({ error: "upstream" }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "network" }, { status: 500 });
  }
}
