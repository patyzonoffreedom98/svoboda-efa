export const metadata = {
  title: 'Zajištění příjmu a majetku | svoboda-efa.cz',
  description: 'Smysluplné pojistné limity, rozumné výluky a férové náklady.',
};

export default function Pojisteni() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Zajištění příjmu a majetku</h1>
      <p className="mb-8 opacity-90">
        Krytí příjmu (nemoc/úraz), odpovědnost, majetek. Projdeme reálná rizika a nastavíme takové limity,
        aby pojistka plnila, když má – a zároveň nebyla zbytečně drahá.
      </p>

      <div className="rounded-xl border border-white/10 p-5 bg-white/5">
        <h2 className="text-xl font-semibold mb-2">Nechcete řešit výluky a kličky?</h2>
        <p className="mb-4 opacity-90">Připravím srovnání a doporučení podle vaší situace. Vše vysvětlím srozumitelně.</p>
        <a href="/kontakt" className="inline-block rounded-md bg-white text-[#0b1728] px-4 py-2 font-semibold">
          Ozvěte se mi
        </a>
      </div>
    </main>
  );
}
