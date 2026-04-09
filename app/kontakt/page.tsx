'use client';

import { FormEvent, useState } from 'react';

export default function KontaktPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xjgpddqa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Děkuji, zpráva byla úspěšně odeslána.');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setErrorMessage('Odeslání se nepovedlo. Zkuste to prosím znovu.');
      }
    } catch {
      setErrorMessage('Odeslání se nepovedlo. Zkuste to prosím znovu.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="kontakt-page">
        <div className="kontakt-wrapper">
          <section className="hero-card">
            <p className="eyebrow">Kontakt</p>
            <h1>Spojme se</h1>
            <p className="hero-text">
              Pokud řešíte hypotéku, investice, ochranu příjmu nebo dlouhodobý
              finanční plán, napište mi. Ozvu se vám a společně se podíváme na
              vhodné řešení pro vaši konkrétní situaci.
            </p>

            <div className="hero-facts">
              <div className="fact-box">
                <span className="fact-label">Telefon</span>
                <strong>774 697 755</strong>
              </div>
              <div className="fact-box">
                <span className="fact-label">E-mail</span>
                <strong>info@svoboda-efa.cz</strong>
              </div>
              <div className="fact-box">
                <span className="fact-label">Spolupráce</span>
                <strong>Osobně i online</strong>
              </div>
            </div>
          </section>

          <section className="kontakt-grid">
            <div className="panel">
              <h2>Napište mi zprávu</h2>

              <form onSubmit={handleSubmit} className="form-grid">
                <div className="field">
                  <label>Jméno a příjmení</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>E-mail</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Telefon</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Zpráva</label>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" disabled={loading}>
                  {loading ? 'Odesílám...' : 'Odeslat zprávu'}
                </button>

                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}

                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </form>
            </div>

            <div className="panel side-panel">
              <h2>Kontaktní informace</h2>

              <div className="side-card">
                <span>Jméno</span>
                <strong>Bc. Patrik Svoboda, EFA</strong>
              </div>

              <div className="side-card">
                <span>Telefon</span>
                <strong>774 697 755</strong>
              </div>

              <div className="side-card">
                <span>E-mail</span>
                <strong>info@svoboda-efa.cz</strong>
              </div>

              <div className="side-note">
                <p>
                  Preferujete rychlý kontakt? Klidně mi napište přes formulář a
                  stručně popište, co aktuálně řešíte. Podle toho navážeme dalším
                  postupem.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .kontakt-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top center, rgba(198, 165, 92, 0.16), transparent 28%),
            linear-gradient(180deg, #07111f 0%, #091728 100%);
          padding: 56px 20px 80px;
          color: #f7f3eb;
        }

        .kontakt-wrapper {
          max-width: 1180px;
          margin: 0 auto;
        }

        .hero-card {
          background: rgba(10, 19, 33, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
          margin-bottom: 28px;
        }

        .eyebrow {
          margin: 0 0 12px 0;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c6a55c;
          font-weight: 700;
        }

        h1 {
          margin: 0;
          font-size: 48px;
          line-height: 1.08;
          font-weight: 700;
          color: #f8f4ec;
        }

        .hero-text {
          margin: 18px 0 0 0;
          max-width: 850px;
          font-size: 18px;
          line-height: 1.75;
          color: rgba(247, 243, 235, 0.78);
        }

        .hero-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 26px;
        }

        .fact-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(198, 165, 92, 0.2);
          border-radius: 20px;
          padding: 18px;
        }

        .fact-label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(247, 243, 235, 0.55);
          margin-bottom: 8px;
        }

        .fact-box strong {
          font-size: 18px;
          color: #f8f4ec;
        }

        .kontakt-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
        }

        .panel {
          background: rgba(10, 19, 33, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 30px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);
        }

        .panel h2 {
          margin: 0 0 22px 0;
          font-size: 30px;
          color: #f8f4ec;
        }

        .form-grid {
          display: grid;
          gap: 18px;
        }

        .field {
          display: grid;
          gap: 10px;
        }

        .field label {
          font-size: 15px;
          font-weight: 600;
          color: rgba(247, 243, 235, 0.78);
        }

        .field input,
        .field textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #0f1b2d;
          color: #f8f4ec;
          border-radius: 16px;
          padding: 16px 18px;
          font-size: 17px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          resize: vertical;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: #c6a55c;
          box-shadow: 0 0 0 3px rgba(198, 165, 92, 0.14);
        }

        button {
          border: none;
          border-radius: 16px;
          padding: 16px 22px;
          font-size: 16px;
          font-weight: 700;
          background: #c6a55c;
          color: #091728;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.2s ease;
        }

        button:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        button:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }

        .success-message {
          margin: 0;
          color: #7ee0a1;
          font-size: 15px;
          line-height: 1.6;
        }

        .error-message {
          margin: 0;
          color: #ff8f8f;
          font-size: 15px;
          line-height: 1.6;
        }

        .side-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .side-card {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 18px;
          padding: 18px;
        }

        .side-card span {
          display: block;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(247, 243, 235, 0.55);
          margin-bottom: 8px;
        }

        .side-card strong {
          font-size: 20px;
          color: #f8f4ec;
        }

        .side-note {
          margin-top: 6px;
          background: linear-gradient(135deg, rgba(198, 165, 92, 0.16), rgba(198, 165, 92, 0.05));
          border: 1px solid rgba(198, 165, 92, 0.25);
          border-radius: 22px;
          padding: 22px;
        }

        .side-note p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(247, 243, 235, 0.76);
        }

        @media (max-width: 960px) {
          h1 {
            font-size: 38px;
          }

          .kontakt-grid,
          .hero-facts {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .kontakt-page {
            padding: 32px 14px 56px;
          }

          .hero-card,
          .panel {
            padding: 22px;
            border-radius: 22px;
          }

          h1 {
            font-size: 32px;
          }

          .panel h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
