// app/sluzby/page.tsx
export default function SluzbyPage() {
  return (
    <div className="container" style={{ color: '#e6edf6', padding: '28px 0 48px' }}>
      <h1 style={{ marginTop: 0 }}>Služby</h1>

      <section id="hypoteky" style={box}>
        <h2>Hypotéky a financování</h2>
        <ul>
          <li>Výběr vhodné fixace a sazby</li>
          <li>Refinancování a konsolidace</li>
          <li>Porovnání variant a celkové ceny</li>
        </ul>
      </section>

      <section id="investice" style={box}>
        <h2>Investice a cesta k rentě</h2>
        <ul>
          <li>Nastavení portfolia dle cíle a horizontu</li>
          <li>Pravidelné vklady, jednorázové investice</li>
          <li>Plán čerpání renty a práce s inflací</li>
        </ul>
      </section>

      <section id="zajištění" style={box}>
        <h2>Zajištění příjmu a majetku</h2>
        <ul>
          <li>Invalidita, dlouhodobá PN, závažné nemoci</li>
          <li>Domácnost a nemovitost</li>
          <li>Odpovědnost a právní ochrana</li>
        </ul>
      </section>

      <section id="podnikatele" style={box}>
        <h2>Podnikatelská rizika</h2>
        <ul>
          <li>Odpovědnost, majetek, přerušení provozu</li>
          <li>Flotilové pojištění</li>
          <li>Zaměstnanecké benefity</li>
        </ul>
      </section>
    </div>
  );
}

const box: React.CSSProperties = {
  background: '#0f1d31',
  border: '1px solid rgba(255,255,255,.08)',
  borderRadius: 16,
  padding: 20,
  marginBottom: 18,
};
