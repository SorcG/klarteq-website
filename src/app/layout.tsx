import type { Metadata } from "next";
import { Manrope, Sora, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klarteq.de"),
  title: {
    default: "Klarteq · Webdesign für lokale Unternehmen in OWL",
    template: "%s | Klarteq",
  },
  description:
    "Schnelle, sichtbare Websites für lokale Unternehmen in Gütersloh und Ostwestfalen.",
  authors: [{ name: "Luca Sorci" }],
  creator: "Luca Sorci",
  publisher: "Klarteq",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://klarteq.de" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://klarteq.de",
    siteName: "Klarteq",
  },
  verification: {
    // Nach Google-Search-Console-Setup eintragen:
    // google: 'XXX',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${sora.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
