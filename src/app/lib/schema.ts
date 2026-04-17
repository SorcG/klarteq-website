const SITE_ID = "https://klarteq.de#business";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_ID,
  name: "Klarteq",
  description: "Webentwicklung für lokale Unternehmen in Ostwestfalen.",
  url: "https://klarteq.de",
  email: "info@klarteq.de",
  founder: {
    "@type": "Person",
    name: "Luca Sorci",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenwedder Straße 318",
    postalCode: "33335",
    addressLocality: "Gütersloh",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "Gütersloh" },
    { "@type": "City", name: "Bielefeld" },
    { "@type": "City", name: "Rheda-Wiedenbrück" },
    { "@type": "City", name: "Verl" },
    { "@type": "City", name: "Harsewinkel" },
    { "@type": "City", name: "Herzebrock-Clarholz" },
    { "@type": "City", name: "Halle (Westf.)" },
  ],
  priceRange: "890€ – 2990€",
};

export const starterServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Klarteq Starter-Paket",
  provider: { "@id": SITE_ID },
  description:
    "One-Pager mit SEO-Grundoptimierung, Kontaktformular und mobiler Optimierung.",
  offers: {
    "@type": "Offer",
    price: "890",
    priceCurrency: "EUR",
  },
  areaServed: "Ostwestfalen, Deutschland",
};

export const businessServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Klarteq Business-Paket",
  provider: { "@id": SITE_ID },
  description:
    "Mehrseitige Website mit Local SEO, individuellem Design und Performance-Optimierung.",
  offers: {
    "@type": "Offer",
    price: "1690",
    priceCurrency: "EUR",
  },
  areaServed: "Ostwestfalen, Deutschland",
};

export const premiumServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Klarteq Premium-Paket",
  provider: { "@id": SITE_ID },
  description:
    "Mehrseitige Website mit Online-Buchung, Mehrsprachigkeit, CMS und erweiterter SEO-Strategie.",
  offers: {
    "@type": "Offer",
    price: "2990",
    priceCurrency: "EUR",
  },
  areaServed: "Ostwestfalen, Deutschland",
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luca Sorci",
  jobTitle: "Webentwickler",
  worksFor: { "@id": SITE_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gütersloh",
    addressCountry: "DE",
  },
  url: "https://klarteq.de/ueber-mich",
};
