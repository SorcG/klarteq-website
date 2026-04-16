import Button from "../components/Button";
import Kicker from "../components/Kicker";
import Card from "../components/Card";
import FAQ from "../components/FAQ";
import Logo from "../components/Logo";

const FAQ_SAMPLE = [
  {
    question: "Wie lange dauert ein Website-Projekt?",
    answer:
      "Ein Starter-Projekt ist in 5–7 Werktagen live. Business-Projekte brauchen 2–3 Wochen. Premium-Projekte je nach Umfang 3–5 Wochen. Das beinhaltet immer Zeit für deine Korrekturwünsche – ich arbeite nicht im Akkord, sondern in Ruhe.",
  },
  {
    question: "Was brauche ich als Kunde, um zu starten?",
    answer:
      "Nicht viel. Ich brauche Inhalte zu deinem Unternehmen (Texte, Fotos, Logo), Zugang zu deiner Domain oder Zeit für einen Neukauf, und ein erstes Gespräch von 30–60 Minuten.",
  },
  {
    question: "Warum keine Mehrwertsteuer auf den Preisen?",
    answer:
      "Ich bin Kleinunternehmer nach §19 UStG. Das heißt: Ich weise keine Mehrwertsteuer aus. Für dich als Kunde ist das ein Vorteil – der Betrag auf dem Angebot ist der Betrag, den du zahlst.",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-border py-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-2 font-sora text-[22px] font-bold text-primary">
          {title}
        </h2>
        <p className="mb-8 font-mono text-[12px] uppercase tracking-wider text-muted">
          Preview
        </p>
        {children}
      </div>
    </section>
  );
}

export default function PreviewPage() {
  return (
    <>
      <Section title="Logo (aus Phase B)">
        <div className="flex flex-wrap items-end gap-10">
          <div className="flex flex-col gap-2">
            <Logo variant="light" size="sm" />
            <span className="font-mono text-[11px] text-muted">light · sm</span>
          </div>
          <div className="flex flex-col gap-2">
            <Logo variant="light" size="md" />
            <span className="font-mono text-[11px] text-muted">light · md</span>
          </div>
          <div className="flex flex-col gap-2">
            <Logo variant="light" size="lg" />
            <span className="font-mono text-[11px] text-muted">light · lg</span>
          </div>
          <div className="flex flex-col gap-2 rounded-card bg-dark px-6 py-4">
            <Logo variant="dark" size="md" />
            <span className="font-mono text-[11px] text-white/60">dark · md</span>
          </div>
        </div>
      </Section>

      <Section title="Kicker">
        <Kicker>Webentwicklung · Ostwestfalen</Kicker>
        <p className="font-serif text-[15px] text-muted">
          Kicker sitzt über H1/H2 und trägt die Meta-Information.
        </p>
      </Section>

      <Section title="Button · Varianten & Größen">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="md">
            Projekt besprechen
          </Button>
          <Button variant="primary" size="lg">
            Projekt besprechen (lg)
          </Button>
          <Button variant="secondary" size="md">
            Leistungen
          </Button>
          <Button variant="secondary" size="lg">
            Leistungen (lg)
          </Button>
          <Button variant="link">Leistungen ansehen →</Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading>
            Senden
          </Button>
          <Button variant="primary" href="/kontakt">
            Mit href (Link)
          </Button>
        </div>
      </Section>

      <Section title="Card · Standard / Highlighted / Hover">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="mb-2 font-sora text-[20px] font-bold text-primary">
              Standard
            </h3>
            <p className="font-serif text-[16px] leading-[1.7] text-muted">
              Normale Card mit 1px Border, 12px Radius und dezentem Schatten.
            </p>
          </Card>
          <Card highlighted>
            <h3 className="mb-2 font-sora text-[20px] font-bold text-primary">
              Highlighted
            </h3>
            <p className="font-serif text-[16px] leading-[1.7] text-muted">
              Card mit 2px Salbei-Border und &quot;Beliebt&quot;-Badge.
            </p>
          </Card>
          <Card hover>
            <h3 className="mb-2 font-sora text-[20px] font-bold text-primary">
              Hover
            </h3>
            <p className="font-serif text-[16px] leading-[1.7] text-muted">
              Hover über diese Card – Schatten wächst, Card hebt sich 2px.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="FAQ · Akkordeon">
        <div className="max-w-[760px]">
          <FAQ items={FAQ_SAMPLE} />
        </div>
      </Section>

      <Section title="Header & Footer">
        <p className="font-serif text-[15px] text-muted">
          Header und Footer werden global über das Root-Layout gerendert und
          umgeben diese Seite.
        </p>
      </Section>
    </>
  );
}
