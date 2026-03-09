/**
 * Database migration + seed script.
 *
 * Usage (requires DATABASE_URL in environment):
 *   npm run db:migrate
 *
 * Idempotent — safe to re-run. Creates tables if they don't exist and seeds
 * default admin users only when the admin_users table is empty.
 */

import 'dotenv/config'; // loads .env.local automatically when present
import crypto from 'node:crypto';
import { getDb } from './index';

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export async function migrate(): Promise<void> {
  const sql = getDb();

  console.log('[migrate] Creating tables if they do not exist...');

  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id            TEXT        PRIMARY KEY,
      email         TEXT        NOT NULL UNIQUE,
      password_hash TEXT        NOT NULL,
      name          TEXT        NOT NULL,
      role          TEXT        NOT NULL
                                CHECK (role IN ('super_admin','admin','analyst','auditor')),
      active        BOOLEAN     NOT NULL DEFAULT true,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id                  TEXT        PRIMARY KEY,
      created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
      source_page         TEXT        NOT NULL,
      first_name          TEXT        NOT NULL,
      last_name           TEXT        NOT NULL DEFAULT '',
      email               TEXT        NOT NULL,
      phone               TEXT        NOT NULL DEFAULT '',
      service_interest    TEXT        NOT NULL,
      message_body        TEXT        NOT NULL,
      status              TEXT        NOT NULL DEFAULT 'open'
                                      CHECK (status IN ('open','triaged','closed')),
      assigned_to_user_id TEXT,
      org_id              TEXT,
      tags                TEXT[]      NOT NULL DEFAULT '{}'
    )
  `;

  // Index frequently-filtered columns
  await sql`
    CREATE INDEX IF NOT EXISTS contact_messages_status_idx
      ON contact_messages (status)
  `;
  await sql`
    CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
      ON contact_messages (created_at DESC)
  `;

  console.log('[migrate] Tables ready.');

  // Seed default admin users only when the table is empty
  const [{ count }] = await sql<[{ count: string }]>`
    SELECT count(*)::text AS count FROM admin_users
  `;

  if (Number(count) === 0) {
    console.log('[migrate] Seeding default admin users...');

    const seeds = [
      {
        id: 'U-1',
        email: 'superadmin@gem.local',
        passwordHash: hashPassword(process.env.SUPER_ADMIN_PASSWORD ?? 'change-me-superadmin'),
        name: 'Super Admin',
        role: 'super_admin',
      },
      {
        id: 'U-2',
        email: 'admin@gem.local',
        passwordHash: hashPassword(process.env.ADMIN_PASSWORD ?? 'change-me-admin'),
        name: 'Platform Admin',
        role: 'admin',
      },
      {
        id: 'U-3',
        email: 'analyst@gem.local',
        passwordHash: hashPassword(process.env.ANALYST_PASSWORD ?? 'change-me-analyst'),
        name: 'SOC Analyst',
        role: 'analyst',
      },
    ];

    for (const u of seeds) {
      await sql`
        INSERT INTO admin_users (id, email, password_hash, name, role)
        VALUES (${u.id}, ${u.email}, ${u.passwordHash}, ${u.name}, ${u.role})
        ON CONFLICT (id) DO NOTHING
      `;
    }

    console.log('[migrate] Seeded 3 default admin users. Rotate passwords immediately.');
  } else {
    console.log(`[migrate] ${count} admin user(s) already exist — skipping seed.`);
  }

  await sql.end();
  console.log('[migrate] Done.');
}

// Run when executed directly (npm run db:migrate)
migrate().catch((err: unknown) => {
  console.error('[migrate] FATAL:', err);
  process.exit(1);
});
