import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, PackageCheck, Layers, ArrowRight } from "lucide-react";
import { defaultLocale, isLocale, path, buildLanguageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";
import { products } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const BENEFIT_ICONS = [CheckCircle2, PackageCheck, Layers];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.productsPage.hero.heading,
    description: dict.productsPage.hero.lead,
    alternates: { languages: buildLanguageAlternates("products") },
  };
}

export default async function ProductsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-white py-20">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={dict.productsPage.hero.eyebrow}
              heading={dict.productsPage.hero.heading}
              lead={dict.productsPage.hero.lead}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {dict.productsPage.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-ice-pale px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-products.jpg"
              alt={dict.productsPage.hero.imageAlt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-bone py-16">
        <div className="shell grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              copy={dict.products[product.slug]}
              formatsOnRequestLabel={dict.common.formatsOnRequest}
              detailsCtaLabel={dict.common.detailsCta}
              closeLabel={dict.common.close}
            />
          ))}
          <Link href={path(locale, "bread")} className="card flex flex-col overflow-hidden p-0">
            <div className="relative aspect-[4/3] w-full bg-bone">
              <Image
                src="/images/prod-bread.jpg"
                alt={dict.breadPage.hero.imageAlt}
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-xl font-bold text-navy-deep">{dict.productsPage.breadTeaser.heading}</h3>
              <p className="flex-1 text-sm text-navy-deep/70">{dict.productsPage.breadTeaser.text}</p>
              <span className="btn-ghost mt-2 inline-flex w-fit items-center gap-2">
                {dict.productsPage.breadTeaser.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="shell grid gap-6 sm:grid-cols-3">
          {dict.productsPage.benefits.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index];
            return (
              <div key={benefit.title} className="card">
                <Icon className="text-leaf" size={24} aria-hidden="true" />
                <h3 className="mt-3 font-bold text-navy-deep">{benefit.title}</h3>
                <p className="mt-2 text-sm text-navy-deep/70">{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-navy-deep py-20">
        <div className="shell text-center">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow={dict.productsPage.contactCta.eyebrow}
            heading={dict.productsPage.contactCta.heading}
            lead={dict.productsPage.contactCta.lead}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={path(locale, "contact")} className="btn-primary">
              {dict.productsPage.contactCta.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
