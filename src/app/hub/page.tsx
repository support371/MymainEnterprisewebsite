import type { Metadata } from 'next';
import { BarChart3, BookOpenCheck, ClipboardList, FileCheck2, ShieldCheck } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Hub | GEM Cyber',
  description: 'GEM CYBER operations hub — SOC, assessments, compliance, research, and portfolio domains.',
};

const hubModules = [
  {
    title: 'Security Operations Center',
    description: 'Threat monitoring and incident response, unified under one command surface.',
    outcomes: ['24/7 detection', 'AI-powered analysis', 'Playbook-driven response'],
    ctaLabel: 'Open SOC',
    href: '/hub/soc',
    icon: ShieldCheck,
  },
  {
    title: 'Security Assessments',
    description: 'Risk baseline, compliance gap analysis, and architecture review programs.',
    outcomes: ['Risk baseline report', 'Compliance gap analysis', 'Architecture review', 'Remediation roadmap'],
    ctaLabel: 'View Assessments',
    href: '/hub/assessments',
    icon: ClipboardList,
  },
  {
    title: 'Compliance Operations',
    description: 'Federal controls, NIST alignment, and audit readiness lifecycle.',
    outcomes: ['CMMC 2.0', 'SOC 2', 'GDPR / CCPA', 'FedRAMP'],
    ctaLabel: 'View Compliance',
    href: '/hub/compliance',
    icon: FileCheck2,
  },
  {
    title: 'Research & Architecture',
    description: 'Technical specs, architecture documentation, and platform roadmap.',
    outcomes: ['Architecture diagrams', 'Technical specs', 'Platform roadmap'],
    ctaLabel: 'View Research',
    href: '/hub/research',
    icon: BookOpenCheck,
  },
  {
    title: 'Portfolio Management',
    description: 'Asset portfolio dashboard with security status and coverage reporting.',
    outcomes: ['$52.4M assets', '245 digital', '8 properties'],
    ctaLabel: 'Open Portfolio',
    href: '/hub/portfolio',
    icon: BarChart3,
  },
];

export default function HubPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Domain overview strip */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Hub Overview</p>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
            {hubModules.map((m) => (
              <div
                key={m.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center
                           hover:border-cyan-500/30 transition"
              >
                <m.icon className="h-5 w-5 text-cyan-300 mx-auto mb-1" />
                <div className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight">
                  {m.title.split(' ')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page header */}
      <section className="py-10 container mx-auto px-4">
        <h1 className="text-3xl font-bold">Operations Hub</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Select a domain surface to explore capabilities, operational resources, and platform controls.
        </p>
      </section>

      {/* Module card feed */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hubModules.map((m) => (
            <PlatformModuleCard key={m.title} {...m} />
          ))}
        </div>
      </section>
    </div>
  );
}
