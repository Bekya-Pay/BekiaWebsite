"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Counts a stat like "350+" or "60k+" up from zero as soon as the page loads. */
export default function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const reduce = useReducedMotion();
  const [, num, suffix] = value.match(/^(\d+)(.*)$/) ?? [, "", value];
  const target = Number(num);
  const [n, setN] = useState(reduce || !num ? target : 0);

  useEffect(() => {
    if (reduce || !num) return;
    const controls = animate(0, target, { duration: 1.6, delay, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [reduce, num, target, delay]);

  return (
    <span className="tabular-nums">
      {num ? n : ""}
      {suffix}
    </span>
  );
}
