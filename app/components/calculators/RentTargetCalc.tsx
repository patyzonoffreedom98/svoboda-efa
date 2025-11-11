'use client';
import { useState } from 'react';

export default function RentTargetCalc() {
  const [monthlyRent, setMonthlyRent] = useState(30000);
  const [years, setYears] = useState(25);
  const [realReturn, setRealReturn] = useState(3.5); // bezpečné reálné zhodnocení p.a. %

  // jednoduchá varianta 4% rule analogie: kapitál ≈ roční renta / safe withdrawal rate
  const swr = realReturn / 100; // reálné „bezpečné“ čerpání ~ zhodnocení
  const needed = swr > 0 ? (monthlyRent * 12) / swr : 0;

  return (
    <div className="rounded-xl border border-white/10 p-4 bg-white/5 text-white">
      <h4 className="text-lg font-semibold mb-3">Cesta k rentě – cílový kapitál</h4>

      <label className="block mb-2 text-sm">Požadovaná měsíční renta (Kč)</label>
      <input type="number" className="w-full mb-3 px-3 py-2 rounded bg-white/90 text-black"
        value={monthlyRent} onChange={e => setMonthlyRent(+e.target.value)} />

      <label className="block mb-2 text-sm">Horizont čerpání (let)</label>
      <input type="number" className="w-full mb-3 px-3 py-2 rounded bg-white/90 text-black"
        value={years} onChange={e => setYears(+e.target.value)} />

      <label className="block mb-2 text-sm">Reálné zhodnocení p.a. (%)</label>
      <input type="number" step="0.1" className="w-full mb-4 px-3 py-2 rounded bg-white/90 text-black"
        value={realReturn} onChange={e => setRealReturn(+e.target.value)} />

      <div>
        Orientační kapitál pro danou rentu: <strong>{Math.round(needed).toLocaleString('cs-CZ')} Kč</strong>
      </div>
      <div className="text-xs opacity-80 mt-2">Zjednodušený model (≈ „4% pravidlo“ v reálném vyjádření). Finální plán dopočítáme spolu.</div>
    </div>
  );
}
