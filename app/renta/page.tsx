'use client';

import { useMemo, useState } from 'react';
import { SliderField, ProjectionChart, investmentPoints } from '@/components/calculators/CalculatorVisuals';
import Link from 'next/link';
import RentDrawdown from '@/components/calculators/RentDrawdown';
import CalculatorPdfButton from '@/components/calculators/CalculatorPdfButton';
import CalculatorContact from '@/components/CalculatorContact';

export default function RentaPage() {
  const [mode, setMode] = useState<'build' | 'draw'>('build');
  const [drawCapital, setDrawCapital] = useState(9000000);
  const [drawVersion, setDrawVersion] = useState(0);
  const [targetMonthlyRent, setTargetMonthlyRent] = useState(30000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [annualReturn, setAnnualReturn] = useState(8);

  const result = useMemo(() => {
    const rent = Number(targetMonthlyRent) || 0;
    const yearlyRent = rent * 12;
    const withdrawal = Number(withdrawalRate) || 0;
    const start = Number(currentSavings) || 0;
    const monthly = Number(monthlyInvestment) || 0;
    const annual = Number(annualReturn) || 0;

    const targetCapital =
      withdrawal > 0 ? yearlyRent / (withdrawal / 100) : 0;

    const monthlyRate = annual / 100 / 12;

    let monthsNeeded = 0;
    let portfolio = start;

    while (portfolio < targetCapital && monthsNeeded < 1200) {
      portfolio = portfolio * (1 + monthlyRate) + monthly;
      monthsNeeded++;
    }

    const yearsNeeded =
      monthsNeeded < 1200 ? monthsNeeded / 12 : null;

    return {
      targetCapital,
      yearsNeeded,
      monthsNeeded,
    };
  }, [
    targetMonthlyRent,
    withdrawalRate,
    currentSavings,
    monthlyInvestment,
    annualReturn,
  ]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <>
      <main id="main-content" className="fin-calculator calc-renta">
        <div className="calc-wrapper">
          <header className="calc-hero">
            <nav className="calc-nav" aria-label="Kalkulačky">
              <Link href="/investice" >Investice</Link>
              <Link href="/hypoteka" >Hypotéka</Link>
              <Link href="/renta" aria-current="page">Renta</Link>
            </nav>
            <p className="calc-eyebrow">Kalkulačka finanční renty</p><h1>Více svobody v budoucnu.</h1>
            <p className="calc-intro">Zjistěte, jaký kapitál potřebujete pro svou rentu a jak dlouhá může být cesta k němu.</p>
          </header>

          <div className="calc-mode-switch" role="group" aria-label="Typ výpočtu renty">
            <button type="button" aria-pressed={mode === 'build'} onClick={() => setMode('build')}>1. Vytvořit kapitál</button>
            <button type="button" aria-pressed={mode === 'draw'} onClick={() => setMode('draw')}>2. Čerpat rentu</button>
          </div>
          <div hidden={mode !== 'draw'}><RentDrawdown key={drawVersion} initialCapital={drawCapital} /></div>
          <div hidden={mode !== 'build'}>
          <section className="calculator-grid">
            <div className="panel">
              <h2>Váš scénář</h2>

              <p className="calc-controls-hint">Posuňte lištu nebo napište přesnou hodnotu.</p>
              <div className="form-grid">
                <SliderField label="Požadovaná měsíční renta" value={targetMonthlyRent} onChange={setTargetMonthlyRent} min={1000} max={200000} step={1000} unit="Kč" />
                <SliderField label="Výběrové pravidlo ročně" value={withdrawalRate} onChange={setWithdrawalRate} min={0.5} max={10} step={0.1} unit="%" />
                <SliderField label="Aktuálně naspořená částka" value={currentSavings} onChange={setCurrentSavings} min={0} max={30000000} step={10000} unit="Kč" />
                <SliderField label="Pravidelná měsíční investice" value={monthlyInvestment} onChange={setMonthlyInvestment} min={0} max={200000} step={1000} unit="Kč" />
                <SliderField label="Očekávaný roční výnos" value={annualReturn} onChange={setAnnualReturn} min={0} max={15} step={0.1} unit="%" />
              </div>
            </div>

            <div className="panel result-panel">
              <h2 className="calc-result-heading">Orientační výsledek</h2>

              <div className="result-main">
                <p className="result-main-label">Cílový kapitál pro rentu</p>
                <p className="result-main-value">
                  {formatCurrency(result.targetCapital)}
                </p>
              </div>

              <ProjectionChart title="Vaše cesta k rentě" label="Hodnota portfolia" target={result.targetCapital} points={investmentPoints(currentSavings, monthlyInvestment, annualReturn, result.yearsNeeded ?? 100)} />

              <div className="result-table">
                <div className="result-row">
                  <span>Požadovaná měsíční renta</span>
                  <strong>{formatCurrency(targetMonthlyRent)}</strong>
                </div>

                <div className="result-row">
                  <span>Výběrové pravidlo</span>
                  <strong>{withdrawalRate} % ročně</strong>
                </div>

                <div className="result-row">
                  <span>Pravidelná měsíční investice</span>
                  <strong>{formatCurrency(monthlyInvestment)}</strong>
                </div>

                <div className="result-row">
                  <span>Odhad doby do cíle</span>
                  <strong>
                    {result.yearsNeeded !== null
                      ? `${result.yearsNeeded.toLocaleString('cs-CZ', { maximumFractionDigits: 1 })} roku`
                      : 'Cíl je mimo rozumný horizont'}
                  </strong>
                </div>
              </div>

              <p className="note">
                Výsledek je orientační model. V reálném životě je potřeba počítat i
                s inflací, kolísáním trhu, daněmi, rezervou a vhodně zvolenou
                strategií čerpání.
              </p>
              <button className="calc-transfer" type="button" onClick={() => { setDrawCapital(result.targetCapital); setDrawVersion(v => v + 1); setMode('draw'); }}>Pokračovat s {formatCurrency(result.targetCapital)} do čerpání →</button>
              <CalculatorPdfButton title="Renta - tvorba kapitálu" />
            </div>
          </section>

          <section className="info-strip">
            <div className="info-box">
              <h3>Co je výběrové pravidlo?</h3>
              <p>
                Jde o orientační procento, které lze z kapitálu ročně čerpat.
                Často se používá například 4 %, ale vždy záleží na strategii a
                konkrétní situaci.
              </p>
            </div>

            <div className="info-box">
              <h3>Proč řešit inflaci?</h3>
              <p>
                Dnešních 30 000 Kč nebude mít za 15 nebo 20 let stejnou kupní sílu.
                U renty je proto důležité myslet nejen na nominální částku, ale i na
                její reálnou hodnotu.
              </p>
            </div>

            <div className="info-box">
              <h3>Co dál po kalkulačce?</h3>
              <p>
                Kalkulačka ukáže základní rámec. Reálný plán renty je vhodné navázat
                na konkrétní cíle, věk, rezervy, investiční profil a majetkovou
                strukturu.
              </p>
            </div>
          </section>
          <CalculatorContact topic="Renta" summary={`Cílová měsíční renta: ${formatCurrency(targetMonthlyRent)}; míra čerpání: ${withdrawalRate} %; současné úspory: ${formatCurrency(currentSavings)}; měsíční investice: ${formatCurrency(monthlyInvestment)}; modelový výnos: ${annualReturn} % p.a.`} />
          </div>
        </div>
      </main>

    </>
  );
}
