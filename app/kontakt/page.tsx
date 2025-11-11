// app/kontakt/page.tsx

export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px" }}>
      <h1>Kontakt</h1>
      <p>
        Telefon: <strong>774 697 755</strong> • E-mail:{" "}
        <strong>patrik.svoboda@wmfinance.cz</strong>
      </p>

      {/* Formspree – posílá na tvůj e-mail po potvrzení endpointu */}
      <form
        action="https://formspree.io/f/mzzybvpl"
        method="POST"
        style={{ display: "grid", gap: 12, marginTop: 16 }}
      >
        <input name="jmeno" placeholder="Jméno" required />
        <input name="email" type="email" placeholder="E-mail" required />
        <input name="telefon" placeholder="Telefon" />
        <textarea name="zprava" placeholder="Vaše zpráva" rows={6} required />

        {/* Volitelné: předmět e-mailu + stránka po odeslání */}
        <input
          type="hidden"
          name="_subject"
          value="Poptávka z webu svoboda-efa.cz"
        />
        <input type="hidden" name="_next" value="https://svoboda-efa.cz/?odeslano=1" />

        {/* Honeypot proti spamu – nech prázdné */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <button type="submit" style={btn}>
          Odeslat poptávku
        </button>
      </form>

      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
        Odesláním souhlasíte se zpracováním osobních údajů pro účely zpětného
        kontaktování.
      </p>
    </main>
  );
}

const btn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 9999,
  background: "#0f172a",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};
