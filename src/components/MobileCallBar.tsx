import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { path, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict";
import { site } from "@/data/site";

interface MobileCallBarProps {
  locale: Locale;
  dict: Dictionary;
}

export function MobileCallBar({ locale, dict }: MobileCallBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-navy/10 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 border-r border-navy/10 py-4 text-sm font-semibold text-navy-deep"
      >
        <Phone size={18} className="text-leaf" />
        {dict.mobileCallBar.call}
      </a>
      <Link
        href={path(locale, "contact")}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-navy-deep"
      >
        <Mail size={18} className="text-leaf" />
        {dict.mobileCallBar.contact}
      </Link>
    </div>
  );
}
