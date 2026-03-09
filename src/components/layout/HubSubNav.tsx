"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HUB_SUBNAV = [
  { label: 'Overview',    href: '/hub' },
  { label: 'SOC',         href: '/hub/soc' },
  { label: 'Assessments', href: '/hub/assessments' },
  { label: 'Compliance',  href: '/hub/compliance' },
  { label: 'Research',    href: '/hub/research' },
  { label: 'Portfolio',   href: '/hub/portfolio' },
];

export default function HubSubNav() {
  const pathname = usePathname();

  const items = HUB_SUBNAV.map((item) => {
    const isActive =
      item.href === '/hub'
        ? pathname === '/hub'
        : pathname === item.href || pathname.startsWith(item.href + '/');
    return { ...item, isActive };
  });

  return (
    <>
      {/* Desktop sub-navigation bar pinned below top nav (64px) */}
      <div
        className="fixed inset-x-0 top-16 z-40 hidden lg:block
                   bg-slate-900/90 backdrop-blur-md border-b border-slate-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 h-10 overflow-x-auto">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition',
                  item.isActive
                    ? 'bg-cyan-500/15 text-cyan-300'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800',
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile horizontally-scrollable sub-nav */}
      <div
        className="lg:hidden sticky top-16 z-40
                   bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
      >
        <div className="flex gap-1 px-4 py-2 overflow-x-auto">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                'px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap flex-shrink-0 transition',
                item.isActive
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 bg-slate-800 hover:text-slate-200',
              ].join(' ')}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
