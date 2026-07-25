"use client";

import { useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { Stamp } from "./Stamp";

export function Hero() {
  const { t } = useLocale();
  const parallaxRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = parallaxRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${px * -18}px, ${py * -14}px)`;
  };

  const onMouseLeave = () => {
    const el = parallaxRef.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <section
      id="top"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 md:pt-28 md:pb-20"
    >
      <div className="ledger-grid hero-grid-wipe pointer-events-none absolute inset-0" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 15%, color-mix(in oklab, var(--color-stamp) 8%, transparent), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.4fr_1fr] md:px-12">
        <div>
          <p
            className="hero-rise-in mb-6 font-mono text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--color-stamp)", ["--rise-delay" as string]: "0.1s" }}
          >
            {t.hero.eyebrow}
          </p>
          <h1
            className="hero-ink-reveal text-balance font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl"
            style={{ color: "var(--color-ink)" }}
          >
            {t.hero.heading}
          </h1>
          <p
            className="hero-rise-in mt-6 max-w-xl text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--color-ink-muted)", ["--rise-delay" as string]: "1.5s" }}
          >
            {t.hero.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="hero-rise-in rounded-[8px] px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.05em] text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: "var(--color-stamp)", ["--rise-delay" as string]: "1.7s" }}
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#services"
              className="hero-rise-in rounded-[8px] border px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.05em] transition-colors hover:bg-[color-mix(in_oklab,var(--color-rule)_60%,transparent)]"
              style={{ borderColor: "var(--color-ink)", color: "var(--color-ink)", ["--rise-delay" as string]: "1.8s" }}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div ref={parallaxRef} className="transition-transform duration-200 ease-out">
            <div className="stamp-float">
              <Stamp top={t.hero.stampYear} bottom={t.hero.stampLicense} size={168} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
