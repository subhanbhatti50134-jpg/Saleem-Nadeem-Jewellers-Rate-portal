# Saleem Nadeem Jewellers — Gold & Silver Rate Portal

A small storefront rate portal for **Saleem Nadeem Jewellers, Sarafa Market,
Daska**. It displays current gold and silver rates (per tola) and lets an
admin update them.

## What it does

- Shows live-on-screen rates for **24K gold, 22K gold, laboratory (certified)
  rate, and silver** in Pakistani rupees per tola
- A **sticky rates bar** stays visible as the user scrolls
- Pages/sections: Hero, Rates, Collection, Services, Contact
- An **admin login** gate opens an admin panel where rates can be updated;
  updated rates persist in the browser's `localStorage`
- Built with **React + TypeScript + Vite + Tailwind CSS**

## Who it's for

- Customers of Saleem Nadeem Jewellers who want to check today's gold/silver
  rates before visiting the shop
- The shop admin, who can update the displayed rates

## Important: authentication is client-side only

This is a **frontend-only** site. There is no backend, so:

- The admin login does **not** verify credentials against a server.
- Rate changes are stored in `localStorage` (per-browser, not shared).
- Do not rely on the admin panel for access control in a production
  environment. Wire `login` up to a real backend endpoint before treating the
  admin features as secure.

See `src/context/AuthContext.tsx` for details.

## Install and run

Prerequisites: Node.js (LTS) and npm.

```bash
# clone
git clone https://github.com/subhanbhatti50134-jpg/Saleem-Nadeem-Jewellers-Rate-portal.git
cd "Saleem-Nadeem-Jewellers-Rate-portal"

# install dependencies
npm install

# run the dev server (http://localhost:5173)
npm run dev

# production build into dist/
npm run build

# preview the production build locally
npm run preview
```

## Deploy

The site is deployed on Vercel:
https://saleem-nadeem-jewellers-rate-portal.vercel.app

Push to `main` and import the repo in Vercel (framework: Vite). No build
environment variables are required.

## License

This repository does not yet carry an open-source license. See
`LICENSE_DECISION.md` for recommended options.
