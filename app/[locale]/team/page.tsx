import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { Linkedin } from "@/components/ui/icons";
import { team } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";
import { asset } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: t(ui.nav.team, locale) };
}

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <PageHero eyebrow={t(ui.nav.team, locale)} title={locale === "ar" ? "الفريق وراء بيكيا باي" : "The team behind BekyaPay"} />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:grid-cols-2 md:px-8 md:py-28 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.img} delay={i * 0.1}>
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-line">
                <Image src={asset(m.img)} alt={t(m.name, locale)} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl">{t(m.name, locale)}</h2>
                  <p className="mt-2 leading-relaxed text-muted">{t(m.bio, locale)}</p>
                </div>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition hover:bg-ink hover:text-white">
                    <Linkedin width={18} height={18} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
