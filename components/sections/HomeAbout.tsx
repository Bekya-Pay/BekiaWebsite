import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { about } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";

export default function HomeAbout({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  return (
    <section id="about" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <SectionHeader index={index} eyebrow={t(ui.nav.aboutUs, locale)} title={ar ? "من نحن" : "Who we are"} />
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl md:col-span-5">
          <Image src="/images/Home2.jpg" alt="" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
        </Reveal>
        <div className="space-y-6 md:col-span-7">
          {about.map((a, i) => (
            <Reveal key={a.title.en} delay={i * 0.1}>
              <article className="rounded-3xl border border-line bg-surface p-8">
                <h3 className="text-2xl">
                  <span className="me-3 text-base text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {t(a.title, locale)}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{t(a.body, locale)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
