import type { Partner } from "./api";

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
