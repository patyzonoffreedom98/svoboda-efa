import type { Metadata } from 'next';
import LtvFixCalc from '@/app/components/calculators/LtvFixCalc';

export const metadata: Metadata = {
  title: 'Kalkulačka LTV & fixace | Svoboda EFA',
  description: 'Orientační výpočet LTV a porovnání splátky a celkové zaplacené částky pro různé délky fixace a úrokové sazby.',
};

export default function Page() {
  return (
    <main style={{ padding: '32px 20px', maxWidth: 1100, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>Kalkulačka LTV &amp; fixace</h1>
      <p style={{ opacity: 0.9 }}>
        Zadejte cenu nemovitosti a vlastní zdroje. Přidejte/změňte možnosti fixace a sazeb a podívejte se na srovnání.
      </p>
      <LtvFixCalc />
    </main>
  );
}
