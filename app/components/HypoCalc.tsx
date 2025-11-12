// app/components/HypoCalc.tsx
'use client';

import { useMemo, useState } from 'react';

type NumberLike = number | string;

function toNumber(v: NumberLike) {
  const n = typeof v === 'string' ? v.replace(',', '.').trim() : v;
  const parsed = Number(n);
  return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * Výpočet anuitní měsíční splátky
 * P ... jistina
 * r ... měsíční sazba (p.a. / 12)
 * n ... počet měsíců
 */
function annuity(P: number, rMonthly: number, n: number) {
  if (P <= 0 || rMonthly <= 0 || n <= 0) return 0;
  const num = P * rMonthly * Math.pow(1 + rMonthly, n);
  const den = Math.pow(1 + rMonthly, n) - 1;
  return num / den;
}

export default function HypoCalc() {
  const [amount, setAmount] = useState<NumberLike>('3 000 000');
  const [rate, setRate] = useState<NumberLike>('5.49'); // p.a. v %
  const [years, setYears] = useState<NumberLike>('30');

  const result = useMemo(() => {
    const P = toNumber(String(amount).replace(/\s/g, ''));
    const rMonthly = toNumber(rate) / 100 / 12;
    const n = Math.round(toNumber(years) * 12);

    const monthly = annuity(P, rMonthly, n);
    const totalPaid = monthly * n;
    const overpay = totalPaid - P;

    return {
      monthly,
      totalPaid,
      overpay,
      n,
      P,
    };
  }, [amount, rate, years]);

  const fmt = (n: number) =>
    n.toLocaleString('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 });

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="mb-4 text-xl font-semibold">Hypoteční kalkulačka (anuitní splátka)</h2>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-80">Výše úvěru (Kč)</span>
          <input
            inputMode="numeric"
            className="rounded-lg border border-white/20 bg-transparent px-3 py-2 outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-80">Úrok (p.a. %)</span>
          <input
            inputMode="decimal"
            className="rounded-lg border border-white/20 bg-transparent px-3 py-2 outline-none"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm opacity-80">Doba splatnosti (roky)</span>
          <input
            inputMode="numeric"
            className="rounded-lg border border-white/20 bg-transparent px-3 py-2 outline-none"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </label>
      </div>

      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        <div className="rounded-lg bg-black/20 p-4">
          <div className="text-sm opacity-75">Měsíční splátka</div>
          <div className="text-2xl font-bold">{fmt(result.monthly || 0)}</div>
        </div>
        <div className="rounded-lg bg-black/20 p-4">
          <div className="text-sm opacity-75">Celkem zaplaceno</div>
          <div className="text-2xl font-bold">{fmt(result.totalPaid || 0)}</div>
        </div>
        <div className="rounded-lg bg-black/20 p-4">
          <div className="text-sm opacity-75">Přeplaceno</div>
          <div className="text-2xl font-bold">{fmt(result.overpay || 0)}</div>
        </div>
      </div>

      <p className="mt-4 text-sm opacity-70">
        Výpočty jsou orientační a nezohledňují poplatky a pojistné. Rád připravím přesnou kalkulaci
        pro vaši situaci.
      </p>
    </div>
  );
}
