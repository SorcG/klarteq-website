import type { Metadata } from "next";
import Kicker from "../components/Kicker";

export const metadata: Metadata = {
  title: "Impressum | Klarteq",
  description:
    "Impressum und rechtliche Angaben von Klarteq, Luca Sorci, Gütersloh.",
  robots: { index: true, follow: true },
};

const H2_CLASS = "mt-10 font-sora text-h3 text-primary";
const LINK_CLASS =
  "text-accent hover:text-accent-hover hover:underline break-words";

export default function ImpressumPage() {
  return (
    <section className="bg-powder">
      <div className="mx-auto max-w-[720px] px-6 py-20 md:py-28">
        <Kicker>Rechtliche Angaben</Kicker>
        <h1 className="text-h1 font-sora">Impressum</h1>

        <div className="mt-10 font-serif text-body leading-[1.7] text-dark">
          <p>
            Luca Sorci
            <br />
            Name: Luca Sorci
            <br />
            Geschäftsbezeichnung / Unternehmensname: Klarteq
            <br />
            Webentwicklung
            <br />
            Avenwedder Straße 318
            <br />
            33335 Gütersloh
          </p>

          <h2 className={H2_CLASS}>Kontakt</h2>
          <p className="mt-4">
            Telefon: 017670552197
            <br />
            E-Mail:{" "}
            <a href="mailto:info@klarteq.de" className={LINK_CLASS}>
              info@klarteq.de
            </a>
          </p>

          <h2 className={H2_CLASS}>
            Berufsbezeichnung und berufsrechtliche Regelungen
          </h2>
          <p className="mt-4">
            Berufsbezeichnung:
            <br />
            Webentwickler
          </p>

          <h2 className={H2_CLASS}>Redaktionell verantwortlich</h2>
          <p className="mt-4">Luca Sorci</p>

          <h2 className={H2_CLASS}>
            {
              "Verbraucher\u00ADstreit\u00ADbeilegung/Universal\u00ADschlichtungs\u00ADstelle"
            }
          </h2>
          <p className="mt-4">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p className="mt-10 text-[14px] text-muted">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de/impressum-generator.html"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              https://www.e-recht24.de/impressum-generator.html
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
