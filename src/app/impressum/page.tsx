import type { Metadata } from "next";
import Kicker from "../components/Kicker";

export const metadata: Metadata = {
  title: "Impressum | Klarteq",
  description:
    "Impressum und rechtliche Angaben von Klarteq, Luca Sorci, Gütersloh.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="bg-powder">
      <div className="mx-auto max-w-[720px] px-6 py-20 md:py-28">
        <Kicker>Rechtliche Angaben</Kicker>
        <h1 className="text-h1 font-sora">Impressum</h1>

        <div className="mt-10 font-serif text-body leading-[1.7] text-muted">
          <p>
            PLATZHALTER: Hier kommt der mit e-recht24.de oder einem
            vergleichbaren Generator erstellte Impressums-Text rein. Bitte
            ersetze diesen Absatz durch den generierten Inhalt.
            Pflichtangaben: Name, Anschrift, Kontakt, Berufsbezeichnung,
            USt-Hinweis nach §19 UStG.
          </p>
        </div>
      </div>
    </section>
  );
}
