export class DbNotConfiguredError extends Error {
  constructor() {
    super(
      'DATABASE_URL is not configured. ' +
        'Add it to .env.local for local development, or to your Vercel project ' +
        'environment variables before using this feature.',
    );
    this.name = 'DbNotConfiguredError';
  }
}

export function isDbNotConfigured(err: unknown): boolean {
  return err instanceof DbNotConfiguredError;
}
