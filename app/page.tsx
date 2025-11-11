'use client';

import React from 'react';
import Image from 'next/image';

const brand = {
  bg:    '#0b1728',
  panel: '#0d1c2e',
  text:  '#e6edf6',
  mute:  '#9fb1c8',
  gold:  '#e7b308',
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

            {/* >>> NOVÉ BENEFITY <<< */}
            <div style={{margin:'0 0 18px'}}>
              {['Profesionalita','Odbornost','Ochota','Dlouhodobost'].map(x => <Tag key={x}>{x}</Tag>)}
            </div>

            <div style={{display:'flex', gap:14, flexWrap:'wrap', marginTop:10}}>
              <a href="/sluzby#hypoteky" style={{
                display:'inline-block', padding:'12px 18px', borderRadius:999,
                background:brand.gold, color:'#1a1a1a', textDecoration:'none',
                fontWeight:700, border:`1px solid ${brand.gold}`
              }}>
                Hypotéky
              </a>
              <a href="/sluzby#investice" style={{
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

          {/* Pravý sloupec – FOTO s příjezdem + bez bílých okrajů */}
          <div className="heroPhotoTile" style={{position:'relative', minHeight:620, overflow:'hidden'}}>
            <Image
              src="/ja-bile-pozadi.jpg"
              alt="Patrik Svoboda – finanční poradce"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{objectFit:'cover', objectPosition:'center top'}}
            />
            <div style={{
              position:'absolute', inset:0, pointerEvents:'none',
              background:'linear-gradient(90deg, rgba(11,23,40,0.95) 0%, rgba(11,23,40,0.65) 18%, rgba(11,23,40,0.00) 48%)'
            }}/>
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

      {/* Místo pro další obsah (služby atd.) – může zůstat jak je, nebo doladíme později */}

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
