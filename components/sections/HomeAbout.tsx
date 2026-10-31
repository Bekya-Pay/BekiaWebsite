import Image from "next/image";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { about, aboutStats } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";

// Light tile: hairline border, soft lift on hover.
const tile =
  "h-full rounded-3xl border border-line bg-surface p-8 shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_16px_40px_-16px_rgb(0_0_0/0.15)] md:p-10";

/** Bento grid: photo, Vision, Mission and History with its headline figures. */
export default function HomeAbout({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  const [vision, mission, history] = about;
  return (
    <section id="about" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <SectionHeader index={index} eyebrow={t(ui.nav.aboutUs, locale)} title={ar ? "من نحن" : "Who we are"} />

      <div className="grid gap-4 md:grid-cols-12 md:gap-5">
        <Reveal className="md:col-span-4 md:row-span-2">
          <div className="relative h-full min-h-[26rem] overflow-hidden rounded-3xl">
            <Image src="/images/Home2.jpg" alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-5 start-5 end-5 rounded-2xl border border-white/15 bg-black/50 p-4 text-white backdrop-blur-xl">
              <p className="text-sm text-white/70">{ar ? "انطلقنا في" : "Launched in"}</p>
              <p className="font-display text-3xl text-accent">{ar ? "مارس 2024" : "March 2024"}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-4">
          <GlowCard className={tile}>
            <p className="mb-4 font-display text-accent" dir="ltr">01</p>
            <h3 className="text-3xl">{t(vision.title, locale)}</h3>
            <p className="mt-4 leading-relaxed text-muted">{t(vision.body, locale)}</p>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-4">
          <GlowCard className={tile}>
            <p className="mb-4 font-display text-accent" dir="ltr">02</p>
            <h3 className="text-3xl">{t(mission.title, locale)}</h3>
            <p className="mt-4 leading-relaxed text-muted">{t(mission.body, locale)}</p>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.3} className="md:col-span-8">
          <GlowCard className={tile}>
            <div className="flex items-baseline gap-4">
              <p className="font-display text-accent" dir="ltr">03</p>
              <h3 className="text-3xl">{t(history.title, locale)}</h3>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {aboutStats.map((s) => (
                <div key={s.value} className="flex flex-col-reverse border-s border-accent/60 ps-4">
                  <dt className="mt-1 text-sm text-muted">{t(s.label, locale)}</dt>
                  <dd className="font-display text-4xl md:text-5xl" dir="ltr">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 leading-relaxed text-muted">{t(history.body, locale)}</p>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
