// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = (body.name as string | undefined)?.trim();
    const email = (body.email as string | undefined)?.trim();
    const message = (body.message as string | undefined)?.trim();

    // základní kontrola
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Vyplň prosím všechna pole." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;

    if (!to || !from || !process.env.RESEND_API_KEY) {
      console.error("Contact API misconfigured – missing env vars");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Omlouvám se, něco je špatně nastavené. Zkus to prosím později nebo mi zavolej.",
        },
        { status: 500 }
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://svoboda-efa.vercel.app";

    const subject = `Nová poptávka z webu – ${name}`;
    const text = `
Nová zpráva z kontaktního formuláře:

Jméno: ${name}
E-mail: ${email}

Zpráva:
${message}

---

Odesláno z: ${siteUrl}
    `.trim();

    const html = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.5; color: #111827;">
        <h2>Nová poptávka z webu</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <hr style="margin-top: 24px; margin-bottom: 8px; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size: 12px; color: #6b7280;">
          Odesláno z: ${siteUrl}
        </p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Omlouvám se, zprávu se nepodařilo odeslat. Zkus to prosím za chvíli nebo mi zavolej.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API unexpected error", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Něco se pokazilo. Zkus to prosím za chvíli nebo mi zavolej.",
      },
      { status: 500 }
    );
  }
}
