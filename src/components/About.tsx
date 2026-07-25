"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="border-t px-6 py-14 md:px-12 md:py-28" style={{ borderColor: "var(--color-rule)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2
            className="max-w-2xl text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-tight md:text-5xl"
            style={{ color: "var(--color-ink)" }}
          >
            {t.about.heading}
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-[1.3fr_1fr] md:gap-14">
          <Reveal delay={100}>
            <div className="space-y-5">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className="max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-1">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[8px] border p-5"
                  style={{ borderColor: "var(--color-rule)", backgroundColor: "var(--color-card)" }}
                >
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.08em]" style={{ color: "var(--color-ink-muted)" }}>
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-figure text-2xl font-semibold" style={{ color: "var(--color-stamp)" }}>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
