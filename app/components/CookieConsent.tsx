'use client';

import { useEffect, useState } from 'react';

const COOKIE_KEY = 'ps-consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const v = typeof window !== 'undefined' ? window.localStorage.getItem(COOKIE_KEY) : null;
    if (!v) setOpen(true);
  }, []);

  function accept() {
    try {
      window.localStorage.setItem(COOKIE_KEY, 'accepted');
    } catch {}
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      style={{
        position: 'fixed',
        inset: 'auto 16px 16px 16px',
        zIndex: 1000,
        background: '#0b1728',
        color: '#fff',
        border: '1px solid #18314f',
        borderRadius: 12,
        padding: '14px 16px',
        boxShadow: '0 10px 30px rgba(0,0,0,.35)',
        display: 'grid',
        gap: 10,
      }}
    >
      <div style={{fontSize:14, lineHeight:1.5}}>
        Používáme pouze nezbytné cookies a anonymní měření návštěvnosti. Pokračováním souhlasíte.
      </div>
      <div style={{display:'flex', gap:10, justifyContent:'flex-end'}}>
        <a href="/cookies" style={{fontSize:13, opacity:.8, color:'#cbd5e1'}}>Podrobnosti</a>
        <button
          onClick={accept}
          style={{
            padding:'8px 14px',
            borderRadius:9999,
            border:'1px solid #f3c74b',
            background:'#f3c74b',
            color:'#0b1728',
            fontWeight:700,
            cursor:'pointer'
          }}
        >
          Souhlasím
        </button>
      </div>
    </div>
  );
}
