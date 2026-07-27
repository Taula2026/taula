import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Truck, Snowflake, Package, Clock, PhoneCall } from "lucide-react";
import { defaultLocale, isLocale, path, buildLanguageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";
import { products, type Product } from "@/data/products";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const TRUST_ICONS = [Truck, Snowflake, Package, Clock, PhoneCall];
const ABOUT_IMAGES = [
  "/images/cold-storage-aisle.jpg",
  "/images/cold-storage-racking.jpg",
  "/images/iqf-veg-closeup.jpg",
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return {
    title: dict.meta.defaultTitle,
    description: dict.home.hero.lead,
    alternates: { languages: buildLanguageAlternates("home") },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="shell grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="eyebrow">{dict.home.hero.eyebrow}</span>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-navy-deep sm:text-5xl">
              {dict.home.hero.headingLine1}
              <span className="block text-leaf">{dict.home.hero.headingLine2}</span>
            </h1>
            <span className="rule mt-5" />
            <p className="mt-6 max-w-lg text-lg text-navy-deep/70">{dict.home.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={path(locale, "contact")} className="btn-primary">
                {dict.home.hero.ctaPrimary}
              </Link>
              <Link href={path(locale, "products")} className="btn-ghost">
                {dict.home.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:aspect-auto lg:h-[520px]">
            <Image
              src="/images/hero-home.jpg"
              alt={dict.home.hero.imageAlt}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white">
        <div className="shell grid grid-cols-2 gap-8 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {dict.home.trustStrip.map((label, index) => {
            const Icon = TRUST_ICONS[index];
            return (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="text-leaf" size={28} aria-hidden="true" />
                <span className="text-sm font-medium text-navy-deep">{label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-bone py-20">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow={dict.home.about.eyebrow} heading={dict.home.about.heading} />
            <p className="mt-4 text-navy-deep/70">{dict.home.about.body}</p>
            <Link href={path(locale, "about")} className="btn-primary mt-6">
              {dict.home.about.ctaLabel}
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {ABOUT_IMAGES.map((src, index) => (
              <div key={src} className="relative aspect-[3/5] overflow-hidden rounded-2xl bg-navy-deep/10">
                <Image
                  src={src}
                  alt={dict.home.about.imageAlts[index]}
                  fill
                  sizes="(min-width: 1024px) 200px, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/5 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={dict.home.productsTeaser.eyebrow}
              heading={dict.home.productsTeaser.heading}
              lead={dict.home.productsTeaser.lead}
            />
            <Link href={path(locale, "products")} className="btn-ghost">
              {dict.home.productsTeaser.ctaLabel}
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {products.map((product) => (
              <ProductTeaserTile
                key={product.slug}
                product={product}
                name={dict.products[product.slug].name}
                href={path(locale, "products")}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice-pale py-20">
        <div className="shell text-center">
          <SectionHeading
            align="center"
            eyebrow={dict.home.contactBand.eyebrow}
            heading={dict.home.contactBand.heading}
            lead={dict.home.contactBand.lead}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={site.phoneHref} className="btn-primary">
              {dict.home.contactBand.ctaPrimary}
            </a>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              {dict.home.contactBand.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductTeaserTile({
  product,
  name,
  href,
}: {
  product: Product;
  name: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-2xl bg-bone ${
        product.featured ? "aspect-[21/9] sm:col-span-2" : "aspect-[4/3]"
      }`}
    >
      <Image
        src={product.featured && product.imageWide ? product.imageWide : product.image}
        alt={name}
        fill
        sizes="(min-width: 640px) 300px, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
      <span className="absolute bottom-4 left-4 text-lg font-bold text-white">{name}</span>
    </Link>
  );
}
