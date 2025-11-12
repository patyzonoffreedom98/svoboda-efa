"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"err">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message: msg }),
    });
    setStatus(res.ok ? "ok" : "err");
    if (res.ok) { setName(""); setEmail(""); setMsg(""); }
  }

  return (
    <form onSubmit={submit} className="grid" style={{ gap: 12, maxWidth: 720 }}>
      <input className="input" placeholder="Jméno" value={name} onChange={e=>setName(e.target.value)} required />
      <input className="input" placeholder="E-mail" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <textarea className="input" placeholder="Zpráva" rows={5} value={msg} onChange={e=>setMsg(e.target.value)} required />
      <button className="btn" disabled={status==="sending"}>{status==="sending" ? "Odesílám…" : "Odeslat"}</button>
      {status==="ok" && <div className="small" style={{ color:"var(--gold)" }}>Děkuji, ozvu se co nejdřív.</div>}
      {status==="err" && <div className="small" style={{ color:"#ff6b6b" }}>Něco se nepovedlo. Zkuste prosím znovu.</div>}
    </form>
  );
}
