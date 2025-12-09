# Next.js Rendering Modes Demo

## Objective
Show SSG, SSR, and ISR using the Next.js App Router.

## Pages
- `/about` — SSG (`export const revalidate = false`)
- `/dashboard` — SSR (`export const dynamic = 'force-dynamic'`, `fetch(..., { cache: 'no-store' })`)
- `/news` — ISR (`export const revalidate = 60`)

## How to run
1. `npm install`
2. `npm run mock-api` (optional)
3. `npm run dev` or `npm run build && npm run start`

## Verification
- SSG: run build/start; `about` page timestamp equals build time and doesn't change on reload.
- SSR: `dashboard` timestamp changes on every refresh.
- ISR: `news` content updates only after the revalidation interval (60s).

## Evidence
(Include screenshots)
- next build output
- `/dashboard` showing changing server timestamps
- `/news` before/after revalidate

## Reflection
- SSG = fastest, lowest cost; SSR = freshest, most expensive; ISR = balance.
- If traffic increases 10×, prefer SSG/ISR for public pages and reserve SSR for truly dynamic pages.

