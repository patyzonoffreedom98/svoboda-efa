"use client";
import { useMemo, useState } from "react";

const inputCls = "input";
const fmt = (n: number) =>
  Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Kč";
const num = (s: string) =>
  Number(s.toString().replace(/\s+/g, "").replace(/\./g, "").replace(/,/g, "."));

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="row">
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function HypoCalc() {
  const [principal, setPrincipal] = useState("3 500 000");
  const [rate, setRate] = useState("5.29"); // p.a. %
  const [years, setYears] = useState("30");

  const res = useMemo(() => {
    const P = num(principal);
    const annual = num(rate) / 100;
    const Y = num(years);
    if (P <= 0 || annual < 0 || Y <= 0) return null;
    const r = annual / 12;
    const n = Y * 12;
    const M = r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
    return { M, total: M * n, interest: M * n - P, n };
  }, [principal, rate, years]);

  return (
    <div className="card" style={{ maxWidth: 740 }}>
      <div className="grid">
        <label>
          Výše úvěru (Kč)
          <input
            className={inputCls}
            inputMode="numeric"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </label>
        <label>
          Úrok p.a. (%)
          <input
            className={inputCls}
            inputMode="decimal"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>
        <label>
          Splatnost (roky)
          <input
            className={inputCls}
            inputMode="numeric"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </label>
      </div>

      <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "12px 0" }} />

      {res ? (
        <>
          <Row label="Měsíční splátka" value={fmt(res.M)} />
          <Row label="Celkem zaplaceno" value={fmt(res.total)} />
          <Row label="Z toho úroky" value={fmt(res.interest)} />
          <div className="small">Orientační výpočet bez poplatků a daní.</div>
        </>
      ) : (
        <em>Zadejte platná čísla…</em>
      )}
    </div>
  );
}
