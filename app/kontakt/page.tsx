import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Kontakt | Bc. Patrik Svoboda, EFA",
  description: "Nezávazná konzultace zdarma. Hypotéky, investice, zajištění příjmu.",
};

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Kontakt</h1>
      <p className="mb-8 text-slate-300">
        Napište mi zprávu nebo si rovnou domluvte nezávaznou konzultaci zdarma.
      </p>
      <ContactForm />
      <div className="mt-10 text-slate-400">
        <p>Telefon: <a className="underline" href="tel:+420774697755">+420&nbsp;774&nbsp;697&nbsp;755</a></p>
        <p>E-mail: <a className="underline" href="mailto:patrik.svoboda@wmfinance.cz">patrik.svoboda@wmfinance.cz</a></p>
      </div>
    </main>
  );
}
