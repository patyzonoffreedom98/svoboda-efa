// app/investice-a-cesta-k-rente/page.tsx
'use client';
import React, {useMemo, useState} from 'react';
const line='rgba(255,255,255,.15)';
const fmt=(v:number)=>new Intl.NumberFormat('cs-CZ',{style:'currency',currency:'CZK',maximumFractionDigits:0}).format(isFinite(v)?v:0);
const num=(s:string)=>{const x=Number(String(s).replace(/\s| |,/g,'.')); return isFinite(x)?x:0;};
function fvMonthly(initial:number, monthly:number, years:number, rate:number){const r=rate/100/12; const n=years*12; const fvL=initial*Math.pow(1+r,n); const fvA=monthly*((Math.pow(1+r,n)-1)/r); return fvL+fvA;}
const realMonthly=(ret:number,inf:number)=>Math.pow((1+ret/100)/(1+inf/100),1/12)-1;
function needForRente(m:number,y:number,ret:number,inf:number){const r=realMonthly(ret,inf); const n=Math.max(1,Math.round(y*12)); if(Math.abs(r)<1e-8) return m*n; return m*(1-Math.pow(1+r,-n))/r;}
function lastsMonths(c:number,m:number,ret:number,inf:number){const r=realMonthly(ret,inf); if(Math.abs(r)<1e-8) return c/(m||1); const d=(m-r*c); if(d<=0) return Infinity; return Math.log(m/d)/Math.log(1+r);}

export default function Investice(){
  const [inv,setInv]=useState({initial:'100000', monthly:'5000', years:'15', rate:'7'});
  const invOut=useMemo(()=>{const FV=fvMonthly(num(inv.initial),num(inv.monthly),num(inv.years),num(inv.rate)); const invested=num(inv.initial)+num(inv.monthly)*num(inv.years)*12; return {FV,invested,gain:FV-invested};},[inv]);

  const [r,setR]=useState({monthly:'30000', years:'30', ret:'6', inf:'2.5', capital:'5000000'});
  const need=useMemo(()=>needForRente(num(r.monthly),num(r.years),num(r.ret),num(r.inf)),[r]);
  const lasts=useMemo(()=>lastsMonths(num(r.capital),num(r.monthly),num(r.ret),num(r.inf)),[r]);

  return (
    <div style={{border:'1px solid '+line, borderRadius:16, padding:20}}>
      <h1 style={{marginTop:0}}>Investice a cesta k rentě</h1>
      <p>Zde bude úvod ke strategii, riziku, plánu a disciplíně.</p>

      <div style={{marginTop:16, border:'1px solid '+line, borderRadius:12, padding:16}}>
        <h2>Investiční kalkulačka (měsíční vklady)</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <Field label="Počáteční vklad" v={inv.initial} onC={v=>setInv(s=>({...s,initial:v}))}/>
          <Field label="Měsíční vklad" v={inv.monthly} onC={v=>setInv(s=>({...s,monthly:v}))}/>
          <Field label="Počet let" v={inv.years} onC={v=>setInv(s=>({...s,years:v}))}/>
          <Field label="Zhodnocení p.a. (%)" v={inv.rate} onC={v=>setInv(s=>({...s,rate:v}))}/>
        </div>
        <Summary rows={[
          ['Celkem investováno', fmt(num(inv.initial)+num(inv.monthly)*num(inv.years)*12)],
          ['Odhadovaný výsledek', fmt(invOut.FV)],
          ['Odhadovaný výnos', fmt(invOut.gain)],
        ]}/>
      </div>

      <div style={{marginTop:16, border:'1px solid '+line, borderRadius:12, padding:16}}>
        <h2>Cesta k rentě</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <Field label="Měsíční renta" v={r.monthly} onC={v=>setR(s=>({...s,monthly:v}))}/>
          <Field label="Doba čerpání (roky)" v={r.years} onC={v=>setR(s=>({...s,years:v}))}/>
          <Field label="Výnos p.a. (%)" v={r.ret} onC={v=>setR(s=>({...s,ret:v}))}/>
          <Field label="Inflace p.a. (%)" v={r.inf} onC={v=>setR(s=>({...s,inf:v}))}/>
          <Field label="Výchozí kapitál" v={r.capital} onC={v=>setR(s=>({...s,capital:v}))}/>
        </div>
        <Summary rows={[
          ['Potřebný kapitál (v dnešních cenách)', fmt(need)],
          ['Portfolio vydrží (let)', (lasts/12>1000)? 'prakticky udržitelné' : (lasts/12).toFixed(1) + ' roku'],
        ]}/>
      </div>
    </div>
  );
}

function Field({label,v,onC}:{label:string;v:string;onC:(x:string)=>void}){
  return (
    <label style={{display:'grid', gap:6}}>
      <span>{label}</span>
      <input value={v} onChange={e=>onC(e.target.value)} inputMode="decimal"
        style={{padding:'8px 10px', border:'1px solid '+line, borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff'}}/>
    </label>
  );
}
function Summary({rows}:{rows:[string,string|number][]}){
  return (
    <div style={{marginTop:12, border:'1px solid '+line, borderRadius:10, padding:12}}>
      {rows.map(([k,val])=>(
        <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'4px 0'}}><span>{k}</span><strong>{val}</strong></div>
      ))}
      <p style={{fontSize:12, opacity:.8, marginTop:8}}>*Ilustrační výpočty, nezohledňují poplatky a daně.</p>
    </div>
  );
}
