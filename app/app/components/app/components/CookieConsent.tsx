'use client';
import React from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookie-consent');
  });

  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false); };
  const decline = () => { localStorage.setItem('cookie-consent', 'declined'); setVisible(false); };

  if (!visible) return null;

  return (
    <div style={{
      position:'fixed', inset:'auto 12px 12px 12px', zIndex:9999,
      background:'#0b1728', color:'#fff', border:'1px solid #213147',
      borderRadius:12, padding:'14px 16px', display:'flex', gap:12, alignItems:'center',
      boxShadow:'0 10px 30px rgba(0,0,0,.35)'
    }}>
      <div style={{flex:1, fontSize:14, lineHeight:1.4}}>
        Tento web používá cookies pro základní funkce a anonymní statistiky (GA4).
      </div>
      <button onClick={decline}
        style={{background:'transparent', border:'1px solid #31435c', color:'#dbeafe',
        padding:'8px 10px', borderRadius:8, cursor:'pointer'}}>Odmítnout</button>
      <button onClick={accept}
        style={{background:'#f2c64d', border:'none', color:'#0b1728',
        padding:'8px 12px', borderRadius:8, cursor:'pointer', fontWeight:700}}>Přijmout</button>
    </div>
  );
}
