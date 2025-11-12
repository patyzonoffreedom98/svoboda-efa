// app/sluzby/hypoteky-a-financovani/page.tsx
import HypoCalc from '@/app/components/HypoCalc';

export default function HypotekyPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Hypotéky a financování</h1>
        <p className="max-w-3xl text-slate-300">
          Zjistíme, která banka zvládne bezpečně zafinancovat váš záměr a nabídne
          férové podmínky. Porovnáme fixace, LTV i celkovou cenu úvěru – srozumitelně,
          v číslech a bez kliček.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hypoteční kalkulačka</h2>
        <p className="text-sm text-slate-300">
          Zadejte výši úvěru, sazbu a dobu splatnosti. Kalkulačka spočítá měsíční splátku
          anuitně (orientačně; konkrétní podmínky se mohou lišit podle banky).
        </p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <HypoCalc />
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm text-slate-200">
            <strong>Chcete vědět, která banka vám nabídne nejvýhodnější podmínky</strong>{' '}
            a spolehlivě zafinancuje váš záměr?{' '}
            <a
              href="/kontakt"
              className="font-semibold text-yellow-300 underline underline-offset-4"
            >
              Ozvěte se mi
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
