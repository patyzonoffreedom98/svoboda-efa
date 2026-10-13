'use client';
import { useRef, useState } from 'react';
import { collectCalculatorReport } from '@/lib/calculator-report';

export default function CalculatorPdfButton({ title }: { title: string }) {
  const button = useRef<HTMLButtonElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function download() {
    if (!button.current || busy) return;
    setBusy(true); setError('');
    try {
      // Capture before awaiting assets so changes made during download cannot mix scenarios.
      const snapshot = collectCalculatorReport(button.current, title);
      const { createCalculatorPdf } = await import('@/lib/calculator-pdf');
      const assets = await Promise.all(['/fonts/DejaVuSans-report.ttf', '/brand-monogram.png'].map(async url => {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Nepodařilo se načíst podklady pro PDF. Zkuste to znovu.');
        return new Uint8Array(await response.arrayBuffer());
      }));
      const bytes = await createCalculatorPdf(snapshot, { font: assets[0], logo: assets[1] });
      const url = URL.createObjectURL(new Blob([new Uint8Array(bytes)], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = `Patrik-Svoboda-${title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(link); link.click(); link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'PDF se nepodařilo vytvořit. Zkuste to znovu.'); }
    finally { setBusy(false); }
  }
  return <div className="calc-export"><button ref={button} type="button" onClick={download} disabled={busy}>{busy ? 'Připravuji PDF…' : 'Stáhnout výpočet v PDF'}</button><p>Hodnoty, graf a vysvětlení v jednom dokumentu.</p>{error && <p role="alert">{error}</p>}</div>;
}
