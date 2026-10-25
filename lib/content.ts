import type { L } from "./i18n";
import eventsRaw from "@/content/events.json";
import faqRaw from "@/content/faq.json";
import teamRaw from "@/content/team.json";
import termsRaw from "@/content/terms.json";

/* ---------- Home ---------- */

export const hero = {
  eyebrow: { ar: "إدارة مخلفات ذكية في مصر", en: "Smart waste management in Egypt" },
  title: { ar: "حوّل مخلفاتك\nإلى قيمة", en: "Turn your waste into value" },
  body: {
    ar: "بيكيا باي شركة ناشئة تعتمد على التكنولوجيا لتطوير إدارة المخلفات في مصر. نربط الأفراد والشركات بخدمات إعادة تدوير فعالة، لنقلل مخلفات المكبات ونصنع بيئة أنظف.",
    en: "BekyaPay is a tech-driven startup transforming waste management in Egypt. We connect homes and businesses to efficient recycling services to cut landfill waste and build a cleaner environment.",
  },
};

export const stats: { value: string; label: L }[] = [
  { value: "50+", label: { ar: "موظف", en: "Employees" } },
  { value: "350+", label: { ar: "طن مخلفات تم جمعها", en: "Tons of waste collected" } },
  { value: "20+", label: { ar: "شريك", en: "Partners" } },
  { value: "60k+", label: { ar: "منزل تم الوصول إليه", en: "Houses reached" } },
  { value: "15+", label: { ar: "ندوة توعوية", en: "Awareness seminars" } },
  { value: "30k", label: { ar: "طالب", en: "Students" } },
  { value: "500", label: { ar: "طن مخلفات تم تدويرها", en: "Tons of waste recycled" } },
  { value: "400", label: { ar: "طن CO2 تم تقليله", en: "Tons of CO2 reduced" } },
  { value: "250", label: { ar: "جامع غير رسمي", en: "Informal collectors" } },
  { value: "50", label: { ar: "مخزن", en: "Warehouses" } },
  { value: "5", label: { ar: "جامعات", en: "Universities" } },
  { value: "2", label: { ar: "مدينتان", en: "Cities" } },
];

/** Four headline numbers for the hero strip and About page. */
export const heroStats = [stats[1], stats[3], stats[2], stats[5]];

export const packages: { name: L; icon: string; features: L[] }[] = [
  {
    name: { ar: "نظام تحويش", en: "Tahweesh" },
    icon: "/images/wallet 1.svg",
    features: [
      { ar: "يتم استلام طلبك", en: "Your order is received" },
      { ar: "يتم وزن الكمية في كل فترة (كل 4 زيارات) خلال الشهر", en: "Quantity is weighed each period (every 4 visits) during the month" },
      { ar: "يتم احتساب الفاتورة للفترة بأكملها", en: "The bill is calculated for the entire period" },
    ],
  },
  {
    name: { ar: "نظام حالاً", en: "Halan" },
    icon: "/images/cash 1.svg",
    features: [
      { ar: "يتم استلام طلبك", en: "Your order is received" },
      { ar: "يتم وزن الكمية", en: "The quantity is weighed" },
      { ar: "الحساب من خلال أي محفظة أو أقرب مكان للتحويل لديك", en: "Get paid to any wallet or the nearest transfer point" },
      { ar: "السعر موحد للكمية", en: "Fixed price for the quantity" },
    ],
  },
];

export const collected: { img: string; label: L }[] = [
  { ar: "علب الشامبو والمسحوق", en: "Shampoo and powder containers" },
  { ar: "الورق والكتب", en: "Paper and books" },
  { ar: "علب لبن الأطفال", en: "Baby formula containers" },
  { ar: "النحاس", en: "Copper" },
  { ar: "الأجهزة والأثاث القديم والمستعمل", en: "Old and used devices and furniture" },
  { ar: "زجاجات المياه والزيت", en: "Water and oil bottles" },
  { ar: "الكانز", en: "Cans" },
  { ar: "الألومنيوم", en: "Aluminum" },
  { ar: "الحديد", en: "Iron" },
  { ar: "الصفائح", en: "Tin sheets" },
].map((label, i) => ({ img: `/images/Things ${i + 1}.png`, label }));

export const sponsors = ["/images/Sponser 1.png", "/images/New Sponser 1.png", "/images/New Sponser 2.jpg", "/images/New Sponser 3.png"];

/* ---------- Services ---------- */

export const services: { title: L; body: L; images: string[] }[] = [
  {
    title: { ar: "جمع المخلفات الصلبة", en: "Collecting Solid Waste" },
    body: {
      ar: "تقدم بيكيا باي حلاً مبتكرًا لجمع المخلفات الصلبة غير الخطرة من المؤسسات والمنازل، مما يوفر دخلًا إضافيًا في شكل نقدي أو سلع غذائية. يشجع هذا النموذج إدارة المخلفات المسؤولة مع منح الأسر مصدر دخل إضافي. وبالنسبة للشركات، بما في ذلك المطاعم والمتاجر الكبرى والمدارس، تساهم خدماتنا في بيئات أنظف مع تعزيز الممارسات المستدامة.",
      en: "Bekyapay provides an innovative solution for collecting non-hazardous solid waste from institutions and homes, offering a passive income in the form of cash or food commodities. This model encourages responsible waste management while giving households an extra income stream. For businesses, including restaurants, hypermarkets, and schools, our services contribute to cleaner environments while promoting sustainable practices.",
    },
    images: ["/images/service_waste1.jpg", "/images/service_waste2.jpg"],
  },
  {
    title: { ar: "رفع الوعي حول فصل المخلفات", en: "Raising Awareness About Waste Separation" },
    body: {
      ar: "تلتزم بيكيا باي برفع مستوى الوعي بأهمية فصل المخلفات، وخاصة بين الشباب. ومن خلال التعاون مع المدارس والجامعات، ننظم ورش عمل وفعاليات تعليمية تركز على تعليم الطلاب كيفية فصل المخلفات القابلة لإعادة التدوير والعضوية وغير القابلة لإعادة التدوير، لنلهم الجيل القادم لتبني عادات صديقة للبيئة.",
      en: "Bekyapay is committed to raising awareness about the importance of waste separation, particularly among youth. Through collaborations with schools and universities, we organize workshops and educational events that teach students how to separate recyclable, organic, and non-recyclable waste, inspiring the next generation to adopt environmentally friendly habits.",
    },
    images: [],
  },
  {
    title: { ar: "إعادة استخدام الأجهزة الإلكترونية", en: "Reusing Electronic Devices" },
    body: {
      ar: "ندعم إعادة استخدام الأجهزة الإلكترونية للحد من المخلفات الإلكترونية وتأثيرها البيئي. يمكن إصلاح العديد من الأجهزة المهملة أو إعادة استخدامها، مما يطيل عمرها ويقلل الحاجة إلى إنتاج جديد، ويقلل التخلص من المواد الخطرة مثل الرصاص والزئبق.",
      en: "We advocate for the reuse of electronic devices to reduce e-waste and its environmental impact. Many discarded electronics can be repaired or repurposed, extending their lifespan, reducing the need for new production, and minimizing the disposal of hazardous materials like lead and mercury.",
    },
    images: ["/images/service_elec1.jpg", "/images/service_elec2.jpg"],
  },
  {
    title: { ar: "إعادة استخدام الأثاث", en: "Furniture Reuse" },
    body: {
      ar: "بدلاً من التخلص من الأثاث القابل للاستخدام، نشجع التبرع به أو إعادة بيعه أو إعادة استخدامه، مما يطيل دورة حياته ويقلل الحاجة إلى موارد وطاقة جديدة، ويدعم الاقتصاد الدائري ويخفف العبء على مكبات المخلفات.",
      en: "Instead of discarding usable furniture, we encourage donation, resale, or repurposing, extending its lifecycle, reducing the need for new resources and energy, supporting a circular economy, and easing the burden on landfills.",
    },
    images: [],
  },
];

/* ---------- About ---------- */

export const about: { title: L; body: L }[] = [
  {
    title: { ar: "الرؤية", en: "Vision" },
    body: {
      ar: "قيادة التحول نحو حلول مبتكرة لإدارة المخلفات تعمل على تقليل الأثر البيئي، والحفاظ على الموارد الطبيعية، وخلق فرص اقتصادية للمجتمعات.",
      en: "To lead the transformation towards innovative waste management solutions that reduce environmental impact, conserve natural resources, and create economic opportunities for communities.",
    },
  },
  {
    title: { ar: "الرسالة", en: "Mission" },
    body: {
      ar: "إنشاء نظام شامل لإدارة المخلفات يمكّن المجتمعات من المشاركة بنشاط في إعادة التدوير والممارسات المستدامة. من خلال التكنولوجيا المتقدمة والعمليات الفعّالة، نهدف إلى تقليل انبعاثات الكربون والحفاظ على الموارد وتعزيز الاقتصاد الدائري.",
      en: "To establish a comprehensive waste management system that empowers communities to actively participate in recycling and sustainable practices. By leveraging advanced technology and efficient processes, we aim to reduce carbon emissions, conserve resources, and promote a circular economy.",
    },
  },
  {
    title: { ar: "تاريخنا", en: "Our History" },
    body: {
      ar: "منذ إطلاقنا في مارس 2024، وصلنا إلى أكثر من 1000 منزل في الإسكندرية وعقدنا شراكات مع أكثر من 30 مؤسسة في عام واحد. أعدنا تدوير ما يقرب من 115 طنًا من المخلفات، وقمنا بتوعية أكثر من 10000 شخص بأهمية فصل المخلفات. كما أصلحنا وأعدنا بيع أكثر من 100 جهاز إلكتروني وقطعة أثاث بأسعار في المتناول لدعم المجتمعات الأكثر احتياجًا.",
      en: "Since our launch in March 2024, we've reached over 1,000 homes in Alexandria and partnered with more than 30 institutions in just one year. We've recycled approximately 115 tons of waste and educated over 10,000 people on waste separation. We've also repaired and resold over 100 electronic devices and furniture pieces at affordable prices to support disadvantaged communities.",
    },
  },
];

/* ---------- Sustainability ---------- */

export const sustainability = {
  ours: {
    label: { ar: "نظام بيكيا باي", en: "BekyaPay system" },
    value: { ar: "‎-0.4 إلى ‎-0.9", en: "-0.4 to -0.9" },
  },
  traditional: {
    label: { ar: "الأنظمة التقليدية (تجميع مختلط، فرز، دفن/حرق)", en: "Traditional (mixed collection, sorting, landfill/incineration)" },
    value: { ar: "0.7 إلى 1.5", en: "0.7 to 1.5" },
  },
  unit: { ar: "طن CO₂ لكل طن مخلفات", en: "tons CO₂ per ton of waste" },
  saving: { ar: "1.1 – 2.4", en: "1.1 – 2.4" },
  paragraphs: [
    {
      ar: "يقلل نظام بيكيا باي لجمع المخلفات المفصولة من المصدر ونقلها مباشرة إلى مصانع إعادة التدوير من انبعاثات ثاني أكسيد الكربون بمقدار 1.1 إلى 2.4 طن لكل طن من المخلفات، اعتمادًا على نوع المادة وكفاءة العملية.",
      en: "BekyaPay's system of source-separated waste collection and direct transport to recycling plants reduces CO₂ emissions by 1.1 to 2.4 tons per ton of waste, depending on the material type and process efficiency.",
    },
    {
      ar: "تشير القيمة السالبة لصافي الانبعاثات إلى أن نظامنا يؤدي إلى انخفاض صافٍ في انبعاثات ثاني أكسيد الكربون؛ إذ تفوق المدخرات الناتجة عن إعادة التدوير (التي تُغني عن إنتاج مواد جديدة) الانبعاثات الناتجة أثناء عمليات الجمع وإعادة التدوير.",
      en: "A negative net-emissions value means our system results in a net reduction of CO₂: the savings from recycling (which avoids producing new materials) outweigh the emissions produced during collection and recycling.",
    },
  ] as L[],
};

/* ---------- Pages extracted from the legacy site ---------- */

type Block = { type: "img"; src: string; alt: string } | { type: "text"; tag: string; en?: string; ar?: string };
const both = (b: { en?: string; ar?: string }): L => ({ ar: b.ar ?? b.en ?? "", en: b.en ?? b.ar ?? "" });

/** Groups a block list into [heading, ...following paragraphs] sections. */
function sectionsOf(blocks: Block[], headingTags: string[]) {
  const out: { tag: string; title: L; paragraphs: L[] }[] = [];
  for (const b of blocks) {
    if (b.type !== "text") continue;
    if (headingTags.includes(b.tag)) out.push({ tag: b.tag, title: both(b), paragraphs: [] });
    else out.at(-1)?.paragraphs.push(both(b));
  }
  return out;
}

const stripNumber = (s: string) => s.replace(/^\s*\d+\s*[-.]\s*/, "");

export const faq = sectionsOf((faqRaw as Block[]).slice(1), ["h2"]).map((s) => ({
  q: { ar: stripNumber(s.title.ar), en: stripNumber(s.title.en) },
  a: s.paragraphs,
}));

export const terms = sectionsOf(termsRaw as Block[], ["h1", "h2"]);

function cardsOf(blocks: Block[]) {
  const cards: { img: string; title: L; subtitle: L }[] = [];
  for (const b of blocks) {
    if (b.type === "img") cards.push({ img: b.src, title: { ar: "", en: "" }, subtitle: { ar: "", en: "" } });
    else if (cards.length && (b.tag === "h3" || b.tag === "span") && !cards.at(-1)!.title.en) cards.at(-1)!.title = both(b);
    else if (cards.length) cards.at(-1)!.subtitle = both(b);
  }
  return cards;
}

export const events = cardsOf(eventsRaw as Block[]);

const teamLinkedin = [
  "https://www.linkedin.com/in/omarsalehali",
  "https://www.linkedin.com/in/mohamed-hamdy-186ba5141",
  "https://www.linkedin.com/in/mohamed-ibrahim-4367501b8",
];
export const team = cardsOf(teamRaw as Block[]).map((m, i) => ({
  img: m.img,
  name: m.title,
  bio: m.subtitle,
  linkedin: teamLinkedin[i],
}));
