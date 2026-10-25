import Reveal from "@/components/ui/Reveal";

/** Dark title band at the top of inner pages. */
export default function PageHero({ eyebrow, title, body }: { eyebrow?: string; title: string; body?: string }) {
  return (
    <section className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <Reveal>
          {eyebrow && (
            <p className="mb-5 flex items-center gap-3 text-sm text-white/60">
              <span className="h-px w-10 bg-accent" />
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">{title}</h1>
          {body && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{body}</p>}
        </Reveal>
      </div>
    </section>
  );
}
