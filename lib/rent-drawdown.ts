export type DrawdownPoint = { year: number; value: number };

/** Nominal annual return / 12; withdrawal at month end; final payment may be partial. */
export function calculateDrawdown(capital: number, monthlyWithdrawal: number, annualReturn: number, years: number) {
  if (![capital, monthlyWithdrawal, annualReturn, years].every(Number.isFinite) || capital < 0 || monthlyWithdrawal < 0 || annualReturn <= -100 || years < 1 || years > 100 || !Number.isInteger(years)) throw new Error('Neplatné vstupy modelu čerpání.');
  const horizon = years * 12;
  let balance = capital;
  let totalWithdrawn = 0;
  let finalBalance = capital;
  let depletionMonth: number | null = capital === 0 ? 0 : null;
  const points: DrawdownPoint[] = [{ year: 0, value: capital }];
  for (let month = 1; month <= 1200; month++) {
    const available = balance * (1 + annualReturn / 1200);
    const paid = Math.min(available, monthlyWithdrawal);
    balance = Math.max(0, available - paid);
    if (balance < 0.005 && monthlyWithdrawal > 0) balance = 0;
    if (balance === 0 && depletionMonth === null) depletionMonth = month;
    if (month <= horizon) {
      totalWithdrawn += paid;
      finalBalance = balance;
      if (month % 12 === 0 || month === depletionMonth) points.push({ year: month / 12, value: balance });
    }
  }
  return { points, finalBalance, totalWithdrawn, depletionMonth };
}

export function durationLabel(months: number | null) {
  if (months === null) return 'Nevyčerpán během 100 let modelu';
  if (months === 0) return 'Kapitál je již vyčerpán';
  const years = Math.floor(months / 12), rest = months % 12;
  return `${years} let${rest ? ` a ${rest} měs.` : ''}`;
}
