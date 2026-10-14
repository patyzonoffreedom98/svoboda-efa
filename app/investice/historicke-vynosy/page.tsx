import InvestmentCalculator from '@/components/calculators/InvestmentCalculator';
export const metadata = { title: 'Pravděpodobnost výnosů investice | Svoboda EFA', description: 'Historické výsledky amerických akcií v USD podle investičního horizontu.' };
export default function Page() { return <InvestmentCalculator initialTab="history" />; }
