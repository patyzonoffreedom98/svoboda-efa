'use client';

import { useMemo, useState } from 'react';

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
      <main className="invest-page">
        <div className="invest-wrapper">
          <section className="hero-card">
            <p className="eyebrow">Kalkulačka investic</p>
            <h1>Investiční kalkulačka</h1>
            <p className="hero-text">
              Investování je způsob, jak dlouhodobě pracovat s volnými prostředky
              a budovat majetek v čase. Klíčovou roli nehraje jen výnos, ale také
              pravidelnost, horizont, disciplína a správně nastavená strategie.
            </p>

            <div className="hero-facts">
              <div className="fact-box">
                <span className="fact-label">Co zjistíte</span>
                <strong>Budoucí hodnotu investice</strong>
              </div>
              <div className="fact-box">
                <span className="fact-label">Co zjistíte</span>
                <strong>Kolik vložíte ze svého</strong>
              </div>
              <div className="fact-box">
                <span className="fact-label">Co zjistíte</span>
                <strong>Orientační zhodnocení</strong>
              </div>
            </div>
          </section>

          <section className="calculator-grid">
            <div className="panel">
              <h2>Zadejte parametry</h2>

              <div className="form-grid">
                <div className="field">
                  <label>Počáteční vklad</label>
                  <input
                    type="number"
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                  />
                </div>

                <div className="field">
                  <label>Pravidelná měsíční investice</label>
                  <input
                    type="number"
                    value={monthlyDeposit}
                    onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
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

                <div className="field">
                  <label>Investiční horizont (roky)</label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>

            <div className="panel result-panel">
              <h2>Výsledek kalkulačky</h2>

              <div className="result-main">
                <p className="result-main-label">Budoucí hodnota investice</p>
                <p className="result-main-value">
                  {formatCurrency(result.futureValue)}
                </p>
              </div>

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
        </div>
      </main>

      <style jsx>{`
        .invest-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top center, rgba(198, 165, 92, 0.16), transparent 28%),
            linear-gradient(180deg, #07111f 0%, #091728 100%);
          padding: 56px 20px 80px;
          color: #f7f3eb;
        }

        .invest-wrapper {
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
          .invest-page {
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
