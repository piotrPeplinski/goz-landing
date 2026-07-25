# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **Biuro Rachunkowe GOZ**, a real bookkeeping/accounting office in Poznań, Poland (operating since 2001, MF qualification certificate nr 22010/01). Single-page site replacing their outdated multi-page one.

- `content.md` — scraped copy from the real biurogoz.pl. Source of truth for facts (services, contact info, license nr, external links). Copy may be rewritten to be more persuasive but must not invent services, pricing, testimonials, or claims not grounded there.
- `PRODUCT.md` — product truth (users, positioning, constraints). Read before changing scope.
- `DESIGN.md` — the committed visual system ("The Ledger": ruled ledger-line grid, ink-stamp motif, deep bottle-green accent used sparingly, Newsreader/IBM Plex Sans/IBM Plex Mono). Read before changing colors, type, or component style — it documents *why*, not just tokens.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- No test suite in this project — don't add one.

## Architecture

Next.js App Router + TypeScript, Tailwind v4 (CSS-based `@theme`, no `tailwind.config.js`). Single route (`/`); everything is a section on one page, navigated via in-page anchors + smooth scroll.

- `src/app/layout.tsx` — root layout, loads fonts (Newsreader / IBM Plex Sans / IBM Plex Mono via `next/font/google`), wraps children in `ThemeProvider` and `LocaleProvider`.
- `src/app/globals.css` — Tailwind import + design tokens (`@theme inline`) for the Ledger palette (light/dark), the ruled-grid background, font variables.
- `src/lib/theme.tsx` — light/dark theme context. Default is light; persists choice to `localStorage`; applies `data-theme` on `<html>` (see DESIGN.md dark-mode tokens).
- `src/lib/i18n.tsx` — PL/EN locale context + `t()` lookup. Default is Polish; persists choice to `localStorage`.
- `src/data/content.ts` — all bilingual copy (`pl`/`en`) as one typed dictionary, keyed by section. This is the only place page copy lives — components read from here, they don't hardcode strings.
- `src/components/` — one component per section (`Nav`, `Hero`, `About`, `Services`, `Pricing`, `Contact`, `Footer`) plus shared bits (`Stamp` — the signature ink-stamp SVG motif, `Reveal` — the scroll-reveal-on-view wrapper used for the site's animation language).
- `src/lib/useReveal.ts` — small `IntersectionObserver` hook powering scroll-triggered reveal animations; respects `prefers-reduced-motion`.

No backend/CMS/database. The contact form has no server — it composes a `mailto:` link client-side (see `Contact.tsx`); there is nothing to wire up beyond that.

## Content & i18n rules

- Every visitor-facing string lives in `src/data/content.ts` under both `pl` and `en` — never hardcode copy directly in a component.
- Nav is anchor-only (`#about`, `#services`, `#pricing`, `#contact`); there are no other routes. The logo slot (currently a reserved empty placeholder — no logo asset exists yet) scrolls to the top/hero section on click, it doesn't link anywhere.
- Numbers a visitor might scan (phone, license nr, year founded, address) render in the mono figure style per DESIGN.md's Ledger Digit Rule — don't reformat them into the serif/sans faces.
