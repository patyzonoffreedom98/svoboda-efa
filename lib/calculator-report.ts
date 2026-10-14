export type ReportRow = { label: string; value: string };
export type ReportChart = { kind?: 'histogram'; bars?: { label: string; value: number }[]; title: string; label: string; secondaryLabel?: string; target?: number; points: { year: number; value: number; own?: number }[] };
export type CalculatorReport = { title: string; date: string; inputs: ReportRow[]; primary: ReportRow; results: ReportRow[]; chart: ReportChart; notes: string[]; comments: { title: string; text: string }[] };

const clean = (value: string | null | undefined) => (value ?? '').replace(/\s+/g, ' ').trim();
/** Snapshot committed values from the same controls and graph used by the visible calculator. */
export function collectCalculatorReport(button: HTMLElement, title: string): CalculatorReport {
  const grid = button.closest('.calculator-grid');
  if (!grid) throw new Error('Výpočet není dostupný.');
  if (grid.querySelector('[aria-invalid="true"]')) throw new Error('Nejdříve prosím opravte zadané hodnoty.');
  const chart = grid.querySelector<HTMLElement>('[data-report-chart]');
  if (!chart?.dataset.reportChart) throw new Error('Graf není dostupný.');
  const info = grid.nextElementSibling?.classList.contains('info-strip') ? grid.nextElementSibling : null;
  return {
    title,
    date: new Intl.DateTimeFormat('cs-CZ', { timeZone: 'Europe/Prague', day: 'numeric', month: 'numeric', year: 'numeric' }).format(new Date()),
    inputs: Array.from(grid.querySelectorAll('.calc-field')).map(field => ({ label: clean(field.querySelector('label')?.textContent), value: clean(field.querySelector('input[type="range"]')?.getAttribute('aria-valuetext')) })),
    primary: { label: clean(grid.querySelector('.result-main-label')?.textContent), value: clean(grid.querySelector('.result-main-value')?.textContent) },
    results: Array.from(grid.querySelectorAll('.result-row')).map(row => ({ label: clean(row.querySelector('span')?.textContent), value: clean(row.querySelector('strong')?.textContent) })),
    chart: JSON.parse(chart.dataset.reportChart) as ReportChart,
    notes: Array.from(grid.querySelectorAll('.note')).map(note => clean(note.textContent)),
    comments: Array.from(info?.querySelectorAll('.info-box') ?? []).map(box => ({ title: clean(box.querySelector('h3')?.textContent), text: clean(box.querySelector('p')?.textContent) })),
  };
}
