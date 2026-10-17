import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";
import { asset } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: t(ui.nav.services, locale) };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const ar = locale === "ar";
  return (
    <>
      <PageHero
        eyebrow={t(ui.nav.services, locale)}
        title={ar ? "حلول متكاملة لإدارة المخلفات" : "End-to-end waste management"}
        body={ar ? "من الجمع والتوعية إلى إعادة استخدام الأجهزة والأثاث." : "From collection and awareness to reusing devices and furniture."}
      />
      <div className="mx-auto max-w-7xl divide-y divide-line px-4 md:px-8">
        {services.map((s, i) => (
          <section key={s.title.en} className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-5">
              <p className="mb-4 text-sm font-medium text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{t(s.title, locale)}</h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7">
              <p className="text-lg leading-relaxed text-muted">{t(s.body, locale)}</p>
              {s.images.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {s.images.map((src) => (
                    <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image src={asset(src)} alt="" fill sizes="(min-width:768px) 30vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
