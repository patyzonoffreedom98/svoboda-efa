// app/kontakt/page.tsx
'use client';
import React from 'react';

export default function KontaktPage(){
  return (
    <div style={{maxWidth:820, margin:'0 auto', background:'#fff', border:'1px solid #e2e8f0', borderRadius:16, padding:20}}>
      <h1 style={{fontSize:28, fontWeight:800, marginTop:0}}>Kontakt</h1>
      <p>Tel.: 774 697 755<br/>E-mail: patrik.svoboda@wmfinance.cz<br/>IČO: 09910263<br/>Kancelář: Žižkova 13, Jihlava</p>

      <p>Napíšete mi přes <a href="mailto:patrik.svoboda@wmfinance.cz?subject=Poptávka">e-mail</a>, nebo vyplňte kontaktní formulář níže.</p>

      {/* Formspree – endpoint doplníme sem (až ho chceš rovnou přidat) */}
    </div>
  );
}
