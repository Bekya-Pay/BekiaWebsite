"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Pin } from "@/components/ui/icons";
import { coverage } from "@/lib/content";
import { damanhour, governorates, mapViewBox } from "@/lib/egypt-map";
import { type Locale, t } from "@/lib/i18n";

const active = new Set(coverage.active);
// Crop of the Nile Delta and Suez Canal, in map units.
const DELTA_BOX = "355 0 300 190";
const inDelta = (g: { cx: number; cy: number }) => g.cx > 355 && g.cx < 655 && g.cy < 190;

export default function Coverage({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  const [hover, setHover] = useState<string | null>(null);
  const hovered = governorates.find((g) => g.id === hover);
  const live = governorates.filter((g) => active.has(g.id));

  return (
    <section id="coverage" className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeader index={index} eyebrow={ar ? "تغطيتنا" : "Coverage"} title={ar ? "إحنا فين؟" : "Where are we?"} />
          <Reveal>
            <p className="-mt-6 text-base text-muted md:-mt-10">{t(coverage.note, locale)}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {live.map((g) => (
                <li key={g.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setHover(g.id)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(g.id)}
                    onBlur={() => setHover(null)}
                    className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 font-medium transition hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    <Pin width={16} height={16} />
                    {g.id === "beheira" ? (ar ? "دمنهور" : "Damanhour") : ar ? g.ar : g.en}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto w-full max-w-[600px]">
          <MapView box={mapViewBox} hover={hover} setHover={setHover} tip={!!hovered && !inDelta(hovered)} ar={ar} label={ar ? "خريطة مصر" : "Map of Egypt"} />
          {/* Zoomed Delta inset, over the empty Western Desert. */}
          <div className="absolute bottom-0 left-0 w-[58%] rounded-2xl border border-line bg-surface/95 p-2 shadow-lg backdrop-blur">
            <p className="px-2 pt-1 text-xs font-medium text-muted">{ar ? "الدلتا والقناة" : "Delta & Canal"}</p>
            <MapView box={DELTA_BOX} zoom={3.6} hover={hover} setHover={setHover} tip={!!hovered && inDelta(hovered)} ar={ar} label={ar ? "خريطة الدلتا" : "Delta map"} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MapView({
  box,
  zoom = 1,
  hover,
  setHover,
  tip,
  ar,
  label,
}: {
  box: string;
  zoom?: number;
  hover: string | null;
  setHover: (id: string | null) => void;
  tip: boolean;
  ar: boolean;
  label: string;
}) {
  const reduce = useReducedMotion();
  const [x0, y0, w, h] = box.split(" ").map(Number);
  const hovered = governorates.find((g) => g.id === hover);
  const live = governorates.filter((g) => active.has(g.id));
  return (
    <div className="relative">
      <svg viewBox={box} className="h-auto w-full overflow-hidden" role="img" aria-label={label}>
        {governorates.map((g) => {
          const on = active.has(g.id);
          return (
            <motion.path
              key={g.id}
              d={g.d}
              onMouseEnter={() => setHover(g.id)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setHover(hover === g.id ? null : g.id)}
              className={`cursor-pointer stroke-bg transition-colors ${on ? "fill-accent" : "fill-line hover:fill-muted/40"}`}
              strokeWidth={1.5 / zoom}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={reduce ? undefined : { scale: hover === g.id ? 1.08 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          );
        })}
        {/* Repaint the hovered shape on top so its lift isn't hidden by neighbours. */}
        {hovered && (
          <motion.path
            key={`top-${hovered.id}`}
            d={hovered.d}
            pointerEvents="none"
            className={`stroke-ink ${active.has(hovered.id) ? "fill-accent" : "fill-muted/50"}`}
            strokeWidth={2 / zoom}
            style={{ transformBox: "fill-box", transformOrigin: "center", filter: "drop-shadow(0 6px 10px rgb(0 0 0 / 0.25))" }}
            initial={{ scale: 1 }}
            animate={{ scale: reduce ? 1 : 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}
        {live.map((g) => {
          const p = g.id === "beheira" ? damanhour : { x: g.cx, y: g.cy };
          return (
            <g key={g.id} pointerEvents="none">
              {!reduce && (
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={6 / zoom}
                  className="fill-ink/40"
                  animate={{ r: [6 / zoom, 18 / zoom], opacity: [0.6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              <circle cx={p.x} cy={p.y} r={6 / zoom} className="fill-ink stroke-accent" strokeWidth={2 / zoom} />
            </g>
          );
        })}
      </svg>

      <AnimatePresence>
        {tip && hovered && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+14px)] whitespace-nowrap rounded-xl bg-dark px-3 py-2 text-sm text-white shadow-lg"
            style={{ left: `${((hovered.cx - x0) / w) * 100}%`, top: `${((hovered.cy - y0) / h) * 100}%` }}
          >
            <span className="font-semibold">{ar ? hovered.ar : hovered.en}</span>
            <span className={`ms-2 ${active.has(hovered.id) ? "text-accent" : "text-white/60"}`}>
              {active.has(hovered.id) ? (ar ? "متاح الآن" : "Live now") : ar ? "قريبًا" : "Coming soon"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
