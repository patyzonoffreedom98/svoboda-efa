import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";
    const source = typeof body.source === "string" ? body.source.trim() : "";

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Chybí e-mailová adresa." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;

    if (!apiKey || !from || !to) {
      console.error(
        "Kontakt API: chybí RESEND_API_KEY / CONTACT_FROM / CONTACT_TO"
      );
      return NextResponse.json(
        { ok: false, error: "Server není správně nastavený." },
        { status: 500 }
      );
    }

    const subject =
      "Nová zpráva z kontaktního formuláře – svoboda-efa";

    const text = `
Nový kontakt z webu svoboda-efa:

Jméno: ${name || "-"}
E-mail: ${email}
Telefon: ${phone || "-"}
Zdroj: ${source || "-"}

Zpráva:
${message || "-"}

Celá data z formuláře:
${JSON.stringify(body, null, 2)}
    `.trim();

    const html = `
      <h2>Nový kontakt z webu svoboda-efa</h2>
      <p><strong>Jméno:</strong> ${name || "-"}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || "-"}</p>
      ${source ? `<p><strong>Zdroj:</strong> ${source}</p>` : ""}
      <p><strong>Zpráva:</strong></p>
      <p>${(message || "-").replace(/\n/g, "<br />")}</p>
      <hr />
      <p><strong>Celá data z formuláře (JSON):</strong></p>
      <pre>${JSON.stringify(body, null, 2)}</pre>
    `;

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        html,
        reply_to: email || undefined,
      }),
    });

    if (!resendResponse.ok) {
      let errorDetail = "";

      try {
        // Resend většinou vrací JSON s chybou
        const errorData = await resendResponse.json();
        errorDetail = JSON.stringify(errorData);
      } catch {
        // kdyby to nebyl JSON, vezmeme prostý text
        errorDetail = await resendResponse.text();
      }

      console.error(
        "Resend API error",
        resendResponse.status,
        errorDetail
      );

      return NextResponse.json(
        {
          ok: false,
          error: `Resend error ${resendResponse.status}: ${errorDetail.slice(
            0,
            200
          )}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Něco se pokazilo na serveru.",
      },
      { status: 500 }
    );
  }
}
