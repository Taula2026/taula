import type { Metadata } from "next";
import { defaultLocale, isLocale, buildLanguageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";
import { site } from "@/data/site";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.imprintPage.heading,
    alternates: { languages: buildLanguageAlternates("imprint") },
  };
}

export default async function ImprintPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : defaultLocale);

  return (
    <section className="bg-white py-20">
      <div className="shell max-w-2xl">
        <span className="eyebrow">{dict.imprintPage.heading}</span>
        <h1 className="mt-3 text-3xl font-bold text-navy-deep sm:text-4xl">{dict.imprintPage.heading}</h1>
        <span className="rule mt-4" />

        <dl className="mt-10 space-y-8">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-navy-deep/60">
              {dict.imprintPage.companyLabel}
            </dt>
            <dd className="mt-1 text-navy-deep">{site.legalName}</dd>
          </div>

          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-navy-deep/60">
              {dict.imprintPage.addressLabel}
            </dt>
            <dd className="mt-1 text-navy-deep">
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              {site.address.country}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-navy-deep/60">
              {dict.imprintPage.uidLabel}
            </dt>
            <dd className="mt-1 text-navy-deep">{site.uid}</dd>
          </div>

          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-navy-deep/60">
              {dict.imprintPage.contactLabel}
            </dt>
            <dd className="mt-1 text-navy-deep">
              <a href={site.phoneHref} className="block hover:text-leaf">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block hover:text-leaf">
                {site.email}
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-12 border-t border-navy/10 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-navy-deep/60">
            {dict.imprintPage.disclaimerHeading}
          </h2>
          <p className="mt-2 text-sm text-navy-deep/70">{dict.imprintPage.disclaimerText}</p>
        </div>
      </div>
    </section>
  );
}
