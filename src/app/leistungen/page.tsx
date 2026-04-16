import type { Metadata } from "next";
import { Check } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Kicker from "../components/Kicker";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title:
    "Leistungen & Preise · Website erstellen lassen in Gütersloh | Klarteq",
  description:
    "Drei Pakete für lokale Unternehmen in OWL: Starter ab 890 €, Business ab 1.690 €, Premium ab 2.990 €. Transparent, schnell, ohne Templates.",
};

type PackageId = "starter" | "business" | "premium";

interface Package {
  id: PackageId;
  name: string;
  price: string;
  description: string;
  checklist: string[];
  audience: string;
  highlighted: boolean;
}

const PACKAGES: Package[] = [
  {
    id: "starter",
    name: "Starter",
    price: "Ab 890 €",
    description:
      "Die perfekte erste Website. Ein Seitenbereich, mobil optimiert, bei Google auffindbar, mit funktionierendem Kontaktformular. Für Handwerker, Selbstständige und kleine Dienstleister, die digital endlich richtig starten wollen.",
    checklist: [
      "One-Pager mit bis zu 5 Sektionen (Hero, Über, Leistungen, Referenzen, Kontakt)",
      "Vollständig mobil-optimiert (Smartphone, Tablet, Desktop)",
      "Kontaktformular mit Spam-Schutz",
      "Google Maps-Einbindung für deinen Standort",
      "SEO-Grundoptimierung (Meta-Tags, strukturierte Daten, Sitemap)",
      "Integration von bis zu 5 Bildern (optimiert für schnelle Ladezeit)",
      "Lighthouse-Performance-Score 90+",
      "Zwei Korrekturschleifen inklusive",
      "Übergabe inklusive Einweisung per E-Mail",
    ],
    audience:
      "Du hast noch keine Website, oder deine bisherige ist 10 Jahre alt und peinlich? Du willst einen klaren, seriösen Online-Auftritt, der deine Kontaktdaten, dein Angebot und deine Referenzen zeigt – mehr nicht? Dann ist Starter genau richtig.",
    highlighted: false,
  },
  {
    id: "business",
    name: "Business",
    price: "Ab 1.690 €",
    description:
      "Die Website für Unternehmen, die Kunden aktiv gewinnen wollen. Mehrere Unterseiten, individuelles Design, lokal bei Google sichtbar, maximal schnell. Für Restaurants, Vereine, Dienstleister mit mehreren Angeboten, etablierte Unternehmen.",
    checklist: [
      "Bis zu 6 Unterseiten (z. B. Start, Leistungen, Team, Referenzen, Blog-Start, Kontakt)",
      "Individuelles Design, speziell für dein Unternehmen entwickelt (keine Templates)",
      "Erweiterte SEO-Optimierung mit Fokus auf Local SEO (Google Business, lokale Suchbegriffe, Schema Markup)",
      "Performance-Optimierung mit Lighthouse-Score 90+ in allen Kategorien",
      "Integration von bis zu 15 Bildern (optimiert)",
      "Einbindung von Social-Media-Kanälen",
      "Kontaktformular mit erweiterten Feldern",
      "Drei Korrekturschleifen inklusive",
      "Einweisung per Video-Call (60 Minuten)",
      "30 Tage kostenloser Support nach Launch",
    ],
    audience:
      "Du willst, dass Menschen, die in deiner Stadt nach deinem Angebot suchen, dich finden – und zwar auf Seite 1 bei Google. Du willst eine Website, die nicht nur informiert, sondern aktiv Kunden bringt. Dein Unternehmen ist etabliert und braucht einen digitalen Auftritt, der dazu passt. Dann ist Business das richtige Paket.",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "Ab 2.990 €",
    description:
      "Alles aus dem Business-Paket plus erweiterte Funktionen für anspruchsvolle Projekte. Online-Buchung, Mehrsprachigkeit, Content-Management-System, strategische SEO-Planung. Für Unternehmen, deren Website zentrales Werkzeug ihres Geschäfts ist.",
    checklist: [
      "Alles aus dem Business-Paket",
      "Online-Buchungs- oder Reservierungssystem (z. B. für Termine, Tische, Kurse)",
      "Mehrsprachigkeit (bis zu 2 Sprachen, z. B. Deutsch/Englisch)",
      "Content-Management-System – du änderst Texte und Bilder selbst",
      "Erweiterte SEO-Strategie mit Keyword-Recherche und Content-Plan für die ersten 3 Monate",
      "Wettbewerbsanalyse (was machen deine 3 stärksten lokalen Mitbewerber online)",
      "Vier Korrekturschleifen inklusive",
      "Einstündige Schulung zur CMS-Nutzung per Video-Call",
      "60 Tage kostenloser Support nach Launch",
    ],
    audience:
      "Deine Website ist kein Nebenschauplatz, sondern zentral für dein Geschäft. Du brauchst Funktionen wie Buchung oder Mehrsprachigkeit. Du willst die Inhalte selbst pflegen können, ohne jedes Mal anzurufen. Du willst eine echte Strategie, nicht nur eine schöne Seite. Dann bauen wir Premium.",
    highlighted: false,
  },
];

const MAINTENANCE_CHECKLIST = [
  "Hosting auf performanter Infrastruktur (Vercel)",
  "SSL-Zertifikat inklusive",
  "Wöchentliche Backups",
  "Sicherheitsupdates aller technischen Komponenten",
  "Monitoring (falls die Seite ausfällt, weiß ich es sofort)",
  "Kleine Änderungen bis 30 Minuten pro Monat inklusive",
  "Monatlicher Performance-Check",
  "Direkter Ansprechpartner, Reaktion innerhalb von 24 Stunden",
];

interface ProcessStep {
  title: string;
  text: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Erstgespräch (30–60 Min., kostenlos)",
    text: "Wir reden über dein Unternehmen, deine Kunden, deine Ziele. Ich höre zu, frage nach. Am Ende weiß ich, was du brauchst. Du entscheidest danach, ob wir zusammenarbeiten.",
  },
  {
    title: "Angebot & Konzept",
    text: "Du bekommst ein schriftliches Angebot mit Festpreis und eine Struktur-Skizze der Website (welche Seiten, welche Inhalte, welcher Aufbau). Passt alles? Dann geht's los.",
  },
  {
    title: "Umsetzung",
    text: "Ich baue deine Website. Je nach Paket zwischen 5 Tagen und 5 Wochen. Während dieser Zeit halte ich dich per E-Mail auf dem Laufenden, du bekommst einen Zwischenstand zum Anschauen.",
  },
  {
    title: "Korrekturen",
    text: "Du schaust dir die Seite an, wir gehen deine Anmerkungen durch. Je nach Paket hast du 2 bis 4 Korrekturschleifen inklusive. Ich nehme deine Rückmeldungen ernst – auch wenn es nur um Kommas geht.",
  },
  {
    title: "Launch & Übergabe",
    text: "Die Seite geht live. Du bekommst eine Einweisung (per E-Mail, Video-Call oder in Person, je nach Paket), alle Zugänge und Dokumentationen. Danach entscheidest du, ob du selbst weitermachst oder das Wartungspaket nutzt.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Warum \"ab\"-Preise? Was kommt noch dazu?",
    answer:
      "Die \"ab\"-Preise gelten für Projekte im definierten Umfang. Wenn du Sonderwünsche hast, die darüber hinausgehen (z. B. ein Shop-System im Starter-Paket, oder 40 statt 15 Bilder im Business-Paket), bespreche ich das vorher mit dir – transparent, mit klarem Aufpreis. Keine versteckten Kosten.",
  },
  {
    question: "Was ist, wenn ich unsicher bin, welches Paket passt?",
    answer:
      "Dann nutz das Erstgespräch. 30 bis 60 Minuten, kostenlos, unverbindlich. Ich frage dich Dinge über dein Unternehmen, die du dir vielleicht selbst noch nicht gestellt hast – und am Ende des Gesprächs weißt du, was du brauchst. Oft merken Kunden dabei, dass sie eher Starter brauchen als Business, oder umgekehrt.",
  },
  {
    question: "Kann ich später von Starter auf Business upgraden?",
    answer:
      "Grundsätzlich ja, aber ehrlich: Wenn du absehen kannst, dass du in 6 Monaten Business brauchst, starte gleich mit Business. Ein späterer Umbau kostet mehr als von Anfang an richtig gebaut. Im Erstgespräch klären wir das.",
  },
  {
    question: "Was passiert, wenn ich mitten im Projekt Wünsche ändere?",
    answer:
      "Kleine Änderungen sind normal und eingeplant. Große Richtungswechsel (z. B. \"wir brauchen doch noch einen Online-Shop\") bespreche ich mit dir – meist lässt sich das lösen, manchmal braucht's einen Nachtrag zum Angebot. Offen, bevor ich weiterbaue.",
  },
  {
    question: "Was gehört mir nach dem Projekt?",
    answer:
      "Alles. Code, Design, Inhalte, Domain. Du bist nicht an mich gebunden. Auch das Hosting ist frei wählbar – du kannst das Wartungspaket buchen, selbst hosten oder zu einem anderen Dienstleister gehen. Deine Website ist dein Eigentum.",
  },
  {
    question: "Wie viele Pioneer-Plätze sind noch frei?",
    answer:
      "Die Einführungspreise gelten für die ersten zwei Klarteq-Projekte. Nach Abschluss dieser Projekte steigen die Preise auf das reguläre Niveau. Frag im Erstgespräch nach, wie der aktuelle Stand ist.",
  },
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            size={20}
            className="mt-[3px] shrink-0 text-accent"
            aria-hidden="true"
          />
          <span className="font-serif text-[16px] leading-[1.65] text-dark">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function LeistungenPage() {
  return (
    <>
      {/* 7.2 Hero */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-28">
          <Kicker>Leistungen &amp; Preise</Kicker>
          <h1 className="max-w-[760px] text-h1 font-sora">
            Leistungen &amp; Preise
          </h1>
          <p className="mt-6 max-w-[680px] font-serif text-[18px] leading-[1.65] text-muted">
            Drei Pakete, klare Preise, keine Überraschungen. Wähle das Paket,
            das zu deinem Unternehmen passt – oder lass uns im Erstgespräch
            gemeinsam herausfinden, welches es ist.
          </p>
        </div>
      </section>

      {/* 7.3 Paket-Sektionen */}
      {PACKAGES.map((pkg, idx) => (
        <section
          key={pkg.id}
          id={pkg.id}
          className={`scroll-mt-24 ${idx % 2 === 0 ? "bg-white" : "bg-powder"}`}
        >
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
            <Card
              highlighted={pkg.highlighted}
              className="mx-auto max-w-[800px] p-8 md:p-12"
            >
              <h2 className="text-h2">{pkg.name}</h2>
              <p className="mt-6 font-mono text-[36px] font-medium leading-none text-primary">
                {pkg.price}
              </p>
              <p className="mt-2 font-serif text-[13px] italic text-muted">
                Einführungspreis · limitiert
              </p>
              <p className="mt-6 font-serif text-[17px] leading-[1.7] text-dark">
                {pkg.description}
              </p>
              <Checklist items={pkg.checklist} />
              <p className="mt-8 font-serif text-[15px] italic leading-[1.65] text-muted">
                Für wen geeignet: {pkg.audience}
              </p>
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  href={`/kontakt?paket=${pkg.id}`}
                >
                  {pkg.name} anfragen
                </Button>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* 7.4 Wartungspaket */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24">
          <Card className="mx-auto max-w-[800px] p-8 md:p-12">
            <h2 className="text-h2">
              Wartungspaket · Optional zu jedem Paket
            </h2>
            <p className="mt-6 font-mono text-[36px] font-medium leading-none text-primary">
              49 € pro Monat
            </p>
            <p className="mt-6 font-serif text-[17px] leading-[1.7] text-dark">
              Eine Website ist kein Möbelstück. Sie braucht Pflege:
              Sicherheitsupdates, Backups, kleine Anpassungen, wenn sich was
              ändert. Das Wartungspaket nimmt dir das komplett ab.
            </p>
            <Checklist items={MAINTENANCE_CHECKLIST} />
            <p className="mt-8 font-serif text-[16px] leading-[1.7] text-muted">
              Das Wartungspaket ist optional. Willst du deine Seite selbst
              hosten oder einen anderen Dienstleister nutzen, ist das auch
              möglich – deine Website gehört dir, Code und Inhalte bleiben in
              deinem Besitz.
            </p>
            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href="/kontakt?paket=wartung"
              >
                Wartungspaket anfragen
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* 7.5 Prozess */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <Kicker>Ablauf</Kicker>
          <h2 className="max-w-[760px] text-h2">
            So läuft ein Projekt bei mir ab.
          </h2>
          <p className="mt-6 max-w-[760px] font-serif text-body leading-[1.7] text-muted">
            Jedes Projekt folgt einem klaren Ablauf. Damit du weißt, was wann
            passiert, und dich darauf verlassen kannst.
          </p>

          <ol className="relative mx-auto mt-12 max-w-[760px] border-l border-border pl-8">
            {PROCESS_STEPS.map((step, idx) => (
              <li
                key={step.title}
                className={`relative ${
                  idx === PROCESS_STEPS.length - 1 ? "" : "pb-10"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-[6px] h-2 w-2 rounded-full bg-accent"
                />
                <h3 className="font-sora text-h3 text-primary">{step.title}</h3>
                <p className="mt-3 font-serif text-body leading-[1.7] text-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7.6 FAQ */}
      <section className="bg-powder">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <Kicker>Häufige Fragen</Kicker>
          <h2 className="max-w-[760px] text-h2">
            Was Kunden zu den Paketen fragen.
          </h2>
          <div className="mt-12 max-w-[860px]">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* 7.7 Abschluss-CTA */}
      <section className="bg-dark">
        <div className="mx-auto max-w-[720px] px-6 py-24 text-center">
          <h2 className="text-h2 text-white">
            Noch Fragen? Oder direkt starten?
          </h2>
          <p className="mt-6 font-serif text-body leading-[1.7] text-white/70">
            Egal, ob du genau weißt, was du willst, oder gerade erst anfängst,
            darüber nachzudenken – das Erstgespräch ist kostenlos und
            unverbindlich. Schreib mir, und wir finden heraus, ob und wie ich
            dir helfen kann.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg" href="/kontakt">
              Projekt besprechen
            </Button>
          </div>
          <p className="mt-4 font-serif text-[14px] text-white/60">
            Oder schreib direkt an{" "}
            <a
              href="mailto:hallo@klarteq.de"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              hallo@klarteq.de
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
