"use client";
import { useMemo, useState } from "react";

const input = "input";
const fmt = (n:number)=>Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" Kč";
const num = (s:string)=>Number(s.toString().replace(/\s+/g,"").replace(/\./g,"").replace(/,/g,"."));
function Row({label,value}:{label:string;value:React.ReactNode}) {
  return <div className="row"><span style={{color:"var(--muted)"}}>{label}</span><strong>{value}</strong></div>;
}

export default function InvestCalc(){
  const [initial,setInitial]=useState("200 000");
  const [monthly,setMonthly]=useState("5 000");
  const [rate,setRate]=useState("7");     // p.a. %
  const [years,setYears]=useState("20");

  const res = useMemo(()=>{
    const P0=num(initial), PMT=num(monthly), annual=num(rate)/100, Y=num(years);
    if(P0<0||PMT<0||annual<0||Y<=0) return null;
    const r=annual/12, n=Y*12;
    const FV_lump = P0*Math.pow(1+r,n);
    const FV_pmt  = r===0 ? PMT*n : PMT*((Math.pow(1+r,n)-1)/r);
    const FV = FV_lump + FV_pmt;
    const contrib = P0 + PMT*n;
    const growth = FV - contrib;
    return { FV, contrib, growth };
  },[initial,monthly,rate,years]);

  return (
    <div className="card" style={{ maxWidth: 740 }}>
      <div className="grid">
        <label>Počáteční investice (Kč)
          <input className={input} value={initial} onChange={e=>setInitial(e.target.value)} inputMode="numeric"/>
        </label>
        <label>Měsíční vklad (Kč)
          <input className={input} value={monthly} onChange={e=>setMonthly(e.target.value)} inputMode="numeric"/>
        </label>
        <label>Zhodnocení p.a. (%)
          <input className={input} value={rate} onChange={e=>setRate(e.target.value)} inputMode="decimal"/>
        </label>
        <label>Doba (roky)
          <input className={input} value={years} onChange={e=>setYears(e.target.value)} inputMode="numeric"/>
        </label>
      </div>
      <hr style={{ border:0, borderTop:"1px solid var(--border)", margin:"12px 0" }}/>
      {res ? <>
        <Row label="Budoucí hodnota portfolia" value={fmt(res.FV)}/>
        <Row label="Celkové vklady" value={fmt(res.contrib)}/>
        <Row label="Zhodnocení (výnos)" value={fmt(res.growth)}/>
        <div className="small">Orientační výpočet. Poplatky/daně nejsou zahrnuty.</div>
      </> : <em>Zadejte platná čísla…</em>}
    </div>
  );
}
