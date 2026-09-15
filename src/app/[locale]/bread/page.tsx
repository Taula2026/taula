import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Wheat, Clock, Sprout, Landmark, Heart, ArrowRight } from "lucide-react";
import { defaultLocale, isLocale, path, buildLanguageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";
import { SectionHeading } from "@/components/SectionHeading";
import { BreadOrderCard } from "@/components/BreadOrderCard";
import { site } from "@/data/site";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const BENEFIT_ICONS = [CheckCircle2, CheckCircle2, CheckCircle2];
const PHILOSOPHY_ICONS = [Wheat, Clock, Sprout, Landmark, Heart];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.breadPage.hero.heading,
    description: dict.breadPage.hero.lead,
    alternates: { languages: buildLanguageAlternates("bread") },
  };
}

export default async function BreadPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-white py-20">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={dict.breadPage.hero.eyebrow}
              heading={dict.breadPage.hero.heading}
              lead={dict.breadPage.hero.lead}
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-bread.jpg"
              alt={dict.breadPage.hero.imageAlt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-bone py-16">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
            <Image
              src="/images/bread-bakery.jpg"
              alt={dict.breadPage.story.heading}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <span className="eyebrow">{dict.breadPage.story.eyebrow}</span>
            <h2 className="mt-3 text-2xl font-bold text-navy-deep sm:text-3xl">
              {dict.breadPage.story.heading}
            </h2>
            <span className="rule mt-4" />
            <p className="mt-4 text-navy-deep/70">{dict.breadPage.story.text}</p>
          </div>
        </div>
      </section>

      <section className="bg-bone py-16">
        <div className="shell">
          <SectionHeading
            align="center"
            eyebrow={dict.breadPage.philosophy.eyebrow}
            heading={dict.breadPage.philosophy.heading}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {dict.breadPage.philosophy.items.map((item, index) => {
              const Icon = PHILOSOPHY_ICONS[index];
              return (
                <div key={item.title} className="card text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ice-pale text-leaf">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-bold text-navy-deep">{item.title}</h3>
                  <p className="mt-2 text-sm text-navy-deep/70">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="shell text-center">
          <SectionHeading
            align="center"
            eyebrow={dict.breadPage.promise.eyebrow}
            heading={dict.breadPage.promise.heading}
            lead={dict.breadPage.promise.lead}
          />
          <Link href={path(locale, "contact")} className="btn-primary mt-8 inline-flex items-center gap-2">
            {dict.breadPage.promise.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-bone py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          <div>
            <div className="grid gap-6 sm:grid-cols-1">
              {dict.breadPage.benefits.map((benefit, index) => {
                const Icon = BENEFIT_ICONS[index];
                return (
                  <div key={benefit.title} className="card flex items-start gap-4">
                    <Icon className="mt-1 shrink-0 text-leaf" size={24} aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-navy-deep">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-navy-deep/70">{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <BreadOrderCard locale={locale} dict={dict} />
        </div>
      </section>

      <section className="bg-navy-deep py-20">
        <div className="shell text-center">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow={dict.breadPage.contactCta.eyebrow}
            heading={dict.breadPage.contactCta.heading}
            lead={dict.breadPage.contactCta.lead}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={site.phoneHref} className="btn-primary">
              {dict.breadPage.contactCta.ctaPrimary}
            </a>
            <a href={path(locale, "contact")} className="btn-ghost bg-transparent text-white hover:bg-white/10">
              {dict.breadPage.contactCta.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
