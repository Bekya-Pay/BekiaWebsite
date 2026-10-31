import type { News, Partner } from "./api";

/** Shown when the API is unreachable, so the section never renders empty. Mirrors the legacy site. */
const legacyPartners: [string, string][] = [
  ["/images/Partner 1.png", "جمعية رجال أعمال اسكندرية"],
  ["/images/Partner 2.png", "Ecole Girard"],
  ["/images/Partner 3.png", "OII"],
  ["/images/Partner 4.jpeg", "جامعة الإسكندرية"],
  ["/images/Partner 5.jpg", "Khan El Hussein Market"],
  ["/images/Partner 6.jpg", "كلية طب الإسكندرية"],
  ["/images/Partner 7.jpeg", "Lycée Molière"],
  ["/images/Partner 8.jpeg", "Partner"],
  ["/images/Partner 9.jpeg", "IBSA"],
  ["/images/Partner 10.jpeg", "Global Shapers Community Alex"],
  ["/images/Partner 11.jpeg", "EZR3LY"],
  ["/images/Partner 12.jpeg", "Earthwise"],
  ["/images/Partner 13.jpg", "كلية الصيدلة"],
  ["/images/Partner 14.jpeg", "Regency Hotel Alex"],
  ["/images/Partner 15.jpeg", "Harvard International School"],
  ["/images/New Partner 1.jpg", "Supeco"],
  ["/images/New Partner 2.png", "صيدلية الدواء"],
  ["/images/New Partner 3.jpg", "صيدلية محفوظ"],
  ["/images/New Partner 5.png", "Taymour English School"],
  ["/images/New Partner 6.png", "IGCSE"],
  ["/images/New Partner 7.png", "ALS"],
  ["/images/New Partner 8.png", "ASA"],
];

export const fallbackPartners: Partner[] = legacyPartners.map(([logo, name], i) => ({
  id: -(i + 1),
  name_ar: name,
  name_en: name,
  logo,
  link: null,
}));

/** Legacy testimonials were screenshots of reviews. */
export const fallbackTestimonialImages = [1, 2, 3, 4].map((n) => `/images/Testimonial ${n}.png`);

/** TEMP: sample posts to preview the news bar and section in dev until the news API is live. */
export const devSampleNews: News[] = [
  {
    id: 1,
    title_ar: "بيكيا تبدأ خدمة الجمع في القاهرة",
    title_en: "Bekya starts collecting in Cairo",
    excerpt_ar: "بعد الإسكندرية، فريقنا بقى بيجمع المخلفات القابلة للتدوير من البيوت في القاهرة. اطلب أول زيارة من التطبيق.",
    excerpt_en: "After Alexandria, our team now picks up recyclables from homes in Cairo. Book your first visit from the app.",
    image: "/images/Home1.jpg",
    link: "#",
    published_at: "2026-10-20",
    is_featured: true,
  },
  {
    id: 2,
    title_ar: "بيكيا ضمن برنامج Green Growth Accelerator",
    title_en: "Bekya joins the Green Growth Accelerator",
    excerpt_ar: "اتختارنا ضمن الشركات الناشئة في البرنامج لدعم التوسع في خدمات إعادة التدوير.",
    excerpt_en: "We were selected for the programme's startup cohort to support expanding our recycling services.",
    image: "/images/Green_Growth_Accelerator.jpg",
    link: "#",
    published_at: "2026-09-12",
    is_featured: false,
  },
  {
    id: 3,
    title_ar: "ندوات توعية في مدارس الإسكندرية",
    title_en: "Awareness sessions in Alexandria schools",
    excerpt_ar: "قدمنا ورش عن فرز المخلفات وإعادة التدوير لطلاب المدارس على مدار الشهر.",
    excerpt_en: "We ran workshops on sorting and recycling waste for school students throughout the month.",
    image: "/images/Eco_Champions_Program.jpg",
    link: "#",
    published_at: "2026-08-03",
    is_featured: false,
  },
];
