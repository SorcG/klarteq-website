import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

const LEGAL_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-powder">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" aria-label="Klarteq Startseite" className="inline-flex">
              <Logo variant="dark" size="md" />
            </Link>
            <p className="mt-4 font-serif text-[15px] leading-relaxed text-white/60">
              Websites für lokale Unternehmen in Ostwestfalen.
            </p>
          </div>

          <nav aria-label="Footer-Navigation">
            <h3 className="font-sora text-[12px] font-semibold uppercase tracking-[1.5px] text-white/60">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sora text-[15px] text-powder transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-sora text-[12px] font-semibold uppercase tracking-[1.5px] text-white/60">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 font-sora text-[15px]">
              <li>
                <a
                  href="mailto:hallo@klarteq.de"
                  className="text-powder transition-colors hover:text-accent"
                >
                  hallo@klarteq.de
                </a>
              </li>
              <li className="text-white/60">Gütersloh, NRW</li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sora text-[13px] text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="font-sora text-[12px] text-white/60">
            © {new Date().getFullYear()} Klarteq · Luca Sorci
          </p>
        </div>
      </div>
    </footer>
  );
}
