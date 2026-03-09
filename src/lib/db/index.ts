import postgres from 'postgres';
import { DbNotConfiguredError } from './errors';

// Module-level singleton — one connection per serverless cold-start.
// `max: 1` is critical for serverless: each function instance holds at most
// one TCP connection, preventing connection exhaustion on Vercel / Lambda.
let _sql: ReturnType<typeof postgres> | null = null;

export function getDb(): ReturnType<typeof postgres> {
  if (_sql) return _sql;

  // Accept DATABASE_URL or the Vercel Postgres / Supabase integration env vars as fallback.
  const url = process.env.DATABASE_URL
    || process.env.POSTGRES_URL_NON_POOLING
    || process.env.POSTGRES_URL;
  if (!url) throw new DbNotConfiguredError();

  _sql = postgres(url, {
    max: 1,
    idle_timeout: 20,   // close idle connections after 20 s
    connect_timeout: 10, // fail fast rather than hanging
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  return _sql;
}

// Re-export the error types so callers can import from one place.
export { DbNotConfiguredError, isDbNotConfigured } from './errors';
