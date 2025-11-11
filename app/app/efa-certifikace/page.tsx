'use client';
import React from 'react';

const brand = {
  panel:'#0d1c2e', text:'#e6edf6', mute:'#9fb1c8', line:'rgba(255,255,255,.08)', gold:'#e7b308'
};

export default function EFA(){
  return (
    <main style={{maxWidth:980, margin:'0 auto', padding:'20px'}}>
      <h1 style={{fontSize:36, fontWeight:800, margin:'0 0 12px'}}>EFA certifikace</h1>
      <div style={{border:`1px solid ${brand.line}`, borderRadius:16, padding:18, background:brand.panel}}>
        <p style={{color:brand.mute, margin:'0 0 10px'}}>
          EFA (European Financial Advisor) je mezinárodně uznávaný standard odbornosti v osobním finančním poradenství.
          Prověřuje znalosti napříč investicemi, úvěry, pojištěním i související legislativou.
        </p>
        <ul style={{color:brand.mute, margin:'0 0 10px 18px'}}>
          <li>Důraz na čísla, metodiku a etiku</li>
          <li>Zkouška pokrývající investice, úvěry, pojištění i plánování</li>
          <li>Garance odborného přístupu a dlouhodobé péče</li>
        </ul>
        <p style={{color:brand.mute, margin:0}}>
          Držitel certifikace prokazuje, že rozumí principům i praxi a umí klientům srozumitelně vysvětlit řešení
          v jejich kontextu. To je základ spolehlivého, dlouhodobě udržitelného finančního plánu.
        </p>
      </div>
    </main>
  );
}
