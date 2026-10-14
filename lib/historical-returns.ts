import dataset from '@/data/us-equities-shiller.json';
export type InvestmentMode = 'lump' | 'monthly';
export const sourcePeriod = '01/1871–06/2023';
export const dates = dataset.rows.map(row => String(row[0]));
// Monthly-average price proxy. Annualized dividend is accrued as D_t / 12.
export const returns = dataset.rows.slice(1).map((row, i) => (Number(row[1]) + Number(row[2]) / 12) / Number(dataset.rows[i][1]) - 1);
export const bandLabels = ['pod −10 %', '−10 až −5 %', '−5 až 0 %', '0 až 5 %', '5 až 10 %', '10 až 15 %', '15 % a více'];
export function bandIndex(rate: number) { return rate < -.10 ? 0 : rate < -.05 ? 1 : rate < 0 ? 2 : rate < .05 ? 3 : rate < .10 ? 4 : rate < .15 ? 5 : 6; }
// Equal deposits at the beginning of each month: solve the annuity-due IRR.
export function monthlyAnnualized(final: number, months: number) {
  const annuity = (r: number) => { let v = 0; for (let i = 0; i < months; i++) v = (v + 1) * (1 + r); return v; };
  let lo = -.999999, hi = 1;
  while (annuity(hi) < final) hi *= 2;
  for (let i = 0; i < 55; i++) { const mid = (lo + hi) / 2; if (annuity(mid) < final) lo = mid; else hi = mid; }
  return Math.pow(1 + (lo + hi) / 2, 12) - 1;
}
export function historicalWindows(series: number[], years: number, mode: InvestmentMode, annualFee = 0, withIrr = true) {
  const months = years * 12;
  if (!Number.isInteger(months) || months < 12 || months > series.length || annualFee < 0 || annualFee >= 100) throw new Error('Neplatný horizont nebo náklady.');
  const feeFactor = Math.pow(1 - annualFee / 100, 1 / 12);
  const out: { value: number; rate: number; start: number }[] = [];
  for (let start = 0; start + months <= series.length; start++) {
    let value = mode === 'lump' ? 1 : 0;
    for (let m = start; m < start + months; m++) value = (value + (mode === 'monthly' ? 1 : 0)) * (1 + series[m]) * feeFactor;
    const rate = mode === 'lump' ? Math.pow(value, 1 / years) - 1 : withIrr ? monthlyAnnualized(value, months) : 0;
    out.push({ value, rate: Math.abs(rate) < 1e-10 ? 0 : rate, start });
  }
  return out;
}
export function lossShare(series: number[], years: number, mode: InvestmentMode, fee: number) {
  const outcomes = historicalWindows(series, years, mode, fee, false), paid = mode === 'lump' ? 1 : years * 12;
  return outcomes.filter(o => o.value < paid * (1 - 1e-10)).length / outcomes.length * 100;
}
