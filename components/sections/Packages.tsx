import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Check } from "@/components/ui/icons";
import { packages } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";
import { asset } from "@/lib/site";

export default function Packages({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <SectionHeader
        index={index}
        eyebrow={ar ? "أنظمة بيكيا باي" : "BekyaPay packages"}
        title={ar ? "اختار النظام اللي يناسبك" : "Choose the plan that fits you"}
        body={ar ? "قولنا إيه نظامك مع بيكيا؟" : "Tell us about your plan with Bekya."}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {packages.map((p, i) => (
          <Reveal key={p.name.en} delay={i * 0.1}>
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition hover:-translate-y-1 hover:shadow-xl md:p-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold md:text-3xl">{t(p.name, locale)}</h3>
                <div className="grid size-16 place-items-center rounded-2xl bg-accent/15">
                  <Image src={asset(p.icon)} alt="" width={40} height={40} />
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-4">
                {p.features.map((f) => (
                  <li key={f.en} className="flex gap-3 text-muted">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-ink">
                      <Check width={14} height={14} />
                    </span>
                    {t(f, locale)}
                  </li>
                ))}
              </ul>
              <Button href={`/${locale}/#download`} variant="dark" className="mt-10 self-start">
                {t(ui.download, locale)}
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
