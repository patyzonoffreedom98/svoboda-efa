import InvestmentCalculator from '@/components/calculators/InvestmentCalculator';
export const metadata = {
  title: 'Historické výnosy investic – investiční horizont | Patrik Svoboda',
  description: 'Prozkoumejte historické výnosy amerického akciového trhu podle investičního horizontu. Ilustrace historie, nikoli předpověď budoucnosti.',
  alternates: { canonical: '/investice/historicke-vynosy' },
};
export default function Page() { return <InvestmentCalculator initialTab="history" />; }
