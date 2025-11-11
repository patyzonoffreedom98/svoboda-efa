// app/page.tsx
'use client';
import React from 'react';

const brand = {
  navy: '#0f1f3a',
  navyDark: '#0b162b',
  navyLight: '#102748',
  accent: '#d4a100',
  textLight: '#eef2f7',
  line: 'rgba(255,255,255,.15)'
};

const styles: {[k:string]: React.CSSProperties} = {
  hero:{
    display:'grid', gridTemplateColumns:'1.1fr .9fr', alignItems:'stretch',
    minHeight:560, border:'1px solid ' + brand.line, borderRadius:16, overflow:'hidden'
  },
  heroLeft:{padding:'46px 28px'},
  h1:{fontSize:46, fontWeight:800, margin:'0 0 10px'},
  lead:{fontSize:18, color:'rgba(255,255,255,.85)'},
  tags:{display:'flex', flexWrap:'wrap', gap:8, margin:'14px 0 0', padding:0, listStyle:'none'},
  tag:{padding:'6px 10px', border:'1px solid ' + brand.line, borderRadius:9999, background:'rgba(255,255,255,.06)', fontSize:13},
  ctaRow:{display:'flex', gap:12, marginTop:18, flexWrap:'wrap'},
  btnPrimary:{
    display:'inline-block', padding:'10px 16px', borderRadius:9999, textDecoration:'none',
    background:brand.accent, color:brand.navyDark, fontWeight:700, border:'1px solid rgba(0,0,0,.08)'
  },
  btnOutline:{
    display:'inline-block', padding:'10px 16px', borderRadius:9999, textDecoration:'none',
    color:'#fff', border:'1px solid ' + brand.line
  },
  heroRight:{position:'relative', background:'linear-gradient(180deg,' + brand.navyLight + ',' + brand.navyDark + ')'},
  photoWrap:{position:'absolute', inset:0, display:'flex', alignItems:'flex-end', justifyContent:'flex-end'},
  photoInner:{width:'100%', height:'100%', maxWidth:720, display:'flex', alignItems:'flex-end', justifyContent:'flex-end'},
  ribbon:{position:'absolute', left:16, bottom:16, background:brand.accent, color:brand.navyDark, padding:'6px 10px', borderRadius:9999, fontSize:12},
  benefitBox:{marginTop:16, border:'1px solid ' + brand.line, borderRadius:16, padding:16},
  h2:{fontSize:24, fontWeight:800, margin:'0 0 8px'}
};

export default function Page(){
  const email = 'patrik.svoboda@wmfinance.cz';
  const phone = '774 697 755';

  return (
    <section>
      {/* HERO */}
      <div className="hero" style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.h1}>Bc. Patrik Svoboda, EFA</h1>
          <p style={styles.lead}>
            Finanční plán, který obstojí v číslech i realitě. Kancelář v Jihlavě, spolupráce po celé ČR.
            Hypotéky, investice a zajištění příjmu – srozumitelně a dlouhodobě.
          </p>

          <ul style={styles.tags}>
            {['Hypotéky a refinancování','Investice a cesta k rentě','Zajištění příjmu','Podnikatelská rizika','Zaměstnanecké benefity','Lidský přístup'].map(t=>(
              <li key={t} style={styles.tag}>{t}</li>
            ))}
          </ul>

          <div style={styles.ctaRow}>
            <a href="/hypoteky-a-financovani" style={styles.btnPrimary}>Hypotéky</a>
            <a href="/investice-a-cesta-k-rente" style={styles.btnOutline}>Investice a renta</a>
            <a href={'mailto:'+email+'?subject=Konzultace'} style={styles.btnOutline}>Napsat · {email}</a>
            <a href={'tel:+420'+phone.replace(/\s/g,'')} style={styles.btnOutline}>Zavolat · {phone}</a>
          </div>
        </div>

        <div style={styles.heroRight}>
          <div style={{position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(15,31,58,0) 0%, rgba(15,31,58,.25) 40%, rgba(15,31,58,.45) 100%)'}}/>
          <div style={styles.photoWrap}>
            <div style={styles.photoInner}>
              <img
                src="/ja-bile-pozadi.jpg"
                alt="Patrik Svoboda – finanční poradce"
                style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'bottom right', display:'block'}}
              />
            </div>
          </div>
          <div style={styles.ribbon}><strong>EFA</strong> • Vysočina & celá ČR</div>
        </div>
      </div>

      {/* BENEFITY (vypíchnutí 5 bodů) */}
      <div style={styles.benefitBox}>
        <h2 style={styles.h2}>Proč se potkat</h2>
        <ul>
          <li>EFA kvalifikace – odbornost napříč investicemi, úvěry i pojištěním</li>
          <li>Čísla i realita – plán, který umí obojí</li>
          <li>Dlouhodobá péče a pravidelný servis</li>
          <li>Lidský přístup, srozumitelná doporučení</li>
          <li>Spolupráce v celé ČR, kancelář Jihlava</li>
        </ul>
      </div>

      {/* drobná mobilní úprava layoutu */}
      <style jsx>{`
        @media (max-width: 980px){
          .hero { grid-template-columns: 1fr; min-height: 460px; }
        }
      `}</style>
    </section>
  );
}
