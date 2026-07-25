<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Biuro Rachunkowe GOZ
description: Landing page for a licensed Poznań accounting office, built on the metaphor of the ledger and the official stamp of authenticity.
---

# Design System: Biuro Rachunkowe GOZ

## Overview

**Creative North Star: "The Ledger"**

The visual world is the physical artifact this business actually produces: ruled ledger paper, tabular columns of figures, dated entries, and the round ink stamp (pieczątka) that makes a Polish document official. This is deliberately not the generic fintech-SaaS look (soft gradients, rounded glass cards, a blue-to-purple blob) that every accounting landing page defaults to — instead it leans into precision, permanence, and officialdom: the things that actually earn trust for a business whose entire value proposition is "we file this correctly, on time, under a real license number."

Light mode is the working surface: a cool, slightly blue-grey paper (not cream — cream reads as bookish/cozy, wrong register for a compliance-driven institution) crossed with a faint ledger rule-line grid. Dark mode inverts to a near-black ink-well surface with the same rule lines rendered faint, like paper under low desk-lamp light at night. The accent is a deep forest/bottle green — the color of an official stamp pad and old accounting ledgers — used sparingly (stamp, underline, active state, the one primary button), never as a wash.

Numbers (phone, address, prices-on-request, license number, "since 2001") are always set in a monospace tabular figure face, because in this world numbers are ledger entries, not display type. Section transitions and the stamp motif reinforce arrival/confirmation — the stamp "lands" when the contact form is used, a literal proof-of-receipt gesture matching how this business actually accepts your information.

**Key Characteristics:**
- Ruled ledger-line grid as a structural motif, not decoration
- Deep bottle-green ink accent used at low frequency, high intent (The One Voice Rule)
- Serif display for institutional weight, monospace for every number/data value
- A circular ink-stamp motif marks credibility claims and confirms actions
- Flat, printed-matter depth model — no glass, no soft ambient shadows

## Colors

Committed color strategy: Restrained-plus-stamp — near-neutral paper/ink ground, one low-frequency deep-green accent reserved for the stamp motif, links, and the primary CTA.

### Primary
- **Stamp Green** (`oklch(32% 0.06 155)` ≈ `#1F4436`): the ink-stamp accent. Primary buttons, active nav state, link color, the stamp motif itself, focus rings. The One Voice Rule — this color never covers more than a thin stroke, a button, or the stamp; it is never a background fill of any real area.

### Neutral — Light mode
- **Paper** (`oklch(97% 0.006 240)` ≈ `#F3F5F6`): page background, cool blue-grey paper, not cream.
- **Rule Line** (`oklch(90% 0.008 240)` ≈ `#D9DEE1`): the faint ledger grid lines and hairline dividers.
- **Ink** (`oklch(22% 0.01 240)` ≈ `#181C1E`): primary text.
- **Ink Muted** (`oklch(45% 0.01 240)` ≈ `#5B6367`): secondary text, captions.
- **Card** (`oklch(100% 0 0)` ≈ `#FFFFFF`): raised paper surface for cards/form.

### Neutral — Dark mode
- **Well** (`oklch(18% 0.008 240)` ≈ `#16181A`): page background, near-black ink-well.
- **Rule Line Dark** (`oklch(28% 0.01 240)` ≈ `#2A2E31`): faint grid lines under lamp light.
- **Paper Dark** (`oklch(94% 0.005 240)` ≈ `#EBEDEE`): primary text on dark.
- **Paper Muted Dark** (`oklch(70% 0.008 240)` ≈ `#9BA2A6`): secondary text.
- **Card Dark** (`oklch(22% 0.01 240)` ≈ `#1E2123`): raised surface.

### Named Rules
**The One Voice Rule.** Stamp Green appears only as: the primary CTA, the active/hover link state, the stamp motif, and focus rings. It never fills a section background or a large card.

## Typography

**Display Font:** Newsreader (serif, institutional/editorial weight, not the cliché warm-bookish Fraunces/Playfair pairing — Newsreader reads more like a legal/official document face)
**Body Font:** IBM Plex Sans (clean, neutral, built for dense official/technical content)
**Label/Mono Font:** IBM Plex Mono (tabular figures — every number, date, phone, price-on-request note, license number)

**Character:** A quiet institutional serif for headings against a workhorse grotesque for reading, with monospace breaking in wherever a real figure or data point appears — the typographic equivalent of a stamped document with a typed ledger line underneath.

### Hierarchy
- **Display** (Newsreader, 500, `clamp(2.75rem, 6vw, 5rem)`, 1.05): hero headline only.
- **Headline** (Newsreader, 500, `clamp(2rem, 4vw, 2.75rem)`, 1.1): section titles.
- **Title** (IBM Plex Sans, 600, 1.25rem, 1.3): card/service titles.
- **Body** (IBM Plex Sans, 400, 1.0625rem, 1.6, max 68ch): paragraphs.
- **Label** (IBM Plex Mono, 500, 0.8125rem, letter-spacing 0.04em, uppercase): nav items, form labels, eyebrow tags.
- **Figure** (IBM Plex Mono, 500, tabular-nums): phone numbers, dates, "od 2001", license number, addresses.

### Named Rules
**The Ledger Digit Rule.** Any number a visitor might scan or copy (phone, license nr, year, address) is set in IBM Plex Mono with tabular figures — never in the serif or the sans.

## Layout

Single page, section-per-viewport rhythm with generous vertical space (more above a heading than below it). A faint ruled-line grid (1px, Rule Line color, ~64px row height) sits behind content as a persistent texture, most visible in the hero and thinning under dense content sections. Container max-width ~1120px, generous side padding (min 24px mobile, 96px+ desktop). Nav is a fixed top bar, slightly translucent over the ruled paper, with a bottom hairline instead of a shadow.

## Elevation & Depth

Flat, printed-matter model — no soft ambient glass shadows. Depth comes from paper layering (Card sits one shade lighter/darker than the page background) plus a thin hairline border, the way a printed card sits on a ledger page. The one exception is the stamp motif, which gets a subtle ink-bleed texture (not a drop shadow) to feel physically stamped rather than digitally floating.

### Named Rules
**The Flat Ledger Rule.** No `box-shadow` blur beyond 2px anywhere except the stamp motif's ink-bleed effect. Depth = paper-tone contrast + 1px hairline, never blur.

## Shapes

Corners are small and confident (6–10px), evoking a printed card/index card rather than an app tile (never fully rounded/pill except the language-flag toggle and the stamp circle itself, which is a true circle — the one deliberate exception). Dividers are 1px hairlines, not soft gradients. The stamp motif is the only circular form in the system and is reserved for that role.

## Components

### Buttons
- **Shape:** 8px radius, 1px inset border in Ink at 10% opacity.
- **Primary:** Stamp Green fill, Paper text, `14px 28px` padding, IBM Plex Sans 600 uppercase label tracking 0.03em.
- **Hover/Focus:** darken fill ~8%, 2px Stamp Green focus ring offset 2px.
- **Secondary/Ghost:** transparent fill, Ink text, 1px Ink-10% border; hover fills Rule Line tone.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** Card / Card Dark.
- **Shadow Strategy:** none — 1px hairline border only (see Elevation).
- **Internal Padding:** 32–40px desktop, 24px mobile.

### Inputs / Fields (contact form)
- **Style:** flat, 1px Ink-15% border, 6px radius, Paper/Card background, IBM Plex Sans body text, IBM Plex Mono for phone-number field.
- **Focus:** border shifts to Stamp Green, 2px focus ring.
- **Error:** border shifts to a muted red (`oklch(50% 0.15 25)`), inline mono-labeled error text below field.

### Navigation
- Fixed top bar, translucent Paper/Well background with backdrop-blur, 1px bottom hairline.
- Logo slot on the far left (reserved, empty until client supplies asset) — clicking it scrolls to top/hero.
- Nav links in Label style (mono, uppercase, tracked); active/hover state underlines in Stamp Green.
- Right side: language flag toggle (PL/EN) and light/dark toggle, both compact icon-buttons in the ghost button style.
- Mobile: collapses to a single menu icon; the logo slot and both toggles stay visible.

### Stamp Motif (signature component)
A circular ink-stamp graphic (SVG, hand-inked ring + short label like "OD 2001" / "MF NR 22010/01") used to mark trust claims (years in business, license number) and to animate a "stamped" confirmation when the contact form is submitted. Rendered in Stamp Green with a slightly irregular/ink-bled edge, never a perfect vector-clean circle.

## Do's and Don'ts

### Do:
- **Do** keep Stamp Green rare — The One Voice Rule.
- **Do** set every number in IBM Plex Mono tabular figures — The Ledger Digit Rule.
- **Do** keep depth flat with hairlines — The Flat Ledger Rule.
- **Do** keep the ruled-line grid subtle enough to read as texture, not a literal spreadsheet.

### Don't:
- **Don't** use cream/parchment backgrounds or a warm bookish serif pairing (Fraunces/Playfair + cream) — wrong register for a compliance institution.
- **Don't** use glassmorphism, soft ambient drop shadows, or gradient blobs.
- **Don't** invent prices, testimonials, client counts, or credentials beyond what's in `content.md`/PRODUCT.md.
- **Don't** let the stamp motif appear more than once per section — it loses its meaning as a confirming mark if it becomes decoration.
