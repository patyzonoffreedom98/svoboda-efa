'use client';

import { useState } from 'react';

type ContactFormProps = {
  title?: string;
  defaultMessage?: string;
};

export default function ContactForm({
  title = 'Chci si domluvit konzultaci',
  defaultMessage = 'Dobrý den, rád(a) bych si domluvil(a) úvodní konzultaci. Děkuji.',
}: ContactFormProps) {
  // Formspree ID načteme z proměnné prostředí
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const action = formId ? `https://formspree.io/f/${formId}` : undefined;

  const [sent, setSent] = useState(false);

  return (
    <section className="max-w-xl w-full">
      {title && (
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      )}

      <form
        method="POST"
        action={action}
        onSubmit={(e) => {
          if (!action) {
            e.preventDefault();
            alert('Chybí Formspree ID (NEXT_PUBLIC_FORMSPREE_ID). Zkontroluj nastavení ve Vercelu.');
          } else {
            setSent(true);
          }
        }}
        className="space-y-3"
      >
        {/* předmět e-mailu */}
        <input type="hidden" name="_subject" value="Zpráva z webu – svoboda-efa.cz" />

        <div className="grid gap-3 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm">Jméno</label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Jan"
              className="rounded-md border px-3 py-2 bg-white/90"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm">Příjmení</label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Novák"
              className="rounded-md border px-3 py-2 bg-white/90"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">E-mail</label>
          <input
            type="email"
            name="email"
            required
            placeholder="jan.novak@email.cz"
            className="rounded-md border px-3 py-2 bg-white/90 w-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">Zpráva</label>
          <textarea
            name="message"
            rows={5}
            defaultValue={defaultMessage}
            className="rounded-md border px-3 py-2 bg-white/90 w-full"
          />
        </div>

        <button
          type="submit"
          className="rounded-md px-4 py-2 font-semibold border bg-[#0b1728] text-white hover:opacity-90"
        >
          Odeslat
        </button>

        {!action && (
          <p className="text-sm text-red-500">
            Formulář nelze odeslat: chybí <code>NEXT_PUBLIC_FORMSPREE_ID</code> ve Vercelu.
          </p>
        )}

        {sent && action && (
          <p className="text-sm text-green-600">Odesílám… pokud nepřijde e-mail, napiš mi, mrknu na to.</p>
        )}
      </form>
    </section>
  );
}
