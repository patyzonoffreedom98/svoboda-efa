// app/o-mne/page.tsx
export default function OMnePage() {
  return (
    <div className="container" style={{ color: '#e6edf6', padding: '28px 0 48px' }}>
      <h1 style={{ marginTop: 0 }}>O mně</h1>
      <p>
        Zde bude osobní představení – příběh, přístup ke klientům, způsob spolupráce a hodnoty.
        Doplníme fotky a stručné bio. Cílem je důvěra, srozumitelnost a dlouhodobý vztah.
      </p>
      <img
        src="/ja-bile-pozadi.jpg"
        alt="Patrik Svoboda"
        style={{ width: '100%', maxWidth: 520, borderRadius: 20, border: '1px solid rgba(255,255,255,.08)' }}
      />
    </div>
  );
}
