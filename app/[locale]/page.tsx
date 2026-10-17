import AppDownload from "@/components/sections/AppDownload";
import Collected from "@/components/sections/Collected";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Packages from "@/components/sections/Packages";
import Sponsors from "@/components/sections/Sponsors";
import Testimonials from "@/components/sections/Testimonials";
import type { Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return (
    <>
      <Hero locale={locale} />
      <Packages locale={locale} index={1} />
      <Collected locale={locale} index={2} />
      <LogoMarquee
        locale={locale}
        index={3}
        source="partners"
        eyebrow={ar ? "شركاؤنا" : "Partners"}
        title={ar ? "شركاء في رحلة الاستدامة" : "Partners in sustainability"}
      />
      <LogoMarquee
        locale={locale}
        index={4}
        source="clients"
        eyebrow={ar ? "عملاؤنا" : "Clients"}
        title={ar ? "مؤسسات بتثق في بيكيا باي" : "Trusted by organizations"}
      />
      <Testimonials locale={locale} index={5} />
      <Sponsors locale={locale} />
      <AppDownload locale={locale} index={6} />
    </>
  );
}
