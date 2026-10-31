"use client";

import Reveal from "@/components/ui/Reveal";
import { getClients, type Client } from "@/lib/api";
import { fallbackPartners } from "@/lib/fallback";
import { type Locale } from "@/lib/i18n";
import { asset } from "@/lib/site";
import { useRemote } from "@/lib/useRemote";

const fade = "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]";

/** Two counter-scrolling rows of client logo pills, placed right under the hero. */
export default function Clients({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const remote = useRemote(getClients);
  // TEMP: preview with partner logos in dev until the clients API is live. Remove before release.
  const items =
    remote && !remote.length && process.env.NODE_ENV === "development" ? (fallbackPartners as Client[]) : remote;

  // Nothing from the API: leave the section out.
  if (items && !items.length) return null;

  // Enough logos to split across both rows; otherwise both rows show everything.
  const half = items ? Math.ceil(items.length / 2) : 0;
  const rows: Client[][] = !items
    ? []
    : items.length >= 8
      ? [items.slice(0, half), items.slice(half)]
      : [items, [...items].reverse()];

  return (
    <section id="clients" className="relative isolate scroll-mt-20 overflow-hidden py-12 md:py-16">
      {/* Glow fades out top and bottom so the section blends into its neighbours. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_85%,transparent)]">
        <div className="absolute left-1/2 top-[58%] h-[30rem] w-[min(72rem,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />
      </div>

      <Reveal className="mx-auto mb-10 max-w-7xl px-4 text-center md:mb-14 md:px-8">
        <p className="mb-3 text-sm font-medium tracking-wide text-muted">{ar ? "عملاؤنا" : "Clients"}</p>
        <h2 className="text-3xl leading-tight md:text-4xl">
          {items
            ? ar
              ? `أكثر من ${items.length} مؤسسة بتثق في بيكيا باي`
              : `Trusted by ${items.length}+ organizations`
            : ar
              ? "مؤسسات بتثق في بيكيا باي"
              : "Trusted by organizations"}
        </h2>
      </Reveal>

      <div className={`flex flex-col gap-4 py-3 md:gap-5 ${fade}`}>
        {items === null
          ? [0, 1].map((r) => (
              <div key={r} className="flex gap-4 px-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="h-16 w-44 shrink-0 animate-pulse rounded-full bg-line md:h-20" />
                ))}
              </div>
            ))
          : rows.map((row, r) => (
              <ul
                key={r}
                className={`flex w-max gap-4 hover:[animation-play-state:paused] md:gap-5 ${
                  r === 0
                    ? ar ? "animate-marquee-rtl" : "animate-marquee"
                    : `[animation-direction:reverse] ${ar ? "animate-marquee-rtl-slow" : "animate-marquee-slow"}`
                }`}
              >
                {/* Rendered twice so the -50% translate loops seamlessly. */}
                {[...row, ...row].map((p, i) => (
                  <ClientPill key={`${p.id}-${i}`} client={p} locale={locale} hidden={i >= row.length} />
                ))}
              </ul>
            ))}
      </div>
    </section>
  );
}

function ClientPill({ client, locale, hidden }: { client: Client; locale: Locale; hidden: boolean }) {
  const name = locale === "ar" ? client.name_ar : client.name_en;
  const body = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- remote logos from the API */}
      <img
        src={client.logo.startsWith("http") ? client.logo : asset(client.logo)}
        alt={name}
        loading="lazy"
        className="h-8 w-auto max-w-28 object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-10"
      />
      <span className="whitespace-nowrap text-sm font-medium text-muted transition group-hover:text-ink">{name}</span>
    </>
  );
  const cls = "flex size-full items-center gap-3";
  return (
    <li
      aria-hidden={hidden || undefined}
      title={name}
      className="group flex h-16 shrink-0 items-center rounded-full border border-line bg-surface/70 px-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md md:h-20"
    >
      {client.link ? (
        <a href={client.link} target="_blank" rel="noopener noreferrer" tabIndex={hidden ? -1 : undefined} className={cls}>
          {body}
        </a>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </li>
  );
}
