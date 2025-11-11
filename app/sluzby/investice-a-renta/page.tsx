import InvestCalc from '@/app/components/calculators/InvestCalc';
import RentTargetCalc from '@/app/components/calculators/RentTargetCalc';
import RentDrawCalc from '@/app/components/calculators/RentDrawCalc';

export const metadata = {
  title: 'Investice a renta | svoboda-efa.cz',
  description: 'Plán, portfolia, reálné zhodnocení a srozumitelná cesta k rentě.',
};

export default function InvesticeRenta() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Investice a cesta k rentě</h1>
      <p className="mb-8 opacity-90">
        Bez marketingových zkratek – srozumitelně. Zjistíme, jak velký kapitál potřebujete pro plánovanou rentu,
        jak dlouho kapitál vydrží a jak nastavit vklady i riziko tak, aby plán dával smysl v čase i po inflaci.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <InvestCalc />
        <RentTargetCalc />
        <RentDrawCalc />
      </div>

      <div className="rounded-xl border border-white/10 p-5 bg-white/5">
        <h2 className="text-xl font-semibold mb-2">Nejste si jistí, jak se k rentě dostat?</h2>
        <p className="mb-4 opacity-90">
          Nerozumíte rozdílu mezi dosažením a čerpáním renty? Všechno vám srozumitelně vysvětlím.
          Základ je kvalitní finanční plán – a ten připravíme společně.
        </p>
        <a href="/kontakt" className="inline-block rounded-md bg-white text-[#0b1728] px-4 py-2 font-semibold">
          Domluvit nezávaznou konzultaci
        </a>
      </div>
    </main>
  );
}
