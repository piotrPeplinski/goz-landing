"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Pricing() {
  const { t } = useLocale();

  return (
    <section id="pricing" className="border-t px-6 py-14 md:px-12 md:py-28" style={{ borderColor: "var(--color-rule)" }}>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal className="flex flex-col items-center">
          <h2
            className="text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-tight md:text-5xl"
            style={{ color: "var(--color-ink)" }}
          >
            {t.pricing.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
            {t.pricing.body}
          </p>

          <a
            href="#contact"
            className="mt-8 rounded-[8px] px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.05em] text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "var(--color-stamp)" }}
          >
            {t.pricing.cta}
          </a>
          <p className="mt-4 font-mono text-xs" style={{ color: "var(--color-ink-muted)" }}>
            {t.pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
