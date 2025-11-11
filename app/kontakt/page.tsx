// app/kontakt/page.tsx
import ContactForm from '../components/ContactForm';

export default function KontaktPage() {
  return (
    <div className="container" style={{ color: '#e6edf6', padding: '28px 0 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div>
        <h1 style={{ marginTop: 0 }}>Kontakt</h1>
        <p>Telefon: <a href="tel:+420774697755">774 697 755</a><br />E-mail: <a href="mailto:patrik.svoboda@wmfinance.cz">patrik.svoboda@wmfinance.cz</a></p>
        <p>Vysočina & celá ČR • osobně i online.</p>
      </div>

      <ContactForm />
    </div>
  );
}
