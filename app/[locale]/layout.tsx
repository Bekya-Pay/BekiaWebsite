import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cairo, Lalezar } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dir, isLocale, locales, t } from "@/lib/i18n";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";
import "../globals.css";

// Primary (headings) and secondary (body) fonts; both cover Arabic and Latin.
const lalezar = Lalezar({ subsets: ["arabic", "latin"], weight: "400", variable: "--font-lalezar", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const name = t(site.name, locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: name, template: `%s | ${name}` },
    description: t(hero.body, locale),
    openGraph: { siteName: name, images: [`/images/Hero-${locale}.jpg`], locale: locale === "ar" ? "ar_EG" : "en_US" },
    alternates: { languages: { ar: "/ar/", en: "/en/" } },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} dir={dir(locale)} className={`${lalezar.variable} ${cairo.variable}`}>
      <body className="min-h-dvh">
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
