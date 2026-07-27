import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { locales, defaultLocale, isLocale, buildLanguageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dict";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL("https://www.taula.example"),
    title: dict.meta.defaultTitle,
    description: dict.meta.defaultDescription,
    alternates: {
      languages: buildLanguageAlternates("home"),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;

  if (!isLocale(raw)) {
    notFound();
  }

  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-body">
        <Header locale={locale} dict={dict} />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer locale={locale} dict={dict} />
        <MobileCallBar locale={locale} dict={dict} />
      </body>
    </html>
  );
}
