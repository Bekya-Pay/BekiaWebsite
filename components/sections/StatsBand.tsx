import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { heroStats } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";

/** Headline numbers, in a dark band that continues straight on from the hero. */
export default function StatsBand({ locale }: { locale: Locale }) {
  return (
    <section aria-label={locale === "ar" ? "أرقامنا" : "Our numbers"} className="bg-dark text-white">
      <Reveal className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {heroStats.map((s, i) => (
            <div
              key={s.value}
              className={`flex flex-col-reverse px-4 md:px-8 ${i % 2 ? "border-s border-white/15" : ""} ${i === 2 ? "md:border-s md:border-white/15" : ""}`}
            >
              <dt className="mt-2 text-base text-white/70 md:text-lg">{t(s.label, locale)}</dt>
              <dd className="font-display text-4xl text-accent md:text-6xl" dir="ltr">
                <CountUp value={s.value} delay={i * 0.15} />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
