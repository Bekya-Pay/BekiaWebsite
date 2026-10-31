"use client";

import { Arrow } from "@/components/ui/icons";
import { getNews } from "@/lib/api";
import { type Locale } from "@/lib/i18n";
import { useRemote } from "@/lib/useRemote";

/** One-line announcement under the hero for the newest important news. Hidden when there is none. */
export default function NewsBar({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const items = useRemote(getNews);
  const item = items?.find((x) => x.is_featured);
  if (!item) return null;

  const title = ar ? item.title_ar : item.title_en;
  const content = (
    <>
      <span className="shrink-0 rounded-full bg-accent-ink px-2.5 py-0.5 text-xs font-semibold text-accent">
        {ar ? "جديد" : "New"}
      </span>
      <span className="truncate">{title}</span>
      {item.link && <Arrow className="size-4 shrink-0 rtl:-scale-x-100" />}
    </>
  );
  const row = "mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-3 text-sm font-medium md:px-8";

  return (
    <aside aria-label={ar ? "آخر الأخبار" : "Latest news"} className="bg-accent text-accent-ink">
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener" className={`${row} hover:underline`}>
          {content}
        </a>
      ) : (
        <div className={row}>{content}</div>
      )}
    </aside>
  );
}
