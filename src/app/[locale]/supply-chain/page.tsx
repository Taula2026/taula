import type { Metadata } from "next";
import Image from "next/image";
import { defaultLocale, isLocale, buildLanguageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const IMAGE_CARD_SRCS = [
  "/images/cold-storage-aisle.jpg",
  "/images/cold-storage-racking.jpg",
  "/images/iqf-line.jpg",
  "/images/qc-magnifier.jpg",
  "/images/truck-fleet-depot.jpg",
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.supplyChainPage.hero.heading,
    description: dict.supplyChainPage.hero.lead,
    alternates: { languages: buildLanguageAlternates("supplyChain") },
  };
}

export default async function SupplyChainPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : defaultLocale);

  return (
    <>
      <section className="bg-white py-20">
        <div className="shell">
          <SectionHeading
            eyebrow={dict.supplyChainPage.hero.eyebrow}
            heading={dict.supplyChainPage.hero.heading}
            lead={dict.supplyChainPage.hero.lead}
          />
          <div className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-supply-chain.jpg"
              alt={dict.supplyChainPage.hero.imageAlt}
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-bone py-20">
        <div className="shell">
          <ol className="space-y-8">
            {dict.supplyChainPage.steps.map((step, index) => (
              <li key={step.title} className="flex gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leaf text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-deep">{step.title}</h3>
                  <p className="mt-1 text-navy-deep/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {dict.supplyChainPage.imageCards.map((cardCopy, index) => (
            <div key={cardCopy.caption} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={IMAGE_CARD_SRCS[index]}
                alt={cardCopy.alt}
                fill
                sizes="(min-width: 1024px) 240px, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/5 to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                {cardCopy.caption}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep py-20">
        <div className="shell text-center">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow={dict.supplyChainPage.closingCta.eyebrow}
            heading={dict.supplyChainPage.closingCta.heading}
            lead={dict.supplyChainPage.closingCta.lead}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={site.phoneHref} className="btn-primary">
              {dict.supplyChainPage.closingCta.ctaPrimary}
            </a>
            <a href={`mailto:${site.email}`} className="btn-ghost bg-transparent text-white hover:bg-white/10">
              {dict.supplyChainPage.closingCta.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
