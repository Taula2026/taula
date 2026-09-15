"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { locales, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  align?: "left" | "right";
}

function swapLocale(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/");
  // segments[0] is "" (leading slash), segments[1] is the current locale.
  segments[1] = nextLocale;
  return segments.join("/") || `/${nextLocale}`;
}

export function LanguageSwitcher({ locale, label, align = "right" }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSelect(nextLocale: Locale) {
    setOpen(false);
    if (nextLocale === locale) return;
    router.push(swapLocale(pathname ?? `/${locale}`, nextLocale));
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 items-center gap-2 rounded-full border border-navy/20 bg-white px-4 text-sm font-semibold text-navy-deep transition-colors hover:border-navy"
      >
        {locale.toUpperCase()}
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={label}
          className={`absolute top-full z-50 mt-2 w-32 overflow-hidden rounded-xl border border-navy/10 bg-white py-1 shadow-lg ${
            align === "left" ? "left-0" : "right-0"
          }`}
        >
          {locales.map((item) => (
            <li key={item}>
              <button
                type="button"
                role="option"
                aria-selected={item === locale}
                onClick={() => handleSelect(item)}
                className={`block w-full px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-bone ${
                  item === locale ? "text-leaf" : "text-navy-deep"
                }`}
              >
                {item.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
