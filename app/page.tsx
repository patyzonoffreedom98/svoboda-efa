{/* Konzultace + Instagram (2 embedy vpravo) */}
<section className="container" style={{ marginTop: 24 }}>
  <div className="grid grid-2">
    {/* Levý sloupec – formulář */}
    <div className="card">
      <h2 className="section-title">Nezávazná konzultace zdarma</h2>
      <p className="small" style={{ marginTop: 0 }}>
        Zanechte na sebe kontakt – ozvu se a domluvíme termín.
      </p>
      <ContactForm />
    </div>

    {/* Pravý sloupec – dva IG embedy (stack na mobilu, vedle sebe na desktopu podle šířky kontejneru) */}
    <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
      <InstagramEmbed
        url="https://www.instagram.com/p/DPjUX2NDNKg/"
        caption="Tipy z praxe – hypotéky, investice, renta."
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/DO_gbreDMox/"
        caption="Další krátký vhled k financím."
      />
    </div>
  </div>
</section>
