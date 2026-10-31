"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { steps } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";
import { asset } from "@/lib/site";

/** How long each step stays up before moving to the next, in ms. */
const STEP_MS = 4500;

/** Four steps beside the matching app screen. Steps advance on their own; clicking one picks it. */
export default function HowItWorks({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { margin: "-20%" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const auto = inView && !paused && !reduce;

  useEffect(() => {
    if (!auto) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % steps.length), STEP_MS);
    return () => clearTimeout(id);
  }, [auto, active]);

  return (
    <section id="how" className="scroll-mt-20 bg-surface pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          index={index}
          eyebrow={ar ? "إزاي تطلب" : "How to order"}
          title={ar ? "إعادة التدوير أسهل مما تتخيل" : "Recycling is easier than you think"}
          body={ar ? "أربع خطوات بس، ومندوبنا عندك لحد الباب." : "Four steps, and our rep comes right to your door."}
        />

        <div
          ref={root}
          className="grid items-center gap-10 md:grid-cols-12 md:gap-12"
          onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
          onPointerLeave={() => setPaused(false)}
        >
          <Reveal className="md:order-last md:col-span-6">
            <div className="relative mx-auto aspect-[4/7] w-full max-w-[19rem] overflow-hidden rounded-3xl border border-line bg-dark shadow-[0_16px_40px_-16px_rgb(0_0_0/0.25)] md:max-w-[22rem]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={asset(steps[active].img)}
                    alt={t(steps[active].title, locale)}
                    fill
                    sizes="22rem"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <ol className="grid gap-3 md:col-span-6">
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.title.en}>
                  <Reveal delay={0.08 * i}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={on ? "step" : undefined}
                      className={`relative flex w-full items-start gap-5 overflow-hidden rounded-2xl border p-5 text-start transition hover:bg-bg md:p-6 ${
                        on ? "border-ink/15 bg-bg shadow-[0_8px_24px_-12px_rgb(0_0_0/0.15)]" : "border-transparent"
                      }`}
                    >
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-full font-display transition ${
                          on ? "bg-accent text-accent-ink" : "bg-accent/15 text-ink"
                        }`}
                        dir="ltr"
                      >
                        {i + 1}
                      </span>
                      <span>
                        <span className="block text-lg font-semibold md:text-xl">{t(s.title, locale)}</span>
                        <span className="mt-1 block leading-relaxed text-muted">{t(s.body, locale)}</span>
                      </span>
                      {on && (
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-line" aria-hidden>
                          {/* Restarts per step via key; holds still while paused. */}
                          <motion.span
                            key={`${active}-${auto}`}
                            className="block h-full bg-accent"
                            initial={{ width: auto ? "0%" : "100%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: auto ? STEP_MS / 1000 : 0, ease: "linear" }}
                          />
                        </span>
                      )}
                    </button>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
