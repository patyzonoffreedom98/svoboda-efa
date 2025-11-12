import Link from "next/link";

export const metadata = {
  title: "Kalkulačky | Svoboda EFA",
  description: "Hypotéka, investice a renta – rychlé orientační výpočty.",
};

export default async function Page() {
  return (
    <section className="container" style={{ paddingTop: 16 }}>
      <h1 className="section-title">Kalkulačky</h1>
      <p className="small" style={{ marginTop: 0, marginBottom: 16 }}>
        Rychlé orientační propočty. Pro přesný návrh spolu probereme cíle a možnosti.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <Link href="/sluzby/hypoteky" className="card" style={{ display: "block" }}>
          <h3 style={{ marginTop: 0 }}>Hypotéka</h3>
          <p className="small">Splátka, úrok, doba – základní orientace.</p>
        </Link>

        <Link href="/sluzby/investice" className="card" style={{ display: "block" }}>
          <h3 style={{ marginTop: 0 }}>Investice</h3>
          <p className="small">Budoucí hodnota portfolia a vklady.</p>
        </Link>

        <Link href="/sluzby/renta" className="card" style={{ display: "block" }}>
          <h3 style={{ marginTop: 0 }}>Renta</h3>
          <p className="small">Měsíční renta z kapitálu, i s indexací.</p>
        </Link>
      </div>
    </section>
  );
}
