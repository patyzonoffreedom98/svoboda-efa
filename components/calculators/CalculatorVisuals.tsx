'use client';

import { useId, useState, type CSSProperties } from 'react';

export const currency = (value: number) => new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(value);
const number = (value: number) => new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 2 }).format(value);

export function SliderField({ label, value, onChange, min = 0, max, step = 1, unit = 'Kč' }: { label: string; value: number; onChange: (value: number) => void; min?: number; max: number; step?: number; unit?: string }) {
  const id = useId();
  const [draft, setDraft] = useState<string | null>(null);
  const valid = (raw: string) => {
    const parsed = Number(raw.replace(/\s/g, '').replace(',', '.'));
    return raw.trim() !== '' && Number.isFinite(parsed) && parsed >= min && parsed <= max && (step !== 1 || Number.isInteger(parsed)) ? parsed : null;
  };
  const invalid = draft !== null && valid(draft) === null;
  return <div className="calc-field">
    <div className="calc-field-top"><label htmlFor={id}>{label}</label><div className="calc-value-input"><input id={id} type="text" inputMode={step < 1 ? 'decimal' : 'numeric'} value={draft ?? number(value)} aria-invalid={invalid} aria-describedby={invalid ? `${id}-error` : undefined} onChange={event => { setDraft(event.target.value); const next = valid(event.target.value); if (next !== null) onChange(next); }} onBlur={() => setDraft(null)} /><span>{unit}</span></div></div>
    <input className="calc-slider" type="range" min={min} max={max} step={step} value={value} aria-label={label} aria-valuetext={`${number(value)} ${unit}`} style={{ '--fill': `${(value - min) / (max - min) * 100}%` } as CSSProperties} onChange={event => { setDraft(null); onChange(Number(event.target.value)); }} />
    <div className="calc-range-labels"><span>{number(min)} {unit}</span><span>{number(max)} {unit}</span></div>
    {invalid && <span id={`${id}-error`} className="calc-input-error">Zadejte {step === 1 ? 'celé číslo' : 'hodnotu'} od {number(min)} do {number(max)}. Výpočet zatím používá poslední platnou hodnotu.</span>}
  </div>;
}

export type ChartPoint = { year: number; value: number; own?: number };
export function ProjectionChart({ points, title, label, secondaryLabel, target }: { points: ChartPoint[]; title: string; label: string; secondaryLabel?: string; target?: number }) {
  const id = useId().replace(/:/g, '');
  const [selected, setSelected] = useState<number | null>(null);
  const safePoints = points.filter(p => Number.isFinite(p.value) && Number.isFinite(p.year));
  if (!safePoints.length) return null;
  const maximum = Math.max(1, target ?? 0, ...safePoints.flatMap(p => [p.value, p.own ?? 0]));
  const last = safePoints[safePoints.length - 1];
  const x = (year: number) => 58 + (year / Math.max(1, last.year)) * 472;
  const y = (value: number) => 202 - value / maximum * 158;
  const path = (own = false) => safePoints.map((p, i) => `${i ? 'L' : 'M'}${x(p.year)},${y(own ? p.own ?? 0 : p.value)}`).join(' ');
  const active = safePoints[Math.min(selected ?? safePoints.length - 1, safePoints.length - 1)];
  const short = (n: number) => n >= 1e6 ? `${number(n / 1e6)} mil.` : n >= 1000 ? `${number(n / 1000)} tis.` : number(n);
  return <figure className="calc-chart" data-report-chart={JSON.stringify({ points: safePoints, title, label, secondaryLabel, target })}>
    <div className="calc-chart-heading"><h3>{title}</h3><span>Kč</span></div>
    <svg viewBox="0 0 550 240" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
      <title id={`${id}-title`}>{title}</title><desc id={`${id}-desc`}>Modelový vývoj za {number(last.year)} let. {label}: {currency(last.value)}.{secondaryLabel && ` ${secondaryLabel}: ${currency(last.own ?? 0)}.`}{target !== undefined && ` Cílový kapitál: ${currency(target)}.`} Přesné hodnoty vyberete posuvníkem pod grafem.</desc>
      <defs><linearGradient id={`${id}-area`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d8bb7c" stopOpacity=".28"/><stop offset="100%" stopColor="#d8bb7c" stopOpacity=".02"/></linearGradient></defs>
      {[0, .5, 1].map(ratio => <g key={ratio}><line x1="58" x2="530" y1={y(maximum * ratio)} y2={y(maximum * ratio)} stroke="#ffffff18"/><text x="49" y={y(maximum * ratio) + 4} textAnchor="end">{short(maximum * ratio)}</text></g>)}
      <path d={`${path()} L${x(last.year)},202 L58,202 Z`} fill={`url(#${id}-area)`}/>
      {secondaryLabel && <path d={path(true)} fill="none" stroke="#90b3c9" strokeWidth="2" strokeDasharray="5 4"/>}
      <path d={path()} fill="none" stroke="#e4c58b" strokeWidth="3" strokeLinejoin="round"/>
      {target !== undefined && <g><line x1="58" x2="530" y1={y(target)} y2={y(target)} stroke="#90b3c9" strokeDasharray="5 4"/><text x="530" y={y(target)-10} textAnchor="end">Cílový kapitál</text></g>}
      <line x1={x(active.year)} x2={x(active.year)} y1="35" y2="202" stroke="#ffffff25"/><circle cx={x(active.year)} cy={y(active.value)} r="5" fill="#e4c58b" stroke="#142735" strokeWidth="2"/>
      <text x="58" y="228">Dnes</text><text x="294" y="228" textAnchor="middle">{number(last.year / 2)} let</text><text x="530" y="228" textAnchor="end">{number(last.year)} let</text>
    </svg>
    <div className="calc-chart-legend"><span><i />{label}</span>{secondaryLabel && <span><i className="secondary" />{secondaryLabel}</span>}{target !== undefined && <span><i className="secondary" />Cíl: {currency(target)}</span>}</div>
    {safePoints.length > 1 && <label className="calc-chart-inspect">Prozkoumat vývoj · {number(active.year)} let<input type="range" min="0" max={safePoints.length - 1} value={selected ?? safePoints.length - 1} aria-valuetext={`${number(active.year)} let, ${currency(active.value)}`} onChange={e => setSelected(Number(e.target.value))}/></label>}
    <figcaption>{label}: <strong>{currency(active.value)}</strong>{secondaryLabel && <> · {secondaryLabel}: <strong>{currency(active.own ?? 0)}</strong></>}</figcaption>
  </figure>;
}

export function investmentPoints(initial: number, monthly: number, annual: number, years: number): ChartPoint[] {
  const points: ChartPoint[] = [{ year: 0, value: initial, own: initial }];
  let value = initial;
  const months = Math.round(years * 12);
  for (let month = 1; month <= months; month++) {
    value = value * (1 + annual / 1200) + monthly;
    if (month % 12 === 0 || month === months) points.push({ year: month / 12, value, own: initial + monthly * month });
  }
  return points;
}

export function balancePoints(principal: number, annual: number, years: number, payment: number): ChartPoint[] {
  const points: ChartPoint[] = [{ year: 0, value: principal }];
  let value = principal;
  const months = Math.round(years * 12);
  for (let month = 1; month <= months; month++) {
    value = Math.max(0, value * (1 + annual / 1200) - payment);
    if (month % 12 === 0 || month === months) points.push({ year: month / 12, value });
  }
  return points;
}
