"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { path, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: path(locale, "home"), label: dict.nav.home },
    { href: path(locale, "about"), label: dict.nav.about },
    { href: path(locale, "products"), label: dict.nav.products },
    { href: path(locale, "supplyChain"), label: dict.nav.supplyChain },
    { href: path(locale, "contact"), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link href={path(locale, "home")} className="shrink-0">
          <Image src="/images/Logo.png" alt="TAULA" width={56} height={56} priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={dict.nav.home}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-leaf ${
                  isActive ? "text-leaf" : "text-navy-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={dict.languageSwitcherLabel} />
          <Link href={path(locale, "contact")} className="btn-primary">
            {dict.nav.ctaContact}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy-deep lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? dict.common.close : dict.common.menu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-navy/10 bg-white lg:hidden">
          <nav className="shell flex flex-col gap-1 py-4" aria-label={dict.common.menu}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-bone text-leaf" : "text-navy-deep"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex items-center gap-3 px-3">
              <LanguageSwitcher locale={locale} label={dict.languageSwitcherLabel} />
            </div>
            <Link
              href={path(locale, "contact")}
              onClick={() => setOpen(false)}
              className="btn-primary mx-3 mt-3 justify-center"
            >
              {dict.nav.ctaContact}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
