// app/sluzby/page.tsx
export default function SluzbyIndex() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Služby</h1>
        <p className="max-w-3xl text-slate-300">
          Pomohu vám s financováním bydlení, dlouhodobým investováním i ochranou
          příjmu a majetku. Vše srozumitelně, v číslech a dlouhodobě.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <a
          href="/sluzby/hypoteky-a-financovani"
          className="block rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700 hover:bg-slate-800"
        >
          <h2 className="mb-1 text-lg font-semibold">Hypotéky a financování</h2>
          <p className="text-sm text-slate-300">
            Výběr banky, podmínky, fixace, LTV – včetně modelace splátky.
          </p>
        </a>

        <a
          href="/sluzby/investice-a-cesta-k-rente"
          className="block rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700 hover:bg-slate-800"
        >
          <h2 className="mb-1 text-lg font-semibold">Investice a cesta k rentě</h2>
          <p className="text-sm text-slate-300">
            Investiční plán, dosažení renty i její bezpečné čerpání.
          </p>
        </a>

        <a
          href="/sluzby/zajisteni-prijmu-a-majetku"
          className="block rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700 hover:bg-slate-800"
        >
          <h2 className="mb-1 text-lg font-semibold">Zajištění příjmu a majetku</h2>
          <p className="text-sm text-slate-300">
            Krytí rizik – zdraví, odpovědnost, majetek. Smysluplně a bez duplicit.
          </p>
        </a>
      </div>
    </div>
  );
}
