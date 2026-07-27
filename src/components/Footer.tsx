import Image from "next/image";
import Link from "next/link";
import { path, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict";
import { site } from "@/data/site";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Image
            src="/images/Logo.png"
            alt="TAULA"
            width={56}
            height={56}
            className="mb-4 rounded-full"
          />
          <p className="max-w-xs text-sm">{dict.footer.tagline}</p>
          <p className="mt-4 text-sm font-medium text-ice">{dict.footer.originLine}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {dict.footer.contactHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">
            {dict.footer.addressHeading}
          </h3>
          <p className="mt-4 text-sm">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            {site.address.country}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            {dict.footer.legalHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={path(locale, "imprint")} className="hover:text-white">
                {dict.footer.imprintLink}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="shell text-xs text-white/60">
          &copy; {new Date().getFullYear()} {site.legalName} — {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
