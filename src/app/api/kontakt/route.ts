import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactBody {
  name?: string;
  email?: string;
  company?: string;
  topic?: string;
  message?: string;
  website?: string; // Honeypot
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY fehlt");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = (await req.json()) as ContactBody;
    const {
      name,
      email,
      company,
      topic,
      message,
      website,
    } = body;

    // Honeypot: Bot-Erkennung – stillschweigend Erfolg melden, kein Versand
    if (website && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    // Pflichtfelder
    if (!name?.trim() || !email?.trim() || !topic?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Klarteq Kontakt <kontakt@klarteq.de>",
      to: "info@klarteq.de",
      replyTo: email.trim(),
      subject: `Neue Anfrage: ${topic} – ${name}`,
      text: `
Neue Anfrage über das Klarteq-Kontaktformular:

Name: ${name.trim()}
E-Mail: ${email.trim()}
Unternehmen: ${company?.trim() || "(nicht angegeben)"}
Thema: ${topic}

Nachricht:
${message.trim()}
      `.trim(),
    });

    if (error) {
      console.error("Resend-Fehler:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht versendet werden" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Kontaktformular-Fehler:", err);
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
