import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, Search, Shield, FileText } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Asset Recovery',
  description: 'Forensic-level tracking and recovery of high-value corporate assets across jurisdictions.',
};

const kpis = [
  { label: 'Value Recovered',  value: '$12M+' },
  { label: 'Cases Closed',     value: '340+' },
  { label: 'Countries Active', value: '24+' },
  { label: 'Recovery Rate',    value: '94%' },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Forensics',
    description: 'Comprehensive asset tracing using digital forensics, open-source intelligence, and financial data analysis.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Jurisdictional Coordination',
    description: 'Legal and law enforcement liaison across international jurisdictions with full chain-of-custody documentation.',
    icon: Globe,
  },
  {
    step: '03',
    title: 'Secure Recovery',
    description: 'Controlled asset transfer with cryptographic verification, audit logging, and final delivery reporting.',
    icon: Shield,
  },
  {
    step: '04',
    title: 'Post-Recovery Audit',
    description: 'Complete evidence packaging for litigation support, regulatory reporting, and insurance claims.',
    icon: FileText,
  },
];

const assetClasses = [
  { label: 'Cryptocurrency & Digital Assets', desc: 'Blockchain tracing, wallet forensics, and exchange coordination.' },
  { label: 'Corporate Intellectual Property', desc: 'Trade secret theft, data exfiltration, and IP recovery operations.' },
  { label: 'Financial Instruments', desc: 'Fraudulent transfer recovery, wire fraud investigation, and account tracing.' },
  { label: 'Physical High-Value Assets', desc: 'Corporate equipment, real estate holdings, and physical inventory recovery.' },
];

export default function AssetRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Recovery Operations Snapshot</p>
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
            <span className="text-slate-300">Recovery</span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">Asset Recovery Operations</h1>
          <p className="mt-3 max-w-2xl text-slate-300 leading-relaxed">
            Forensic-level tracking and recovery of high-value corporate assets — digital, financial,
            and physical — across international jurisdictions with full legal coordination.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Open a Recovery Case
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/assets/governance" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-500/40 transition">
              Asset Governance
            </Link>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-16 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Recovery Methodology</p>
          <h2 className="text-2xl font-bold mb-8">Four-phase recovery process</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((phase) => {
              const Icon = phase.icon;
              return (
                <article key={phase.step} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-cyan-500/40 font-mono">{phase.step}</span>
                    <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-2 text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{phase.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{phase.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Coverage</p>
          <h2 className="text-2xl font-bold mb-6">Asset classes we recover</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {assetClasses.map((ac) => (
              <div key={ac.label} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-none mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm">{ac.label}</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{ac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
