"use client";

import { useLocale } from "@/lib/i18n";

export function Footer() {
  const { t } = useLocale();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t px-6 py-14 md:px-12" style={{ borderColor: "var(--color-rule)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--color-stamp)" }}>
          {t.links.eyebrow}
        </p>
        <ul className="mb-14 flex flex-wrap gap-x-8 gap-y-3">
          {t.links.items.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm underline-offset-4 transition-colors hover:text-[color:var(--color-stamp)] hover:underline"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm sm:flex-row"
          style={{ borderColor: "var(--color-rule)", color: "var(--color-ink-muted)" }}
        >
          <p className="font-figure">© {new Date().getFullYear()} Biuro Rachunkowe GOZ · {t.footer.rights}</p>
          <a href="#top" onClick={scrollToTop} className="font-mono text-xs uppercase tracking-[0.08em] transition-colors hover:text-[color:var(--color-stamp)]">
            {t.footer.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
