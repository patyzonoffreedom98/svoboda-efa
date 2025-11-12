'use client';

import { useMemo, useState } from 'react';

type FixOption = {
  name: string;      // např. "3 roky"
  ratePct: number;   // sazba v % p.a., např. 5.49
  years: number;     // délka fixace v letech
};

function annuityPayment(principal: number, annualRatePct: number, years: number) {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return principal * (r / (1 - Math.pow(1 + r, -n)));
}

export default function LtvFixCalc() {
  // vstupy
  const [price, setPrice] = useState(6_000_000);          // cena nemovitosti
  const [ownFunds, setOwnFunds] = useState(1_200_000);    // vlastní zdroje
  const [options, setOptions] = useState<FixOption[]>([
    { name: '3 roky', ratePct: 5.49, years: 3 },
    { name: '5 let', ratePct: 5.19, years: 5 },
    { name: '7 let', ratePct: 4.99, years: 7 },
  ]);

  const loan = Math.max(price - ownFunds, 0);
  const ltv = price > 0 ? (loan / price) * 100 : 0;

  const results = useMemo(() => {
    return options.map((o) => {
      const monthly = annuityPayment(loan, o.ratePct, o.years);
      const totalPaid = monthly * o.years * 12;
      const interest = totalPaid - loan;
      return { ...o, monthly, totalPaid, interest };
    });
  }, [loan, options]);

  const best = useMemo(() => {
    if (!results.length) return null;
    return [...results].sort((a, b) => a.totalPaid - b.totalPaid)[0];
  }, [results]);

  // helper pro update sazeb
  const updateOption = (idx: number, patch: Partial<FixOption>) => {
    setOptions((prev) => prev.map((o, i) => (i === idx ? { ...o, ...patch } : o)));
  };

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {/* Disclaimer */}
      <div style={{ fontSize: 12, opacity: 0.8 }}>
        Výpočty jsou pouze orientační a nepředstavují závaznou nabídku. RPSN, poplatky a pojištění nejsou zahrnuty.
      </div>

      {/* VSTUPY */}
      <section style={{ display: 'grid', gap: 12, border: '1px solid #eee', padding: 16 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Vstupy</h2>

        <label>
          Cena nemovitosti (Kč)
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ width: '100%', padding: 8 }}
            min={0}
          />
        </label>

        <label>
          Vlastní zdroje (Kč)
          <input
            type="number"
            value={ownFunds}
            onChange={(e) => setOwnFunds(Number(e.target.value))}
            style={{ width: '100%', padding: 8 }}
            min={0}
          />
        </label>

        <div style={{ fontSize: 14, marginTop: 8 }}>
          <strong>LTV: {ltv.toFixed(1)} %</strong> {ltv > 80 ? '— mimo standardní limit 80 % (většinou přísnější podmínky)' : ''}
        </div>

        <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
          <h3 style={{ margin: 0, fontSize: 16 }}>Možnosti fixace</h3>
          {options.map((o, i) => (
            <div key={i} style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>
              <input
                value={o.name}
                onChange={(e) => updateOption(i, { name: e.target.value })}
                style={{ padding: 8 }}
              />
              <label>
                Sazba (% p.a.)
                <input
                  type="number"
                  step="0.01"
                  value={o.ratePct}
                  onChange={(e) => updateOption(i, { ratePct: Number(e.target.value) })}
                  style={{ width: '100%', padding: 8 }}
                />
              </label>
              <label>
                Fixace (roky)
                <input
                  type="number"
                  value={o.years}
                  onChange={(e) => updateOption(i, { years: Number(e.target.value) })}
                  style={{ width: '100%', padding: 8 }}
                />
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* VÝSLEDKY */}
      <section style={{ display: 'grid', gap: 12, border: '1px solid #eee', padding: 16 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>Výsledky</h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', minWidth: 620 }}>
            <thead>
              <tr>
                <th style={th}>Fixace</th>
                <th style={th}>Sazba (% p.a.)</th>
                <th style={th}>Splátka / měsíc</th>
                <th style={th}>Zaplaceno za fixaci</th>
                <th style={th}>Z toho úrok</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i} style={{ background: best && r.name === best.name ? 'rgba(0,0,0,0.03)' : undefined }}>
                  <td style={td}>{r.name}</td>
                  <td style={td}>{r.ratePct.toFixed(2)} %</td>
                  <td style={td}>{Math.round(r.monthly).toLocaleString('cs-CZ')} Kč</td>
                  <td style={td}>{Math.round(r.totalPaid).toLocaleString('cs-CZ')} Kč</td>
                  <td style={td}>{Math.round(r.interest).toLocaleString('cs-CZ')} Kč</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {best && (
          <div style={{ padding: 12, border: '1px solid #ddd', background: '#fafafa' }}>
            <strong>Nejnižší celková částka za dobu fixace:</strong> {best.name} —{' '}
            {Math.round(best.totalPaid).toLocaleString('cs-CZ')} Kč (splátka ~{' '}
            {Math.round(best.monthly).toLocaleString('cs-CZ')} Kč/měs.)
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{ border: '1px solid #eee', padding: 16 }}>
        <p style={{ margin: 0 }}>
          Chcete spočítat přesnou nabídku včetně poplatků, pojištění a RPSN?
          {' '}
          <a href="/kontakt">Napište mi</a>.
        </p>
      </section>
    </div>
  );
}

const th: React.CSSProperties = { textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px 10px' };
const td: React.CSSProperties = { borderBottom: '1px solid #eee', padding: '8px 10px' };
