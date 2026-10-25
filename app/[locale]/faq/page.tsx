import type { Metadata } from "next";
import FaqList from "@/components/sections/FaqList";
import PageHero from "@/components/sections/PageHero";
import { type Locale, t, ui } from "@/lib/i18n";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: t(ui.nav.faq, locale) };
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <PageHero eyebrow={t(ui.nav.faq, locale)} title={locale === "ar" ? "عندك سؤال؟" : "Got a question?"} />
      <section className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <FaqList locale={locale} />
      </section>
    </>
  );
}
