'use client';
import { useState } from 'react';

export default function InvestCalc() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(20);
  const [realReturn, setRealReturn] = useState(5); // reálné p.a. %

  const n = years * 12;
  const r = realReturn / 100 / 12;
  const future = r === 0 ? monthly * n : monthly * (Math.pow(1 + r, n) - 1) / r;

  return (
    <div className="rounded-xl border border-white/10 p-4 bg-white/5 text-white">
      <h3 className="text-lg font-semibold mb-3">Investiční kalkulačka</h3>

      <label className="block mb-2 text-sm">Měsíční vklad (Kč)</label>
      <input type="number" className="w-full mb-3 px-3 py-2 rounded bg-white/90 text-black"
        value={monthly} onChange={e => setMonthly(+e.target.value)} />

      <label className="block mb-2 text-sm">Doba investování (let)</label>
      <input type="number" className="w-full mb-3 px-3 py-2 rounded bg-white/90 text-black"
        value={years} onChange={e => setYears(+e.target.value)} />

      <label className="block mb-2 text-sm">Reálné zhodnocení p.a. (%)</label>
      <input type="number" step="0.1" className="w-full mb-4 px-3 py-2 rounded bg-white/90 text-black"
        value={realReturn} onChange={e => setRealReturn(+e.target.value)} />

      <div>
        Naspořená částka: <strong>{Math.round(future).toLocaleString('cs-CZ')} Kč</strong>
      </div>
      <div className="text-xs opacity-80 mt-2">Jednoduchý model složeného úročení bez poplatků a daní.</div>
    </div>
  );
}
