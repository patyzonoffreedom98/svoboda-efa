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
            📞 <a href="tel:+420774697755">+420&nbsp;774&nbsp;697&nbsp;755</a><br/>
            ✉️ <a href="mailto:patrik.svoboda@wmfinance.cz">patrik.svoboda@wmfinance.cz</a>
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Sledujte novinky</h3>
          <p className="small" style={{ marginTop: 4 }}>
            Krátká videa, tipy a vysvětlení bez nátlaku.
          </p>
          <p className="small" style={{ marginTop: 8 }}>
            📸 <a href="https://www.instagram.com/patrik.svoboda_efa/" target="_blank" rel="noreferrer">Instagram</a><br/>
            🔗 <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Kde působím</h3>
          <p className="small" style={{ marginTop: 4 }}>
            <strong>Vysočina a celá ČR</strong> – osobně i online.
          </p>
          <p className="small" style={{ marginTop: 8 }}>
            Člen <a href="https://wmfinance.cz" target="_blank" rel="noreferrer">wmfinance.cz</a>
          </p>
        </div>
      </div>
    </section>
  );
}
