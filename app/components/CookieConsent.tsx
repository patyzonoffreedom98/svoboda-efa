'use client';

import { useEffect, useState } from 'react';

const COOKIE_KEY = 'ps-consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // zobrazit lištu jen pokud ještě není uložen souhlas/nesouhlas
    const v = typeof window !== 'undefined' ? window.localStorage.getItem(COOKIE_KEY) : null;
    if (!v) setOpen(true);
  }, []);

  function accept() {
    try { window.localStorage.setItem(COOKIE_KEY, 'accepted'); } catch {}
    setOpen(false);
    // zde případně spustíme GA/Meta tagy, až budeš mít měřící ID
  }

  function reject() {
    try { window.localStorage.setItem(COOKIE_KEY, 'rejected'); } catch {}
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      style={{
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 60,
        maxWidth: 960,
        margin: '0 auto',
        background: '#0b1728',
        color: '#fff',
        border: '1px solid #243244',
        borderRadius: 12,
        boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
        padding: '14px 16px',
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <p style={{ margin: 0, lineHeight: 1.45 }}>
        Tento web používá pouze nezbytné cookies a měření návštěvnosti.  
        Svůj souhlas můžeš kdykoliv odvolat v nastavení prohlížeče.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={reject}
          style={{
            padding: '10px 14px',
            borderRadius: 10,
            background: 'transparent',
            border: '1px solid #3b4a5f',
            color: '#cbd5e1',
            cursor: 'pointer',
          }}
        >
          Odmítnout
        </button>
        <button
          onClick={accept}
          style={{
            padding: '10px 14px',
            borderRadius: 10,
            background: '#f3b316', // zlatá z tvého brandu
            border: 'none',
            color: '#0b1728',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Souhlasím
        </button>
      </div>
    </div>
  );
}
