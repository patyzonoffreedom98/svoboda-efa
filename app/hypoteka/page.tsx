'use client';

import { useMemo, useState } from 'react';
import { SliderField, ProjectionChart, balancePoints } from '@/components/calculators/CalculatorVisuals';
import Link from 'next/link';
import CalculatorContact from '@/components/CalculatorContact';

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
    <>
      <main id="main-content" className="fin-calculator calc-hypoteka">
        <div className="calc-wrapper">
          <header className="calc-hero">
            <nav className="calc-nav" aria-label="Kalkulačky">
              <Link href="/investice" >Investice</Link>
              <Link href="/hypoteka" aria-current="page">Hypotéka</Link>
              <Link href="/renta" >Renta</Link>
            </nav>
            <p className="calc-eyebrow">Hypoteční kalkulačka</p><h1>Váš domov. Váš plán.</h1>
            <p className="calc-intro">Najděte rovnováhu mezi výší splátky, délkou úvěru a rozpočtem na vaše bydlení.</p>
          </header>

          <section className="calculator-grid">
            <div className="panel">
              <h2>Váš scénář</h2>

              <p className="calc-controls-hint">Posuňte lištu nebo napište přesnou hodnotu.</p>
              <div className="form-grid">
                <SliderField label="Hodnota nemovitosti" value={propertyValue} onChange={setPropertyValue} min={100000} max={50000000} step={100000} unit="Kč" />
                <SliderField label="Výše hypotéky" value={loanAmount} onChange={setLoanAmount} min={0} max={30000000} step={100000} unit="Kč" />
                <SliderField label="Úroková sazba p.a." value={interestRate} onChange={setInterestRate} min={0} max={15} step={0.01} unit="%" />
                <SliderField label="Splatnost" value={years} onChange={setYears} min={1} max={40} step={1} unit="let" />
              </div>
            </div>

            <div className="panel result-panel">
              <h2 className="calc-result-heading">Orientační výsledek</h2>

              <div className="result-main">
                <p className="result-main-label">Orientační měsíční splátka</p>
                <p className="result-main-value">
                  {formatCurrency(result.monthlyPayment)}
                </p>
              </div>

              <ProjectionChart title="Cesta k vlastnímu bydlení" label="Zbývá splatit" points={balancePoints(loanAmount, interestRate, years, result.monthlyPayment)} />

              <div className="result-table">
                <div className="result-row">
                  <span>Celkem zaplatíte</span>
                  <strong>{formatCurrency(result.totalPaid)}</strong>
                </div>

                <div className="result-row">
                  <span>Z toho na úrocích</span>
                  <strong>{formatCurrency(result.totalInterest)}</strong>
                </div>

                <div className="result-row">
                  <span>LTV</span>
                  <strong>{formatPercent(result.ltv)} %</strong>
                </div>

                <div className="result-row">
                  <span>Doporučený čistý příjem domácnosti</span>
                  <strong>{formatCurrency(result.recommendedIncome)}</strong>
                </div>
              </div>

              <p className="note">
                Výsledek je orientační. Banka při schvalování zohledňuje i další
                závazky, typ příjmu, počet členů domácnosti, věk žadatelů a vlastní
                interní scoring.
              </p>
            </div>
          </section>

          <section className="info-strip">
            <div className="info-box">
              <h3>Co je LTV?</h3>
              <p>
                LTV ukazuje poměr mezi výší úvěru a hodnotou nemovitosti. Čím nižší
                LTV, tím obvykle lepší vyjednávací pozice.
              </p>
            </div>

            <div className="info-box">
              <h3>Proč řešit splatnost?</h3>
              <p>
                Delší splatnost sníží měsíční splátku, ale zpravidla zvýší celkově
                zaplacené úroky.
              </p>
            </div>

            <div className="info-box">
              <h3>Co dál po kalkulačce?</h3>
              <p>
                Kalkulačka dá rychlý obrázek. Reálné nastavení hypotéky je vždy lepší
                posuzovat podle konkrétní situace domácnosti.
              </p>
            </div>
          </section>
          <CalculatorContact topic="Hypotéka" summary={`Hodnota nemovitosti: ${formatCurrency(propertyValue)}; výše úvěru: ${formatCurrency(loanAmount)}; sazba: ${interestRate} % p.a.; splatnost: ${years} let; orientační splátka: ${formatCurrency(result.monthlyPayment)}.`} />
        </div>
      </main>

    </>
  );
}
