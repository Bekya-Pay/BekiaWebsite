"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { collected } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";

/** Lid colour per bin; the bodies share the site's dark ink. */
const lid: Record<(typeof collected)[number]["key"], string> = {
  plastic: "#4F8EF7",
  paper: "#3FA66B",
  metal: "#9AA3AE",
  bulky: "var(--accent)",
};

function Bin({ color, open, reduce }: { color: string; open: boolean; reduce: boolean | null }) {
  return (
    <svg viewBox="0 0 120 140" className="w-20 overflow-visible md:w-28" aria-hidden>
      {/* Lid hinges on its start edge and swings open when the bin is picked. */}
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "0% 100%" }}
        animate={open && !reduce ? { rotate: -24, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <path d="M48 20v-6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6" fill="none" stroke={color} strokeWidth="5" />
        <rect x="8" y="20" width="104" height="14" rx="6" fill={color} />
      </motion.g>
      <path d="M17 38h86l-7.4 92a7 7 0 0 1-7 6.5H31.4a7 7 0 0 1-7-6.5Z" className="fill-dark" />
      <path d="M42 54v62M60 54v62M78 54v62" stroke="white" strokeOpacity="0.12" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/** Four sorting bins; picking one opens its lid and pops out what goes in it. */
export default function Collected({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const bin = collected[active];

  return (
    <section id="collected" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <SectionHeader
        index={index}
        eyebrow={ar ? "ماذا نجمع" : "What we collect"}
        title={ar ? "حاجات بتجمعها بيكيا باي" : "Things we collect"}
        body={ar ? "افرز مخلفاتك في الأربع صناديق دول، واحنا نستلمها منك." : "Sort your recyclables into these four bins, and we'll pick them up."}
      />

      <div className="rounded-3xl border border-line bg-surface px-4 pt-6 pb-6 md:px-10 md:pt-8 md:pb-8">
        {/* What goes in the open bin. */}
        <div className="flex min-h-28 flex-col items-center justify-end md:min-h-16" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.ul
              key={bin.key}
              className="flex flex-wrap justify-center gap-2 md:gap-3"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.05 } } }}
            >
              {bin.items.map((item) => (
                <motion.li
                  key={item.en}
                  variants={{
                    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.85 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 22 } },
                  }}
                  className="flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 text-sm font-medium shadow-[0_6px_16px_-10px_rgb(0_0_0/0.3)] md:text-base"
                >
                  <span className="size-2 rounded-full" style={{ background: lid[bin.key] }} />
                  {t(item, locale)}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2 md:mt-8 md:gap-6">
          {collected.map((b, i) => {
            const on = i === active;
            return (
              <button
                key={b.key}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(i)}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                className={`flex flex-col items-center gap-3 rounded-2xl px-1 pt-4 pb-3 transition ${on ? "bg-bg shadow-[0_8px_24px_-12px_rgb(0_0_0/0.2)]" : "hover:bg-bg/60"}`}
              >
                <Bin color={lid[b.key]} open={on} reduce={reduce} />
                <span className={`text-center text-xs font-semibold md:text-base ${on ? "" : "text-muted"}`}>
                  {t(b.name, locale)}
                  <span className="ms-1 font-normal text-muted" dir="ltr">({b.items.length})</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
