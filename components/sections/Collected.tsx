import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { collected } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";
import { asset } from "@/lib/site";

export default function Collected({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  return (
    <section className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <SectionHeader
          tone="dark"
          index={index}
          eyebrow={ar ? "ماذا نجمع" : "What we collect"}
          title={ar ? "حاجات بتجمعها بيكيا باي" : "Things we collect"}
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {collected.map((c, i) => (
            <Reveal key={c.img} delay={(i % 5) * 0.06}>
              <figure className="group h-full overflow-hidden rounded-2xl bg-dark-2 ring-1 ring-white/10 transition hover:ring-accent/60">
                <div className="relative aspect-square">
                  <Image
                    src={asset(c.img)}
                    alt={t(c.label, locale)}
                    fill
                    sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 50vw"
                    className="object-contain p-6 transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 pb-5 text-center text-sm text-white/80">{t(c.label, locale)}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
