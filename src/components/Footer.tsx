import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { path, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict";
import { site } from "@/data/site";
import { TikTokIcon } from "./icons/TikTokIcon";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const navItems = [
    { href: path(locale, "home"), label: dict.nav.home },
    { href: path(locale, "about"), label: dict.nav.about },
    { href: path(locale, "products"), label: dict.nav.products },
    { href: path(locale, "bread"), label: dict.nav.bread },
    { href: path(locale, "supplyChain"), label: dict.nav.supplyChain },
    { href: path(locale, "contact"), label: dict.nav.contact },
  ];

  // Real profile URLs pending — icons stay visible with placeholder links until then.
  const socialLinks = [
    { name: "Instagram", href: site.social.instagram || "#", Icon: Instagram },
    { name: "Facebook", href: site.social.facebook || "#", Icon: Facebook },
    { name: "TikTok", href: site.social.tiktok || "#", Icon: TikTokIcon },
  ];

  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/Logo.png"
            alt="TAULA"
            width={56}
            height={56}
            className="mb-4 rounded-full"
          />
          <p className="max-w-xs text-base">{dict.footer.tagline}</p>
          <p className="mt-4 text-base font-medium text-ice">{dict.footer.originLine}</p>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
              >
                <Icon size={16} aria-hidden={true} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-white">
            {dict.footer.navHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-white">
            {dict.footer.contactHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-base">
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

          <h3 className="mt-6 text-base font-semibold uppercase tracking-wide text-white">
            {dict.footer.addressHeading}
          </h3>
          <p className="mt-4 text-base">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}
            <br />
            {site.address.country}
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-white">
            {dict.footer.legalHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-base">
            <li>
              <Link href={path(locale, "imprint")} className="hover:text-white">
                {dict.footer.imprintLink}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="shell text-sm text-white/60">
          &copy; {new Date().getFullYear()} {site.legalName} — {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
