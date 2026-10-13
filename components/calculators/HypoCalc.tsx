"use client";
import CalculatorPdfButton from "./CalculatorPdfButton";
import { useMemo, useState } from "react";
import { SliderField, ProjectionChart, balancePoints } from "./CalculatorVisuals";

const fmt = (n: number) =>
  Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Kč";
const num = (s: string) =>
  Number(s.toString().replace(/\s+/g, "").replace(/,/g, "."));

function Row({label,value}:{label:string;value:React.ReactNode}) {
 return <div className="result-row"><span>{label}</span><strong>{value}</strong></div>;
}

export default function HypoCalc() {
  const [principal, setPrincipal] = useState("3 500 000");
  const [rate, setRate] = useState("5.29"); // p.a. %
  const [years, setYears] = useState("30");

  const res = useMemo(() => {
    const P = num(principal);
    const annual = num(rate) / 100;
    const Y = num(years);
    if (P <= 0 || annual < 0 || Y <= 0) return null;
    const r = annual / 12;
    const n = Y * 12;
    const M = r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
    return { M, total: M * n, interest: M * n - P, n };
  }, [principal, rate, years]);

  return <div className="fin-calculator calc-embedded"><section className="calculator-grid">
<div className="panel"><h2>Váš scénář</h2><p className="calc-controls-hint">Posuňte lištu nebo napište přesnou hodnotu.</p><div className="form-grid"><SliderField label="Výše úvěru" value={num(principal)} onChange={value => setPrincipal(String(value))} min={1000} max={30000000} step={100000} unit="Kč" />
<SliderField label="Úrok p.a." value={num(rate)} onChange={value => setRate(String(value))} min={0} max={15} step={0.01} unit="%" />
<SliderField label="Splatnost" value={num(years)} onChange={value => setYears(String(value))} min={1} max={40} step={1} unit="let" /></div></div>
<div className="panel result-panel"><h2 className="calc-result-heading">Orientační výsledek</h2>{res && <><div className="result-main"><p className="result-main-label">Orientační měsíční splátka</p><p className="result-main-value">{fmt(res.M)}</p></div><ProjectionChart title="Cesta k vlastnímu bydlení" label="Zbývá splatit" points={balancePoints(num(principal), num(rate), num(years), res.M)}/><div className="result-table"><Row label="Celkem zaplatíte" value={fmt(res.total)}/><Row label="Z toho úroky" value={fmt(res.interest)}/></div></>}<p className="note">Orientační výpočet při stejné sazbě po celou dobu splácení, bez poplatků a pojištění.</p><CalculatorPdfButton title="Hypoteční kalkulačka" /></div>
</section></div>;
}
