# GEM CYBER — Enterprise Platform

Next.js 16 enterprise cybersecurity platform. Single production repository.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Database:** PostgreSQL via `postgres` npm client (serverless-safe, `max: 1`)
- **Auth:** Custom HMAC-SHA256 session tokens (httpOnly cookies)
- **Email:** Nodemailer (SMTP — optional, degrades gracefully)

## Local Development

```bash
# 1. Install
npm install

# 2. Configure environment
cp .env.example .env.local
# Edit .env.local — set DATABASE_URL and ADMIN_AUTH_SECRET at minimum

# 3. Run database migration (creates tables + seeds admin users)
npm run db:migrate

# 4. Start dev server
npm run dev
```

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint check |
| `npm run db:migrate` | Create/update DB schema and seed admin users |

## Structure

```
src/
├── app/                  # Next.js App Router pages and API routes
│   ├── (public pages)    # home, intel, assets, community, hub, services, legal
│   ├── admin/            # Admin portal (protected by middleware)
│   └── api/              # REST endpoints: contact, health, routes, admin/*
├── components/           # Shared UI components and layout primitives
├── data/                 # Static data: KPIs, intelligence, marketing, specs
├── lib/
│   ├── db/               # PostgreSQL connection, error types, migration script
│   ├── adminAuth.ts      # Session token creation and verification
│   ├── adminUsers.ts     # Admin user CRUD (Postgres-backed)
│   ├── contactMessages.ts# Contact message CRUD (Postgres-backed)
│   ├── env.ts            # Environment variable helpers
│   ├── navTabs.ts        # Hub-and-spoke navigation config
│   └── siteRoutes.ts     # Route registry and legacy redirect definitions
└── proxy.ts              # Next.js middleware: admin route protection
```

## Deployment

See `docs/VERCEL_CUTOVER.md` for the full Vercel deployment checklist.
See `docs/DEPLOY_READINESS.md` for the operator pre-launch checklist.

### Quick deploy (Vercel)

1. Connect this repository to a Vercel project
2. Add a PostgreSQL database (Vercel Postgres / Neon / Supabase / Railway)
3. Set all env vars from `.env.example` in Vercel dashboard
4. Run `npm run db:migrate` (locally or as part of build command)
5. Deploy — Vercel auto-builds on push to `main`
