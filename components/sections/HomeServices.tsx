import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";
import { asset } from "@/lib/site";

const fallbackImages = ["/images/service_waste1.jpg", "/images/Eco_Champions_Program.jpg", "/images/service_elec1.jpg", "/images/service_elec2.jpg"];

export default function HomeServices({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  return (
    <section id="services" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <SectionHeader
          index={index}
          eyebrow={t(ui.nav.ourServices, locale)}
          title={ar ? "حلول متكاملة لإدارة المخلفات" : "End-to-end waste management"}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title.en} delay={(i % 2) * 0.1}>
              <article className="group h-full overflow-hidden rounded-3xl border border-line bg-bg">
                <div className="relative aspect-[16/9] overflow-hidden bg-line">
                  <Image
                    src={asset(s.images[0] ?? fallbackImages[i])}
                    alt=""
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="text-sm font-medium text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-2xl">{t(s.title, locale)}</h3>
                  <p className="mt-3 line-clamp-4 leading-relaxed text-muted">{t(s.body, locale)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
