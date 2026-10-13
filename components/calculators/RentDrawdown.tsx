'use client';
import { useMemo, useState } from 'react';
import { SliderField, ProjectionChart, currency } from './CalculatorVisuals';
import { calculateDrawdown, durationLabel } from '@/lib/rent-drawdown';
import CalculatorContact from '@/components/CalculatorContact';
import CalculatorPdfButton from './CalculatorPdfButton';

export default function RentDrawdown({ initialCapital = 9000000 }: { initialCapital?: number }) {
  const [capital, setCapital] = useState(initialCapital);
  const [withdrawal, setWithdrawal] = useState(40000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(30);
  const result = useMemo(() => calculateDrawdown(capital, withdrawal, rate, years), [capital, withdrawal, rate, years]);
  const exhausted = result.depletionMonth !== null && result.depletionMonth <= years * 12;
  return <>
    <section className="calculator-grid">
      <div className="panel"><h2>Čerpání vašeho kapitálu</h2><p className="calc-controls-hint">Kapitál se dál zhodnocuje a každý měsíc z něj čerpáte rentu.</p><div className="form-grid">
        <SliderField label="Kapitál na začátku renty" value={capital} onChange={setCapital} min={0} max={Math.max(30000000, initialCapital)} step={100000} />
        <SliderField label="Měsíční výběr" value={withdrawal} onChange={setWithdrawal} min={0} max={500000} step={1000} />
        <SliderField label="Výnos během čerpání p.a." value={rate} onChange={setRate} min={-10} max={15} step={0.1} unit="%" />
        <SliderField label="Doba zobrazená v grafu" value={years} onChange={setYears} min={1} max={100} step={1} unit="let" />
      </div></div>
      <div className="panel result-panel"><h2 className="calc-result-heading">Orientační výsledek</h2>
        <div className="result-main"><p className="result-main-label">Zůstatek po {years} letech</p><p className="result-main-value">{currency(result.finalBalance)}</p></div>
        <ProjectionChart title="Jak se mění váš kapitál" label="Zbývající kapitál" points={result.points} />
        <div className="result-table">
          <div className="result-row"><span>Modelová doba do vyčerpání</span><strong>{durationLabel(result.depletionMonth)}</strong></div>
          <div className="result-row"><span>Celkem vyplaceno za {years} let</span><strong>{currency(result.totalWithdrawn)}</strong></div>
          <div className="result-row"><span>Pravidelný měsíční výběr</span><strong>{currency(withdrawal)}</strong></div>
          <div className="result-row"><span>Počáteční kapitál</span><strong>{currency(capital)}</strong></div>
        </div>
        <p className="note">{exhausted ? 'Ve zvoleném období se kapitál vyčerpá. Poslední výběr může být nižší než požadovaná renta; další výběry už model nepočítá.' : result.finalBalance >= capital ? 'Při zadaném stálém výnosu kapitál neklesá. V reálném portfoliu se ale výnos mění a zůstatek může kolísat.' : 'Část výběru pokrývá modelový výnos, zbytek se čerpá z kapitálu.'}</p>
        <CalculatorPdfButton title="Renta - čerpání kapitálu" />
      </div>
    </section>
    <section className="info-strip">
      <div className="info-box"><h3>Jak model počítá?</h3><p>Zadaný roční výnos dělíme 12. Každý měsíc nejdříve připíšeme modelový výnos a na konci měsíce odečteme výběr. Dobu do vyčerpání sledujeme nejvýše 100 let.</p></div>
      <div className="info-box"><h3>Stejná renta každý měsíc</h3><p>Měsíční výběr zůstává nominálně stejný. Výpočet nezahrnuje inflaci, poplatky ani daně. Kupní síla renty se proto může časem snižovat.</p></div>
      <div className="info-box"><h3>Výnos není jistota</h3><p>Jde o ilustraci při stálém výnosu, nikoli garantovanou dobu čerpání. Skutečný vývoj i pořadí růstových a ztrátových let ovlivní, jak dlouho kapitál vydrží.</p></div>
    </section>
    <CalculatorContact topic="Renta" summary={`Čerpání renty: počáteční kapitál ${currency(capital)}; výběr ${currency(withdrawal)} měsíčně; výnos ${rate} % p.a.; zobrazené období ${years} let; zůstatek ${currency(result.finalBalance)}; doba do vyčerpání: ${durationLabel(result.depletionMonth)}.`} />
  </>;
}
