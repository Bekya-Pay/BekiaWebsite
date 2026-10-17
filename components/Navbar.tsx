"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Close, Menu } from "@/components/ui/icons";
import { type Locale, t, ui } from "@/lib/i18n";
import { navLinks } from "@/lib/site";

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

  const other: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = pathname.replace(new RegExp(`^/${locale}`), `/${other}`);
  const rememberLocale = () => {
    try {
      localStorage.setItem("lang", other);
    } catch {}
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-white/10 bg-dark/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 text-white md:px-8">
        <Link href={`/${locale}/`} className="shrink-0" aria-label={t(ui.nav.home, locale)}>
          <Image src="/images/logo.svg" alt="BekyaPay" width={110} height={44} priority />
        </Link>

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {navLinks.map((l) => {
            const href = `/${locale}${l.href}`;
            const active = pathname.startsWith(href);
            return (
              <li key={l.key}>
                <Link
                  href={href}
                  className={`transition hover:text-accent ${active ? "text-accent" : "text-white/80"}`}
                >
                  {t(ui.nav[l.key], locale)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            onClick={rememberLocale}
            className="rounded-full px-3 py-2 text-sm text-white/80 transition hover:text-accent"
            hrefLang={other}
          >
            {t(ui.langSwitch, locale)}
          </Link>
          <Link
            href={`/${locale}/#download`}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:brightness-95 sm:inline-flex"
          >
            {t(ui.download, locale)}
          </Link>
          <button
            className="rounded-full p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 pb-6 lg:hidden">
          <ul className="flex flex-col text-lg text-white">
            {navLinks.map((l) => (
              <li key={l.key}>
                <Link href={`/${locale}${l.href}`} className="block py-3 hover:text-accent">
                  {t(ui.nav[l.key], locale)}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/${locale}/#download`}
            className="mt-4 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink"
          >
            {t(ui.download, locale)}
          </Link>
        </div>
      )}
    </header>
  );
}
