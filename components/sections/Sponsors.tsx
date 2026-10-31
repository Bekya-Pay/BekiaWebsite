import Image from "next/image";
import { sponsors } from "@/lib/content";
import { type Locale } from "@/lib/i18n";
import { asset } from "@/lib/site";

/** "Sponsored by" logo row; shown under the partners strip. */
export default function Sponsors({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto mt-12 max-w-7xl px-4 md:mt-16 md:px-8">
      <p className="mb-8 text-center text-sm font-medium text-muted">{locale === "ar" ? "برعاية" : "Sponsored by"}</p>
      <ul className="flex flex-wrap items-center justify-center gap-6">
        {sponsors.map((src) => (
          <li key={src} className="relative h-20 w-40">
            <Image src={asset(src)} alt="" fill sizes="160px" className="object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
}
