# PageSpeed Optimization Report

Laatste performance-pass uitgevoerd op 2 juni 2026 voor `https://jitan-sports.nl`.

## Baseline Van Deze Pass

Gebruiker-aangeleverde PageSpeed score voorafgaand aan deze pass:

| Form factor | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 94 | 100 | 100 | 100 | n.b. | n.b. | n.b. | 0.101 | n.b. |
| Desktop | 100 | 100 | 100 | 100 | n.b. | n.b. | n.b. | n.b. | n.b. |

## Lokale Production Preview Na Wijzigingen

Gemeten met `vite build`, `vite preview` en Lighthouse CLI op `http://127.0.0.1:4173/`.

| Form factor | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 90 | 100 | 100 | 100 | 1.9s | 3.5s | 70ms | 0 | 1.9s |
| Desktop | 100 | 100 | 100 | 100 | 0.4s | 0.7s | 0ms | 0 | 0.4s |

De lokale mobiele Lighthouse-score blijft vooral beperkt door de SPA-rendering van de hero als LCP-element. De LCP image zelf is wel discoverable in de HTML, heeft `fetchpriority="high"`, laadt eager en wordt gepreload. CLS is opgelost naar 0 in de lokale production-preview.

## Uitgevoerde Wijzigingen

- Dubbele statische hero/app-shell uit `index.html` verwijderd, zodat er geen tweede hero image of dubbele shell meer wordt gerenderd.
- Hero preload behouden en afgestemd op responsive AVIF-bronnen voor mobiel en desktop.
- `ResponsiveImage` uitgebreid met `width`, `height` en `aspect-ratio` fallback voor alle bekende assets.
- `PageHero` gestandaardiseerd naar `min-h-[clamp(420px,68svh,720px)]`.
- Extra homepage hero-padding verwijderd om de mobiele LCP-rect te verkleinen.
- Navbar dropdown vervangen door een kleine eigen implementatie in plaats van Radix Dropdown/Floating UI.
- Mobiele drawer buiten de fixed/blur navbar geplaatst, zodat hij weer de volledige viewport gebruikt.
- Navigatie-items gecentraliseerd in `src/config/navigation.ts`.
- Onder-de-vouw homepage-secties lazy-loaded: reviews, galerie, FAQ, trust stats, goal cards, how-it-works, doelgroep en CTA.
- React Query verwijderd uit de publieke runtime; `useSiteContent` gebruikt nu een kleine gedeelde cache-hook.
- Toaster uit de eerste render gehaald en pas na idle geladen.
- Ongebruikte dependency/code verwijderd: React Query client, Radix Dropdown component, `tailwind-merge` en directe `clsx` dependency.
- Deployment workflow uitgebreid met production cache headers:
  - HTML: `max-age=0,must-revalidate`
  - Hashed assets/images/fonts: `public,max-age=31536000,immutable`

## Bundle Verschil

| Onderdeel | Voor deze pass | Na deze pass |
| --- | ---: | ---: |
| Main JS entry | ca. 423 KB | ca. 274 KB |
| Homepage lazy chunks | beperkt | losse chunks voor niet-kritieke secties |
| Unused JS Lighthouse opportunity | ca. 44 KB | opgelost in lokale run |
| CLS | 0.101 | 0 lokaal |

## Validatie

Uitgevoerd:

- `npm run build`
- `npm run lint`
- Lighthouse mobile op lokale production preview
- Lighthouse desktop op lokale production preview
- Browser rendercheck op `http://127.0.0.1:5173/`
- Mobiele drawer open/close/Escape controle
- Image dimension audit via browser DOM

Resterend aandachtspunt:

- Mobile LCP blijft in lokale Lighthouse rond 3.5s zolang de homepage een puur client-rendered React SPA blijft. Voor structureel 98-100 mobiel is prerendering/SSR van de above-the-fold hero de volgende duurzame stap.
