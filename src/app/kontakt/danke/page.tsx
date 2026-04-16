import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Danke für deine Anfrage | Klarteq",
  description: "Deine Anfrage ist bei Klarteq eingegangen.",
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <section className="bg-powder">
      <div className="mx-auto max-w-[520px] px-6 py-24 text-center md:py-32">
        <CheckCircle2
          size={64}
          className="mx-auto text-accent"
          aria-hidden="true"
        />
        <h1 className="mt-8 text-h1 font-sora">Danke für deine Anfrage!</h1>
        <p className="mt-6 font-serif text-[18px] leading-[1.65] text-dark">
          Ich habe deine Nachricht erhalten und melde mich innerhalb von 24
          Stunden bei dir – werktags meistens schon innerhalb weniger Stunden.
        </p>
        <p className="mt-6 font-serif text-[14px] text-muted">
          Falls du in der Zwischenzeit Fragen hast:{" "}
          <a
            href="mailto:info@klarteq.de"
            className="text-accent hover:text-accent-hover hover:underline"
          >
            info@klarteq.de
          </a>
        </p>
        <div className="mt-10 flex justify-center">
          <Button variant="secondary" size="md" href="/">
            Zurück zur Startseite
          </Button>
        </div>
      </div>
    </section>
  );
}
