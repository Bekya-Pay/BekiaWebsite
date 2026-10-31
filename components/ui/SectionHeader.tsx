import Reveal from "./Reveal";

/** Numbered section heading, e.g. "01 — Our packages". */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  body,
  tone = "light",
}: {
  index?: number;
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-white/60" : "text-muted";
  return (
    <Reveal className="mb-8 max-w-3xl md:mb-10">
      {(index !== undefined || eyebrow) && (
        <p className={`mb-4 flex items-center gap-3 text-sm font-medium tracking-wide ${muted}`}>
          {index !== undefined && <span className="text-accent">{String(index).padStart(2, "0")}</span>}
          <span className="h-px w-10 bg-current opacity-40" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight md:text-5xl">{title}</h2>
      {body && <p className={`mt-5 text-lg leading-relaxed ${muted}`}>{body}</p>}
    </Reveal>
  );
}
