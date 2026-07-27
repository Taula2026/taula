import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Truck, Snowflake, Package, Boxes, PhoneCall } from "lucide-react";
import { defaultLocale, isLocale, buildLanguageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";
import { SectionHeading } from "@/components/SectionHeading";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const FEATURE_ICONS = [Truck, Snowflake, Package, Boxes, PhoneCall];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.aboutPage.hero.heading,
    description: dict.aboutPage.hero.lead,
    alternates: { languages: buildLanguageAlternates("about") },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const dict = getDictionary(isLocale(raw) ? raw : defaultLocale);

  return (
    <>
      <section className="bg-white py-20">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow={dict.aboutPage.hero.eyebrow}
              heading={dict.aboutPage.hero.heading}
              lead={dict.aboutPage.hero.lead}
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {dict.aboutPage.trustMarkers.map((marker) => (
                <li key={marker} className="flex items-center gap-2 text-sm font-medium text-navy-deep">
                  <CheckCircle2 className="shrink-0 text-leaf" size={18} aria-hidden="true" />
                  {marker}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-about.jpg"
                alt={dict.aboutPage.hero.imageAlt}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/inspection-team.jpg"
                alt={dict.aboutPage.hero.stackedAlt1}
                fill
                sizes="(min-width: 1024px) 300px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/pallet-boxes.png"
                alt={dict.aboutPage.hero.stackedAlt2}
                fill
                sizes="(min-width: 1024px) 300px, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {dict.aboutPage.featureBand.map((item, index) => {
            const Icon = FEATURE_ICONS[index];
            return (
              <div key={item.title} className="card">
                <Icon className="text-leaf" size={24} aria-hidden="true" />
                <h3 className="mt-3 font-bold text-navy-deep">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-deep/70">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="why-taula" className="bg-white py-20">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow={dict.aboutPage.whyTaula.eyebrow}
            heading={dict.aboutPage.whyTaula.heading}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.aboutPage.whyTaula.cards.map((card) => (
              <div key={card.title} className="card">
                <h3 className="font-bold text-navy-deep">{card.title}</h3>
                <p className="mt-2 text-sm text-navy-deep/70">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
