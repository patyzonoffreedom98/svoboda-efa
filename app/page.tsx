'use client';
import React, { useMemo, useState } from 'react';

/** ───────── Brand (barvy) ───────── */
const brand = {
  navy: '#0f1f3a',
  navyDark: '#0b162b',
  navyLight: '#102748',
  accent: '#d4a100',
  bgSoft: '#f5f7fb',
  text: '#0f172a',
  textMuted: '#334155',
  border: '#e2e8f0',
  white: '#ffffff',
};

/** ───────── Pomocné funkce ───────── */
const fmt = (v:number)=> new Intl.NumberFormat('cs-CZ', {style:'currency',currency:'CZK',maximumFractionDigits:0}).format(isFinite(v)?v:0);
const num = (s:string)=>{const x = Number(String(s).replace(/\s| |,/g,'.')); return isFinite(x)?x:0;};

// FV měsíčních vkladů
function fvMonthly(initial:number, monthly:number, years:number, rate:number){
  const r = rate/100/12; const n = years*12;
  const fvLump = initial * Math.pow(1+r, n);
  const fvAnn  = monthly * ((Math.pow(1+r, n) - 1) / r);
  return fvLump + fvAnn;
}
// anuitní splátka hypotéky
function pmt(principal:number, years:number, rate:number){
  const r = rate/100/12; const n = years*12;
  if (r===0) return principal/n;
  return principal * (r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
}
// reálná měsíční sazba z nominálu a inflace
const realMonthly = (ret:number, inf:number)=> Math.pow((1+ret/100)/(1+inf/100), 1/12)-1;
// potřebný kapitál pro cílovou reálnou rentu
function needForRente(monthlyRent:number, years:number, ret:number, inf:number){
  const r = realMonthly(ret, inf); const n = Math.max(1, Math.round(years*12));
  if (Math.abs(r)<1e-8) return monthlyRent * n;
  return monthlyRent * (1 - Math.pow(1+r, -n)) / r;
}
// jak dlouho vydrží kapitál (měsíce)
function lastsMonths(capital:number, monthlyRent:number, ret:number, inf:number){
  const r = realMonthly(ret, inf);
  if (Math.abs(r)<1e-8) return capital / (monthlyRent||1);
  const denom = (monthlyRent - r*capital);
  if (denom <= 0) return Infinity;
  return Math.log(monthlyRent/denom)/Math.log(1+r);
}

/** ───────── Stránka ───────── */
export default function Page(){
  const phone = '774 697 755';
  const email = 'patrik.svoboda@wmfinance.cz';
  const address = 'Žižkova 13, Jihlava';

  // Investiční
  const [inv, setInv] = useState({initial:'100000', monthly:'5000', years:'15', rate:'7'});
  const invOut = useMemo(()=>{
    const FV = fvMonthly(num(inv.initial), num(inv.monthly), num(inv.years), num(inv.rate));
    const invested = num(inv.initial) + num(inv.monthly)*num(inv.years)*12;
    return { FV, invested, gain: FV - invested };
  },[inv]);

  // Hypotéka
  const [mtg, setMtg] = useState({principal:'3500000', years:'30', rate:'5.29'});
  const mtgOut = useMemo(()=>{
    const PMT = pmt(num(mtg.principal), num(mtg.years), num(mtg.rate));
    const total = PMT * num(mtg.years) * 12;
    return { PMT, total, interest: total - num(mtg.principal) };
  },[mtg]);

  // Renta
  const [r, setR] = useState({monthly:'30000', years:'30', ret:'6', inf:'2.5', capital:'5000000', mode:'need' as 'need'|'lasts'});
  const rOut = useMemo(()=>{
    if (r.mode==='need') return {need: needForRente(num(r.monthly), num(r.years), num(r.ret), num(r.inf)), lasts: null};
    const m = lastsMonths(num(r.capital), num(r.monthly), num(r.ret), num(r.inf));
    return {need: null, lasts: m};
  },[r]);

  return (
    <main style={styles.wrap}>
      {/* ───────── Hero s fotkou ───────── */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}>
          <div style={styles.heroText}>
            <h1 style={styles.h1}>Bc. Patrik Svoboda, EFA</h1>
            <p style={styles.lead}>
              Finanční plán, který obstojí v číslech i realitě. Spolupracuji s klienty po celé ČR,
              hlavní kancelář mám v Jihlavě ({address}).
            </p>
            <ul style={styles.tags}>
              {[
                'Hypotéky a refinancování',
                'Investice a cesta k rentě',
                'Zajištění příjmu',
                'Podnikatelská rizika',
                'Zaměstnanecké benefity',
                'Lidský přístup'
              ].map(t=>(
                <li key={t} style={styles.tag}>{t}</li>
              ))}
            </ul>
            <div style={{display:'flex',gap:12, marginTop:18, flexWrap:'wrap'}}>
              <a href="#kalk" style={styles.btnPrimary}>Vyzkoušet kalkulačky</a>
              <a href={`mailto:${email}?subject=Konzultace`} style={styles.btnOutline}>Domluvit konzultaci · {phone}</a>
            </div>
          </div>

          <div style={styles.heroPhotoWrap}>
            <div style={styles.photoCard}>
              <img
                src="/ja-bile-pozadi.jpg"
                alt="Patrik Svoboda – finanční poradce"
                style={{width:'100%',height:'auto',display:'block', borderRadius:12}}
              />
              <div style={styles.ribbon}>
                <span style={{fontWeight:700}}>EFA</span> • Vysočina &nbsp;&amp;&nbsp; celá ČR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Služby ───────── */}
      <section id="sluzby" style={styles.section}>
        <h2 style={styles.h2}>S čím pomáhám</h2>
        <div style={styles.cols3}>
          {card('Hypotéky',['Nákup i refinancování','Fixace a LTV','Kompletní vyřízení'])}
          {card('Investice a renta',['ETF/akcie','Plán renty','Pravidelné vklady'])}
          {card('Zajištění příjmu a majetku',['Invalidita, PN','Domácnost a nemovitost','Odpovědnost'])}
        </div>
        <div style={styles.cols2}>
          {card('Podnikatelská rizika',['Odpovědnost a majetek firmy','Flotily','Přerušení provozu'])}
          {card('Zaměstnanecké benefity',['Daňově efektivní nastavení','Komunikace se zaměstnanci','Dlouhodobá správa'])}
        </div>
      </section>

      {/* ───────── Kalkulačky ───────── */}
      <section id="kalk" style={styles.section}>
        <h2 style={styles.h2}>Interaktivní kalkulačky</h2>

        <div style={styles.cols2}>
          <div style={styles.card}>
            <h3 style={styles.h3}>Investiční kalkulačka</h3>
            <div style={styles.grid2}>
              {field('Počáteční vklad', inv.initial, v=>setInv(s=>({...s,initial:v})))}
              {field('Měsíční vklad', inv.monthly, v=>setInv(s=>({...s,monthly:v})))}
              {field('Počet let', inv.years, v=>setInv(s=>
                ({...s,years:v})))}
              {field('Zhodnocení p.a. (%)', inv.rate, v=>setInv(s=>({...s,rate:v})))}
            </div>
            {summary([
              ['Celkem investováno', fmt(num(inv.initial)+num(inv.monthly)*num(inv.years)*12)],
              ['Odhadovaný výsledek', fmt(invOut.FV)],
              ['Odhadovaný výnos', fmt(invOut.gain)],
            ])}
            <p style={styles.note}>*Ilustrační výpočet, nezohledňuje poplatky a daně.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.h3}>Hypoteční kalkulačka</h3>
            <div style={styles.grid2}>
              {field('Výše úvěru', mtg.principal, v=>setMtg(s=>({...s,principal:v})))}
              {field('Doba (roky)', mtg.years, v=>setMtg(s=>({...s,years:v})))}
              {field('Úrok p.a. (%)', mtg.rate, v=>setMtg(s=>({...s,rate:v})))}
            </div>
            {summary([
              ['Měsíční splátka', fmt(mtgOut.PMT)],
              ['Celkem zaplaceno', fmt(mtgOut.total)],
              ['Z toho úroky', fmt(mtgOut.interest)],
            ])}
            <p style={styles.note}>*Orientační. Nejedná se o závaznou nabídku.</p>
          </div>
        </div>

        <div style={styles.cols2}>
          <div style={styles.card}>
            <h3 style={styles.h3}>Cesta k rentě – potřebný kapitál</h3>
            <div style={styles.grid2}>
              {field('Měsíční renta (v dnešních cenách)', r.monthly, v=>setR(s=>({...s,monthly:v,mode:'need'})))}
              {field('Doba čerpání (roky)', r.years, v=>setR(s=>({...s,years:v,mode:'need'})))}
              {field('Výnos p.a. (%)', r.ret, v=>setR(s=>({...s,ret:v,mode:'need'})))}
              {field('Inflace p.a. (%)', r.inf, v=>setR(s=>({...s,inf:v,mode:'need'})))}
            </div>
            {summary([
              ['Potřebný kapitál (v dnešních cenách)', rOut.need!==null ? fmt(rOut.need) : '—'],
            ])}
            <p style={styles.note}>*Výpočet pracuje s reálným výnosem (očištěno o inflaci).</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.h3}>Cesta k rentě – jak dlouho vydrží kapitál</h3>
            <div style={styles.grid2}>
              {field('Výchozí kapitál', r.capital, v=>setR(s=>({...s,capital:v,mode:'lasts'})))}
              {field('Měsíční renta', r.monthly, v=>setR(s=>({...s,monthly:v,mode:'lasts'})))}
              {field('Výnos p.a. (%)', r.ret, v=>setR(s=>({...s,ret:v,mode:'lasts'})))}
              {field('Inflace p.a. (%)', r.inf, v=>setR(s=>({...s,inf:v,mode:'lasts'})))}
            </div>
            {summary([
              ['Portfolio vydrží (let)', rOut.lasts!==null ? (rOut.lasts/12>1000 ? 'prakticky udržitelné' : (rOut.lasts/12).toFixed(1)+' roku') : '—'],
            ])}
          </div>
        </div>
      </section>

      {/* ───────── O mně ───────── */}
      <section id="o-mne" style={styles.section}>
        <h2 style={styles.h2}>O mně</h2>
        <p>Jsem <strong>Bc. Patrik Svoboda</strong>, certifikovaný <strong>European Financial Advisor (EFA)</strong>. Spolupracuji s klienty po celé ČR; hlavní kancelář mám v <strong>Jihlavě (Žižkova 13)</strong>. Pomáhám s investicemi, hypotékami a ochranou příjmu a majetku.</p>
        <ul>
          <li>EFA certifikace</li>
          <li>Hypotéky</li>
          <li>Dlouhodobá péče</li>
          <li>Odbornost</li>
          <li>Lidský přístup</li>
        </ul>
        <p style={styles.note}>EFA v ČR drží přibližně 1 % poradců; na Vysočině je jich aktuálně zhruba 8. Certifikace potvrzuje odbornost napříč investicemi, úvěry, pojištěním i orientaci v právních a daňových souvislostech.</p>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" style={styles.section}>
        <h2 style={styles.h2}>FAQ (otázky)</h2>
        <ol>
          <li>Do čeho je v dnešní době nejlepší investovat?</li>
          <li>Kolik potřebuju peněz, abych si mohl vzít hypotéku?</li>
          <li>Proč bych měl mít v pojistce krytí invalidity?</li>
        </ol>
      </section>

      {/* ───────── Kontakt ───────── */}
      <section id="kontakt" style={{...styles.section, background:brand.navy, color:brand.white, borderRadius:16}}>
        <h2 style={{...styles.h2, color:brand.white}}>Kontakt</h2>
        <p>Osobně na Vysočině nebo online po celé ČR. Kancelář: {address}</p>
        <p><strong>Tel.:</strong> {phone} &nbsp; • &nbsp; <strong>E-mail:</strong> {email}</p>
        <p><a href={`mailto:${email}?subject=Poptávka z webu`} style={styles.btnLight}>Odeslat poptávku e-mailem</a></p>
        <p style={{fontSize:12, opacity:.85}}>IČO: 09910263 • Pracovní doba: Po–Pá 8:00–18:00</p>
      </section>

      <footer style={{textAlign:'center', color:'#64748b', fontSize:12, margin:'40px 0'}}>
        © {new Date().getFullYear()} Bc. Patrik Svoboda, EFA • {address}
      </footer>
    </main>
  );
}

/** ───────── Styly (inline objekty) ───────── */
const styles: {[k:string]: React.CSSProperties} = {
  wrap:{fontFamily:'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', color:brand.text, lineHeight:1.5, background:brand.white},

  hero:{
    padding:'56px 20px',
    background:`linear-gradient(180deg, ${brand.bgSoft}, ${brand.white})`,
    borderBottom:`1px solid ${brand.border}`
  },
  heroGrid:{
    maxWidth:1140, margin:'0 auto',
    display:'grid', gap:24,
    gridTemplateColumns:'1.2fr .8fr',
    alignItems:'center'
  },
  heroText:{},
  heroPhotoWrap:{display:'flex', justifyContent:'flex-end'},
  photoCard:{
    position:'relative',
    maxWidth:460,
    background:brand.white,
    border:`1px solid ${brand.border}`,
    bord
