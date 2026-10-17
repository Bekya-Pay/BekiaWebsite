import type { L } from "./i18n";

export const site = {
  name: { ar: "بيكيا باي", en: "BekyaPay" } as L,
  url: "https://bekyapay.com",
  email: "info@bekyapay.com",
  phone: "+201229427013",
  phoneLabel: "+20 122 942 7013",
  whatsapp: "https://wa.me/201229427013",
  address: {
    ar: "398 برج الفنار، ش أبو قير الرئيسي، مصطفى كامل، سيدي جابر، الإسكندرية",
    en: "398 El Fanar Tower, Abu Qir Main Street, Mostafa Kamel, Sidi Gaber, Alexandria",
  } as L,
  social: {
    facebook: "https://www.facebook.com/share/8JuvCKVahsNdQF4r/?mibextid=qi2Omg",
    instagram: "https://www.instagram.com/bekyapay",
    linkedin: "https://www.linkedin.com/company/bekyapay/",
  },
  appStore:
    "https://apps.apple.com/eg/app/bekya-pay-%D8%A8%D9%8A%D9%83%D9%8A%D8%A7-%D8%A8%D8%A7%D9%8A/id6740923291",
  playStore: "https://play.google.com/store/apps/details?id=com.donedl.bekyapay&pcampaignid=web_share",
};

/** Paths relative to the locale root, e.g. `/ar` + path. */
export const navLinks = [
  { key: "services", href: "/services/" },
  { key: "about", href: "/about/" },
  { key: "team", href: "/team/" },
  { key: "events", href: "/events/" },
  { key: "sustainability", href: "/sustainability/" },
  { key: "faq", href: "/faq/" },
] as const;

/** URL-safe path for files in public/ whose names contain spaces. */
export const asset = (path: string) => encodeURI(path);
