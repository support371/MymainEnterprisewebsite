import type { Metadata } from 'next';
import { BarChart3, Building2, Search, Shield } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const metadata: Metadata = {
  title: 'Assets',
  description: 'Enterprise asset recovery, portfolio security, and physical asset protection.',
};

const kpis = [
  { label: 'Value Recovered',  value: '$12M+' },
  { label: 'Asset Classes',    value: '4' },
  { label: 'Countries',        value: '24+' },
  { label: 'Audit Success',    value: '100%' },
];

const modules = [
  {
    title: 'Asset Recovery Operations',
    description: 'Forensic-level tracking and recovery of high-value corporate assets across jurisdictions.',
    outcomes: ['International liaison', 'Legal coordination', 'Chain of custody docs'],
    ctaLabel: 'Explore Recovery',
    href: '/services/asset-recovery',
    icon: Search,
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Security status overview for digital and physical asset portfolios.',
    outcomes: ['245 digital assets', '8 properties', '99.97% uptime'],
    ctaLabel: 'View Portfolio',
    href: '/portfolio',
    icon: BarChart3,
  },
  {
    title: 'Physical Asset Protection',
    description: 'High-end physical security protocols for corporate real estate holdings.',
    outcomes: ['Property protection', 'Portfolio audits', 'Valuation monitoring'],
    ctaLabel: 'Alliance Trust',
    href: '/bridge/alliance-trust',
    icon: Building2,
  },
  {
    title: 'Quantum-Secure Finance',
    description: 'Military-level security for high-value transaction infrastructure.',
    outcomes: ['100K+ TPS', '<50ms latency', '99.99% uptime SLA'],
    ctaLabel: 'QFS Details',
    href: '/qfs',
    icon: Shield,
  },
];

export default function AssetsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Assets Snapshot</p>
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
        <h1 className="text-3xl font-bold">Asset Management</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Enterprise asset recovery and portfolio protection — physical and digital assets, unified under one security posture.
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
