'use client';

import { useState } from 'react';

export default function ContactForm() {
  // můžeš sem kdykoli dát svůj Formspree/Getform endpoint
  const FORMS_ACTION = 'https://formspree.io/f/your-id'; // ← nahraď, až budeš mít

  const [sent, setSent] = useState(false);

  return (
    <form
      method="POST"
      action={FORMS_ACTION}
      onSubmit={() => setSent(true)}
      style={{
        display: 'grid',
        gap: 12,
        maxWidth: 560,
        width: '100%',
      }}
    >
      <label style={{ display: 'grid', gap: 6 }}>
        Jméno a příjmení
        <input
          name="name"
          required
          placeholder="Jan Novák"
          style={inputStyle}
        />
      </label>

      <label style={{ display: 'grid', gap: 6 }}>
        E-mail
        <input
          type="email"
          name="email"
          required
          placeholder="jan.novak@email.cz"
          style={inputStyle}
        />
      </label>

      <label style={{ display: 'grid', gap: 6 }}>
        Zpráva
        <textarea
          name="message"
          required
          placeholder="Krátce mi napište, s čím potřebujete pomoci…"
          rows={5}
          style={inputStyle}
        />
      </label>

      <button
        type="submit"
        style={{
          border: 'none',
          cursor: 'pointer',
          padding: '12px 16px',
          borderRadius: 10,
          fontWeight: 700,
          color: '#0b1728',
          background: '#ffc531',
        }}
      >
        Odeslat zprávu
      </button>

      {sent && (
        <p style={{ opacity: 0.8 }}>
          Odesláno – pokud nepřijde potvrzení, napište prosím přímo na
          patrik.svoboda@wmfinance.cz
        </p>
      )}
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.02)',
  color: 'inherit',
  padding: '10px 12px',
  outline: 'none',
};
