import type { Metadata } from "next";
import Image from "next/image";
import {
  Clock,
  Search,
  Smartphone,
  Zap,
  Gauge,
  Code2,
  type LucideIcon,
} from "lucide-react";
import Button from "./components/Button";
import Card from "./components/Card";
import Kicker from "./components/Kicker";
import FAQ from "./components/FAQ";
import HeroCounters from "./components/HeroCounters";
import ScrollReveal from "./components/ScrollReveal";
import { localBusinessSchema } from "./lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Webdesign Gütersloh · Schnelle Websites für lokale Unternehmen | Klarteq",
  },
  description:
    "Schnelle, sichtbare Websites für lokale Unternehmen in Gütersloh und OWL. Drei Pakete ab 890 €. Jetzt kostenloses Erstgespräch anfragen.",
  openGraph: {
    title: "Klarteq · Webdesign für lokale Unternehmen in OWL",
    description:
      "Schnelle, sichtbare Websites aus Gütersloh. Drei Pakete, transparente Preise.",
    url: "https://klarteq.de",
    siteName: "Klarteq",
    locale: "de_DE",
    type: "website",
  },
};

const PROBLEM_CARDS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Clock,
    title: "Zu langsam",
    text: "Jede Sekunde Ladezeit kostet dich Besucher. Die meisten lokalen Websites laden über 5 Sekunden – der Standard liegt bei unter 2.",
  },
  {
    icon: Search,
    title: "Bei Google unsichtbar",
    text: "Wenn deine Seite nicht für lokale Suchen optimiert ist, findet dich niemand. Auch wenn dein Angebot das beste im Umkreis ist.",
  },
  {
    icon: Smartphone,
    title: "Mobil unbrauchbar",
    text: "Über 70 % deiner Besucher kommen übers Smartphone. Wenn die Seite dort bricht, ist der Kunde weg – bevor du überhaupt wusstest, dass er da war.",
  },
];

const APPROACH_BLOCKS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Zap,
    title: "Tempo, das Agenturen nicht liefern können",
    text: "Ich arbeite mit modernen, KI-gestützten Entwicklungstools. Das heißt: Was in einer klassischen Agentur vier Wochen dauert, baue ich in vier Tagen. Gleiche Qualität, andere Geschwindigkeit. Das spart dir Zeit, und weil meine Prozesse schlanker sind, auch Geld.",
  },
  {
    icon: Gauge,
    title: "Performance statt Dekoration",
    text: "Ich baue keine Seiten, die nur schön aussehen. Ich baue Seiten, die unter 2 Sekunden laden, die Google versteht, und die auf jedem Handy funktionieren. Lighthouse-Score 90+ ist bei mir Standard, nicht Upgrade.",
  },
  {
    icon: Code2,
    title: "Keine Templates",
    text: "Ich arbeite nicht mit Baukästen. Jede Seite wird als Code für dein Unternehmen geschrieben. Das klingt nach Mehraufwand – ist aber genau das, was deine Seite schneller, sichtbarer und langfristig wartbarer macht.",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "Ab 890 €",
    description:
      "Die perfekte erste Website. Ein Seitenbereich, mobil, bei Google auffindbar, mit Kontaktformular.",
    audience:
      "Für Handwerker, Selbstständige, kleine Dienstleister, die digital starten wollen.",
    href: "/leistungen#starter",
    highlighted: false,
  },
  {
    name: "Business",
    price: "Ab 1.690 €",
    description:
      "Mehrere Unterseiten, individuelles Design, Local SEO, Performance-Optimierung.",
    audience:
      "Für Restaurants, Vereine, etablierte Unternehmen, die Kunden aktiv gewinnen wollen.",
    href: "/leistungen#business",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Ab 2.990 €",
    description:
      "Alles aus Business plus Online-Buchung, Mehrsprachigkeit, CMS und erweiterte SEO-Strategie.",
    audience:
      "Für anspruchsvolle Projekte mit komplexeren Anforderungen.",
    href: "/leistungen#premium",
    highlighted: false,
  },
];

const REFERENCES = [
  {
    title: "DSC Gütersloh",
    meta: "Vereinswebsite · 2025",
    description:
      "Moderne Vereinsseite mit Mitglieder-Informationen, Terminen und mobiler Optimierung.",
    href: "#",
    alt: "Website DSC Gütersloh – Referenzprojekt von Klarteq",
  },
  {
    title: "Luca Sorci · Portfolio",
    meta: "Entwickler-Portfolio · 2025",
    description:
      "Zeigt Projekte aus den Bereichen Automatisierung, Bot-Entwicklung und Webentwicklung.",
    href: "#",
    alt: "Website Luca Sorci Portfolio – Referenzprojekt von Klarteq",
  },
];

const FAQ_ITEMS = [
  {
    question: "Wie lange dauert ein Website-Projekt?",
    answer:
      "Ein Starter-Projekt ist in 5–7 Werktagen live. Business-Projekte brauchen 2–3 Wochen. Premium-Projekte je nach Umfang 3–5 Wochen. Das beinhaltet immer Zeit für deine Korrekturwünsche – ich arbeite nicht im Akkord, sondern in Ruhe.",
  },
  {
    question: "Was brauche ich als Kunde, um zu starten?",
    answer:
      "Nicht viel. Ich brauche Inhalte zu deinem Unternehmen (Texte, Fotos, Logo), Zugang zu deiner Domain oder Zeit für einen Neukauf, und ein erstes Gespräch von 30–60 Minuten. Wenn du keine Texte hast, helfe ich dir dabei – das ist im Projekt eingeplant.",
  },
  {
    question: "Warum keine Mehrwertsteuer auf den Preisen?",
    answer:
      "Ich bin Kleinunternehmer nach §19 UStG. Das heißt: Ich weise keine Mehrwertsteuer aus. Für dich als Kunde ist das ein Vorteil – der Betrag auf dem Angebot ist der Betrag, den du zahlst. Keine 19 % Aufschlag.",
  },
  {
    question: "Was passiert nach dem Launch?",
    answer:
      "Deine Seite gehört dir – Code, Inhalte, Domain. Optional kannst du mein Wartungspaket buchen (49 €/Monat): Hosting, SSL, Backups, Sicherheitsupdates und kleine Änderungen inklusive. Wer das nicht will, kann die Seite auch selbst hosten oder zu einem anderen Dienstleister mitnehmen.",
  },
  {
    question: "Kann ich später selbst Inhalte ändern?",
    answer:
      "Im Business- und Premium-Paket auf Wunsch mit CMS – dann änderst du Texte und Bilder selbst. Im Starter-Paket ohne CMS, weil das den Preis günstig hält. Kleinere Änderungen übernehme ich für dich (im Wartungspaket inklusive).",
  },
  {
    question: "Wie wird bezahlt?",
    answer:
      "50 % Anzahlung bei Projektstart, 50 % bei Übergabe. Rechnung per E-Mail, Überweisung, keine Überraschungen.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {/* 1. Hero – bleibt mit bestehender fade-in-up Animation */}
      <section className="relative overflow-hidden bg-powder">
        <div
          aria-hidden="true"
          className="float-blob float-blob-1 pointer-events-none absolute"
          style={{
            top: "-80px",
            left: "-60px",
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, rgba(91,140,111,0.38), transparent 65%)",
            filter: "blur(65px)",
            borderRadius: "50%",
            animationDuration: "22s",
          }}
        />
        <div
          aria-hidden="true"
          className="float-blob float-blob-2 pointer-events-none absolute"
          style={{
            top: "-100px",
            right: "-60px",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(55,65,81,0.18), transparent 70%)",
            filter: "blur(70px)",
            borderRadius: "50%",
            animationDuration: "26s",
            animationDelay: "-8s",
          }}
        />
        <div
          aria-hidden="true"
          className="float-blob float-blob-3 pointer-events-none absolute"
          style={{
            top: "35%",
            left: "40%",
            width: "340px",
            height: "340px",
            background: "radial-gradient(circle, rgba(91,140,111,0.28), transparent 60%)",
            filter: "blur(55px)",
            borderRadius: "50%",
            animationDuration: "18s",
            animationDelay: "-5s",
          }}
        />
        <div
          aria-hidden="true"
          className="float-blob float-blob-4 pointer-events-none absolute"
          style={{
            bottom: "-120px",
            right: "10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(91,140,111,0.3), transparent 65%)",
            filter: "blur(60px)",
            borderRadius: "50%",
            animationDuration: "20s",
            animationDelay: "-12s",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <Kicker>Webentwicklung · Ostwestfalen</Kicker>
          </div>
          <h1
            className="max-w-[720px] text-h1 font-sora opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Websites, die für dein Geschäft arbeiten.
          </h1>
          <p
            className="mt-6 max-w-[560px] font-serif text-[18px] leading-[1.65] text-muted opacity-0 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            Ich baue schnelle, sichtbare Websites für lokale Unternehmen in
            Ostwestfalen. Keine Visitenkarten. Werkzeuge.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button variant="primary" size="lg" href="/kontakt">
              Projekt besprechen
            </Button>
            <Button variant="link" href="/leistungen">
              Leistungen ansehen →
            </Button>
          </div>
          <p
            className="mt-6 font-serif text-[14px] text-muted opacity-0 animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            Aus Gütersloh · Für Unternehmen in OWL
          </p>
          <div
            className="mt-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <HeroCounters />
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <ScrollReveal>
            <Kicker>Das Problem</Kicker>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="max-w-[760px] text-h2">
              Deine Website sollte Kunden bringen. Nicht nur existieren.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-[760px] font-serif text-body leading-[1.7] text-muted">
              Die meisten Websites lokaler Unternehmen haben eines gemeinsam: Sie
              wurden einmal gebaut und dann vergessen. Das Ergebnis sieht man in
              den Zahlen. Besucher, die nach drei Sekunden wieder weg sind, weil
              die Seite zu langsam lädt. Anfragen, die nicht kommen, weil Google
              die Seite auf Platz 40 versteckt. Kunden, die beim Mitbewerber
              landen, weil der eine mobile Seite hat, die wirklich funktioniert.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROBLEM_CARDS.map(({ icon: Icon, title, text }, idx) => (
              <ScrollReveal key={title} delay={240 + idx * 80}>
                <Card>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-card bg-accent-light"
                    aria-hidden="true"
                  >
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="mt-4 font-sora text-[20px] font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 font-serif text-[16px] leading-[1.7] text-muted">
                    {text}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. So arbeite ich */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <ScrollReveal>
            <Kicker>Mein Ansatz</Kicker>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="max-w-[760px] text-h2">
              Wie ich arbeite – und warum das anders ist.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-[760px] font-serif text-body leading-[1.7] text-muted">
              Ich komme nicht aus der klassischen Webdesign-Welt. Hauptberuflich
              baue ich im E-Commerce mit – einer Branche, in der jede Sekunde
              Ladezeit und jeder Klick gemessen wird. Dort lernst du sehr
              schnell, was eine Website leisten muss, um Umsatz zu machen.
              Dieses Denken bringe ich in jedes Projekt.
            </p>
          </ScrollReveal>
          <div className="mt-16 flex flex-col gap-14">
            {APPROACH_BLOCKS.map(({ icon: Icon, title, text }, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <ScrollReveal key={title} delay={idx * 100}>
                  <div
                    className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-12 ${
                      reverse ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-card bg-accent-light"
                      aria-hidden="true"
                    >
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sora text-h3 text-primary">{title}</h3>
                      <p className="mt-3 max-w-[640px] font-serif text-body leading-[1.7] text-muted">
                        {text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Leistungen-Teaser */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <ScrollReveal>
            <Kicker>Leistungen</Kicker>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="max-w-[760px] text-h2">
              Website-Pakete für Unternehmen in Gütersloh und OWL.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-[760px] font-serif text-body leading-[1.7] text-muted">
              Drei Pakete, klare Preise, keine Überraschungen. Wähle das Paket,
              das zu deinem Unternehmen passt – oder lass uns im Erstgespräch
              gemeinsam herausfinden, welches es ist.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg, idx) => (
              <ScrollReveal key={pkg.name} delay={240 + idx * 80}>
                <Card highlighted={pkg.highlighted}>
                  <h3 className="font-sora text-h3 text-primary">{pkg.name}</h3>
                  <p className="mt-4 font-mono text-price text-primary">
                    {pkg.price}
                  </p>
                  <p className="mt-1 font-serif text-[13px] italic text-muted">
                    Einführungspreis · limitiert
                  </p>
                  <p className="mt-5 font-serif text-[16px] leading-[1.7] text-muted">
                    {pkg.description}
                  </p>
                  <p className="mt-4 font-serif text-[15px] italic leading-[1.65] text-muted">
                    {pkg.audience}
                  </p>
                  <div className="mt-6">
                    <Button variant="link" href={pkg.href}>
                      Details ansehen →
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={80}>
            <p className="mt-10 text-center font-serif text-[15px] text-muted">
              Alle Preise sind Endpreise. Ich bin Kleinunternehmer nach §19 UStG
              – keine Mehrwertsteuer.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <div className="mt-6 text-center">
              <Button variant="link" href="/leistungen">
                Alle Leistungen &amp; Prozess ansehen →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Referenzen-Teaser */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <ScrollReveal>
            <Kicker>Referenzen</Kicker>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="max-w-[760px] text-h2">Aktuelle Projekte.</h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-[760px] font-serif text-body leading-[1.7] text-muted">
              Klarteq ist neu – aber das Handwerk nicht. Hier sind Projekte, die
              ich bereits umgesetzt habe. Weitere Referenzen folgen, sobald die
              ersten Klarteq-Kunden live sind.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {REFERENCES.map((ref, idx) => (
              <ScrollReveal key={ref.title} delay={240 + idx * 100}>
                <Card>
                  <div
                    role="img"
                    aria-label={ref.alt}
                    className="mb-6 flex aspect-[16/9] w-full items-center justify-center rounded-card border border-border bg-accent-light"
                  >
                    <span className="font-mono text-[12px] uppercase tracking-wider text-muted">
                      Screenshot folgt
                    </span>
                  </div>
                  <h3 className="font-sora text-h3 text-primary">{ref.title}</h3>
                  <p className="mt-2 font-mono text-[12px] text-muted">
                    {ref.meta}
                  </p>
                  <p className="mt-4 font-serif text-[16px] leading-[1.7] text-muted">
                    {ref.description}
                  </p>
                  <div className="mt-6">
                    <Button variant="link" href={ref.href}>
                      Zur Website →
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Über-mich-Kurzfassung */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-5 md:items-center">
            <ScrollReveal className="md:col-span-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
                <Image
                  src="/images/luca1.jpg"
                  alt="Luca Sorci, Webentwickler aus Gütersloh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={false}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120} className="md:col-span-3">
              <Kicker>Wer baut hier</Kicker>
              <h2 className="text-h2">
                Luca Sorci – dein Webentwickler aus Gütersloh.
              </h2>
              <p className="mt-6 font-serif text-body leading-[1.7] text-muted">
                Ich bin Luca, Entwickler aus Gütersloh. Hauptberuflich arbeite
                ich im E-Commerce, einer Welt, in der jede Sekunde Ladezeit
                und jeder Klick gemessen wird. Diese Erfahrung bringe ich zu
                lokalen Unternehmen, die bisher mit Websites arbeiten, die
                mehr schaden als nützen – zu langsam, nicht mobil-optimiert,
                bei Google unsichtbar.
              </p>
              <p className="mt-4 font-serif text-body leading-[1.7] text-muted">
                Mit modernen Entwicklungstools baue ich in Tagen, wofür
                klassische Agenturen Wochen brauchen. Keine Templates. Keine
                Standardlösungen. Sondern Websites, die für dein Geschäft
                arbeiten.
              </p>
              <div className="mt-6">
                <Button variant="link" href="/ueber-mich">
                  Mehr über mich →
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <ScrollReveal>
            <Kicker>Häufige Fragen</Kicker>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="max-w-[760px] text-h2">
              Was Kunden vor dem ersten Gespräch fragen.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="mt-12 max-w-[860px]">
              <FAQ items={FAQ_ITEMS} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Abschluss-CTA */}
      <section className="bg-dark">
        <div className="mx-auto max-w-[720px] px-6 py-24 text-center">
          <ScrollReveal>
            <h2 className="text-h2 text-white">
              Lass uns über dein Projekt reden.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="mt-6 font-serif text-body leading-[1.7] text-white/70">
              Egal ob du schon weißt, was du brauchst, oder erst sortieren
              willst, was möglich ist – schreib mir. Das erste Gespräch ist
              kostenlos und unverbindlich. Innerhalb von 24 Stunden hast du eine
              Antwort.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="mt-8 flex justify-center">
              <Button variant="primary" size="lg" href="/kontakt">
                Projekt besprechen
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <p className="mt-4 font-serif text-[14px] text-white/60">
              Oder direkt:{" "}
              <a
                href="mailto:info@klarteq.de"
                className="text-accent hover:text-accent-hover hover:underline"
              >
                info@klarteq.de
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
