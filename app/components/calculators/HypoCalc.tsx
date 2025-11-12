'use client';

import { useMemo, useState } from 'react';

export default function HypoCalc() {
  // vstupy
  const [loan, setLoan] = useState(4_000_000);      // výše úvěru
  const [rate, setRate] = useState(5.49);           // p.a. %
  const [years, setYears] = useState(30);           // doba splatnosti v letech

  // výpočet anuitní splátky
  const monthly = useMemo(() => {
    const n = years * 12;
    const i = rate / 100 / 12;
    if (i === 0) return loan / n;
    const a = (loan * i) / (1 - Math.pow(1 + i, -n));
    return a;
  }, [loan, rate, years]);

  return (
    <div className="space-y-4 rounded-2xl p-4 bg-white/5">
      <h3 className="text-xl font-semibold">Hypoteční kalkulačka</h3>

      <label className="block">
        <span className="text-sm opacity-80">Výše úvěru (Kč)</span>
        <input
          type="number"
          className="mt-1 w-full rounded-md bg-white/10 px-3 py-2"
          value={loan}
          onChange={(e) => setLoan(Number(e.target.value))}
        />
      </label>

      <label className="block">
        <span className="text-sm opacity-80">Úrok p.a. (%)</span>
        <input
          type="number"
          step="0.01"
          className="mt-1 w-full rounded-md bg-white/10 px-3 py-2"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </label>

      <label className="block">
        <span className="text-sm opacity-80">Splatnost (roky)</span>
        <input
          type="number"
          className="mt-1 w-full rounded-md bg-white/10 px-3 py-2"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </label>

      <div className="pt-2 text-lg">
        <div>Měsíční splátka: <strong>{Math.round(monthly).toLocaleString('cs-CZ')} Kč</strong></div>
      </div>

      <p className="text-xs opacity-70">
        Nejedná se o závaznou nabídku. Výsledek je orientační – konkrétní podmínky závisí na bance a bonitě.
      </p>
    </div>
  );
}
