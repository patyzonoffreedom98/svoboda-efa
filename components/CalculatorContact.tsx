import Link from "next/link";
export default function CalculatorContact({ topic, summary }: { topic: string; summary: string }) {
  const params = new URLSearchParams({ tema: topic, vypocet: summary });
  return <aside className="calculator-contact">
    <p className="section-label">Další krok</p><h2>Probereme, co výsledek znamená pro vás.</h2>
    <p>Navážeme na váš výpočet a projdeme cíle i rozpočet. Úvodní konzultace trvá 30–60 minut a je bezplatná.</p>
    <Link className="btn btn-gold" href={`/kontakt?${params.toString()}`}>Probrat můj výpočet</Link>
    <p className="form-note">Hodnoty přeneseme do formuláře. Ozvu se do dvou pracovních dnů.</p>
  </aside>;
}
