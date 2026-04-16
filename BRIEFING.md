# Klarteq – Technischer Bauplan für Claude Code

> **Für Claude Code:** Dieses Dokument enthält alle Spezifikationen zum Aufbau der Klarteq-Website. Halte dich strikt an alle Vorgaben – Texte, Design-Tokens, Struktur. Die Brand Guidelines in `BRAND.html` sind die **finale Referenz** für alle Design-Fragen; bei Konflikten gewinnt BRAND.html. Beginne mit Abschnitt 1 ("Projekt-Kontext"), lies dann alles, bevor du anfängst zu bauen.

---

## Inhaltsverzeichnis

1. Projekt-Kontext
2. Technischer Stack & Projektstruktur
3. Globale Assets & Konfiguration
4. Design-System (Tailwind-Konfiguration)
5. Globale Komponenten
6. Seite 1: Startseite (`/`)
7. Seite 2: Leistungen (`/leistungen`)
8. Seite 3: Über mich (`/ueber-mich`)
9. Seite 4: Kontakt (`/kontakt`)
10. Seite 5: Kontakt-Bestätigung (`/kontakt/danke`)
11. Rechtliche Seiten (`/impressum`, `/datenschutz`)
12. SEO-Implementierung (Meta-Tags, Schema Markup, Sitemap)
13. Formular-Backend (Resend-Integration)
14. Performance-Anforderungen
15. Checkliste vor dem Launch

---

## 1. Projekt-Kontext

**Marke:** Klarteq
**Inhaber:** Luca Sorci, Gütersloh (NRW)
**Positionierung:** Webentwickler für lokale Unternehmen in Ostwestfalen (OWL). Schwerpunkt: schnelle, SEO-optimierte, individuell gebaute Websites für Handwerker, Restaurants, Vereine, Dienstleister mit 1-20 Mitarbeitern.

**Ziel der Website:**
Primäres Conversion-Ziel ist eine Anfrage über das Kontaktformular. Die Website soll in 10 Sekunden Vertrauen aufbauen und den Besucher durch einen klaren Trichter (Ankunft → Orientierung → Vertiefung → Entscheidung → Anfrage) führen.

**Sprache:** Deutsch (Duzen, professionell aber nahbar, keine Buzzwords)

**Pioneer-Preise:** Aktuell gelten Einführungspreise für die ersten zwei Klarteq-Projekte. Diese werden auf der Website mit dem Hinweis "Einführungspreis · limitiert" gekennzeichnet.

---

## 2. Technischer Stack & Projektstruktur

**Framework:** Next.js 14+ (App Router) mit TypeScript
**Styling:** Tailwind CSS
**Icons:** `lucide-react`
**Hosting:** Vercel
**Domain:** klarteq.de (Primary), klarteq.com (Redirect folgt später)
**Formular-Versand:** Resend (transaktionale E-Mails)
**Repository:** https://github.com/SorcG/klarteq-website

**Projekt-Struktur:**
```
klarteq-website/
├── public/
│   ├── images/
│   │   ├── klarteq-logo-hell.png
│   │   ├── klarteq-logo-dunkel.png
│   │   ├── luca1.jpg
│   │   └── luca2.jpg
│   └── robots.txt
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx                    # Startseite
│       ├── globals.css
│       ├── favicon.ico
│       ├── leistungen/
│       │   └── page.tsx
│       ├── ueber-mich/
│       │   └── page.tsx
│       ├── kontakt/
│       │   ├── page.tsx
│       │   └── danke/
│       │       └── page.tsx
│       ├── impressum/
│       │   └── page.tsx
│       ├── datenschutz/
│       │   └── page.tsx
│       ├── api/
│       │   └── kontakt/
│       │       └── route.ts            # Formular-Backend
│       ├── components/
│       │   ├── Header.tsx
│       │   ├── Footer.tsx
│       │   ├── Logo.tsx
│       │   ├── Button.tsx
│       │   ├── Kicker.tsx
│       │   ├── Card.tsx
│       │   ├── FAQ.tsx
│       │   └── ContactForm.tsx
│       └── lib/
│           └── schema.ts               # Schema-Markup-Generatoren
├── BRAND.html                          # Brand Guidelines (bestehend, nicht ändern)
├── BRIEFING.md                         # Dieses Dokument
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

**Wichtige npm-Dependencies:**
- `next`, `react`, `react-dom`, `typescript`
- `tailwindcss`, `postcss`, `autoprefixer`
- `lucide-react`
- `resend` (für Formular-E-Mail)
- `next-sitemap` (automatische Sitemap-Generierung)

---

## 3. Globale Assets & Konfiguration

### 3.1 Logo

Das Logo ist eine **Wortmarke**, die als React-Komponente gebaut wird (nicht als PNG), damit es sauber skaliert und einfach farblich angepasst werden kann.

**Komponente:** `src/app/components/Logo.tsx`

```tsx
interface LogoProps {
  variant?: 'light' | 'dark';  // light = auf hellem Hintergrund (Warmgrau), dark = auf dunklem Hintergrund (Puder)
  size?: 'sm' | 'md' | 'lg';   // sm = Footer (18px), md = Header (24px), lg = groß (36px)
}
```

**Aufbau:**
- "Klar" in Manrope 800 (ExtraBold)
- "teq" in Manrope 400 (Regular)
- Salbei-Dot (Durchmesser je nach Größe: 8px für md, 6px für sm, 12px für lg), positioniert oben rechts am "q" (overlap mit negativem Margin)
- Letter-Spacing: -1px auf md, -0.5px auf sm, -2px auf lg

**Farben:**
- `variant="light"`: Text in Warmgrau `#374151`, Dot in Salbeigrün `#5B8C6F`
- `variant="dark"`: Text in Puder `#F9FAFB`, Dot in Salbeigrün `#5B8C6F`

### 3.2 Favicon

Das Favicon liegt bereits in `src/app/favicon.ico`. Next.js erkennt es automatisch.

Falls zusätzlich benötigt (Apple Touch Icon, etc.), kann eine SVG-Version erstellt werden: "K" in Manrope 800 in Warmgrau-Block (Radius 14 %, padding so dass das "K" zentriert ist), mit Salbei-Dot oben rechts.

### 3.3 Font-Einbindung

In `src/app/layout.tsx`:

```tsx
import { Manrope, Sora, Source_Serif_4, JetBrains_Mono } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '800'], variable: '--font-manrope', display: 'swap' });
const sora = Sora({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-sora', display: 'swap' });
const sourceSerif = Source_Serif_4({ subsets: ['latin'], weight: ['400', '600'], style: ['normal', 'italic'], variable: '--font-source-serif', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains', display: 'swap' });
```

Die Variablen werden im `<html>`-Tag als Klassen gesetzt und in `tailwind.config.ts` registriert.

---

## 4. Design-System (Tailwind-Konfiguration)

Basierend strikt auf `BRAND.html`. Werte hier 1:1 übernommen.

### 4.1 `tailwind.config.ts` – Farben, Fonts, Spacing

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#374151',        // Warmgrau – Logo, Nav, Headlines, Icons
        accent: '#5B8C6F',         // Salbeigrün – CTAs, Links, Hover, Dot
        'accent-hover': '#4A7A5E', // Hover-State für Salbeigrün
        'accent-light': 'rgba(91,140,111,.08)', // sehr helles Salbei für Hintergründe
        powder: '#F9FAFB',         // Puder – Haupt-Hintergrund
        dark: '#111827',           // Anthrazit – Fließtext, Footer
        border: '#E5E7EB',         // Border
        muted: '#6B7280',          // Muted Text
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        // Typo-Skala mit clamp() für Responsive
        'h1': ['clamp(36px, 5vw, 56px)', { lineHeight: '1.1', letterSpacing: '-1.5px', fontWeight: '800' }],
        'h2': ['clamp(28px, 3.5vw, 40px)', { lineHeight: '1.2', letterSpacing: '-1px', fontWeight: '700' }],
        'h3': ['clamp(20px, 2vw, 24px)', { lineHeight: '1.3', letterSpacing: '-0.5px', fontWeight: '600' }],
        'kicker': ['12px', { lineHeight: '1', letterSpacing: '1.5px', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'btn': ['15px', { lineHeight: '1', fontWeight: '600' }],
        'price': ['clamp(28px, 3vw, 36px)', { lineHeight: '1', fontWeight: '500' }],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,.08)',
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
        'xl-card': '14px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out forwards',
        'fade-in-up': 'fadeInUp 400ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### 4.2 Globale CSS-Vorgaben (`src/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-powder text-dark font-serif;
    font-feature-settings: 'ss01', 'kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-sora text-primary;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Wichtig:** `prefers-reduced-motion`-Abschnitt ist Pflicht (Accessibility-Standard).

### 4.3 Farbverhältnis (Vorgabe aus Brand Guidelines)

- **60 %** Puder `#F9FAFB` oder Weiß → Haupt-Hintergrund, Cards
- **25 %** Warmgrau `#374151` / Anthrazit `#111827` → Text, Headlines, Footer
- **15 %** Salbeigrün `#5B8C6F` → CTAs, Links, Sage-Dot, Akzent-Kicker – **NIE als Flächenfarbe**

---

## 5. Globale Komponenten

### 5.1 Header (`src/app/components/Header.tsx`)

**Verhalten:**
- Sticky top (bleibt beim Scrollen oben)
- Hintergrund: Weiß mit leichtem Blur bei Scroll (`backdrop-blur-sm bg-white/90`)
- Border-bottom: 1px `border`
- Höhe: 72px Desktop, 60px Mobile

**Struktur (Desktop):**
```
[Logo] ........................ [Startseite] [Leistungen] [Über mich] [Kontakt-Button]
```

**Navigation-Links:**
- Sora 14px, 500, Farbe `primary`
- Hover: Farbe `accent`
- Aktive Seite: kleiner Salbei-Dot (5px) unter dem Link

**Kontakt-Button (CTA in Nav):**
- Salbei-Hintergrund, weiße Schrift
- Padding: 10px 20px
- Border-Radius: 8px
- Hover: `accent-hover`

**Mobile:**
- Logo links, Kontakt-Button mittig-rechts (immer sichtbar), Burger-Icon ganz rechts
- Burger öffnet Vollscreen-Overlay mit Puder-Hintergrund, Links untereinander zentriert, Sora 20px
- Burger-Overlay schließt beim Link-Klick automatisch

### 5.2 Footer (`src/app/components/Footer.tsx`)

**Hintergrund:** Anthrazit `#111827`
**Textfarbe:** Puder für Haupttext, `rgba(255,255,255,0.6)` für sekundäre Infos

**Struktur (Desktop, 3 Spalten):**
- **Links:** Logo (dark variant) + Claim "Websites für lokale Unternehmen in Ostwestfalen."
- **Mitte:** Navigation (Startseite, Leistungen, Über mich, Kontakt)
- **Rechts:** Kontakt (hallo@klarteq.de, Gütersloh NRW) + rechtliche Links (Impressum, Datenschutz)

**Unten:** Schmale Zeile mit `© 2026 Klarteq · Luca Sorci`

**Mobile:** Spalten gestapelt, alles linksbündig, Logo oben

### 5.3 Button (`src/app/components/Button.tsx`)

**Varianten:**

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'md' | 'lg';
  href?: string;       // wenn vorhanden, als <Link> rendern
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}
```

**Primary:**
- Hintergrund: `accent`
- Text: weiß
- Font: Sora 15px, 600
- Padding: `md` = 12px 28px, `lg` = 14px 32px
- Border-Radius: 8px
- Hover: `accent-hover`, leichtes `translateY(-1px)`
- Transition: 200ms ease

**Secondary (Ghost):**
- Hintergrund: transparent
- Text: `primary`
- Border: 1.5px solid `border`
- Hover: Border wird `accent`, Text wird `accent`

**Link:**
- Inline-Link mit Pfeil (z. B. "Leistungen ansehen →")
- Farbe: `accent`, Hover: Unterstrich + `accent-hover`

**Loading-State:**
- Button wird disabled
- Text wechselt zu "Wird gesendet..."
- Kleiner Spinner (Lucide `Loader2` mit `animate-spin`)

### 5.4 Kicker (`src/app/components/Kicker.tsx`)

Pre-Headline-Text über H1 und H2.

```tsx
<div className="font-sora text-kicker uppercase text-accent mb-4">
  {children}
</div>
```

### 5.5 Card (`src/app/components/Card.tsx`)

**Standard-Card:**
- Hintergrund: weiß
- Border: 1px `border`
- Border-Radius: `card` (12px)
- Padding: 32px
- Schatten: `card`
- Hover (optional per Prop): Schatten → `card-hover`, `translateY(-2px)`, Transition 300ms

**Highlighted-Variante:**
- Statt Border 1px: `border: 2px solid accent`
- Badge "Beliebt" oben rechts: Padding 4px 10px, Sora 11px 600 uppercase, weiß auf `accent`, Radius 20px

### 5.6 FAQ (`src/app/components/FAQ.tsx`)

Akkordeon. Jede Frage ist ein Zeilen-Button mit Pfeil-Icon rechts (Lucide `ChevronDown`), der sich beim Öffnen um 180° dreht.

**Regeln:**
- Nur eine Frage kann gleichzeitig geöffnet sein (oder mehrere, je nach UX-Wunsch – hier: **nur eine**)
- Öffnen/Schließen mit CSS Transition auf `max-height` und `opacity`, Dauer 300ms
- Geöffnete Antwort: Source Serif 4 16px, Farbe `muted`
- Border zwischen den Zeilen: 1px `border`

### 5.7 ContactForm (`src/app/components/ContactForm.tsx`)

Siehe detaillierte Spezifikation in Abschnitt 9 (Kontakt-Seite) und Abschnitt 13 (Backend).

---

## 6. Seite 1: Startseite (`/`)

### 6.1 Meta-Angaben

```tsx
export const metadata = {
  title: 'Webdesign Gütersloh · Schnelle Websites für lokale Unternehmen | Klarteq',
  description: 'Schnelle, sichtbare Websites für lokale Unternehmen in Gütersloh und OWL. Drei Pakete ab 890 €. Jetzt kostenloses Erstgespräch anfragen.',
  openGraph: {
    title: 'Klarteq · Webdesign für lokale Unternehmen in OWL',
    description: 'Schnelle, sichtbare Websites aus Gütersloh. Drei Pakete, transparente Preise.',
    url: 'https://klarteq.de',
    siteName: 'Klarteq',
    locale: 'de_DE',
    type: 'website',
  },
};
```

### 6.2 Sektion 1: Hero

**Hintergrund:** Puder `#F9FAFB` mit statischem Salbei-Gradient oben rechts:
```css
background: radial-gradient(circle at top right, rgba(91,140,111,0.08), transparent 60%);
```

**Container:** max-width 1200px, padding `py-24 md:py-32`, linksbündig

**Inhalt:**

1. **Kicker:** `WEBENTWICKLUNG · OSTWESTFALEN`
2. **H1 (Sora 800):** `Websites, die für dein Geschäft arbeiten.`
   - max-width: 720px
3. **Subheadline (Source Serif 4, muted):** `Ich baue schnelle, sichtbare Websites für lokale Unternehmen in Ostwestfalen. Keine Visitenkarten. Werkzeuge.`
   - max-width: 560px
   - Font-size: 18px
4. **Button-Gruppe** (margin-top 32px):
   - Primary: `Projekt besprechen` → Link zu `/kontakt`
   - Link: `Leistungen ansehen →` → Link zu `/leistungen`
5. **Meta-Zeile** (margin-top 24px, Source Serif 4 14px muted): `Aus Gütersloh · Für Unternehmen in OWL`

**Animation:** Alle Kind-Elemente mit `fade-in-up`, gestaffelt via delay:
- Kicker: 100ms
- H1: 200ms
- Sub: 300ms
- Buttons: 400ms
- Meta: 500ms

### 6.3 Sektion 2: Problem

**Hintergrund:** Weiß

**Inhalt:**

```
[Kicker] DAS PROBLEM
[H2]     Deine Website sollte Kunden bringen. Nicht nur existieren.
[Sub]    Die meisten Websites lokaler Unternehmen haben eines gemeinsam: Sie wurden einmal gebaut und dann vergessen. Das Ergebnis sieht man in den Zahlen. Besucher, die nach drei Sekunden wieder weg sind, weil die Seite zu langsam lädt. Anfragen, die nicht kommen, weil Google die Seite auf Platz 40 versteckt. Kunden, die beim Mitbewerber landen, weil der eine mobile Seite hat, die wirklich funktioniert.

[3er-Grid mit 3 Cards]
```

**Problem-Cards (3 Stück):**

| Icon (Lucide) | Titel | Text |
|---|---|---|
| `Clock` | Zu langsam | Jede Sekunde Ladezeit kostet dich Besucher. Die meisten lokalen Websites laden über 5 Sekunden – der Standard liegt bei unter 2. |
| `Search` | Bei Google unsichtbar | Wenn deine Seite nicht für lokale Suchen optimiert ist, findet dich niemand. Auch wenn dein Angebot das beste im Umkreis ist. |
| `Smartphone` | Mobil unbrauchbar | Über 70 % deiner Besucher kommen übers Smartphone. Wenn die Seite dort bricht, ist der Kunde weg – bevor du überhaupt wusstest, dass er da war. |

**Card-Styling:**
- Icon oben: 24x24px, `primary`, in Salbei-Light-Hintergrundquadrat (`accent-light`, 48x48px, Radius 12px)
- H3 darunter (margin-top 16px): Sora 20px 700
- Text darunter (margin-top 8px): Source Serif 4 16px, `muted`

### 6.4 Sektion 3: So arbeite ich

**Hintergrund:** Puder

**Inhalt:**

```
[Kicker] MEIN ANSATZ
[H2]     Wie ich arbeite – und warum das anders ist.
[Sub]    Ich komme nicht aus der klassischen Webdesign-Welt. Hauptberuflich baue ich im E-Commerce mit – einer Branche, in der jede Sekunde Ladezeit und jeder Klick gemessen wird. Dort lernst du sehr schnell, was eine Website leisten muss, um Umsatz zu machen. Dieses Denken bringe ich in jedes Projekt.

[3 Blöcke im Zick-Zack-Layout]
```

**Drei Blöcke (abwechselnd links/rechts-ausgerichtet):**

**Block 1 – Icon links:**
- Icon: Lucide `Zap` (56x56px Container, Salbei-Light-Hintergrund)
- H3: `Tempo, das Agenturen nicht liefern können`
- Text: `Ich arbeite mit modernen, KI-gestützten Entwicklungstools. Das heißt: Was in einer klassischen Agentur vier Wochen dauert, baue ich in vier Tagen. Gleiche Qualität, andere Geschwindigkeit. Das spart dir Zeit, und weil meine Prozesse schlanker sind, auch Geld.`

**Block 2 – Icon rechts:**
- Icon: Lucide `Gauge`
- H3: `Performance statt Dekoration`
- Text: `Ich baue keine Seiten, die nur schön aussehen. Ich baue Seiten, die unter 2 Sekunden laden, die Google versteht, und die auf jedem Handy funktionieren. Lighthouse-Score 90+ ist bei mir Standard, nicht Upgrade.`

**Block 3 – Icon links:**
- Icon: Lucide `Code2`
- H3: `Keine Templates`
- Text: `Ich arbeite nicht mit Baukästen. Jede Seite wird als Code für dein Unternehmen geschrieben. Das klingt nach Mehraufwand – ist aber genau das, was deine Seite schneller, sichtbarer und langfristig wartbarer macht.`

**Mobile:** Alle Blöcke untereinander, Icon immer oben.

### 6.5 Sektion 4: Leistungen-Teaser

**Hintergrund:** Weiß

**Inhalt:**

```
[Kicker] LEISTUNGEN
[H2]     Website-Pakete für Unternehmen in Gütersloh und OWL.
[Sub]    Drei Pakete, klare Preise, keine Überraschungen. Wähle das Paket, das zu deinem Unternehmen passt – oder lass uns im Erstgespräch gemeinsam herausfinden, welches es ist.

[3er-Grid mit 3 Paket-Karten]

[Unter den Karten, zentriert]
Alle Preise sind Endpreise. Ich bin Kleinunternehmer nach §19 UStG – keine Mehrwertsteuer.

[Link-CTA zentriert]
Alle Leistungen & Prozess ansehen →
```

**Paket-Karten:**

| | Starter | Business (highlighted) | Premium |
|---|---|---|---|
| Name | Starter | Business | Premium |
| Badge | – | Beliebt | – |
| Preis | Ab 890 € | Ab 1.690 € | Ab 2.990 € |
| Preis-Hinweis (italic, muted) | Einführungspreis · limitiert | Einführungspreis · limitiert | Einführungspreis · limitiert |
| Beschreibung | Die perfekte erste Website. Ein Seitenbereich, mobil, bei Google auffindbar, mit Kontaktformular. | Mehrere Unterseiten, individuelles Design, Local SEO, Performance-Optimierung. | Alles aus Business plus Online-Buchung, Mehrsprachigkeit, CMS und erweiterte SEO-Strategie. |
| Zielgruppe (italic) | Für Handwerker, Selbstständige, kleine Dienstleister, die digital starten wollen. | Für Restaurants, Vereine, etablierte Unternehmen, die Kunden aktiv gewinnen wollen. | Für anspruchsvolle Projekte mit komplexeren Anforderungen. |
| CTA-Button | Details ansehen → | Details ansehen → | Details ansehen → |
| Link-Ziel | `/leistungen#starter` | `/leistungen#business` | `/leistungen#premium` |

**Preis-Styling:** JetBrains Mono 32px, 500, Farbe `primary`

### 6.6 Sektion 5: Referenzen-Teaser

**Hintergrund:** Puder

**Inhalt:**

```
[Kicker] REFERENZEN
[H2]     Aktuelle Projekte.
[Sub]    Klarteq ist neu – aber das Handwerk nicht. Hier sind Projekte, die ich bereits umgesetzt habe. Weitere Referenzen folgen, sobald die ersten Klarteq-Kunden live sind.

[2er-Grid mit 2 Referenz-Karten]
```

**Referenz-Karten:**

**Karte 1 – DSC Gütersloh:**
- Platzhalter-Screenshot oben (Claude Code: später durch echten Screenshot ersetzen)
- Titel: `DSC Gütersloh`
- Meta (JetBrains Mono 12px, muted): `Vereinswebsite · 2025`
- Beschreibung: `Moderne Vereinsseite mit Mitglieder-Informationen, Terminen und mobiler Optimierung.`
- CTA-Link: `Zur Website →` (Luca liefert URL nach)

**Karte 2 – Luca Sorci Portfolio:**
- Platzhalter-Screenshot oben
- Titel: `Luca Sorci · Portfolio`
- Meta: `Entwickler-Portfolio · 2025`
- Beschreibung: `Zeigt Projekte aus den Bereichen Automatisierung, Bot-Entwicklung und Webentwicklung.`
- CTA-Link: `Zur Website →` (Luca liefert URL nach)

### 6.7 Sektion 6: Über-mich-Kurzfassung

**Hintergrund:** Weiß

**Layout:** 2-Spalten (40/60 auf Desktop, gestapelt auf Mobile)

**Links:** Foto `luca1.jpg`, quadratisch oder 4:5, Border-Radius 12px, verwendet `next/image` mit `priority={false}`

**Rechts:**
```
[Kicker] WER BAUT HIER
[H2]     Luca Sorci – dein Webentwickler aus Gütersloh.
[Text]   Ich bin Luca, Entwickler aus Gütersloh. Hauptberuflich arbeite ich im E-Commerce, einer Welt, in der jede Sekunde Ladezeit und jeder Klick gemessen wird. Diese Erfahrung bringe ich zu lokalen Unternehmen, die bisher mit Websites arbeiten, die mehr schaden als nützen – zu langsam, nicht mobil-optimiert, bei Google unsichtbar.

         Mit modernen Entwicklungstools baue ich in Tagen, wofür klassische Agenturen Wochen brauchen. Keine Templates. Keine Standardlösungen. Sondern Websites, die für dein Geschäft arbeiten.

[Link]   Mehr über mich →
```

### 6.8 Sektion 7: FAQ

**Hintergrund:** Puder

**Inhalt:**

```
[Kicker] HÄUFIGE FRAGEN
[H2]     Was Kunden vor dem ersten Gespräch fragen.

[FAQ-Akkordeon mit 6 Fragen]
```

**Fragen:**

1. **Wie lange dauert ein Website-Projekt?**  
Ein Starter-Projekt ist in 5–7 Werktagen live. Business-Projekte brauchen 2–3 Wochen. Premium-Projekte je nach Umfang 3–5 Wochen. Das beinhaltet immer Zeit für deine Korrekturwünsche – ich arbeite nicht im Akkord, sondern in Ruhe.

2. **Was brauche ich als Kunde, um zu starten?**  
Nicht viel. Ich brauche Inhalte zu deinem Unternehmen (Texte, Fotos, Logo), Zugang zu deiner Domain oder Zeit für einen Neukauf, und ein erstes Gespräch von 30–60 Minuten. Wenn du keine Texte hast, helfe ich dir dabei – das ist im Projekt eingeplant.

3. **Warum keine Mehrwertsteuer auf den Preisen?**  
Ich bin Kleinunternehmer nach §19 UStG. Das heißt: Ich weise keine Mehrwertsteuer aus. Für dich als Kunde ist das ein Vorteil – der Betrag auf dem Angebot ist der Betrag, den du zahlst. Keine 19 % Aufschlag.

4. **Was passiert nach dem Launch?**  
Deine Seite gehört dir – Code, Inhalte, Domain. Optional kannst du mein Wartungspaket buchen (49 €/Monat): Hosting, SSL, Backups, Sicherheitsupdates und kleine Änderungen inklusive. Wer das nicht will, kann die Seite auch selbst hosten oder zu einem anderen Dienstleister mitnehmen.

5. **Kann ich später selbst Inhalte ändern?**  
Im Business- und Premium-Paket auf Wunsch mit CMS – dann änderst du Texte und Bilder selbst. Im Starter-Paket ohne CMS, weil das den Preis günstig hält. Kleinere Änderungen übernehme ich für dich (im Wartungspaket inklusive).

6. **Wie wird bezahlt?**  
50 % Anzahlung bei Projektstart, 50 % bei Übergabe. Rechnung per E-Mail, Überweisung, keine Überraschungen.

### 6.9 Sektion 8: Abschluss-CTA

**Hintergrund:** Anthrazit `#111827`
**Textfarbe:** Puder

**Layout:** Zentriert, max-width 720px, padding `py-24`

```
[H2 (weiß)]     Lass uns über dein Projekt reden.
[Sub (weiß/70%)]  Egal ob du schon weißt, was du brauchst, oder erst sortieren willst, was möglich ist – schreib mir. Das erste Gespräch ist kostenlos und unverbindlich. Innerhalb von 24 Stunden hast du eine Antwort.

[Primary Button] Projekt besprechen   → /kontakt
[Darunter, kleiner, muted] Oder direkt: hallo@klarteq.de
```

---

## 7. Seite 2: Leistungen (`/leistungen`)

### 7.1 Meta-Angaben

```tsx
export const metadata = {
  title: 'Leistungen & Preise · Website erstellen lassen in Gütersloh | Klarteq',
  description: 'Drei Pakete für lokale Unternehmen in OWL: Starter ab 890 €, Business ab 1.690 €, Premium ab 2.990 €. Transparent, schnell, ohne Templates.',
};
```

### 7.2 Seiten-Hero

**Hintergrund:** Puder

```
[Kicker] LEISTUNGEN & PREISE
[H1]     Leistungen & Preise
[Sub]    Drei Pakete, klare Preise, keine Überraschungen. Wähle das Paket, das zu deinem Unternehmen passt – oder lass uns im Erstgespräch gemeinsam herausfinden, welches es ist.
```

### 7.3 Paket-Sektionen (jeweils eine Sektion pro Paket)

Jedes Paket bekommt eine eigene Sektion mit Anchor-ID (`#starter`, `#business`, `#premium`), damit die Links aus dem Teaser direkt dorthin scrollen.

**Layout pro Paket:**

- Weiße Card, max-width 800px, zentriert, padding 48px
- Business-Paket: mit 2px Salbei-Border und "Beliebt"-Badge oben rechts

**Inhalt pro Paket:**

```
[H2]           Starter / Business / Premium
[Preis]        Ab 890 € / 1.690 € / 2.990 €         (JetBrains Mono 36px)
[Preis-Hinweis] Einführungspreis · limitiert         (Source Serif 4 italic 13px muted)

[Kurz-Beschreibung in Source Serif 4 17px]

[Checkliste mit Lucide Check-Icons, Farbe accent]
  ✓ Punkt 1
  ✓ Punkt 2
  ...

[Zielgruppen-Absatz, italic, muted]
Für wen geeignet: ...

[Primary Button] Starter / Business / Premium anfragen
→ /kontakt?paket=starter|business|premium
```

**Inhalte:**

#### Starter

Kurzbeschreibung: `Die perfekte erste Website. Ein Seitenbereich, mobil optimiert, bei Google auffindbar, mit funktionierendem Kontaktformular. Für Handwerker, Selbstständige und kleine Dienstleister, die digital endlich richtig starten wollen.`

Checkliste:
- One-Pager mit bis zu 5 Sektionen (Hero, Über, Leistungen, Referenzen, Kontakt)
- Vollständig mobil-optimiert (Smartphone, Tablet, Desktop)
- Kontaktformular mit Spam-Schutz
- Google Maps-Einbindung für deinen Standort
- SEO-Grundoptimierung (Meta-Tags, strukturierte Daten, Sitemap)
- Integration von bis zu 5 Bildern (optimiert für schnelle Ladezeit)
- Lighthouse-Performance-Score 90+
- Zwei Korrekturschleifen inklusive
- Übergabe inklusive Einweisung per E-Mail

Zielgruppe: `Du hast noch keine Website, oder deine bisherige ist 10 Jahre alt und peinlich? Du willst einen klaren, seriösen Online-Auftritt, der deine Kontaktdaten, dein Angebot und deine Referenzen zeigt – mehr nicht? Dann ist Starter genau richtig.`

#### Business (highlighted, Badge "Beliebt")

Kurzbeschreibung: `Die Website für Unternehmen, die Kunden aktiv gewinnen wollen. Mehrere Unterseiten, individuelles Design, lokal bei Google sichtbar, maximal schnell. Für Restaurants, Vereine, Dienstleister mit mehreren Angeboten, etablierte Unternehmen.`

Checkliste:
- Bis zu 6 Unterseiten (z. B. Start, Leistungen, Team, Referenzen, Blog-Start, Kontakt)
- Individuelles Design, speziell für dein Unternehmen entwickelt (keine Templates)
- Erweiterte SEO-Optimierung mit Fokus auf Local SEO (Google Business, lokale Suchbegriffe, Schema Markup)
- Performance-Optimierung mit Lighthouse-Score 90+ in allen Kategorien
- Integration von bis zu 15 Bildern (optimiert)
- Einbindung von Social-Media-Kanälen
- Kontaktformular mit erweiterten Feldern
- Drei Korrekturschleifen inklusive
- Einweisung per Video-Call (60 Minuten)
- 30 Tage kostenloser Support nach Launch

Zielgruppe: `Du willst, dass Menschen, die in deiner Stadt nach deinem Angebot suchen, dich finden – und zwar auf Seite 1 bei Google. Du willst eine Website, die nicht nur informiert, sondern aktiv Kunden bringt. Dein Unternehmen ist etabliert und braucht einen digitalen Auftritt, der dazu passt. Dann ist Business das richtige Paket.`

#### Premium

Kurzbeschreibung: `Alles aus dem Business-Paket plus erweiterte Funktionen für anspruchsvolle Projekte. Online-Buchung, Mehrsprachigkeit, Content-Management-System, strategische SEO-Planung. Für Unternehmen, deren Website zentrales Werkzeug ihres Geschäfts ist.`

Checkliste:
- Alles aus dem Business-Paket
- Online-Buchungs- oder Reservierungssystem (z. B. für Termine, Tische, Kurse)
- Mehrsprachigkeit (bis zu 2 Sprachen, z. B. Deutsch/Englisch)
- Content-Management-System – du änderst Texte und Bilder selbst
- Erweiterte SEO-Strategie mit Keyword-Recherche und Content-Plan für die ersten 3 Monate
- Wettbewerbsanalyse (was machen deine 3 stärksten lokalen Mitbewerber online)
- Vier Korrekturschleifen inklusive
- Einstündige Schulung zur CMS-Nutzung per Video-Call
- 60 Tage kostenloser Support nach Launch

Zielgruppe: `Deine Website ist kein Nebenschauplatz, sondern zentral für dein Geschäft. Du brauchst Funktionen wie Buchung oder Mehrsprachigkeit. Du willst die Inhalte selbst pflegen können, ohne jedes Mal anzurufen. Du willst eine echte Strategie, nicht nur eine schöne Seite. Dann bauen wir Premium.`

### 7.4 Wartungspaket-Sektion

**Hintergrund:** Puder (anderer Hintergrund als die Paket-Sektionen, damit es optisch abgegrenzt ist)

```
[H2]           Wartungspaket · Optional zu jedem Paket
[Preis]        49 € pro Monat
[Einleitung]   Eine Website ist kein Möbelstück. Sie braucht Pflege: Sicherheitsupdates, Backups, kleine Anpassungen, wenn sich was ändert. Das Wartungspaket nimmt dir das komplett ab.

[Checkliste]
  ✓ Hosting auf performanter Infrastruktur (Vercel)
  ✓ SSL-Zertifikat inklusive
  ✓ Wöchentliche Backups
  ✓ Sicherheitsupdates aller technischen Komponenten
  ✓ Monitoring (falls die Seite ausfällt, weiß ich es sofort)
  ✓ Kleine Änderungen bis 30 Minuten pro Monat inklusive
  ✓ Monatlicher Performance-Check
  ✓ Direkter Ansprechpartner, Reaktion innerhalb von 24 Stunden

[Absatz]
Das Wartungspaket ist optional. Willst du deine Seite selbst hosten oder einen anderen Dienstleister nutzen, ist das auch möglich – deine Website gehört dir, Code und Inhalte bleiben in deinem Besitz.

[Primary Button] Wartungspaket anfragen  → /kontakt?paket=wartung
```

### 7.5 Prozess-Sektion

**Hintergrund:** Weiß

```
[Kicker] ABLAUF
[H2]     So läuft ein Projekt bei mir ab.
[Sub]    Jedes Projekt folgt einem klaren Ablauf. Damit du weißt, was wann passiert, und dich darauf verlassen kannst.

[Vertikaler Timeline/Stepper mit 5 Schritten]
```

**Stepper-Design:**
- Vertikale Linie links (1px, `border`), an jedem Schritt ein kleiner gefüllter Kreis (8px, `accent`)
- Rechts vom Kreis: H3 + Text

**Schritte:**

1. **Erstgespräch (30–60 Min., kostenlos)** – Wir reden über dein Unternehmen, deine Kunden, deine Ziele. Ich höre zu, frage nach. Am Ende weiß ich, was du brauchst. Du entscheidest danach, ob wir zusammenarbeiten.

2. **Angebot & Konzept** – Du bekommst ein schriftliches Angebot mit Festpreis und eine Struktur-Skizze der Website (welche Seiten, welche Inhalte, welcher Aufbau). Passt alles? Dann geht's los.

3. **Umsetzung** – Ich baue deine Website. Je nach Paket zwischen 5 Tagen und 5 Wochen. Während dieser Zeit halte ich dich per E-Mail auf dem Laufenden, du bekommst einen Zwischenstand zum Anschauen.

4. **Korrekturen** – Du schaust dir die Seite an, wir gehen deine Anmerkungen durch. Je nach Paket hast du 2 bis 4 Korrekturschleifen inklusive. Ich nehme deine Rückmeldungen ernst – auch wenn es nur um Kommas geht.

5. **Launch & Übergabe** – Die Seite geht live. Du bekommst eine Einweisung (per E-Mail, Video-Call oder in Person, je nach Paket), alle Zugänge und Dokumentationen. Danach entscheidest du, ob du selbst weitermachst oder das Wartungspaket nutzt.

### 7.6 FAQ-Sektion (Leistungen-spezifisch)

**Hintergrund:** Puder

Fragen:

1. **Warum "ab"-Preise? Was kommt noch dazu?**  
Die "ab"-Preise gelten für Projekte im definierten Umfang. Wenn du Sonderwünsche hast, die darüber hinausgehen (z. B. ein Shop-System im Starter-Paket, oder 40 statt 15 Bilder im Business-Paket), bespreche ich das vorher mit dir – transparent, mit klarem Aufpreis. Keine versteckten Kosten.

2. **Was ist, wenn ich unsicher bin, welches Paket passt?**  
Dann nutz das Erstgespräch. 30 bis 60 Minuten, kostenlos, unverbindlich. Ich frage dich Dinge über dein Unternehmen, die du dir vielleicht selbst noch nicht gestellt hast – und am Ende des Gesprächs weißt du, was du brauchst. Oft merken Kunden dabei, dass sie eher Starter brauchen als Business, oder umgekehrt.

3. **Kann ich später von Starter auf Business upgraden?**  
Grundsätzlich ja, aber ehrlich: Wenn du absehen kannst, dass du in 6 Monaten Business brauchst, starte gleich mit Business. Ein späterer Umbau kostet mehr als von Anfang an richtig gebaut. Im Erstgespräch klären wir das.

4. **Was passiert, wenn ich mitten im Projekt Wünsche ändere?**  
Kleine Änderungen sind normal und eingeplant. Große Richtungswechsel (z. B. "wir brauchen doch noch einen Online-Shop") bespreche ich mit dir – meist lässt sich das lösen, manchmal braucht's einen Nachtrag zum Angebot. Offen, bevor ich weiterbaue.

5. **Was gehört mir nach dem Projekt?**  
Alles. Code, Design, Inhalte, Domain. Du bist nicht an mich gebunden. Auch das Hosting ist frei wählbar – du kannst das Wartungspaket buchen, selbst hosten oder zu einem anderen Dienstleister gehen. Deine Website ist dein Eigentum.

6. **Wie viele Pioneer-Plätze sind noch frei?**  
Die Einführungspreise gelten für die ersten zwei Klarteq-Projekte. Nach Abschluss dieser Projekte steigen die Preise auf das reguläre Niveau. Frag im Erstgespräch nach, wie der aktuelle Stand ist.

### 7.7 Abschluss-CTA (dunkel)

Gleiches Design wie auf der Startseite (Anthrazit-Hintergrund).

```
[H2]  Noch Fragen? Oder direkt starten?
[Sub] Egal, ob du genau weißt, was du willst, oder gerade erst anfängst, darüber nachzudenken – das Erstgespräch ist kostenlos und unverbindlich. Schreib mir, und wir finden heraus, ob und wie ich dir helfen kann.

[Primary Button] Projekt besprechen
[darunter]       Oder schreib direkt an hallo@klarteq.de
```

---

## 8. Seite 3: Über mich (`/ueber-mich`)

### 8.1 Meta-Angaben

```tsx
export const metadata = {
  title: 'Über Luca Sorci · Webentwickler aus Gütersloh | Klarteq',
  description: 'Ich bin Luca, Webentwickler aus Gütersloh. Hauptberuflich im E-Commerce, nebenberuflich baue ich Websites für lokale Unternehmen in OWL.',
};
```

### 8.2 Hero

**Hintergrund:** Puder

```
[Kicker] DEIN ENTWICKLER
[H1]     Über mich
[Sub]    Warum ein E-Commerce-Entwickler aus Gütersloh Websites für lokale Unternehmen baut.
```

### 8.3 Hauptbereich

**Hintergrund:** Weiß
**Layout:** 2-Spalten (45/55), gestapelt auf Mobile

**Links:** Foto `luca1.jpg` oder `luca2.jpg` (größer gerendert, ca. 480x600px), Border-Radius 12px

**Rechts – 3 Absätze:**

> Ich bin Luca Sorci. Entwickler aus Gütersloh, mit italienischen Wurzeln und einem Faible für sauber gebaute Dinge. Hauptberuflich arbeite ich im E-Commerce – einer Welt, in der jede Sekunde Ladezeit Geld kostet und jeder Klick bis hinter die dritte Kommastelle gemessen wird. Man lernt dort sehr schnell: Eine Website ist kein Deko-Objekt. Sie ist ein Werkzeug, das entweder funktioniert oder versagt.

> In meiner Hauptarbeit sehe ich täglich, was Websites leisten müssen, um Umsatz zu machen. Schnelle Ladezeiten. Klare Struktur. Konsequente Optimierung für Suchmaschinen. Mobile-First, weil über 70 % aller Besucher vom Smartphone kommen. Das ist Standard in meiner Welt.

> Wenn ich dann sehe, wie lokale Unternehmen in Ostwestfalen mit Websites arbeiten, die vor 10 Jahren gebaut wurden und seitdem nicht angefasst wurden, wird mir klar: Hier ist eine riesige Lücke. Zwischen dem, was digital möglich ist, und dem, was lokal ankommt. Genau diese Lücke will ich mit Klarteq schließen.

### 8.4 Warum-ich-das-mache (Eisdielen-Story)

**Hintergrund:** Puder
**Layout:** Einspaltig, zentriert, max-width 720px

```
[Kicker] WARUM ICH DAS MACHE
[H2]     Warum ich das mache.

[Fließtext, Source Serif 4, 4 Absätze]
```

> Es gibt eine Eisdiele in Gütersloh, die ich liebe. Das Eis ist handgemacht, die Familie dahinter steht seit Jahren hinter der Theke, im Sommer steht man dort eine halbe Stunde an – und das gerne.

> Vor ein paar Monaten wollte ich jemandem die Öffnungszeiten schicken. Ich habe die Website aufgerufen. Auf dem Handy. Sie hat neun Sekunden zum Laden gebraucht. Die Speisekarte war ein PDF, das auf dem Smartphone nicht lesbar war. Die Öffnungszeiten standen irgendwo, aber nicht da, wo man sie erwartet. Ich kenne den Laden. Ich weiß, wie gut er ist. Aber jemand, der ihn online zum ersten Mal findet, würde das nicht glauben.

> Das ist kein Einzelfall. Das ist der Standard. Und das muss nicht so bleiben.

> Lokale Unternehmen sind das Rückgrat von Städten wie Gütersloh, Bielefeld, Rheda-Wiedenbrück. Sie verdienen Websites, die ihrem Angebot gerecht werden. Nicht Websites, die ihnen schaden.

### 8.5 Werte-Sektion

**Hintergrund:** Weiß

```
[Kicker] WERTE
[H2]     Wie ich arbeite.

[4er-Grid mit 4 Werte-Blöcken (auf Mobile 2x2 oder 1x4)]
```

**Vier Blöcke:**

1. **Ehrlich, auch wenn's unangenehm ist.** — Wenn dein Vorhaben nicht sinnvoll ist, sage ich's. Wenn Starter reicht und du Business anfragst, sage ich's. Ich verkaufe dir nichts, was du nicht brauchst.

2. **Klar, nicht kompliziert.** — Ich rede nicht in Fachchinesisch. Was ich baue, erkläre ich so, dass du es verstehst. Auch wenn du noch nie eine Website beauftragt hast.

3. **Schnell, aber nicht hektisch.** — Ich arbeite mit modernen Tools, die mich beschleunigen. Aber ich lasse mir die Zeit, die nötig ist, damit das Ergebnis stimmt. Tempo ersetzt keine Sorgfalt.

4. **Deine Seite, dein Eigentum.** — Du bist nicht an mich gebunden. Code, Inhalte, Domain – alles gehört dir. Ich will Kunden, die bleiben, weil ich gut bin. Nicht, weil sie nicht wegkönnen.

### 8.6 Abschluss-CTA (dunkel)

```
[H2]  Lust auf ein Gespräch?
[Sub] Das Erstgespräch ist kostenlos und unverbindlich. 30 bis 60 Minuten, entweder per Video-Call oder in Person in Gütersloh.
[Primary Button] Projekt besprechen  → /kontakt
```

---

## 9. Seite 4: Kontakt (`/kontakt`)

### 9.1 Meta-Angaben

```tsx
export const metadata = {
  title: 'Kontakt · Webentwickler in Gütersloh anfragen | Klarteq',
  description: 'Schreib mir für dein Website-Projekt in OWL. Kostenloses Erstgespräch, Antwort innerhalb von 24 Stunden. Aus Gütersloh, für Ostwestfalen.',
};
```

### 9.2 Hero

**Hintergrund:** Puder

```
[Kicker] PROJEKT ANFRAGEN
[H1]     Kontakt
[Sub]    Erzähl mir von deinem Projekt. Ich melde mich innerhalb von 24 Stunden.
```

### 9.3 Formular-Sektion

**Hintergrund:** Weiß
**Layout:** Einspaltig, zentriert, max-width 640px

**Component:** `ContactForm` (Client Component, `'use client'`)

**Felder:**

1. **Name*** — Typ text, `autocomplete="name"`, Required
2. **E-Mail*** — Typ email, `autocomplete="email"`, Required, Validierung: RFC-gültige E-Mail
3. **Unternehmen** (optional) — Typ text, `autocomplete="organization"`
4. **Worum geht's?*** — Select-Dropdown, Required. Wenn URL-Parameter `?paket=...` vorhanden ist, Feld vorausgewählt:
   - `starter` → "Neue Website (Starter-Paket)"
   - `business` → "Neue Website (Business-Paket)"
   - `premium` → "Neue Website (Premium-Paket)"
   - `wartung` → "Wartung & Betreuung"
   
   Optionen:
   - "Neue Website (Starter-Paket)"
   - "Neue Website (Business-Paket)"
   - "Neue Website (Premium-Paket)"
   - "Noch unsicher – lass uns beraten"
   - "Bestehende Website überarbeiten"
   - "Wartung & Betreuung"
   - "Sonstiges"

5. **Deine Nachricht*** — Textarea (min 4 Zeilen), Required, Placeholder: `Erzähl kurz, worum es geht. Was ist dein Unternehmen, was brauchst du?`

6. **Datenschutz-Checkbox*** — Required. Text: `Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden.` (Wort "Datenschutzerklärung" ist Link zu `/datenschutz`.)

**Submit-Button:** Primary Button, Text `Anfrage senden`

**Submit-Verhalten:**
1. Client-seitige Validierung (alle Pflichtfelder ausgefüllt, E-Mail valide, Checkbox gesetzt)
2. Bei Fehler: Feld wird rot umrandet, Fehlermeldung darunter in kleinem Text (`text-red-600`)
3. Bei Submit: Button wird disabled, Text wechselt zu `Wird gesendet...`, Spinner (Lucide `Loader2` mit `animate-spin`) erscheint
4. POST an `/api/kontakt` (siehe Abschnitt 13)
5. Bei Erfolg: Redirect auf `/kontakt/danke`
6. Bei Fehler: Inline-Fehlermeldung über dem Formular: "Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreib direkt an hallo@klarteq.de."

**Hinweis unter dem Button (kleiner, muted):** `Deine Daten werden ausschließlich zur Bearbeitung deiner Anfrage genutzt. Keine Newsletter, keine Weitergabe, keine Tracker.`

### 9.4 "Was passiert jetzt?"-Sektion

**Hintergrund:** Puder

```
[Kicker] NACH DEINER ANFRAGE
[H2]     Was passiert jetzt?

[3 durchnummerierte Schritte, horizontal auf Desktop, vertikal auf Mobile]

1. Innerhalb von 24 Stunden bekommst du eine Antwort.
   Meistens schneller. Werktags fast immer innerhalb weniger Stunden.

2. Wir vereinbaren das Erstgespräch.
   30 bis 60 Minuten, kostenlos, unverbindlich. Per Video-Call oder in Person in Gütersloh.

3. Du bekommst ein konkretes Angebot.
   Schriftlich, mit Festpreis, ohne Kleingedrucktes. Du entscheidest danach, ob wir starten.
```

### 9.5 Alternative Kontaktwege

**Hintergrund:** Weiß

```
[Kicker] LIEBER DIREKT?
[H2]     Lieber direkt schreiben?

[Zentriert]
E-Mail: hallo@klarteq.de
Antwortzeit: innerhalb von 24 Stunden, werktags meist schneller
```

### 9.6 Standort & Einzugsgebiet

**Hintergrund:** Puder

```
[Kicker] STANDORT
[H2]     Wo ich arbeite.

[Fließtext]
Klarteq ist in Gütersloh zuhause. Ich arbeite für Unternehmen in ganz Ostwestfalen-Lippe – besonders in Gütersloh, Bielefeld, Rheda-Wiedenbrück, Verl, Harsewinkel, Herzebrock-Clarholz, Halle (Westf.) und Umgebung.

Die meiste Arbeit läuft remote (per Video-Call und E-Mail). Für Erstgespräche oder Präsentationen komme ich in der Region auch gerne persönlich vorbei.
```

---

## 10. Seite 5: Kontakt-Bestätigung (`/kontakt/danke`)

### 10.1 Meta-Angaben

```tsx
export const metadata = {
  title: 'Danke für deine Anfrage | Klarteq',
  description: 'Deine Anfrage ist bei Klarteq eingegangen.',
  robots: { index: false, follow: false }, // Nicht indexieren
};
```

### 10.2 Inhalt

**Hintergrund:** Puder
**Layout:** Zentriert, max-width 520px, padding `py-24 md:py-32`

```
[Grünes Check-Icon, Lucide CheckCircle2, 64px, Farbe accent]

[H1]      Danke für deine Anfrage!
[Sub]     Ich habe deine Nachricht erhalten und melde mich innerhalb von 24 Stunden bei dir – werktags meistens schon innerhalb weniger Stunden.

[Kleiner Text, muted]
Falls du in der Zwischenzeit Fragen hast: hallo@klarteq.de

[Secondary Button] Zurück zur Startseite  → /
```

---

## 11. Rechtliche Seiten (`/impressum`, `/datenschutz`)

### 11.1 Hinweis für Claude Code

**WICHTIG:** Diese Texte werden von Luca selbst über einen Rechts-Generator (z. B. e-recht24.de oder datenschutz-generator.de) erstellt und eingefügt. Claude Code baut nur die **Struktur** – Platzhalter-Texte mit dem Hinweis `PLATZHALTER: Hier kommt der generierte Text rein.`

### 11.2 Styling

- Einspaltig, max-width 720px, zentriert
- Fließtext in Source Serif 4
- Headlines in Sora
- Zurückhaltende Gestaltung, keine großen Cards
- Meta: `robots: { index: true, follow: true }` (sollen indexiert werden – Impressum wird von Google erwartet)

### 11.3 Meta-Angaben

```tsx
// /impressum
export const metadata = {
  title: 'Impressum | Klarteq',
  description: 'Impressum und rechtliche Angaben von Klarteq, Luca Sorci, Gütersloh.',
};

// /datenschutz
export const metadata = {
  title: 'Datenschutzerklärung | Klarteq',
  description: 'Datenschutzerklärung von Klarteq.',
};
```

---

## 12. SEO-Implementierung

### 12.1 Globale Meta-Tags (in `src/app/layout.tsx`)

```tsx
export const metadata = {
  metadataBase: new URL('https://klarteq.de'),
  title: {
    default: 'Klarteq · Webdesign für lokale Unternehmen in OWL',
    template: '%s | Klarteq',
  },
  description: 'Schnelle, sichtbare Websites für lokale Unternehmen in Gütersloh und Ostwestfalen.',
  authors: [{ name: 'Luca Sorci' }],
  creator: 'Luca Sorci',
  publisher: 'Klarteq',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://klarteq.de' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://klarteq.de',
    siteName: 'Klarteq',
  },
  verification: {
    // Nach Google-Search-Console-Setup eintragen:
    // google: 'XXX',
  },
};
```

### 12.2 Schema Markup (in `src/lib/schema.ts`)

Für JSON-LD-Injection in den Seiten.

**LocalBusiness-Schema** (auf Startseite und Kontakt-Seite einbinden):

```ts
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://klarteq.de#business',
  name: 'Klarteq',
  description: 'Webentwicklung für lokale Unternehmen in Ostwestfalen.',
  url: 'https://klarteq.de',
  email: 'hallo@klarteq.de',
  founder: {
    '@type': 'Person',
    name: 'Luca Sorci',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gütersloh',
    addressRegion: 'NRW',
    addressCountry: 'DE',
  },
  areaServed: [
    { '@type': 'City', name: 'Gütersloh' },
    { '@type': 'City', name: 'Bielefeld' },
    { '@type': 'City', name: 'Rheda-Wiedenbrück' },
    { '@type': 'City', name: 'Verl' },
    { '@type': 'City', name: 'Harsewinkel' },
    { '@type': 'City', name: 'Herzebrock-Clarholz' },
    { '@type': 'City', name: 'Halle (Westf.)' },
  ],
  priceRange: '890€ – 2990€',
};
```

**Service-Schema** (auf Leistungen-Seite, eines pro Paket):

```ts
export const starterServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Klarteq Starter-Paket',
  provider: { '@id': 'https://klarteq.de#business' },
  description: 'One-Pager mit SEO-Grundoptimierung, Kontaktformular und mobiler Optimierung.',
  offers: {
    '@type': 'Offer',
    price: '890',
    priceCurrency: 'EUR',
  },
  areaServed: 'Ostwestfalen, Deutschland',
};
// Analog für Business (1690) und Premium (2990)
```

**Person-Schema** (auf Über-mich-Seite):

```ts
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luca Sorci',
  jobTitle: 'Webentwickler',
  worksFor: { '@id': 'https://klarteq.de#business' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gütersloh',
    addressCountry: 'DE',
  },
  url: 'https://klarteq.de/ueber-mich',
};
```

**Einbindung in die Seiten:**

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
/>
```

### 12.3 Sitemap

**Installation:** `npm install next-sitemap`

**Konfiguration** (`next-sitemap.config.js`):

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://klarteq.de',
  generateRobotsTxt: true,
  exclude: ['/kontakt/danke'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
```

**In `package.json` ergänzen:**
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

Das generiert automatisch nach jedem Build `sitemap.xml` und `robots.txt` in `/public`.

### 12.4 Alt-Texte für Bilder

- `luca1.jpg` (Hero auf Startseite): `alt="Luca Sorci, Webentwickler aus Gütersloh"`
- `luca2.jpg` (Über mich): `alt="Porträt von Luca Sorci, Gründer von Klarteq"`
- Klarteq-Logo (wenn als Image verwendet, sonst als Komponente): `alt="Klarteq – Webdesign aus Gütersloh"`
- Referenz-Screenshots: `alt="Website [Projektname] – Referenzprojekt von Klarteq"`

---

## 13. Formular-Backend (Resend-Integration)

### 13.1 Warum Resend?

Resend ist ein moderner E-Mail-Dienst für transaktionale E-Mails, optimiert für Next.js auf Vercel. Kostenloser Tier reicht für die ersten 3000 E-Mails/Monat – mehr als genug für ein lokales Kontaktformular.

### 13.2 Setup-Schritte (für Luca außerhalb von Claude Code)

1. Account auf `resend.com` erstellen
2. Domain `klarteq.de` verifizieren (DNS-Einträge in Porkbun hinterlegen)
3. API-Key erstellen
4. In Vercel als Environment Variable setzen: `RESEND_API_KEY=...`

### 13.3 API-Route (`src/app/api/kontakt/route.ts`)

```ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, unternehmen, thema, nachricht } = body;

    // Basic Server-Side Validation
    if (!name || !email || !thema || !nachricht) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 });
    }

    // Einfache E-Mail-Validierung
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Klarteq Kontakt <kontakt@klarteq.de>',
      to: 'hallo@klarteq.de',
      replyTo: email,
      subject: `Neue Anfrage: ${thema} – ${name}`,
      text: `
Neue Anfrage über das Klarteq-Kontaktformular:

Name: ${name}
E-Mail: ${email}
Unternehmen: ${unternehmen || '(nicht angegeben)'}
Thema: ${thema}

Nachricht:
${nachricht}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Kontaktformular-Fehler:', error);
    return NextResponse.json({ error: 'Serverfehler' }, { status: 500 });
  }
}
```

### 13.4 Spam-Schutz

**Option 1 (empfohlen für Start):** Honeypot-Feld. Ein unsichtbares Formfeld (`display: none`), das Menschen nicht sehen, Bots aber ausfüllen. Wenn das Feld ausgefüllt ist → Request ignorieren.

**Option 2 (später):** Cloudflare Turnstile (CAPTCHA ohne nerviges Anklicken). Erst einbauen, wenn Spam tatsächlich ein Problem wird.

---

## 14. Performance-Anforderungen

**Pflicht-Ziele:**
- Lighthouse Performance: 90+ (Mobile & Desktop)
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100
- Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - INP (Interaction to Next Paint): < 200ms
  - CLS (Cumulative Layout Shift): < 0.1

**Umsetzungs-Checkliste:**
- Alle Bilder via `next/image` einbinden (automatische WebP/AVIF-Konvertierung, Responsive, Lazy-Load)
- Hero-Bild mit `priority={true}` markieren
- Google Fonts via `next/font` mit `display: 'swap'` laden (vorkonfiguriert in Abschnitt 3.3)
- Keine externen Scripts, die das Rendering blockieren
- CSS-in-JS vermeiden – nur Tailwind-Klassen
- Server Components bevorzugen, nur wo nötig Client Components (`'use client'`)

---

## 15. Checkliste vor dem Launch

Diese Checkliste bitte vor dem Go-Live abarbeiten:

### Technisch
- [ ] Alle Seiten rendern ohne Fehler (Startseite, Leistungen, Über mich, Kontakt, Danke, Impressum, Datenschutz)
- [ ] Alle internen Links funktionieren
- [ ] Kontaktformular sendet erfolgreich E-Mail an hallo@klarteq.de
- [ ] Kontaktformular validiert alle Pflichtfelder clientseitig und serverseitig
- [ ] Honeypot-Feld aktiv
- [ ] Mobile Navigation funktioniert (Burger-Menü öffnet/schließt sauber)
- [ ] Alle Formularfelder haben korrekten `autocomplete`-Typ
- [ ] Alle Bilder haben Alt-Texte
- [ ] Favicon wird angezeigt
- [ ] 404-Seite sieht passend zur Marke aus

### Performance
- [ ] Lighthouse 90+ in allen vier Kategorien (Performance, A11y, Best Practices, SEO)
- [ ] Core Web Vitals grün (LCP, INP, CLS)
- [ ] Alle Bilder WebP/AVIF
- [ ] Prefers-reduced-motion wird respektiert

### SEO
- [ ] Jede Seite hat einzigartigen Title-Tag und Meta-Description
- [ ] Canonical-URLs korrekt
- [ ] Schema-Markup auf allen relevanten Seiten eingebunden
- [ ] Sitemap.xml wird unter `/sitemap.xml` erreicht
- [ ] Robots.txt wird unter `/robots.txt` erreicht
- [ ] Danke-Seite ist auf `noindex` gesetzt

### Rechtlich
- [ ] Impressum ist vollständig (Lucas echte Daten, nicht Platzhalter)
- [ ] Datenschutzerklärung ist vollständig
- [ ] Link zur Datenschutzerklärung ist im Kontaktformular
- [ ] Kein Tracking-Code ohne Consent (wenn überhaupt Tracking, dann Plausible/Umami)

### Design
- [ ] Alle Farben entsprechen BRAND.html (Warmgrau, Salbeigrün, Puder, Anthrazit)
- [ ] Farbverhältnis 60/25/15 eingehalten (Salbeigrün sparsam)
- [ ] Logo korrekt: Manrope, Sage-Dot, nie in Versalien
- [ ] Keine zusätzlichen Farben eingeführt
- [ ] Alle Animationen dezent (200-400ms Fade-In, keine Parallax, kein Bouncing)
- [ ] Responsive auf Mobile, Tablet, Desktop

### Browser-Test
- [ ] Chrome (Desktop + Android)
- [ ] Safari (Desktop + iOS)
- [ ] Firefox
- [ ] Edge

---

## Anhang: Wichtige Hinweise für Claude Code

1. **Keine eigenen Design-Entscheidungen treffen.** Alles ist hier spezifiziert. Bei Zweifeln: BRAND.html konsultieren.

2. **Keine zusätzlichen Libraries installieren** außer den im Stack genannten. Besonders keine Animation-Libraries wie Framer Motion – CSS-Transitions reichen.

3. **Keine Placeholder-Bilder einfügen, die nach "Stock-Foto" aussehen.** Wenn ein Bild fehlt, lieber leer lassen und Luca informieren.

4. **Alle Texte 1:1 übernehmen.** Nicht umformulieren, nicht kürzen, nicht "verbessern". Die Texte sind bewusst so gewählt.

5. **Bei Konflikten zwischen diesem Dokument und BRAND.html:** BRAND.html gewinnt.

6. **Bei Unklarheiten:** Nicht raten. Lieber nachfragen oder als TODO markieren.
