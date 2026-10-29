import { NextRequest, NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Best-effort per-instance protection. Use shared rate limiting at the host for multiple instances.
const COOLDOWN_SECONDS = 60;
const attempts = new Map<string, { count: number; expires: number; nextAllowedAt: number }>();

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    // Next.js can normalize nextUrl to localhost when accessed through a LAN IP.
    // Compare against the actual request host, including its port.
    const host = request.headers.get("host") || request.nextUrl.host;
    let validOrigin = false;
    try {
      const source = new URL(origin);
      validOrigin = source.host === host && source.protocol === request.nextUrl.protocol;
    } catch {
      // Malformed and opaque origins are rejected.
    }
    if (!validOrigin) {
      return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
    }
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Expected JSON" }, { status: 415 });
  }
  // Read a bounded stream, including when Content-Length is absent or incorrect.
  const reader = request.body?.getReader();
  if (!reader) return NextResponse.json({ error: "Missing body" }, { status: 400 });
  let raw = "";
  let bytes = 0;
  const decoder = new TextDecoder();
  let body: Record<string, unknown>;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 24000) {
        await reader.cancel();
        return NextResponse.json({ error: "Body too large" }, { status: 413 });
      }
      raw += decoder.decode(value, { stream: true });
    }
    const parsed = JSON.parse(raw + decoder.decode());
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed;
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }
  const text = (key: string) => typeof body[key] === "string" ? body[key].trim() : "";
  const firstName = text("firstName"), lastName = text("lastName"), email = text("email"), message = text("message");
  if (!firstName || firstName.length > 80 || !lastName || lastName.length > 80 ||
      /[\r\n\x00-\x1f]/.test(firstName + lastName + email) ||
      email.length > 254 || !emailPattern.test(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const attempt = attempts.get(ip) || { count: 0, expires: now + 600000, nextAllowedAt: 0 };
  if (attempt.count >= 5 || attempts.size >= 10000) {
    const retryAfter = Math.max(1, Math.ceil((attempt.expires - now) / 1000));
    return NextResponse.json({ error: "Too many attempts" }, { status: 429, headers: { "Retry-After": String(retryAfter) } });
  }
  if (attempt.nextAllowedAt > now) {
    const retryAfter = Math.ceil((attempt.nextAllowedAt - now) / 1000);
    return NextResponse.json({ error: "Cooldown active" }, { status: 429, headers: { "Retry-After": String(retryAfter) } });
  }
  attempt.count++;
  // Reserve before awaiting the provider so concurrent requests cannot bypass the cooldown.
  attempt.nextAllowedAt = now + COOLDOWN_SECONDS * 1000;
  attempts.set(ip, attempt);
  const cooldownHeaders = { "Retry-After": String(COOLDOWN_SECONDS) };
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ error: "Email not configured" }, { status: 503, headers: cooldownHeaders });
  }
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from, to: [to], reply_to: email,
        subject: `Contacto portfolio: ${firstName} ${lastName}`,
        text: `Nombre: ${firstName}\nApellido: ${lastName}\nEmail: ${email}\n\nMensaje:\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return NextResponse.json({ error: "Email delivery failed" }, { status: 502, headers: cooldownHeaders });
    const result = await response.json();
    if (!result.id) throw new Error("Missing delivery ID");
    return NextResponse.json({ ok: true }, { headers: cooldownHeaders });
  } catch {
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502, headers: cooldownHeaders });
  }
}
