import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/icons";
import { hero, stats } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden bg-dark text-white">
      <Image src="/images/Home1.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-32 md:px-8 md:pb-20">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
            <span className="size-2 rounded-full bg-accent" />
            {t(hero.eyebrow, locale)}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {t(hero.title, locale)}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{t(hero.body, locale)}</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-3">
          <Button href={`/${locale}/#download`}>
            {t(ui.download, locale)} <Arrow width={16} height={16} />
          </Button>
          <Button href={`/${locale}/services/`} variant="outline">
            {t(ui.explore, locale)}
          </Button>
        </Reveal>

        <Reveal delay={0.4}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="bg-dark/70 p-5 backdrop-blur md:p-6">
                <dt className="text-sm text-white/60">{t(s.label, locale)}</dt>
                <dd className="mt-2 text-3xl font-semibold text-accent md:text-4xl" dir="ltr">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
