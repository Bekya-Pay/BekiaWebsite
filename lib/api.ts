/**
 * Public BekiaBack endpoints for the website's dynamic sections.
 * Called from the browser — the site is a static export, so there is no server to fetch on.
 */

export type Partner = {
  id: number;
  name_ar: string;
  name_en: string;
  logo: string;
  link: string | null;
};

export type Client = Partner;

export type Testimonial = {
  id: number;
  name: string;
  role_company: string | null;
  quote_ar: string;
  quote_en: string;
  photo: string | null;
  rating: number | null;
};

export type News = {
  id: number;
  title_ar: string;
  title_en: string;
  excerpt_ar: string | null;
  excerpt_en: string | null;
  image: string | null;
  link: string | null;
  published_at: string;
  /** Important news is also announced in the slim bar under the hero. */
  is_featured: boolean;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

async function getList<T>(path: string): Promise<T[]> {
  if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL is not set");
  const res = await fetch(`${API_URL}${path}`, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`${path} responded ${res.status}`);
  const body = await res.json();
  // Accept either a bare array or the backend's `{ data: [...] }` envelope.
  return Array.isArray(body) ? body : (body?.data ?? []);
}

export const getPartners = () => getList<Partner>("/partners");
export const getClients = () => getList<Client>("/clients");
export const getTestimonials = () => getList<Testimonial>("/testimonials");

// The news bar and the news section both read this list; share one request.
let news: Promise<News[]> | undefined;
const loadNews = () =>
  getList<News>("/news")
    // TEMP: preview with sample posts in dev until the news API is live. Remove before release.
    .catch(() => [] as News[])
    .then(async (list) =>
      list.length || process.env.NODE_ENV !== "development" ? list : (await import("./fallback")).devSampleNews,
    );
export const getNews = () => (news ??= loadNews().catch((e) => ((news = undefined), Promise.reject(e))));
