"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2 } from 'lucide-react';

const allianceNav = [
  { label: 'About',               href: '/alliance-trust-realty/about' },
  { label: 'Services',            href: '/alliance-trust-realty/services' },
  { label: 'Properties',          href: '/alliance-trust-realty/properties' },
  { label: 'Investment Advisory', href: '/alliance-trust-realty/investment-advisory' },
  { label: 'Mortgage Guidance',   href: '/alliance-trust-realty/mortgage-guidance' },
  { label: 'Education',           href: '/alliance-trust-realty/investor-education' },
  { label: 'Contact',             href: '/alliance-trust-realty/contact' },
];

export default function AllianceHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-16 z-40 border-b border-amber-800/30 bg-slate-900/95 backdrop-blur-md">
      {/* Brand banner */}
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/alliance-trust-realty" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_14px_rgba(251,191,36,0.4)]">
            <Building2 className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-wide text-amber-300 leading-none">Alliance Trust Realty</p>
            <p className="text-[10px] text-slate-400 leading-none mt-0.5">Licensed Real Estate Professionals</p>
          </div>
        </Link>

        <Link
          href="/alliance-trust-realty/portal"
          className="hidden sm:inline-flex items-center rounded-lg border border-amber-600/40 bg-amber-600/10 px-3 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-600/20 transition"
        >
          Client Portal
        </Link>
      </div>

      {/* Navigation */}
      <nav className="overflow-x-auto border-t border-amber-800/20 px-6">
        <ul className="flex items-center gap-0.5 min-w-max">
          {allianceNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    'block px-3 py-2.5 text-xs font-medium transition whitespace-nowrap',
                    active
                      ? 'text-amber-300 border-b-2 border-amber-400'
                      : 'text-slate-400 hover:text-amber-200',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
