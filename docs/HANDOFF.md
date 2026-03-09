# Deployment Handoff — Single Vercel Production Project

## The Production Branch

```
Repository:  support371/MymainEnterprisewebsite
Branch:      claude/production-main-W70hk
Commits:     1 (clean root — no shared history with dev branches)
Status:      Build ✅  Lint ✅
```

This branch is an **orphan** — it has a single root commit and zero history shared
with development branches. It contains only production-ready code, no orchestration
artifacts, no build instructions, no experiment files.

---

## Connect to Vercel

### Step 1 — Create / reconfigure Vercel project

In Vercel dashboard:
1. **Import Git Repository** → `support371/MymainEnterprisewebsite`
2. Set **Production Branch** → `claude/production-main-W70hk`
3. Framework Preset: **Next.js** (auto-detected)
4. Build Command: `npm run build` (default)
5. Output Directory: `.next` (default)

### Step 2 — Add a PostgreSQL database

The app requires PostgreSQL — file-based storage has been removed.

| Provider | Action |
|---|---|
| **Vercel Postgres** (recommended) | Vercel dashboard → Storage → Create → Postgres |
| Neon | neon.tech → new project → copy connection string |
| Supabase | Project Settings → Database → URI |
| Railway | Add Postgres service → copy DATABASE_URL |

### Step 3 — Set environment variables

Go to Vercel project → Settings → Environment Variables and add:

| Variable | Required | Value |
|---|---|---|
| `DATABASE_URL` | **YES** | Postgres connection string from step 2 |
| `ADMIN_AUTH_SECRET` | **YES** | 48 random hex chars: `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` |
| `SUPER_ADMIN_PASSWORD` | **YES** | Strong password for first admin login |
| `ADMIN_PASSWORD` | YES | Strong password |
| `ANALYST_PASSWORD` | YES | Strong password |
| `SMTP_HOST` | Recommended | e.g. `smtp.gmail.com` |
| `SMTP_PORT` | Recommended | `587` |
| `SMTP_USER` | Recommended | SMTP username |
| `SMTP_PASS` | Recommended | SMTP app password |

All variables are documented in `.env.example` with provider-specific guidance.

### Step 4 — Run database migration

Before or immediately after first deploy:

```bash
# Locally (set DATABASE_URL in .env.local first)
npm run db:migrate
```

Or inject into Vercel's build command:
```
npm run db:migrate && npm run build
```

This creates the `admin_users` and `contact_messages` tables and seeds three
default admin accounts. Migration is idempotent — safe to re-run.

### Step 5 — Deploy

Push any commit to `claude/production-main-W70hk` → Vercel auto-deploys.

For manual trigger:
```bash
# With Vercel CLI (once token is available)
vercel --prod --token $VERCEL_TOKEN
```

### Step 6 — Verify

```bash
PROD=https://your-domain.com

# DB + env posture
curl -s $PROD/api/health | jq .
# Expect: { "ok": true, "database": { "status": "ok" } }

# Route count
curl -s $PROD/api/routes | jq '.totals'

# Redirects working
curl -sI $PROD/contact     | grep location   # /contact-us
curl -sI $PROD/portfolio   | grep location   # /hub/portfolio
curl -sI $PROD/membership  | grep location   # /community
```

### Step 7 — Rotate seeded admin accounts

1. Log in at `/admin/login` with `superadmin@gem.local` + your `SUPER_ADMIN_PASSWORD`
2. Create real production accounts at `/admin/users`
3. Deactivate the three seeded `@gem.local` accounts

---

## What is on the production branch

```
.env.example              — all 15 env vars documented
README.md                 — setup + script reference
next.config.ts            — 24 legacy redirects
src/
  proxy.ts                — middleware: admin route protection
  app/                    — 50+ pages across all surfaces
  components/             — layout, navigation, UI primitives
  data/                   — static KPIs, intelligence, marketing data
  lib/
    db/                   — PostgreSQL connection + migration
    adminAuth.ts          — HMAC-SHA256 session tokens
    adminUsers.ts         — Postgres-backed admin user CRUD
    contactMessages.ts    — Postgres-backed contact message CRUD
    env.ts                — env helpers + assertProductionEnv()
    siteRoutes.ts         — route registry + redirect definitions
docs/
  VERCEL_CUTOVER.md       — step-by-step Vercel deployment guide
  DEPLOY_READINESS.md     — full operator pre-launch checklist
```

## What is NOT on the production branch

- Development branch history (`claude/enterprise-architecture-redesign-W70hk`)
- Replit / orchestration artifacts (`.replit`, `scripts/`, CI workflows)
- Build instruction text files (`attached_assets/`)
- Internal dev documentation (`docs/project-background/`, `docs/test-coverage-analysis.md`)
- Runtime data files (`data/` — gitignored)
- Node modules, `.next/` build output

---

## Repository state summary

| Branch | Purpose | Commits |
|---|---|---|
| `claude/production-main-W70hk` | **Vercel production target** | 1 (root) |
| `claude/enterprise-architecture-redesign-W70hk` | Development history | multiple |

Point Vercel to `claude/production-main-W70hk`. All future production deployments
push to this branch. Development continues on feature branches and is promoted by
cherry-pick or merge into the production branch when ready.
