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

### 2. Set Vercel environment variables

In the Vercel dashboard → Project → Settings → Environment Variables, add every key from `.env.example`.
Critical secrets to set **before first deployment**:

| Variable | Required | Notes |
|---|---|---|
| `ADMIN_AUTH_SECRET` | **YES** | Long random string; rotate if ever exposed |
| `SUPER_ADMIN_PASSWORD` | **YES** | Seed password for `superadmin@gem.local` |
| `ADMIN_PASSWORD` | **YES** | Seed password for `admin@gem.local` |
| `ANALYST_PASSWORD` | YES | Seed password for `analyst@gem.local` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Recommended | Without these, contact-form emails are skipped (submissions still saved) |
| `NEXT_PUBLIC_APP_NAME` | Optional | Defaults to `GEM CYBER` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Optional | Defaults to `admin@gemcybersecurityassist.com` |
| `NEXT_PUBLIC_SUPPORT_PHONE` | Optional | Defaults to `(860) 305-4376` |

### 3. Writable runtime data

The app uses file-based JSON for admin users and contact messages at:
- `data/admin-users.json`
- `data/contact-messages.json`

**Vercel's filesystem is read-only at runtime.** On first cold start the app will attempt to write these files and fail silently on Vercel's ephemeral filesystem. Two options:

- **Option A (recommended):** Replace the file-based store with a Vercel KV / Postgres / PlanetScale database and update `src/lib/adminUsers.ts` and `src/lib/contactMessages.ts` accordingly.
- **Option B (quick unblock):** Use Vercel Blob or an external store (e.g. Upstash Redis) to persist JSON. Wire reads/writes through the SDK.

### 4. Deploy

```bash
# Option 1 — Vercel CLI (once token is available)
vercel --prod --token $VERCEL_TOKEN

# Option 2 — Git-push-based deployment
# Merge/promote the branch to main; Vercel auto-deploys on push to main.
```

### 5. Post-deployment smoke tests

Run against the live URL:

```bash
PROD=https://your-domain.com

# Health check
curl -sf $PROD/api/health | jq .

# Route registry
curl -sf $PROD/api/routes | jq '.routes | length'

# Contact API schema
curl -sf $PROD/api/contact | jq .

# Redirect integrity (expect 301/307, not 404)
curl -sI $PROD/contact       | grep -i location
curl -sI $PROD/privacy        | grep -i location
curl -sI $PROD/intelligence   | grep -i location
curl -sI $PROD/membership     | grep -i location
```

### 6. Admin access

1. Navigate to `https://your-domain.com/admin/login`
2. Log in with the seeded account matching your `SUPER_ADMIN_PASSWORD` env var
3. Immediately create a production admin user with a strong password via `/admin/users`
4. Rotate / remove the seeded default accounts

### 7. DNS cutover (if applicable)

- Point your domain's A / CNAME to Vercel's IP / alias
- Enable Vercel's automatic TLS
- Verify `www` → apex redirect is handled (or configure in Vercel project settings)

---

## What was hardened in this branch

| Area | Change |
|---|---|
| Lint | Fixed 2 unescaped-entity errors and 1 unused-import warning |
| Route accuracy | Corrected `/api/contact` method label in live-preview from `GET` → `POST` |
| Git hygiene | `data/admin-users.json` and `data/contact-messages.json` removed from git tracking and added to `.gitignore` |
| Secrets documentation | `.env.example` created with all required and optional variables |
| Deployment docs | This file |

---

*Vercel actions (deploy, domain, env-var set) blocked pending token/dashboard access.*
