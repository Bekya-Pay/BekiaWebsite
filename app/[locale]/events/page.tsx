import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { events } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";
import { asset } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: t(ui.nav.events, locale) };
}

export default async function EventsPage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <PageHero eyebrow={t(ui.nav.events, locale)} title={locale === "ar" ? "فعاليات وجوائز شاركنا بها" : "Events & awards we took part in"} />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:grid-cols-2 md:px-8 md:py-28 lg:grid-cols-3">
        {events.map((e, i) => (
          <Reveal key={e.img} delay={(i % 3) * 0.08}>
            <article className="group h-full overflow-hidden rounded-3xl border border-line bg-surface">
              <div className="relative aspect-[4/3] overflow-hidden bg-line">
                <Image src={asset(e.img)} alt={t(e.title, locale)} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-lg">{t(e.title, locale)}</h2>
                {t(e.subtitle, locale) !== t(e.title, locale) && <p className="mt-1 text-sm text-muted">{t(e.subtitle, locale)}</p>}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
