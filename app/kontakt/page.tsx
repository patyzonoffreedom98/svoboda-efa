import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Kontakt • Bc. Patrik Svoboda, EFA',
  description:
    'Ozvěte se – hypotéky, investice, zajištění příjmu a majetku. Kancelář Jihlava, spolupráce po celé ČR.',
};

export default function Kontakt() {
  return (
    <main style={{ padding: '48px 24px', maxWidth: 1000, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>Kontakt</h1>
      <p style={{ opacity: 0.85, marginBottom: 24 }}>
        Telefon: <strong>774 697 755</strong> · E-mail:{' '}
        <strong>patrik.svoboda@wmfinance.cz</strong>
      </p>
      <ContactForm />
    </main>
  );
}
