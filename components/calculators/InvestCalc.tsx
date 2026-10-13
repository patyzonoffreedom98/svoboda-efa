"use client";
import { useMemo, useState } from "react";
import { SliderField, ProjectionChart, investmentPoints } from "./CalculatorVisuals";

const fmt = (n:number)=>Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" Kč";
const num = (s:string)=>Number(s.toString().replace(/\s+/g,"").replace(/,/g,"."));
function Row({label,value}:{label:string;value:React.ReactNode}) {
 return <div className="result-row"><span>{label}</span><strong>{value}</strong></div>;
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

  return <div className="fin-calculator calc-embedded"><section className="calculator-grid">
<div className="panel"><h2>Váš scénář</h2><p className="calc-controls-hint">Posuňte lištu nebo napište přesnou hodnotu.</p><div className="form-grid"><SliderField label="Počáteční investice" value={num(initial)} onChange={value => setInitial(String(value))} min={0} max={10000000} step={10000} unit="Kč" />
<SliderField label="Měsíční vklad" value={num(monthly)} onChange={value => setMonthly(String(value))} min={0} max={100000} step={500} unit="Kč" />
<SliderField label="Zhodnocení p.a." value={num(rate)} onChange={value => setRate(String(value))} min={0} max={15} step={0.1} unit="%" />
<SliderField label="Investiční horizont" value={num(years)} onChange={value => setYears(String(value))} min={1} max={50} step={1} unit="let" /></div></div>
<div className="panel result-panel"><h2 className="calc-result-heading">Orientační výsledek</h2>{res && <>
<div className="result-main"><p className="result-main-label">Budoucí hodnota portfolia</p><p className="result-main-value">{fmt(res.FV)}</p></div>
<ProjectionChart title="Jak může růst váš majetek" label="Hodnota investice" secondaryLabel="Vlastní vklady" points={investmentPoints(num(initial), num(monthly), num(rate), num(years))} />
<div className="result-table"><Row label="Celkové vklady" value={fmt(res.contrib)}/><Row label="Zhodnocení" value={fmt(res.growth)}/></div>
</>}<p className="note">Orientační model bez poplatků a daní. Skutečný vývoj může kolísat a výnos není garantovaný.</p></div>
</section></div>;
}
