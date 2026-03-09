import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, FileText, Phone, Shield } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Incident Response | SOC | Hub | GEM Cyber',
  description: 'GEM CYBER incident response — rapid containment, forensic investigation, and post-incident reporting with a <2 minute response SLA.',
};

const kpis = [
  { label: 'Response SLA',    value: '< 2 min' },
  { label: 'Cases Handled',   value: '1,200+' },
  { label: 'Avg Containment', value: '18 min' },
  { label: 'Reoccurrence',    value: '< 3%' },
];

const phases = [
  {
    phase: 'Detection',
    icon: AlertTriangle,
    sla: 'Immediate',
    description: 'Automated alert triage and analyst review triggered by SIEM correlation rules, EDR alerts, or client escalation.',
    actions: ['Alert correlation and deduplication', 'Severity classification (P1–P4)', 'Analyst assignment and acknowledgment'],
  },
  {
    phase: 'Containment',
    icon: Shield,
    sla: '< 18 minutes',
    description: 'Isolate affected systems, block threat vectors, and preserve evidence before lateral movement occurs.',
    actions: ['Network segmentation', 'Endpoint isolation', 'Credential rotation', 'Evidence preservation'],
  },
  {
    phase: 'Investigation',
    icon: FileText,
    sla: 'Within 4 hours',
    description: 'Digital forensics and root-cause analysis to determine the full scope, entry point, and timeline of the incident.',
    actions: ['Log correlation and forensic imaging', 'Threat actor TTPs mapping', 'Blast radius assessment', 'IOC extraction'],
  },
  {
    phase: 'Recovery',
    icon: Clock,
    sla: 'Per recovery plan',
    description: 'Controlled restoration of affected systems and services with validation checks and monitoring heightened.',
    actions: ['System rebuild or restore', 'Control validation', 'Monitoring intensification', 'Stakeholder communications'],
  },
  {
    phase: 'Post-Incident Report',
    icon: FileText,
    sla: 'Within 72 hours',
    description: 'Full incident report covering timeline, root cause, impact, and remediation recommendations for leadership.',
    actions: ['Executive summary', 'Technical timeline', 'Gap identification', 'Prevention recommendations'],
  },
];

const retainerItems = [
  '24/7 dedicated analyst hotline',
  'Pre-scoped incident response agreement',
  'Priority queue across all severity levels',
  'Preserved evidence and audit-ready documentation',
  'Legal and insurance liaison support',
  'Tabletop exercise for your response team',
];

export default function IncidentResponsePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Incident Response Snapshot</p>
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
            <Link href="/hub/soc" className="hover:text-cyan-300 transition">SOC</Link>
            <span>/</span>
            <span className="text-slate-300">Incident Response</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">Incident Response</h1>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Rapid containment and remediation with a sub-2-minute response SLA, full digital forensics,
                and audit-ready post-incident reporting. Available 24/7.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950"
                >
                  Report an Active Incident
                  <AlertTriangle className="h-4 w-4" />
                </Link>
                <Link href="/hub/assessments" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-500/40 transition">
                  Request IR Retainer
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-sm font-semibold text-red-400">Active Incident Hotline</span>
              </div>
              <p className="text-sm text-slate-300 mb-3">
                For active security incidents, contact the GEM CYBER 24/7 incident response hotline immediately.
                Do not wait. Early containment dramatically reduces impact.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition">
                Contact IR Team Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Response phases */}
      <section className="py-16 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Response Methodology</p>
          <h2 className="text-2xl font-bold mb-8">Five-phase response process</h2>
          <div className="space-y-4">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <article key={phase.phase} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/30 transition">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">Phase {i + 1}</p>
                        <p className="font-semibold text-sm">{phase.phase}</p>
                        <span className="text-xs text-cyan-400 font-medium">{phase.sla}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-300 leading-relaxed mb-3">{phase.description}</p>
                      <div className="grid sm:grid-cols-2 gap-1.5">
                        {phase.actions.map((action) => (
                          <div key={action} className="flex gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500/60 flex-none mt-0.5" />
                            {action}
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

      {/* IR Retainer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Retainer Program</p>
              <h2 className="text-2xl font-bold mb-4">Be ready before an incident happens</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Organizations with a pre-scoped IR retainer contain incidents 60% faster and
                reduce average costs by 40%. Secure your retainer before you need it.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Request IR Retainer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm font-semibold text-slate-200 mb-4">Retainer includes:</p>
              <ul className="space-y-3">
                {retainerItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-none mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
