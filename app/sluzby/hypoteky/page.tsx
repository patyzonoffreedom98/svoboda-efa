import HypoCalc from "@/components/calculators/HypoCalc";

export const metadata = {
  title: "Hypotéky | Svoboda EFA",
  description:
    "Hypoteční poradenství na míru: výpočet splátky, srovnání nabídek a nastavení financování.",
};

export default async function Page() {
  return (
    <section className="container">
      <h1 className="section-title">Hypotéky</h1>
      <p className="small" style={{ marginBottom: 16 }}>
        Pomohu s výběrem banky, nastavením fixace a celkového rozpočtu tak, aby
        splátka dávala smysl i v delším horizontu. Níže si můžete orientačně
        spočítat anuitní splátku podle výše úvěru, úrokové sazby a splatnosti.
      </p>

      <HypoCalc />

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Co obvykle řešíme</h3>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Volba fixace a práce s rizikem růstu sazeb</li>
          <li>Rezerva a rozumné LTV (poměr úvěru k ceně nemovitosti)</li>
          <li>Předčasné splacení, mimořádné splátky a poplatky</li>
          <li>Pojištění schopnosti splácet a pojištění majetku</li>
        </ul>
      </div>
    </section>
  );
}
