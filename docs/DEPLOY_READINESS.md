# Production Deploy Readiness Report

**Branch:** `claude/enterprise-architecture-redesign-W70hk`
**Generated:** 2026-03-09
**Status:** ✅ Repo-side hardening complete — awaiting Vercel token/dashboard access

---

## Checklist Summary

| Area | Status | Notes |
|---|---|---|
| Build | ✅ Pass | `npm run build` exits 0, zero type errors |
| Lint | ✅ Pass | `npm run lint` (ESLint 9) exits 0, zero warnings |
| Filesystem dependency | ✅ Removed | All storage now routes through PostgreSQL |
| Stateless API routes | ✅ Verified | No route touches the local filesystem |
| Error handling | ✅ Hardened | 503 for DB not configured, 500 for unexpected errors |
| Env documentation | ✅ Complete | `.env.example` covers all 15 variables |
| Secrets in git | ✅ Clean | `data/` untracked; `.env*` gitignored (`.env.example` whitelisted) |
| Redirect integrity | ✅ Verified | 24 redirects, all destinations have page files, no loops |
| Admin auth | ✅ Secure | HMAC-SHA256 session tokens, timing-safe password verify, `secure` cookie in prod |
| Deployment docs | ✅ Written | `docs/VERCEL_CUTOVER.md` covers end-to-end cutover |

---

## Architecture Changes (this session)

### Database abstraction layer (`src/lib/db/`)

| File | Purpose |
|---|---|
| `errors.ts` | `DbNotConfiguredError` — thrown by `getDb()` when `DATABASE_URL` is absent |
| `index.ts` | Connection singleton; `max: 1` for serverless safety; lazy-initialised |
| `migrate.ts` | Idempotent schema creation + admin user seeding; run via `npm run db:migrate` |

### Storage migration

| Module | Before | After |
|---|---|---|
| `src/lib/adminUsers.ts` | Reads/writes `data/admin-users.json` | Reads/writes `admin_users` table in Postgres |
| `src/lib/contactMessages.ts` | Reads/writes `data/contact-messages.json` | Reads/writes `contact_messages` table in Postgres |

### API route hardening

| Route | Change |
|---|---|
| `POST /api/contact` | Returns 503 (not 500) when DB is unconfigured; structured log on every submission |
| `GET/PATCH /api/admin/inbox` | Try/catch with 503 for DB not configured, 500 for other errors |
| `POST /api/admin/login` | Try/catch + 503; constant-time delay on failed auth; structured login success log |
| `GET /api/health` | DB connectivity probe; reports `database.status: ok|unconfigured|error`; SMTP + secret posture flags; returns 503 when DB probe fails |

### Environment

| Item | Change |
|---|---|
| `src/lib/env.ts` | Added `isDatabaseConfigured()` and `assertProductionEnv()` helpers |
| `package.json` | Added `db:migrate` script (`tsx src/lib/db/migrate.ts`) |
| `.env.example` | Updated `DATABASE_URL` section with provider-specific examples |

---

## Pre-Launch Checklist (Operator)

### Step 1 — Provision a PostgreSQL database

Choose one provider (all work with the `postgres` npm client):

- **Vercel Postgres** (Neon-backed) — add from Vercel dashboard → Storage
- **Neon** — create a project at neon.tech, copy the connection string
- **Supabase** — Project Settings → Database → Connection string (URI mode)
- **Railway** — provision Postgres service, copy `DATABASE_URL`

### Step 2 — Set environment variables in Vercel

```
DATABASE_URL          = <your postgres connection string>
ADMIN_AUTH_SECRET     = <48+ hex chars — see .env.example for generation command>
SUPER_ADMIN_PASSWORD  = <strong password>
ADMIN_PASSWORD        = <strong password>
ANALYST_PASSWORD      = <strong password>
SMTP_HOST             = smtp.gmail.com  (or your provider)
SMTP_PORT             = 587
SMTP_USER             = your-email@domain.com
SMTP_PASS             = your-app-password
```

### Step 3 — Run database migration

Before or immediately after first deploy:

```bash
# Locally (with DATABASE_URL in .env.local)
npm run db:migrate

# Or in Vercel build command (add before next build):
# npm run db:migrate && next build
```

### Step 4 — Verify health endpoint

```bash
curl -s https://your-domain.com/api/health | jq .
# Expect: { "ok": true, "database": { "status": "ok" } }
```

### Step 5 — Rotate seeded admin passwords

1. Log in at `/admin/login` with seeded credentials
2. Create a new `super_admin` account with a strong, unique password
3. Delete or deactivate the three seeded accounts (`superadmin@gem.local`, etc.)

### Step 6 — Smoke-test critical routes

```bash
PROD=https://your-domain.com

curl -sf $PROD/api/health | jq .
curl -sf $PROD/api/routes | jq '.totals'
curl -sI $PROD/contact | grep -i location       # → 301 /contact-us
curl -sI $PROD/intelligence | grep -i location  # → 307 /intel
curl -sI $PROD/portfolio | grep -i location     # → 307 /hub/portfolio
```

---

## What Is NOT Yet Done (Vercel-gated)

| Item | Blocked on |
|---|---|
| Deploy to production URL | Vercel token or dashboard access |
| Environment variable upload to Vercel | Vercel dashboard access |
| Domain DNS cutover | Vercel project configuration |
| Vercel Postgres provisioning | Vercel dashboard access |

---

## Known Low-Severity Dependabot Alert

GitHub flagged 1 low-severity vulnerability on the default branch. Run `npm audit fix`
after Vercel access is restored to confirm it is resolved in this branch as well.
