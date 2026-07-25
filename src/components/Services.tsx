"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

const icons = [BookIcon, LedgerIcon, ReceiptIcon, PeopleIcon, StarIcon];

export function Services() {
  const { t } = useLocale();

  return (
    <section
      id="services"
      className="border-t px-6 py-28 md:px-12"
      style={{ borderColor: "var(--color-rule)", backgroundColor: "color-mix(in oklab, var(--color-rule) 25%, var(--color-paper))" }}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--color-stamp)" }}>
            {t.services.eyebrow}
          </p>
          <h2
            className="mt-4 max-w-2xl text-balance font-[family-name:var(--font-display)] text-4xl font-medium leading-tight md:text-5xl"
            style={{ color: "var(--color-ink)" }}
          >
            {t.services.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 80} variant="flip" className="[perspective:1200px]">
                <TiltCard maxTilt={7} lift={10} className="tilt-shadow h-full rounded-[8px] border p-7" style={{ borderColor: "var(--color-rule)", backgroundColor: "var(--color-card)" }}>
                  <div
                    className="mb-5 grid h-10 w-10 place-items-center rounded-[6px] border"
                    style={{ borderColor: "var(--color-stamp)", color: "var(--color-stamp)", transform: "translateZ(24px)" }}
                  >
                    <Icon />
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "var(--color-ink)", transform: "translateZ(16px)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2.5 text-sm leading-relaxed"
                    style={{ color: "var(--color-ink-muted)", transform: "translateZ(8px)" }}
                  >
                    {item.description}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function iconProps() {
  return { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, className: "h-5 w-5" } as const;
}

function BookIcon() {
  return (
    <svg {...iconProps()}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 016.5 3H20v15.5H6.5A2.5 2.5 0 004 21V5.5z" />
      <path strokeLinecap="round" d="M4 18.5A2.5 2.5 0 016.5 16H20" />
    </svg>
  );
}

function LedgerIcon() {
  return (
    <svg {...iconProps()}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path strokeLinecap="round" d="M4 9.5h16M4 14.5h16M9 4v16" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg {...iconProps()}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12v18l-2.5-1.5L13 21l-2.5-1.5L8 21l-2-1.5V3z" />
      <path strokeLinecap="round" d="M8.5 8h7M8.5 12h7" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="9" cy="8" r="3" />
      <path strokeLinecap="round" d="M3.5 20a5.5 5.5 0 0111 0M16 8.5a3 3 0 110 6M20.5 20a5 5 0 00-6-4.9" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg {...iconProps()}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5l2.4 5.1 5.6.6-4.1 3.9 1.1 5.6-4.9-2.8-4.9 2.8 1.1-5.6-4.1-3.9 5.6-.6z"
      />
    </svg>
  );
}
