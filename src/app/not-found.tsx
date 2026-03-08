export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { Home, ShieldCheck } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
        <div className="text-6xl font-bold text-cyan-400 mb-4">404</div>
        <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950"
          >
            <Home className="h-4 w-4" />
            Go to Home
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
