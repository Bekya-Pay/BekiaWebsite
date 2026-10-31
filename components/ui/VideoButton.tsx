"use client";

import { useRef } from "react";
import { Close } from "@/components/ui/icons";

/** Pill button that opens a video in a full-screen modal; the video loads only once opened. */
export default function VideoButton({
  src,
  poster,
  label,
  closeLabel,
  className = "",
}: {
  src: string;
  poster?: string;
  label: string;
  closeLabel: string;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  const open = () => {
    dialog.current?.showModal();
    const v = video.current;
    if (!v) return;
    if (!v.src) v.src = src;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`inline-flex items-center gap-3 rounded-full py-2 pe-5 ps-2 text-sm font-semibold transition hover:-translate-y-0.5 ${className}`}
      >
        <span className="grid size-9 place-items-center rounded-full bg-current">
          {/* Play triangle, punched out in the button's background colour. */}
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden className="translate-x-px fill-accent rtl:-scale-x-100">
            <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.4-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
          </svg>
        </span>
        {label}
      </button>

      <dialog
        ref={dialog}
        onClose={() => video.current?.pause()}
        // Click on the backdrop (the dialog itself, outside the frame) closes it.
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto w-[min(92vw,64rem)] overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label={closeLabel}
          className="absolute -top-12 end-0 grid size-10 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
        >
          <Close />
        </button>
        <video ref={video} poster={poster} controls muted playsInline preload="none" className="block w-full rounded-2xl bg-black" />
      </dialog>
    </>
  );
}
