'use client';

import { useMemo, useState } from 'react';
import { SliderField, ProjectionChart, investmentPoints } from '@/components/calculators/CalculatorVisuals';
import Link from 'next/link';
import CalculatorPdfButton from '@/components/calculators/CalculatorPdfButton';
import CalculatorContact from '@/components/CalculatorContact';

export default function InvesticePage() {
  const [initialDeposit, setInitialDeposit] = useState(100000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(8);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const initial = Number(initialDeposit) || 0;
    const monthly = Number(monthlyDeposit) || 0;
    const rate = Number(annualReturn) || 0;
    const totalYears = Number(years) || 0;

    const months = totalYears * 12;
    const monthlyRate = rate / 100 / 12;

    let futureValue = initial;

    for (let i = 0; i < months; i++) {
      futureValue = futureValue * (1 + monthlyRate) + monthly;
    }

    const ownMoney = initial + monthly * months;
    const profit = futureValue - ownMoney;

    return {
      futureValue,
      ownMoney,
      profit,
    };
  }, [initialDeposit, monthlyDeposit, annualReturn, years]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <>
      <main id="main-content" className="fin-calculator calc-investice">
        <div className="calc-wrapper">
          <header className="calc-hero">
            <nav className="calc-nav" aria-label="Kalkulačky">
              <Link href="/investice" aria-current="page">Investice</Link>
              <Link href="/hypoteka" >Hypotéka</Link>
              <Link href="/renta" >Renta</Link>
            </nav>
            <p className="calc-eyebrow">Investiční kalkulačka</p><h1>Dejte svým penězům čas.</h1>
            <p className="calc-intro">Vyzkoušejte, co pro váš budoucí majetek znamená pravidelná investice a delší horizont.</p>
          </header>

          <section className="calculator-grid">
            <div className="panel">
              <h2>Váš scénář</h2>

              <p className="calc-controls-hint">Posuňte lištu nebo napište přesnou hodnotu.</p>
              <div className="form-grid">
                <SliderField label="Počáteční vklad" value={initialDeposit} onChange={setInitialDeposit} min={0} max={10000000} step={10000} unit="Kč" />
                <SliderField label="Pravidelná měsíční investice" value={monthlyDeposit} onChange={setMonthlyDeposit} min={0} max={100000} step={500} unit="Kč" />
                <SliderField label="Očekávaný roční výnos" value={annualReturn} onChange={setAnnualReturn} min={0} max={15} step={0.1} unit="%" />
                <SliderField label="Investiční horizont" value={years} onChange={setYears} min={1} max={50} step={1} unit="let" />
              </div>
            </div>

            <div className="panel result-panel">
              <h2 className="calc-result-heading">Orientační výsledek</h2>

              <div className="result-main">
                <p className="result-main-label">Budoucí hodnota investice</p>
                <p className="result-main-value">
                  {formatCurrency(result.futureValue)}
                </p>
              </div>

              <ProjectionChart title="Jak může růst váš majetek" label="Hodnota investice" secondaryLabel="Vlastní vklady" points={investmentPoints(initialDeposit, monthlyDeposit, annualReturn, years)} />

              <div className="result-table">
                <div className="result-row">
                  <span>Celkem vložíte ze svého</span>
                  <strong>{formatCurrency(result.ownMoney)}</strong>
                </div>

                <div className="result-row">
                  <span>Orientační zhodnocení</span>
                  <strong>{formatCurrency(result.profit)}</strong>
                </div>

                <div className="result-row">
                  <span>Měsíční investice</span>
                  <strong>{formatCurrency(monthlyDeposit)}</strong>
                </div>

                <div className="result-row">
                  <span>Investiční horizont</span>
                  <strong>{years} let</strong>
                </div>
              </div>

              <p className="note">
                Výsledek je orientační model. Skutečný vývoj investice může kolísat
                a není garantovaný. V praxi záleží na zvolené strategii, nákladech,
                čase i průběhu trhu.
              </p>
              <CalculatorPdfButton title="Investiční kalkulačka" />
            </div>
          </section>

          <section className="info-strip">
            <div className="info-box">
              <h3>Proč je důležitý čas?</h3>
              <p>
                U investic často rozhoduje délka horizontu. Delší čas dává větší
                prostor pro využití složeného úročení a rozložení výkyvů trhu.
              </p>
            </div>

            <div className="info-box">
              <h3>Co dělá pravidelnost?</h3>
              <p>
                Pravidelné investování pomáhá budovat návyk a zároveň rozkládá
                nákupní cenu v čase, místo spoléhání na jediný vstupní okamžik.
              </p>
            </div>

            <div className="info-box">
              <h3>Co dál po kalkulačce?</h3>
              <p>
                Kalkulačka ukáže princip. Reálné řešení je vždy vhodné nastavit
                podle cíle, vztahu k riziku, rezervy a časového horizontu.
              </p>
            </div>
          </section>
          <CalculatorContact topic="Investice" summary={`Počáteční vklad: ${formatCurrency(initialDeposit)}; měsíčně: ${formatCurrency(monthlyDeposit)}; modelový výnos: ${annualReturn} % p.a.; horizont: ${years} let; modelová budoucí hodnota: ${formatCurrency(result.futureValue)}.`} />
        </div>
      </main>

    </>
  );
}
