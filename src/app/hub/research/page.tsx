import type { Metadata } from 'next';
import { BookOpen, FileText, Layers, Map } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const metadata: Metadata = {
  title: 'Research | Hub | GEM Cyber',
  description: 'Platform architecture documentation and technical specifications.',
};

const kpis = [
  { label: 'Specs Documented',   value: '28' },
  { label: 'Architecture Views', value: '6' },
  { label: 'Roadmap Items',      value: '14' },
  { label: 'API Surfaces',       value: '7' },
];

const modules = [
  {
    title: 'Architecture Specifications',
    description: 'Technical architecture and backend surface documentation.',
    outcomes: ['System design', 'Data models', 'Integration specs'],
    ctaLabel: 'View Specs',
    href: '/specs',
    icon: Layers,
  },
  {
    title: 'Platform Architecture',
    description: 'Unified view of the GEM CYBER platform design and component topology.',
    outcomes: ['Component diagrams', 'Service topology', 'Data flow maps'],
    ctaLabel: 'View Architecture',
    href: '/architecture',
    icon: BookOpen,
  },
  {
    title: 'Delivery Roadmap',
    description: 'Platform delivery timeline, milestones, and release trajectory.',
    outcomes: ['Phase milestones', 'Feature releases', 'Integration targets'],
    ctaLabel: 'View Roadmap',
    href: '/roadmap',
    icon: Map,
  },
  {
    title: 'Route Directory',
    description: 'Published frontend and backend URL registry for the entire platform.',
    outcomes: ['All route categories', 'API surfaces', 'Status indicators'],
    ctaLabel: 'Browse Routes',
    href: '/routes',
    icon: FileText,
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Research Snapshot</p>
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
        <h1 className="text-3xl font-bold">Research & Architecture</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Technical documentation, architecture specs, and platform roadmap.
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
