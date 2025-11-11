// app/kalkulacky/page.tsx
'use client';
import React, { useMemo, useState } from 'react';

const brand = {
  navy: '#0f1f3a',
  navyLight: '#102748',
  accent: '#d4a100',
  bgSoft: '#f5f7fb',
  text: '#0f172a',
  textMuted: '#334155',
  border: '#e2e8f0',
  white: '#ffffff',
};

const styles: {[k:string]: React.CSSProperties} = {
  wrap:{maxWidth:1160, margin:'0 auto'},
  header:{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10},
  h1:{fontSize:34, fontWeight:800, color:brand.navy, margin:'0'},
  note:{fontSize:12, color:'#475569'},
  grid:{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:16},
  card:{border:'1px solid ' + brand.border, background:brand.white, borderRadius:16, padding:16},
  h3:{fontSize:18, fontWeight:700, color:brand.navyLight},
  grid2:{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12},
  input:{width:'100%', padding:'8px 10px', border:'1px solid ' + brand.border, borderRadius:10}
};

const fmt = (v:number)=> new Intl.NumberFormat('cs-CZ',{style:'currency',currency:'CZK',maximumFractionDigits:0}).format(isFinite(v)?v:0);
const num = (s:string)=>{const x = Number(String(s).replace(/\s| |,/g,'.')); return isFinite(x)?x:0;};

function fvMonthly(initial:number, monthly:number, years:number, rate:number){
  const r = rate/100/12; const n = years*12;
  const fvLump = initial * Math.pow(1+r, n);
  const fvAnn  = monthly * ((Math.pow(1+r, n) - 1) / r);
  return fvLump + fvAnn;
}
function pmt(principal:number, years:number, rate:number){
  const r = rate/100/12; const n = years*12;
  if (r===0) return principal/n;
  return principal * (r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
}
const realMonthly = (ret:number, inf:number)=> Math.pow((1+ret/100)/(1+inf/100), 1/12)-1;
function needForRente(monthlyRent:number, years:number, ret:number, inf:number){
  const r = realMonthly(ret, inf); const n = Math.max(1, Math.round(years*12));
  if (Math.abs(r)<1e-8) return monthlyRent * n;
  return monthlyRent * (1 - Math.pow(1+r, -n)) / r;
}
function lastsMonths(cap:number, monthly:number, ret:number, inf:number){
  const r = realMonthly(ret, inf);
  if (Math.abs(r)<1e-8) return cap / (monthly||1);
  const denom = (monthly - r*cap);
  if (denom <= 0) return Infinity;
  return Math.log(monthly/denom)/Math.log(1+r);
}

function Field({label,value,onChange}:{label:string;value:string;onChange:(v:string)=>void}){
  return (
    <label style={{display:'grid', gap:6, fontSize:13}}>
      <span>{label}</span>
      <input value={value} onChange={e=>onChange(e.target.value)} inputMode="decimal" style={styles.input}/>
    </label>
  );
}
function Summary({rows}:{rows:[string, string|number][]}){
  return (
    <div style={{background:brand.bgSoft, border:'1px solid ' + brand.border, borderRadius:12, padding:12, marginTop:12, fontSize:14}}>
      {rows.map(([k,v])=>(
        <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'4px 0'}}>
          <span>{k}</span><strong>{v}</strong>
        </div>
      ))}
    </div>
  );
}

export default function KalkulackyPage(){
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
    <div style={styles.wrap}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Kalkulačky</h1>
        <div className="note" style={styles.note}>Ilustrační výpočty, nezohledňují poplatky a daně.</div>
      </div>

      <div style={styles.grid}>
        {/* Investice */}
        <div style={styles.card}>
          <h3 style={styles.h3}>Investiční kalkulačka</h3>
          <div style={styles.grid2}>
            <Field label="Počáteční vklad" value={inv.initial} onChange={v=>setInv(s=>({...s,initial:v}))}/>
            <Field label="Měsíční vklad" value={inv.monthly} onChange={v=>setInv(s=>({...s,monthly:v}))}/>
            <Field label="Počet let" value={inv.years} onChange={v=>setInv(s=>({...s,years:v}))}/>
            <Field label="Zhodnocení p.a. (%)" value={inv.rate} onChange={v=>setInv(s=>({...s,rate:v}))}/>
          </div>
          <Summary rows={[
            ['Celkem investováno', fmt(num(inv.initial)+num(inv.monthly)*num(inv.years)*12)],
            ['Odhadovaný výsledek', fmt(invOut.FV)],
            ['Odhadovaný výnos', fmt(invOut.gain)],
          ]}/>
        </div>

        {/* Hypotéka */}
        <div style={styles.card}>
          <h3 style={styles.h3}>Hypoteční kalkulačka</h3>
          <div style={styles.grid2}>
            <Field label="Výše úvěru" value={mtg.principal} onChange={v=>setMtg(s=>({...s,principal:v}))}/>
            <Field label="Doba (roky)" value={mtg.years} onChange={v=>setMtg(s=>({...s,years:v}))}/>
            <Field label="Úrok p.a. (%)" value={mtg.rate} onChange={v=>setMtg(s=>({...s,rate:v}))}/>
          </div>
          <Summary rows={[
            ['Měsíční splátka', fmt(mtgOut.PMT)],
            ['Celkem zaplaceno', fmt(mtgOut.total)],
            ['Z toho úroky', fmt(mtgOut.interest)],
          ]}/>
        </div>

        {/* Renta */}
        <div style={styles.card}>
          <h3 style={styles.h3}>Cesta k rentě</h3>
          <div style={styles.grid2}>
            <Field label="Měsíční renta (v dnešních cenách)" value={r.monthly} onChange={v=>setR(s=>({...s,monthly:v,mode:'need'}))}/>
            <Field label="Doba čerpání (roky)" value={r.years} onChange={v=>setR(s=>({...s,years:v,mode:'need'}))}/>
            <Field label="Výnos p.a. (%)" value={r.ret} onChange={v=>setR(s=>({...s,ret:v,mode:'need'}))}/>
            <Field label="Inflace p.a. (%)" value={r.inf} onChange={v=>setR(s=>({...s,inf:v,mode:'need'}))}/>
          </div>
          <Summary rows={[
            ['Potřebný kapitál (v dnešních cenách)', rOut.need!==null ? fmt(rOut.need) : '—'],
          ]}/>
          <div style={{height:10}}/>
          <div style={styles.grid2}>
            <Field label="Výchozí kapitál" value={r.capital} onChange={v=>setR(s=>({...s,capital:v,mode:'lasts'}))}/>
            <Field label="Měsíční renta" value={r.monthly} onChange={v=>setR(s=>({...s,monthly:v,mode:'lasts'}))}/>
            <Field label="Výnos p.a. (%)" value={r.ret} onChange={v=>setR(s=>({...s,ret:v,mode:'lasts'}))}/>
            <Field label="Inflace p.a. (%)" value={r.inf} onChange={v=>setR(s=>({...s,inf:v,mode:'lasts'}))}/>
          </div>
          <Summary rows={[
            ['Portfolio vydrží (let)', rOut.lasts!==null ? (rOut.lasts/12>1000 ? 'prakticky udržitelné' : (rOut.lasts/12).toFixed(1)+' roku') : '—'],
          ]}/>
        </div>
      </div>
    </div>
  );
}
