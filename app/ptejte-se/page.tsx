import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Ptejte se • Bc. Patrik Svoboda, EFA',
  description:
    'Krátký dotaz k hypotéce, investicím nebo zajištění? Napište mi a ozvu se zpět.',
};

export default function PtejteSe() {
  return (
    <main style={{ padding: '48px 24px', maxWidth: 1000, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>Ptejte se</h1>
      <p style={{ opacity: 0.85, marginBottom: 24 }}>
        Napište mi dotaz – obvykle odpovím tentýž den.
      </p>
      <ContactForm />
    </main>
  );
}
