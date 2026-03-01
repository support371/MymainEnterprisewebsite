import type { Metadata } from 'next';
import { Building2, Lock } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const metadata: Metadata = {
  title: 'Real Estate | Hub | GEM Cyber',
  description: 'Alliance Trust Realty and Cyber Sentinel zero-trust framework.',
};

const kpis = [
  { label: 'Properties',          value: '8' },
  { label: 'AUM',                  value: '$52.4M' },
  { label: 'Zero Trust Pillars',   value: '6' },
  { label: 'Countries',            value: '24+' },
];

const modules = [
  {
    title: 'Alliance Trust Realty',
    description: 'Physical asset management and recovery services under the GEM Enterprise umbrella.',
    outcomes: ['High-value property protection', 'Asset recovery & liquidation', 'Portfolio security audits'],
    ctaLabel: 'Alliance Trust',
    href: '/bridge/alliance-trust',
    icon: Building2,
  },
  {
    title: 'Cyber Sentinel Trust',
    description: 'Enterprise zero-trust security framework eliminating implicit trust across the network.',
    outcomes: ['Identity verification', 'Micro-segmentation', 'Continuous monitoring', 'Data classification'],
    ctaLabel: 'Sentinel Framework',
    href: '/cyber-sentinel-trust',
    icon: Lock,
  },
];

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Real Estate Snapshot</p>
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
        <h1 className="text-3xl font-bold">Real Estate & Trust</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Physical asset protection through Alliance Trust Realty, plus zero-trust security via the Cyber Sentinel framework.
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
