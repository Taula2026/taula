# TAULA — Project Context

## Business

TAULA is a Swiss importer and distributor of frozen vegetables sourced from Egyptian producers. Customers are restaurants, retailers, wholesalers and food service businesses in Switzerland. This is a **catalogue and trust-building site with no e-commerce**: no cart, no prices, no order flow, no catalogue PDF. Every call to action ends in a phone call or an email. Never add ordering, pricing or checkout — their absence is deliberate.

TAULA also carries a second product line: traditionally baked flatbread, produced in the company's own bakery in Ganterschwil (`/bread` route, `Dictionary.breadPage`). This absorbed a formerly separate site/brand ("Tabuny") — that name has been deliberately dropped everywhere; the bread content is presented purely as a TAULA product line, not a partner or sub-brand. The bread page's "carton inquiry" card (`BreadOrderCard`) asks for a quantity and an optional note, never a price, and redirects to the contact form to submit — it is an inquiry hand-off, not a cart or checkout, consistent with the no-e-commerce rule above. Do not reintroduce pricing (CHF amounts) or a real order/checkout flow for bread without asking the user first.

## Non-negotiable copy rules (legal — must survive every edit and translation)

1. **No Swiss-origin claims.** The produce is grown in Egypt. Never write "Schweizer Qualität", "aus der Schweiz", "Swiss quality", and never render a Swiss cross. Use "für die Schweiz" / "in der Schweiz" (for/in Switzerland) — describes who is served, which is true. Institutional references like "Schweizer Zoll" (Swiss Customs) are fine — they're not origin/quality claims.
2. **No certification claims.** TAULA holds no BRCGS / IFS / ISO 22000 / HACCP / GLOBALG.A.P. Never imply certification or show those marks. "nach strengen Qualitätsstandards" is fine; "zertifiziert" is not.
3. **No track record claims.** No "trusted by X businesses", no invented customer counts, testimonials or years in business. Phrase everything as capability (e.g. "one of few suppliers in Switzerland that carries molokhia," not "trusted by hundreds of restaurants").
4. **No weights or pack formats anywhere.** Products always show "Formate auf Anfrage" / "Formats on request" (translated per locale). Getting the buyer on the phone is the point.
5. **Declare origin honestly.** "Herkunft der Produkte: Ägypten" in the footer, "Herkunft: Ägypten" badge on the products page. It's a selling point, not a disclaimer.

Ask the user before inventing any new factual claim about the business. Placeholder data (phone, address, UID in `src/data/site.ts`) is exempt — it's explicitly flagged as placeholder, not a real claim.

## Stack

Next.js 15 (App Router), TypeScript, Tailwind CSS 3 (**not** v4), `src/` directory, `@/*` path alias, `lucide-react` for icons, React 19. No `zod`, no headless-UI library, no `resend` SDK (contact API uses raw `fetch` to the Resend HTTP API). Config files were written directly, not via `create-next-app`.

**Next.js 15 gotcha**: route `params` is a `Promise` and must be awaited in every `layout.tsx`/`page.tsx`/`generateMetadata` under `[locale]`.

**Images gotcha**: most files referenced under `public/images/` (hero photos, product photos) **do not exist on disk** — only the two logo SVGs are real files. Every `<Image>` uses a **plain string `src`** (e.g. `src="/images/hero-home.jpg"`), never a static ES import — a static import of a missing file would fail `next build`; a string path only 404s at request time.

## Design system

Tokens in `tailwind.config.ts` — colors: navy `#123B63`, navy-deep `#0C2A47`, leaf `#1A7A3C`, leaf-dark `#14602F`, ice `#5BA8D8`, ice-pale `#EAF4FA`, bone `#F6F7F5`. Fonts via `next/font/google` in `src/app/[locale]/layout.tsx`: Poppins (weights 600, 700 — not variable, weight array required) as `--font-display`, Inter (variable) as `--font-body`.

`src/app/globals.css` reusable classes: `.shell` (max-width 1360px, centered, the **only** place horizontal padding is set), `.eyebrow` (small uppercase leaf label, letter-spacing 0.18em), `.rule` (3px×56px leaf, rounded), `.btn-primary`, `.btn-ghost`, `.card`. Includes visible focus rings and a `prefers-reduced-motion` block.

The eyebrow + heading + short green rule pattern (`SectionHeading` component) is the site's signature, reused on every section. Numbered markers are used only on the supply-chain page's six-step process — order matters there specifically.

## Internationalisation

Locales `['de','en','fr','it']`, `de` is default, config in `src/i18n/config.ts` with a `path(locale, route)` helper and `isLocale()` type guard. Same route segments in every locale: `about`, `products`, `bread`, `supply-chain`, `contact`, `imprint`. Root layout lives at `src/app/[locale]/layout.tsx` — there is **no** `src/app/layout.tsx`.

`src/middleware.ts` redirects any locale-less path to one, reading `Accept-Language`, falling back to `de`. **Gotcha**: with a `src/` directory, Next.js requires `middleware.ts` inside `src/`, not at the true project root — placing it beside `package.json` causes Next to silently never load it (no error, no log line, it just never runs). Matcher includes `/` explicitly plus a catch-all excluding `api`, `_next`, `images`, and any dotted filename (some Next versions don't match bare `/` from the catch-all pattern alone).

Dictionaries in `src/i18n/dict/`: `de.ts` is the source of truth and exports its type as `Dictionary`; `en.ts`, `fr.ts`, `it.ts` are each typed with a **direct annotation** (`const en: Dictionary = {...}`, not `satisfies`) so excess/missing keys hard-fail the build. German was authored first with all five copy rules embedded; EN/FR/IT were translated **from the German**, never from English. FR and IT use formal register (vouvoiement / lei-adjacent formality) for Romandie/Ticino buyers. `src/i18n/dict/index.ts` exposes `getDictionary(locale)` and a `dictionaries` map.

## Data

`src/data/site.ts` — single source for company details. Phone, address and UID are placeholders (`placeholders: {...}` flags); `hasPlaceholders` is exported and gates the amber warning band in the footer.

`src/data/products.ts` — seven products: `molokhia` (`featured: true`, leads, double-width card), `okra`, `peas`, `potatoes`, `mixed`, `spinach`, `beans`. This file holds structure only (slug, featured, image paths); names/descriptions live in the dictionaries keyed by slug under `Dictionary.products`. Bread is deliberately **not** in this file/`ProductSlug` — `ProductCard` only knows how to open a modal, never navigate, so bread lives as its own route (`src/app/[locale]/bread/page.tsx`) with its own dictionary section (`Dictionary.breadPage`) instead. The products page links to it via a plain `<Link>` card styled like `ProductCard` but not using the component.

## Build state

- [x] Config scaffold (package.json, tsconfig, tailwind, postcss, next.config, eslint, .env.example, .gitignore)
- [x] `src/i18n/config.ts`, `src/middleware.ts`
- [x] `src/data/products.ts`, `src/data/site.ts`
- [x] Dictionaries: `de.ts`, `en.ts`, `fr.ts`, `it.ts`, `dict/index.ts`
- [x] CLAUDE.md
- [x] `globals.css` design system classes
- [x] Chrome components (Header, LanguageSwitcher, Footer, MobileCallBar, SectionHeading) + `[locale]/layout.tsx`
- [x] ProductCard, ProductModal, ContactForm
- [x] Pages: home, about, products, supply-chain, contact, imprint
- [x] Contact API route (`src/app/api/contact/route.ts`)
- [x] Placeholder logo SVGs, image-reference audit (no static image imports anywhere — all `<Image>` use string `src`)
- [x] `npm install` / `npm run build` clean (24 locale×route pages prerendered), dev server verified
- [x] Bread merge: `/bread` route + `BreadOrderCard` (inquiry-only, no pricing) + `Dictionary.breadPage` in all 4 locales + products-page teaser card linking to it + nav link in `Header`. Former Tabuny site/brand name fully dropped from copy. `npm run build` clean (32 locale×route pages prerendered).

**Build is complete.** `src/data/site.ts` now holds real phone, address and UID (`CHE-390.832.252`) — no more placeholders, so `hasPlaceholders` is `false`. Remaining before going live: add real photography for the still-missing spots in `public/images/`, set real `RESEND_API_KEY`/`CONTACT_TO_EMAIL`/`CONTACT_FROM_EMAIL` env vars, get real social profile URLs into `site.social.{instagram,facebook,tiktok}` (currently empty, icons already live in the footer and contact page), and — outside this codebase — decide what happens to the `tabuny-schweiz.ch` domain/hosting (e.g. DNS redirect to the new TAULA `/bread` page) once this ships. Note: `next.config.js` sets `images.dangerouslyAllowSVG: true` so the two placeholder logo SVGs can be served through the Next.js image optimizer — this is safe since both SVGs are local, trusted, checked-in assets.

Update this checklist as work proceeds so future sessions know where the build stands.
