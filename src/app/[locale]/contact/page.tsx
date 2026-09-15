import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { defaultLocale, isLocale, buildLanguageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { site } from "@/data/site";

// Real profile URLs pending — icons stay visible with placeholder links until then.
const SOCIAL_LINKS = [
  { name: "Instagram", hrefKey: "instagram", Icon: Instagram },
  { name: "Facebook", hrefKey: "facebook", Icon: Facebook },
  { name: "TikTok", hrefKey: "tiktok", Icon: TikTokIcon },
] as const;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.contactPage.heading,
    description: dict.contactPage.lead,
    alternates: { languages: buildLanguageAlternates("contact") },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : defaultLocale);

  return (
    <section className="bg-white py-20">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            eyebrow={dict.contactPage.eyebrow}
            heading={dict.contactPage.heading}
            lead={dict.contactPage.lead}
          />

          <div className="card mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-deep">
              {dict.contactPage.detailsHeading}
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-leaf" size={20} aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-deep/60">
                    {dict.contactPage.phoneLabel}
                  </p>
                  <a href={site.phoneHref} className="font-semibold text-navy-deep hover:text-leaf">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-leaf" size={20} aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-deep/60">
                    {dict.contactPage.emailLabel}
                  </p>
                  <a href={`mailto:${site.email}`} className="font-semibold text-navy-deep hover:text-leaf">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-leaf" size={20} aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-deep/60">
                    {dict.contactPage.addressLabel}
                  </p>
                  <p className="font-semibold text-navy-deep">
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                  </p>
                </div>
              </li>
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy-deep">
              {dict.contactPage.followUsHeading}
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ name, hrefKey, Icon }) => (
                <a
                  key={name}
                  href={site.social[hrefKey] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy-deep transition-colors hover:border-leaf hover:text-leaf"
                >
                  <Icon size={16} aria-hidden={true} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <ContactForm dict={dict} />
      </div>
    </section>
  );
}
