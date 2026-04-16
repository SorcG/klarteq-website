"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über mich" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-6 md:h-[72px]">
        <Link href="/" aria-label="Klarteq Startseite" className="flex items-center">
          <Logo variant="light" size="md" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-sora text-[14px] font-medium text-primary transition-colors hover:text-accent"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 -bottom-[10px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-accent transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="rounded-btn bg-accent px-5 py-[10px] font-sora text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Kontakt
          </Link>
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-btn text-primary md:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-powder md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-[60px] items-center justify-between border-b border-border px-6">
            <Logo variant="light" size="md" />
            <button
              type="button"
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-btn text-primary"
            >
              <X size={22} />
            </button>
          </div>
          <nav
            className="flex flex-1 flex-col items-center justify-center gap-8"
            aria-label="Hauptnavigation mobil"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sora text-[20px] font-medium text-primary transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-btn bg-accent px-7 py-3 font-sora text-[15px] font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
