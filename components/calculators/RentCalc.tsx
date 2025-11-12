"use client";
import { useMemo, useState } from "react";

const input = "input";
const fmt = (n:number)=>Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" Kč";
const num = (s:string)=>Number(s.toString().replace(/\s+/g,"").replace(/\./g,"").replace(/,/g,"."));
function Row({label,value}:{label:string;value:React.ReactNode}) {
  return <div className="row"><span style={{color:"var(--muted)"}}>{label}</span><strong>{value}</strong></div>;
}

export default function RentCalc(){
  const [capital,setCapital]=useState("3 000 000");
  const [rate,setRate]=useState("5");   // p.a. %
  const [years,setYears]=useState("25");
  const [index,setIndex]=useState("0"); // p.a. %

  const res = useMemo(()=>{
    const PV=num(capital), annual=num(rate)/100, Y=num(years), idx=num(index)/100;
    if(PV<=0||annual<0||Y<=0||idx<0) return null;
    const r=annual/12, n=Y*12;
    const PMT_const = r===0 ? PV/n : (PV*r)/(1-Math.pow(1+r,-n));
    const g=idx/12;
    let PMT_indexed: number | null = null;
    if (g===0) PMT_indexed = PMT_const;
    else if (g>0 && g<r) PMT_indexed = (PV*(r-g))/(1-Math.pow((1+g)/(1+r),n));
    return { PMT_const, PMT_indexed };
  },[capital,rate,years,index]);

  return (
    <div className="card" style={{ maxWidth: 740 }}>
      <div className="grid">
        <label>Počáteční kapitál (Kč)
          <input className={input} value={capital} onChange={e=>setCapital(e.target.value)} inputMode="numeric"/>
        </label>
        <label>Zhodnocení p.a. (%)
          <input className={input} value={rate} onChange={e=>setRate(e.target.value)} inputMode="decimal"/>
        </label>
        <label>Doba čerpání (roky)
          <input className={input} value={years} onChange={e=>setYears(e.target.value)} inputMode="numeric"/>
        </label>
        <label>Indexace p.a. (%)
          <input className={input} value={index} onChange={e=>setIndex(e.target.value)} inputMode="decimal"/>
        </label>
      </div>
      <hr style={{ border:0, borderTop:"1px solid var(--border)", margin:"12px 0" }}/>
      <>
        <Row label="Měsíční renta (bez indexace)" value={res?fmt(res.PMT_const):"—"}/>
        <Row label="Měsíční renta (s indexací)" value={res && res.PMT_indexed!=null?fmt(res.PMT_indexed):"N/A (indexace ≥ výnos)"}/>
        <div className="small">Orientační výpočet. Poplatky/daně nejsou zahrnuty.</div>
      </>
    </div>
  );
}
