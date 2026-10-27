import ContactForm from "@/components/ContactForm";
import BookingLink from "@/components/BookingLink";
import ConsultationFaq from "@/components/ConsultationFaq";
import { site, offices, officeMapUrl } from "@/lib/site";
export default async function KontaktPage({ searchParams }: { searchParams: Promise<{ tema?: string | string[]; vypocet?: string | string[] }> }) {
  const query = await searchParams;
  const topic = typeof query.tema === "string" ? query.tema.slice(0, 150) : "Obecný dotaz";
  const calculation = typeof query.vypocet === "string" ? query.vypocet.slice(0, 3000) : "";
  const message = calculation ? `Rád/a bych probral/a tento orientační výpočet:\n${calculation}` : topic !== "Obecný dotaz" ? `Zajímá mě: ${topic}` : "";
  return <main id="main-content" className="section"><div className="container">
    <div className="page-heading"><p className="section-label">Kontakt · osobně po celé ČR i online</p><h1>Začněme tím, co právě řešíte.</h1><p className="section-intro">Na úvodní konzultaci si vyhradíme 30–60 minut. Je bezplatná a zvládneme ji i bez předem připravených podkladů.</p></div>
    <div className="contact-grid">
      <div className="contact-card"><h2>Napište mi.</h2><ContactForm initialMessage={message} topic={topic} /></div>
      <div className="contact-card"><p className="section-label">Bc. Patrik Svoboda, EFA</p><h2>Vyberte si, co vám vyhovuje.</h2><div className="contact-lines"><p><a href={site.phoneHref}>{site.phone}</a></p><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div><div className="hero-actions"><BookingLink className="btn btn-gold">Vybrat termín konzultace</BookingLink><a className="btn btn-outline" href={site.whatsapp} target="_blank" rel="noreferrer">Napsat na WhatsApp</a></div><div className="text-stack"><p>Jihlava je moje hlavní zázemí, ale osobní schůzky nejsou omezené Vysočinou. Pokud řešíte hypotéku, investice nebo komplexní finanční plán, rád za vámi přijedu kamkoliv po České republice. Až se osobně poznáme, můžeme navazující kroky pohodlně vyřešit online — nebo se dál potkávat osobně, jak vám bude vyhovovat.</p><p>Na zprávu z webu se ozvu do dvou pracovních dnů.</p><p>Na první schůzce se seznámíme a projdeme vaši situaci. Nic nepodepisujeme, nevypovídáme ani nevybíráme konkrétní nové produkty.</p></div></div>
    </div>
    <section id="kancelare" className="office-section" aria-labelledby="offices-heading">
      <p className="section-label">Kde se potkáme</p>
      <h2 id="offices-heading">Kanceláře na Vysočině. Schůzky po celé republice.</h2>
      <p className="office-secondary-intro">Níže najdete adresy našich kanceláří. Rád ale přijedu i za vámi, ať bydlíte kdekoliv v ČR — nemusíte cestovat do Jihlavy.</p>
      <div className="office-primary">
        <div><p className="section-label">Hlavní kancelář · Jihlava</p>
          <h3>Žižkova 1683/13</h3><p className="office-postcode">586 01 Jihlava</p>
          <p>Vedle Dělnického domu, budova bývalého Globusu.</p>
          <p>Termín schůzky si prosím domluvme předem.</p>
        </div>
        <a className="btn btn-gold" href={officeMapUrl(offices[0].address)} target="_blank" rel="noreferrer">Zobrazit na mapě ↗</a>
      </div>
      <h3 className="office-secondary-title">Další kanceláře · po dohodě</h3>
      <p className="office-secondary-intro">Rád vám budu po předchozí domluvě k dispozici i na těchto místech.</p>
      <div className="office-grid">{offices.slice(1).map(office => <div className="office-secondary" key={office.city}>
        <h4>{office.city}</h4><p>{office.address}</p>
        <a className="text-link" href={officeMapUrl(office.address)} target="_blank" rel="noreferrer">Zobrazit na mapě ↗</a>
      </div>)}</div>
    </section>
    <section className="section faq-layout"><div><p className="section-label">Praktické informace</p><h2>Před první konzultací.</h2></div><ConsultationFaq /></section>
  </div></main>;
}
