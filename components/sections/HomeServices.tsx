import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Arrow } from "@/components/ui/icons";
import { services } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";
import { asset } from "@/lib/site";

type P = React.SVGProps<SVGSVGElement>;
const line = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

/** Line icons for the three smaller services, in content order. */
const icons = [
  // Awareness: graduation cap
  (p: P) => <svg {...line} {...p}><path d="M2 9.5 12 5l10 4.5-10 4.5L2 9.5Z" /><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5M22 9.5V15" /></svg>,
  // Electronics: phone with a refresh loop
  (p: P) => <svg {...line} {...p}><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M14.5 10a2.8 2.8 0 1 0 .3 3M14.8 8.6V10h-1.4" /></svg>,
  // Furniture: armchair
  (p: P) => <svg {...line} {...p}><path d="M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" /><path d="M3 12a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3v-5ZM6 17v3M18 17v3" /></svg>,
];

// Same light tile as the About bento, so the two sections read as one system.
const tile =
  "h-full rounded-3xl border border-line bg-bg shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_16px_40px_-16px_rgb(0_0_0/0.15)]";

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Bento: the main collection service large, the other three as compact icon tiles. */
export default function HomeServices({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  const [main, ...rest] = services;
  return (
    <section id="services" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-x-6">
          <SectionHeader
            index={index}
            eyebrow={t(ui.nav.ourServices, locale)}
            title={ar ? "حلول متكاملة لإدارة المخلفات" : "End-to-end waste management"}
          />
          <Link
            href={`/${locale}/services/`}
            className="mb-8 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline md:mb-10"
          >
            {ar ? "كل الخدمات" : "All services"} <Arrow width={16} height={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          <Reveal className="md:col-span-7 md:row-span-3">
            <GlowCard className={`${tile} flex flex-col overflow-hidden`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-line md:aspect-auto md:h-80 lg:h-96">
                <Image
                  src={asset(main.images[0])}
                  alt=""
                  fill
                  sizes="(min-width:768px) 58vw, 100vw"
                  className="object-cover transition duration-700 group-hover/glow:scale-105"
                />
              </div>
              <div className="p-8 md:p-10">
                <p className="font-display text-accent" dir="ltr">{num(0)}</p>
                <h3 className="mt-2 text-2xl md:text-3xl">{t(main.title, locale)}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{t(main.summary, locale)}</p>
                <Button href={`/${locale}/#packages`} variant="dark" className="mt-8">
                  {ar ? "شوف الباقات" : "See packages"} <Arrow width={16} height={16} />
                </Button>
              </div>
            </GlowCard>
          </Reveal>

          {rest.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.title.en} delay={0.1 * (i + 1)} className="md:col-span-5">
                <GlowCard className={`${tile} p-6 md:p-8`}>
                  <div className="flex items-start gap-5">
                    <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent/15 text-ink">
                      <Icon />
                    </span>
                    <div>
                      <p className="font-display text-sm text-accent" dir="ltr">{num(i + 1)}</p>
                      <h3 className="mt-1 text-xl">{t(s.title, locale)}</h3>
                      <p className="mt-2 leading-relaxed text-muted">{t(s.summary, locale)}</p>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
