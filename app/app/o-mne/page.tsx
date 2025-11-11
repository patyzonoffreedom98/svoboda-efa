'use client';
import React from 'react';
import Image from 'next/image';

const brand = {
  panel:'#0d1c2e', text:'#e6edf6', mute:'#9fb1c8', line:'rgba(255,255,255,.08)', gold:'#e7b308'
};

export default function OMne(){
  return (
    <main style={{maxWidth:980, margin:'0 auto', padding:'20px'}}>
      <h1 style={{fontSize:36, fontWeight:800, margin:'0 0 16px'}}>O mně</h1>
      <div style={{
        display:'grid', gridTemplateColumns:'260px 1fr', gap:18,
        alignItems:'start', border:`1px solid ${brand.line}`, borderRadius:16, padding:18, background:brand.panel
      }}>
        <div style={{position:'relative', width:'100%', aspectRatio:'3/4', overflow:'hidden', borderRadius:12}}>
          <Image src="/ja-bile-pozadi.jpg" alt="Patrik Svoboda" fill style={{objectFit:'cover', objectPosition:'center top'}}/>
        </div>
        <div>
          <p style={{color:brand.mute, margin:'0 0 10px'}}>
            Jsem <strong>Bc. Patrik Svoboda</strong>, certifikovaný poradce se zaměřením na hypotéky, investice
            a zajištění příjmu a majetku. Pracuji srozumitelně a na číslech – tak, aby plán fungoval v realitě
            a dlouhodobě.
          </p>
          <p style={{color:brand.mute, margin:'0 0 10px'}}>
            Spolupracuji s klienty po celé ČR; hlavní kancelář mám v Jihlavě. Věřím v jednoduchost, průběžnou péči
            a férové nastavení spolupráce.
          </p>
          <p style={{color:brand.mute, margin:0}}>
            Domluvte si krátký call nebo schůzku a probereme, co dává smysl ve vaší situaci.
          </p>
          <div style={{marginTop:14, display:'flex', gap:12, flexWrap:'wrap'}}>
            <a href="mailto:patrik.svoboda@wmfinance.cz?subject=Konzultace" style={{
              textDecoration:'none', background:brand.gold, color:'#1a1a1a',
              padding:'10px 14px', borderRadius:999, fontWeight:700, border:`1px solid ${brand.gold}`
            }}>Napsat</a>
            <span style={{
              padding:'10px 14px', borderRadius:999, border:`1px solid ${brand.line}`, color:brand.text
            }}>Zavolat · 774 697 755</span>
          </div>
        </div>
      </div>
    </main>
  );
}
