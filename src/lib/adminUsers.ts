import crypto from 'node:crypto';
import { getDb } from './db/index';

export type AdminRole = 'super_admin' | 'admin' | 'analyst' | 'auditor';

export interface AdminUser {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role: AdminRole;
  active: boolean;
}

// ── Password utilities ────────────────────────────────────────────────────────

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, passwordHash: string): boolean {
  const [salt, storedHash] = passwordHash.split(':');
  if (!salt || !storedHash) return false;
  const computedHash = crypto.scryptSync(password, salt, 64).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(storedHash, 'hex'), Buffer.from(computedHash, 'hex'));
}

// ── DB row mapping ────────────────────────────────────────────────────────────

type DbRow = {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  role: AdminRole;
  active: boolean;
};

function rowToUser(row: DbRow): AdminUser {
  return {
    id: row.id,
    email: row.email,
    passwordHash: row.password_hash,
    name: row.name,
    role: row.role,
    active: row.active,
  };
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function listAdminUsers(): Promise<AdminUser[]> {
  const sql = getDb();
  const rows = await sql<DbRow[]>`
    SELECT id, email, password_hash, name, role, active
    FROM admin_users
    ORDER BY id
  `;
  return rows.map(rowToUser);
}

export async function authenticateUser(email: string, password: string): Promise<AdminUser | null> {
  const sql = getDb();
  const rows = await sql<DbRow[]>`
    SELECT id, email, password_hash, name, role, active
    FROM admin_users
    WHERE lower(email) = lower(${email.trim()})
      AND active = true
    LIMIT 1
  `;
  if (!rows.length) return null;
  const user = rowToUser(rows[0]);
  return verifyPassword(password, user.passwordHash) ? user : null;
}

export async function createAdminUser(input: {
  email: string;
  password: string;
  name: string;
  role: AdminRole;
}): Promise<AdminUser> {
  const sql = getDb();
  const rows = await sql<DbRow[]>`
    INSERT INTO admin_users (id, email, password_hash, name, role)
    VALUES (
      ${'U-' + Date.now()},
      ${input.email.trim().toLowerCase()},
      ${hashPassword(input.password)},
      ${input.name},
      ${input.role}
    )
    RETURNING id, email, password_hash, name, role, active
  `;
  return rowToUser(rows[0]);
}

export async function updateAdminUser(
  id: string,
  updates: Partial<Pick<AdminUser, 'name' | 'role' | 'active'>>,
): Promise<AdminUser | null> {
  const sql = getDb();

  // Fetch current state, then write merged record — keeps UPDATE simple and type-safe
  const current = await sql<DbRow[]>`
    SELECT id, email, password_hash, name, role, active
    FROM admin_users WHERE id = ${id}
  `;
  if (!current.length) return null;

  const cur = rowToUser(current[0]);
  const rows = await sql<DbRow[]>`
    UPDATE admin_users
    SET
      name       = ${updates.name       ?? cur.name},
      role       = ${updates.role       ?? cur.role},
      active     = ${updates.active     ?? cur.active},
      updated_at = now()
    WHERE id = ${id}
    RETURNING id, email, password_hash, name, role, active
  `;
  return rows.length ? rowToUser(rows[0]) : null;
}

export async function changeAdminPassword(id: string, newPassword: string): Promise<boolean> {
  const sql = getDb();
  const result = await sql`
    UPDATE admin_users
    SET password_hash = ${hashPassword(newPassword)}, updated_at = now()
    WHERE id = ${id}
  `;
  return result.count > 0;
}
