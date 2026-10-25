import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { stats, sustainability as s } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";

export default function HomeImpact({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  return (
    <section id="impact" className="scroll-mt-20 bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <SectionHeader
          tone="dark"
          index={index}
          eyebrow={t(ui.nav.impact, locale)}
          title={ar ? "أقل انبعاثات، مع كل كيلو بنجمعه" : "Lower emissions with every kilo we collect"}
        />
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-4">
          {stats.map((x) => (
            <div key={x.value} className="bg-dark-2 p-6 md:p-8">
              <dd className="text-4xl text-accent md:text-5xl" dir="ltr">{x.value}</dd>
              <dt className="mt-2 text-white/60">{t(x.label, locale)}</dt>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-accent p-8 text-accent-ink md:p-10">
              <p className="font-medium opacity-70">{t(s.ours.label, locale)}</p>
              <p className="mt-4 text-5xl font-semibold md:text-6xl" dir="ltr">{t(s.ours.value, locale)}</p>
              <p className="mt-2 opacity-70">{t(s.unit, locale)}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/15 p-8 md:p-10">
              <p className="font-medium text-white/60">{t(s.traditional.label, locale)}</p>
              <p className="mt-4 text-5xl font-semibold md:text-6xl" dir="ltr">{t(s.traditional.value, locale)}</p>
              <p className="mt-2 text-white/60">{t(s.unit, locale)}</p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/70">{t(s.paragraphs[0], locale)}</p>
        </Reveal>
      </div>
    </section>
  );
}
