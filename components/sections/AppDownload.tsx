import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import VideoButton from "@/components/ui/VideoButton";
import { type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function AppDownload({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  return (
    <section id="download" className="scroll-mt-20 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-accent px-6 pt-14 text-accent-ink md:grid-cols-2 md:px-14 md:pt-0">
        <Reveal className="md:py-20">
          <p className="mb-4 text-sm font-semibold opacity-70">
            {String(index).padStart(2, "0")} — {ar ? "التطبيق" : "The app"}
          </p>
          <h2 className="text-4xl leading-tight md:text-6xl">
            {ar ? "حمّل بيكيا باي دلوقتي" : "Download BekyaPay now"}
          </h2>
          <p className="mt-5 max-w-md text-lg opacity-80">
            {ar
              ? "احجز زيارة، تابع كمياتك، واستلم فلوسك على محفظتك — كل ده من موبايلك."
              : "Book a pickup, track your quantities and get paid to your wallet — all from your phone."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.appStore} target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-0.5">
              <Image src="/images/GetOnAppStore.png" alt="Download on the App Store" width={180} height={60} />
            </a>
            <a href={site.playStore} target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-0.5">
              <Image src="/images/GetOnGooglePlay.png" alt="Get it on Google Play" width={180} height={60} />
            </a>
          </div>
          <VideoButton
            src="/videos/app-demo.mp4"
            poster="/videos/app-demo.jpg"
            label={ar ? "شوف التطبيق شغال إزاي" : "Watch how the app works"}
            closeLabel={ar ? "إغلاق" : "Close"}
            className="mt-6 bg-accent-ink/10 hover:bg-accent-ink/15"
          />
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-[16/10] self-end md:aspect-[4/3]">
          <Image
            src="/images/Bekya.png"
            alt="BekyaPay app"
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-contain object-bottom"
          />
        </Reveal>
      </div>
    </section>
  );
}
