import Link from 'next/link';
import type { ReactNode } from 'react';
import { getCurrentAdminSession } from '@/lib/adminAuth';
import {
  Archive,
  AlertTriangle,
  Building2,
  FileText,
  Inbox,
  LayoutDashboard,
  Radar,
  Settings,
  Shield,
  Users,
} from 'lucide-react';

const baseNavItems = [
  { href: '/admin/inbox',         label: 'Inbox',       icon: Inbox },
  { href: '/admin/intel',         label: 'Intel Ops',   icon: Radar },
  { href: '/admin/assets',        label: 'Assets',      icon: Archive },
  { href: '/admin/incidents',     label: 'Incidents',   icon: AlertTriangle },
  { href: '/admin/clients',       label: 'Clients',     icon: Building2 },
  { href: '/admin/teams',         label: 'Teams',       icon: Users },
  { href: '/admin/organizations', label: 'Orgs',        icon: LayoutDashboard },
  { href: '/admin/grants',        label: 'Grants',      icon: FileText },
  { href: '/admin/diagnostics',   label: 'Diagnostics', icon: Settings },
];

const superAdminItems = [
  { href: '/admin/users', label: 'Users', icon: Shield },
];

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getCurrentAdminSession();

  const navItems = [
    ...baseNavItems,
    ...(session?.role === 'super_admin' ? superAdminItems : []),
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Admin top bar */}
      <div className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-16 z-30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 border border-cyan-500/30">
              <Shield className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-base font-semibold leading-none">Admin Center</h1>
              <p className="text-[11px] text-slate-400 mt-0.5">Enterprise operations and governance</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-cyan-300">{session?.name ?? 'Authenticated User'}</p>
              <p className="text-xs text-slate-400">{session?.email} · {session?.role}</p>
            </div>
          </div>
          <form action="/api/admin/logout" method="post">
            <button className="px-3 py-1.5 text-xs rounded-md border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition">
              Log out
            </button>
          </form>
        </div>
      </div>

      {/* Main layout */}
      <div className="container mx-auto px-4 py-6 grid lg:grid-cols-[220px_1fr] gap-6">

        {/* Sidebar */}
        <aside className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 h-fit sticky top-36">
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500 px-3 mb-2">Navigation</p>
          <nav className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-300 transition text-sm"
                >
                  <Icon className="h-4 w-4 flex-none opacity-70" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <main className="space-y-6 min-w-0">{children}</main>
      </div>
    </div>
  );
}
