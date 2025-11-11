'use client';
import React, { useEffect, useState } from 'react';

const key = 'cookie-consent-v1'; // localStorage key

function loadGA(measurementId: string){
  // už načteno?
  // @ts-ignore
  if (window.gtag) return;

  // gtag.js
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);

  // init
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  function gtag(){ window.dataLayer.push(arguments); }
  // @ts-ignore
  window.gtag = gtag;
  // @ts-ignore
  window.gtag('js', new Date());
  // @ts-ignore
  window.gtag('config', measurementId, { anonymize_ip: true });
}

export default function CookieConsent(){
  const [consent, setConsent] = useState<'unknown'|'granted'|'denied'>('unknown');
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(()=>{
    const saved = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    if (saved === 'granted') {
      setConsent('granted');
      if (gaId) loadGA(gaId);
    } else if (saved === 'denied') {
      setConsent('denied');
    } else {
      setConsent('unknown');
    }
  }, [gaId]);

  if (consent !== 'unknown') return null;

  return (
    <div style={{
      position:'fixed', left:20, right:20, bottom:20, zIndex:10000,
      background:'rgba(13,28,46,.95)', color:'#e6edf6', padding:16,
      border:'1px solid rgba(255,255,255,.12)', borderRadius:12
    }}>
      <div style={{display:'grid', gap:10}}>
        <div><strong>Cookies na měření návštěvnosti</strong></div>
        <div style={{opacity:.85}}>
          Rád bych používal anonymizované měření (GA4), abych věděl, co na webu funguje. Souhlas je dobrovolný —
          bez něj poběží jen nezbytné cookies.
        </div>
        <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
          <button onClick={()=>{
            localStorage.setItem(key,'granted');
            setConsent('granted');
            if (gaId) loadGA(gaId);
          }} style={{
            padding:'10px 14px', borderRadius:999, background:'#e7b308', color:'#1a1a1a',
            border:'1px solid #e7b308', fontWeight:700
          }}>Přijmout analytiku</button>
          <button onClick={()=>{
            localStorage.setItem(key,'denied');
            setConsent('denied');
          }} style={{
            padding:'10px 14px', borderRadius:999, background:'transparent', color:'#e6edf6',
            border:'1px solid rgba(255,255,255,.2)'
          }}>Pouze nezbytné</button>
        </div>
      </div>
    </div>
  );
}
