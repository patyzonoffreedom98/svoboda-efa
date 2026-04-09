'use client';

import { useMemo, useState } from 'react';

export default function HypotekaPage() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [loanAmount, setLoanAmount] = useState(4000000);
  const [interestRate, setInterestRate] = useState(4.89);
  const [years, setYears] = useState(30);

  const result = useMemo(() => {
    const principal = Number(loanAmount) || 0;
    const annualRate = Number(interestRate) || 0;
    const totalYears = Number(years) || 0;
    const property = Number(propertyValue) || 0;

    const months = totalYears * 12;
    const monthlyRate = annualRate / 100 / 12;

    let monthlyPayment = 0;

    if (principal > 0 && months > 0) {
      if (monthlyRate === 0) {
        monthlyPayment = principal / months;
      } else {
        monthlyPayment =
          (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
      }
    }

    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - principal;
    const ltv = property > 0 ? (principal / property) * 100 : 0;
    const recommendedIncome = monthlyPayment / 0.45;

    return {
      monthlyPayment,
      totalPaid,
      totalInterest,
      ltv,
      recommendedIncome,
    };
  }, [loanAmount, interestRate, years, propertyValue]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
    }).format(value);

  const formatPercent = (value: number) =>
    new Intl.NumberFormat('cs-CZ', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);

  return (
    <main className="min-h-screen bg-[#0B1220] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#C6A55C]">
            Kalkulačka
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Hypoteční kalkulačka
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
            Orientační výpočet splátky hypotéky, celkově zaplacených úroků a LTV.
            Výsledek slouží pro rychlou představu, ne jako závazná nabídka banky.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <h2 className="mb-6 text-2xl font-semibold">Zadejte parametry</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Hodnota nemovitosti
                </label>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-[#C6A55C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Výše hypotéky
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-[#C6A55C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Úroková sazba p.a. (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-[#C6A55C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Splatnost (roky)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-[#C6A55C]"
                />
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-[#C6A55C]/30 bg-[#0F172A] p-6 shadow-2xl">
            <h2 className="mb-6 text-2xl font-semibold">Výsledek</h2>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-white/60">Měsíční splátka</p>
                <p className="mt-2 text-3xl font-semibold text-[#C6A55C]">
                  {formatCurrency(result.monthlyPayment)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-white/60">Celkem zaplaceno</p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatCurrency(result.totalPaid)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-white/60">Celkem na úrocích</p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-white/60">LTV</p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatPercent(result.ltv)} %
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-white/60">
                  Orientačně doporučený čistý měsíční příjem domácnosti
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatCurrency(result.recommendedIncome)}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-white/55">
              Poznámka: doporučený příjem je pouze orientační pomocný údaj. Banka
              vždy posuzuje i další závazky, počet členů domácnosti, typ příjmu a
              vlastní scoring.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
