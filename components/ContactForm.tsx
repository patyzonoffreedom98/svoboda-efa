"use client";
import { FormEvent, useId, useRef, useState } from "react";
import { site } from "@/lib/site";
export default function ContactForm({ initialMessage = "", topic = "Obecný dotaz" }: { initialMessage?: string; topic?: string }) {
  const id = useId();
  const busy = useRef(false);
  const [channel, setChannel] = useState("email");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    if (!name || !contact) { setStatus("error"); return; }
    busy.current = true;
    setStatus("loading");
    try {
      const response = await fetch("https://formspree.io/f/xjgpddqa", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, ...(channel === "email" ? { email: contact } : { phone: contact }), message: String(data.get("message") || "").trim(), topic, source: window.location.pathname, _gotcha: String(data.get("website") || "") }),
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch { setStatus("error"); }
    finally { busy.current = false; }
  }
  return <form onSubmit={handleSubmit} className="contact-form" aria-busy={status === "loading"}>
    <label htmlFor={`${id}-name`}>Vaše jméno<input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} disabled={status === "loading"} /></label>
    <label htmlFor={`${id}-channel`}>Jak se vám mám ozvat?<select id={`${id}-channel`} value={channel} disabled={status === "loading"} onChange={event => { setChannel(event.target.value); setStatus("idle"); }}><option value="email">E-mailem</option><option value="phone">Telefonicky</option></select></label>
    <label htmlFor={`${id}-contact`}>{channel === "email" ? "Váš e-mail" : "Vaše telefonní číslo"}<input key={channel} id={`${id}-contact`} name="contact" type={channel === "email" ? "email" : "tel"} autoComplete={channel === "email" ? "email" : "tel"} required maxLength={200} disabled={status === "loading"} /></label>
    <label htmlFor={`${id}-message`}>S čím vám mohu pomoci? <span className="field-hint">Nepovinné</span><textarea id={`${id}-message`} name="message" rows={4} maxLength={5000} defaultValue={initialMessage} disabled={status === "loading"} /></label>
    <div className="form-honeypot" aria-hidden="true"><label htmlFor={`${id}-website`}>Web<input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button className="btn btn-gold" type="submit" disabled={status === "loading"}>{status === "loading" ? "Odesílám…" : "Odeslat nezávazný dotaz"}</button>
    <div aria-live="polite" aria-atomic="true">
      {status === "success" && <p className="form-success" role="status">Děkuji, zpráva byla odeslána. Ozvu se vám do dvou pracovních dnů.</p>}
      {status === "error" && <p className="form-error" role="alert">Zprávu se nepodařilo odeslat. Zkontrolujte kontakt a zkuste to znovu, nebo mi <a href={site.phoneHref}>zavolejte</a>.</p>}
    </div>
    <p className="form-note">Ozvu se do dvou pracovních dnů. Kontaktní údaje použiji k vyřízení vašeho dotazu. Formulář odesílá služba Formspree.</p>
  </form>;
}
export { ContactForm };
