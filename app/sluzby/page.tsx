'use client';
import React from 'react';

const brand = {
  panel:'#0d1c2e', text:'#e6edf6', mute:'#9fb1c8', line:'rgba(255,255,255,.08)', gold:'#e7b308'
};

const Section = ({id, title, children}:{id:string; title:string; children:React.ReactNode}) => (
  <section id={id} style={{scrollMarginTop:88}}>
    <h2 style={{fontSize:28, fontWeight:800, margin:'26px 0 12px'}}>{title}</h2>
    <div style={{border:`1px solid ${brand.line}`, borderRadius:16, padding:18, background:brand.panel}}>
      {children}
    </div>
  </section>
);

export default function Sluzby(){
  return (
    <main style={{maxWidth:980, margin:'0 auto', padding:'20px'}}>
      <h1 style={{fontSize:36, fontWeight:800, margin:'0 0 12px'}}>Služby</h1>

      {/* Lokální menu */}
      <nav style={{display:'flex', gap:8, flexWrap:'wrap', margin:'0 0 12px'}}>
        {[
          ['Hypotéky','#hypoteky'],
          ['Investice','#investice'],
          ['Zajištění příjmu a majetku','#pojisteni'],
          ['Podnikatelská rizika','#firmy'],
          ['FAQ','#faq'],
        ].map(([label,href])=>(
          <a key={href} href={href} style={{
            textDecoration:'none', color:brand.text, border:`1px solid ${brand.line}`,
            padding:'8px 12px', borderRadius:999, background:'rgba(255,255,255,.03)', fontSize:14
          }}>{label}</a>
        ))}
      </nav>

      <Section id="hypoteky" title="Hypotéky & financování">
        <ul style={{color:brand.mute, margin:'0 0 12px 18px'}}>
          <li>Nákup i refinancování, porovnání nabídek</li>
          <li>Nastavení fixace, LTV a rezerv</li>
          <li>Kompletní vyřízení a průběžná péče</li>
        </ul>
        <a href="mailto:patrik.svoboda@wmfinance.cz?subject=Hypotéka – konzultace" style={{
          textDecoration:'none', background:brand.gold, color:'#1a1a1a',
          padding:'10px 14px', borderRadius:999, fontWeight:700, border:`1px solid ${brand.gold}`
        }}>Domluvit konzultaci</a>
      </Section>

      <Section id="investice" title="Investice & cesta k rentě">
        <ul style={{color:brand.mute, margin:'0 0 12px 18px'}}>
          <li>Dlouhodobé portfolio (ETF/akcie), rizikový profil</li>
          <li>Plán cesty k rentě, reálné zhodnocení vs. inflace</li>
          <li>Pravidelná péče a úpravy podle situace</li>
        </ul>
        <a href="mailto:patrik.svoboda@wmfinance.cz?subject=Investice – konzultace" style={{
          textDecoration:'none', background:brand.gold, color:'#1a1a1a',
          padding:'10px 14px', borderRadius:999, fontWeight:700, border:`1px solid ${brand.gold}`
        }}>Domluvit konzultaci</a>
      </Section>

      <Section id="pojisteni" title="Zajištění příjmu a majetku">
        <ul style={{color:brand.mute, margin:'0 0 12px 18px'}}>
          <li>Invalidita, dlouhodobá pracovní neschopnost</li>
          <li>Životní pojištění, domácnost a nemovitosti</li>
          <li>Odpovědnost a pojistné limity</li>
        </ul>
        <a href="mailto:patrik.svoboda@wmfinance.cz?subject=Pojištění – konzultace" style={{
          textDecoration:'none', background:brand.gold, color:'#1a1a1a',
          padding:'10px 14px', borderRadius:999, fontWeight:700, border:`1px solid ${brand.gold}`
        }}>Domluvit konzultaci</a>
      </Section>

      <Section id="firmy" title="Podnikatelská rizika (pro firmy)">
        <ul style={{color:brand.mute, margin:'0 0 12px 18px'}}>
          <li>Odpovědnost, majetek firmy, přerušení provozu</li>
          <li>Flotilové pojištění</li>
          <li>Zaměstnanecké benefity (daňově efektivní)</li>
        </ul>
        <a href="mailto:patrik.svoboda@wmfinance.cz?subject=Firemní klient – poptávka" style={{
          textDecoration:'none', background:brand.gold, color:'#1a1a1a',
          padding:'10px 14px', borderRadius:999, fontWeight:700, border:`1px solid ${brand.gold}`
        }}>Domluvit konzultaci</a>
      </Section>

      <Section id="faq" title="Časté otázky (FAQ)">
        <ol style={{color:brand.mute, margin:'0 0 12px 18px'}}>
          <li>Do čeho je v dnešní době nejlepší investovat?</li>
          <li>Kolik vlastního kapitálu potřebuji na hypotéku?</li>
          <li>Proč mít krytí invalidity a PN?</li>
        </ol>
        <a href="/kontakt" style={{
          textDecoration:'none', border:`1px solid ${brand.line}`, color:brand.text,
          padding:'10px 14px', borderRadius:999
        }}>Zeptat se na cokoliv →</a>
      </Section>
    </main>
  );
}
