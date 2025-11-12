import InvestCalc from "@/components/calculators/InvestCalc";

export const metadata = {
  title: "Investice | Svoboda EFA",
  description: "Dlouhodobé investování s plánem: cíle, riziko, náklady. Orientační kalkulačka FV.",
};

export default async function Page(){
  return (
    <section className="container">
      <h1 className="section-title">Investice</h1>
      <p className="small" style={{ marginBottom: 16 }}>
        Společně nastavíme cíle (rezerva, děti, renta), vhodné riziko a nákladovost.
        Níže si můžete spočítat orientační budoucí hodnotu portfolia.
      </p>
      <InvestCalc />

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Na co se zaměřuji</h3>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Alokace aktiv vs. horizont a tolerance rizika</li>
          <li>Průběžné rebalancování a cashflow plán</li>
          <li>Náklady (TER), daně a disciplína</li>
        </ul>
      </div>
    </section>
  );
}
