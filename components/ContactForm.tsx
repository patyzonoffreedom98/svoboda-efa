// components/ContactForm.tsx
"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        // odpověď nebyla JSON – necháme data = null
      }

      if (!res.ok || !data?.ok) {
        const serverMessage: string | undefined =
          data?.error ||
          (res.ok ? undefined : `Server vrátil chybu ${res.status}.`);
        throw new Error(
          serverMessage || "Nepodařilo se odeslat formulář."
        );
      }

      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error("ContactForm error:", err);
      setStatus("error");
      setError(
        `Něco se nepovedlo. Zkuste prosím znovu. (Detail: ${
          err?.message || "neznámá chyba"
        })`
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-gray-300">
            Jméno a příjmení
          </label>
          <input
            id="name"
            name="name"
            required
            className="input"
            placeholder="Jan Novák"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-gray-300">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input"
            placeholder="jan.novak@example.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm text-gray-300">
          S čím ti můžu pomoci?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="input min-h-[120px]"
          placeholder="Stručně popiš svou situaci (hypotéka, investice, renta...)"
        />
      </div>

      {status === "success" && (
        <p className="text-sm text-emerald-400">
          Děkuji, zpráva byla odeslána. Ozvu se co nejdřív.
        </p>
      )}

      {status === "error" && error && (
        <p className="text-sm text-red-400 whitespace-pre-line">{error}</p>
      )}

      <button
        type="submit"
        className="btn w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Odesílám..." : "Odeslat zprávu"}
      </button>

      <p className="small text-gray-400">
        Odesláním formuláře souhlasíš se zpracováním osobních údajů za účelem
        kontaktování ohledně tvého dotazu.
      </p>
    </form>
  );
}
