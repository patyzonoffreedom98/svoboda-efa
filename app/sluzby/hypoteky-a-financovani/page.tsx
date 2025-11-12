import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// 1) Metadata (povoleno jen u server komponenty – proto NEDÁVAT "use client")
export const metadata: Metadata = {
  title: 'Hypotéky a financování | Bc. Patrik Svoboda, EFA',
  description:
    'Nezávislé srovnání hypoték, nastavení fixace a LTV, pomoc s financováním a administrativou. Vyzkoušejte hypoteční kalkulačku a zjistěte orientační splátku.',
};

// 2) Hypo kalkulačku načteme dynamicky jen na klientu (některé widgety nemají rády SSR)
const HypoCalc = dynamic(() => import('@/app/components/HypoCalc'), {
  ssr: false,
  loading: () => <p>Načítám kalkulačku…</p>,
});

export default function HypotekyPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Hypotéky a financování
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          Srovnám nabídky bank, pohlídám podmínky a provedu vás celým procesem až
          k čerpání. Začněte orientačním výpočtem splátky.
        </p>
      </header>

      {/* Kalkulačka */}
      <div className="rounded-2xl border border-white/10 p-4 md:p-6 bg-white/5">
        <HypoCalc />
      </div>

      {/* Callout pod kalkulačkou */}
      <div className="mt-10 rounded-xl border border-white/10 p-5 bg-white/5">
        <h2 className="text-xl font-medium">Chcete nezávislé srovnání bank?</h2>
        <p className="mt-2 text-gray-300">
          Zjistíme, která banka vám nabídne nejvýhodnější podmínky a bez problému
          zafinancuje váš záměr. Ozvěte se mi – domluvíme si nezávaznou konzultaci.
        </p>
        <div className="mt-4">
          <a
            href="/kontakt"
            className="inline-block rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10"
          >
            Domluvit konzultaci zdarma
          </a>
        </div>
      </div>
    </section>
  );
}
