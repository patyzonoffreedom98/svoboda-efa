// app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Patrik Svoboda, EFA – finanční plán, hypotéky, investice',
  description: 'Hypotéky, investice a zajištění příjmu. Kancelář v Jihlavě, spolupráce po celé ČR.',
};

const brand = {
  navy: '#0f1f3a',
  navyDark: '#0b162b',
  navyLight: '#102748',
  accent: '#d4a100',
  textLight: '#eef2f7',
};

const styles: {[k:string]: React.CSSProperties} = {
  body:{
    margin:0, padding:0,
    fontFamily:'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
    background:'linear-gradient(180deg,' + brand.navy + ' 0%,' + brand.navyLight + ' 60%,' + brand.navyDark + ' 100%)',
    color: brand.textLight,
    minHeight:'100vh'
  },
  container:{maxWidth:1180, margin:'0 auto', padding:'12px 20px 40px 20px'},
  header:{
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,.15)', marginBottom:16
  },
  logo:{fontWeight:800, letterSpacing:.3, fontSize:18, color:'#fff'},
  nav:{display:'flex', gap:10, flexWrap:'wrap'},
  navLink:{
    color:'#fff', textDecoration:'none', padding:'8px 12px', borderRadius:9999,
    border:'1px solid rgba(255,255,255,.25)', fontSize:14
  },
  main:{paddingTop:10},
  footer:{color:'rgba(255,255,255,.7)', fontSize:12, textAlign:'center', padding:'24px 0', borderTop:'1px solid rgba(255,255,255,.15)'}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body style={styles.body}>
        <div style={styles.container}>
          <header style={styles.header}>
            <div style={styles.logo}>Bc. Patrik Svoboda, EFA</div>
            <nav style={styles.nav}>
              <a href="/" style={styles.navLink}>Domů</a>
              <a href="/o-mne" style={styles.navLink}>O mně</a>
              <a href="/efa-certifikace" style={styles.navLink}>EFA certifikace</a>
              <a href="/hypoteky-a-financovani" style={styles.navLink}>Hypotéky a financování</a>
              <a href="/investice-a-cesta-k-rente" style={styles.navLink}>Investice a cesta k rentě</a>
              <a href="/zajisteni-prijmu-a-majetku" style={styles.navLink}>Zajištění příjmu a majetku</a>
              <a href="/podnikatelska-rizika" style={styles.navLink}>Podnikatelská rizika</a>
              <a href="/caste-otazky" style={styles.navLink}>Časté otázky</a>
              <a href="/ptejte-se" style={styles.navLink}>Ptejte se</a>
            </nav>
          </header>

          <main style={styles.main}>{children}</main>

          <footer style={styles.footer}>
            © {new Date().getFullYear()} Bc. Patrik Svoboda, EFA • Žižkova 13, Jihlava • IČO 09910263
          </footer>
        </div>
      </body>
    </html>
  );
}
