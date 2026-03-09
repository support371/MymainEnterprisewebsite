"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_TABS } from '@/lib/navTabs';

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-50
                 bg-slate-950/95 border-t border-slate-700/60 backdrop-blur-md"
    >
      <div className="grid grid-cols-5 h-16">
        {NAV_TABS.map((tab) => {
          const isActive =
            tab.activeMatch === '/hub'
              ? pathname.startsWith('/hub')
              : pathname === tab.activeMatch || pathname.startsWith(tab.activeMatch + '/');

          const Icon = tab.icon;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={isActive ? 'page' : undefined}
              className={[
                'flex flex-col items-center justify-center gap-0.5 relative transition',
                isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-200',
              ].join(' ')}
            >
              {/* Active indicator bar at top of tab */}
              {isActive && (
                <span
                  className="absolute top-0 left-3 right-3 h-0.5 rounded-full bg-cyan-400"
                  aria-hidden="true"
                />
              )}
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium tracking-wide">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
