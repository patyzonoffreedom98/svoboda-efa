import ContactForm from "@/components/ContactForm";
import ConsultationFaq from "@/components/ConsultationFaq";
import { site } from "@/lib/site";
export default async function KontaktPage({ searchParams }: { searchParams: Promise<{ tema?: string | string[]; vypocet?: string | string[] }> }) {
  const query = await searchParams;
  const topic = typeof query.tema === "string" ? query.tema.slice(0, 150) : "Obecný dotaz";
  const calculation = typeof query.vypocet === "string" ? query.vypocet.slice(0, 3000) : "";
  const message = calculation ? `Rád/a bych probral/a tento orientační výpočet:\n${calculation}` : topic !== "Obecný dotaz" ? `Zajímá mě: ${topic}` : "";
  return <main id="main-content" className="section"><div className="container">
    <div className="page-heading"><p className="section-label">Kontakt · Jihlava i online</p><h1>Začněme tím, co právě řešíte.</h1><p className="section-intro">Na úvodní konzultaci si vyhradíme 30–60 minut. Je bezplatná a zvládneme ji i bez předem připravených podkladů.</p></div>
    <div className="contact-grid">
      <div className="contact-card"><h2>Napište mi.</h2><ContactForm initialMessage={message} topic={topic} /></div>
      <div className="contact-card"><p className="section-label">Bc. Patrik Svoboda, EFA</p><h2>Vyberte si, co vám vyhovuje.</h2><div className="contact-lines"><p><a href={site.phoneHref}>{site.phone}</a></p><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div><div className="hero-actions"><a className="btn btn-gold" href={site.booking} target="_blank" rel="noreferrer">Vybrat termín konzultace</a><a className="btn btn-outline" href={site.whatsapp} target="_blank" rel="noreferrer">Napsat na WhatsApp</a></div><div className="text-stack"><p>Na zprávu z webu se ozvu do dvou pracovních dnů.</p><p>Na první schůzce se seznámíme a projdeme vaši situaci. Nic nepodepisujeme, nevypovídáme ani nevybíráme konkrétní nové produkty.</p></div></div>
    </div>
    <section className="section faq-layout"><div><p className="section-label">Praktické informace</p><h2>Před první konzultací.</h2></div><ConsultationFaq /></section>
  </div></main>;
}
