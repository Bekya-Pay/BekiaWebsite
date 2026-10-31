import DarkPanel, { darkTile } from "@/components/ui/DarkPanel";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Check } from "@/components/ui/icons";
import { packages } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";

/** The two payout plans side by side: name, what you get, and who it suits. */
export default function Packages({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  return (
    <DarkPanel id="packages">
      <SectionHeader
        tone="dark"
        index={index}
        eyebrow={ar ? "أنظمة بيكيا باي" : "BekyaPay packages"}
        title={ar ? "اختار النظام اللي يناسبك" : "Choose the plan that fits you"}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {packages.map((p, i) => (
          <Reveal key={p.name.en} delay={i * 0.1} className="h-full">
            <GlowCard className={`${darkTile} flex flex-col`}>
              <div className="flex h-full flex-col">
                <h3 className="text-3xl md:text-4xl">{t(p.name, locale)}</h3>

                <ul className="mt-8 flex-1 space-y-4">
                  {p.features.map((f) => (
                    <li key={f.en} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-ink">
                        <Check width={14} height={14} />
                      </span>
                      <span className="leading-relaxed text-white/80">{t(f, locale)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/10 p-5">
                  <p className="text-sm font-semibold text-accent">
                    {ar ? "النظام ده يناسبك أكتر لو" : "This package suits you better if"}
                  </p>
                  <p className="mt-2 leading-relaxed text-white/90">{t(p.suits, locale)}</p>
                </div>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </DarkPanel>
  );
}
