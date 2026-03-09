export const appEnv = {
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'GEM CYBER',
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? 'admin@gemcybersecurityassist.com',
  supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? '(860) 305-4376',
  dataProviderApiKey: process.env.DATA_PROVIDER_API_KEY ?? '',
  newsIngestionWebhookSecret: process.env.NEWS_INGESTION_WEBHOOK_SECRET ?? '',
  emailProviderApiKey: process.env.EMAIL_PROVIDER_API_KEY ?? '',
  emailSendingDomain: process.env.EMAIL_SENDING_DOMAIN ?? '',
  databaseUrl: process.env.DATABASE_URL ?? '',
  auditLogSink: process.env.AUDIT_LOG_SINK ?? '',
};

/** Returns true when DATABASE_URL is set — use for feature-gating DB-backed paths. */
export function isDatabaseConfigured(): boolean {
  return Boolean(
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.POSTGRES_URL
  );
}

/**
 * Validate that all required production environment variables are present.
 * Call during startup in long-running server mode; skip in build/static contexts.
 */
export function assertProductionEnv(): void {
  const required: [string, string][] = [
    ['DATABASE_URL', 'PostgreSQL connection string'],
    ['ADMIN_AUTH_SECRET', 'HMAC secret for session tokens'],
  ];

  const missing = required.filter(([key]) => !process.env[key]);

  if (missing.length > 0) {
    const lines = missing.map(([key, desc]) => `  • ${key} — ${desc}`).join('\n');
    throw new Error(`[env] Missing required environment variables:\n${lines}`);
  }

  if (process.env.ADMIN_AUTH_SECRET === 'change-me-auth-secret') {
    throw new Error('[env] ADMIN_AUTH_SECRET is still set to the default placeholder. Rotate it before going live.');
  }
}
