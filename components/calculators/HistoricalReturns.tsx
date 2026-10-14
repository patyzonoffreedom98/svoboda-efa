'use client';
import { useMemo, useState } from 'react';
import { SliderField } from './CalculatorVisuals';
import CalculatorPdfButton from './CalculatorPdfButton';
import { returns, dates, sourcePeriod, bandLabels, bandIndex, historicalWindows, lossShare, type InvestmentMode } from '@/lib/historical-returns';
const pct = (n: number) => new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 1 }).format(n) + ' %';
const usd = (n: number) => new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
export default function HistoricalReturns() {
  const [mode, setMode] = useState<InvestmentMode>('lump');
  const [years, setYears] = useState(15);
  const [lump, setLump] = useState(100000);
  const [monthly, setMonthly] = useState(1000);
  const [fee, setFee] = useState(0);
  const amount = mode === 'lump' ? lump : monthly;
  const outcomes = useMemo(() => historicalWindows(returns, years, mode, fee), [years, mode, fee]);
  const horizonLoss = useMemo(() => Array.from({ length: 30 }, (_, i) => lossShare(returns, i + 1, mode, fee)), [mode, fee]);
  const counts = Array(7).fill(0) as number[];
  outcomes.forEach(o => counts[bandIndex(o.rate)]++);
  const sorted = [...outcomes].sort((a, b) => a.value - b.value);
  const median = (sorted[Math.floor((sorted.length - 1) / 2)].value + sorted[Math.ceil((sorted.length - 1) / 2)].value) / 2;
  const modalIndex = counts.indexOf(Math.max(...counts));
  const modalShare = counts[modalIndex] / outcomes.length * 100;
  const medianRate = (sorted[Math.floor((sorted.length - 1) / 2)].rate + sorted[Math.ceil((sorted.length - 1) / 2)].rate) / 2;
  const tied = counts.filter(count => count === counts[modalIndex]).length > 1;
  const bars = counts.map((count, i) => ({ label: bandLabels[i], value: count / outcomes.length * 100 }));
  const chart = { kind: 'histogram', title: 'Rozdělení ročního zhodnocení', label: 'Podíl historických období (%)', points: [], bars };
  const paid = amount * (mode === 'lump' ? 1 : years * 12);
  return <div>
    <section className="calculator-grid">
      <div className="panel">
        <p className="calc-eyebrow">Americké akcie · USD</p><h2>Co ukazuje historie?</h2>
        <p>Shillerova historická řada, {sourcePeriod}. Výnosy zahrnují modelově reinvestované dividendy.</p>
        <div className="history-switch" aria-label="Způsob investování">{(['lump', 'monthly'] as const).map(m => <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>{m === 'lump' ? 'Jednorázově' : 'Měsíčně'}</button>)}</div>
        <div className="form-grid">
          <SliderField label="Investiční horizont" value={years} onChange={setYears} min={1} max={30} unit="let" />
          <SliderField key={mode} label={mode === 'lump' ? 'Jednorázový vklad' : 'Měsíční vklad'} value={amount} onChange={mode === 'lump' ? setLump : setMonthly} min={1} max={mode === 'lump' ? 1000000 : 10000} step={1} unit="USD" />
          <SliderField label="Roční náklady" value={fee} onChange={setFee} min={0} max={3} step={0.1} unit="%" />
        </div>
        <p className="note">Režim: {mode === 'lump' ? 'jednorázová investice na začátku období' : 'stejný vklad na začátku každého měsíce'}. Výnosy i částky jsou v USD, bez inflace, daní a převodů měn; zvolené náklady jsou započteny.</p>
      </div>
      <div className="panel result-panel">
        <div className="history-highlights">
          <div className="result-main"><p className="result-main-label">Podíl období zakončených ztrátou</p><p className="result-main-value">{pct(horizonLoss[years - 1])}</p></div>
          <div className="history-modal"><p className="result-main-label">{tied ? 'Jedno z nejčastějších pásem' : 'Nejčastější roční výnos'}</p><p className="result-main-value">{bandLabels[modalIndex]}</p><p className="history-modal-caption">p. a. · {pct(modalShare)} historických období</p></div>
        </div>
        <p className="history-median">Medián ročního výnosu: <strong>{pct(medianRate * 100)} p. a.</strong><br /><small>Polovina sledovaných období měla nižší, polovina vyšší roční výnos.</small></p>
        <p>{horizonLoss[years - 1] === 0 ? `Žádné z ${outcomes.length} sledovaných období délky ${years} let neskončilo ztrátou. To není záruka budoucího výsledku.` : `Ze všech ${outcomes.length} sledovaných období délky ${years} let. Ztráta znamená konečnou hodnotu nižší než součet vkladů.`}</p>
        <figure className="history-histogram" data-report-chart={JSON.stringify(chart)}>
          <h3>Rozdělení ročního zhodnocení</h3>
          <div className="history-bars">{bars.map((bar, i) => <div className="history-bar" key={bar.label}><strong>{pct(bar.value)}</strong><div className="history-bar-track"><div style={{ height: `${Math.max(0, bar.value / Math.max(1, ...bars.map(b => b.value)) * 100)}%`, background: i < 3 ? '#cd9a91' : '#e4c58b' }} /></div><span>{bar.label}</span></div>)}</div>
          <figcaption>Pásma výnosu v % p. a. · {mode === 'lump' ? 'složené roční zhodnocení (CAGR)' : 'roční zhodnocení zohledňující načasování vkladů (IRR)'}</figcaption>
        </figure>
        <div className="result-table">{[[tied ? 'Jedno z nejčastějších pásem' : 'Nejčastější výnosové pásmo', `${bandLabels[modalIndex]} p. a. (${pct(modalShare)} období)`], ['Medián ročního výnosu', `${pct(medianRate * 100)} p. a.`], ['Celkem vloženo', usd(paid)], ['Medián konečné hodnoty', usd(median * amount)], ['Nejhorší konečná hodnota', usd(sorted[0].value * amount)], ['Nejlepší konečná hodnota', usd(sorted[sorted.length - 1].value * amount)], ['Počet historických období', String(outcomes.length)], ['Datový rozsah', sourcePeriod]].map(([label, value]) => <div className="result-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        <p className="note">Zdroj: Robert J. Shiller, zpracování DataHub (datahub.io/core/s-and-p-500), soubor převzat 14. 10. 2026 pod poskytovatelem uvedenou licencí ODC-PDDL-1.0. Rozsah 01/1871–06/2023. Jde o americký historický akciový kompozit, nikoli MSCI World.</p>
        <p className="note">Měsíční výnos = (cena v aktuálním měsíci + roční dividenda / 12) / cena v předchozím měsíci − 1. Ceny jsou měsíční průměry, dividendy částečně interpolované. Výsledky jsou rekonstrukcí, nikoli přesným výnosem obchodovatelného fondu.</p>
        <p className="note">Roční zhodnocení: {mode === 'lump' ? 'CAGR (složený roční výnos)' : 'IRR (výnos zohledňující načasování vkladů)'}. Historická četnost není předpověď. Období začínají každý měsíc a překrývají se. Pásma zahrnují dolní hranici a nezahrnují horní; nula patří do pásma 0 až 5 %. Nejstarší začátek: {dates[0]}, nejnovější začátek: {dates[returns.length - years * 12]}.</p>
        <CalculatorPdfButton title="Historické výnosy akcií" />
      </div>
    </section>
    <section className="panel history-horizons"><h2>Jak se mění podíl ztrátových období s horizontem?</h2><p>Vyberte délku investice. Histogram nahoře se přepočítá pro stejný způsob investování a stejné náklady.</p><div>{horizonLoss.map((loss, i) => <button type="button" key={i} aria-pressed={years === i + 1} onClick={() => setYears(i + 1)}><span>{i + 1} let</span><strong>{pct(loss)}</strong></button>)}</div></section>
    <details className="panel history-method"><summary>Zdroje a podrobná metodika</summary><p>Původní výzkum: <a href="https://www.econ.yale.edu/~shiller/data.htm">Robert Shiller</a>. Použitý soubor: <a href="https://datahub.io/core/s-and-p-500">DataHub</a>. Poskytovatel uvádí <a href="https://opendatacommons.org/licenses/pddl/1-0/">licenci PDDL</a>; v dokumentaci přitom upozorňuje, že status původních dat předpokládá. Zdroj ani autor tuto kalkulačku neschvalují.</p><p>Používáme pouze souvislou část obsahující ceny i dividendy. Novější řádky DataHubu od července 2023 obsahují pouze ceny a do výpočtu nevstupují. Soubor se neaktualizuje automaticky.</p><p>Každé celé období délky 12 × počet let se posouvá o měsíc. První výnos je za únor 1871, poslední za červen 2023. Měsíční vklady se připisují před výnosem měsíce. Náklady se odečítají měsíčně faktorem (1 − roční náklady) na jednu dvanáctinu. U jednorázové investice se počítá CAGR, u pravidelné IRR. Medián je prostřední konečná hodnota. Nejde o doporučení konkrétní investice; americká historie není reprezentativní pro každý akciový trh.</p></details>
  </div>;
}
