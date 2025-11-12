import RentCalc from "@/components/calculators/RentCalc";

export const metadata = {
  title: "Renta | Svoboda EFA",
  description: "Výplata pravidelné renty z portfolia. Kalkulačka orientační měsíční renty.",
};

export default async function Page(){
  return (
    <section className="container">
      <h1 className="section-title">Renta</h1>
      <p className="small" style={{ marginBottom: 16 }}>
        Cílem je pravidelná udržitelná výplata z dlouhodobého portfolia. Pracujeme
        s očekávaným výnosem, inflací a rizikem vyčerpání kapitálu.
      </p>
      <RentCalc />

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Co řešíme</h3>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Bezpečná míra výběru vs. riziko vyčerpání</li>
          <li>Indexace renty a doplňková rezerva</li>
          <li>Daně a struktura portfolia v rentě</li>
        </ul>
      </div>
    </section>
  );
}
