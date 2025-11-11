'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // ID z ENV proměnné (musí být nastavena ve Vercelu jako NEXT_PUBLIC_FORMSPREE_ID)
  const FORMSPREE_ID =
    process.env.NEXT_PUBLIC_FORMSPREE_ID || ''; // např. "xknlqzye"

  const endpoint = FORMSPREE_ID
    ? `https://formspree.io/f/${FORMSPREE_ID}`
    : '';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(null);
    setErr(null);

    if (!endpoint) {
      setErr('Chybí ID formuláře (ENV NEXT_PUBLIC_FORMSPREE_ID).');
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setSending(true);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setOk('Děkuji! Zpráva byla odeslána – brzy se ozvu.');
      } else {
        setErr('Odeslání se nepovedlo. Zkuste to prosím znovu.');
      }
    } catch (_) {
      setErr('Něco se pokazilo při odeslání. Zkuste to prosím znovu.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-1">Jméno</label>
          <input
            name="jmeno"
            required
            className="w-full rounded-lg px-3 py-2 bg-[#0f1f2d] border border-[#233447] focus:outline-none"
            placeholder="Jan"
          />
        </div>
        <div>
          <label className="block mb-1">Příjmení</label>
          <input
            name="prijmeni"
            required
            className="w-full rounded-lg px-3 py-2 bg-[#0f1f2d] border border-[#233447] focus:outline-none"
            placeholder="Novák"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1">E-mail</label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-lg px-3 py-2 bg-[#0f1f2d] border border-[#233447] focus:outline-none"
          placeholder="jan.novak@email.cz"
        />
      </div>

      <div>
        <label className="block mb-1">Zpráva</label>
        <textarea
          name="zprava"
          rows={4}
          className="w-full rounded-lg px-3 py-2 bg-[#0f1f2d] border border-[#233447] focus:outline-none"
          placeholder="Dobrý den, rád bych si domluvil úvodní konzultaci…"
          required
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="rounded-xl px-5 py-2 font-medium bg-[#f0b728] text-black disabled:opacity-70"
      >
        {sending ? 'Odesílám…' : 'Odeslat'}
      </button>

      {ok && <p className="text-green-400">{ok}</p>}
      {err && <p className="text-red-400">{err}</p>}
    </form>
  );
}
