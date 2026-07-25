"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { useActiveSection } from "@/lib/useActiveSection";
import { TiltCard } from "./TiltCard";

const SECTION_IDS = ["about", "services", "pricing", "contact"];

export function Nav() {
  const { t, locale, toggle: toggleLocale } = useLocale();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const listRef = useRef<HTMLUListElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const el = linkRefs.current[active];
      const list = listRef.current;
      if (!el || !list) {
        setIndicator((s) => ({ ...s, opacity: 0 }));
        return;
      }
      const listRect = list.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicator({ left: elRect.left - listRect.left, width: elRect.width, opacity: 1 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active, locale]);

  const links = [
    { href: "#about", id: "about", label: t.nav.about },
    { href: "#services", id: "services", label: t.nav.services },
    { href: "#pricing", id: "pricing", label: t.nav.pricing },
    { href: "#contact", id: "contact", label: t.nav.contact },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`nav-rule fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "backdrop-blur-md" : ""}`}
      style={{
        backgroundColor: scrolled ? "color-mix(in oklab, var(--color-paper) 88%, transparent)" : "transparent",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo slot, reserved for client-supplied logo asset. Clicking scrolls to hero. */}
        <a
          href="#top"
          onClick={scrollToTop}
          aria-label={t.nav.logoAria}
          className="group flex h-10 min-w-[7rem] items-center gap-2.5 font-figure text-sm font-semibold tracking-wide"
          style={{ color: "var(--color-ink)" }}
        >
          <TiltCard maxTilt={18} lift={10} className="shrink-0" style={{ transformStyle: "preserve-3d" }}>
            <span
              className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 text-[0.6rem] transition-colors duration-300 group-hover:border-[color:var(--color-stamp)]"
              style={{ borderColor: "var(--color-ink)", color: "var(--color-ink)" }}
              aria-hidden
            >
              <span
                className="absolute inset-[3px] rounded-full border transition-colors duration-300 group-hover:border-[color:var(--color-stamp)]"
                style={{ borderColor: "var(--color-rule)" }}
              />
              <span className="relative">GOZ</span>
            </span>
          </TiltCard>
          <span className="hidden sm:inline">Biuro GOZ</span>
        </a>

        <ul ref={listRef} className="relative hidden items-center gap-8 md:flex">
          <span
            className="pointer-events-none absolute -bottom-[17px] h-[2px] transition-all duration-300 ease-out"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
              backgroundColor: "var(--color-stamp)",
            }}
            aria-hidden
          />
          {links.map((link) => (
            <li key={link.href}>
              <a
                ref={(el) => {
                  linkRefs.current[link.id] = el;
                }}
                href={link.href}
                className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] transition-colors hover:text-[color:var(--color-stamp)]"
                style={{ color: active === link.id ? "var(--color-stamp)" : "var(--color-ink-muted)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-[8px] border px-2.5 py-1.5 text-sm transition-transform hover:scale-105"
            style={{ borderColor: "var(--color-ink)", borderOpacity: 0.15 } as React.CSSProperties}
            aria-label={t.nav.langSwitchTo}
            title={t.nav.langSwitchTo}
          >
            <span aria-hidden>{locale === "pl" ? "🇵🇱" : "🇬🇧"}</span>
            <span className="font-mono text-[0.7rem] uppercase">{locale}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="grid h-9 w-9 place-items-center rounded-[8px] border transition-transform hover:scale-105"
            style={{ borderColor: "var(--color-ink)", borderOpacity: 0.15 } as React.CSSProperties}
            aria-label={theme === "light" ? t.nav.themeToDark : t.nav.themeToLight}
            title={theme === "light" ? t.nav.themeToDark : t.nav.themeToLight}
          >
            <span
              className="relative block h-4 w-4 transition-transform duration-500"
              style={{ transform: theme === "dark" ? "rotate(180deg)" : "rotate(0deg)" }}
              aria-hidden
            >
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-[8px] border md:hidden"
            style={{ borderColor: "var(--color-ink)", borderOpacity: 0.15 } as React.CSSProperties}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4" aria-hidden>
              <span
                className="absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform duration-300"
                style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
              />
              <span
                className="absolute left-0 top-1.5 h-[1.5px] w-4 bg-current transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="absolute left-0 top-3 h-[1.5px] w-4 bg-current transition-transform duration-300"
                style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className="overflow-hidden border-t transition-[max-height] duration-300 md:hidden"
        style={{ maxHeight: open ? "260px" : "0px", borderColor: "var(--color-rule)" }}
      >
        <ul
          className="flex flex-col gap-1 px-6 py-4"
          style={{ backgroundColor: "var(--color-paper)" }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm uppercase tracking-[0.08em]"
                style={{ color: active === link.id ? "var(--color-stamp)" : "var(--color-ink-muted)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  );
}
