# Vercel Production Cutover — GEM CYBER

**Branch:** `claude/enterprise-architecture-redesign-W70hk`
**Status:** Repo-side hardening complete. Awaiting Vercel token / dashboard access.

---

## Pre-Cutover Checklist

### 1. Confirm repo state
- [ ] Branch `claude/enterprise-architecture-redesign-W70hk` is merged (or promoted) to `main`
- [ ] Build passes locally: `npm run build`
- [ ] Lint passes: `npm run lint`
- [ ] `.env.example` is committed; no `.env*` secrets are in git history

### 2. Provision a PostgreSQL database

The app requires a PostgreSQL database. File-based JSON storage has been fully removed.
All providers below are compatible with the `postgres` npm client used by this app:

| Provider | How to obtain `DATABASE_URL` |
|---|---|
| **Vercel Postgres** (recommended) | Vercel dashboard → Storage → Create Database |
| Neon | neon.tech → new project → copy connection string |
| Supabase | Project Settings → Database → URI mode |
| Railway | Add Postgres service → copy `DATABASE_URL` variable |

### 3. Set Vercel environment variables

In the Vercel dashboard → Project → Settings → Environment Variables, add every key from `.env.example`.

| Variable | Required | Notes |
|---|---|---|
| `DATABASE_URL` | **YES** | PostgreSQL connection string — see step 2 |
| `ADMIN_AUTH_SECRET` | **YES** | 48+ random hex chars; rotate if ever exposed |
| `SUPER_ADMIN_PASSWORD` | **YES** | Seed password for `superadmin@gem.local` |
| `ADMIN_PASSWORD` | **YES** | Seed password for `admin@gem.local` |
| `ANALYST_PASSWORD` | **YES** | Seed password for `analyst@gem.local` |
| `SMTP_HOST/PORT/USER/PASS` | Recommended | Without these, contact emails are skipped (DB submissions still saved) |
| `NEXT_PUBLIC_APP_NAME` | Optional | Defaults to `GEM CYBER` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Optional | Defaults to `admin@gemcybersecurityassist.com` |
| `NEXT_PUBLIC_SUPPORT_PHONE` | Optional | Defaults to `(860) 305-4376` |

### 4. Run database migration

Before traffic hits the app, create tables and seed default admin users:

```bash
# Locally (with DATABASE_URL in .env.local)
npm run db:migrate

# Or inject into Vercel build command:
# npm run db:migrate && next build
```

The migration is idempotent — safe to re-run at any time.

### 5. Deploy

```bash
# Option 1 — Vercel CLI (once token is available)
vercel --prod --token $VERCEL_TOKEN

# Option 2 — Git-push-based deployment
# Merge/promote the branch to main; Vercel auto-deploys on push to main.
```

### 6. Post-deployment smoke tests

```bash
PROD=https://your-domain.com

# Health check — confirms DB connectivity
curl -sf $PROD/api/health | jq .
# Expect: { "ok": true, "database": { "status": "ok" } }

# Route registry
curl -sf $PROD/api/routes | jq '.totals'

# Contact API schema
curl -sf $PROD/api/contact | jq .

# Redirect integrity (expect 301/307, not 200/404)
curl -sI $PROD/contact       | grep -i location   # → /contact-us
curl -sI $PROD/privacy        | grep -i location   # → /legal/privacy-policy
curl -sI $PROD/intelligence   | grep -i location   # → /intel
curl -sI $PROD/membership     | grep -i location   # → /community
```

### 7. Admin access — rotate seeded accounts

1. Navigate to `https://your-domain.com/admin/login`
2. Log in with `superadmin@gem.local` and your `SUPER_ADMIN_PASSWORD`
3. Create a production admin user with a strong password via `/admin/users`
4. Deactivate or delete all three seeded accounts (`@gem.local`)

### 8. DNS cutover (if applicable)

- Point your domain's A / CNAME to Vercel's IP / alias
- Enable Vercel's automatic TLS
- Verify `www` → apex redirect is handled in Vercel project settings

---

## What was hardened in this branch

| Session | Area | Change |
|---|---|---|
| 1 | Lint | Fixed 2 unescaped-entity errors, 1 unused-import warning |
| 1 | Route accuracy | Corrected `/api/contact` method label in live-preview (`GET` → `POST`) |
| 1 | Git hygiene | Removed `data/` files from tracking; added to `.gitignore` |
| 1 | Env docs | Created `.env.example` with all variables |
| 2 | Database layer | Created `src/lib/db/` — connection singleton, error types, migration script |
| 2 | Storage | Replaced file-based JSON with PostgreSQL in `adminUsers.ts` and `contactMessages.ts` |
| 2 | API hardening | 503 responses when DB not configured; structured logs on all routes |
| 2 | Health endpoint | DB connectivity probe + SMTP/secret posture flags |
| 2 | Env helpers | `isDatabaseConfigured()`, `assertProductionEnv()` in `env.ts` |
| 2 | npm scripts | Added `db:migrate` |

---

*Vercel actions (deploy, domain, env-var set) are blocked until token/dashboard access is available.*
*See `docs/DEPLOY_READINESS.md` for the full readiness checklist.*
