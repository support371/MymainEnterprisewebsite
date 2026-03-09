import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db/index';

type DbStatus = 'ok' | 'unconfigured' | 'error';

export async function GET() {
  const dbConfigured = Boolean(process.env.DATABASE_URL);
  let dbStatus: DbStatus = 'unconfigured';
  let dbError: string | undefined;

  if (dbConfigured) {
    try {
      const sql = getDb();
      await sql`SELECT 1`;
      dbStatus = 'ok';
    } catch (err) {
      dbStatus = 'error';
      dbError = err instanceof Error ? err.message : 'Unknown database error';
      console.error('[health] Database connectivity check failed:', err);
    }
  }

  const healthy = dbStatus !== 'error';

  return NextResponse.json(
    {
      ok: healthy,
      service: 'gem-cyber-web',
      timestamp: new Date().toISOString(),
      database: {
        status: dbStatus,
        ...(dbError ? { error: dbError } : {}),
      },
      env: {
        smtp: Boolean(process.env.SMTP_USER && process.env.SMTP_PASS),
        adminAuthSecret:
          process.env.ADMIN_AUTH_SECRET !== undefined &&
          process.env.ADMIN_AUTH_SECRET !== 'change-me-auth-secret',
      },
    },
    { status: healthy ? 200 : 503 },
  );
}
