// app/components/Instagram.tsx
'use client';
import React from 'react';

const brand = {
  panel:'#0d1c2e',
  text:'#e6edf6',
  mute:'#9fb1c8',
  line:'rgba(255,255,255,.08)',
  gold:'#e7b308',
};

export default function InstagramBlock(){
  return (
    <section style={{maxWidth:1280, margin:'0 auto', padding:'20px'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
        <h2 style={{fontSize:28, fontWeight:800, margin:0}}>Instagram</h2>
        <a href="https://www.instagram.com/patrik.svoboda_efa/" target="_blank" rel="noreferrer"
           style={{textDecoration:'none', background:brand.gold, color:'#1a1a1a',
                   padding:'10px 14px', borderRadius:999, fontWeight:700, border:`1px solid ${brand.gold}`}}>
          @patrik.svoboda_efa
        </a>
      </div>

      {/* ⬇⬇⬇ ZDE JEN VYMĚŇ URL ZA TVŮJ WIDGET (SnapWidget/LightWidget) ⬇⬇⬇ */}
      <div style={{
        border:`1px solid ${brand.line}`, borderRadius:16, overflow:'hidden',
        background:brand.panel
      }}>
        <iframe
          title="Instagram feed"
          src="https://snapwidget.com/embed/123456789"  /* ← sem pak dáme tvoje URL */
          allowTransparency={true}
          scrolling="no"
          style={{border:0, width:'100%', height:520}}
        />
      </div>

      <p style={{fontSize:13, color:brand.mute, marginTop:8}}>
        Náhled feedu je vložen pomocí externího widgetu. Až budeš mít svůj embed odkaz, jen vyměníme <code>src=…</code>.
      </p>
    </section>
  );
}
