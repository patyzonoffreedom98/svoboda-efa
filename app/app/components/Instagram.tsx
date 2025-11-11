'use client';
import React from 'react';

export default function InstagramBlock(){
  return (
    <section style={{maxWidth:1280, margin:'0 auto', padding:'20px'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12}}>
        <h2 style={{fontSize:28, fontWeight:800, margin:0}}>Instagram</h2>
        <a href="https://www.instagram.com/patrik.svoboda_efa/" target="_blank" rel="noreferrer"
           style={{textDecoration:'none', background:'#e7b308', color:'#1a1a1a',
                   padding:'10px 14px', borderRadius:999, fontWeight:700, border:'1px solid #e7b308'}}>
          @patrik.svoboda_efa
        </a>
      </div>

      {/* ↓↓↓ ZDE VYMĚŇ URL ZA TVŮJ EMBED ODKAZ (SnapWidget/LightWidget) ↓↓↓ */}
      <div style={{
        border:'1px solid rgba(255,255,255,.08)', borderRadius:16, overflow:'hidden',
        background:'rgba(255,255,255,.03)'
      }}>
        <iframe
          title="Instagram feed"
          src="https://snapwidget.com/embed/DEMO-NAHRAĎ-VAŠÍM-ODKAZEM"
          allowTransparency={true}
          scrolling="no"
          style={{border:0, width:'100%', height:520}}
        />
      </div>

      <p style={{fontSize:12, opacity:.7, marginTop:8}}>
        Embed odkaz získáš na <strong>snapwidget.com</strong> (nebo <strong>lightwidget.com</strong>): přihlásíš IG, vytvoříš „grid feed“,
        zkopíruješ adresu <code>src=…</code> a vložíš ji sem místo „DEMO-NAHRAĎ-VAŠÍM-ODKAZEM“.
      </p>
    </section>
  );
}
