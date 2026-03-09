import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardList, FileSearch, ShieldCheck, TrendingUp } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Security Assessments | Hub | GEM Cyber',
  description: 'GEM CYBER security assessment programs — risk baseline, compliance gap analysis, and architecture review.',
};

const kpis = [
  { label: 'Assessments Completed', value: '340+' },
  { label: 'Avg Risk Reduction',    value: '67%' },
  { label: 'Time to Report',        value: '5 days' },
  { label: 'Findings Remediated',   value: '94%' },
];

const assessmentTypes = [
  {
    title: 'Security Risk Baseline',
    description: 'Comprehensive risk posture assessment covering threat exposure, control gaps, and vulnerability surface across your environment.',
    duration: '3–5 days',
    deliverables: ['Executive risk report', 'Control gap matrix', 'Prioritized remediation roadmap', 'Attack surface summary'],
    icon: ShieldCheck,
  },
  {
    title: 'Compliance Gap Analysis',
    description: 'Detailed gap assessment against target frameworks — SOC 2, CMMC 2.0, NIST SP 800-171, ISO 27001, or FedRAMP.',
    duration: '5–10 days',
    deliverables: ['Framework gap matrix', 'Evidence inventory', 'Remediation workplan', 'Audit readiness score'],
    icon: FileSearch,
  },
  {
    title: 'Architecture Review',
    description: 'Technical review of security architecture covering network segmentation, identity, endpoint, cloud posture, and data flows.',
    duration: '5–7 days',
    deliverables: ['Architecture findings report', 'Threat model diagram', 'Design recommendations', 'Risk-rated findings list'],
    icon: ClipboardList,
  },
  {
    title: 'Continuous Assessment Program',
    description: 'Ongoing security posture monitoring with quarterly deep-dives, control drift detection, and executive updates.',
    duration: 'Ongoing / Quarterly',
    deliverables: ['Quarterly posture report', 'Control drift alerts', 'Trend analysis', 'Executive dashboard access'],
    icon: TrendingUp,
  },
];

const process = [
  { step: '01', label: 'Scoping Call', desc: 'Define environment, objectives, and framework targets.' },
  { step: '02', label: 'Data Collection', desc: 'Secure collection of configurations, logs, and policy documentation.' },
  { step: '03', label: 'Analysis', desc: 'Expert analyst review and risk rating of all findings.' },
  { step: '04', label: 'Report Delivery', desc: 'Executive and technical report with prioritized roadmap.' },
  { step: '05', label: 'Remediation Support', desc: 'Optional hands-on support to address identified gaps.' },
];

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Assessment Program Snapshot</p>
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
            <span className="text-slate-300">Assessments</span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">Security Assessments</h1>
          <p className="mt-3 max-w-2xl text-slate-300 leading-relaxed">
            Know your risk. Fix what matters. GEM CYBER assessments provide a clear, prioritized view
            of your security posture with expert-led analysis and actionable remediation guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Schedule Your Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/hub/compliance" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-500/40 transition">
              Compliance Operations
            </Link>
          </div>
        </div>
      </section>

      {/* Assessment types */}
      <section className="py-16 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Program Types</p>
          <h2 className="text-2xl font-bold mb-8">Choose your assessment program</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {assessmentTypes.map((at) => {
              const Icon = at.icon;
              return (
                <article key={at.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/40 transition">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-300 flex-none">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold">{at.title}</h3>
                        <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-0.5 text-xs text-slate-400 whitespace-nowrap">
                          {at.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{at.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 ml-0 md:ml-14">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Deliverables</p>
                    <ul className="space-y-1.5">
                      {at.deliverables.map((d) => (
                        <li key={d} className="flex gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-none mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">How It Works</p>
          <h2 className="text-2xl font-bold mb-8">Assessment process</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p) => (
              <div key={p.step} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <span className="text-2xl font-bold text-cyan-500/40 font-mono">{p.step}</span>
                <h3 className="font-semibold mt-2 mb-1">{p.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950"
            >
              Schedule Your Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
