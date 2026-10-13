"use client";
import { useMemo, useState } from "react";
import { SliderField, ProjectionChart, balancePoints } from "./CalculatorVisuals";

const fmt = (n:number)=>Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" Kč";
const num = (s:string)=>Number(s.toString().replace(/\s+/g,"").replace(/,/g,"."));
function Row({label,value}:{label:string;value:React.ReactNode}) {
 return <div className="result-row"><span>{label}</span><strong>{value}</strong></div>;
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

  return <div className="fin-calculator calc-embedded"><section className="calculator-grid">
<div className="panel"><h2>Váš scénář</h2><p className="calc-controls-hint">Posuňte lištu nebo napište přesnou hodnotu.</p><div className="form-grid"><SliderField label="Počáteční kapitál" value={num(capital)} onChange={value => setCapital(String(value))} min={1000} max={30000000} step={10000} unit="Kč" />
<SliderField label="Zhodnocení p.a." value={num(rate)} onChange={value => setRate(String(value))} min={0} max={15} step={0.1} unit="%" />
<SliderField label="Doba čerpání" value={num(years)} onChange={value => setYears(String(value))} min={1} max={50} step={1} unit="let" />
<SliderField label="Indexace p.a." value={num(index)} onChange={value => setIndex(String(value))} min={0} max={10} step={0.1} unit="%" /></div></div>
<div className="panel result-panel"><h2 className="calc-result-heading">Orientační výsledek</h2>{res && <><div className="result-main"><p className="result-main-label">Měsíční renta bez indexace</p><p className="result-main-value">{fmt(res.PMT_const)}</p></div><ProjectionChart title="Postupné čerpání kapitálu" label="Zbývající kapitál bez indexace" points={balancePoints(num(capital), num(rate), num(years), res.PMT_const)}/><div className="result-table"><Row label="Počáteční renta s indexací" value={res.PMT_indexed != null ? fmt(res.PMT_indexed) : 'Pro tuto indexaci model není dostupný'}/><Row label="Doba čerpání" value={`${years} let`}/></div></>}<p className="note">Model počítá s vyčerpáním kapitálu na konci období. Graf zobrazuje variantu bez indexace. Poplatky a daně nejsou zahrnuty, výnos není garantovaný.</p></div>
</section></div>;
}
