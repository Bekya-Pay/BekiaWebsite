import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { hero, heroStats } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section id="home" className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden bg-dark text-white">
      <Image src={`/images/Hero-${locale}.jpg`} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between gap-12 px-4 pb-6 pt-32 md:px-8 md:pb-8">
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl whitespace-pre-line text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            {t(hero.title, locale)}
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/30 bg-white/20 shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_8px_32px_rgb(0_0_0/0.25)] md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.value} className="bg-black/40 p-5 backdrop-blur-xl backdrop-saturate-150 md:p-6">
                <dt className="text-base font-medium text-white md:text-lg">{t(s.label, locale)}</dt>
                <dd className="mt-2 font-display text-4xl text-accent md:text-6xl" dir="ltr">
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
