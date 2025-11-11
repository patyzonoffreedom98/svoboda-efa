'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');
  const [msg, setMsg] = useState<string>('');

  const endpointId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const endpoint = endpointId ? `https://formspree.io/f/${endpointId}` : '';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      setStatus('error');
      setMsg('Chybí Formspree ID (NEXT_PUBLIC_FORMSPREE_ID).');
      return;
    }
    setStatus('sending');
    setMsg('');

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(endpoint, {
        method: 'POST',
        // DŮLEŽITÉ: u FormData nenasazuj Content-Type – nastaví se sám (boundary).
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('ok');
        setMsg('Děkuji! Ozvu se co nejdřív.');
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        const err = json?.errors?.[0]?.message || 'Odeslání se nepovedlo.';
        setStatus('error');
        setMsg(err);
      }
    } catch (err) {
      setStatus('error');
      setMsg('Něco se pokazilo při odesílání.');
    }
  }

  return (
    <div className="max-w-xl rounded-2xl p-6 bg-white/5 border border-white/10">
      <h3 className="text-xl font-semibold mb-2">Nezávazná konzultace zdarma</h3>
      <p className="text-sm opacity-80 mb-4">
        Napište mi pár slov – ozvu se a domluvíme si termín.
      </p>

      <form onSubmit={onSubmit}>
        {/* Honeypot proti spamu */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none"
              type="text" name="jmeno" placeholder="Jméno" required
            />
            <input
              className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none"
              type="text" name="prijmeni" placeholder="Příjmení" required
            />
          </div>

          <input
            className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none"
            type="email" name="email" placeholder="E-mail" required
          />

          <textarea
            className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none min-h-[110px]"
            name="zprava"
            placeholder="Dobrý den, rád bych si domluvil úvodní konzultaci."
            required
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-lg px-4 py-2 bg-[#0b1728] text-white disabled:opacity-60"
          >
            {status === 'sending' ? 'Odesílám…' : 'Odeslat'}
          </button>

          {status === 'ok' && (
            <p className="text-sm text-emerald-400">{msg}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-rose-400">{msg}</p>
          )}
        </div>
      </form>
    </div>
  );
}
