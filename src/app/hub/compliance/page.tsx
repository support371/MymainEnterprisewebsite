import type { Metadata } from 'next';
import { Award, Landmark } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Compliance | Hub | GEM Cyber',
  description: 'Federal controls, NIST alignment, and audit readiness lifecycle.',
};

const kpis = [
  { label: 'Active Frameworks', value: '6' },
  { label: 'Controls Active',   value: '312' },
  { label: 'Evidence Items',    value: '1,800+' },
  { label: 'Audit Findings',    value: '0' },
];

const modules = [
  {
    title: 'Compliance Management',
    description: 'Strategic frameworks for regulatory compliance and enterprise risk reduction.',
    outcomes: ['SOC 2 Type II', 'ISO 27001', 'NIST alignment', 'FedRAMP support'],
    ctaLabel: 'View Compliance',
    href: '/services/compliance-management',
    icon: Award,
  },
  {
    title: 'Federal Compliance',
    description: 'High-stakes regulatory environments including NIST, CMMC, GDPR, and localized federal regulations.',
    outcomes: ['NIST SP 800-171', 'CMMC 2.0', 'GDPR / CCPA', 'ISO 27001'],
    ctaLabel: 'Federal Standards',
    href: '/services/federal-compliance',
    icon: Landmark,
  },
];

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Compliance Snapshot</p>
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
        <h1 className="text-3xl font-bold">Compliance Operations</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Federal-grade controls alignment and audit readiness lifecycle — built for the hybrid enterprise.
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
