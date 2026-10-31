import type { ReactNode } from "react";

// Fractal-noise SVG tiled as film grain over the dark background.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/** Glassy dark tile: faint top-lit gradient, hairline border, inner highlight. Pair with GlowCard. */
export const darkTile =
  "h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition duration-500 hover:-translate-y-1 hover:border-white/20 md:p-10";

/** Premium dark section: a rounded panel floating on the light page, with grain and a corner haze. */
export default function DarkPanel({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 px-3 pb-12 md:px-10 md:pb-16">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-dark py-12 text-white md:rounded-[2.5rem] md:py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: grain }} />
        <div aria-hidden className="absolute -top-24 end-[8%] -z-10 size-[32rem] rounded-full bg-accent/10 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-4 md:px-8">{children}</div>
      </div>
    </section>
  );
}
