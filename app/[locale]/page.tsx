import AppDownload from "@/components/sections/AppDownload";
import Clients from "@/components/sections/Clients";
import Coverage from "@/components/sections/Coverage";
import Collected from "@/components/sections/Collected";
import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeFaq from "@/components/sections/HomeFaq";
import HomeImpact from "@/components/sections/HomeImpact";
import HowItWorks from "@/components/sections/HowItWorks";
import HomeServices from "@/components/sections/HomeServices";
import LogoMarquee from "@/components/sections/LogoMarquee";
import NewsBar from "@/components/sections/NewsBar";
import News from "@/components/sections/News";
import Packages from "@/components/sections/Packages";
import StatsBand from "@/components/sections/StatsBand";
import Sponsors from "@/components/sections/Sponsors";
import Testimonials from "@/components/sections/Testimonials";
import type { Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const ar = locale === "ar";
  return (
    <>
      <Hero locale={locale} />
      <NewsBar locale={locale} />
      <StatsBand locale={locale} />
      <Clients locale={locale} />
      <HomeAbout locale={locale} index={1} />
      <HomeServices locale={locale} index={2} />
      <Coverage locale={locale} index={3} />
      <HowItWorks locale={locale} index={4} />
      <Packages locale={locale} index={5} />
      <Collected locale={locale} index={6} />
      <Testimonials locale={locale} index={7} />
      <HomeImpact locale={locale} index={8} />
      <LogoMarquee
        locale={locale}
        index={9}
        source="partners"
        eyebrow={ar ? "شركاؤنا ورعاتنا" : "Partners & sponsors"}
        title={ar ? "شركاء في رحلة الاستدامة" : "Partners in sustainability"}
      >
        <Sponsors locale={locale} />
      </LogoMarquee>
      <News locale={locale} index={10} />
      <HomeFaq locale={locale} index={11} />
      <AppDownload locale={locale} index={12} />
    </>
  );
}
