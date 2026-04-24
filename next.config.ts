import type { NextConfig } from 'next';
import { legacyRedirects } from './src/lib/siteRoutes';

const enterpriseOrigin = process.env.GEM_ENTERPRISE_ORIGIN?.replace(/\/$/, '');

const enterprisePlatformRedirects = [
  { source: '/login', destination: '/client-login', permanent: false },
  { source: '/register', destination: '/get-started', permanent: false },
  { source: '/apply', destination: '/get-started', permanent: false },
  { source: '/dashboard', destination: '/app/dashboard', permanent: false },
  { source: '/portal', destination: '/app/dashboard', permanent: false },
  { source: '/admin', destination: '/app/admin', permanent: false },
  { source: '/profile', destination: '/app/profile', permanent: false },
  { source: '/settings', destination: '/app/settings', permanent: false },
  { source: '/support', destination: '/app/support', permanent: false },
];

const enterprisePlatformRewrites = enterpriseOrigin
  ? [
      { source: '/get-started', destination: `${enterpriseOrigin}/get-started` },
      { source: '/client-login', destination: `${enterpriseOrigin}/client-login` },
      { source: '/access/:path*', destination: `${enterpriseOrigin}/access/:path*` },
      { source: '/kyc/:path*', destination: `${enterpriseOrigin}/kyc/:path*` },
      { source: '/decision/:path*', destination: `${enterpriseOrigin}/decision/:path*` },
      { source: '/app/:path*', destination: `${enterpriseOrigin}/app/:path*` },
      { source: '/api/auth/:path*', destination: `${enterpriseOrigin}/api/auth/:path*` },
      { source: '/api/kyc/:path*', destination: `${enterpriseOrigin}/api/kyc/:path*` },
      { source: '/api/admin/:path*', destination: `${enterpriseOrigin}/api/admin/:path*` },
      { source: '/api/support/:path*', destination: `${enterpriseOrigin}/api/support/:path*` },
      { source: '/api/requests/:path*', destination: `${enterpriseOrigin}/api/requests/:path*` },
      { source: '/api/users/:path*', destination: `${enterpriseOrigin}/api/users/:path*` },
      { source: '/api/notifications/:path*', destination: `${enterpriseOrigin}/api/notifications/:path*` },
    ]
  : [];

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  async redirects() {
    return [
      ...enterprisePlatformRedirects,
      ...legacyRedirects.map((redirect) => ({
        source: redirect.source,
        destination: redirect.destination,
        permanent: redirect.permanent,
      })),
    ];
  },
  async rewrites() {
    return {
      beforeFiles: enterprisePlatformRewrites,
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
