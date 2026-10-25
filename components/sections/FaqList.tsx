import { Plus } from "@/components/ui/icons";
import { faq } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";

/** Accordion of FAQ items; `limit` shows only the first N. */
export default function FaqList({ locale, limit }: { locale: Locale; limit?: number }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faq.slice(0, limit).map((item, i) => (
        <details key={i} className="group py-6" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
            <span>
              <span className="me-3 text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              {t(item.q, locale)}
            </span>
            <Plus className="shrink-0 transition group-open:rotate-45" />
          </summary>
          <div className="mt-4 space-y-3 leading-relaxed text-muted">
            {item.a.map((p, j) => (
              <p key={j} className="whitespace-pre-line">{t(p, locale)}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
