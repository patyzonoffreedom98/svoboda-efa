'use client';

import { useMemo, useState } from 'react';

export default function RentaPage() {
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
      <main className="renta-page">
        <div className="renta-wrapper">
          <section className="hero-card">
            <p className="eyebrow">Kalkulačka renty</p>
            <h1>Kalkulačka finanční renty</h1>
            <p className="hero-text">
              Renta je pravidelný příjem z vytvořeného kapitálu. V praxi jde o to,
              kolik kapitálu je potřeba vybudovat, aby mohl dlouhodobě podporovat
              požadovaný životní standard a zároveň dával smysl vzhledem k času,
              riziku a očekávanému výnosu.
            </p>

            <div className="hero-facts">
              <div className="fact-box">
                <span className="fact-label">Co zjistíte</span>
                <strong>Potřebný cílový kapitál</strong>
              </div>
              <div className="fact-box">
                <span className="fact-label">Co zjistíte</span>
                <strong>Odhad času do cíle</strong>
              </div>
              <div className="fact-box">
                <span className="fact-label">Co zjistíte</span>
                <strong>Vliv pravidelné investice</strong>
              </div>
            </div>
          </section>

          <section className="calculator-grid">
            <div className="panel">
              <h2>Zadejte parametry</h2>

              <div className="form-grid">
                <div className="field">
                  <label>Požadovaná měsíční renta</label>
                  <input
                    type="number"
                    value={targetMonthlyRent}
                    onChange={(e) => setTargetMonthlyRent(Number(e.target.value))}
                  />
                </div>

                <div className="field">
                  <label>Výběrové pravidlo (% ročně)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={withdrawalRate}
                    onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                  />
                </div>

                <div className="field">
                  <label>Aktuálně naspořená částka</label>
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  />
                </div>

                <div className="field">
                  <label>Pravidelná měsíční investice</label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  />
                </div>

                <div className="field">
                  <label>Očekávaný roční výnos (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>

            <div className="panel result-panel">
              <h2>Výsledek kalkulačky</h2>

              <div className="result-main">
                <p className="result-main-label">Cílový kapitál pro rentu</p>
                <p className="result-main-value">
                  {formatCurrency(result.targetCapital)}
                </p>
              </div>

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
                      ? `${result.yearsNeeded.toFixed(1)} roku`
                      : 'Cíl je mimo rozumný horizont'}
                  </strong>
                </div>
              </div>

              <p className="note">
                Výsledek je orientační model. V reálném životě je potřeba počítat i
                s inflací, kolísáním trhu, daněmi, rezervou a vhodně zvolenou
                strategií čerpání.
              </p>
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
        </div>
      </main>

      <style jsx>{`
        .renta-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top center, rgba(198, 165, 92, 0.16), transparent 28%),
            linear-gradient(180deg, #07111f 0%, #091728 100%);
          padding: 56px 20px 80px;
          color: #f7f3eb;
        }

        .renta-wrapper {
          max-width: 1180px;
          margin: 0 auto;
        }

        .hero-card {
          background: rgba(10, 19, 33, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
          margin-bottom: 28px;
        }

        .eyebrow {
          margin: 0 0 12px 0;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c6a55c;
          font-weight: 700;
        }

        h1 {
          margin: 0;
          font-size: 48px;
          line-height: 1.08;
          font-weight: 700;
          color: #f8f4ec;
        }

        .hero-text {
          margin: 18px 0 0 0;
          max-width: 850px;
          font-size: 18px;
          line-height: 1.75;
          color: rgba(247, 243, 235, 0.78);
        }

        .hero-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 26px;
        }

        .fact-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(198, 165, 92, 0.2);
          border-radius: 20px;
          padding: 18px;
        }

        .fact-label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(247, 243, 235, 0.55);
          margin-bottom: 8px;
        }

        .fact-box strong {
          font-size: 18px;
          color: #f8f4ec;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
        }

        .panel {
          background: rgba(10, 19, 33, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);
        }

        .panel h2 {
          margin: 0 0 22px 0;
          font-size: 30px;
          color: #f8f4ec;
        }

        .form-grid {
          display: grid;
          gap: 18px;
        }

        .field {
          display: grid;
          gap: 10px;
        }

        .field label {
          font-size: 15px;
          font-weight: 600;
          color: rgba(247, 243, 235, 0.78);
        }

        .field input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #0f1b2d;
          color: #f8f4ec;
          border-radius: 16px;
          padding: 16px 18px;
          font-size: 17px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .field input:focus {
          border-color: #c6a55c;
          box-shadow: 0 0 0 3px rgba(198, 165, 92, 0.14);
        }

        .result-panel {
          display: flex;
          flex-direction: column;
        }

        .result-main {
          background: linear-gradient(135deg, rgba(198, 165, 92, 0.16), rgba(198, 165, 92, 0.05));
          border: 1px solid rgba(198, 165, 92, 0.25);
          border-radius: 22px;
          padding: 24px;
          margin-bottom: 18px;
        }

        .result-main-label {
          margin: 0 0 10px 0;
          font-size: 14px;
          color: rgba(247, 243, 235, 0.68);
        }

        .result-main-value {
          margin: 0;
          font-size: 42px;
          line-height: 1.1;
          font-weight: 700;
          color: #e1bf73;
        }

        .result-table {
          display: grid;
          gap: 10px;
        }

        .result-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 16px 18px;
        }

        .result-row span {
          font-size: 15px;
          color: rgba(247, 243, 235, 0.7);
        }

        .result-row strong {
          font-size: 18px;
          color: #f8f4ec;
          text-align: right;
        }

        .note {
          margin: 18px 0 0 0;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(247, 243, 235, 0.58);
        }

        .info-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .info-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 22px;
          padding: 22px;
        }

        .info-box h3 {
          margin: 0 0 10px 0;
          font-size: 20px;
          color: #f8f4ec;
        }

        .info-box p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(247, 243, 235, 0.68);
        }

        @media (max-width: 960px) {
          h1 {
            font-size: 38px;
          }

          .calculator-grid,
          .hero-facts,
          .info-strip {
            grid-template-columns: 1fr;
          }

          .result-main-value {
            font-size: 34px;
          }
        }

        @media (max-width: 640px) {
          .renta-page {
            padding: 32px 14px 56px;
          }

          .hero-card,
          .panel,
          .info-box {
            padding: 22px;
            border-radius: 22px;
          }

          h1 {
            font-size: 32px;
          }

          .panel h2 {
            font-size: 24px;
          }

          .result-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .result-row strong {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
