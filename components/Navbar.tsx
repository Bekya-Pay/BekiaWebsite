"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Close, Globe, Menu } from "@/components/ui/icons";
import { type Locale, t, ui } from "@/lib/i18n";
import { type HeaderChild, headerLinks } from "@/lib/site";

export default function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only the home page has a full-bleed hero behind the bar; other pages start solid.
  const onHome = pathname === `/${locale}/` || pathname === `/${locale}`;
  const solid = scrolled || !onHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Highlight the header item whose section is currently in the middle of the screen.
  const [current, setCurrent] = useState<string>("home");
  useEffect(() => {
    if (!onHome) return;
    const sections = headerLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    // The footer can't reach mid-screen, so treat the bottom of the page as "contact".
    const atBottom = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setCurrent("contact");
    };
    window.addEventListener("scroll", atBottom, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", atBottom);
    };
  }, [onHome]);

  // On the home page scroll in place; from other pages go home first and land on the section.
  const goTo = (id: string) => (e: React.MouseEvent) => {
    setOpen(false);
    const el = onHome && document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", id === "home" ? `/${locale}/` : `#${id}`);
  };

  const other: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = pathname.replace(new RegExp(`^/${locale}`), `/${other}`);
  const rememberLocale = () => {
    try {
      localStorage.setItem("lang", other);
    } catch {}
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        solid ? "border-b border-white/10 bg-dark/90 backdrop-blur-xl" : "bg-gradient-to-b from-black/90 via-black/60 to-transparent"
      } ${scrolled ? "shadow-[0_6px_24px_rgb(0_0_0/0.28)]" : "shadow-none"}`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 text-white md:px-8">
        <Link href={`/${locale}/`} className="shrink-0" aria-label={t(ui.nav.home, locale)}>
          <Image src="/images/logo.svg" alt="BekyaPay" width={110} height={44} priority />
        </Link>

        <ul className="hidden items-center gap-7 text-base font-semibold xl:flex">
          {headerLinks.map((l) => {
            const active = onHome && current === l.id;
            return (
              <li key={l.key} className="group relative">
                <Link
                  href={l.id === "home" ? `/${locale}/` : `/${locale}/#${l.id}`}
                  onClick={goTo(l.id)}
                  className={`relative py-2 transition [text-shadow:0_1px_8px_rgb(0_0_0/0.5)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-accent after:transition-transform hover:text-accent hover:after:scale-x-100 ${
                    active ? "text-accent after:scale-x-100" : "text-white after:scale-x-0"
                  }`}
                >
                  {t(ui.nav[l.key], locale)}
                </Link>
                {l.children && (
                  <ul className="invisible absolute start-0 top-full min-w-48 translate-y-1 rounded-2xl border border-white/10 bg-dark/95 p-2 opacity-0 shadow-xl backdrop-blur-xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {l.children.map((c) => (
                      <li key={c.key}>
                        <ChildLink c={c} locale={locale} className="block rounded-xl px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-accent" />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            onClick={rememberLocale}
            className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_4px_16px_rgb(0_0_0/0.2)] backdrop-blur-xl backdrop-saturate-150 transition hover:border-accent hover:bg-white/25 hover:text-accent"
            hrefLang={other}
            title={t(ui.language, locale)}
          >
            <Globe width={16} height={16} className="me-1.5 inline-block align-[-3px]" />
            {t(ui.langSwitch, locale)}
          </Link>
          <button
            className="rounded-full p-2 xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 pb-6 xl:hidden">
          <ul className="flex flex-col text-lg text-white">
            {headerLinks.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.id === "home" ? `/${locale}/` : `/${locale}/#${l.id}`}
                  onClick={goTo(l.id)}
                  className={`block py-3 hover:text-accent ${onHome && current === l.id ? "text-accent" : ""}`}
                >
                  {t(ui.nav[l.key], locale)}
                </Link>
                {l.children && (
                  <ul className="mb-2 ms-4 border-s border-white/15 ps-4 text-base text-white/80">
                    {l.children.map((c) => (
                      <li key={c.key}>
                        <ChildLink c={c} locale={locale} onClick={() => setOpen(false)} className="block py-2 hover:text-accent" />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function ChildLink({ c, locale, className, onClick }: { c: HeaderChild; locale: Locale; className: string; onClick?: () => void }) {
  const label = t(ui.nav[c.key], locale);
  if (c.external)
    return (
      <a href={c.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {label}
      </a>
    );
  return (
    <Link href={`/${locale}${c.href}`} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}
