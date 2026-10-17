import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { terms } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: t(ui.nav.terms, locale) };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <PageHero title={t(ui.nav.terms, locale)} />
      <article className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        {terms.map((s, i) =>
          s.tag === "h1" ? (
            <h2 key={i} className="mt-14 text-2xl font-semibold first:mt-0 md:text-3xl">{t(s.title, locale)}</h2>
          ) : (
            <section key={i} className="mt-8">
              <h3 className="text-lg font-semibold">{t(s.title, locale)}</h3>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mt-3 whitespace-pre-line leading-relaxed text-muted">{t(p, locale)}</p>
              ))}
            </section>
          ),
        )}
      </article>
    </>
  );
}
