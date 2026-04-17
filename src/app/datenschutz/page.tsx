import type { Metadata } from "next";
import Kicker from "../components/Kicker";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Klarteq",
  description: "Datenschutzerklärung von Klarteq.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-powder">
      <div className="mx-auto max-w-[720px] px-6 py-20 md:py-28">
        <Kicker>Datenschutz</Kicker>
        <h1 className="text-h1 font-sora">Datenschutzerklärung</h1>

        <div className="mt-10 font-serif text-body leading-[1.7] text-muted">
          <p>
            PLATZHALTER: Hier kommt der mit einem Datenschutz-Generator
            (z. B. datenschutz-generator.de) erstellte Text rein. Bitte
            ersetze diesen Absatz durch den generierten Inhalt. Erforderlich:
            Verantwortlicher, Hosting, Kontaktformular, Resend-Nutzung,
            Cookies/Tracking, Betroffenenrechte.
          </p>
        </div>
      </div>
    </section>
  );
}
