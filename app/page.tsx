'use client';

import React from 'react';
import Image from 'next/image';

const brand = {
  bg:    '#0b1728',   // tmavé pozadí stránky
  panel: '#0d1c2e',   // tmavý panel/sekce
  text:  '#e6edf6',   // světlejší text
  mute:  '#9fb1c8',   // popisky
  gold:  '#e7b308',   // akcent (WMF zlatá)
  line:  'rgba(255,255,255,.08)',
};

const Tag = ({children}:{children: React.ReactNode}) => (
  <span style={{
    display:'inline-block', padding:'10px 16px',
    borderRadius:999, border:`1px solid ${brand.line}`, color:brand.text,
    marginRight:10, marginBottom:10, fontSize:16, background:'rgba(255,255,255,.03)'
  }}>{children}</span>
);

export default function Page() {
  return (
    <main style={{background:brand.bg, color:brand.text}}>
      {/* HERO */}
      <section style={{maxWidth:1280, margin:'0 auto', padding:'32px 20px 48px'}}>
        <div style={{
          display:'grid',
          gridTemplateColumns:'1.1fr .9fr',
          gap:24,
          alignItems:'stretch',
          borderRadius:20,
          background:'linear-gradient(180deg, #0d1c2e, #0b1728)',
          border:`1px solid ${brand.line}`,
          overflow:'hidden',
        }}>
          {/* Levý sloupec – text */}
          <div style={{padding:'36px 28px 40px 28px'}}>
            <h1 style={{
              fontSize:48, lineHeight:1.15, margin:'0 0 16px', fontWeight:800,
              letterSpacing:.3
            }}>
              Bc. Patrik Svoboda, EFA
            </h1>

            <p style={{fontSize:20, color:brand.mute, margin:'0 0 22px'}}>
              Finanční plán, který obstojí v číslech i realitě. Kancelář v Jihlavě, spolupráce po celé ČR.
              Hypotéky, investice a zajištění příjmu – srozumitelně a dlouhodobě.
            </p>

            <div style={{margin:'0 0 18px'}}>
              {['Hypotéky a refinancování','Investice a cesta k rentě','Zajištění příjmu','Podnikatelská rizika','Zaměstnanecké benefity','Lidský přístup']
                .map(x => <Tag key={x}>{x}</Tag>)}
            </div>

            <div style={{display:'flex', gap:14, flexWrap:'wrap', marginTop:10}}>
              <a href="/sluzby" style={{
                display:'inline-block', padding:'12px 18px', borderRadius:999,
                background:brand.gold, color:'#1a1a1a', textDecoration:'none',
                fontWeight:700, border:`1px solid ${brand.gold}`
              }}>
                Hypotéky
              </a>
              <a href="/sluzby" style={{
                display:'inline-block', padding:'12px 18px', borderRadius:999,
                background:'transparent', color:brand.text, textDecoration:'none',
                border:`1px solid ${brand.line}`
              }}>
                Investice a renta
              </a>
              <a href="mailto:patrik.svoboda@wmfinance.cz?subject=Konzultace"
                 style={{
                   display:'inline-block', padding:'12px 18px', borderRadius:999,
                   background:'transparent', color:brand.text, textDecoration:'none',
                   border:`1px solid ${brand.line}`
                 }}>
                Napsat · patrik.svoboda@wmfinance.cz
              </a>
              <span style={{
                display:'inline-block', padding:'12px 18px', borderRadius:999,
                background:'transparent', color:brand.text,
                border:`1px solid ${brand.line}`
              }}>
                Zavolat · 774 697 755
              </span>
            </div>
          </div>

          {/* Pravý sloupec – FOTO bez bílých okrajů + příjezd zprava */}
          <div className="heroPhotoTile" style={{position:'relative', minHeight:620, overflow:'hidden'}}>
            {/* samotná fotka přes celou dlaždici */}
            <Image
              src="/ja-bile-pozadi.jpg"
              alt="Patrik Svoboda – finanční poradce"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              // vyplní celý panel – bez okrajů; raději zachováme hlavu (posun k top)
              style={{objectFit:'cover', objectPosition:'center top'}}
            />
            {/* tmavá maska zleva (plynulé napojení na tmavé pozadí) */}
            <div style={{
              position:'absolute', inset:0, pointerEvents:'none',
              background:'linear-gradient(90deg, rgba(11,23,40,0.95) 0%, rgba(11,23,40,0.65) 18%, rgba(11,23,40,0.00) 48%)'
            }}/>
            {/* badge v rohu */}
            <span style={{
              position:'absolute', left:18, bottom:18,
              background:brand.gold, color:'#1a1a1a', fontWeight:800,
              borderRadius:999, padding:'10px 14px', border:`1px solid ${brand.gold}`
            }}>
              EFA · Vysočina & celá ČR
            </span>
          </div>
        </div>
      </section>

      {/* Placeholder další sekce */}
      <section style={{maxWidth:1280, margin:'0 auto', padding:'10px 20px 60px'}}>
        <h2 style={{fontSize:32, fontWeight:800, margin:'0 0 12px'}}>S čím pomáhám</h2>
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
          gap:16
        }}>
          {[
            ['Hypotéky',['Nákup i refinancování','Fixace a LTV','Kompletní vyřízení']],
            ['Investice a renta',['ETF / akcie','Plán renty','Pravidelné vklady']],
            ['Zajištění příjmu a majetku',['Invalidita, PN','Domácnost a nemovitost','Odpovědnost']],
          ].map(([title, points]) => (
            <div key={title as string} style={{
              background:brand.panel, border:`1px solid ${brand.line}`,
              borderRadius:16, padding:16
            }}>
              <h3 style={{margin:'0 0 8px', fontSize:18, fontWeight:700}}>{title as string}</h3>
              <ul style={{margin:0, paddingLeft:18, color:brand.mute}}>
                {(points as string[]).map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Animace „příjezd zprava“ */}
      <style jsx>{`
        .heroPhotoTile{
          opacity:0;
          transform:translateX(44px);
          animation: slideInRight 720ms cubic-bezier(.22,.95,.3,1) 160ms forwards;
          will-change: transform, opacity;
          background: transparent;
          border-left: 1px solid ${brand.line};
        }
        @keyframes slideInRight{
          from { opacity:0; transform:translateX(44px); }
          to   { opacity:1; transform:translateX(0); }
        }
      `}</style>
    </main>
  );
}
