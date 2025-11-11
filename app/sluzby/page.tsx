export const metadata = {
  title: 'Služby – Hypotéky, Investice, Zajištění | svoboda-efa.cz',
  description: 'Prakticky, srozumitelně a dlouhodobě: hypotéky, investice a zajištění příjmu/majetku.',
};

export default function SluzbyIndex() {
  const box = 'rounded-xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition';
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">S čím vám pomohu</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <a href="/sluzby/hypoteky-a-financovani" className={box}>
          <h2 className="text-xl font-semibold mb-2">Hypotéky a financování</h2>
          <p>Porovnání bank, modelace splátek, LTV, fixace, hladké financování záměru.</p>
        </a>
        <a href="/sluzby/investice-a-renta" className={box}>
          <h2 className="text-xl font-semibold mb-2">Investice a cesta k rentě</h2>
          <p>Plán, portfolia, reálné zhodnocení, inflace, dosažení i čerpání renty.</p>
        </a>
        <a href="/sluzby/zajisteni-prijmu-a-majetku" className={box}>
          <h2 className="text-xl font-semibold mb-2">Zajištění příjmu a majetku</h2>
          <p>Rozumné pojistné limity, smysluplné výluky, férové náklady.</p>
        </a>
      </div>
    </main>
  );
}
