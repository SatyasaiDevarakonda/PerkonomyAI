# Perkonomy AI — Frontend Prototype

A frontend-only prototype of **Perkonomy AI**, the AI-driven financial-optimisation
platform for Indian households described in `Team_1_Report_REVISED.docx`.

Pure React. No backend. Mock data baked in. Use it for project showcase, investor
walkthroughs, or as a clickable supplement to the report.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS 3** for styling (custom brand palette: deep trust-blue + saffron)
- **React Router 6** for navigation
- **Recharts** for charts
- **Framer Motion** for animations
- **Lucide React** for icons
- **Inter** + **Plus Jakarta Sans** fonts (Google Fonts)

## What's inside

### Marketing site
| Route | Page |
|---|---|
| `/`              | Home — hero, problem, features, how-it-works, pricing teaser, testimonials |
| `/features`      | All 9 product features with mocked phone screens |
| `/trip-planner`  | AI Trip Planner deep-dive with sample itinerary |
| `/family`        | Parivar Plan family-mode positioning |
| `/banks`         | B2B / white-label licensing pitch |
| `/pricing`       | 3-tier pricing + feature matrix + FAQ |
| `/about`         | Team (all 6 members), mission, principles |
| `/login`         | Fake login (any creds work → enters demo) |

### In-app demo (after fake login)
| Route | Page |
|---|---|
| `/app`              | Dashboard — savings chart, donut, live recommendations |
| `/app/cards`        | My Cards — 4 sample cards, Khazana hidden benefits |
| `/app/coupons`      | Coupon Hub — searchable, filterable, category-tabbed |
| `/app/trip-planner` | Interactive AI Trip Planner (form → loading → result) |
| `/app/family`       | Parivar dashboard — 4 members, festival pre-optimisation |
| `/app/alerts`       | Expiry Rakshak — urgency-tiered upcoming expiries |

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:
```bash
npm run build      # production bundle in dist/
npm run preview    # serve the built bundle
npm run typecheck  # tsc --noEmit
```

## Deploy (any static host)

Build produces a fully static `dist/`. Drop into Vercel, Netlify, GitHub Pages,
Cloudflare Pages, S3 + CloudFront — anything that can serve files. The app uses
React Router in client mode, so configure the host to fall back to `index.html`
for unknown paths.

## Project structure

```
src/
├── App.tsx                  # routes
├── main.tsx                 # entry
├── index.css                # tailwind layers + design tokens
├── lib/
│   ├── data.ts              # all mock data (cards, coupons, family, plans, …)
│   ├── auth.ts              # fake localStorage-based auth
│   └── utils.ts             # cn(), formatINR(), …
├── components/
│   ├── MarketingLayout.tsx  # public nav + footer
│   ├── AppLayout.tsx        # in-app sidebar shell (auth-gated)
│   ├── ui/
│   │   ├── Logo.tsx
│   │   ├── MobileFrame.tsx  # phone-frame mockups for marketing pages
│   │   └── CreditCard.tsx   # animated credit-card visual
│   └── charts/
│       ├── SavingsChart.tsx
│       ├── CategoryDonut.tsx
│       └── SurveyBars.tsx
└── pages/
    ├── marketing/           # Home, Features, TripPlanner, Family, Banks,
    │                        # Pricing, About, Login
    └── app/                 # Dashboard, Cards, Coupons, TripPlannerApp,
                             # FamilyApp, Alerts
```

## Notes

- All numbers (₹40L raise, 87% / 73% / 68% / 49% survey, ₹2,340 / month pilot,
  ₹45.95L Y1 revenue, etc.) come from the report and stay internally consistent.
- The login page accepts any credentials. There is no real auth, no real bank
  data, no API calls.
- The card-batao notification, trip planner result and family dashboard all use
  hand-tuned mock data for narrative coherence — they're meant for demoing,
  not for real recommendations.
