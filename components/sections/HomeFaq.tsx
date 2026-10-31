import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { Arrow } from "@/components/ui/icons";
import { type Locale, t, ui } from "@/lib/i18n";
import FaqList from "./FaqList";

export default function HomeFaq({ locale, index }: { locale: Locale; index: number }) {
  const ar = locale === "ar";
  return (
    <section id="faq" className="scroll-mt-20 mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-12 md:px-8 md:py-16">
      <div className="md:col-span-5">
        <SectionHeader index={index} eyebrow={t(ui.nav.faq, locale)} title={ar ? "عندك سؤال؟" : "Got a question?"} />
        <Button href={`/${locale}/faq/`} variant="dark" className="-mt-2">
          {ar ? "كل الأسئلة" : "All questions"} <Arrow width={16} height={16} />
        </Button>
      </div>
      <div className="md:col-span-7">
        <FaqList locale={locale} limit={6} />
      </div>
    </section>
  );
}
