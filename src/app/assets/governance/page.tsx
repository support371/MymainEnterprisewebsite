import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileCheck2, Lock, ShieldCheck, ClipboardList } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Asset Governance',
  description: 'Enterprise asset governance frameworks, audit trails, and compliance lifecycle for digital and physical assets.',
};

const kpis = [
  { label: 'Governed Assets',   value: '245+' },
  { label: 'Audit Success',     value: '100%' },
  { label: 'Policy Frameworks', value: '8' },
  { label: 'Risk Reviews / Qtr', value: '12' },
];

const frameworks = [
  {
    title: 'Asset Classification Policy',
    description: 'Structured classification tiers for digital, physical, and financial assets with data sensitivity mapping.',
    icon: ClipboardList,
    tags: ['Critical', 'Confidential', 'Internal', 'Public'],
  },
  {
    title: 'Access Control & Custody',
    description: 'Role-based access control for all asset classes with complete chain-of-custody documentation.',
    icon: Lock,
    tags: ['RBAC', 'Audit Logs', 'Chain of Custody', 'PAM Integration'],
  },
  {
    title: 'Compliance Alignment',
    description: 'Asset governance controls mapped to SOC 2, ISO 27001, NIST 800-53, and CMMC 2.0 frameworks.',
    icon: FileCheck2,
    tags: ['SOC 2', 'NIST', 'CMMC 2.0', 'ISO 27001'],
  },
  {
    title: 'Continuous Audit Readiness',
    description: 'Automated evidence collection, asset status tracking, and audit-trail integrity for regulatory review.',
    icon: ShieldCheck,
    tags: ['Evidence Vault', 'Automated Reporting', 'Audit Scheduling'],
  },
];

export default function AssetGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Governance Snapshot</p>
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
            <Link href="/assets" className="hover:text-cyan-300 transition">Assets</Link>
            <span>/</span>
            <span className="text-slate-300">Governance</span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">Asset Governance</h1>
          <p className="mt-3 max-w-2xl text-slate-300 leading-relaxed">
            Enterprise-grade governance frameworks for digital, physical, and financial assets —
            classification, access control, audit readiness, and continuous compliance alignment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/hub/assessments"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Start Governance Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/assets/recovery" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-500/40 transition">
              Asset Recovery
            </Link>
          </div>
        </div>
      </section>

      {/* Governance Frameworks */}
      <section className="py-16 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Framework Coverage</p>
          <h2 className="text-2xl font-bold mb-8">Governance pillars</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {frameworks.map((fw) => {
              const Icon = fw.icon;
              return (
                <article key={fw.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/40 transition">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-300 flex-none">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{fw.title}</h3>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{fw.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {fw.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-0.5 text-xs text-slate-300">
                            {tag}
                          </span>
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

      {/* Readiness checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Audit Readiness</p>
            <h2 className="text-2xl font-bold mb-6">What governance-ready looks like</h2>
            <div className="space-y-3">
              {[
                'All assets inventoried with classification tier and owner assigned',
                'Access policies documented with RBAC roles and exception logs',
                'Evidence packages ready for SOC 2 and ISO 27001 auditors',
                'Change management log for all asset modifications in the last 12 months',
                'Quarterly risk review cadence with executive sign-off',
                'Recovery procedures tested and documented for critical asset classes',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-none mt-0.5" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
