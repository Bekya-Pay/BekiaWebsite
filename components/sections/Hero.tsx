import Image, { getImageProps } from "next/image";
import Reveal from "@/components/ui/Reveal";
import { hero } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function Hero({ locale }: { locale: Locale }) {
  // Art direction: a portrait crop for phones, the wide image from md up.
  const common = { alt: "", fill: true, priority: true, sizes: "100vw" };
  const { props: { src: mobile } } = getImageProps({ ...common, src: `/images/Hero-${locale}-mobile.jpg` });
  const { props: desktop } = getImageProps({ ...common, src: `/images/Hero-${locale}.jpg` });
  return (
    <section id="home" className="relative isolate flex min-h-[85dvh] flex-col justify-end overflow-hidden bg-dark text-white">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobile} />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is in `desktop` props */}
        <img {...desktop} className="-z-10 object-cover" />
      </picture>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 pb-8 pt-32 md:px-8">
        <Reveal delay={0.1} className="flex flex-1 flex-col justify-center">
          <h1 className="max-w-3xl whitespace-pre-line text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            {t(hero.title, locale)}
          </h1>
        </Reveal>
        <Reveal delay={0.3} className="flex flex-wrap gap-3 self-end">
          <a href={site.appStore} target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-0.5">
            <Image src="/images/GetOnAppStore.png" alt="Download on the App Store" width={150} height={50} />
          </a>
          <a href={site.playStore} target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-0.5">
            <Image src="/images/GetOnGooglePlay.png" alt="Get it on Google Play" width={150} height={50} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
