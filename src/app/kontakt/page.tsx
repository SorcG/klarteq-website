import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "../components/ContactForm";
import Kicker from "../components/Kicker";
import { localBusinessSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Kontakt · Webentwickler in Gütersloh anfragen | Klarteq",
  },
  description:
    "Schreib mir für dein Website-Projekt in OWL. Kostenloses Erstgespräch, Antwort innerhalb von 24 Stunden. Aus Gütersloh, für Ostwestfalen.",
};

const NEXT_STEPS = [
  {
    title: "Innerhalb von 24 Stunden bekommst du eine Antwort.",
    text: "Meistens schneller. Werktags fast immer innerhalb weniger Stunden.",
  },
  {
    title: "Wir vereinbaren das Erstgespräch.",
    text: "30 bis 60 Minuten, kostenlos, unverbindlich. Per Video-Call oder in Person in Gütersloh.",
  },
  {
    title: "Du bekommst ein konkretes Angebot.",
    text: "Schriftlich, mit Festpreis, ohne Kleingedrucktes. Du entscheidest danach, ob wir starten.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {/* 9.2 Hero */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-28">
          <Kicker>Projekt anfragen</Kicker>
          <h1 className="max-w-[760px] text-h1 font-sora">Kontakt</h1>
          <p className="mt-6 max-w-[680px] font-serif text-[18px] leading-[1.65] text-muted">
            Erzähl mir von deinem Projekt. Ich melde mich innerhalb von 24
            Stunden.
          </p>
        </div>
      </section>

      {/* 9.3 Formular */}
      <section className="bg-white">
        <div className="mx-auto max-w-[640px] px-6 py-20 md:py-24">
          <Suspense fallback={<div className="h-[600px]" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* 9.4 Was passiert jetzt? */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <Kicker>Nach deiner Anfrage</Kicker>
          <h2 className="max-w-[760px] text-h2">Was passiert jetzt?</h2>

          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {NEXT_STEPS.map((step, idx) => (
              <li key={step.title} className="flex flex-col">
                <span className="font-mono text-[36px] font-medium leading-none text-accent">
                  {idx + 1}
                </span>
                <h3 className="mt-4 font-sora text-[18px] font-bold leading-[1.3] text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 font-serif text-[16px] leading-[1.7] text-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 9.5 Alternative Kontaktwege */}
      <section className="bg-white">
        <div className="mx-auto max-w-[720px] px-6 py-20 md:py-28 text-center">
          <Kicker>
            <span className="inline-block">Lieber direkt?</span>
          </Kicker>
          <h2 className="text-h2">Lieber direkt schreiben?</h2>
          <div className="mt-8 space-y-2 font-serif text-[17px] leading-[1.65] text-dark">
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@klarteq.de"
                className="text-accent hover:text-accent-hover hover:underline"
              >
                info@klarteq.de
              </a>
            </p>
            <p className="text-muted">
              Antwortzeit: innerhalb von 24 Stunden, werktags meist schneller
            </p>
          </div>
        </div>
      </section>

      {/* 9.6 Standort */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[720px] px-6 py-20 md:py-28">
          <Kicker>Standort</Kicker>
          <h2 className="text-h2">Wo ich arbeite.</h2>
          <div className="mt-8 space-y-5 font-serif text-body leading-[1.7] text-dark">
            <p>
              Klarteq ist in Gütersloh zuhause. Ich arbeite für Unternehmen in
              ganz Ostwestfalen-Lippe – besonders in Gütersloh, Bielefeld,
              Rheda-Wiedenbrück, Verl, Harsewinkel, Herzebrock-Clarholz, Halle
              (Westf.) und Umgebung.
            </p>
            <p>
              Die meiste Arbeit läuft remote (per Video-Call und E-Mail). Für
              Erstgespräche oder Präsentationen komme ich in der Region auch
              gerne persönlich vorbei.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
