"use client";

import Image from "next/image";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Arrow } from "@/components/ui/icons";
import { getTestimonials } from "@/lib/api";
import { fallbackTestimonialImages } from "@/lib/fallback";
import { type Locale } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { useRemote } from "@/lib/useRemote";

const card = "w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[38%]";

export default function Testimonials({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  const items = useRemote(getTestimonials);
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    // In RTL, scrollLeft runs negative, so flip the direction.
    el.scrollBy({ left: dir * (ar ? -1 : 1) * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            index={index}
            eyebrow={ar ? "آراء عملائنا" : "Testimonials"}
            title={ar ? "عملاؤنا بيقولوا إيه" : "What our clients say"}
          />
          <div className="mb-8 hidden gap-2 md:mb-10 md:flex">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="grid size-12 place-items-center rounded-full border border-line transition hover:bg-ink hover:text-white">
              <Arrow className="rotate-180 rtl:rotate-0" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="grid size-12 place-items-center rounded-full border border-line transition hover:bg-ink hover:text-white">
              <Arrow />
            </button>
          </div>
        </div>

        <div ref={track} className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none]">
          {items === null &&
            Array.from({ length: 3 }, (_, i) => <div key={i} className={`${card} h-72 animate-pulse rounded-3xl bg-line`} />)}

          {items?.length
            ? items.map((x) => (
                <figure key={x.id} className={`${card} flex flex-col rounded-3xl border border-line bg-bg p-8`}>
                  {x.rating ? (
                    <div className="mb-4 text-accent" aria-label={`${x.rating}/5`}>
                      {"★".repeat(Math.round(x.rating))}
                      <span className="text-line">{"★".repeat(5 - Math.round(x.rating))}</span>
                    </div>
                  ) : null}
                  <blockquote className="flex-1 text-lg leading-relaxed">“{ar ? x.quote_ar : x.quote_en}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    {x.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element -- remote photo from the API
                      <img src={x.photo} alt="" className="size-12 rounded-full object-cover" loading="lazy" />
                    ) : (
                      <span className="grid size-12 place-items-center rounded-full bg-accent font-semibold text-accent-ink">
                        {x.name.charAt(0)}
                      </span>
                    )}
                    <div>
                      <div className="font-semibold">{x.name}</div>
                      {x.role_company && <div className="text-sm text-muted">{x.role_company}</div>}
                    </div>
                  </figcaption>
                </figure>
              ))
            : items &&
              fallbackTestimonialImages.map((src) => (
                <div key={src} className={`${card} relative max-w-sm aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-bg`}>
                  <Image src={asset(src)} alt="" fill sizes="(min-width:1024px) 38vw, 85vw" className="object-contain" />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
