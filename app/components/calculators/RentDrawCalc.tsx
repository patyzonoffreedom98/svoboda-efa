'use client';
import { useState } from 'react';

export default function RentDrawCalc() {
  const [capital, setCapital] = useState(5_000_000);
  const [monthlyRent, setMonthlyRent] = useState(30000);
  const [realReturn, setRealReturn] = useState(3); // p.a. %

  const r = realReturn / 100 / 12;
  const payment = monthlyRent;
  // Anuita z druhé strany – doba čerpání (kolik splátek, než kapitál klesne k 0)
  const months =
    r === 0 ? (capital / payment) :
    Math.log(payment / (payment - capital * r)) / Math.log(1 + r);

  const years = Math.max(0, months) / 12;

  return (
    <div className="rounded-xl border border-white/10 p-4 bg-white/5 text-white">
      <h4 className="text-lg font-semibold mb-3">Čerpání renty – jak dlouho vydrží kapitál</h4>

      <label className="block mb-2 text-sm">Kapitál (Kč)</label>
      <input type="number" className="w-full mb-3 px-3 py-2 rounded bg-white/90 text-black"
        value={capital} onChange={e => setCapital(+e.target.value)} />

      <label className="block mb-2 text-sm">Měsíční renta (Kč)</label>
      <input type="number" className="w-full mb-3 px-3 py-2 rounded bg-white/90 text-black"
        value={monthlyRent} onChange={e => setMonthlyRent(+e.target.value)} />

      <label className="block mb-2 text-sm">Reálné zhodnocení p.a. (%)</label>
      <input type="number" step="0.1" className="w-full mb-4 px-3 py-2 rounded bg-white/90 text-black"
        value={realReturn} onChange={e => setRealReturn(+e.target.value)} />

      <div>
        Orientačně vydrží: <strong>{isFinite(years) ? years.toFixed(1) : '—'} let</strong>
      </div>
      <div className="text-xs opacity-80 mt-2">Jednoduchý model reálného čerpání bez daní/poplatků a s konstantní rentou.</div>
    </div>
  );
}
