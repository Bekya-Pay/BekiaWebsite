export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const dir = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

/** Bilingual string, picked at render time with `t()`. */
export type L = { ar: string; en: string };
export const t = (value: L, locale: Locale) => value[locale];

export const ui = {
  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    aboutUs: { ar: "من نحن", en: "About us" },
    ourServices: { ar: "خدماتنا", en: "Services" },
    impact: { ar: "أثرنا", en: "Impact" },
    partners: { ar: "شركاؤنا", en: "Partners" },
    contact: { ar: "تواصل معنا", en: "Contact us" },
    services: { ar: "الخدمات", en: "Services" },
    about: { ar: "الرؤية و الرسالة", en: "Vision & Mission" },
    team: { ar: "الفريق", en: "Team" },
    events: { ar: "الفعاليات", en: "Events" },
    faq: { ar: "الأسئلة الشائعة", en: "FAQ" },
    sustainability: { ar: "الاستدامة", en: "Sustainability" },
    terms: { ar: "الشروط و الأحكام", en: "Terms & Conditions" },
    visionMission: { ar: "الرؤية والرسالة", en: "Vision & Mission" },
    whereWeAre: { ar: "أين نحن", en: "Where we are" },
    customerService: { ar: "خدمة العملاء", en: "Customer service" },
    jobs: { ar: "وظائف", en: "Jobs" },
    investors: { ar: "المستثمرون", en: "Investors" },
    company: { ar: "الشركة", en: "Company" },
  },
  language: { ar: "اللغة", en: "Language" },
  langSwitch: { ar: "English", en: "العربية" },
  download: { ar: "حمّل التطبيق", en: "Download the app" },
  explore: { ar: "اكتشف خدماتنا", en: "Explore our services" },
  readMore: { ar: "اعرف أكثر", en: "Learn more" },
  address: { ar: "العنوان", en: "Address" },
  contact: { ar: "تواصل معنا", en: "Contact us" },
  followUs: { ar: "تابعنا", en: "Follow us" },
  rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
} satisfies Record<string, L | Record<string, L>>;
