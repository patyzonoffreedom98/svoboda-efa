export default function PreFooter() {
  return (
    <section className="prefooter">
      <div className="container prefooter-inner">
        <div className="card gold">
          <h3 style={{ marginTop: 0 }}>Spojme se</h3>
          <p className="small" style={{ marginTop: 4 }}>
            Máte dotaz k&nbsp;hypotéce, investicím nebo rentě? Napište nebo zavolejte.
          </p>
          <p className="small" style={{ marginTop: 8 }}>
            📞 <a href="tel:+420000000000">+420 000 000 000</a><br/>
            ✉️ <a href="mailto:info@svoboda-efa.cz">info@svoboda-efa.cz</a>
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Sledujte novinky</h3>
          <p className="small" style={{ marginTop: 4 }}>
            Krátká videa, tipy a vysvětlení bez nátlaku.
          </p>
          <p className="small" style={{ marginTop: 8 }}>
            📸 <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a><br/>
            🔗 <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Kde působím</h3>
          <p className="small" style={{ marginTop: 4 }}>
            Vysočina a okolí · osobně i online.<br/>
            Člen <a href="https://wmfinance.cz" target="_blank" rel="noreferrer">wmfinance.cz</a>
          </p>
        </div>
      </div>
    </section>
  );
}
