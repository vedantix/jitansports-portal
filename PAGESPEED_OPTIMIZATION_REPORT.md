# PageSpeed Optimization Report

## Baseline

Gebruiker-aangeleverde PageSpeed Insights meting voor `https://jitan-sports.nl`:

| Form factor | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 77 | 87 | 100 | 100 | 3.0s | 4.3s | 0ms | 0 | 4.9s |
| Desktop | 98 | 87 | 100 | 100 | 0.7s | 1.0s | 0ms | 0 | 1.0s |

## Resultaat Na Optimalisatie

Live Lighthouse meting op `https://jitan-sports.nl`, uitgevoerd na deploy en CloudFront invalidation op 24 mei 2026:

| Form factor | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 100 | 100 | 100 | 100 | 0.9s | 1.2s | 30ms | 0.004 | 1.8s |
| Desktop | 100 | 100 | 100 | 100 | 0.3s | 0.4s | 0ms | 0.005 | 0.7s |

Lokale production-preview controle (`vite build` + `vite preview`) bevestigde dezelfde scoreklasse: Mobile 99+ en Desktop 100. Core Web Vitals zijn groen. PageSpeed Insights kan per run licht varieren door edge-cache, netwerkcondities en sampling.

## Belangrijkste Wijzigingen

- Hero/LCP pipeline vervangen door responsive AVIF/WebP/JPG varianten met preload en `fetchpriority="high"`.
- Oude publieke hero-JPG uit `public/` verplaatst naar `scripts/assets/`, zodat die niet meer onnodig wordt gedeployed.
- Alle publieke fallback-afbeeldingen voor diensten, paginahelden, blog en galerij geoptimaliseerd en lokaal geserveerd.
- `ResponsiveImage` component toegevoegd voor `<picture>`, `srcset`, `sizes`, width/height en moderne formaten.
- Above-the-fold app-shell toegevoegd in `index.html`, met inline critical CSS en non-critical CSS via preload + noscript fallback.
- Mobiele hero-preload gecorrigeerd naar `sizes="100vw"` en LCP image expliciet `loading="eager"`, `fetchpriority="high"` en `decoding="sync"` gegeven.
- Framer Motion verwijderd uit publieke pagina's en dependency verwijderd.
- Zware Base44 SDK vervangen door kleine expliciete client voor entities, auth redirects en Core-integraties.
- Google Fonts externe import verwijderd; Inter/Sora worden lokaal gehost met `font-display: swap`.
- Admin/layout/404 lazy-loaded en route SEO verplaatst naar route chunks.
- Accessibility gefixt voor formulierlabels, carousels, galerij/lightbox, touch targets, logo label mismatch en heading-structuur.
- React Router future flags gezet om router warnings te voorkomen.
- Productie build-output opgeschoond en cache-strategie voorbereid.

## Bundle En Asset Verschillen

| Onderdeel | Voor | Na |
| --- | ---: | ---: |
| Main JS entry | 422 KB | 230 KB |
| Base44 runtime chunk | 109 KB | 4.9 KB |
| CSS bundle | 77 KB | 78 KB |
| Oude hero JPG | 176 KB publiek asset | niet meer publiek |
| Mobiele LCP resource | 176 KB JPG | 23 KB AVIF (`hero-mobile-768.avif`) |
| Responsive image variants | geen | 129 AVIF/WebP/JPG varianten |

## Cache Strategie Voor Deploy

- HTML: `Cache-Control: max-age=0, must-revalidate`
- Hashed assets, fonts en afbeeldingen: `Cache-Control: public,max-age=31536000,immutable`
- CloudFront invalidation na upload: `/*`

## Validatie

Uitgevoerd:

- `npm run lint`
- `npm audit --omit=dev`
- `VITE_BASE44_APP_ID=6a115e447a3ac96774309014 VITE_BASE44_APP_BASE_URL=https://jitansports.base44.app npm run build`
- Lighthouse mobile + desktop op lokale production preview
- Lighthouse mobile + desktop op live productie `https://jitan-sports.nl`
- CloudFront invalidation en live cache-header controle
- Browser render sanity check op `http://127.0.0.1:4173/`

Resterende Lighthouse-opportunities zijn informatief en drukken de scores niet:

- Unused JS: vooral React/runtime baseline voor de SPA.
- Unused CSS: Tailwind/shadcn basisregels die niet allemaal op de homepage nodig zijn.
