// app/page.tsx
'use client';
import React from 'react';

const brand = {
  navy: '#0f1f3a',
  navyDark: '#0b162b',
  navyLight: '#102748',
  accent: '#d4a100',
  bgSoft: '#e9eef7',
  text: '#0f172a',
  textMuted: '#334155',
  border: '#e2e8f0',
  white: '#ffffff',
};

const styles: {[k:string]: React.CSSProperties} = {
  card:{
    background:brand.white, border:'1px solid ' + brand.border, borderRadius:16,
    boxShadow:'0 18px 40px rgba(0,0,0,.12)', overflow:'hidden'
  },
  hero:{
    display:'grid', gridTemplateColumns:'1.1fr .9fr', gap:0, alignItems:'stretch'
  },
  heroLeft:{padding:'40px 32px 40px 32px'},
  h1:{fontSize:42, fontWeight:800, color:brand.navy, margin:'0 0 8px'},
  lead:{fontSize:18, color:brand.textMuted},
  tags:{display:'flex', flexWrap:'wrap', gap:8, margin:'14px 0 0', padding:0, listStyle:'none'},
  tag:{padding:'6px 10px', border:'1px solid ' + brand.border, borderRadius:9999, background:brand.white, fontSize:13},
  ctaRow:{display:'flex', gap:12, marginTop:18, flexWrap:'wrap'},
  btnPrimary:{
    display:'inline-block', padding:'10px 16px', borderRadius:9999, textDecoration:'none',
    background:brand.accent, color:brand.navyDark, fontWeight:700, border:'1px solid rgba(0,0,0,.08)'
  },
  btnOutline:{
    display:'inline-block', padding:'10px 16px', borderRadius:9999, textDecoration:'none',
    color:brand.navy, border:'1px solid ' + brand.navy
  },
  heroRight:{position:'relative', background:'linear-gradient(180deg, ' + brand.navyLight + ', ' + brand.navyDark + ')'},
  photo:{
    position:'absolute', right:0, bottom:0, top:0,
    display:'flex', alignItems:'flex-end', justifyContent:'flex-end',
    padding:'12px 12px 0 12px'
  },
  photoInner:{
    width:'100%', maxWidth:520, height:'100%', display:'flex', alignItems:'flex-end', justifyContent:'flex-end'
  },
  ribbon:{position:'absolute', left:16, bottom:16, background:brand.accent, color:brand.navyDark, padding:'6px 10px', borderRadius:9999, fontSize:12},

  section:{background:brand.white, border:'1px solid ' + brand.border, borderRadius:16, marginTop:18, padding:'24px 24px'},
  h2:{fontSize:26, fontWeight:800, color:brand.navy, margin:'0 0 8px'},
  gridCols3:{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16, marginTop:8},
  serviceCard:{border:'1px solid ' + brand.border, borderRadius:14, padding:16, background:brand.white},
  h3:{fontSize:18, fontWeight:700, color:brand.navyLight, margin:'0 0 6px'},
  note:{fontSize:12, color:'#475569', marginTop:8}
};

export default function Page(){
  const email = 'patrik.svoboda@wmfinance.cz';
  const phone = '774 697 755';

  return (
    <>
      {/* HERO v barevné kartě */}
      <section style={styles.card}>
        <div style={styles.hero}>
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
              <a href="/kalkulacky" style={styles.btnPrimary}>Otevřít kalkulačky</a>
              <a href={'mailto:'+email+'?subject=Konzultace'} style={styles.btnOutline}>Napsat · {email}</a>
              <a href={'tel:+420'+phone.replace(/\s/g,'')} style={styles.btnOutline}>Zavolat · {phone}</a>
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.photo}>
              <div style={styles.photoInner}>
                <img
                  src="/ja-bile-pozadi.jpg"
                  alt="Patrik Svoboda – finanční poradce"
                  style={{width:'100%', height:'auto', objectFit:'contain'}}
                />
              </div>
              <div style={styles.ribbon}><strong>EFA</strong> • Vysočina & celá ČR</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section style={styles.section}>
        <h2 style={styles.h2}>S čím pomáhám</h2>
        <div style={styles.gridCols3}>
          <div style={styles.serviceCard}>
            <h3 style={styles.h3}>Hypotéky</h3>
            <ul><li>Nákup i refinancování</li><li>Fixace a LTV</li><li>Kompletní vyřízení</li></ul>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={styles.h3}>Investice a renta</h3>
            <ul><li>ETF / akcie</li><li>Plán renty</li><li>Pravidelné vklady</li></ul>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={styles.h3}>Zajištění příjmu</h3>
            <ul><li>Invalidita, PN</li><li>Domácnost, nemovitost</li><li>Odpovědnost</li></ul>
          </div>
        </div>
        <p style={styles.note}>Detailní popis najdeš v sekci Služby.</p>
      </section>
    </>
  );
}
