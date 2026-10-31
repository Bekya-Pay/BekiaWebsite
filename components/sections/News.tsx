"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { Arrow } from "@/components/ui/icons";
import { getNews } from "@/lib/api";
import { type Locale } from "@/lib/i18n";
import { useRemote } from "@/lib/useRemote";

/** The three newest news posts. Left out when the API has none. */
export default function News({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  const items = useRemote(getNews);
  if (items && !items.length) return null;

  const date = new Intl.DateTimeFormat(ar ? "ar-EG" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <section id="news" className="scroll-mt-20 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader index={index} eyebrow={ar ? "الأخبار" : "News"} title={ar ? "آخر أخبار بيكيا" : "Latest from Bekya"} />

        <div className="grid gap-6 md:grid-cols-3">
          {items === null &&
            Array.from({ length: 3 }, (_, i) => <div key={i} className="h-96 animate-pulse rounded-3xl bg-line" />)}

          {items?.slice(0, 3).map((x) => (
            <article key={x.id} className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg">
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                {x.image && (
                  // eslint-disable-next-line @next/next/no-img-element -- remote image from the API
                  <img src={x.image} alt="" loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <time dateTime={x.published_at} className="text-sm text-muted">
                  {date.format(new Date(x.published_at))}
                </time>
                <h3 className="mt-3 text-xl leading-snug">{ar ? x.title_ar : x.title_en}</h3>
                {(ar ? x.excerpt_ar : x.excerpt_en) && (
                  <p className="mt-3 line-clamp-3 leading-relaxed text-muted">{ar ? x.excerpt_ar : x.excerpt_en}</p>
                )}
                {x.link && (
                  // Stretched link: the whole card is clickable.
                  <a href={x.link} target="_blank" rel="noopener" className="mt-auto flex items-center gap-2 pt-6 font-medium after:absolute after:inset-0">
                    {ar ? "اقرأ المزيد" : "Read more"}
                    <Arrow className="size-4 transition group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
