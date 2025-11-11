// app/layout.tsx
import './globals.css';
import React from 'react';
import CookieConsent from './components/CookieConsent';

export const metadata = {
  title: 'Bc. Patrik Svoboda, EFA',
  description: 'Finanční plán, hypotéky, investice a zajištění příjmu. Kancelář Jihlava, spolupráce po celé ČR.',
};

const brand = {
  bg:'#0b1728', text:'#e6edf6', line:'rgba(255,255,255,.08)'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body style={{background:brand.bg, color:brand.text, margin:0}}>
        {/* FIXNÍ HLAVIČKA – pokud máš svou, vyměň blok níže za ni */}
        <header style={{
          position:'fixed', top:0, left:0, right:0, zIndex:1000,
          backdropFilter:'saturate(140%) blur(6px)',
          background:'rgba(13,28,46,.82)', borderBottom:`1px solid ${brand.line}`
        }}>
          <div style={{
            maxWidth:1280, margin:'0 auto', padding:'14px 20px',
            display:'flex', alignItems:'center', gap:16, flexWrap:'wrap'
          }}>
            <a href="/" style={{color:'#fff', textDecoration:'none', fontWeight:800, letterSpacing:.3, fontSize:18}}>
              Bc. Patrik Svoboda, EFA
            </a>
            <nav style={{display:'flex', gap:10, flexWrap:'wrap', marginLeft:'auto'}}>
              {[
                ['Domů','/'],
                ['O mně','/o-mne'],
                ['EFA certifikace','/efa'],
                ['Služby','/sluzby'],
                ['Aktuality','/blog'],
                ['Ptejte se','/ptejte-se'],
              ].map(([label, href])=>(
                <a key={href} href={href as string} style={{
                  color:'#e6edf6', textDecoration:'none', fontSize:14,
                  padding:'8px 12px', borderRadius:999, border:`1px solid ${brand.line}`,
                  background:'rgba(255,255,255,.03)'
                }}>{label}</a>
              ))}
            </nav>
          </div>
        </header>

        {/* Rezerva pod fixní hlavičkou */}
        <div style={{height:72}} />

        {children}

        <footer style={{
          maxWidth:1280, margin:'0 auto', padding:'40px 20px',
          color:'rgba(230,237,246,.7)', borderTop:`1px solid ${brand.line}`
        }}>
          © {new Date().getFullYear()} Bc. Patrik Svoboda, EFA • Žižkova 13, Jihlava • IČO 09910263
        </footer>

        <CookieConsent />
      </body>
    </html>
  );
}
