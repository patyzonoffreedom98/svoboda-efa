// app/hypoteky-a-financovani/page.tsx
'use client';
import React, {useMemo, useState} from 'react';

const line = 'rgba(255,255,255,.15)';
const fmt = (v:number)=> new Intl.NumberFormat('cs-CZ',{style:'currency',currency:'CZK',maximumFractionDigits:0}).format(isFinite(v)?v:0);
const num = (s:string)=>{const x=Number(String(s).replace(/\s| |,/g,'.')); return isFinite(x)?x:0;};
function pmt(principal:number, years:number, rate:number){ const r=rate/100/12; const n=years*12; if(r===0) return principal/n; return principal*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1); }

export default function Hypo(){
  const [mtg,setMtg]=useState({principal:'3500000', years:'30', rate:'5.29'});
  const out=useMemo(()=>{const PMT=pmt(num(mtg.principal),num(mtg.years),num(mtg.rate)); const total=PMT*num(mtg.years)*12; return {PMT,total,interest:total-num(mtg.principal)};},[mtg]);

  return (
    <div style={{border:'1px solid '+line, borderRadius:16, padding:20}}>
      <h1 style={{marginTop:0}}>Hypotéky a financování</h1>
      <p>Zde bude popis služby – průběh, co řeším, jak šetřím čas a peníze.</p>

      <div style={{marginTop:16, border:'1px solid '+line, borderRadius:12, padding:16}}>
        <h2>Hypoteční kalkulačka</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <label style={{display:'grid', gap:6}}>
            <span>Výše úvěru</span>
            <input value={mtg.principal} onChange={e=>setMtg(s=>({...s,principal:e.target.value}))} inputMode="decimal"
              style={{padding:'8px 10px', border:'1px solid '+line, borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff'}}/>
          </label>
          <label style={{display:'grid', gap:6}}>
            <span>Doba (roky)</span>
            <input value={mtg.years} onChange={e=>setMtg(s=>({...s,years:e.target.value}))} inputMode="decimal"
              style={{padding:'8px 10px', border:'1px solid '+line, borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff'}}/>
          </label>
          <label style={{display:'grid', gap:6}}>
            <span>Úrok p.a. (%)</span>
            <input value={mtg.rate} onChange={e=>setMtg(s=>({...s,rate:e.target.value}))} inputMode="decimal"
              style={{padding:'8px 10px', border:'1px solid '+line, borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff'}}/>
          </label>
        </div>

        <div style={{marginTop:12, border:'1px solid '+line, borderRadius:10, padding:12}}>
          <div style={{display:'flex', justifyContent:'space-between', padding:'4px 0'}}><span>Měsíční splátka</span><strong>{fmt(out.PMT)}</strong></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'4px 0'}}><span>Celkem zaplaceno</span><strong>{fmt(out.total)}</strong></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'4px 0'}}><span>Z toho úroky</span><strong>{fmt(out.interest)}</strong></div>
        </div>
        <p style={{fontSize:12, opacity:.8, marginTop:8}}>*Orientační. Nejedná se o závaznou nabídku.</p>
      </div>
    </div>
  );
}
