'use client';
// app/components/ContactForm.tsx
import React, { useState } from 'react';

type Props = {
  title?: string;
  defaultMessage?: string;
};

export default function ContactForm({
  title = 'Napište mi zprávu',
  defaultMessage = '',
}: Props) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // TODO: nahraď svoji Formspree/Getform adresou:
  const FORMSPREE = 'https://formspree.io/f/your-id';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (res.ok) setSent(true);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div style={card}>
        <h3>Děkuji, zpráva byla odeslána ✅</h3>
        <p>Ozvu se co nejdříve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={card}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <label style={lbl}>Jméno</label>
      <input name="name" required placeholder="Jméno a příjmení" style={inp} />

      <label style={lbl}>E-mail</label>
      <input name="email" type="email" required placeholder="vase@adresa.cz" style={inp} />

      <label style={lbl}>Zpráva</label>
      <textarea name="message" required rows={5} defaultValue={defaultMessage} style={txt} />

      <button disabled={loading} type="submit" style={btn}>
        {loading ? 'Odesílám…' : 'Odeslat'}
      </button>
    </form>
  );
}

const card: React.CSSProperties = {
  background: '#0f1d31',
  border: '1px solid rgba(255,255,255,.08)',
  borderRadius: 16,
  padding: 20,
  color: '#e6edf6',
  maxWidth: 560,
};

const lbl: React.CSSProperties = { display: 'block', margin: '10px 0 6px', color: '#9fb0c8', fontSize: 14 };
const inp: React.CSSProperties = {
  width: '100%', padding: '12px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,.08)',
  background: '#0b1728', color: '#e6edf6', outline: 'none',
};
const txt = inp;
const btn: React.CSSProperties = {
  marginTop: 14, background: '#f0c941', color: '#0b1728', border: 'none',
  borderRadius: 12, padding: '12px 16px', fontWeight: 700, cursor: 'pointer',
};
