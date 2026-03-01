"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield } from 'lucide-react';
import { NAV_TABS } from '@/lib/navTabs';

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header
      className="hidden lg:flex fixed inset-x-0 top-0 z-50 h-16 items-center
                 border-b border-slate-700/60 bg-slate-950/85 backdrop-blur-md px-6 gap-6"
    >
      {/* Logo */}
      <Link href="/home" className="inline-flex items-center gap-2 mr-4 flex-shrink-0">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg
                     bg-gradient-to-br from-cyan-400 to-sky-500
                     shadow-[0_0_18px_rgba(0,212,255,0.35)]"
        >
          <Shield className="h-5 w-5 text-white" />
        </div>
        <span className="text-sm font-semibold tracking-wide text-white">GEM CYBER</span>
      </Link>

      {/* Primary tab links */}
      <nav className="flex items-center gap-1 flex-1">
        {NAV_TABS.map((tab) => {
          const isActive =
            tab.activeMatch === '/hub'
              ? pathname.startsWith('/hub')
              : pathname === tab.activeMatch || pathname.startsWith(tab.activeMatch + '/');

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={[
                'relative px-4 py-2 text-sm font-medium rounded-lg transition',
                'hover:text-cyan-300 hover:bg-slate-800/60',
                isActive
                  ? 'text-cyan-300 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-cyan-400'
                  : 'text-slate-300',
              ].join(' ')}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>

      {/* Right side: CTA + Admin */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <Link
          href="/admin"
          className={[
            'text-xs font-medium transition',
            pathname.startsWith('/admin') ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-200',
          ].join(' ')}
        >
          Admin
        </Link>
        <Link
          href="/contact-us"
          className="rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500
                     px-4 py-2 text-sm font-semibold text-slate-950
                     shadow-[0_0_20px_rgba(0,212,255,0.35)]
                     hover:from-cyan-300 hover:to-sky-400 transition"
        >
          Security Audit
        </Link>
      </div>
    </header>
  );
}
