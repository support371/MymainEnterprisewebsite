import type { Metadata } from 'next';
import { BarChart3, Shield } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Portfolio | Hub | GEM Cyber',
  description: 'Asset portfolio dashboard with security status and QFS integration.',
};

const kpis = [
  { label: 'Total AUM',      value: '$52.4M' },
  { label: 'Digital Assets', value: '245' },
  { label: 'Properties',     value: '8' },
  { label: 'Uptime',         value: '99.97%' },
];

const modules = [
  {
    title: 'Portfolio Dashboard',
    description: 'Security status overview across digital and physical asset classes.',
    outcomes: ['All systems operational', '24/7 monitoring', 'Compliance up to date'],
    ctaLabel: 'Open Dashboard',
    href: '/portfolio',
    icon: BarChart3,
  },
  {
    title: 'QFS Integration',
    description: 'Quantum-secure financial infrastructure for high-value transaction monitoring.',
    outcomes: ['100K+ TPS', '<50ms latency', '99.99% SLA'],
    ctaLabel: 'QFS Details',
    href: '/qfs',
    icon: Shield,
  },
];

export default function HubPortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Portfolio Snapshot</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center
                           hover:border-cyan-500/30 transition"
              >
                <div className="text-2xl font-bold text-cyan-300">{kpi.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page header */}
      <section className="py-10 container mx-auto px-4">
        <h1 className="text-3xl font-bold">Portfolio Management</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Unified security posture and asset management across digital and physical portfolios.
        </p>
      </section>

      {/* Module card feed */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid gap-5 md:grid-cols-2">
          {modules.map((m) => (
            <PlatformModuleCard key={m.title} {...m} />
          ))}
        </div>
      </section>
    </div>
  );
}
