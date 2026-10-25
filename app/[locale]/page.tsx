import AppDownload from "@/components/sections/AppDownload";
import Collected from "@/components/sections/Collected";
import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeFaq from "@/components/sections/HomeFaq";
import HomeImpact from "@/components/sections/HomeImpact";
import HomeServices from "@/components/sections/HomeServices";
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
      <HomeAbout locale={locale} index={1} />
      <HomeServices locale={locale} index={2} />
      <Packages locale={locale} index={3} />
      <Collected locale={locale} index={4} />
      <HomeImpact locale={locale} index={5} />
      <LogoMarquee
        locale={locale}
        index={6}
        source="partners"
        eyebrow={ar ? "شركاؤنا" : "Partners"}
        title={ar ? "شركاء في رحلة الاستدامة" : "Partners in sustainability"}
      />
      <LogoMarquee
        locale={locale}
        index={7}
        source="clients"
        eyebrow={ar ? "عملاؤنا" : "Clients"}
        title={ar ? "مؤسسات بتثق في بيكيا باي" : "Trusted by organizations"}
      />
      <Testimonials locale={locale} index={8} />
      <Sponsors locale={locale} />
      <HomeFaq locale={locale} index={9} />
      <AppDownload locale={locale} index={10} />
    </>
  );
}
