"use client";

import { useLanguageContext } from "@/context/LanguageContext/LanguageContext";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import styles from "./ContactScreen.module.css";

const COOLDOWN_KEY = "contact-next-allowed-at";

const translations = {
  es: {
    title: "Hablemos", intro: "¿Tenés un proyecto en mente o querés hacerme una consulta? Dejá tu mensaje y me pondré en contacto con vos.",
    firstName: "Nombre", lastName: "Apellido", email: "Email", message: "Mensaje",
    placeholder: "Contame un poco sobre tu idea o consulta…", send: "Enviar mensaje", sending: "Enviando…",
    wait: "Podés volver a enviar en", seconds: "s",
    success: "¡Gracias por escribirme! Tu mensaje se envió correctamente.",
    error: "No pudimos enviar tu mensaje. Intentá nuevamente en unos minutos.",
    unavailable: "El formulario no está disponible en este momento. Podés escribirme directamente por email.",
    note: "Usaré tu email únicamente para responder tu consulta.", alternative: "También podés escribirme directamente", rate: "Hay demasiados intentos. Esperá unos minutos antes de volver a enviar.",
  },
  en: {
    title: "Let's talk", intro: "Have a project in mind or a question? Leave a message and I'll get back to you.",
    firstName: "First name", lastName: "Last name", email: "Email", message: "Message",
    placeholder: "Tell me a little about your idea or question…", send: "Send message", sending: "Sending…",
    wait: "You can send again in", seconds: "s",
    success: "Thanks for reaching out! Your message was sent successfully.",
    error: "Your message could not be sent. Please try again in a few minutes.",
    unavailable: "The form is currently unavailable. You can email me directly.",
    note: "I'll only use your email to reply to your inquiry.", alternative: "You can also email me directly", rate: "Too many attempts. Please wait a few minutes before trying again.",
  },
};

export default function ContactScreen() {
  const { language } = useLanguageContext();
  const t = translations[language];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<"error" | "unavailable" | "rate">("error");
  const sending = useRef(false);
  const nextAllowedAt = useRef(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    function updateCountdown() {
      try {
        const saved = Number(localStorage.getItem(COOLDOWN_KEY));
        if (Number.isFinite(saved)) nextAllowedAt.current = Math.max(nextAllowedAt.current, saved);
      } catch { /* The server still enforces the cooldown if storage is unavailable. */ }
      setRemaining(Math.max(0, Math.ceil((nextAllowedAt.current - Date.now()) / 1000)));
    }
    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    window.addEventListener("storage", updateCountdown);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("storage", updateCountdown);
    };
  }, []);

  function startCooldown(seconds: number) {
    nextAllowedAt.current = Date.now() + seconds * 1000;
    setRemaining(seconds);
    try { localStorage.setItem(COOLDOWN_KEY, String(nextAllowedAt.current)); } catch { /* Optional persistence. */ }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || nextAllowedAt.current > Date.now()) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sending.current = true;
    startCooldown(60);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
        signal: AbortSignal.timeout(20000),
      });
      const retryAfter = Number(response.headers.get("Retry-After"));
      if (Number.isFinite(retryAfter) && retryAfter > 0) startCooldown(Math.ceil(retryAfter));
      if (!response.ok) {
        setError(response.status === 503 ? "unavailable" : response.status === 429 ? "rate" : "error");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setError("error");
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return (
    <main className="screen">
      <header className={styles.heading}>
        <p className={styles.eyebrow}>{language === "es" ? "Contacto" : "Contact"}</p>
        <h1>{t.title}<span>.</span></h1>
        <p>{t.intro}</p>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.names}>
          <label>{t.firstName}<input name="firstName" autoComplete="given-name" required maxLength={80} pattern=".*\S.*" disabled={status === "sending"} /></label>
          <label>{t.lastName}<input name="lastName" autoComplete="family-name" required maxLength={80} pattern=".*\S.*" disabled={status === "sending"} /></label>
        </div>
        <label>{t.email}<input name="email" type="email" autoComplete="email" required maxLength={254} disabled={status === "sending"} /></label>
        <label>{t.message}<textarea name="message" rows={6} required minLength={10} maxLength={5000} placeholder={t.placeholder} disabled={status === "sending"} /></label>
        <div className={styles.trap} aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <p className={styles.note}>{t.note}</p>
        <button type="submit" disabled={status === "sending" || remaining > 0}>{status === "sending" ? t.sending : t.send}<ArrowUpRight size={20} aria-hidden="true" /></button>
        {remaining > 0 && <p className={styles.note}>{t.wait} {remaining} {t.seconds}.</p>}
        <div role="status" aria-live="polite" aria-atomic="true">
          {status === "success" && <p className={styles.success}><CheckCircle2 size={20} aria-hidden="true" />{t.success}</p>}
          {status === "error" && <p className={styles.error}>{t[error]}</p>}
        </div>
      </form>
      <p className={styles.direct}>{t.alternative}: <a href="mailto:tomas_masotta@live.com">tomas_masotta@live.com</a></p>
    </main>
  );
}
