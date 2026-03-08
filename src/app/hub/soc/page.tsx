import type { Metadata } from 'next';
import { AlertTriangle, Shield } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'SOC | Hub | GEM Cyber',
  description: 'Security Operations Center — threat monitoring and incident response.',
};

const kpis = [
  { label: 'Alerts Today',    value: '1,247' },
  { label: 'MTTR',            value: '<2 min' },
  { label: 'Coverage Uptime', value: '99.97%' },
  { label: 'Open Incidents',  value: '3' },
];

const modules = [
  {
    title: '24/7 Threat Monitoring',
    description: 'Continuous AI-powered surveillance of your entire digital perimeter.',
    outcomes: ['Real-time SIEM', 'AI behavior analysis', 'Global threat intelligence', 'Automated prioritization'],
    ctaLabel: 'View Threat Monitoring',
    href: '/services/threat-monitoring',
    icon: Shield,
  },
  {
    title: 'Incident Response',
    description: 'Rapid containment and remediation with full forensic documentation.',
    outcomes: ['2-min response SLA', 'Digital forensics', 'Containment playbooks', '24/7 hotline'],
    ctaLabel: 'View Incident Response',
    href: '/services/incident-response',
    icon: AlertTriangle,
  },
];

export default function SocPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">SOC Snapshot</p>
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
        <h1 className="text-3xl font-bold">Security Operations Center</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Continuous monitoring and coordinated incident response — unified under one command surface.
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
