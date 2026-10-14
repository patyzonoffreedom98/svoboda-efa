import Link from 'next/link';
import HistoricalReturns from '@/components/calculators/HistoricalReturns';
export const metadata = { title: 'Historické výnosy amerických akcií | Svoboda EFA', description: 'Historické výsledky jednorázového a pravidelného investování v USD podle délky horizontu.' };
export default function Page() {
  return <main id="main-content" className="fin-calculator calc-investice"><div className="calc-wrapper"><header className="calc-hero"><nav className="calc-nav" aria-label="Kalkulačky"><Link href="/investice">Investice</Link><Link href="/hypoteka">Hypotéka</Link><Link href="/renta">Renta</Link></nav><p className="calc-eyebrow">Investiční kalkulačka</p><h1>Historické výnosy akcií.</h1><p className="calc-intro">Prozkoumejte, jak se historické výsledky měnily podle délky investice.</p></header><HistoricalReturns /></div></main>;
}
