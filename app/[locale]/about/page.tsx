import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { about, heroStats } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: t(ui.nav.about, locale) };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const ar = locale === "ar";
  return (
    <>
      <PageHero eyebrow={t(ui.nav.about, locale)} title={ar ? "من نحن" : "Who we are"} />
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {about.map((a, i) => (
            <Reveal key={a.title.en} delay={i * 0.1}>
              <article className="h-full rounded-3xl border border-line bg-surface p-8 md:p-10">
                <p className="text-sm font-medium text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-4 text-2xl">{t(a.title, locale)}</h2>
                <p className="mt-4 leading-relaxed text-muted">{t(a.body, locale)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-dark text-white">
        <Image src="/images/Home2.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-20 md:grid-cols-4 md:px-8 md:py-28">
          {heroStats.map((s) => (
            <Reveal key={s.value}>
              <dd className="text-4xl font-semibold text-accent md:text-6xl" dir="ltr">{s.value}</dd>
              <dt className="mt-3 text-white/70">{t(s.label, locale)}</dt>
            </Reveal>
          ))}
        </dl>
      </section>
    </>
  );
}
