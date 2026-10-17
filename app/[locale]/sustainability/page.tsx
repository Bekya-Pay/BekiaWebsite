import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { sustainability as s } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: t(ui.nav.sustainability, locale) };
}

export default async function SustainabilityPage({ params }: Props) {
  const { locale } = await params;
  const ar = locale === "ar";
  return (
    <>
      <PageHero
        eyebrow={t(ui.nav.sustainability, locale)}
        title={ar ? "أقل انبعاثات، مع كل كيلو بنجمعه" : "Lower emissions with every kilo we collect"}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-accent p-8 text-accent-ink md:p-10">
              <p className="font-medium opacity-70">{t(s.ours.label, locale)}</p>
              <p className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl" dir="ltr">{t(s.ours.value, locale)}</p>
              <p className="mt-3 opacity-70">{t(s.unit, locale)}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-line bg-surface p-8 md:p-10">
              <p className="font-medium text-muted">{t(s.traditional.label, locale)}</p>
              <p className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl" dir="ltr">{t(s.traditional.value, locale)}</p>
              <p className="mt-3 text-muted">{t(s.unit, locale)}</p>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-16 grid gap-10 md:grid-cols-12">
          <p className="text-6xl font-semibold text-accent md:col-span-4 md:text-7xl" dir="ltr">{t(s.saving, locale)}</p>
          <div className="space-y-5 text-lg leading-relaxed text-muted md:col-span-8">
            {s.paragraphs.map((p, i) => (
              <p key={i}>{t(p, locale)}</p>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
