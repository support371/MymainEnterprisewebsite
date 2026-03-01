import type { Metadata } from 'next';
import { Radar, ShieldAlert, Siren, Workflow } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const metadata: Metadata = {
  title: 'Intel',
  description: 'Threat and regulatory intelligence command center for GEM CYBER.',
};

const kpis = [
  { label: 'Active Threat Feeds', value: '12' },
  { label: 'Indicators Today',    value: '8,400+' },
  { label: 'Analyst Playbooks',   value: '34' },
  { label: 'Exec Briefings / Mo', value: '4' },
];

const modules = [
  {
    title: 'Threat Feed Operations',
    description: 'Normalize and score intelligence before analyst review.',
    outcomes: ['Feed quality scoring', 'Duplicate suppression', 'Source confidence weighting'],
    ctaLabel: 'Explore Feeds',
    href: '/intelligence',
    icon: Radar,
  },
  {
    title: 'Critical Alert Routing',
    description: 'Ensure high-risk indicators trigger the right response team immediately.',
    outcomes: ['Risk-based routing', 'Channel escalation mapping', 'Coverage by severity tier'],
    ctaLabel: 'View Routing Rules',
    href: '/hub/soc',
    icon: Siren,
  },
  {
    title: 'Analyst Playbooks',
    description: 'Codified triage and remediation guidance across recurring events.',
    outcomes: ['Guided containment steps', 'Root-cause capture', 'Post-incident recommendations'],
    ctaLabel: 'Browse Playbooks',
    href: '/hub/research',
    icon: Workflow,
  },
  {
    title: 'Executive Risk Briefing',
    description: 'Translate telemetry into business-impact reporting.',
    outcomes: ['Weekly risk brief', 'Asset-level heatmap', 'Mitigation trendline'],
    ctaLabel: 'View Briefings',
    href: '/leadership',
    icon: ShieldAlert,
  },
];

export default function IntelPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Intelligence Snapshot</p>
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
        <h1 className="text-3xl font-bold">Intelligence Platform</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          From ingestion to executive briefing — clear context and response priorities for cyber and compliance leaders.
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
