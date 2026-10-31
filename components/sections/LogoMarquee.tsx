"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { getClients, getPartners, type Partner } from "@/lib/api";
import { fallbackPartners } from "@/lib/fallback";
import { type Locale } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { useRemote } from "@/lib/useRemote";

const sources = {
  partners: { load: getPartners, fallback: fallbackPartners },
  clients: { load: getClients, fallback: [] as Partner[] },
};

/** Auto-scrolling strip of logos loaded from the API; partners fall back to the legacy logos. */
export default function LogoMarquee({
  locale,
  index,
  eyebrow,
  title,
  source,
  children,
}: {
  locale: Locale;
  index: number;
  eyebrow: string;
  title: string;
  source: keyof typeof sources;
  /** Extra content under the strip, e.g. the sponsors row. */
  children?: React.ReactNode;
}) {
  const { load, fallback } = sources[source];
  const remote = useRemote(load);
  const items = remote === null ? null : remote.length ? remote : fallback;

  // Nothing from the API and nothing to fall back to: leave the section out.
  if (items && !items.length) return null;

  return (
    <section id={source} className="scroll-mt-20 overflow-hidden py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader index={index} eyebrow={eyebrow} title={title} />
      </div>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {items === null ? (
          <div className="flex gap-6 px-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="h-28 w-44 shrink-0 animate-pulse rounded-2xl bg-line" />
            ))}
          </div>
        ) : (
          <ul
            className={`flex w-max gap-6 hover:[animation-play-state:paused] ${
              locale === "ar" ? "animate-marquee-rtl" : "animate-marquee"
            }`}
          >
            {/* Rendered twice so the -50% translate loops seamlessly. */}
            {[...items, ...items].map((p, i) => {
              const name = locale === "ar" ? p.name_ar : p.name_en;
              const logo = (
                // eslint-disable-next-line @next/next/no-img-element -- remote logos from the API
                <img
                  src={p.logo.startsWith("http") ? p.logo : asset(p.logo)}
                  alt={name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              );
              return (
                <li
                  key={`${p.id}-${i}`}
                  aria-hidden={i >= items.length || undefined}
                  className="grid h-28 w-44 shrink-0 place-items-center rounded-2xl border border-line bg-surface p-5 grayscale transition hover:grayscale-0"
                  title={name}
                >
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="grid size-full place-items-center">
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {children}
    </section>
  );
}
