"use client";

import type { ReactNode } from "react";

/** Card with a soft radial glow that follows the pointer (mouse/pen only). */
export default function GlowCard({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <article
      onPointerMove={(e) => {
        if (e.pointerType === "touch") return;
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
      }}
      className={`group/glow relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100 motion-reduce:hidden"
        style={{
          background:
            "radial-gradient(22rem circle at var(--gx, 50%) var(--gy, 50%), color-mix(in oklab, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </article>
  );
}
