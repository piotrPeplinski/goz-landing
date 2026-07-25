# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small and medium Polish businesses and self-employed sole traders (JDG) looking for an external accounting office to handle their bookkeeping, tax filings, and payroll on an ongoing basis. Secondary: domestic and foreign entities operating in Poland that need compliant local bookkeeping (mentioned in the office's own description as served clients, but not the primary framing).

Job to be done: find a licensed, established accounting office in Poznań, understand what it covers, and get in touch for a quote.

## Product Purpose

Marketing/landing site for Biuro Rachunkowe GOZ, an existing accounting office in Poznań, Poland (real business, operating since 2001). Replaces their outdated multi-page site with a single modern page. Success = a visitor understands the office's services and credibility, and contacts the office (via form, phone, or email).

## Positioning

Established, licensed accounting office (Ministerstwo Finansów qualification certificate nr 22010/01) operating since 2001, covering the full range of Polish bookkeeping regimes (pełna księgowość, KPiR, ryczałt) plus payroll/ZUS and advisory — a one-stop shop rather than a narrow specialist.

## Operating Context

- Real business located at ul. Obornicka 330, 60-689 Poznań.
- No fixed/published pricing — quotes are given after contact, not on the site.
- No online client portal or product beyond the marketing site.

## Capabilities and Constraints

- Single page only (no separate routed pages/sections beyond in-page anchors).
- Next.js + TypeScript. No test suite.
- Light mode (default) and dark mode, toggled from the nav.
- Polish (default) and English, toggled via a flag icon in the nav.
- No logo yet — reserve a nav slot for it; clicking it scrolls to the top/first section. Logo will be added later by the client to match the site's chosen font/color scheme.
- Add a simple contact form (client-side/mailto-based, no backend) as the primary CTA, alongside the existing phone/email/address.
- Content source of truth is `content.md` (scraped from the real biurogoz.pl); copy may be rewritten/expanded to be more persuasive but must not invent services, credentials, pricing, testimonials, or claims not grounded in that file.

## Brand Commitments

- Business name: Biuro Rachunkowe GOZ.
- No existing visual identity beyond a future logo (not yet created). No binding palette/typography constraints from the client — this project chooses the visual world in new-work.

## Evidence on Hand

- `content.md` — full scraped copy of the existing site: about text, service list, contact details (phone +48 61 8244 074, email biuro@biurogoz.pl, address ul. Obornicka 330, 60-689 Poznań), useful external links (MF, ZUS, GUS, Urzędy Skarbowe), and footer/legal text.
- No testimonials, client logos, case studies, or numeric stats exist beyond "operating since 2001" and the MF license number — do not fabricate any.

## Product Principles

1. Faithful to real facts: every claim traces back to content.md; no invented stats, testimonials, or pricing.
2. Trust-first: for an accounting office, credibility signals (license, years in business, clear service scope) matter more than flash.
3. Bilingual parity: PL and EN must be equally complete, not a stub translation.
4. One page, no dead ends: every nav item is an in-page anchor; the CTA is always "get in touch."
5. Logo-ready, not logo-blocked: ship now with a reserved nav slot so the client can drop in a logo later without a redesign.
