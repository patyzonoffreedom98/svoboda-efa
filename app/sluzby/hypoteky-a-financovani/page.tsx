import HypoCalc from '@/app/components/calculators/HypoCalc';

export const metadata = {
  title: 'Hypotéky a financování | svoboda-efa.cz',
  description: 'Porovnání bank, modelace splátek, fixace a LTV – srozumitelně a bez stresu.',
};

export default function Hypoteky() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Hypotéky a financování</h1>
      <p className="mb-8 opacity-90">
        Najdeme řešení, které vašeho záměru opravdu projde: rozumné LTV, vhodná fixace,
        realistická splátka a hladká administrativa. Vše vysvětlím srozumitelně – v číslech i v realitě.
      </p>

      <div className="mb-8">
        <HypoCalc />
      </div>

      <div className="rounded-xl border border-white/10 p-5 bg-white/5">
        <h2 className="text-xl font-semibold mb-2">Chcete vědět, která banka vám vyjde nejlépe?</h2>
        <p className="mb-4 opacity-90">
          „Která banka nabídne nejvýhodnější podmínky a bez problému zafinancuje váš záměr?“
          Udělám porovnání a projdeme možnosti krok za krokem.
        </p>
        <a href="/kontakt" className="inline-block rounded-md bg-white text-[#0b1728] px-4 py-2 font-semibold">
          Ozvěte se mi
        </a>
      </div>
    </main>
  );
}
