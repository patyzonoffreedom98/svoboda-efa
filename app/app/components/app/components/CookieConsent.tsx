'use client';
import React, { useEffect, useState } from 'react';

type Consent = 'all' | 'necessary';

function getConsent(): Consent | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(/ps-consent=(all|necessary)/);
  return m ? (m[1] as Consent) : null;
}

function setConsent(c: Consent) {
  const expires = new Date(Date.now() + 180 * 24 * 3600 * 1000).toUTCString(); // 180 dní
  document.cookie = `ps-consent=${c}; Path=/; Expires=${expires}; SameSite=Lax`;
  try {
    // volitelně: po změně můžeš poslat event do GA
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'consent_update', consent: c });
  } catch (_) {}
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!getConsent()) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 50,
        left: 16,
        right: 16,
        bottom: 16,
        background: '#0f172a',
        color: '#fff',
        padding: '14px 16px',
        borderRadius: 14,
        boxShadow: '0 10px 30px rgba(0,0,0,.35)',
        border: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <div style={{ display: 'grid', gap: 8 }}>
        <strong>Cookies</strong>
        <span style={{ opacity: .85 }}>
          Používáme pouze nutné soubory cookies a (volitelně) anonymní analytiku pro vylepšení webu.
        </span>
        <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
          <button
            onClick={() => { setConsent('necessary'); setOpen(false); }}
            style={{
              padding: '10px 14px',
              borderRadius: 9999,
              border: '1px solid rgba(255,255,255,.25)',
              background: 'transparent',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Pouze nezbytné
          </button>
          <button
            onClick={() => { setConsent('all'); setOpen(false); }}
            style={{
              padding: '10px 14px',
              borderRadius: 9999,
              background: '#e8b407',
              color: '#0f172a',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Povolit vše
          </button>
        </div>
      </div>
    </div>
  );
}
