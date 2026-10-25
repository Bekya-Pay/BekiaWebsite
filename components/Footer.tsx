import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Pin, Whatsapp } from "@/components/ui/icons";
import { type Locale, t, ui } from "@/lib/i18n";
import { navLinks, site } from "@/lib/site";

export default function Footer({ locale }: { locale: Locale }) {
  const socials = [
    { href: site.social.facebook, label: "Facebook", Icon: Facebook },
    { href: site.social.instagram, label: "Instagram", Icon: Instagram },
    { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  ];

  return (
    <footer id="contact" className="scroll-mt-20 bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <Image src="/images/logo.svg" alt="BekyaPay" width={140} height={56} />
          <p className="mt-6 max-w-sm leading-relaxed text-white/60">
            {locale === "ar"
              ? "نحوّل المخلفات إلى قيمة، ونبني مستقبلًا أنظف للإسكندرية ومصر."
              : "Turning waste into value and building a cleaner future for Alexandria and Egypt."}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-sm text-white/50">{t(ui.nav.company, locale)}</h3>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.key}>
                <Link href={`/${locale}${l.href}`} className="text-white/80 transition hover:text-accent">
                  {t(ui.nav[l.key], locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <h3 className="mb-5 text-sm text-white/50">{t(ui.contact, locale)}</h3>
          <ul className="space-y-4 text-white/80">
            <li className="flex gap-3">
              <Pin className="mt-0.5 shrink-0 text-accent" />
              <span>{t(site.address, locale)}</span>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 transition hover:text-accent">
                <Mail className="shrink-0 text-accent" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-accent">
                <Whatsapp className="shrink-0 text-accent" />
                <span dir="ltr">{site.phoneLabel}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/50 sm:flex-row md:px-8">
          <span>
            © {new Date().getFullYear()} BekyaPay LLC. {t(ui.rights, locale)}.
          </span>
          <Link href={`/${locale}/terms/`} className="transition hover:text-accent">
            {t(ui.nav.terms, locale)}
          </Link>
        </div>
      </div>
    </footer>
  );
}
