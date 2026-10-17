import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Plus } from "@/components/ui/icons";
import { faq } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: t(ui.nav.faq, locale) };
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <PageHero eyebrow={t(ui.nav.faq, locale)} title={locale === "ar" ? "عندك سؤال؟" : "Got a question?"} />
      <section className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <div className="divide-y divide-line border-y border-line">
          {faq.map((item, i) => (
            <details key={i} className="group py-6" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="me-3 text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {t(item.q, locale)}
                </span>
                <Plus className="shrink-0 transition group-open:rotate-45" />
              </summary>
              <div className="mt-4 space-y-3 leading-relaxed text-muted">
                {item.a.map((p, j) => (
                  <p key={j} className="whitespace-pre-line">{t(p, locale)}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
