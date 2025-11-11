'use client';
import { useState } from 'react';

export default function HypoCalc() {
  const [amount, setAmount] = useState(3_000_000);
  const [rate, setRate] = useState(5.49);      // p.a. %
  const [years, setYears] = useState(30);

  const n = years * 12;
  const i = rate / 100 / 12;
  const payment = i === 0 ? amount / n : amount * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

  return (
    <div className="rounded-xl border border-white/10 p-4 bg-white/5 text-white">
      <h3 className="text-lg font-semibold mb-3">Hypoteční kalkulačka</h3>

      <label className="block mb-2 text-sm">Výše úvěru (Kč)</label>
      <input type="number" className="w-full mb-3 px-3 py-2 rounded bg-white/90 text-black"
        value={amount} onChange={e => setAmount(+e.target.value)} />

      <label className="block mb-2 text-sm">Úroková sazba p.a. (%)</label>
      <input type="number" step="0.01" className="w-full mb-3 px-3 py-2 rounded bg-white/90 text-black"
        value={rate} onChange={e => setRate(+e.target.value)} />

      <label className="block mb-2 text-sm">Doba splácení (let)</label>
      <input type="number" className="w-full mb-4 px-3 py-2 rounded bg-white/90 text-black"
        value={years} onChange={e => setYears(+e.target.value)} />

      <div className="text-base">
        <div>Měsíční splátka: <strong>{payment.toLocaleString('cs-CZ', { maximumFractionDigits: 0 })} Kč</strong></div>
        <div className="text-xs opacity-80 mt-2">Jednoduchá anuitní kalkulace. Nezohledňuje poplatky, pojištění apod.</div>
      </div>
    </div>
  );
}
