import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileCheck2, Landmark, ShieldCheck } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Federal Compliance | Compliance | Hub | GEM Cyber',
  description: 'Federal compliance operations — NIST SP 800-171, CMMC 2.0, FedRAMP, GDPR, and CCPA for regulated environments.',
};

const kpis = [
  { label: 'Federal Frameworks', value: '6' },
  { label: 'Controls Mapped',    value: '312' },
  { label: 'Evidence Items',     value: '1,800+' },
  { label: 'Audit Findings',     value: '0' },
];

const frameworks = [
  {
    name: 'CMMC 2.0',
    fullName: 'Cybersecurity Maturity Model Certification',
    level: 'Level 1–3 support',
    description: 'Full CMMC 2.0 readiness support for DoD contractors — gap assessment, remediation, and certification preparation.',
    controls: ['Access Control', 'Incident Response', 'Audit & Accountability', 'Configuration Management'],
    icon: ShieldCheck,
  },
  {
    name: 'NIST SP 800-171',
    fullName: 'Protecting Controlled Unclassified Information',
    level: '110 controls',
    description: 'Complete implementation and assessment support for NIST 800-171 — the foundation of CUI protection for federal contractors.',
    controls: ['Access Control', 'Identification & Authentication', 'System & Communications', 'Risk Assessment'],
    icon: Landmark,
  },
  {
    name: 'FedRAMP',
    fullName: 'Federal Risk and Authorization Management Program',
    level: 'Advisory support',
    description: 'Strategic advisory and documentation support for cloud service providers pursuing FedRAMP authorization.',
    controls: ['System Security Plan', 'POA&M Management', 'Continuous Monitoring', 'Authorization Support'],
    icon: FileCheck2,
  },
  {
    name: 'GDPR / CCPA',
    fullName: 'Data Privacy Regulations',
    level: 'Full lifecycle',
    description: 'Privacy compliance program implementation for GDPR (EU) and CCPA (California) — data mapping through DPA readiness.',
    controls: ['Data Mapping', 'Privacy Impact Assessment', 'Consent Management', 'Breach Notification'],
    icon: ShieldCheck,
  },
];

const timeline = [
  { phase: 'Gap Assessment', duration: '2 weeks', desc: 'Identify control gaps against target federal framework.' },
  { phase: 'Remediation Planning', duration: '1 week', desc: 'Prioritized plan with owner assignments and timelines.' },
  { phase: 'Control Implementation', duration: '4–12 weeks', desc: 'Hands-on or advisory support for control implementation.' },
  { phase: 'Evidence Collection', duration: 'Ongoing', desc: 'Automated evidence collection and documentation packaging.' },
  { phase: 'Audit Support', duration: 'As needed', desc: 'Auditor liaison, evidence presentation, and finding response.' },
];

export default function FederalCompliancePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Federal Compliance Snapshot</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-500/30 transition">
                <div className="text-2xl font-bold text-cyan-300">{kpi.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-10 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 text-xs text-slate-400 mb-4">
            <Link href="/hub" className="hover:text-cyan-300 transition">Hub</Link>
            <span>/</span>
            <Link href="/hub/compliance" className="hover:text-cyan-300 transition">Compliance</Link>
            <span>/</span>
            <span className="text-slate-300">Federal</span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">Federal Compliance</h1>
          <p className="mt-3 max-w-2xl text-slate-300 leading-relaxed">
            High-stakes regulatory compliance for federal contractors, defense supply chain, and regulated enterprises —
            CMMC 2.0, NIST SP 800-171, FedRAMP, and privacy frameworks, fully supported.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/hub/assessments"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Start Compliance Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/hub/compliance" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-500/40 transition">
              Compliance Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-16 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Supported Frameworks</p>
          <h2 className="text-2xl font-bold mb-8">Federal and privacy frameworks</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {frameworks.map((fw) => {
              const Icon = fw.icon;
              return (
                <article key={fw.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/40 transition">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-300 flex-none">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold">{fw.name}</h3>
                        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-300">
                          {fw.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 mb-2">{fw.fullName}</p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-3">{fw.description}</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {fw.controls.map((ctrl) => (
                          <div key={ctrl} className="flex gap-1.5 text-xs text-slate-300">
                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 flex-none mt-0.5" />
                            {ctrl}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Engagement Model</p>
          <h2 className="text-2xl font-bold mb-8">Compliance program timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-800 hidden sm:block" />
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={t.phase} className="flex gap-5 items-start">
                  <div className="relative z-10 h-8 w-8 rounded-full border border-cyan-500/40 bg-slate-900 flex items-center justify-center flex-none">
                    <span className="text-xs font-bold text-cyan-300">{i + 1}</span>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex-1">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <h3 className="font-semibold">{t.phase}</h3>
                      <span className="text-xs text-slate-400 border border-slate-700 rounded-full px-2.5 py-0.5">{t.duration}</span>
                    </div>
                    <p className="text-sm text-slate-300 mt-1">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
