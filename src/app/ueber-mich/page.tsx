import type { Metadata } from "next";
import Image from "next/image";
import Button from "../components/Button";
import Card from "../components/Card";
import Kicker from "../components/Kicker";
import { personSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Über Luca Sorci · Webentwickler aus Gütersloh | Klarteq",
  },
  description:
    "Ich bin Luca, Webentwickler aus Gütersloh. Hauptberuflich im E-Commerce, nebenberuflich baue ich Websites für lokale Unternehmen in OWL.",
};

const VALUES = [
  {
    title: "Ehrlich, auch wenn's unangenehm ist.",
    text: "Wenn dein Vorhaben nicht sinnvoll ist, sage ich's. Wenn Starter reicht und du Business anfragst, sage ich's. Ich verkaufe dir nichts, was du nicht brauchst.",
  },
  {
    title: "Klar, nicht kompliziert.",
    text: "Ich rede nicht in Fachchinesisch. Was ich baue, erkläre ich so, dass du es verstehst. Auch wenn du noch nie eine Website beauftragt hast.",
  },
  {
    title: "Schnell, aber nicht hektisch.",
    text: "Ich arbeite mit modernen Tools, die mich beschleunigen. Aber ich lasse mir die Zeit, die nötig ist, damit das Ergebnis stimmt. Tempo ersetzt keine Sorgfalt.",
  },
  {
    title: "Deine Seite, dein Eigentum.",
    text: "Du bist nicht an mich gebunden. Code, Inhalte, Domain – alles gehört dir. Ich will Kunden, die bleiben, weil ich gut bin. Nicht, weil sie nicht wegkönnen.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* 8.2 Hero */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-28">
          <Kicker>Dein Entwickler</Kicker>
          <h1 className="max-w-[760px] text-h1 font-sora">Über mich</h1>
          <p className="mt-6 max-w-[680px] font-serif text-[18px] leading-[1.65] text-muted">
            Warum ein E-Commerce-Entwickler aus Gütersloh Websites für lokale
            Unternehmen baut.
          </p>
        </div>
      </section>

      {/* 8.3 Hauptbereich */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[45fr_55fr] md:items-start">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-card md:mx-0">
              <Image
                src="/images/luca2.jpg"
                alt="Porträt von Luca Sorci, Gründer von Klarteq"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority={false}
              />
            </div>

            <div className="space-y-6">
              <p className="font-serif text-body leading-[1.7] text-dark">
                Ich bin Luca Sorci. Entwickler aus Gütersloh, mit italienischen
                Wurzeln und einem Faible für sauber gebaute Dinge.
                Hauptberuflich arbeite ich im E-Commerce – einer Welt, in der
                jede Sekunde Ladezeit Geld kostet und jeder Klick bis hinter
                die dritte Kommastelle gemessen wird. Man lernt dort sehr
                schnell: Eine Website ist kein Deko-Objekt. Sie ist ein
                Werkzeug, das entweder funktioniert oder versagt.
              </p>
              <p className="font-serif text-body leading-[1.7] text-dark">
                In meiner Hauptarbeit sehe ich täglich, was Websites leisten
                müssen, um Umsatz zu machen. Schnelle Ladezeiten. Klare
                Struktur. Konsequente Optimierung für Suchmaschinen.
                Mobile-First, weil über 70 % aller Besucher vom Smartphone
                kommen. Das ist Standard in meiner Welt.
              </p>
              <p className="font-serif text-body leading-[1.7] text-dark">
                Wenn ich dann sehe, wie lokale Unternehmen in Ostwestfalen mit
                Websites arbeiten, die vor 10 Jahren gebaut wurden und seitdem
                nicht angefasst wurden, wird mir klar: Hier ist eine riesige
                Lücke. Zwischen dem, was digital möglich ist, und dem, was
                lokal ankommt. Genau diese Lücke will ich mit Klarteq
                schließen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8.4 Warum ich das mache (Eisdielen-Story) */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[720px] px-6 py-20 md:py-28">
          <Kicker>Warum ich das mache</Kicker>
          <h2 className="text-h2">Warum ich das mache.</h2>
          <div className="mt-8 space-y-6">
            <p className="font-serif text-body leading-[1.7] text-dark">
              Es gibt eine Eisdiele in Gütersloh, die ich liebe. Das Eis ist
              handgemacht, die Familie dahinter steht seit Jahren hinter der
              Theke, im Sommer steht man dort eine halbe Stunde an – und das
              gerne.
            </p>
            <p className="font-serif text-body leading-[1.7] text-dark">
              Vor ein paar Monaten wollte ich jemandem die Öffnungszeiten
              schicken. Ich habe die Website aufgerufen. Auf dem Handy. Sie
              hat neun Sekunden zum Laden gebraucht. Die Speisekarte war ein
              PDF, das auf dem Smartphone nicht lesbar war. Die
              Öffnungszeiten standen irgendwo, aber nicht da, wo man sie
              erwartet. Ich kenne den Laden. Ich weiß, wie gut er ist. Aber
              jemand, der ihn online zum ersten Mal findet, würde das nicht
              glauben.
            </p>
            <p className="font-serif text-body leading-[1.7] text-dark">
              Das ist kein Einzelfall. Das ist der Standard. Und das muss
              nicht so bleiben.
            </p>
            <p className="font-serif text-body leading-[1.7] text-dark">
              Lokale Unternehmen sind das Rückgrat von Städten wie Gütersloh,
              Bielefeld, Rheda-Wiedenbrück. Sie verdienen Websites, die ihrem
              Angebot gerecht werden. Nicht Websites, die ihnen schaden.
            </p>
          </div>
        </div>
      </section>

      {/* 8.5 Werte */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <Kicker>Werte</Kicker>
          <h2 className="max-w-[760px] text-h2">Wie ich arbeite.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <Card key={value.title}>
                <h3 className="font-sora text-[18px] font-bold leading-[1.3] text-primary">
                  {value.title}
                </h3>
                <p className="mt-4 font-serif text-[16px] leading-[1.7] text-muted">
                  {value.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8.6 Abschluss-CTA */}
      <section className="bg-dark">
        <div className="mx-auto max-w-[720px] px-6 py-24 text-center">
          <h2 className="text-h2 text-white">Lust auf ein Gespräch?</h2>
          <p className="mt-6 font-serif text-body leading-[1.7] text-white/70">
            Das Erstgespräch ist kostenlos und unverbindlich. 30 bis 60
            Minuten, entweder per Video-Call oder in Person in Gütersloh.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg" href="/kontakt">
              Projekt besprechen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
