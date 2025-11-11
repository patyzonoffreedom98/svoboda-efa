'use client';
import React, { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending'); setErr(null);

    const form = e.currentTarget;
    const data = {
      jmeno: (form.elements.namedItem('jmeno') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefon: (form.elements.namedItem('telefon') as HTMLInputElement).value,
      zprava: (form.elements.namedItem('zprava') as HTMLTextAreaElement).value,
      _subject: 'Poptávka z webu svoboda-efa.cz'
    };

    try {
      const res = await fetch('https://formspree.io/f/mzzybvpl', {
        method: 'POST',
        headers: {'Content-Type':'application/json', 'Accept':'application/json'},
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Nepodařilo se odeslat formulář.');

      // GA4 event (jen pokud uživatel souhlasil a gtag je dostupný)
      // @ts-ignore
      if (typeof window !== 'undefined' && window.gtag) {
        // @ts-ignore
        window.gtag('event', 'generate_lead', { method: 'contact_form' });
      }

      setStatus('ok');
      form.reset();
    } catch (e:any) {
      setErr(e?.message || 'Nastala neznámá chyba.');
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div style={{border:'1px solid rgba(255,255,255,.15)', borderRadius:16, padding:16, background:'rgba(255,255,255,.05)'}}>
        <h3 style={{marginTop:0}}>Děkuji, zpráva byla odeslána ✅</h3>
        <p>Ozvu se co nejdříve na váš e-mail nebo telefon.</p>
        <button onClick={()=>setStatus('idle')}
          style={{padding:'10px 14px', borderRadius:999, border:'1px solid rgba(255,255,255,.2)', background:'transparent', color:'#fff'}}>
          Odeslat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{display:'grid', gap:12}}>
      <label style={{display:'grid', gap:6}}>
        <span>Jméno</span>
        <input name="jmeno" required
          style={{padding:'10px 12px', borderRadius:10, border:'1px solid rgba(255,255,255,.14)',
                  background:'rgba(255,255,255,.06)', color:'#fff'}}/>
      </label>
      <label style={{display:'grid', gap:6}}>
        <span>E-mail</span>
        <input type="email" name="email" required
          style={{padding:'10px 12px', borderRadius:10, border:'1px solid rgba(255,255,255,.14)',
                  background:'rgba(255,255,255,.06)', color:'#fff'}}/>
      </label>
      <label style={{display:'grid', gap:6}}>
        <span>Telefon</span>
        <input name="telefon"
          style={{padding:'10px 12px', borderRadius:10, border:'1px solid rgba(255,255,255,.14)',
                  background:'rgba(255,255,255,.06)', color:'#fff'}}/>
      </label>
      <label style={{display:'grid', gap:6}}>
        <span>Zpráva</span>
        <textarea name="zprava" rows={5} required
          style={{padding:'10px 12px', borderRadius:10, border:'1px solid rgba(255,255,255,.14)',
                  background:'rgba(255,255,255,.06)', color:'#fff'}}/>
      </label>

      {status === 'error' && <p style={{color:'#ffb3b3', margin:0}}>{err}</p>}

      <button type="submit" disabled={status==='sending'}
        style={{padding:'10px 14px', borderRadius:999, background:'#e7b308', color:'#1a1a1a',
                border:'1px solid #e7b308', fontWeight:700}}>
        {status==='sending' ? 'Odesílám…' : 'Odeslat'}
      </button>
    </form>
  );
}
