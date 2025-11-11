'use client';
import React, { useState } from 'react';

const input = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 10,
  border: '1px solid #1f2a44',
  background: '#0f1c2e',
  color: '#e2e8f0',
} as React.CSSProperties;

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    try {
      // 🔁 Zatím dummy – klidně napojíme Formspree/Getform
      await new Promise((r) => setTimeout(r, 1000));
      setDone(true);
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div style={{background:'#0f1c2e', border:'1px solid #1f2a44', borderRadius:12, padding:16, color:'#e2e8f0'}}>
        Díky! Vaši zprávu jsem přijal – ozvu se co nejdřív.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{display:'grid', gap:12, background:'#0f1c2e', border:'1px solid #1f2a44', borderRadius:12, padding:16}}>
      <label style={{display:'grid', gap:6, color:'#e2e8f0'}}>
        Jméno
        <input name="name" required style={input} placeholder="Vaše jméno" />
      </label>
      <label style={{display:'grid', gap:6, color:'#e2e8f0'}}>
        E-mail
        <input type="email" name="email" required style={input} placeholder="vas@email.cz" />
      </label>
      <label style={{display:'grid', gap:6, color:'#e2e8f0'}}>
        Zpráva
        <textarea name="message" required rows={5} style={{...input, resize:'vertical'}} placeholder="Stručně popište, s čím potřebujete pomoci…" />
      </label>
      <button disabled={sending} style={{padding:'12px 16px', borderRadius:9999, border:'none', background:'#f1b200', color:'#0b1728', fontWeight:700}}>
        {sending ? 'Odesílám…' : 'Odeslat'}
      </button>
      <p style={{fontSize:12, opacity:.7, color:'#e2e8f0', margin:0}}>
        Odesláním souhlasíte se zpracováním údajů pro účely reakce na dotaz.
      </p>
    </form>
  );
}
