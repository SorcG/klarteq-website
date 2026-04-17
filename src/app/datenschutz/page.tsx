import type { Metadata } from "next";
import Kicker from "../components/Kicker";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Klarteq",
  description: "Datenschutzerklärung von Klarteq.",
  robots: { index: true, follow: true },
};

const H2_CLASS = "mt-12 font-sora text-[22px] font-bold leading-[1.3] text-primary";
const H3_CLASS = "mt-8 font-sora text-[18px] font-semibold leading-[1.35] text-primary";
const H4_CLASS = "mt-6 font-sora text-[15px] font-semibold leading-[1.4] text-primary";
const P_CLASS = "mt-4";
const LINK_CLASS =
  "text-accent hover:text-accent-hover hover:underline break-words";

export default function DatenschutzPage() {
  return (
    <section className="bg-powder">
      <div className="mx-auto max-w-[720px] px-6 py-20 md:py-28">
        <Kicker>Datenschutz</Kicker>
        <h1 className="text-h1 font-sora">Datenschutzerklärung</h1>

        <div className="mt-10 font-serif text-body leading-[1.7] text-dark">
          {/* 1. Datenschutz auf einen Blick */}
          <h2 className={H2_CLASS}>1. Datenschutz auf einen Blick</h2>

          <h3 className={H3_CLASS}>Allgemeine Hinweise</h3>
          <p className={P_CLASS}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber,
            was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
            Website besuchen. Personenbezogene Daten sind alle Daten, mit
            denen Sie persönlich identifiziert werden können. Ausführliche
            Informationen zum Thema Datenschutz entnehmen Sie unserer unter
            diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className={H3_CLASS}>Datenerfassung auf dieser Website</h3>

          <h4 className={H4_CLASS}>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h4>
          <p className={P_CLASS}>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
            &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
            Datenschutzerklärung entnehmen.
          </p>

          <h4 className={H4_CLASS}>Wie erfassen wir Ihre Daten?</h4>
          <p className={P_CLASS}>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben.
          </p>
          <p className={P_CLASS}>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z. B. Internetbrowser, Betriebssystem
            oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
            erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <h4 className={H4_CLASS}>Wofür nutzen wir Ihre Daten?</h4>
          <p className={P_CLASS}>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie
            Bereitstellung der Website zu gewährleisten. Andere Daten können
            zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über
            die Website Verträge geschlossen oder angebahnt werden können,
            werden die übermittelten Daten auch für Vertragsangebote,
            Bestellungen oder sonstige Auftragsanfragen verarbeitet.
          </p>

          <h4 className={H4_CLASS}>
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </h4>
          <p className={P_CLASS}>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über
            Herkunft, Empfänger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben außerdem ein
            Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
            können Sie diese Einwilligung jederzeit für die Zukunft
            widerrufen. Außerdem haben Sie das Recht, unter bestimmten
            Umständen die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
            ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p className={P_CLASS}>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
            sich jederzeit an uns wenden.
          </p>

          <h3 className={H3_CLASS}>
            Analyse-Tools und Tools von Drittanbietern
          </h3>
          <p className={P_CLASS}>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit sogenannten
            Analyseprogrammen.
          </p>
          <p className={P_CLASS}>
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie
            in der folgenden Datenschutzerklärung.
          </p>

          {/* 2. Hosting */}
          <h2 className={H2_CLASS}>2. Hosting</h2>
          <p className={P_CLASS}>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3 className={H3_CLASS}>Externes Hosting</h3>
          <p className={P_CLASS}>
            Diese Website wird extern gehostet. Die personenbezogenen Daten,
            die auf dieser Website erfasst werden, werden auf den Servern des
            Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
            Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über
            eine Website generiert werden, handeln.
          </p>
          <p className={P_CLASS}>
            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
            gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
            Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
            und effizienten Bereitstellung unseres Online-Angebots durch
            einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p className={P_CLASS}>
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
            zur Erfüllung seiner Leistungspflichten erforderlich ist und
            unsere Weisungen in Bezug auf diese Daten befolgen.
          </p>
          <p className={P_CLASS}>Wir setzen folgenden Hoster ein:</p>
          <p className={P_CLASS}>
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
            <br />
            USA
          </p>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <h2 className={H2_CLASS}>
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className={H3_CLASS}>Datenschutz</h3>
          <p className={P_CLASS}>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className={P_CLASS}>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind
            Daten, mit denen Sie persönlich identifiziert werden können. Die
            vorliegende Datenschutzerklärung erläutert, welche Daten wir
            erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
            welchem Zweck das geschieht.
          </p>
          <p className={P_CLASS}>
            Wir weisen darauf hin, dass die Datenübertragung im Internet
            (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
            aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
            durch Dritte ist nicht möglich.
          </p>

          <h3 className={H3_CLASS}>Hinweis zur verantwortlichen Stelle</h3>
          <p className={P_CLASS}>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p className={P_CLASS}>
            Klarteq
            <br />
            Avenwedder Straße 318
            <br />
            33335 Gütersloh
          </p>
          <p className={P_CLASS}>
            Telefon:{" "}
            <a href="tel:017670552197" className={LINK_CLASS}>
              017670552197
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:info@klarteq.de" className={LINK_CLASS}>
              info@klarteq.de
            </a>
          </p>
          <p className={P_CLASS}>
            Verantwortliche Stelle ist die natürliche oder juristische
            Person, die allein oder gemeinsam mit anderen über die Zwecke und
            Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          </p>

          <h3 className={H3_CLASS}>Speicherdauer</h3>
          <p className={P_CLASS}>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
            Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
            Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
            gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
            für die Speicherung Ihrer personenbezogenen Daten haben.
          </p>

          <h3 className={H3_CLASS}>
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
            auf dieser Website
          </h3>
          <p className={P_CLASS}>
            Sofern Sie in die Datenverarbeitung eingewilligt haben,
            verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
            Art. 6 Abs. 1 lit. a DSGVO. Sind Ihre Daten zur Vertragserfüllung
            oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
            verarbeiten wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur
            Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf
            Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung
            kann ferner auf Grundlage unseres berechtigten Interesses nach
            Art. 6 Abs. 1 lit. f DSGVO erfolgen.
          </p>

          <h3 className={H3_CLASS}>
            Empfänger von personenbezogenen Daten
          </h3>
          <p className={P_CLASS}>
            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
            verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
            eine Übermittlung von personenbezogenen Daten an diese externen
            Stellen erforderlich. Wir geben personenbezogene Daten nur dann
            an externe Stellen weiter, wenn dies im Rahmen einer
            Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
            verpflichtet sind, wenn wir ein berechtigtes Interesse nach Art.
            6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
            sonstige Rechtsgrundlage die Datenweitergabe erlaubt.
          </p>

          <h3 className={H3_CLASS}>
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h3>
          <p className={P_CLASS}>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
            ausdrücklichen Einwilligung möglich. Sie können eine bereits
            erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
            der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
            Widerruf unberührt.
          </p>

          <h3 className={H3_CLASS}>
            Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h3>
          <p className={P_CLASS}>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
          </p>

          <h3 className={H3_CLASS}>Recht auf Datenübertragbarkeit</h3>
          <p className={P_CLASS}>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
            Einwilligung oder in Erfüllung eines Vertrags automatisiert
            verarbeiten, an sich oder an einen Dritten in einem gängigen,
            maschinenlesbaren Format aushändigen zu lassen.
          </p>

          <h3 className={H3_CLASS}>
            Auskunft, Berichtigung und Löschung
          </h3>
          <p className={P_CLASS}>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
            auf Berichtigung oder Löschung dieser Daten.
          </p>

          <h3 className={H3_CLASS}>
            Recht auf Einschränkung der Verarbeitung
          </h3>
          <p className={P_CLASS}>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu können Sie sich
            jederzeit an uns wenden.
          </p>

          {/* 4. Datenerfassung auf dieser Website */}
          <h2 className={H2_CLASS}>4. Datenerfassung auf dieser Website</h2>

          <h3 className={H3_CLASS}>Cookies</h3>
          <p className={P_CLASS}>
            Unsere Internetseiten verwenden so genannte
            &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und
            richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder
            vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder
            dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            Session-Cookies werden nach Ende Ihres Besuchs automatisch
            gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
            gespeichert, bis Sie diese selbst löschen oder eine automatische
            Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p className={P_CLASS}>
            Cookies können von uns (First-Party-Cookies) oder von
            Drittunternehmen stammen (sog. Third-Party-Cookies).
            Third-Party-Cookies ermöglichen die Einbindung bestimmter
            Dienstleistungen von Drittunternehmen innerhalb von Webseiten.
          </p>
          <p className={P_CLASS}>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen
            von Cookies informiert werden und Cookies nur im Einzelfall
            erlauben, die Annahme von Cookies für bestimmte Fälle oder
            generell ausschließen sowie das automatische Löschen der Cookies
            beim Schließen des Browsers aktivieren. Bei der Deaktivierung
            von Cookies kann die Funktionalität dieser Website eingeschränkt
            sein.
          </p>

          {/* 5. Kontaktformular */}
          <h2 className={H2_CLASS}>5. Kontaktformular</h2>
          <p className={P_CLASS}>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
            werden Ihre Angaben aus dem Anfrageformular inklusive der von
            Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen bei uns
            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
            weiter.
          </p>
          <p className={P_CLASS}>
            Für den Versand der Formulardaten nutzen wir den Dienst Resend
            (Resend Inc., 2261 Market Street #5039, San Francisco, CA
            94114, USA). Die über das Kontaktformular übermittelten Daten
            werden auf Servern von Resend verarbeitet. Die Datenübertragung
            in die USA wird auf die Standardvertragsklauseln der
            EU-Kommission gestützt.
          </p>
          <p className={P_CLASS}>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
            Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
            Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
            Verarbeitung auf unserem berechtigten Interesse an der
            effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
            Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
            lit. a DSGVO), sofern diese abgefragt wurde; die Einwilligung
            ist jederzeit widerrufbar.
          </p>
          <p className={P_CLASS}>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
            bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
            zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
            insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>

          {/* 6. Plugins und Tools */}
          <h2 className={H2_CLASS}>6. Plugins und Tools</h2>

          <h3 className={H3_CLASS}>Google Fonts (lokales Hosting)</h3>
          <p className={P_CLASS}>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
            so genannte Google Fonts, die von Google bereitgestellt werden.
            Die Google Fonts sind lokal installiert. Eine Verbindung zu
            Servern von Google findet dabei nicht statt.
          </p>
          <p className={P_CLASS}>
            Weitere Informationen zu Google Fonts finden Sie unter{" "}
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              https://developers.google.com/fonts/faq
            </a>{" "}
            und in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>

          <p className="mt-10 text-[14px] text-muted">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              https://www.e-recht24.de
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
